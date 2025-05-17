export type UserRole = 'administrador' | 'auditor_interno' | 'auditor_externo' | 'empresa_cliente';
export declare class Usuario {
    id: number;
    nombre: string;
    correo: string;
    contrasena: string;
    rol: UserRole;
}
