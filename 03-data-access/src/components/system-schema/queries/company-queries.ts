import { prisma } from "../../../prismaconfig/prisma-client";

// Función para obtener todas las empresas QUERY 01
export async function getAllCompanies() {
  const companies = await prisma.company.findMany({
    select: {
      id: true,
      name: true,
    },
  });
  return companies;
}
