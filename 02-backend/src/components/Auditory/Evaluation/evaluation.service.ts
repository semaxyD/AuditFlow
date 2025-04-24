import { BadRequestException, Injectable, InternalServerErrorException } from '@nestjs/common';
import { EvaluationSubmissionDto } from "./evaluation-submission.dto"
import { QueryFilterService } from '@data-access/src/components/query-manager/query-filter.service';

@Injectable()
export class EvaluationService {
  constructor(private readonly queryFilter: QueryFilterService) {}

  async submitEvaluation(dto: EvaluationSubmissionDto, userId: number) {
    const sectionIds = dto.sections.map(s => s.id);
    const questionIds = dto.sections.flatMap(s => s.questions.map(q => q.id));

    // Validar existencia de criterios y preguntas usando la función genérica:
    const normId = await this.validateEntityExistence('read', 'getCriterionsByIds',sectionIds);
    await this.validateEntityExistence('read', 'getQuestionsByIds', questionIds);
    const user = await this.queryFilter.filterQuery('read', 'getUserCompanyById', userId); 
    const companyId = user.company_id;

    // Validar respuestas, puntajes y evidencias:
    for (const section of dto.sections) {
      for (const question of section.questions) {
        const validScores = [0, 50, 100, null];
        const validAnswers = ['Si', 'No', 'NM', 'NA'];

        if (!validScores.includes(question.score)) {
          throw new BadRequestException(
            `El puntaje de la pregunta ${question.id} debe ser uno de los siguientes: 0, 50, 100 o null.`,
          );
        }

        if (!validAnswers.includes(question.answer)) {
          throw new BadRequestException(
            `La respuesta de la pregunta ${question.id} debe ser una de las siguientes: ${validAnswers.join(', ')}`,
          );
        }

        for (const evidenceUrl of question.evidence || []) {
          if (!this.isValidUrl(evidenceUrl)) {
            throw new BadRequestException(
              `El enlace de evidencia "${evidenceUrl}" en la pregunta ${question.id} no es un URL válido.`,
            );
          }
        }
      }
    }

    const metrics = this.calculateEvaluationMetrics(dto);
    console.log("resumen de metricas calculadas: ", metrics);

    const evaluationData = {
      name: dto.name,
      description: dto.description,
      company_id: companyId,
      norm_id: normId,
      completion_percentage: metrics.completionPercentage,
      maturity_level: metrics.maturityLevel,
      total_score: metrics.totalScore,
      max_score: metrics.maxScore,
      answered_questions: metrics.answeredQuestions,
      total_questions: metrics.totalQuestions,
      sections: dto.sections.map(section => ({
        criterion_id: section.id,
        questions: section.questions.map(q => ({
          question_id: q.id,
          answer: q.answer,
          evidence: q.evidence,
          observations: q.observations ?? '',
          score: q.score,
        })),
      })),
    };

    const result = await this.queryFilter.filterQuery('insert', 'createEvaluationWithDetails', evaluationData);
    return result; // Podrías retornar el ID o el resumen según lo que desees mostrar al frontend


  }


  // funcion helper para validacion de existencia de criterios y preguntas 
  private async validateEntityExistence(
    queryName: string,
    entityName: string,
    ids: number[],
  ) {
    const existingEntities = await this.queryFilter.filterQuery('read', queryName, ids);
    const missingIds = ids.filter(id => !existingEntities.some((e: { id: number; }) => e.id === id));

    if (missingIds.length > 0) {
      throw new BadRequestException(
        `Los siguientes ${entityName} no existen: ${missingIds.join(', ')}`,
      );
    }

    if (queryName === 'getCriteriosByIds') {
      const standardIds = existingEntities.map((e: any) => e.standard_id);
      const uniqueNormIds = [...new Set(standardIds)];
  
      if (uniqueNormIds.length !== 1) {
        throw new BadRequestException(
          'Los criterios pertenecen a múltiples estándares. Asegúrate de que todos los criterios pertenezcan al mismo estándar.',
        );
      }
  
      return uniqueNormIds[0]; // Retornamos el norm_id homogéneo
    }

  }

  //Calculo de metricas a guardar
  private calculateEvaluationMetrics(dto: EvaluationSubmissionDto){
    let totalScore = 0;
    let maxScore = 0;
    let answeredQuestions = 0;
    let totalQuestions = 0;

    const averageBySection: Record<number, number> = {};

    for (const section of dto.sections){
      let sectionTotal = 0;
      let sectionAnswered = 0;

      for (const questions of section.questions){
        totalQuestions++;

        if(questions.score !== null && questions.score !== undefined){
          totalScore += questions.score;
          sectionTotal += questions.score;
          maxScore += 100;
          sectionAnswered++;
          answeredQuestions++;
        }else{
          maxScore += 100;
        }
      }
      averageBySection[section.id] =
        sectionAnswered > 0 ? sectionTotal/sectionAnswered : 0;
    }

    const completionPercentage = maxScore > 0 ? (totalScore/maxScore) * 100 : 0;

    let maturityLevel: String;
    if(completionPercentage >= 80) maturityLevel = 'Aprobado';
    else if(completionPercentage >= 50) maturityLevel = 'Intermedio';
    else if(completionPercentage >=0) maturityLevel = 'No aprobado';
    else maturityLevel = 'No evaluado';

    return {
      totalScore,
      maxScore,
      averageBySection,
      answeredQuestions,
      totalQuestions,
      completionPercentage,
      maturityLevel
    }
  };

  //validacion de la URL de las evidencias
  private isValidUrl(url: string): boolean {
    try {
      const parsed = new URL(url);
      return ['http:', 'https:'].includes(parsed.protocol);
    } catch {
      return false;
    }
  }
}
