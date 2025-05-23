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
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";

const formSchema = z.object({
  email: z.string().email("Correo electrónico inválido"),
  password: z.string().min(6, "La contraseña debe tener al menos 6 caracteres"),
});

type LoginFormData = z.infer<typeof formSchema>;

export function LoginForm() {
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const router = useRouter();

  const form = useForm<LoginFormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = async (data: LoginFormData) => {
    setIsLoading(true);
    setErrorMessage("");

    // 1) Intentamos el login con NextAuth
    const res = await signIn("credentials", {
      redirect: false,
      email: data.email,
      password: data.password,
    });

    if (res?.ok) {
      // 2) Recuperamos la sesión desde el endpoint de NextAuth
      const r = await fetch("/api/auth/session");
      const sessionData = await r.json();
      console.log("⚡ sessionData from /api/auth/session:", sessionData);

      // 3) Extraemos y guardamos el token
      const token = sessionData?.user?.accessToken;
      if (token) {
        window.localStorage.setItem("token", token);
        console.log("✅ Token guardado en localStorage:", token);
      } else {
        console.warn("❌ No vino accessToken en sessionData.user");
      }

      // 4) Redirigimos al dashboard
      router.push("/dashboard");
    } else {
      setErrorMessage("Correo o contraseña incorrectos");
    }

    setIsLoading(false);
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-6 w-80 mx-auto"
      >
        <h2 className="text-xl font-bold text-center">Iniciar sesión</h2>

        {errorMessage && (
          <div className="text-red-600 bg-red-100 p-2 rounded text-sm">
            {errorMessage}
          </div>
        )}

        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Correo electrónico</FormLabel>
              <FormControl>
                <Input
                  placeholder="ejemplo@correo.com"
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
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Contraseña</FormLabel>
              <FormControl>
                <Input placeholder="********" type="password" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button type="submit" className="w-full" disabled={isLoading}>
          {isLoading ? "Iniciando..." : "Iniciar sesión"}
        </Button>
      </form>
    </Form>
  );
}
