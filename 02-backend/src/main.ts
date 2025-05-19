import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { QueryLoaderService } from './imports-barrel';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors(); 

  const queryLoaderService = app.get(QueryLoaderService);
  await queryLoaderService.onModuleInit;

  await app.listen(3001);
  console.log(Buffer.from(process.env.DATABASE_URL || '').toString('hex'));
}
bootstrap();
