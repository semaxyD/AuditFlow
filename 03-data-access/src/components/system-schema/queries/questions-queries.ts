import { Prisma } from '../../../prismaconfig/prisma-client'

export async function getQuestionsByIds(ids: number[]) {
  const questions = await Prisma.question.findMany({
    where: { id: { in: ids } },
    select: { id: true },
  });
  console.log(questions)
  return questions;
}
