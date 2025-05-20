import { Body, Controller, Get, Param, ParseIntPipe, Post, Put, UseGuards, Delete } from '@nestjs/common';
import { JwtAuthGuard } from '../../Middleware/Auth/jwt-auth.guard';
import { RolesGuard } from '../../Middleware/Auth/roles.guard';
import { AuditFrequencyGuard } from 'src/components/Middleware/Auth/auditFrecuency.guard';
import { Roles } from '../../Middleware/decorators/roles.decorator';
import { CurrentUser } from 'src/components/Middleware/decorators/current-user.decorator';
import { CreateEvaluationDto } from './evaluation.dto';
import { EvaluationSubmissionDto } from './evaluation-submission.dto';
import { EvaluationService } from './evaluation.service';
import { ReportEvaluationService } from '../../Reports-Evaluation/evaluation/report-evaluation.service'

// Enum local, solo usado en este controller
enum AuditorType {
  Interno = 1,
  Externo = 2,
}

@Controller('auditory')
export class EvaluationController {
  constructor(private readonly service: EvaluationService, private readonly reportEvaluationService: ReportEvaluationService) {
  }

  //ENDPOINTS COMPARTIDOS ENTRE LA HU008 y HU010

  //Endpoint para obtener que normas estas disponibles para auditar
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles('auditor_interno', 'auditor_externo')
  @Get('allNorms')
  getIdByNorms() {
    return this.service.getIdByNorm();
  }

  //Endpoint para obtener las preguntas de la norma seleccionada del endpoint anterior
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles('auditor_interno', 'auditor_externo')
  @Get('questions/:normId')
  getQuestionsByNorm(@Param('normId') normId: string) {
    return this.service.getQuestionsByNorm(Number(normId));
  }


  //ENDPOINTS ESPECIFICOS ENTRE LA HU008 y HU010

  //Endpoint especifico para guardar de la HU008 - auditor interno
  @UseGuards(JwtAuthGuard, RolesGuard, AuditFrequencyGuard)
  @Roles('auditor_interno')
  @Post('/:normId/save')
  submitEvaluation(@Param('normId', ParseIntPipe) normIdSelect: number, @Body() body: CreateEvaluationDto, @CurrentUser() user: { id: number },) {
    const type = AuditorType.Interno;
    return this.service.submitEvaluation(normIdSelect, 0, body, user.id, type);
  }

  //Endpoint para que el auditor externo escoja la compañia a la cual va a auditar(Recordemos que solo es para el externo ya que este tiene varias empresas)
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles('auditor_externo')
  @Get('myCompanies')
  getMyCompanies(
    @CurrentUser() user: { id: number }) {
    return this.reportEvaluationService.getExternalAuditorCompaniesById(user.id);
  }

  //Endpoint especifico para guardar de la HU010
  @UseGuards(JwtAuthGuard, RolesGuard, AuditFrequencyGuard)
  @Roles('auditor_externo')
  @Post('/:normId/:companyId/saveExternal')
  submitExternalEvaluation(@Param('normId', ParseIntPipe) normIdSelect: number, @Param('companyId', ParseIntPipe) companyIdSelect: number, @Body() body: CreateEvaluationDto, @CurrentUser() user: { id: number }) {
    const type = AuditorType.Externo;
    return this.service.submitEvaluation(normIdSelect, companyIdSelect, body, user.id, type);
  }


  //Endpoint para obtener la version actual de la evaluacion
  @Put(':evaluationId')
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles('auditor_interno')
  updateEvaluation(
    @Param('evaluationId', ParseIntPipe) evaluationId: number,
    @Body() body: EvaluationSubmissionDto,
    @CurrentUser() user: { id: number },
  ) {
    return this.service.updateEvaluation(evaluationId, body, user.id);
  }

  // Endpoint para listar evaluaciones creadas por el auditor interno
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles('auditor_interno')
  @Get('assigned')
  getAssignedEvaluations(@CurrentUser() user: { id: number }) {
    return this.service.getEvaluationsByCreator(user.id);
  }

  //HU013 - Endpoint para eliminar una evaluacion especifica
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles('auditor_interno', 'auditor_externo')
  @Delete('/delete/evaluation/:evaluationId') // Ruta para eliminar una evaluacion
  async deleteEvaluationVersion(@Param('evaluationId', ParseIntPipe) evaluationId: number,@CurrentUser() user: { id: number }) {
    return this.service.deleteEvaluation(evaluationId,user.id);
  }
  



}
