import { forwardRef, Module } from '@nestjs/common';
import { ReportEvaluationService } from './report-evaluation.service';
import { ReportEvaluationController } from './report-evaluation.controller';
import { QueryFilterModule, QueryFilterService } from '../../../imports-barrel';
import { AuthModule } from 'src/components/Middleware/Auth/auth.module';

@Module({
  imports: [QueryFilterModule, forwardRef (()=> AuthModule)],
  controllers: [ReportEvaluationController],
  exports: [ReportEvaluationService],
  providers: [ReportEvaluationService, QueryFilterService],
})
export class ReportEvaluationModule {}
