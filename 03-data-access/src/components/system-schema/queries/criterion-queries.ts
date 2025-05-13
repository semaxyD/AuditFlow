import { Prisma } from '../../../prismaconfig/prisma-client'

export async function getCriterionsByIds(ids: number[]) {
  const criterions = await Prisma.criterion.findMany({
    where: { id: { in: ids } },
    select: { id: true, norm_id: true },
  });

  console.log(criterions)
  return criterions;
}
  

//Query para traer preguntas de la HU008
export async function getQuestionsByNorm(normId: number) {
  const criterios = await Prisma.criterion.findMany({
    where: { norm_id: normId },
    orderBy: { id: 'asc' },
    select: {
      id: true,
      description: true,
      questions: {
        select: {
          id: true,
          text: true
        },
        orderBy: { id: 'asc' }
      }
    }
  });
  
  // 2. Re-mapeamos el resultado para usar los mismos nombres de campo que en el JSON_AGG
  const resultado = criterios.map(c => ({
    criterion_id: c.id,
    criterion_description: c.description,
    questions: c.questions.map(q => ({
      question_id: q.id,
      question_text: q.text
    }))
  }));

  return resultado
}