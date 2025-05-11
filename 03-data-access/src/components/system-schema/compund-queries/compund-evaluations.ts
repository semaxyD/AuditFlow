// src/components/system-schema/compound-queries/getEvaluacionesCompuestas.ts

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
};
