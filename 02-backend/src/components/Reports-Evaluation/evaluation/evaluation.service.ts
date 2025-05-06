import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { QueryFilterService } from '../../../imports-barrel';


@Injectable()
export class EvaluationService {
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
        throw new InternalServerErrorException('Error fetching evaluations');
    }
  }

  async getEvaluationDetail(evaluationId: number) {
    try{
        const query = await this.queryFilter.filterQuery('getEvaluationDetail', 'compound-evaluations',evaluationId);
        return query;
    }catch(error){
        throw new InternalServerErrorException('Error fetching evaluations');
    }
  }

  async getEvolutionEvaluation(evaluationId: number) {
    try{
        const query = await this.queryFilter.filterQuery('getEvolutionEvaluation', 'compound-evaluations',evaluationId);
        return query;
    }catch(error){
        throw new InternalServerErrorException('Error fetching evaluations');
    }
  }

  async getQuestionsByNorm(normId: number) {
    try {
      const numericId = Number(normId);
  
      const sections = await this.queryFilter.filterQuery(
        'getQuestionsByNorm',
        'compound-evaluations',
        numericId
      );
  
      const totalQuestions = sections.reduce(
        (acc, section) => acc + section.questions.length,
        0
      );
  
      const response = {
        name: 'Evaluación generada', // hardcodeado
        description: 'Evaluación basada en norma seleccionada', //pendiente... no hay description en schema
        totalQuestions,
        sections: sections.map((section) => ({
          id: section.id,
          title: section.title,
          questions: section.questions.map((q) => ({
            id: q.id,
            question: q.text,
          })),
        })),
      };
  
      // temporal... ver exactamente como se va a enviar al frontend
      console.log('JSON Final para el frontend:\n', JSON.stringify(response, null, 2));
  
      return response;
    } catch (error) {
      console.error('Error fetching questions by norm:', error);
      throw new InternalServerErrorException('Error fetching questions by norm');
    }
  }
  
  
  
  
}
