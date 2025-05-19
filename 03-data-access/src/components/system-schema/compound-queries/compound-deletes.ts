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


export async function deleteEvaluation(dto: DeleteEvaluationData) {
  // Paso 1: validar propiedad de la evaluación
  const evaluation = await Prisma.evaluation.findFirst({
    where: {
      id: dto.evaluationId,
      created_by: dto.userId,
    },
    select: { id: true },
  });

  if (!evaluation) {
    throw new ForbiddenException('No tienes permiso para eliminar esta evaluación o no existe.');
  }

  // Paso 2: eliminar en cascada dentro de una transacción
  await Prisma.$transaction(async (tx) => {
    // 2.1: Obtener todas las versiones de la evaluación
    const versions = await tx.evaluationVersion.findMany({
      where: { evaluation_id: dto.evaluationId },
      select: { id: true },
    });

    const versionIds = versions.map((v) => v.id);

    if (versionIds.length > 0) {
      // 2.2: Obtener todos los IDs de respuestas de esas versiones
      const answers = await tx.answer.findMany({
        where: { version_id: { in: versionIds } },
        select: { id: true },
      });
      const answerIds = answers.map((a) => a.id);

      if (answerIds.length > 0) {
        // 2.3: Eliminar comentarios
        await tx.comment.deleteMany({
          where: { answer_id: { in: answerIds } },
        });

        // 2.4: Eliminar evidencias
        await tx.evidence.deleteMany({
          where: { answer_id: { in: answerIds } },
        });

        // 2.5: Eliminar respuestas
        await tx.answer.deleteMany({
          where: { id: { in: answerIds } },
        });
      }

      // 2.6: Eliminar versiones
      await tx.evaluationVersion.deleteMany({
        where: { id: { in: versionIds } },
      });
    }

    // 2.7: Eliminar la evaluación
    await tx.evaluation.delete({
      where: { id: dto.evaluationId },
    });
  });

  return { message: 'Evaluación eliminada correctamente' };
}

//Interfaces de datos usado en la HU013
export interface DeleteEvaluationData {
  evaluationId: number,
  userId: number;
}
