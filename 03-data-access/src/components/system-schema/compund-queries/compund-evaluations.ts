import { PrismaClient } from '../../../prismaconfig/prisma-client'; // Asegúrate de usar @prisma/client para el cliente de Prisma
import { prisma } from '../../../prismaconfig/prisma-client';

export const getQueries = {
  // Obtener detalles de evaluación QUERY COMPUESTA 04
  getEvaluationDetail: async (evaluationId: number) => {
    const answersByQuestion = await prisma.$queryRaw`
      SELECT DISTINCT ON (q.id)
        q.id AS "question_id",
        q.text,
        c.description AS "criterion_description",
        n.code AS "norm_code",
        a.response,
        a.created_by,
        a.created_at,
        ev.id AS "version_id"
      FROM question q
      JOIN criterion c ON q.criterion_id = c.id
      JOIN norm n ON c.norm_id = n.id
      LEFT JOIN answer a ON a.question_id = q.id
      LEFT JOIN evaluation_version ev ON a.version_id = ev.id
      WHERE ev.evaluation_id = ${evaluationId} AND ev.id <= 3
      ORDER BY q.id, ev.id DESC, a.created_at DESC
    `;

    return answersByQuestion;
  },
  // Obtener evolución de la evaluación  QUERY COMPUESTA 03
  getEvolutionEvaluation: async (evaluationId: number) => {
    const evolution = await prisma.evaluationVersion.findMany({
      where: { evaluation_id: evaluationId },
      orderBy: {
        created_at: "asc",
      },
      select: {
        id: true,
        version_number: true,
        created_at: true,
        created_by: true,
        creator: {
          select: {
            name: true,
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

