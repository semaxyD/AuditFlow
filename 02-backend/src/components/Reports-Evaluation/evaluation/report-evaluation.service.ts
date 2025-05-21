import { Injectable, InternalServerErrorException, LoggerService, Logger } from '@nestjs/common';
import { QueryFilterService } from '../../../imports-barrel';
import { WINSTON_MODULE_NEST_PROVIDER } from 'nest-winston';
import { Inject } from '@nestjs/common';


@Injectable()
export class ReportEvaluationService {
  constructor(
    private readonly queryFilter: QueryFilterService,
    @Inject(WINSTON_MODULE_NEST_PROVIDER)
    private readonly logger: LoggerService,
  ) {
      this.logger = new Logger(ReportEvaluationService.name);
  }

  async getCompanies() { 
    this.logger.log('Fetching all companies');

    try{
        const query = await this.queryFilter.filterQuery('getAllCompanies', 'company-queries');
        this.logger.log(`Successfully fetched ${query.length} companies`);
        return query
    }catch(error){
        this.logger.error('Error fetching companies', error.stack);
        throw new InternalServerErrorException('Error fetching evaluations');
    }
  }

  async getEvaluationsByCompany(companyId: number) {
    this.logger.log(`Fetching evaluations for company ID: ${companyId}`);

    try{
        const query = await this.queryFilter.filterQuery('getEvaluationsByCompany', 'compound-evaluations',companyId);
        this.logger.log(`Successfully fetched ${query.length} evaluations`);
        return query;
    }catch(error){
        this.logger.error(`Error fetching evaluations for company ID ${companyId}`, error.stack);
        throw new InternalServerErrorException('Error fetching evaluations');
    }
  }

  async getEvaluationDetail(evaluationId: number, versionId: number) {
    this.logger.log(`Fetching evaluation detail for evaluation ID: ${evaluationId}, version ID: ${versionId}`);
    try{
        const ids = {
          evaluationId,
          versionId
        }
        const query = await this.queryFilter.filterQuery('getEvaluationDetail', 'compound-evaluations',ids);
        this.logger.log(`Successfully fetched evaluation detail`);
        return query;
    }catch(error){
        this.logger.error('Error fetching evaluation detail', error.stack);
        throw new InternalServerErrorException('Error fetching evaluations');
    }
  }

  async getEvolutionEvaluation(evaluationId: number) {
    this.logger.log(`Fetching evolution of evaluation ID: ${evaluationId}`);
    
    try{
        const query = await this.queryFilter.filterQuery('getEvolutionEvaluation', 'compound-evaluations',evaluationId);
        this.logger.log(`Successfully fetched evolution data`);
        return query;
    }catch(error){
        this.logger.error(`Error fetching evolution for evaluation ID ${evaluationId}`, error.stack);
        throw new InternalServerErrorException('Error fetching evaluations');
    }
  }

  async getExternalAuditorCompaniesById(userId: number) { 
    this.logger.log(`Fetching companies assigned to external auditor ID: ${userId}`);
    try{
        const query = await this.queryFilter.filterQuery('getAllCompaniesByUser', 'company-queries',userId);
        this.logger.log(`Successfully fetched ${query.length} companies for auditor ID ${userId}`);
        return query
    }catch(error){
        this.logger.error(`Error fetching companies for auditor ID ${userId}`, error.stack);
        throw new InternalServerErrorException('Error fetching evaluations');
    }
  }

  async getExternalAuditorEvaluationsByCompany(companyId:number, userId:number){
    this.logger.log(`Fetching evaluations for company ID ${companyId} by external auditor ID ${userId}`);

    try{
      const data = {
        companyId,
        userId
      };
      const query = await this.queryFilter.filterQuery('getExternalAuditorEvaluationsByCompany','compound-evaluations',data);
      this.logger.log(`Successfully fetched ${query.length} evaluations`);
      return query;
    }catch(error){
        this.logger.error(`Error fetching evaluations for company ${companyId} by auditor ${userId}`, error.stack);
        throw new InternalServerErrorException('Error fetching evaluations by external auditor');
    }
  }

  async getExternalAuditorEvaluationDetails(evaluationId: number, userId: number) {
    this.logger.log(`Fetching evaluation detail for evaluation ID ${evaluationId} by auditor ID ${userId}`);
    
    try {
      const data = { 
        evaluationId, 
        userId,
        version: 2
      };
      const query = await this.queryFilter.filterQuery('getEvaluationDetailsByExternalAuditorId', 'compound-evaluations', data);
      this.logger.log(`Successfully fetched evaluation detail for external auditor`);
      return query;
    } catch (error) {
      this.logger.error(`Error fetching evaluation detail for evaluation ID ${evaluationId}`, error.stack);
      
      throw new InternalServerErrorException('Error fetching evaluation details by external auditor');
    }
  }

  async getEvaluationReportData(evaluationId: number, userId: number): Promise<any> {
    this.logger.log(`Generating report for evaluation ID ${evaluationId}, requested by user ID ${userId}`);
    
    try {
      // 1. Obtener el version_id más reciente
      const { version_id } = await this.queryFilter.filterQuery(
        'getLatestVersionIdByEvaluationId',
        'compound-evaluations',
        evaluationId
      );
      this.logger.log(`Latest version ID for evaluation ${evaluationId} is ${version_id}`);
  
      // 2. Obtener los datos completos usando versionId
      const results = await this.queryFilter.filterQuery(
        'getEvaluationDetail',
        'compound-evaluations',
        { evaluationId, versionId: version_id }
      );
  
      const data = results[0]; 
  
      // 3. Armar la respuesta estructurada como la espera el frontend
      return {
        id: evaluationId,
        name: `${data.norm_name} - ${data.company_name}`,
        date: new Date().toISOString(), 
        status:
          data.completion_percentage >= 80
            ? 'Aprobado'
            : data.completion_percentage >= 50
            ? 'Intermedio'
            : 'No aprobado',
        score: data.completion_percentage,
        totalQuestions: data.total_questions,
        evaluationFeedback: data.observations,
        sections: data.criteria.map((section: any) => ({
          title: section.title,
          questions: section.questions.map((q: any) => ({
            id: q.question_id,
            question: q.text,
            response: q.response,
            observations: q.comments?.join('; ') || '',
            evidence: q.evidences ?? [],
          })),
        })),
      };

    } catch (error) {
      this.logger.error(`Error generating report for evaluation ID ${evaluationId}`, error.stack);
      
      throw new InternalServerErrorException('Error generating evaluation report');
    }
  }  

}
