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

  // Obtener evaluaciones por empresa con normas asociadas - QUERY COMPUESTA 02
  getEvaluationsByCompany: async (companyId: number) => {
    const evaluations = await prisma.evaluation.findMany({
      where: {
        company_id: companyId,
      },
      select: {
        id: true,
        created_at: true,
        creator: {
          select: {
            name: true,
          },
        },
        versions: {
          select: {
            answers: {
              select: {
                question: {
                  select: {
                    criterion: {
                      select: {
                        norm: {
                          select: {
                            id: true,
                            name: true,
                            code: true,
                          },
                        },
                      },
                    },
                  },
                },
              },
            },
          },
        },
      },
    });

    const formatted = evaluations.map((evaluation) => {
      const normsMap = new Map();

      evaluation.versions.forEach((version) => {
        version.answers.forEach((answer) => {
          const norm = answer.question.criterion.norm;
          if (norm && !normsMap.has(norm.id)) {
            normsMap.set(norm.id, norm);
          }
        });
      });

      return {
        evaluation_id: evaluation.id,
        evaluation_created_at: evaluation.created_at,
        creator_name: evaluation.creator.name,
        norms: Array.from(normsMap.values()),
      };
    });

    return formatted;
  },
};
