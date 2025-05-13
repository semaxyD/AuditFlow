import { Module } from '@nestjs/common';
import { ReportEvaluationService } from './report-evaluation.service';
import { ReportEvaluationController } from './report-evaluation.controller';
import { QueryFilterModule, QueryFilterService } from '../../../imports-barrel';


@Module({
    imports: [QueryFilterModule],
    controllers: [ReportEvaluationController],
    exports: [ReportEvaluationService],
    providers: [ReportEvaluationService, QueryFilterService],
})

export class ReportEvaluationModule {}