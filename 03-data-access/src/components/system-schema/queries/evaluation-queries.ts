import { prisma } from "../../../prismaconfig/prisma-client";

// Función para obtener todas las evaluaciones de una empresa QUERY 02
export async function getEvaluationsByCompany(companyId: number) {
  const evaluations = await prisma.evaluation.findMany({
    where: {
      company_id: companyId,
    },
    select: {
      id: true,
      created_at: true,
      auditor_id: true,
      company_id: true,
    },
  });

  return evaluations;
}
