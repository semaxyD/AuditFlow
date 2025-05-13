import { Prisma } from "../../../prismaconfig/prisma-client";

export async function getEvaluationDetail(ids: {
  evaluationId: number;
  versionId: number;
}) {
  const rows = await Prisma.$queryRaw<{ result: any }[]>`
    WITH base AS (
      SELECT DISTINCT ON (q.id)
        q.id               AS question_id,
        q.text,
        c.description      AS criterion_description,
        n.code             AS norm_code,
        a.id               AS answer_id,
        a.response,
        a.created_by,
        a.created_at,
        ev.id              AS version_id,
        ev.evaluation_id   AS evaluation_id
      FROM question q
      JOIN criterion c       ON q.criterion_id = c.id
      JOIN norm n            ON c.norm_id = n.id
      LEFT JOIN answer a     ON a.question_id = q.id
      LEFT JOIN evaluation_version ev
                             ON a.version_id = ev.id
      WHERE ev.evaluation_id = ${ids.evaluationId}
        AND ev.id            <= ${ids.versionId}
      ORDER BY q.id, ev.id DESC, a.created_at DESC
    ),
    answers AS (
      SELECT
        b.evaluation_id,
        b.question_id,
        b.text,
        b.criterion_description,
        b.response,
        b.created_by,
        b.created_at,
        b.version_id,
        ARRAY_AGG(DISTINCT e.url)   FILTER (WHERE e.id IS NOT NULL) AS evidences,
        ARRAY_AGG(DISTINCT cm.text) FILTER (WHERE cm.id IS NOT NULL) AS comments
      FROM base b
      LEFT JOIN evidence e ON e.answer_id = b.answer_id
      LEFT JOIN comment  cm ON cm.answer_id = b.answer_id
      GROUP BY
        b.evaluation_id,
        b.question_id,
        b.text,
        b.criterion_description,
        b.response,
        b.created_by,
        b.created_at,
        b.version_id
    ),
    obs AS (
      SELECT
        c.name AS company_name,
        c.nit,
        n.name AS norm_name,
        e.observations,
        e.id AS evaluation_id
      FROM evaluation e
      JOIN company c ON e.company_id = c.id
      JOIN norm n ON e.norm_id = n.id
      WHERE e.id = ${ids.evaluationId}
      LIMIT 1
    ),
    questions AS (
      SELECT
        evaluation_id,
        jsonb_agg(
          to_jsonb(answers) - 'evaluation_id'
          ORDER BY answers.question_id
        ) AS questions
      FROM answers
      GROUP BY evaluation_id
    )
    SELECT
      jsonb_build_array(
        jsonb_build_object(
          'company_name', obs.company_name,
          'nit',          obs.nit,
          'norm_name',    obs.norm_name,
          'observations', obs.observations,
          'questions',   questions.questions
        )
      ) AS result
    FROM obs
    JOIN questions ON questions.evaluation_id = obs.evaluation_id
  `;

  // Devuelves directamente el JSON parseado
  return rows[0]?.result ?? [];
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

// Tipos internos del transaction client, para no tenerlo inline
type TxClient = {
  evaluation: typeof Prisma.evaluation;
  evaluationVersion: typeof Prisma.evaluationVersion;
  answer: typeof Prisma.answer;
  comment: typeof Prisma.comment;
  evidence: typeof Prisma.evidence;
};

// Query para la HU-008 y HU-010: insertar una evaluación hecha con todos sus datos
export async function createEvaluationWithDetails(data: EvaluationData) {
  return await Prisma.$transaction(async (tx: TxClient) => {
    // 1. Crear la evaluación base
    const evaluation = await tx.evaluation.create({
      data: {
        company_id: data.company_id,
        created_by: data.userId,
        norm_id: data.normId,
        created_at: new Date(),
        observations: data.observations?.trim() || null,
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
        score: data.total_score,
        status: data.maturity_level,

      },
    });

    // 3. Insertar respuestas, observaciones y evidencias por sección/pregunta
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

        // 3.2 Crear comments (si existe)
        const trimmedObs = question.comments?.trim();
        if (trimmedObs) {
          await tx.comment.create({
            data: {
              text: trimmedObs,
              created_by: data.userId,
              answer_id: createdAnswer.id,
              created_at: new Date(),
            },
          });
        }

        // 3.3 Crear evidencias (si existen)
        if (question.evidence?.length) {
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


//Interfaces de datos usado en la HU008
export interface EvaluationData {
  company_id: number;
  userId: number,
  normId: number,
  observations?: string; // Observaciones generales de la evaluación (no de preguntas)
  total_score: number;
  maturity_level: string;
  sections: SectionData[];
}

interface SectionData {
  criterion_id: number;
  questions: QuestionData[];
}

interface QuestionData {
  question_id: number;
  score: number;
  answer: string;
  comments?: string; // Comentarios por pregunta
  evidence?: EvidenceData[]; // Evidencias opcionales
}

interface EvidenceData {
  url: string;
}

//Query 1 para la HU009,Obtener evaluaciones hechas o asignadas al auditor externo
export async function getExternalAuditorEvaluationsByCompany(data: dataId) {
  const evaluations = await Prisma.evaluation.findMany({
    where: {
      company_id: data.companyId,
      created_by: data.userId,
      versions: {
        some: {
          version_number: data.version,
        }
      }
    },
    select: {
      id: true,
      created_at: true,
      creator: {
        select: { name: true },
      },
      versions: {
        where: {
          version_number: data.version,
        },
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
  version: number;
}

//Query 2 para la HU009,Obtener los detalles de la evaluacion seleccionada
export async function getEvaluationDetailsByExternalAuditorId(data: { evaluationId: number; userId: number; version: number }) {
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
      AND ev.version_number = ${data.version}
    ORDER BY q.id, ev.created_at DESC, a.created_at DESC
  `;

  return details;
}





export async function updateEvaluationWithDetails(data: UpdateEvaluationData) {
  return await Prisma.$transaction(async (tx) => {
    // 1. Obtener la versión activa de la evaluación
    const version = await tx.evaluationVersion.findFirst({
      where: {
        evaluation_id: data.evaluation_id,
        is_latest: true,
      },
    });

    if (!version) {
      throw new Error('No se encontró una versión activa para esta evaluación');
    }

    for (const section of data.sections) {
      for (const question of section.questions) {
        // 2. Buscar respuesta previa
        const existingAnswer = await tx.answer.findFirst({
          where: {
            version_id: version.id,
            question_id: question.question_id,
          },
        });

        let answerId: number;

        if (existingAnswer) {
          // 3. Actualizar respuesta existente
          const updated = await tx.answer.update({
            where: { id: existingAnswer.id },
            data: {
              score: question.score,
              response: question.answer,
            },
          });

          answerId = updated.id;

          // 4. Limpiar evidencias y comentarios previos
          await tx.evidence.deleteMany({ where: { answer_id: answerId } });
          await tx.comment.deleteMany({ where: { answer_id: answerId } });
        } else {
          // 5. Crear nueva respuesta
          const created = await tx.answer.create({
            data: {
              version_id: version.id,
              question_id: question.question_id,
              score: question.score,
              response: question.answer,
              created_by: data.user_id,
              created_at: new Date(),
            },
          });

          answerId = created.id;
        }

        // 6. Agregar comentario si lo hay
        if (question.comments?.trim()) {
          await tx.comment.create({
            data: {
              text: question.comments.trim(),
              created_by: data.user_id,
              answer_id: answerId,
              created_at: new Date(),
            },
          });
        }

        // 7. Agregar evidencias si hay
        if (question.evidence?.length) {
          await tx.evidence.createMany({
            data: question.evidence.map((e) => ({
              answer_id: answerId,
              url:e,
              created_by: data.user_id,
              created_at: new Date(),
            })),
          });
        }
      }
    }

    // 8. Actualizar observaciones generales
    await tx.evaluation.update({
      where: { id: data.evaluation_id },
      data: {
        observations: data.observations ?? '',
      },
    });

    return { success: true };
  });
}


export async function getEvaluationsByCreator(userId: number) {
  const evaluations = await Prisma.evaluation.findMany({
    where: { created_by: userId },
    orderBy: { created_at: 'desc' },
    select: {
      id: true,
      created_at: true,
      observations: true,
      company: {
        select: { id: true, name: true },
      },
      norm: {
        select: { id: true, name: true, code: true },
      },
      versions: {
        where: { is_latest: true },
        select: {
          id: true,
          score: true,
          is_latest: true,
          version_number: true,
        },
      },
    },
  });

  return evaluations.map((e) => ({
    evaluation_id: e.id,
    created_at: e.created_at,
    company_id: e.company.id,
    company_name: e.company.name,
    norm_id: e.norm.id,
    norm_name: e.norm.name,
    norm_code: e.norm.code,
    version_id: e.versions[0]?.id ?? null,
    version_number: e.versions[0]?.version_number ?? null,
    score: e.versions[0]?.score ?? null,
    is_latest: e.versions[0]?.is_latest ?? false,
    observations: e.observations ?? '',
  }));
}



interface UpdateEvaluationData {
  evaluation_id: number;
  user_id: number;
  name: string;
  description: string;
  completion_percentage: number;
  maturity_level: string;
  total_score: number;
  max_score: number;
  answered_questions: number;
  total_questions: number;
  observations?: string;
  sections: {
    criterion_id: number;
    questions: {
      question_id: number;
      score: number;
      answer: string;
      comments?: string;
      evidence: string[];
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
      title: criterion.description || "Sección sin nombre",
      questions: criterion.questions.map((question) => ({
        id: question.id,
        text: question.text,
      })),
    }));
  } catch (error) {
    console.error("Error fetching questions by normId:", error);
    throw new Error("Failed to fetch questions");
  }
}
