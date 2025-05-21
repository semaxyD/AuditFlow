import { Prisma } from "../../../prismaconfig/prisma-client";

export async function getEvaluationDetail(ids: {
  evaluationId: number;
  versionId: number;
}) {
  const rows = await Prisma.$queryRaw<{ result: any }[]>`
    WITH base AS (
  SELECT DISTINCT ON (q.id)
    q.id                    AS question_id,
    q.text,
    q.criterion_id          AS criterion_id,
    c.description           AS criterion_description,
    ev.id                   AS version_id,
    ev.evaluation_id        AS evaluation_id,
    a.id                    AS answer_id,
    a.response,
    a.created_by,
    a.created_at
  FROM question q

  JOIN evaluation_version ev
    ON ev.id = ${ids.versionId}
  JOIN evaluation e
    ON ev.evaluation_id = e.id      -- aquí traemos norm_id de la evaluación

  JOIN criterion c
    ON q.criterion_id = c.id
   AND c.norm_id      = e.norm_id   -- <-- este filtro es clave

  LEFT JOIN answer a
    ON a.question_id = q.id
   AND a.version_id  = ev.id

  WHERE ev.evaluation_id = ${ids.evaluationId}      
  ORDER BY q.id, ev.id DESC, a.created_at DESC
),

answers AS (
  SELECT
    b.evaluation_id,
    b.criterion_id,
    b.criterion_description,
    b.question_id,
    b.text,
    b.response,
    b.created_by,
    b.created_at,
    b.version_id,
    ARRAY_AGG(DISTINCT e.url)   FILTER (WHERE e.id IS NOT NULL) AS evidences,
    ARRAY_AGG(DISTINCT cm.text) FILTER (WHERE cm.id IS NOT NULL) AS comments
  FROM base b
  LEFT JOIN evidence e  ON e.answer_id  = b.answer_id
  LEFT JOIN comment  cm ON cm.answer_id = b.answer_id
  GROUP BY
    b.evaluation_id,
    b.criterion_id,
    b.criterion_description,
    b.question_id,
    b.text,
    b.response,
    b.created_by,
    b.created_at,
    b.version_id
),

criteria AS (
  SELECT
    a.criterion_id               AS id,
    a.criterion_description      AS title,
    jsonb_agg(
      ( to_jsonb(a)
          - 'evaluation_id'
          - 'criterion_id'
          - 'criterion_description'
      )
      ORDER BY a.question_id
    ) AS questions
  FROM answers a
  GROUP BY
    a.criterion_id,
    a.criterion_description
),

obs AS (
  SELECT
    c.name         AS company_name,
    c.nit,
    n.name         AS norm_name,
    e.observations,
    e.id           AS evaluation_id
  FROM evaluation e
  JOIN company c ON e.company_id = c.id
  JOIN norm    n ON e.norm_id     = n.id
  WHERE e.id = ${ids.evaluationId}
  LIMIT 1
),

version_info AS (
  SELECT
    id                        AS version_id,
    answered_questions,
    total_questions,
    completion_percentage
  FROM evaluation_version
  WHERE id = ${ids.versionId}
  LIMIT 1
)

SELECT jsonb_build_array(
  jsonb_build_object(
    'company_name',          obs.company_name,
    'nit',                   obs.nit,
    'norm_name',             obs.norm_name,
    'observations',          obs.observations,
    'answered_questions',    vi.answered_questions,
    'total_questions',       vi.total_questions,
    'completion_percentage', vi.completion_percentage,
    'criteria',              (
      SELECT jsonb_agg(
        jsonb_build_object(
          'id',        cr.id,
          'title',     cr.title,
          'questions', cr.questions
        )
      )
      FROM criteria cr
    )
  )
) AS result
FROM obs
CROSS JOIN version_info vi;
`;
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
    where: { company_id: companyId },
    select: {
      id: true,
      created_at: true,
      creator: {
        select: { name: true },
      },
      norm: {
        select: {
          id: true,
          name: true,
          code: true,
        },
      },
    },
  });

  return evaluations.map((ev) => ({
    evaluation_id: ev.id,
    evaluation_created_at: ev.created_at,
    creator_name: ev.creator.name,
    norm: ev.norm,
  }));
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
    // 1. Crear la evaluación base (tabla evaluation)
    const evaluation = await tx.evaluation.create({
      data: {
        company_id: data.company_id,
        created_by: data.userId,
        norm_id: data.normId,
        created_at: new Date(),
        observations: data.observations?.trim() || null,
      },
    });

    // 2. Crear la 1ª versión (v1): info general con version_number = 1
    const version1 = await tx.evaluationVersion.create({
      data: {
        evaluation_id: evaluation.id,
        created_by: data.userId,
        created_at: new Date(),
        version_number: 1,
        is_latest: false,
        score: data.total_score,
        status: null,
        completion_percentage: null,
        answered_questions: null,
        total_questions: null,
      },
    });

    // 3. Crear la 2ª versión (v2): info específica con version_number = 2
    const version2 = await tx.evaluationVersion.create({
      data: {
        evaluation_id: evaluation.id,
        created_by: data.userId,
        created_at: new Date(),
        version_number: 2,
        is_latest: true,
        status: data.maturity_level,
        score: data.total_score,
        completion_percentage: data.completion_percentage,
        answered_questions: data.answered_questions,
        total_questions: data.total_questions,
      },
    });

    // 4. Insertar respuestas, comentarios y evidencias usando version2.id
    for (const section of data.sections) {
      for (const question of section.questions) {
        // 4.1 Crear respuesta
        const createdAnswer = await tx.answer.create({
          data: {
            version_id: version2.id,
            question_id: question.question_id,
            score: question.score,
            response: question.answer,
            created_by: data.userId,
            created_at: new Date(),
          },
        });

        // 4.2 Crear comments (si existe)
        if (question.comments?.trim()) {
          await tx.comment.create({
            data: {
              text: question.comments.trim(),
              created_by: data.userId,
              answer_id: createdAnswer.id,
              created_at: new Date(),
            },
          });
        }

        // 4.3 Crear evidencias (si existen)
        if (question.evidence?.length) {
          await tx.evidence.create({
            data: {
              answer_id: createdAnswer.id,
              url: question.evidence, // ← string[]
              created_by: data.userId,
              created_at: new Date(),
            },
          });
        }
      }
    }

    return evaluation.id;
  });
}

