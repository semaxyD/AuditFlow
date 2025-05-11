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
