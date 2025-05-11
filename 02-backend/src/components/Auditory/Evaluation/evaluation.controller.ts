import { Body, Controller, Get, Param, ParseIntPipe, Post, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from '../../Middleware/Auth/jwt-auth.guard';
import { RolesGuard } from '../../Middleware/Auth/roles.guard';
import { Roles } from '../../Middleware/decorators/roles.decorator';
import { CurrentUser } from 'src/components/Middleware/decorators/current-user.decorator';
import { CreateEvaluationDto } from './evaluation.dto';
import { EvaluationService } from './evaluation.service';
import { ReportEvaluationService } from '../../Reports-Evaluation/evaluation/report-evaluation.service'

// Enum local, solo usado en este controller
enum AuditorType {
  Interno = 1,
  Externo = 2,
}

@Controller('auditory')
export class EvaluationController{
    constructor(private readonly service: EvaluationService,private readonly reportEvaluationService: ReportEvaluationService) {
    }

    //ENDPOINTS COMPARTIDOS ENTRE LA HU008 y HU010

    //Endpoint para obtener que normas estas disponibles para auditar
    @UseGuards(JwtAuthGuard, RolesGuard)
    @Roles('auditor_interno','auditor_externo')
    @Get('allNorms')
    getIdByNorms() {
      return this.service.getIdByNorm();
    }

    //Endpoint para obtener las preguntas de la norma seleccionada del endpoint anterior
    @UseGuards(JwtAuthGuard, RolesGuard)
    @Roles('auditor_interno','auditor_externo')
    @Get('questions/:normId')
    getQuestionsByNorm(@Param('normId') normId: string) {
      return this.service.getQuestionsByNorm(Number(normId));
    }

    
    //ENDPOINTS ESPECIFICOS ENTRE LA HU008 y HU010

    //Endpoint especifico para guardar de la HU008 - auditor interno
    @UseGuards(JwtAuthGuard,RolesGuard)
    @Roles('auditor_interno')
    @Post('/save')
    submitEvaluation(@Body() body: CreateEvaluationDto, @CurrentUser() user: {id: number},){
      const type = AuditorType.Interno;
      return this.service.submitEvaluation(0,body,user.id,type);
    }

    //Endpoint para que el auditor externo escoja la compañia a la cual va a auditar(Recordemos que solo es para el externo ya que este tiene varias empresas)
    @UseGuards(JwtAuthGuard, RolesGuard)
    @Roles('auditor_externo')
    @Get('myCompanies')
    getMyCompanies(
      @CurrentUser() user: {id: number}) {
      return this.reportEvaluationService.getExternalAuditorCompaniesById(user.id);
    }

    //Endpoint especifico para guardar de la HU010
    @UseGuards(JwtAuthGuard,RolesGuard)
    @Roles('auditor_externo')
    @Post('/:companyId/saveExternal')
    submitExternalEvaluation(@Param('companyId',ParseIntPipe) companyIdSelect: number, @Body() body: CreateEvaluationDto, @CurrentUser() user: {id: number}){
      const type = AuditorType.Externo;
      return this.service.submitEvaluation(companyIdSelect,body, user.id,type);
    }

}
