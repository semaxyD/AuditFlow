import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

// Tipos válidos para el rol del usuario
export type UserRole = 'administrador' | 'auditor_interno' | 'auditor_externo' | 'empresa_cliente';

// Define la tabla 'usuarios' en la base de datos
@Entity('usuarios')
export class Usuario {
  // ID autogenerado para cada usuario
  @PrimaryGeneratedColumn()
  id!: number;

  // Nombre del usuario
  @Column()
  nombre!: string;

  // Correo único del usuario
  @Column({ unique: true })
  correo!: string;

  // Contraseña del usuario
  @Column()
  contrasena!: string;

  // Rol del usuario (solo se aceptan los valores definidos en el enum)
  @Column({
    type: 'enum',
    enum: ['administrador', 'auditor_interno', 'auditor_externo', 'empresa_cliente'],
  })
  rol!: UserRole;
}
