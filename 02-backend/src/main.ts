import { NestFactory } from '@nestjs/core';
import { UserModule } from './components/User-management/user/user.module';
import { EvaluationModule } from './components/Reports-Evaluation/evaluation/evaluation.module';
import { AuditoryEvaluationModule } from './components/Auditory/Evaluation/evaluation.module';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors(); 
  await app.listen(3001);
}
bootstrap();
