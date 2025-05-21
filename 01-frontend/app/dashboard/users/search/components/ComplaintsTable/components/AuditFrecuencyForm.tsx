"use client";

import { useState, useEffect } from "react";
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

export const frequencySchema = z.object({
  userId: z.number({ message: "El ID del usuario es requerido" }),
  companyId: z.number({ message: "La compañía es requerida" }),
  normId: z.number({ message: "La norma es requerida" }),
  frequencyDays: z
    .number({ message: "Los días son requeridos" })
    .min(10, { message: "El número de días debe ser mayor o igual a 10" }),
});

export type FrequencyFormData = z.infer<typeof frequencySchema>;

type Company = { id: number; name: string };
type Norm = { id: number; name: string };

export default function EditFrequencyForm({ userId }: { userId: string }) {
  const [isLoading, setIsLoading] = useState(false);
  const [companies, setCompanies] = useState<Company[]>([]);
  const [rules, setRules] = useState<Norm[]>([]);

  const form = useForm<FrequencyFormData>({
    resolver: zodResolver(frequencySchema),
    defaultValues: {
      userId: Number(userId),
      companyId: undefined,
      normId: undefined,
      frequencyDays: 10,
    },
  });

  const token =
    typeof window !== "undefined" ? localStorage.getItem("token") : "";

  // Carga de compañías
  useEffect(() => {
    async function loadCompanies() {
      try {
        const res = await fetch(
          `http://localhost:3001/user/${userId}/companies`,
          {
            headers: { Authorization: `Bearer ${token}` },
          }
        );
        console.log("Compañías:", res);
        if (!res.ok) throw new Error("Falló al cargar compañías");
        const data: Company[] = await res.json();
        console.log("🌐 Companies fetched:", data);
        setCompanies(data);
      } catch (err) {
        console.error(err);
      }
    }
    loadCompanies();
  }, [userId, token]);

  // Carga de normas
  useEffect(() => {
    async function loadRules() {
      try {
        const res = await fetch(`http://localhost:3001/user/config/norms`, {
          headers: { Authorization: `Bearer ${token}` },
        });
        if (!res.ok) throw new Error("Falló al cargar normas");
        const data: Norm[] = await res.json();
        setRules(data);
      } catch (err) {
        console.error(err);
      }
    }
    loadRules();
  }, [token]);

  async function onSubmit(data: FrequencyFormData) {
    setIsLoading(true);
    try {
      const payload = {
        userId: data.userId,
        companyId: data.companyId,
        normId: data.normId,
        frequencyDays: data.frequencyDays,
      };
      console.log("Datos enviados:", payload);
      const res = await fetch(`http://localhost:3001/user/config/frequency`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(payload),
      });
      const result = await res.json();
      if (res.ok) {
        toast.success("Frecuencia de auditoría actualizada correctamente");
        form.reset(data);
        window.location.reload();
      } else {
        toast.error(result.message || "Error al actualizar la frecuencia");
      }
    } catch (error) {
      console.error(error);
      toast.error("Error de red. Intenta más tarde.");
    } finally {
      setIsLoading(false);
    }
  }

  async function handleDelete() {
    setIsLoading(true);

    try {
      const { userId, companyId, normId } = form.getValues();

      if (!companyId || !normId) {
        toast.error("Selecciona compañía y norma primero");
        return;
      }

      const payload = { userId, companyId, normId };
      console.log("Datos enviados para eliminar:", payload);

      const res = await fetch(`http://localhost:3001/user/config/delete`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(payload),
      });

      if (res.status === 403) {
        toast.error("No existe la frecuencia para eliminar");
        return;
      }
      if (!res.ok) {
        const err = await res.json();
        throw new Error(err.message || "Error al eliminar frecuencia");
      }

      toast.success("Frecuencia eliminada");
      form.reset();
      window.location.reload();
    } catch (error: any) {
      console.error(error);
      toast.error(error.message || "Error al eliminar frecuencia");
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
          name="companyId"
          render={({ field }) => (
            <FormItem className="col-span-full">
              <FormLabel>Compañía</FormLabel>
              <FormControl>
                <Select
                  onValueChange={(v) => field.onChange(Number(v))}
                  value={field.value?.toString()}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Seleccione compañía" />
                  </SelectTrigger>
                  <SelectContent>
                    {companies.map((c) => (
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

        <FormField
          control={form.control}
          name="normId"
          render={({ field }) => (
            <FormItem className="col-span-full">
              <FormLabel>Norma</FormLabel>
              <FormControl>
                <Select
                  onValueChange={(v) => field.onChange(Number(v))}
                  value={field.value?.toString()}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Seleccione norma" />
                  </SelectTrigger>
                  <SelectContent>
                    {rules.map((r) => (
                      <SelectItem key={r.id} value={r.id.toString()}>
                        {r.name}
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
            <FormItem className="col-span-full">
              <FormLabel>Frecuencia de evaluación (días)</FormLabel>
              <FormControl>
                <Input
                  type="number"
                  placeholder="10"
                  {...field}
                  onChange={(e) => field.onChange(Number(e.target.value))}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <div className="flex gap-2 col-span-full justify-end">
          <Button
            type="button"
            variant="destructive"
            onClick={handleDelete}
            disabled={isLoading}
          >
            {isLoading ? "Procesando..." : "Eliminar actual"}
          </Button>
          <Button type="submit" disabled={isLoading}>
            {isLoading ? "Guardando..." : "Editar frecuencia"}
          </Button>
        </div>
      </form>
    </Form>
  );
}
