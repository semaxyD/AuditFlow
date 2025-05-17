import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Usuario } from '../../03-data-access/src/components/system-schema/user.entity'; 
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './components/User-management/user.module';

@Module({
  imports: [
    // Configuración de la conexión a PostgreSQL
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      // Los siguientes tambien los cambiamos en datasource de data-access
      username: 'postgres', // IMPORTANTE: Usuario que se puso al configurar PostgreSQL, por defecto es 'postgres'
      password: 'miguel123', // IMPORTANTE: Contraseña que se puso al configurar PostgreSQL, esta es la mia
      database: 'auditflow_dev', // IMPORTANTE: El nombre de la bd debe ser exxactamente igual
      entities: [Usuario], // Entidades que usará TypeORM
      synchronize: true, // Crea tablas automáticamente (solo para desarrollo)
    }),
    UserModule, 
  ],
  controllers: [AppController], 
  providers: [AppService], 
})
export class AppModule {}
