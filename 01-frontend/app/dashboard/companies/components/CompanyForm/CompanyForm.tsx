"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { toast } from "sonner";
import { CompanyDTO, companySchema } from "./CompanyForm.schema";

export function CompanyForm() {
  const [isLoading, setIsLoading] = useState(false);

  const form = useForm<CompanyDTO>({
    resolver: zodResolver(companySchema),
    defaultValues: {
      name: "",
      nit: "",
      address: "",
      phone: "",
      contact_name: "",
      contact_email: "",
    },
  });

  //Backend------------------------------------------------
  async function onSubmit(data: CompanyDTO) {
    setIsLoading(true); // Activa el estado de carga mientras se envía el formulario

    try {
      // Preparamos los datos que espera el backend
      const payload = {
        name: data.name,
        nit: data.nit,
        address: data.address,
        phone: data.phone,
        contactName: data.contact_name,
        contactEmail: data.contact_email,
      };
      // Enviamos los datos al backend
      const token = localStorage.getItem("token");
      const res = await fetch("http://localhost:3001/user/create/company", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(payload),
      });

      const result = await res.json(); // Obtenemos la respuesta del backend

      if (res.ok) {
        // se puede reemplazar alert() por un toast de shadcn, modal u otro tipo de mensaje

        toast.success("Compañía creada correctamente");
        window.location.reload(); // Recargamos la página para ver los cambios
        form.reset(); // Limpia el formulario
      } else {
        //Si hubo error (por ejemplo, correo ya registrado), mostramos el mensaje del backend
        toast.error(result.message || "Ocurrió un error al registrar");
      }

      console.log("Datos enviados:", data);
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
                <Input
                  placeholder="9001234567"
                  type="number"
                  step="1"
                  inputMode="numeric"
                  pattern="\d*"
                  {...field}
                />
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
          {isLoading ? "Creando..." : "Crear compañía"}
        </Button>
      </form>
    </Form>
  );
}
