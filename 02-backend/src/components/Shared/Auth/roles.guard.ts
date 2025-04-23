import {
    Injectable,
    CanActivate,
    ExecutionContext,
  } from '@nestjs/common';
  import { Reflector } from '@nestjs/core';
  import { ROLES_KEY } from '../decorators/roles.decorator';
  
  @Injectable()
  export class RolesGuard implements CanActivate {
    constructor(private reflector: Reflector) {}
  
    canActivate(context: ExecutionContext): boolean {
      const requiredRoles = this.reflector.getAllAndOverride<string[]>(
        ROLES_KEY,
        [context.getHandler(), context.getClass()],
      );
  
      if (!requiredRoles) {
        return true; // Si no se especifican roles, se permite el acceso
      }
  
      const request = context.switchToHttp().getRequest();
      const user = request.user;

      if(!user || !user.role){
        return false;
      }
  
      // Verificamos si el usuario tiene uno de los roles requeridos
      return requiredRoles.includes(user?.role);
    }
  }
  