import { prisma } from '../../../prismaconfig/prisma-client'

export async function getQuestionsByIds(ids: number[]) {
  const questions = await prisma.question.findMany({
    where: { id: { in: ids } },
    select: { id: true },
  });
  return questions;
}
    