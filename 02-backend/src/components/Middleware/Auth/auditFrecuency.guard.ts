import {
  Injectable,
  CanActivate,
  ExecutionContext,
  ForbiddenException,
} from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { Request } from 'express';
import { QueryFilterService } from '../../../imports-barrel';
import { JwtPayloadUser } from './jwt-payload-user';

@Injectable()
export class AuditFrequencyGuard implements CanActivate {
  constructor(
    private reflector: Reflector,
    private readonly queryFilter: QueryFilterService,
  ) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const request: Request = context.switchToHttp().getRequest();
    const user = request.user as JwtPayloadUser;

    if (!user?.id) {
      throw new ForbiddenException('Usuario no autenticado');
    }

    // Extraer normId desde los params
    const normId = parseInt(request.params?.normId);
    if (!normId) {
      throw new ForbiddenException('Falta el parámetro normId en la ruta');
    }

    let companyId: number;

    // Auditor externo → companyId viene en los params
    if (request.params?.companyId) {
      companyId = parseInt(request.params.companyId);
    } else {
      // Auditor interno → hacer query con user.id para obtener companyId
      const company_id = await this.queryFilter.filterQuery(
        'getUserCompanyById',
        'user-queries',
        user.id,
      );
      if (!company_id === null) {
        throw new ForbiddenException('No se pudo obtener la empresa del auditor interno');
      }
      companyId = company_id;
    }

    // ⚠️ Aquí deberíamos consultar la tabla de configuración (parte 2)
    // y la última evaluación del auditor en esa empresa y norma.

    // Simulamos valores:
    const minDaysBetweenEvaluations = 90;

    const lastEval = await this.queryFilter.filterQuery(
      'getLastEvaluationByUserCompanyNorm',
      'evaluation-queries',
      { userId: user.id, companyId, normId },
    );

    if (lastEval && lastEval.created_at) {
      const now = new Date();
      const lastDate = new Date(lastEval.created_at);
      const diffDays = (now.getTime() - lastDate.getTime()) / (1000 * 60 * 60 * 24);

      if (diffDays < minDaysBetweenEvaluations) {
        const remaining = Math.ceil(minDaysBetweenEvaluations - diffDays);
        throw new ForbiddenException(
          `Debes esperar ${remaining} día(s) para volver a evaluar esta norma en esta empresa.`,
        );
      }
    }

    return true;
  }
}
