import { Prisma } from '../../../prismaconfig/prisma-client';

  // Obtener detalles de evaluación QUERY COMPUESTA 04
  export async function getEvaluationDetail(evaluationId: number) {
    const answersByQuestion = await Prisma.$queryRaw`
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
  }

  // Obtener evolución de la evaluación  QUERY COMPUESTA 03
  export async function getEvolutionEvaluation(evaluationId: number) {
    const evolution = await Prisma.evaluationVersion.findMany({
      where: { evaluation_id: evaluationId },
      orderBy: {
        created_at: "asc",
      },
      select: {
        id: true,
        is_latest: true,
        score: true,
        created_at: true,
        version_number: true,
        creator: {
          select: {
            name: true,
          },
        },
      },
    });

    // Formatear los resultados para que coincidan con la consulta SQL
    const formattedEvolution = evolution.map((ev) => ({
      id: ev.id,
      creator_name: ev.creator.name,
      is_latest: ev.is_latest,
      score: ev.score,
      created_at: ev.created_at,
      version_number: ev.version_number,
    }));

    return formattedEvolution;
  }

  // Obtener evaluaciones por empresa con normas asociadas - QUERY COMPUESTA 02
  export async function getEvaluationsByCompany(companyId: number) {
    const evaluations = await Prisma.evaluation.findMany({
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
  }
  
  
  //Query para la HU-008 insertar una evaluación hecha con todos sus datos
  export async function createEvaluationWithDetails(data: EvaluationData,userId: number){
    return await Prisma.$transaction(async (tx: { evaluation: {
      create: (arg0: {
        data: { 
          company_id: number; 
          created_by: number; 
          created_at: Date; 
          observations:string | null | undefined;
        }; 
      }) => any; 
    }; 
    evaluationVersion: {
      create: (arg0: { 
        data: { 
          evaluation_id: any; 
          created_by: number;
          version_number: number; 
          is_latest: boolean; 
          created_at: Date; 
        }; 
      }) => any; 
    }; 
    answer: { 
      create: (arg0: { 
        data: { 
          version_id: any; 
          question_id: number; 
          score: number; 
          response: string; 
          created_by: number; 
          created_at: Date; 
        }; 
      }) => any; 
    }; 
    comment: { 
      create: (arg0: { 
        data: { 
          text: string; 
          created_by: number; 
          answer_id: any; 
          created_at: Date; 
        }; 
      }) => any; 
    }; 
    evidence: { 
      createMany: (arg0: { 
        data: { 
          answer_id: any; 
          url: string; 
          created_by: number; 
          created_at: Date; 
        }[]; 
      }) => any; 
    }; }) => {
      // 1. Crear la evaluación
      const evaluation = await tx.evaluation.create({
        data: {
          company_id: data.company_id,
          created_by: userId,
          created_at: new Date(),
          observations: data.observations?.trim() || null,
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

          // 3.2 Crear comments (si existen)
          if (question.comments?.trim()) {
            await tx.comment.create({
              data: {
                text: question.comments.trim(),
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
  }

  interface EvaluationData {
    company_id: number;
    observations?: string;
    sections: {
      criterion_id: number;
      questions: {
        question_id: number;
        score: number;
        answer: string;
        comments?: string;
        evidence: { url: string }[];
      }[];
    }[];
  }

  export async function getQuestionsByNorm(normId: number) {
    try {
      const normWithCriteria = await Prisma.norm.findUnique({
        where: { id: normId },
        select: {
          criteria: {
            select: {
              id: true,
              description: true,
              questions: {
                select: {
                  id: true,
                  text: true,
                },
              },
            },
          },
        },
      });
  
      if (!normWithCriteria) {
        throw new Error(`Norm with id ${normId} not found.`);
      }
  
      return normWithCriteria.criteria.map((criterion) => ({
        id: criterion.id,
        title: criterion.description || 'Sección sin nombre',
        questions: criterion.questions.map((question) => ({
          id: question.id,
          text: question.text,
        })),
      }));
    } catch (error) {
      console.error('Error fetching questions by normId:', error);
      throw new Error('Failed to fetch questions');
    }
  }
