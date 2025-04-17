import { IsEmail, IsEnum, IsNotEmpty, MinLength } from 'class-validator';

// Tipos válidos de roles de usuario
export type UserRole = 'administrador' | 'auditor_interno' | 'auditor_externo' | 'empresa_cliente';

// Este DTO define qué datos debe tener un usuario al registrarse. DTO - Data Transfer Object 
export class CreateUserDto {
  @IsNotEmpty() 
  nombre: string;

  @IsEmail() 
  correo: string;

  @MinLength(6) 
  contrasena: string;

  @IsEnum(['administrador', 'auditor_interno', 'auditor_externo', 'empresa_cliente'], {
    message: 'Rol inválido', 
  })
  rol: UserRole;
}
