import {
  Injectable,
  CanActivate,
  ExecutionContext,
  UnauthorizedException,
  ForbiddenException,
  Inject,
  Logger,
  LoggerService
} from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { ROLES_KEY } from '../decorators/roles.decorator';
import { AccessAttemptService } from './access-attempt.service';
import { WINSTON_MODULE_NEST_PROVIDER } from 'nest-winston';

@Injectable()
export class RolesGuard implements CanActivate {
  constructor(
    private reflector: Reflector,
    private accessAttemptService: AccessAttemptService,
    @Inject(WINSTON_MODULE_NEST_PROVIDER)
    private readonly logger: LoggerService,
  ) {
    this.logger = new Logger(RolesGuard.name);
  }

  canActivate(context: ExecutionContext): boolean {
    const requiredRoles = this.reflector.getAllAndOverride<string[]>(
      ROLES_KEY,
      [context.getHandler(), context.getClass()],
    );

    if (!requiredRoles) return true;

    const request = context.switchToHttp().getRequest();
    const user = request.user;

    if (!user?.role) {
      this.logger.warn(`Acceso denegado: usuario sin rol definido. UserID: ${user?.id}`);
      throw new UnauthorizedException("No tienes permiso para acceder a este recurso, role vacío");
    }

    //Verifica si el usuario está temporalmente bloqueado
    if (this.accessAttemptService.isBlocked(user.id)) {
      const remainingMs = this.accessAttemptService.getRemainingLockTime(user.id);
      const seconds = Math.floor(remainingMs / 1000);
      const minutes = Math.floor(seconds / 60);
      const sec = seconds % 60;
      const formattedTime = `${minutes}m ${sec}s`;

      this.logger.warn(`Usuario bloqueado: ID ${user.id} - Tiempo restante: ${formattedTime}`);
      throw new ForbiddenException(
        `Has sido bloqueado temporalmente por múltiples intentos fallidos. Intenta nuevamente en ${formattedTime}.`
      );
    }

    const hasAccess = requiredRoles.includes(user.role);

    if (!hasAccess) {
      //No tiene permisos → registramos intento fallido
      this.accessAttemptService.registerFailedAccess(user.id);

      
      const data = this.accessAttemptService.getAttemptData(user.id);
      const attemptsMade = data?.count || 0;
      const attemptsLeft = this.accessAttemptService.ATTEMPT_LIMIT - attemptsMade;

      this.logger.warn(`Acceso denegado: rol insuficiente. UserID: ${user.id}, Rol: ${user.role}, Intentos restantes: ${attemptsLeft}`);

      throw new ForbiddenException(
        `No tienes permisos para acceder a este recurso. Te quedan ${attemptsLeft} intento${attemptsLeft === 1 ? '' : 's'} antes de un bloqueo temporal.`
      );
    }

    //Tiene permisos → limpiamos intentos fallidos anteriores
    this.logger.log(`Acceso permitido. UserID: ${user.id}, Rol: ${user.role}`);
    this.accessAttemptService.resetAttempts(user.id);

    return true;
  }
}
