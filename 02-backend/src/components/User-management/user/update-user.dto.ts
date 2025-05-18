import { IsOptional, IsEmail, IsString, IsEnum } from 'class-validator';

export class UpdateUserDto {
  @IsOptional()
  @IsString()
  name?: string;

  @IsOptional()
  @IsEmail()
  email?: string;

  @IsOptional()
  @IsEnum(['admin', 'auditor_interno', 'auditor_externo'])
  role?: string;
}
