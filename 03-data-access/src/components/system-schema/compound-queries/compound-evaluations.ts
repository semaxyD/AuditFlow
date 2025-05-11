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
  const evolutionRecords = await Prisma.evaluationVersion.findMany({
    where: { evaluation_id: evaluationId },
    orderBy: {
      version_number: "asc",
    },
    select: {
      id: true,
      is_latest: true,
      score: true,
      created_at: true,
      version_number: true,
      creator: {
        select: { name: true },
      },

      evaluation: {
        select: {
          company: {
            select: { name: true, id: true },
          },
          norm: {
            select: { name: true },
          },
        },
      },
    },
  });
  return evolutionRecords.map((ev) => ({
    company_name: ev.evaluation.company.name,
    company_id: ev.evaluation.company.id,
    norm_name: ev.evaluation.norm.name,
    version_id: ev.id,
    creator_name: ev.creator.name,
    is_latest: ev.is_latest,
    score: ev.score,
    created_at: ev.created_at,
    version_number: ev.version_number,
  }));
}

export async function getEvaluationsByCompany(companyId: number) {
  const evaluations = await Prisma.evaluation.findMany({
    where: { company_id: companyId },
    orderBy: { created_at: "desc" },
    select: {
      company: {
        select: { name: true, id: true },
      },
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

  // Formateamos al shape que usas en el frontend
  return evaluations.map((e) => ({
    company_id: e.company.id,
    company_name: e.company.name,
    evaluation_id: e.id,
    evaluation_created_at: e.created_at,
    creator_name: e.creator.name,
    norm_id: e.norm.id,
    norm_name: e.norm.name,
    norm_code: e.norm.code,
  }));
}

//Query para la HU-008 insertar una evaluación hecha con todos sus datos
export async function createEvaluationWithDetails(
  data: EvaluationData,
  userId: number
) {
  return await Prisma.$transaction(async (tx) => {
    // 1. Crear la evaluación, AHORA con norm_id
    const evaluation = await tx.evaluation.create({
      data: {
        company_id: data.company_id,
        created_by: userId,
        norm_id: data.norm_id,
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

    // 3. Insertar respuestas, observaciones y evidencias...
    for (const section of data.sections) {
      for (const question of section.questions) {
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

        if (question.evidence?.length) {
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
  norm_id: number;
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
