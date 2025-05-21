// src/components/CompanyForm/company.schema.ts
import { z } from "zod";

export interface CompanyDTO {
  name: string;
  nit: string;
  address: string;
  phone: string;
  contact_name: string;
  contact_email: string;
}

export const companySchema = z.object({
  name: z.string().min(1, { message: "Nombre es requerido" }),
  nit: z.string().min(1, { message: "NIT es requerido" }),
  address: z.string().min(1, { message: "Dirección es requerida" }),
  phone: z.string().min(1, { message: "Teléfono es requerido" }),
  contact_name: z
    .string()
    .min(1, { message: "Nombre de contacto es requerido" }),
  contact_email: z.string().email({ message: "Email inválido" }),
});

export type CompanyCreate = z.infer<typeof companySchema>;
