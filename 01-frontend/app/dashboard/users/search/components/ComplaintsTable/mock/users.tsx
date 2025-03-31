export type User = {
  id: string;
  name: string;
  email: string;
  role: string; // Administrador
  //   Auditor Interno
  //   Auditor Externo
  //   Empresa Cliente
};

export const USERS_MOCK: User[] = [
  {
    id: "1",
    name: "Juan Perez",
    email: "juan.perez@example.com",
    role: "Administrador",
  },
  {
    id: "2",
    name: "Juan Perez",
    email: "juan.perez@example.com",
    role: "Auditor Interno",
  },
  {
    id: "3",
    name: "Juan Perez",
    email: "juan.perez@example.com",
    role: "Auditor Externo",
  },
  {
    id: "4",
    name: "Juan Perez",
    email: "juan.perez@example.com",
    role: "Empresa Cliente",
  },
];
