import { Prisma } from "../../../prismaconfig/prisma-client";

// QUERY: Obtener la configuración de frecuencia personalizada de un auditor para una norma y empresa
export async function getFrequencyConfigByUserCompanyNorm({
  userId,
  companyId,
  normId,
}: {
  userId: number;
  companyId: number;
  normId: number;
}) {
  return await Prisma.evaluationFrequencyConfig.findFirst({
    where: {
      user_id: userId,
      company_id: companyId,
      norm_id: normId,
    },
    select: {
      frequency_days: true,
    },
  });
}

// QUERY: Insertar o actualizar configuración de frecuencia para auditor
export async function upsertFrequencyConfig({
  userId,
  companyId,
  normId,
  frequencyDays,
}: {
  userId: number;
  companyId: number;
  normId: number;
  frequencyDays: number;
}) {
  return await Prisma.evaluationFrequencyConfig.upsert({
    where: {
      user_id_company_id_norm_id: {
        user_id: userId,
        company_id: companyId,
        norm_id: normId,
      },
    },
    update: {
      frequency_days: frequencyDays,
    },
    create: {
      user_id: userId,
      company_id: companyId,
      norm_id: normId,
      frequency_days: frequencyDays,
    },
  });
}

export async function getLastEvaluationByUserCompanyNorm({
  userId,
  companyId,
  normId,
}: {
  userId: number;
  companyId: number;
  normId: number;
}) {
  return await Prisma.evaluation.findFirst({
    where: {
      created_by: userId,
      company_id: companyId,
      norm_id: normId,
    },
    orderBy: {
      created_at: 'desc',
    },
    select: {
      id: true,
      created_at: true,
    },
  });
}

// QUERY: Eliminar configuración de frecuencia para un auditor, empresa y norma
export async function deleteFrequencyConfig({
  userId,
  companyId,
  normId,
}: {
  userId: number;
  companyId: number;
  normId: number;
}) {
  return await Prisma.evaluationFrequencyConfig.delete({
    where: {
      user_id_company_id_norm_id: {
        user_id: userId,
        company_id: companyId,
        norm_id: normId,
      },
    },
  });
}