//Interfaces de datos usado en la HU008
export interface EvaluationData {
  company_id: number;
  userId: number;
  normId: number;
  observations?: string; // Observaciones generales de la evaluación (no de preguntas)
  total_score: number;
  maturity_level: string;
  completion_percentage: number;
  answered_questions: number;
  total_questions: number;
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
  evidence?: string[]; // Evidencias opcionales
}

//Query 1 para la HU009,Obtener evaluaciones hechas o asignadas al auditor externo
export async function getExternalAuditorEvaluationsByCompany(data: {
  companyId: number;
  userId: number;
}) {
  const evaluations = await Prisma.evaluation.findMany({
    where: {
      company_id: data.companyId,
      created_by: data.userId,
      versions: {
        some: {
          version_number: 1,
        },
      },
    },
    select: {
      id: true,
      created_at: true,
      creator: {
        select: { name: true },
      },
      norm: {
        select: {
          id: true,
          name: true,
          code: true,
        },
      },
    },
  });

  return evaluations.map((ev) => ({
    evaluation_id: ev.id,
    evaluation_created_at: ev.created_at,
    creator_name: ev.creator.name,
    norm: {
      id: ev.norm.id,
      name: ev.norm.name,
      code: ev.norm.code,
    },
  }));
}

interface dataId {
  userId: number;
  companyId: number;
}

