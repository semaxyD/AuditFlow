"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { User } from "./EditUserModal";

import { z } from "zod";
import { ROLES } from "@/components/auth/register-form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export const frequencySchema = z.object({
  userId: z.number({ message: "El ID del usuario es requerido" }),
  companyId: z.number({ message: "La compañia es requerida" }),
  normId: z.number({ message: "La norma es requerida" }),
  frequencyDays: z.number({ message: "Los días son requeridos" }).min(10, {
    message: "El número de dias debe ser mayor a 10",
  }),
});

export default function EditUserForm({
  userId,
  rules,
  companies,
}: {
  userId: string;
  rules: any[];
  companies: any[];
}) {
  const [isLoading, setIsLoading] = useState(false);
  const form = useForm<z.infer<typeof frequencySchema>>({
    resolver: zodResolver(frequencySchema),
    defaultValues: {
      userId: Number(userId),
      companyId: undefined,
      normId: undefined,
      frequencyDays: 10,
    },
  });

  //Backend------------------------------------------------
  async function onSubmit(data: z.infer<typeof frequencySchema>) {
    setIsLoading(true);

    try {
      const payload = {
        userId: Number(userId),
        companyId: Number(data.companyId),
        normId: Number(data.normId),
        frequencyDays: Number(data.frequencyDays),
      };

      console.log("Datos enviados:", payload);
      // Aquí iría tu llamada al backend
    } catch (error) {
      alert("Error al editar frecuencia de auditorias. Intente más tarde.");
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  }
  //Backend------------------------------------------------------

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-3 grid grid-cols-2 gap-4"
      >
        <FormField
          control={form.control}
          name="companyId"
          render={({ field }) => (
            <FormItem className="col-span-full">
              <FormLabel>Compañia</FormLabel>
              <FormControl>
                <Select
                  onValueChange={(value) => field.onChange(Number(value))}
                  value={field.value?.toString()}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Seleccione una compañia" />
                  </SelectTrigger>
                  <SelectContent>
                    {companies.map((company) => (
                      <SelectItem
                        key={company.id}
                        value={company.id.toString()}
                      >
                        {company.name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="normId"
          render={({ field }) => (
            <FormItem className="col-span-full">
              <FormLabel>Norma</FormLabel>
              <FormControl>
                <Select
                  onValueChange={(value) => field.onChange(Number(value))}
                  value={field.value?.toString()}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Seleccione una norma"/>
                  </SelectTrigger>
                  <SelectContent>
                    {rules.map((rule) => (
                      <SelectItem key={rule.id} value={rule.id.toString()}>
                        {rule.name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="frequencyDays"
          render={({ field }) => (
            <FormItem className="w-full col-span-full">
              <FormLabel>Frecuencia de evaluación (días)</FormLabel>
              <FormControl>
                <Input
                  type="number"
                  placeholder="10..."
                  {...field}
                  onChange={(e) => field.onChange(Number(e.target.value))}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button
          type="submit"
          className="w-full col-span-full"
          disabled={isLoading}
        >
          {isLoading ? "Editando..." : "Editar frecuencia de evaluación"}
        </Button>
      </form>
    </Form>
  );
}
