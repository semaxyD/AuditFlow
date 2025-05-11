import { Module } from '@nestjs/common';
import { EvaluationService } from './evaluation.service';
import { EvaluationController } from './evaluation.controller';
import { QueryFilterService } from '@data-access/src/components/query-manager/query-filter.service';
import { QueryManagerService } from '@data-access/src/components/query-manager/query-manager.service';

@Module({
    imports: [],
    controllers: [EvaluationController],
    providers: [EvaluationService, QueryFilterService, QueryManagerService],
})

export class EvaluationModule {}