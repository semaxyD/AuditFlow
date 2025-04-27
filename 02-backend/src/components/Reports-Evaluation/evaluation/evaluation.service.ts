import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { QueryFilterService } from '@data-access/src/components/query-manager/query-filter.service';

@Injectable()
export class EvaluationService {
  constructor(private readonly queryFilter: QueryFilterService) {}

  async getCompanies() { 
    try{
        const query = await this.queryFilter.filterQuery('read', 'getAllCompanies');
        return query
    }catch(error){
        throw new InternalServerErrorException('Error fetching evaluations');
    }
  }

  async getEvaluationsByCompany(companyId: string) {
    try{
        const query = await this.queryFilter.filterQuery('read', 'getEvaluationsByCompany');
        return query(companyId);
    }catch(error){
        throw new InternalServerErrorException('Error fetching evaluations');
    }
  }

  async getEvaluationDetail(evaluationId: string) {
    try{
        const query = await this.queryFilter.filterQuery('read', 'getEvaluationDetail');
        return query(evaluationId);
    }catch(error){
        throw new InternalServerErrorException('Error fetching evaluations');
    }
  }

  async getEvolutionEvaluation(evaluationId: string) {
    try{
        const query = await this.queryFilter.filterQuery('read', 'getEvolutionEvaluation');
        return query(evaluationId);
    }catch(error){
        throw new InternalServerErrorException('Error fetching evaluations');
    }
  }

  async getQuestionsByNorm(normId: number) {
    try {
      const query = await this.queryFilter.filterQuery('read', 'getQuestionsByNorm', normId);
      return query;
    } catch (error) {
      console.error('Error fetching questions by norm:', error);
      throw new InternalServerErrorException('Error fetching questions by norm');
    }
  }
  
  
}
