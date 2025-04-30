import { Module } from '@nestjs/common';
import { EvaluationService } from './evaluation.service';
import { EvaluationController } from './evaluation.controller';
import { QueryFilterModule, QueryFilterService, QueryManagerService } from '../../../imports-barrel';


@Module({
    imports: [QueryFilterModule],
    controllers: [EvaluationController],
    providers: [EvaluationService, QueryFilterService, QueryManagerService],
})

export class EvaluationModule {}