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
import { companyUpdateSchema } from "../CompanyForm/CompanyUpdate.schema";
import { z } from "zod";
import { toast } from "sonner";

export type Company = {
  id: number;
  name: string;
  address: string;
  phone: string;
  contact_name: string;
  contact_email: string;
};

interface EditCompanyFormProps {
  company: Company;
  onUpdated?: () => void;
}

export function EditCompanyForm({ company, onUpdated }: EditCompanyFormProps) {
  const [isLoading, setIsLoading] = useState(false);

  const form = useForm<z.infer<typeof companyUpdateSchema>>({
    resolver: zodResolver(companyUpdateSchema),
    defaultValues: {
      name: company.name,
      address: company.address,
      phone: company.phone,
      contact_name: company.contact_name,
      contact_email: company.contact_email,
    },
  });

  const {
    handleSubmit,
    control,
    formState: { dirtyFields },
    getValues,
    reset,
  } = form;

  async function onSubmit() {
    setIsLoading(true);

    const allValues = getValues();
    const changedFields: Partial<z.infer<typeof companyUpdateSchema>> = {};
    for (const key of Object.keys(dirtyFields) as Array<
      keyof typeof dirtyFields
    >) {
      // @ts-ignore
      changedFields[key] = allValues[key];
    }

    const payload = {
      id: company.id,
      phone: allValues.phone,
      name: allValues.name,
      address: allValues.address,
      contactName: allValues.contact_name,
      contactEmail: allValues.contact_email,
    };

    console.log("Payload a enviar:", payload);

    try {
      const token = window.localStorage.getItem("token") ?? "";
      const res = await fetch(
        `http://localhost:3001/user/update/company/${company.id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify(payload),
        }
      );

      const result = await res.json();

      if (res.ok) {
        toast.success("Compañía actualizada correctamente", {
          description: result.message,
        });
        reset(allValues); // reset con los nuevos valores como "limpios"
        onUpdated?.();
      } else {
        toast.error("Error al actualizar compañía", {
          description: result.message,
        });
      }
    } catch (error) {
      console.error("Error al actualizar compañía:", error);
      toast.error("Error al actualizar compañía. Intenta más tarde.");
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <Form {...form}>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="space-y-4 grid grid-cols-2 gap-4"
      >
        {/* Nombre */}
        <FormField
          control={control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Nombre o Razón social</FormLabel>
              <FormControl>
                <Input {...field} placeholder="Electricos S.A." />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Dirección */}
        <FormField
          control={control}
          name="address"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Dirección</FormLabel>
              <FormControl>
                <Input {...field} placeholder="Calle 123 #45-67" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Teléfono */}
        <FormField
          control={control}
          name="phone"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Teléfono</FormLabel>
              <FormControl>
                <Input {...field} placeholder="123 456 7890" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Nombre representante */}
        <FormField
          control={control}
          name="contact_name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Nombre de representante</FormLabel>
              <FormControl>
                <Input {...field} placeholder="Juan Pérez" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Correo representante */}
        <FormField
          control={control}
          name="contact_email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Correo del representante</FormLabel>
              <FormControl>
                <Input
                  type="email"
                  {...field}
                  placeholder="example@gmail.com"
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
          {isLoading ? "Editando..." : "Editar compañía"}
        </Button>
      </form>
    </Form>
  );
}
