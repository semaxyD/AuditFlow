import { prisma } from "../../../prismaconfig/prisma-client";

//Query para hu002 - ver todo los usuarios actuales del sistema
export async function searchUser() {
  const userFind = await prisma.user.findMany({
    select: {
      id: true,
      name: true,
      email: true,
      role: true,
    },
  });
  return userFind;
}

//Query para hu002 - Buscar un usaurio especifico para poder ver su informaicon
export async function getUserById(id: number) {
  const userById = await prisma.user.findUnique({
    where: { id },
    select: {
      id: true,
      name: true,
      email: true,
      role: true,
    },
  });
  return userById;
}

//Query para hu001-005 - Buscar un usaurio existente con el correo proporcionado
export async function getUserByEmail(email: string) {
  const userByEmail = await prisma.user.findUnique({
    where: { email },
  });
  return userByEmail;
}

//Query para hu001 - Crear un usuario apartir de sus datos proporcionados
export async function createUser(data: {
  name: string;
  email: string;
  password: string;
  role: string;
}) {
  const userCreate = await prisma.user.create({ data });
  return userCreate;
}

//Query para hu008 - Buscar el id de la compañia a la cual el user esta asociado
export async function getUserCompanyById(userId: number) {
  const editor = await prisma.companyEditor.findMany({
    where: { user_id: userId },
    select: { company_id: true },
  });
  return editor;
}

export async function validateUserEmail(email:string) {
  const validate = await prisma.user.findUnique({
    where: {email: email},
  });
  return validate;
}

