import { Controller, Get, Param } from '@nestjs/common';
import { EvaluationService } from './evaluation.service';

@Controller('reports-evaluation')
export class EvaluationController {
  constructor(private readonly service: EvaluationService) {}

  // Endpoints Hu015
  @Get('companies')
  getCompanies() {
    return this.service.getCompanies();
  }

  @Get(':companyId/evaluations')
  getEvaluations(@Param('companyId') companyId: string) {
    return this.service.getEvaluationsByCompany(companyId);
  }

  @Get('evaluations/:evaluationId/detail')
  getEvaluationDetail(@Param('evaluationId') evaluationId: string) {
    return this.service.getEvaluationDetail(evaluationId);
  }

  @Get(':companyId/evolution')
  getEvolution(@Param('companyId') companyId: string) {
    return this.service.getEvolutionEvaluation(companyId);
  }
}
