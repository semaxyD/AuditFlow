// src/components/CompanyForm/companyUpdate.schema.ts
import { z } from "zod";

// Este es tu esquema original,
export const companyUpdateSchema = z
  .object({
    name: z.string().min(1),
    nit: z.coerce
      .number({
        invalid_type_error: "El NIT debe ser un número",
      })
      .int("El NIT debe ser un entero")
      .positive("El NIT debe ser positivo"),
    address: z.string().min(1),
    phone: z.string().min(1),
    contact_name: z.string().min(1),
    contact_email: z.string().email(),
  })
  .partial(); // <-- todos opcionales

export type CompanyUpdate = z.infer<typeof companyUpdateSchema>;
