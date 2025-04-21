export const getCriteriosByIds = (ids: string[]) => ({
    where: { id: { in: ids } },
    select: { id: true, standard_id: true },
  });
  