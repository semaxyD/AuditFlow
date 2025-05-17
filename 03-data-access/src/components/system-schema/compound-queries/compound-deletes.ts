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