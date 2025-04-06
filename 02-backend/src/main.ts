// Este archivo es el punto de entrada.
// Aquí se inicializa la aplicación, se conecta a la base de datos y 
// se configura el servidor para escuchar en un puerto específico.

import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { AppDataSource } from '../../03-data-access/src/components/query-manager/data-source'; 

async function bootstrap() {
  // Intenta conectar con la base de datos
  try {
    await AppDataSource.initialize();
    console.log('Conectado a la base de datos correctamente');
  } catch (error) {
    console.error('Error al conectar con la base de datos:', error);
  }

  // Crea la aplicación NestJS
  const app = await NestFactory.create(AppModule);

  // Permite peticiones desde el frontend (localhost:3000)
  app.enableCors({
    origin: 'http://localhost:3000',
    credentials: true,
  });

  // Inicia el servidor en el puerto 3001
  await app.listen(3001);
}

bootstrap();
