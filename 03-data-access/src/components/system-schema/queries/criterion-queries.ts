import { Prisma } from '../../../prismaconfig/prisma-client'

export async function getCriterionsByIds(ids: number[]) {
  const criterions = await Prisma.criterion.findMany({
    where: { id: { in: ids } },
    select: { id: true, norm_id: true },
  });
  return criterions;
}
  