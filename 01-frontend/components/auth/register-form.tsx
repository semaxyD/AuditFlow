"use client";

import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
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
import { UserRole, RegisterFormData } from "@/lib/types";

const formSchema = z.object({
  name: z.string().min(2, "El nombre debe tener al menos 2 caracteres"),
  email: z.string().email("Correo electrónico inválido"),
  password: z.string().min(6, "La contraseña debe tener al menos 6 caracteres"),
  role: z.enum([
    "admin",
    "auditor_interno",
    "auditor_externo",
    "empresa_cliente",
  ]),
  companyIds: z.array(z.number()).length(1, "Seleccione una empresa"),
});

type FormValues = z.infer<typeof formSchema>;
type Company = { id: number; name: string; phone: string };

export const ROLES: { value: UserRole; label: string }[] = [
  { value: "admin", label: "Administrador" },
  { value: "auditor_interno", label: "Auditor Interno" },
  { value: "auditor_externo", label: "Auditor Externo" },
];

export function RegisterForm() {
  const [isLoading, setIsLoading] = useState(false);
  const [companies, setCompanies] = useState<Company[]>([]);
  const [loadingCompanies, setLoadingCompanies] = useState(true);

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
      role: "auditor_interno",
      companyIds: [],
    },
  });
  const token = localStorage.getItem("token");

  useEffect(() => {
    async function load() {
      try {
        console.log("⏳ Iniciando fetch de companiesList con headers:", {
          Authorization: `Bearer ${token}`,
        });

        const res = await fetch("http://localhost:3001/user/companiesList", {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        });

        console.log("✅ Recibí respuesta:", res.status, res.statusText);
        console.log(" Response headers:", Array.from(res.headers.entries()));

        const data = await res.json();
        console.log("📦 companiesList data:", data);

        if (Array.isArray(data)) {
          setCompanies(data);
        } else if (Array.isArray(data.companies)) {
          setCompanies(data.companies);
        } else {
          toast.error("Formato inesperado de empresas");
        }
      } catch (err) {
        console.error("❌ Error al cargar empresas:", err);
        toast.error("No se pudieron cargar las empresas.");
      } finally {
        setLoadingCompanies(false);
      }
    }
    load();
  }, []);

  async function onSubmit(data: FormValues) {
    setIsLoading(true);
    try {
      const payload: RegisterFormData = {
        name: data.name,
        email: data.email,
        password: data.password,
        role: data.role,
        companyIds: data.companyIds,
      };

      const res = await fetch("http://localhost:3001/user/create", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(payload),
      });

      const result = await res.json();
      if (res.ok) {
        toast.success("Usuario registrado", { description: result.message });
        form.reset();
      } else {
        toast.error("Error", {
          description: result.message || "Ocurrió un error al registrar.",
        });
      }
    } catch (error) {
      console.error(error);
      toast.error("Error", {
        description: "Ocurrió un error al registrar. Intente más tarde.",
      });
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        {/* Nombre */}
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Nombre</FormLabel>
              <FormControl>
                <Input {...field} placeholder="Ingrese su nombre" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Email */}
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Correo electrónico</FormLabel>
              <FormControl>
                <Input
                  {...field}
                  type="email"
                  placeholder="ejemplo@correo.com"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Contraseña */}
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Contraseña</FormLabel>
              <FormControl>
                <Input {...field} type="password" placeholder="********" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Rol */}
        <FormField
          control={form.control}
          name="role"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Rol</FormLabel>
              <FormControl>
                <Select
                  value={field.value || "empresa_cliente"} // <- forzamos fallback
                  onValueChange={(val) => field.onChange(val)}
                >
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

        {/* Empresa (single select) */}
        <FormField
          control={form.control}
          name="companyIds"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Empresa</FormLabel>
              <FormControl>
                <Select
                  onValueChange={(val) => {
                    if (val !== "loading") field.onChange([Number(val)]);
                  }}
                  value={field.value[0]?.toString() || ""}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Seleccione una empresa" />
                  </SelectTrigger>
                  <SelectContent>
                    {loadingCompanies && (
                      <SelectItem value="loading" disabled>
                        Cargando empresas…
                      </SelectItem>
                    )}
                    {!loadingCompanies &&
                      companies.map((c) => (
                        <SelectItem key={c.id} value={c.id.toString()}>
                          {c.name}
                        </SelectItem>
                      ))}
                  </SelectContent>
                </Select>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button type="submit" className="w-full" disabled={isLoading}>
          {isLoading ? "Registrando..." : "Registrar"}
        </Button>
      </form>
    </Form>
  );
}
