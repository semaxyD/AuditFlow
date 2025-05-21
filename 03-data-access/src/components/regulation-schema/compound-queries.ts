import { Prisma } from "../../prismaconfig/prisma-client";

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