import { BadRequestException, Injectable, InternalServerErrorException } from '@nestjs/common';
import { EvaluationSubmissionDto } from "./evaluation-submission.dto"
import { QueryFilterService } from '@data-access/src/components/query-manager/query-filter.service';

@Injectable()
export class EvaluationService {
  constructor(private readonly queryFilter: QueryFilterService) {}

  async submitEvaluation(dto: EvaluationSubmissionDto) {
    const sectionIds = dto.sections.map(s => s.id);
    const questionIds = dto.sections.flatMap(s => s.questions.map(q => q.id));

    // ✅ Validar existencia de criterios y preguntas usando la función genérica:
    await this.validateEntityExistence(sectionIds, 'getCriteriosByIds', 'criterios');
    await this.validateEntityExistence(questionIds, 'getPreguntasByIds', 'preguntas');

    // ✅ Validar respuestas, puntajes y evidencias:
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
  }

  // funcion helper para validacion de existencia de criterios y preguntas 
  private async validateEntityExistence(
    ids: number[],
    queryName: string,
    entityName: string
  ) {
    const existingEntities = await this.queryFilter.filterQuery('read', queryName, ids);
    const missingIds = ids.filter(id => !existingEntities.some((e: { id: number; }) => e.id === id));

    if (missingIds.length > 0) {
      throw new BadRequestException(
        `Los siguientes ${entityName} no existen: ${missingIds.join(', ')}`,
      );
    }
  }

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
