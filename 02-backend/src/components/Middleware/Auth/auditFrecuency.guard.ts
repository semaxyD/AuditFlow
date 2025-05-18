import {
  Injectable,
  CanActivate,
  ExecutionContext,
  ForbiddenException,
} from '@nestjs/common';
import { Request } from 'express';
import { QueryFilterService } from '../../../imports-barrel';
import { JwtPayloadUser } from './jwt-payload-user';

@Injectable()
export class AuditFrequencyGuard implements CanActivate {
  constructor(
    private readonly queryFilter: QueryFilterService,
  ) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const request: Request = context.switchToHttp().getRequest();
    const user = request.user as JwtPayloadUser;


    if (!user?.id) {
      throw new ForbiddenException('Usuario no autenticado');
    }

    const normId = parseInt(request.params?.normId);
    if (!normId) {
      throw new ForbiddenException('Falta el parámetro normId en la ruta');
    }

    let companyId: number;

    if (request.params?.companyId) {
      // Auditor externo
      companyId = parseInt(request.params.companyId);
    } else {
      // Auditor interno
      const result = await this.queryFilter.filterQuery(
        'getUserCompanyById',
        'user-queries',
        user.id
      );

      if (!result) {
        throw new ForbiddenException('No se pudo obtener la empresa del auditor interno');
      }

      companyId = result;
    }

    // Obtener frecuencia mínima configurada
    const config = await this.queryFilter.filterQuery(
      'getFrequencyConfigByUserCompanyNorm',
      'evaluation-frecuency-queries',
      {
        userId: user.id,
        companyId,
        normId,
      },
    );

    const minDaysBetweenEvaluations = config?.frequency_days;

    // Si no hay una frecuencia mínima configurada, no se aplica restricción
    if (!config || typeof config.frequency_days !== 'number') {
      return true;
    }

    // Obtener última evaluación
    const lastEval = await this.queryFilter.filterQuery(
      'getLastEvaluationByUserCompanyNorm',
      'evaluation-frecuency-queries',
      {
        userId: user.id,
        companyId,
        normId,
      },
    );

    if (lastEval && lastEval.created_at) {
      const now = new Date();
      const lastDate = new Date(lastEval.created_at);
      const diffDays = (now.getTime() - lastDate.getTime()) / (1000 * 60 * 60 * 24);

      if (diffDays < minDaysBetweenEvaluations) {
        const remaining = Math.ceil(minDaysBetweenEvaluations - diffDays);
        throw new ForbiddenException(
          `Debes esperar ${remaining} día(s) para volver a evaluar esta norma en esta empresa.`
        );
      }
    }

    // Validación extra de la HU010: auditores externos solo pueden evaluar una vez a una empresa para una norma en especifico.
    if (request.params?.companyId) {
      if (lastEval) {
        throw new ForbiddenException(
          'Ya has realizado una evaluación como auditor externo para esta empresa y norma. No puedes crear otra.'
        );
      }
    }

    return true;
  }
}
