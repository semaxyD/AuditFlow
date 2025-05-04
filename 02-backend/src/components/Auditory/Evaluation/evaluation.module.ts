import { Module } from '@nestjs/common';
import { EvaluationService } from './evaluation.service';
import { EvaluationController } from './evaluation.controller';
import { QueryFilterModule, QueryFilterService } from '../../../imports-barrel';

@Module({
    imports: [QueryFilterModule],
    controllers: [EvaluationController],
    providers: [EvaluationService, QueryFilterService],
})

export class AuditoryEvaluationModule {}