//Query 2 de la HU009 - mostrar detalles de una evaluacion escogida (solo la version 1)
export async function getEvaluationDetailsByExternalAuditorId(data: {
  evaluationId: number;
  userId: number;
  version: number;
}) {
  const rawResults = await Prisma.$queryRaw<
    Array<{
      question_id: number;
      question_text: string;
      criterion_id: number;
      criterion_description: string;
      norm_name: string;
      norm_id: number;
      norm_code: string;
      answer_id: number | null;
      response: string | null;
      answer_score: number | null;
      version_id: number;
      version_created_at: Date;
      answered_questions: number;
      total_questions: number;
      completion_percentage: number;
      evaluation_id: number;
      creator_id: number | null;
      creator_name: string | null;
      evidence_id: number | null;
      evidence_url: string | null;
      comment_id: number | null;
      comment_text: string | null;
      comment_created_at: Date | null;
      comment_created_by: number | null;
      nit: string;
      company_name: string;
    }>
  >`
    SELECT DISTINCT ON (q.id, a.id, evid.id, com.id)
      q.id                    AS "question_id",
      q.text                  AS "question_text",
      c.id                    AS "criterion_id",
      c.description           AS "criterion_description",
      n.name                  AS "norm_name",
      n.id                    AS "norm_id",
      n.code                  AS "norm_code",
      a.id                    AS "answer_id",
      a.response              AS "response",
      a.score                 AS "answer_score",
      ev.id                   AS "version_id",
      ev.created_at           AS "version_created_at",
      ev.answered_questions   AS "answered_questions",
      ev.total_questions      AS "total_questions",
      ev.completion_percentage AS "completion_percentage",
      e.id                    AS "evaluation_id",
      u.id                    AS "creator_id",
      u.name                  AS "creator_name",
      evid.id                 AS "evidence_id",
      evid.url                AS "evidence_url",
      com.id                  AS "comment_id",
      com.text                AS "comment_text",
      com.created_at          AS "comment_created_at",
      com.created_by          AS "comment_created_by",
      comp.nit                AS "nit",
      comp.name               AS "company_name"
    FROM evaluation e
    JOIN company comp          ON comp.id = e.company_id
    JOIN evaluation_version ev ON ev.evaluation_id = e.id
    JOIN "user" u              ON e.created_by = u.id
    LEFT JOIN answer a         ON a.version_id = ev.id
    LEFT JOIN question q       ON a.question_id = q.id
    LEFT JOIN criterion c      ON q.criterion_id = c.id
    LEFT JOIN norm n           ON c.norm_id = n.id
    LEFT JOIN evidence evid    ON evid.answer_id = a.id
    LEFT JOIN comment com      ON com.answer_id = a.id
    WHERE e.id = ${data.evaluationId}
      AND ev.version_number = ${data.version}
    ORDER BY q.id, a.id, evid.id, com.id,
             ev.created_at DESC, a.created_at DESC
  `;

  if (!rawResults.length) return [];
  const first = rawResults[0];

  const byCriterion: Record<
    number,
    {
      id: number;
      title: string;
      questions: any[];
    }
  > = {};

  for (const row of rawResults) {
    let crit = byCriterion[row.criterion_id];
    if (!crit) {
      crit = byCriterion[row.criterion_id] = {
        id: row.criterion_id,
        title: row.criterion_description,
        questions: [],
      };
    }

    let q = crit.questions.find((q) => q.question_id === row.question_id);
    if (!q) {
      q = {
        question_id: row.question_id,
        text: row.question_text,
        response: row.response,
        evidences: [] as string[],
        comments: [] as string[],
        created_at:
          row.comment_created_at?.toISOString() ??
          row.version_created_at.toISOString(),
        created_by: row.comment_created_by ?? row.creator_id,
        version_id: row.version_id,
        criterion_description: row.criterion_description,
      };
      crit.questions.push(q);
    }

    // Agregamos comentarios únicos
    if (row.comment_text && !q.comments.includes(row.comment_text)) {
      q.comments.push(row.comment_text);
    }
    // Agregamos evidencias únicas
    if (row.evidence_url && !q.evidences.includes(row.evidence_url)) {
      q.evidences.push(row.evidence_url);
    }
  }

  const result = {
    nit: first.nit,
    company_name: first.company_name,
    norm_name: first.norm_name,
    observations: null,
    total_questions: first.total_questions,
    answered_questions: first.answered_questions,
    completion_percentage: first.completion_percentage,
    criteria: Object.values(byCriterion).map((crit) => ({
      id: crit.id,
      title: crit.title,
      questions: crit.questions.map((q) => ({
        question_id: q.question_id,
        text: q.text,
        response: q.response,
        evidences: q.evidences.length ? [q.evidences] : null,
        comments: q.comments.length ? q.comments : null,
        created_at: q.created_at,
        created_by: q.created_by,
        version_id: q.version_id,
        criterion_description: q.criterion_description,
      })),
    })),
  };

  return [result];
}

