import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './components/User-management/user/user.module';
import { ReportEvaluationModule } from './components/Reports-Evaluation/evaluation/report-evaluation.module';
import { AuditoryEvaluationModule } from './components/Auditory/Evaluation/evaluation.module'
import { ConfigModule } from '@nestjs/config';
import { QueryFilterModule } from './imports-barrel';
import { LoggerModule } from './components/Middleware/log/Logger.Module';

@Module({
  imports: [
    UserModule,
    ReportEvaluationModule,
    AuditoryEvaluationModule,
    QueryFilterModule,
    LoggerModule,
    ConfigModule.forRoot({
      isGlobal: true,
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
