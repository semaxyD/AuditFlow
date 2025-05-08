import { Body, Controller, Get, Param, Post, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from '../../Middleware/Auth/jwt-auth.guard';
import { RolesGuard } from '../../Middleware/Auth/roles.guard';
import { Roles } from '../../Middleware/decorators/roles.decorator';
import { CurrentUser } from 'src/components/Middleware/decorators/current-user.decorator';
import { CreateEvaluationDto } from './evaluation.dto';
import { EvaluationService } from './evaluation.service';

@Controller('auditory')
export class EvaluationController{
    constructor(private readonly evaluationService: EvaluationService) {
    }

    type: number;

    @UseGuards(JwtAuthGuard, RolesGuard)
    @Roles('auditor_interno','auditor_externo')
    @Get('questions/:normId')
    getQuestionsByNorm(@Param('normId') normId: string) {
      return this.evaluationService.getQuestionsByNorm(Number(normId));
    }

    @UseGuards(JwtAuthGuard,RolesGuard)
    @Roles('auditor_interno')
    @Post('/save')
    submitEvaluation(@Body() body: CreateEvaluationDto, @CurrentUser() user: {id: number},){
      this.type = 1;
      return this.evaluationService.submitEvaluation(body,user.id,this.type);
    }

    @UseGuards(JwtAuthGuard,RolesGuard)
    @Roles('auditor_externo')
    @Post('/saveExternal')
    submitExternalEvaluation(@Body() body: CreateEvaluationDto, @CurrentUser() user: {id: number}) {
      this.type = 2;
      return this.evaluationService.submitEvaluation(body, user.id,this.type);
    }

}
