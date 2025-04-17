import { NestFactory } from '@nestjs/core';
import { UserModule } from './components/user-management/user/user.module';

async function bootstrap() {
  const app = await NestFactory.create(UserModule);
  app.enableCors(); 
  await app.listen(3001);
}
bootstrap();