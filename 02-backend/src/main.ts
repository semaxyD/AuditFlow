import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { AppDataSource } from '../../03-data-access/src/components/query-manager/data-source'; // ajusta ruta si es necesario

async function bootstrap() {

  try {
    await AppDataSource.initialize();
    console.log('✅ Conectado a la base de datos correctamente');
  } catch (error) {
    console.error('❌ Error al conectar con la base de datos:', error);
  }
  const app = await NestFactory.create(AppModule);

  
  app.enableCors({
    origin: 'http://localhost:3000', 
    credentials: true, 
  });
  await app.listen(3001);
}
bootstrap();