export type UserRole = 'administrador' | 'auditor_interno' | 'auditor_externo' | 'empresa_cliente';

export interface User {
  id?: string;
  name: string;
  email: string;
  password: string;
  role: UserRole;
}

export interface RegisterFormData {
  name: string;
  email: string;
  password: string;
  role: UserRole;
} 