// src/components/system-schema/compound-queries/getEvaluacionesCompuestas.ts

import { prisma } from "../../../prismaconfig/prisma-client";

export const getQueries = {
  // Obtener detalles de evaluación
  getEvaluationDetail: async (evaluationId: number) => {
    const evaluationDetail = await prisma.evaluation.findUnique({
      where: { id: evaluationId },
      include: {
        company: { select: { id: true, name: true } },
        creator: { select: { id: true, name: true } },
        versions: {
          select: {
            id: true,
            created_by: true,
            created_at: true,
            is_latest: true,
            answers: {
              select: {
                id: true,
                response: true,
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

  // Obtener evolución de la evaluación  QUERY COMPUESTA -03
  getEvolutionEvaluation: async (evaluationId: number) => {
    const evolution = await prisma.evaluationVersion.findMany({
      where: { evaluation_id: evaluationId },
      orderBy: {
        created_at: "asc",
      },
      select: {
        version_number: true,
        created_at: true,
        is_latest: true,
        answers: {
          select: {
            id: true,
            score: true,
            created_at: true,
          },
        },
      },
    });
    return evolution;
  },
};
