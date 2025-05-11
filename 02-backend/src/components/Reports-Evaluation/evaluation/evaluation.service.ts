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

  async getEvaluationDetail(evaluationId: number, versionId: number) {
    try{
        const ids = {
          evaluationId,
          versionId
        }

        const query = await this.queryFilter.filterQuery('getEvaluationDetail', 'compound-evaluations',ids);
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
  
}
