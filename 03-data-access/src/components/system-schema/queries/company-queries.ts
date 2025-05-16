import { Prisma } from "../../../prismaconfig/prisma-client";

// Función para obtener todas las empresas QUERY 01
export async function getAllCompanies() {
  const companies = await Prisma.company.findMany({
    select: {
      id: true,
      name: true,
      address: true,
      phone: true,
      contact_name: true,
      contact_email: true,
    },
  });
  return companies;
}

// Función para obtener lista de las empresas
export async function getListCompanies() {
  const companies = await Prisma.company.findMany({
    select: {
      id: true,
      name: true,
      phone: true,
    },
  });
  return companies;
}
export async function getAllCompaniesByUser(userId: number) {
  return await Prisma.company.findMany({
    where: {
      editorUsers: {
        some: {
          user_id: userId,
        },
      },
    },
    select: {
      id: true,
      name: true,
      address: true,
      phone: true,
      contact_name: true,
      contact_email: true,
    },
  });
}


