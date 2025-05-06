import { Controller, Get, Param, ParseIntPipe, UseGuards } from '@nestjs/common';
import { EvaluationService } from './evaluation.service';
import { Roles } from '../../Shared/decorators/roles.decorator'
import { RolesGuard } from '../../Shared/Auth/roles.guard'
import { JwtAuthGuard } from '../../Shared/Auth/jwt-auth.guard';

@Controller('reports-evaluation') // ruta base: http://localhost:3001/reports-evaluation
export class EvaluationController {
  constructor(private readonly service: EvaluationService) {}

  // Endpoints Hu015
  @UseGuards(JwtAuthGuard,RolesGuard)
  @Roles('admin')
  @Get('companies')
  getCompanies() {
    return this.service.getCompanies();
  }

  @UseGuards(JwtAuthGuard,RolesGuard)
  @Roles('admin')
  @Get(':companyId/evaluations')
  getEvaluations(@Param('companyId',ParseIntPipe) companyId: number) {
    return this.service.getEvaluationsByCompany(companyId);
  }

  @UseGuards(JwtAuthGuard,RolesGuard)
  @Roles('admin')
  @Get('evaluations/:evaluationId/detail')
  getEvaluationDetail(@Param('evaluationId',ParseIntPipe) evaluationId: number) {
    return this.service.getEvaluationDetail(evaluationId);
  }

  @UseGuards(JwtAuthGuard,RolesGuard)
  @Roles('admin')
  @Get(':evaluationId/evolution')
  getEvolution(@Param('evaluationId',ParseIntPipe) evaluationId: number) {
    return this.service.getEvolutionEvaluation(evaluationId);
  }
}
