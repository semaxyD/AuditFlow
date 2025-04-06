import 'reflect-metadata';
import { DataSource } from 'typeorm';
import { Usuario } from '../system-schema/user.entity';

export const AppDataSource = new DataSource({
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres', // user por defecto de PostgreSQL
  password: 'miguel123', // contraseña de postgres
  database: 'auditflow_dev',
  synchronize: true, // solo para desarrollo, no produccion
  logging: true,
  entities: [Usuario],
});
