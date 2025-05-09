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
import { Company } from "../../mock/mock";
import { companySchema } from "../CompanyForm/CompanyForm.schema";
import { z } from "zod";

export function EditCompanyForm({ company }: { company: Company }) {
  const [isLoading, setIsLoading] = useState(false);
  const form = useForm<z.infer<typeof companySchema>>({
    resolver: zodResolver(companySchema),
    defaultValues: {
      name: company.name,
      nit: company.nit,
      address: company.address,
      phone: company.phone,
      contact_name: company.contact_name,
      contact_email: company.contact_email,
    },
  });

  //Backend------------------------------------------------
  async function onSubmit(data: z.infer<typeof companySchema>) {
    setIsLoading(true); // Activa el estado de carga mientras se envía el formulario

    try {
      // Preparamos los datos que espera el backend

      // Enviamos los datos al backend
      //   const res = await fetch("http://localhost:3001/usuarios", {
      //     method: "POST",
      //     headers: {
      //       "Content-Type": "application/json",
      //     },
      //     body: JSON.stringify(payload),
      //   });

      //   const result = await res.json(); // Obtenemos la respuesta del backend

      //   if (res.ok) {
      // se puede reemplazar alert() por un toast de shadcn, modal u otro tipo de mensaje

      // alert(result.message || "Usuario registrado correctamente");
      // form.reset(); // Limpia el formulario
      //   } else {
      //Si hubo error (por ejemplo, correo ya registrado), mostramos el mensaje del backend
      // alert(result.message || "Ocurrió un error al registrar");
      //   }

      let payload = {
        id: company.id,
        ...data,
      };

      console.log("Datos enviados:", payload);
    } catch (error) {
      //mostramos error genérico
      alert("Error al registrar usuario. Intente más tarde.");
      console.error(error);
    } finally {
      setIsLoading(false); // Apagamos el estado de carga
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
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Nombre o Razón social</FormLabel>
              <FormControl>
                <Input placeholder="Electricos S.A." {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="nit"
          render={({ field }) => (
            <FormItem>
              <FormLabel>NIT</FormLabel>
              <FormControl>
                <Input placeholder="9001234567" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="address"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Dirección</FormLabel>
              <FormControl>
                <Input placeholder="Calle 123 #45-67" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="phone"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Teléfono</FormLabel>
              <FormControl>
                <Input placeholder="123 456 7890" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="contact_name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Nombre de representante</FormLabel>
              <FormControl>
                <Input placeholder="Juan Pérez" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="contact_email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Correo del representante</FormLabel>
              <FormControl>
                <Input
                  placeholder="example@gmail.com"
                  type="email"
                  {...field}
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
          {isLoading ? "Editando..." : "Editando compañía"}
        </Button>
      </form>
    </Form>
  );
}
