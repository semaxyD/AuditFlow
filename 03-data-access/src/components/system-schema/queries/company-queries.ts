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

export async function getCompanyByName(name: string) {
  return Prisma.company.findUnique({
    where: { name: name },
  });
}

export async function createCompany(dto: CreateCompany) {

  const result = await Prisma.$executeRawUnsafe(`
    INSERT INTO "company" (
      name, nit, address, contact_name, contact_email, phone
    ) VALUES (
      $1, $2, $3, $4, $5, $6
    )
  `, dto.name, dto.nit, dto.address, dto.contactName, dto.contactEmail, dto.phone);

  return result;
}

export async function getCompanyById(id: number) {
  return Prisma.company.findUnique({
    where: { id },
  });
}

export async function updateCompany(input: UpdateCompany) {
  const { companyId, ...data } = input;
  return Prisma.company.update({
    where: { id: companyId },
    data: {
      name: data.name,
      nit: data.nit,
      address: data.address,
      contact_name: data.contactName,
      contact_email: data.contactEmail,
      phone: data.phone,
    },
  });
}

interface UpdateCompany {
  companyId: number;
  name?: string;
  nit?: number;
  address?: string;
  contactName?: string;
  contactEmail?: string;
  phone?: string;
}

interface CreateCompany {
  name: string;
  nit: number;
  address: string;
  contactName: string;
  contactEmail: string;
  phone: string;
}