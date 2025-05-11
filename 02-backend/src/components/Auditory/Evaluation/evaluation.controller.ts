import { Body, Controller, Post, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from '../../Shared/Auth/jwt-auth.guard';
import { RolesGuard } from '../../Shared/Auth/roles.guard';
import { Roles } from '../../Shared/Auth/roles.decorator';
import { CreateEvaluationDto } from './evaluation.dto';
import { EvaluationService } from './evaluation.service';

@Controller('auditory')
export class EvaluationController{
    constructor(private readonly evaluationService: EvaluationService) {
    }

    @UseGuards(JwtAuthGuard,RolesGuard)
    @Roles('auditor_interno')
    @Post('/save')
    submitEvaluation(@Body() body: CreateEvaluationDto){
        return this.evaluationService.submitEvaluation(body);
    }
}
