import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

export type UserRole = 'administrador' | 'auditor_interno' | 'auditor_externo' | 'empresa_cliente';

@Entity('usuarios')
export class Usuario {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  nombre!: string;

  @Column({ unique: true })
  correo!: string;

  @Column()
  contrasena!: string;

  @Column({
    type: 'enum',
    enum: ['administrador', 'auditor_interno', 'auditor_externo', 'empresa_cliente'],
  })
  rol!: UserRole;
}
