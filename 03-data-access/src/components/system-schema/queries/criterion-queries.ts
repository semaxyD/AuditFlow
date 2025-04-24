import { prisma } from '../../../prismaconfig/prisma-client'

export async function getCriterionsByIds(ids: number[]) {
  const criterions = await prisma.criterion.findMany({
    where: { id: { in: ids } },
    select: { id: true, norm_id: true },
  });
  return criterions;
}
  