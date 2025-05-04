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
        throw new InternalServerErrorException('Error fetching evaluations');
    }
  }

  async getEvaluationsByCompany(companyId: string) {
    try{
        const query = await this.queryFilter.filterQuery('getEvaluationsByCompany', 'compound-evaluations');
        return query(companyId);
    }catch(error){
        throw new InternalServerErrorException('Error fetching evaluations');
    }
  }

  async getEvaluationDetail(evaluationId: string) {
    try{
        const query = await this.queryFilter.filterQuery('getEvaluationDetail', 'compound-evaluations');
        return query(evaluationId);
    }catch(error){
        throw new InternalServerErrorException('Error fetching evaluations');
    }
  }

  async getEvolutionEvaluation(evaluationId: string) {
    try{
        const query = await this.queryFilter.filterQuery('getEvolutionEvaluation', 'compound-evaluations');
        return query(evaluationId);
    }catch(error){
        throw new InternalServerErrorException('Error fetching evaluations');
    }
  }
}
