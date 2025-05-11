export const getPreguntasByIds = (ids: string[]) => ({
    where: { id: { in: ids } },
    select: { id: true },
  });