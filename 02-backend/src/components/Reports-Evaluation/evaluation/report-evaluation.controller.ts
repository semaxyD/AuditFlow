import {
  Controller,
  Get,
  Param,
  ParseIntPipe,
  UseGuards,
  VersioningType,
} from '@nestjs/common';
import { ReportEvaluationService } from './report-evaluation.service';
import { Roles } from '../../Middleware/decorators/roles.decorator';
import { RolesGuard } from '../../Middleware/Auth/roles.guard';
import { JwtAuthGuard } from '../../Middleware/Auth/jwt-auth.guard';
import { CurrentUser } from 'src/components/Middleware/decorators/current-user.decorator';

@Controller('reports-evaluation') // ruta base: http://localhost:3001/reports-evaluation
export class ReportEvaluationController {
  constructor(private readonly service: ReportEvaluationService) {}

  // Endpoints Hu015
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles('admin')
  @Get('companies')
  getCompanies() {
    return this.service.getCompanies();
  }

  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles('admin')
  @Get(':companyId/evaluations')
  getEvaluations(@Param('companyId', ParseIntPipe) companyId: number) {
    return this.service.getEvaluationsByCompany(companyId);
  }

  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles('admin')
  @Get(':evaluationId/version/:versionId')
  getEvaluationDetail(
    @Param('evaluationId', ParseIntPipe) evaluationId: number,
    @Param('versionId', ParseIntPipe) versionId: number,
  ) {
    return this.service.getEvaluationDetail(evaluationId, versionId);
  }

  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles('admin')
  @Get(':evaluationId/evolution')
  getEvolution(@Param('evaluationId', ParseIntPipe) evaluationId: number) {
    return this.service.getEvolutionEvaluation(evaluationId);
  }

  // Endpoints Hu009
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles('auditor_externo')
  @Get('myCompanies')
  getMyCompanies(@CurrentUser() user: { id: number }) {
    return this.service.getExternalAuditorCompaniesById(user.id);
  }

  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles('auditor_externo')
  @Get(':companyId/myEvaluations')
  getMyEvaluations(
    @Param('companyId', ParseIntPipe) companyId: number,
    @CurrentUser() user: { id: number },
  ) {
    return this.service.getExternalAuditorEvaluationsByCompany(
      companyId,
      user.id,
    );
  }

  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles('auditor_externo')
  @Get('evaluation/:evaluationId/details')
  getEvaluationDetails(
    @Param('evaluationId', ParseIntPipe) evaluationId: number,
    @CurrentUser() user: { id: number },
  ) {
    return this.service.getExternalAuditorEvaluationDetails(
      evaluationId,
      user.id,
    );
  }
}
