import { BadRequestException, Injectable, InternalServerErrorException, LoggerService, Logger } from '@nestjs/common';
import { EvaluationSubmissionDto } from "./evaluation-submission.dto"
import { QueryFilterService } from '../../../imports-barrel';
import { WINSTON_MODULE_NEST_PROVIDER } from 'nest-winston';
import { Inject } from '@nestjs/common';
import { parseNormCsv } from './csv-parser.util';




@Injectable()
export class EvaluationService {
  constructor(
    private readonly queryFilter: QueryFilterService,
    @Inject(WINSTON_MODULE_NEST_PROVIDER)
    private readonly logger: LoggerService,
  ) { 
      this.logger = new Logger(EvaluationService.name);
  }

  async getIdByNorm() {
    this.logger.log('Fetching basic norm information');
    try {
      const query = await this.queryFilter.filterQuery('getAllNormsBasicInfo', 'norm-queries');
      return query
    } catch (error) {
      this.logger.error('Error fetching evaluations', error.stack);
      throw new InternalServerErrorException('Error fetching evaluations');
    }
  }

  async getQuestionsByNorm(normId: number) {
    try {
      const numericId = Number(normId);
      this.logger.log(`Fetching questions by norm ID: ${numericId}`);
      const sections = await this.queryFilter.filterQuery(
        'getQuestionsByNorm',
        'criterion-queries',
        numericId
      );

      return {'Preguntas por criterios Generadas': sections};
  
  
    } catch (error) {
      this.logger.error('Error fetching questions by norm:', error.stack);
      throw new InternalServerErrorException('Error fetching questions by norm');
    }
  }


