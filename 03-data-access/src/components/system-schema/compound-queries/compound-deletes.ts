import { ForbiddenException } from "@nestjs/common";
import { Prisma } from "../../../prismaconfig/prisma-client";

export async function deleteCompany( companyId: number) {
  // 1. Eliminar evidencias y comentarios
  await Prisma.comment.deleteMany({
    where: {
      answer: {
        evaluationVersion: {
          evaluation: {
            company_id: companyId,
          },
        },
      },
    },
  });

  await Prisma.evidence.deleteMany({
    where: {
      answer: {
        evaluationVersion: {
          evaluation: {
            company_id: companyId,
          },
        },
      },
    },
  });

  // 2. Eliminar respuestas
  await Prisma.answer.deleteMany({
    where: {
      evaluationVersion: {
        evaluation: {
          company_id: companyId,
        },
      },
    },
  });

  // 3. Eliminar versiones de evaluación
  await Prisma.evaluationVersion.deleteMany({
    where: {
      evaluation: {
        company_id: companyId,
      },
    },
  });

  // 4. Eliminar evaluaciones
  await Prisma.evaluation.deleteMany({
    where: {
      company_id: companyId,
    },
  });

  // 5. Eliminar relaciones de frecuencia
  await Prisma.evaluationFrequencyConfig.deleteMany({
    where: {
      company_id: companyId,
    },
  });

  // 6. Eliminar relaciones con usuarios (CompanyAuditor)
  await Prisma.companyAuditor.deleteMany({
    where: {
      company_id: companyId,
    },
  });

  // 7. Finalmente, eliminar la empresa
  return Prisma.company.delete({
    where: { id: companyId },
  });
}

export async function deleteEvaluationVersion(dto: DeleteEvaluationData) {
  // Paso 1: validar propiedad y relación con la evaluación
  const version = await Prisma.evaluationVersion.findFirst({
    where: {
      id: dto.versionId,
      evaluation_id: dto.evaluationId,
      created_by: dto.userId,
    },
    select: { id: true },
  });

  if (!version) {
    throw new ForbiddenException('No tienes permiso para eliminar esta versión o no existe.');
  }

  // Paso 2: eliminar en orden seguro
  await Prisma.$transaction(async (tx) => {
    // Obtener los IDs de respuestas de la versión
    const answers = await tx.answer.findMany({
      where: { version_id: dto.versionId },
      select: { id: true },
    });
    const answerIds = answers.map((a) => a.id);

    if (answerIds.length > 0) {
      // Eliminar comentarios
      await tx.comment.deleteMany({
        where: { answer_id: { in: answerIds } },
      });

      // Eliminar evidencias
      await tx.evidence.deleteMany({
        where: { answer_id: { in: answerIds } },
      });

      // Eliminar respuestas
      await tx.answer.deleteMany({
        where: { id: { in: answerIds } },
      });
    }

    // Eliminar la versión
    await tx.evaluationVersion.delete({
      where: { id: dto.versionId },
    });
  });

  return { message: 'Versión eliminada correctamente' };
}

//Interfaces de datos usado en la HU013
export interface DeleteEvaluationData {
  evaluationId: number,
  versionId: number;
  userId: number;
}