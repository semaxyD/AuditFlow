import { z } from "zod";
import { companySchema } from "./CompanyForm.schema";

export const companyUpdateSchema = companySchema.partial().extend({
  nit: z.coerce
    .number({ invalid_type_error: "El NIT debe ser un número" })
    .int("El NIT debe ser un entero")
    .positive("El NIT debe ser positivo")
    .optional(),
});

export type CompanyUpdate = z.infer<typeof companyUpdateSchema>;
