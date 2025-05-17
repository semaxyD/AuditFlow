import { Prisma } from '../../../prismaconfig/prisma-client'

//Query para traer los id de las normas disponibles de la HU008
export async function getAllNormsBasicInfo() {
    return await Prisma.norm.findMany({
      select: {
        id: true,
        code: true,
        name: true,
      },
      orderBy: {
        code: 'asc',
      },
    });
}



  