export async function updateEvaluationWithDetails(data: UpdateEvaluationData) {
  // 1. Obtener la versión activa
  const previousVersion = await Prisma.evaluationVersion.findFirst({
    where: {
      evaluation_id: data.evaluation_id,
      is_latest: true,
    },
  });

  if (!previousVersion) {
    throw new Error("No se encontró una versión activa para esta evaluación");
  }

  // 2. Desactivar versiones anteriores
  await Prisma.evaluationVersion.updateMany({
    where: { evaluation_id: data.evaluation_id },
    data: { is_latest: false },
  });

  // 3. Crear nueva versión
  const newVersion = await Prisma.evaluationVersion.create({
    data: {
      evaluation_id: data.evaluation_id,
      created_by: data.user_id,
      is_latest: true,
      status: data.maturity_level,
      score: data.total_score,
      completion_percentage: data.completion_percentage,
      answered_questions: data.answered_questions,
      total_questions: data.total_questions,
    },
  });

  // 4. Clonar respuestas previas
  const previousAnswers = await Prisma.answer.findMany({
    where: { version_id: previousVersion.id },
    include: {
      comments: true,
      evidences: true,
    },
  });

  const answerMap = new Map<number, number>(); // question_id → new answer_id

  for (const old of previousAnswers) {
    const newAnswer = await Prisma.answer.create({
      data: {
        version_id: newVersion.id,
        question_id: old.question_id,
        score: old.score,
        response: old.response,
        created_by: data.user_id,
        created_at: new Date(),
      },
    });

    answerMap.set(old.question_id, newAnswer.id);

    for (const c of old.comments) {
      await Prisma.comment.create({
        data: {
          answer_id: newAnswer.id,
          text: c.text,
          created_by: data.user_id,
          created_at: new Date(),
        },
      });
    }

    for (const e of old.evidences) {
      await Prisma.evidence.create({
        data: {
          answer_id: newAnswer.id,
          url: e.url,
          created_by: data.user_id,
          created_at: new Date(),
        },
      });
    }
  }

  // 5. Sobrescribir respuestas modificadas
  for (const section of data.sections) {
    for (const question of section.questions) {
      const existingAnswerId = answerMap.get(question.question_id);

      if (existingAnswerId) {
        await Prisma.comment.deleteMany({ where: { answer_id: existingAnswerId } });
        await Prisma.evidence.deleteMany({ where: { answer_id: existingAnswerId } });

        await Prisma.answer.update({
          where: { id: existingAnswerId },
          data: {
            score: question.score,
            response: question.answer,
          },
        });

        if (question.comments?.trim()) {
          await Prisma.comment.create({
            data: {
              answer_id: existingAnswerId,
              text: question.comments.trim(),
              created_by: data.user_id,
              created_at: new Date(),
            },
          });
        }

        if (question.evidence?.length) {
          for (const url of question.evidence) {
            await Prisma.evidence.create({
              data: {
                answer_id: existingAnswerId,
                url:question.evidence,
                created_by: data.user_id,
                created_at: new Date(),
              },
            });
          }
        }
      }
    }
  }

  // 6. Actualizar observaciones generales
  await Prisma.evaluation.update({
    where: { id: data.evaluation_id },
    data: {
      observations: data.observations?.trim() ?? "",
    },
  });

  return { success: true, version_id: newVersion.id };
}



export async function getLatestVersionIdByEvaluationId(evaluationId: number) {
  const result = await Prisma.evaluationVersion.findFirst({
    where: {
      evaluation_id: evaluationId,
      is_latest: true,
    },
    select: {
      id: true,
    },
  });

  if (!result) throw new Error('No se encontró la versión activa para esta evaluación');

  return { version_id: result.id };
}

export async function getEvaluationsByCreator(userId: number) {
  const evaluations = await Prisma.evaluation.findMany({
    where: { created_by: userId },
    orderBy: { created_at: "desc" },
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
    observations: e.observations ?? "",
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

export async function createNormWithDetails(data: NormPayload): Promise<number> {
  return await Prisma.$transaction(async (tx) => {
    // 1. Crear la norma
    const createdNorm = await tx.norm.create({
      data: {
        code: data.code,
        name: data.name,
      },
    });

    // 2. Por cada criterio: insertarlo y luego insertar sus preguntas
    for (const criterion of data.criteria) {
      const createdCriterion = await tx.criterion.create({
        data: {
          norm_id: createdNorm.id,
          description: criterion.description,
        },
      });

      if (criterion.questions.length) {
        await tx.question.createMany({
          data: criterion.questions.map((q) => ({
            text: q.text,
            criterion_id: createdCriterion.id,
          })),
        });
      }
    }

    return createdNorm.id;
  });
}

interface NormPayload {
  code: string;
  name: string;
  criteria: {
    description: string;
    questions: {
      text: string;
    }[];
  }[];
}
