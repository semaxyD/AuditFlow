import { ArrayNotEmpty, IsArray, IsEmail, IsEnum, IsInt, IsNotEmpty, MinLength, ValidateIf } from 'class-validator';

// Tipos válidos de roles de usuario
export type UserRole = 'admin' | 'auditor_interno' | 'auditor_externo';

// Este DTO define qué datos debe tener un usuario al registrarse. DTO - Data Transfer Object 
export class CreateUserDto {
  @IsNotEmpty() 
  nombre: string;

  @IsEmail() 
  correo: string;

  @MinLength(6) 
  contrasena: string;

  @IsEnum(['admin', 'auditor_interno', 'auditor_externo'], {
    message: 'Rol inválido', 
  })
  role: UserRole;

  @ValidateIf(o => o.role !== 'admin') // Solo auditores necesitan esto
  @IsArray()
  @ArrayNotEmpty()
  @IsInt({ each: true })
  companyIds: number[];
}
