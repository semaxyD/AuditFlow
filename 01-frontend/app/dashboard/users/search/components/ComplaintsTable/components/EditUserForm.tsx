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

export const userSchema = z.object({
  name: z.string().min(1, { message: "Nombre es requerido" }),
  email: z.string().email({ message: "Email inválido" }),
  role: z.string({ message: "Rol es requerido" }),
});

export function EditUserForm({ user }: { user: User }) {
  const [isLoading, setIsLoading] = useState(false);
  const form = useForm<z.infer<typeof userSchema>>({
    resolver: zodResolver(userSchema),
    defaultValues: {
      name: user.name,
      email: user.email,
      role: user.role,
    },
  });

  //Backend------------------------------------------------
  async function onSubmit(data: z.infer<typeof userSchema>) {
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
        id: user.id,
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
              <FormLabel>Nombre</FormLabel>
              <FormControl>
                <Input placeholder="Electricos S.A." {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Correo</FormLabel>
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

        <FormField
          control={form.control}
          name="role"
          render={({ field }) => (
            <FormItem className="col-span-full">
              <FormLabel>Rol</FormLabel>
              <FormControl>
                <Select onValueChange={field.onChange} value={field.value}>
                  <SelectTrigger>
                    <SelectValue placeholder="Seleccione un rol" />
                  </SelectTrigger>
                  <SelectContent>
                    {ROLES.map((r) => (
                      <SelectItem key={r.value} value={r.value}>
                        {r.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
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
          {isLoading ? "Editando..." : "Editar usuario"}
        </Button>
      </form>
    </Form>
  );
}
