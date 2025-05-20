import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { QueryFilterService } from '../../../imports-barrel';


@Injectable()
export class ReportEvaluationService {
  constructor(private readonly queryFilter: QueryFilterService) {}

  async getCompanies() { 
    try{
        const query = await this.queryFilter.filterQuery('getAllCompanies', 'company-queries');
        return query
    }catch(error){
        throw new InternalServerErrorException('Error fetching evaluations',error);
    }
  }

  async getEvaluationsByCompany(companyId: number) {
    try{
        const query = await this.queryFilter.filterQuery('getEvaluationsByCompany', 'compound-evaluations',companyId);
        return query;
    }catch(error){
        throw new InternalServerErrorException('Error fetching evaluations',error);
    }
  }

  async getEvaluationDetail(evaluationId: number, versionId: number) {
    try{
        const ids = {
          evaluationId,
          versionId
        }

        const query = await this.queryFilter.filterQuery('getEvaluationDetail', 'compound-evaluations',ids);
        return query;
    }catch(error){
        throw new InternalServerErrorException('Error fetching evaluations',error);
    }
  }

  async getEvolutionEvaluation(evaluationId: number) {
    try{
        const query = await this.queryFilter.filterQuery('getEvolutionEvaluation', 'compound-evaluations',evaluationId);
        return query;
    }catch(error){
        throw new InternalServerErrorException('Error fetching evaluations',error);
    }
  }

  async getExternalAuditorCompaniesById(userId: number) { 
    try{
        const query = await this.queryFilter.filterQuery('getAllCompaniesByUser', 'company-queries',userId);
        return query
    }catch(error){
        throw new InternalServerErrorException('Error fetching evaluations',error);
    }
  }

  async getExternalAuditorEvaluationsByCompany(companyId:number, userId:number){
    try{
      const data = {
        companyId,
        userId
      };
      const query = await this.queryFilter.filterQuery('getExternalAuditorEvaluationsByCompany','compound-evaluations',data);
      return query;
    }catch(error){
        throw new InternalServerErrorException('Error fetching evaluations by external auditor');
    }
  }

  async getExternalAuditorEvaluationDetails(evaluationId: number, userId: number) {
    try {
      const data = { 
        evaluationId, 
        userId,
        version: 2
      };
      const query = await this.queryFilter.filterQuery('getEvaluationDetailsByExternalAuditorId', 'compound-evaluations', data);
      return query;
    } catch (error) {
      throw new InternalServerErrorException('Error fetching evaluation details by external auditor');
    }
  }

  async getEvaluationReportData(evaluationId: number, userId: number): Promise<any> {
    try {
      // 1. Obtener el version_id más reciente
      const { version_id } = await this.queryFilter.filterQuery(
        'getLatestVersionIdByEvaluationId',
        'compound-evaluations',
        evaluationId
      );
  
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
      console.error('Error generating evaluation report data:', error);
      throw new InternalServerErrorException('Error generating evaluation report');
    }
  }  

}
