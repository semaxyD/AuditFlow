import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { QueryLoaderService } from './imports-barrel';
import { WINSTON_MODULE_NEST_PROVIDER } from 'nest-winston';
import { LoggingInterceptor } from './components/Middleware/log/Logging.interceptor';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    bufferLogs: true,
  });
  app.enableCors(); 

  const queryLoaderService = app.get(QueryLoaderService);
  await queryLoaderService.onModuleInit;

  app.useGlobalInterceptors(new LoggingInterceptor(app.get(WINSTON_MODULE_NEST_PROVIDER)));

  app.useLogger(app.get(WINSTON_MODULE_NEST_PROVIDER));

  await app.listen(3001, '0.0.0.0');
}
bootstrap();
