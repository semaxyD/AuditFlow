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
      ev.id AS "version_id",
      e.observations
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
export async function createEvaluationWithDetails(data: EvaluationData){

  return await Prisma.$transaction(async (tx: { evaluation: { create: (arg0: { data: { company_id: number; created_by: number; created_at: Date; }; }) => any; }; evaluationVersion: { create: (arg0: { data: { evaluation_id: any; created_by: number; version_number: number; is_latest: boolean; created_at: Date; }; }) => any; }; answer: { create: (arg0: { data: { version_id: any; question_id: number; score: number; response: string; created_by: number; created_at: Date; }; }) => any; }; comment: { create: (arg0: { data: { text: string; created_by: number; answer_id: any; created_at: Date; }; }) => any; }; evidence: { createMany: (arg0: { data: { answer_id: any; url: string; created_by: number; created_at: Date; }[]; }) => any; }; }) => {
    // 1. Crear la evaluación
    const evaluation = await tx.evaluation.create({
      data: {
        company_id: data.company_id,
        created_by: data.userId,
        created_at: new Date(),
      },
    });

    // 2. Crear la primera versión de la evaluación
    const version = await tx.evaluationVersion.create({
      data: {
        evaluation_id: evaluation.id,
        created_by: data.userId,
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
            created_by: data.userId,
            created_at: new Date(),
          },
        });

        // 3.2 Crear observaciones (si existen)
        if (question.observations?.trim()) {
          await tx.comment.create({
            data: {
              text: question.observations.trim(),
              created_by: data.userId,
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
              created_by: data.userId,
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
  userId: number;
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

//Query 1 para la HU009,Obtener evaluaciones hechas o asignadas al auditor externo
export async function getExternalAuditorEvaluationsByCompany(data: dataId) {
  const evaluations = await Prisma.evaluation.findMany({
    where: {
      company_id: data.companyId,
      created_by: data.userId,
    },
    select: {
      id: true,
      created_at: true,
      creator: {
        select: { name: true },
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

interface dataId {
  userId: number;
  companyId: number;
}

//Query 2 para la HU009,Obtener los detalles de la evaluacion seleccionada
export async function getEvaluationDetailsByExternalAuditorId(data: { evaluationId: number; userId: number }) {
  const details = await Prisma.$queryRaw`
    SELECT DISTINCT ON (q.id)
      q.id AS "question_id",
      q.text AS "question_text",
      c.id AS "criterion_id",
      c.description AS "criterion_description",
      n.id AS "norm_id",
      n.name AS "norm_name",
      n.code AS "norm_code",
      a.id AS "answer_id",
      a.response_value,
      a.observation,
      ev.id AS "version_id",
      ev.created_at AS "version_created_at",
      e.id AS "evaluation_id",
      e.observations,
      u.id AS "creator_id",
      u.name AS "creator_name",
      evid.id AS "evidence_id",
      evid.file_url AS "evidence_url",
      evid.description AS "evidence_description"
    FROM evaluation e
    JOIN evaluation_version ev ON ev.evaluation_id = e.id
    LEFT JOIN answer a ON a.version_id = ev.id
    LEFT JOIN question q ON a.question_id = q.id
    LEFT JOIN criterion c ON q.criterion_id = c.id
    LEFT JOIN norm n ON c.norm_id = n.id
    LEFT JOIN evidence evid ON evid.answer_id = a.id
    JOIN "user" u ON e.created_by = u.id
    WHERE e.id = ${data.evaluationId}
      AND e.created_by = ${data.userId}
    ORDER BY q.id, ev.created_at DESC, a.created_at DESC
  `;

  return details;
}