  async submitEvaluation(normIdSelect: number,companyIdSelect: number, dto: EvaluationSubmissionDto, userId: number, type: number) {
    const sectionIds = dto.sections.map(s => s.id);
    const questionIds = dto.sections.flatMap(s => s.questions.map(q => q.id));

    // Validar existencia de criterios y preguntas usando la función genérica:
    await this.validateEntityExistence('getCriterionsByIds', 'criterion-queries', sectionIds);
    await this.validateEntityExistence('getQuestionsByIds', 'questions-queries', questionIds);

    const companyId = type == 1 ? await this.queryFilter.filterQuery('getUserCompanyById', 'user-queries', userId) : 0;

    // Validar respuestas, puntajes y evidencias:
    for (const section of dto.sections) {
      for (const question of section.questions) {
        const validScores = [0, 50, 100, null];
        const validAnswers = ['Sí', 'No', 'NM', 'NA'];

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

      const evaluationData = {
        userId: userId,
        normId: normIdSelect,
        name: dto.name,
        company_id: companyId,
        completion_percentage: metrics.completionPercentage,
        maturity_level: metrics.maturityLevel,
        total_score: metrics.totalScore,
        max_score: metrics.maxScore,
        answered_questions: metrics.answeredQuestions,
        total_questions: metrics.totalQuestions,
        observations: dto.observations ?? '',
        sections: dto.sections.map(section => ({
          criterion_id: section.id,
          questions: section.questions.map(q => ({
            question_id: q.id,
            answer: q.answer,
            evidence: q.evidence,
            comments: q.comments ?? '',
            score: q.score,
          })),
        })),
      }

      const evaluationData2 = {
        userId: userId,
        normId: normIdSelect,
        name: dto.name,
        company_id: companyIdSelect,
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
            comments: q.comments ?? '',
            score: q.score,
          })),
        })),
      }

    if(type == 1){
      this.logger.log(`Payload enviado por el auditor interno: ${JSON.stringify(evaluationData)}`);
      const result = await this.queryFilter.filterQuery('createEvaluationWithDetails', 'compound-evaluations', evaluationData);
      this.logger.log(`Evaluación creada exitosamente para usuario ${userId}, evaluación ID: ${result}`);
     
      return {
        message: "Evaluacion Guardada correctamente",
        evaluationId: result
      };

    }else{
      this.logger.log(`Payload enviado por el auditor externo: ${JSON.stringify(evaluationData2)}`);
      const result = await this.queryFilter.filterQuery('createEvaluationWithDetails', 'compound-evaluations', evaluationData2);
      this.logger.log(`Evaluación creada exitosamente para usuario ${userId}, evaluación ID: ${result}`);

      return {
        message: "Evaluacion Guardada correctamente",
        evaluationId: result};
    }
  };

  // funcion helper para validacion de existencia de criterios y preguntas 
  private async validateEntityExistence(
    queryFunction: string,
    queryName: string,
    ids: number[],
  ) {
    const existingEntities = await this.queryFilter.filterQuery(queryFunction, queryName, ids);
    const missingIds = ids.filter(id => !existingEntities.some((e: { id: number; }) => e.id === id));

    if (missingIds.length > 0) {
      this.logger.warn(`IDs faltantes en ${queryName}: ${missingIds.join(', ')}`);
      throw new BadRequestException(
        `Los siguientes ${queryName} no existen: ${missingIds.join(', ')}`,
      );
    }

    if (queryFunction === 'getCriteriosByIds') {
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
  private calculateEvaluationMetrics(dto: EvaluationSubmissionDto) {
    let totalScore = 0;
    let maxScore = 0;
    let answeredQuestions = 0;
    let totalQuestions = 0;

    const averageBySection: Record<number, number> = {};

    for (const section of dto.sections) {
      let sectionTotal = 0;
      let sectionAnswered = 0;

      for (const questions of section.questions) {
        totalQuestions++;

        if (questions.score !== null && questions.score !== undefined) {
          totalScore += questions.score;
          sectionTotal += questions.score;
          maxScore += 100;
          sectionAnswered++;
          answeredQuestions++;
        } else {
          maxScore += 100;
        }
      }
      averageBySection[section.id] =
        sectionAnswered > 0 ? sectionTotal / sectionAnswered : 0;
    }

    const completionPercentage = maxScore > 0 ? (totalScore / maxScore) * 100 : 0;
    console.log("completionPercentaje: ",completionPercentage)
    let maturityLevel: String;
    if (completionPercentage >= 80) maturityLevel = 'Aprobado';
    else if (completionPercentage >= 50) maturityLevel = 'Intermedio';
    else if (completionPercentage >= 0) maturityLevel = 'No aprobado';
    else maturityLevel = 'No evaluado';

    this.logger.log(`Métricas calculadas: completionPercentage=${completionPercentage}, maturityLevel=${maturityLevel}`);

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


    
  async getEvaluationsByCreator(userId: number) {
    try {
      this.logger.log(`Fetching evaluations created by user ${userId}`);
      const evaluations = await this.queryFilter.filterQuery(
        'getEvaluationsByCreator',
        'compound-evaluations',
        userId
      );

      return evaluations;
    } catch (error) {
      this.logger.error('Error fetching evaluations for auditor:', error.stack);
      throw new InternalServerErrorException('Error fetching evaluations for auditor');
    }
  }
 

  async updateEvaluation(
  evaluationId: number,
  dto: EvaluationSubmissionDto,
  userId: number,
) {
  const sectionIds = dto.sections.map(s => s.id);
  const questionIds = dto.sections.flatMap(s => s.questions.map(q => q.id));

  // 1. Validar existencia de secciones y preguntas
  await this.validateEntityExistence('getCriterionsByIds', 'criterion-queries', sectionIds);
  await this.validateEntityExistence('getQuestionsByIds', 'questions-queries', questionIds);

  // 2. Validar respuestas, score y evidencias
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

  // 3. Calcular métricas (puedes tener una función interna si quieres)
  const totalQuestions = questionIds.length;
  const answeredQuestions = dto.sections.flatMap(s => s.questions).filter(q => q.answer !== 'NA').length;
  const maxScore = totalQuestions * 100;
  const totalScore = dto.sections
    .flatMap(s => s.questions)
    .filter(q => q.answer !== 'NA')
    .reduce((acc, q) => acc + (q.score ?? 0), 0);
  const completionPercentage = totalQuestions ? Math.round((totalScore / (answeredQuestions * 100)) * 100) : 0;
  const maturityLevel = completionPercentage >= 80 ? 'aprobado' : 'rechazado';

  // 4. Armar datos y enviar al módulo compuesto
  const payload= {
    evaluation_id: evaluationId,
    user_id: userId,
    completion_percentage: completionPercentage,
    maturity_level: maturityLevel,
    total_score: totalScore,
    max_score: maxScore,
    answered_questions: answeredQuestions,
    total_questions: totalQuestions,
    observations: dto.observations,
    sections: dto.sections.map(section => ({
      criterion_id: section.id,
      questions: section.questions.map(q => ({
        question_id: q.id,
        score: q.score,
        answer: q.answer,
        comments: q.comments,
        evidence: q.evidence,
      })),
    })),
  };

  return await this.queryFilter.filterQuery('updateEvaluationWithDetails', 'compound-evaluations', payload);

}

  
  async deleteEvaluation(evaluationId: number, userId: number) {
    this.logger.log(`Eliminando evaluación con ID: ${evaluationId}`);
    try {

      const data = {
        evaluationId,
        userId
      }

      const result = await this.queryFilter.filterQuery(
        'deleteEvaluation',
        'compound-deletes',
        data
      );

      if(!result){
        this.logger.warn(`Evaluación con ID ${evaluationId} no encontrado`);
        throw new InternalServerErrorException('No fue posible eliminar una evaluacion');
      }
      this.logger.log(`Evaluación eliminada correctamente`);
      return result;
  
  
    } catch (error) {
      this.logger.error('Error al eliminar la evaluación', error.stack);
      throw new InternalServerErrorException('Error eliminando la evaluación');
    }
  }


  async uploadNormFromCsv(file:any) {
    
  try {
    const parsedRows = await parseNormCsv(file.buffer);

    // 1. Validar que toda la norma tenga el mismo código y nombre
    const uniqueCodes = new Set(parsedRows.map(r => r.norma_codigo.toLowerCase()));
    const uniqueNames = new Set(parsedRows.map(r => r.norma_nombre.toLowerCase()));

    if (uniqueCodes.size !== 1 || uniqueNames.size !== 1) {
      throw new BadRequestException(
        'El archivo contiene múltiples códigos o nombres de norma diferentes.'
      );
    }

    const normCode = parsedRows[0].norma_codigo;
    const normName = parsedRows[0].norma_nombre;

    // 2. Agrupar criterios y preguntas
    const criteriosMap = new Map<string, string[]>();

    for (const row of parsedRows) {
      if (!criteriosMap.has(row.criterio)) {
        criteriosMap.set(row.criterio, []);
      }
      criteriosMap.get(row.criterio)?.push(row.pregunta);
    }

    const criteriaToInsert = Array.from(criteriosMap.entries()).map(([criterio, preguntas]) => ({
      description: criterio,
      questions: preguntas.map(text => ({ text })),
    }));

    // 3. Enviar a compound-queries
    const payload = {
      code: normCode,
      name: normName,
      criteria: criteriaToInsert,
    };

    const result = await this.queryFilter.filterQuery(
      'createNormWithDetails',
      'compound-queries',
      payload
    );

    return {
      message: 'Norma cargada exitosamente',
      norm_id: result,
      criterios_creados: criteriaToInsert.length,
      preguntas_registradas: parsedRows.length,
    };
  } catch (error) {
    console.error('Error subiendo norma:', error);
    throw new InternalServerErrorException('Error al subir la norma. Asegúrate de que el archivo sea válido.');
  }
}

}

