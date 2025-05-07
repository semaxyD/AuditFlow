import { Body, Controller, Get, Param, Post, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from '../../Shared/Auth/jwt-auth.guard';
import { RolesGuard } from '../../Shared/Auth/roles.guard';
import { Roles } from '../../Shared/decorators/roles.decorator';
import { CurrentUser } from 'src/components/Shared/decorators/current-user.decorator';
import { CreateEvaluationDto } from './evaluation.dto';
import { EvaluationService } from './evaluation.service';

@Controller('auditory')
export class EvaluationController{
    constructor(private readonly evaluationService: EvaluationService) {
    }

    @UseGuards(JwtAuthGuard, RolesGuard)
    @Roles('auditor_interno')
    @Get('questions/:normId')
    getQuestionsByNorm(@Param('normId') normId: string) {
      return this.evaluationService.getQuestionsByNorm(Number(normId));
    }

    @UseGuards(JwtAuthGuard,RolesGuard)
    @Roles('auditor_interno')
    @Post('/save')
    submitEvaluation(@Body() body: CreateEvaluationDto, @CurrentUser() user: {id: number},){
        return this.evaluationService.submitEvaluation(body,user.id);
    }
}
