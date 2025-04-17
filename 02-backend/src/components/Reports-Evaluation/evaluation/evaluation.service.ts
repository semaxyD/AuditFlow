import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { QueryFilterService } from '@data-access/src/components/query-manager/query-filter.service';

@Injectable()
export class EvaluationService {
  constructor(private readonly queryFilter: QueryFilterService) {}

  async getCompanies() { 
    try{
        const query = await this.queryFilter.filterQuery('read', 'company-queries');
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
        const query = await this.queryFilter.filterQuery('read', 'getEvaluacionDetalle');
        return query(evaluationId);
    }catch(error){
        throw new InternalServerErrorException('Error fetching evaluations');
    }
  }

  async getEvolutionEvaluation(companyId: string) {
    try{
        const query = await this.queryFilter.filterQuery('read', 'getEvolucionEvaluacion');
        return query(companyId);
    }catch(error){
        throw new InternalServerErrorException('Error fetching evaluations');
    }
  }
}
