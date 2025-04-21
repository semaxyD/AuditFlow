import { PrismaClient } from '../../../prismaconfig/prisma-client'; // Asegúrate de usar @prisma/client para el cliente de Prisma
import { prisma } from '../../../prismaconfig/prisma-client';

export const getQueries = {
  // Obtener detalles de evaluación
  getEvaluationDetail: async (evaluationId: number) => {
    const evaluationDetail = await prisma.evaluation.findUnique({
      where: { id: evaluationId },
      include: {
        company: { select: { id: true, name: true } },
        auditor: { select: { id: true, name: true } },
        versions: {
          select: {
            id: true,
            version_number: true,
            created_at: true,
            is_current: true,
            answers: {
              select: {
                id: true,
                score: true,
                question: { select: { text: true } },
              },
            },
          },
        },
      },
    });
    return evaluationDetail;
  },

  // Obtener evolución de la evaluación
  getEvolutionEvaluation: async (evaluationId: number) => {
    const evolution = await prisma.evaluationVersion.findMany({
      where: { evaluation_id: evaluationId },
      orderBy: { created_at: 'asc' },
      select: {
        version_number: true,
        created_at: true,
        is_current: true,
        answers: {
          select: {
            id: true,
            score: true,
            evaluationVersion: { select: { created_at: true } },
          },
        },
      },
    });
    return evolution;
  },

  //Query para la HU-008 insertar una evaluación hecha con todos sus datos
  createEvaluationWithDetails: async (
    prisma: PrismaClient,
    data: EvaluationData,
    userId: number
  ) => {
    return await prisma.$transaction(async (tx) => {
      // 1. Crear la evaluación
      const evaluation = await tx.evaluation.create({
        data: {
          company_id: data.company_id,
          created_by: userId,
          created_at: new Date(),
        },
      });

      // 2. Crear la primera versión de la evaluación
      const version = await tx.evaluationVersion.create({
        data: {
          evaluation_id: evaluation.id,
          created_by: userId,
          version_number: 1,
          is_latest: true,
          created_at: new Date(),
        },
      });

      // 3. Recorrer cada sección y sus preguntas para insertar respuestas, observaciones y evidencias
      for (const section of data.sections) {
        for (const question of section.questions) {
          // 3.1 Crear respuesta
          const createdAnswer = await tx.answer.create({
            data: {
              version_id: version.id,
              question_id: question.question_id,
              score: question.score,
              response: question.answer,
              created_by: userId,
              created_at: new Date(),
            },
          });

          // 3.2 Crear observaciones (si existen)
          if (question.observations?.trim()) {
            await tx.comment.create({
              data: {
                text: question.observations.trim(),
                created_by: userId,
                answer_id: createdAnswer.id,
                created_at: new Date(),
              },
            });
          }

          // 3.3 Crear evidencias (si existen)
          if (question.evidence && question.evidence.length > 0) {
            await tx.evidence.createMany({
              data: question.evidence.map((e) => ({
                answer_id: createdAnswer.id,
                url: e.url,
                created_by: userId,
                created_at: new Date(),
              })),
            });
          }
        }
      }

      return { evaluation, version };
    });
  },

};

interface EvaluationData {
  company_id: number;
  sections: {
    criterion_id: number;
    questions: {
      question_id: number;
      score: number;
      answer: string;
      observations?: string;
      evidence: { url: string }[];
    }[];
  }[];
}

