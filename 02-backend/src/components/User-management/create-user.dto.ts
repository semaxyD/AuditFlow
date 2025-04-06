import { IsEmail, IsEnum, IsNotEmpty, MinLength } from 'class-validator';

export type UserRole = 'administrador' | 'auditor_interno' | 'auditor_externo' | 'empresa_cliente';

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
