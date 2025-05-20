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
import { toast } from "sonner";
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

  async function onSubmit(data: z.infer<typeof userSchema>) {
    setIsLoading(true);

    const payload = {
      id: user.id,
      ...data,
    };
    console.log("Datos enviados:", payload);

    try {
      const token = localStorage.getItem("token") || "";
      const res = await fetch(`http://localhost:3001/user/update/${user.id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(payload),
      });

      const result = await res.json();

      if (res.ok) {
        toast.success("Usuario editado correctamente");
        window.location.reload();
        form.reset(data);
      } else {
        console.error("Error al editar usuario:", result);
        toast.error("Error al editar usuario");
      }
    } catch (error) {
      console.error("Excepción al editar usuario:", error);
      toast.error("Error al editar usuario. Intente más tarde.");
    } finally {
      setIsLoading(false);
    }
  }

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
                <Input placeholder="Nombre completo" {...field} />
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
