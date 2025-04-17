import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './components/User-management/user/user.module';
import { EvaluationModule } from './components/Reports-Evaluation/evaluation/evaluation.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    UserModule,
    EvaluationModule,
    ConfigModule.forRoot({
      isGlobal: true,
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
