import 'reflect-metadata';
import { DataSource } from 'typeorm';
import { Usuario } from '../system-schema/user.entity';

// Configuración de la conexión a la base de datos con TypeORM
export const AppDataSource = new DataSource({
  type: 'postgres',             // Tipo de base de datos
  host: 'localhost',            
  port: 5432,     
  // Los siguientes tambien los cambiamos en appmodule de backend          
  username: 'postgres',         // IMPORTANTE: Usuario que se puso al configurar PostgreSQL, por defecto es 'postgres'
  password: 'miguel123',        // IMPORTANTE: Contraseña que se puso al configurar PostgreSQL, esta es la mia
  database: 'auditflow_dev',    // IMPORTANTE: El nombre de la bd debe ser exactamente igual
  synchronize: true,            
  logging: true,                
  entities: [Usuario],          // Entidades que usa TypeORM para mapear las tablas
});
