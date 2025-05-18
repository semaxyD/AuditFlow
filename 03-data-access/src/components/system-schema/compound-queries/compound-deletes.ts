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

export async function deleteUser(userId: number) {
  // 1. Eliminar comentarios
  await Prisma.comment.deleteMany({
    where: { created_by: userId },
  });

  // 2. Eliminar evidencias
  await Prisma.evidence.deleteMany({
    where: { created_by: userId },
  });

  // 3. Eliminar respuestas
  await Prisma.answer.deleteMany({
    where: { created_by: userId },
  });

  // 4. Eliminar versiones de evaluación
  await Prisma.evaluationVersion.deleteMany({
    where: { created_by: userId },
  });

  // 5. Eliminar evaluaciones
  await Prisma.evaluation.deleteMany({
    where: { created_by: userId },
  });

  // 6. Eliminar configuraciones de frecuencia
  await Prisma.evaluationFrequencyConfig.deleteMany({
    where: { user_id: userId },
  });

  // 7. Eliminar relación con empresas
  await Prisma.companyAuditor.deleteMany({
    where: { user_id: userId },
  });

  // 8. Eliminar el usuario
  return await Prisma.user.delete({
    where: { id: userId },
  });
}


export async function deleteEvaluationVersion(dto: DeleteEvaluationData) {
  // Paso 1: validar propiedad de la versión
  const version = await Prisma.evaluationVersion.findUnique({
    where: { id: dto.versionId },
    select: { created_by: true },
  });

  if (!version || version.created_by !== dto.userId) {
    throw new ForbiddenException('No tienes permiso para eliminar esta versión.');
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

//Interfaces de datos usado en la HU008
export interface DeleteEvaluationData {
  versionId: number;
  userId: number;
}
