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

  async getEvaluationDetail(evaluationId: number) {
    try{
        const query = await this.queryFilter.filterQuery('getEvaluationDetail', 'compound-evaluations',evaluationId);
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
        userId,
        version: 2
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

}
