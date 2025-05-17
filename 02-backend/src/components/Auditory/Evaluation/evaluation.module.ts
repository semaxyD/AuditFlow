import { Module } from '@nestjs/common';
import { EvaluationService } from './evaluation.service';
import { EvaluationController } from './evaluation.controller';
import { ReportEvaluationModule } from 'src/components/Reports-Evaluation/evaluation/report-evaluation.module';
import { QueryFilterModule, QueryFilterService } from '../../../imports-barrel';
@Module({
  imports: [QueryFilterModule, ReportEvaluationModule],
  controllers: [EvaluationController],
  providers: [EvaluationService, QueryFilterService],
})
export class AuditoryEvaluationModule {}
