// components/auth/LoginForm.tsx
"use client";

import { toast } from "sonner";
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
    defaultValues: { email: "", password: "" },
  });

  const onSubmit = async (data: LoginFormData) => {
    setIsLoading(true);
    setErrorMessage("");

    const res = await signIn("credentials", {
      redirect: false,
      email: data.email,
      password: data.password,
    });

    if (res?.ok) {
      const sessionRes = await fetch("/api/auth/session");
      const sessionData = await sessionRes.json();
      toast.success("Sesión iniciada", { description: sessionData.message });
      const token = sessionData.user?.accessToken;
      if (token) {
        localStorage.setItem("token", token);
        localStorage.setItem("user", JSON.stringify(sessionData.user));
      }
      router.push("/dashboard");
    } else {
      setErrorMessage("Correo o contraseña incorrectos");
      toast.error("Revisa tus credenciales", {
        description: "Correo o contraseña incorrectos.",
      });
    }

    setIsLoading(false);
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="bg-white/90 backdrop-blur-md p-8 rounded-2xl shadow-lg w-lg  max-w-full space-y-10"
      >
        <h2 className="text-2xl font-bold text-center text-gray-800">
          Iniciar Sesión
        </h2>
        {errorMessage && (
          <div className="text-red-600 bg-red-100 p-3 rounded">
            {errorMessage}
          </div>
        )}
        <div className="space-y-7">
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="font-medium text-gray-700">
                  Correo electrónico
                </FormLabel>
                <FormControl>
                  <Input
                    {...field}
                    type="email"
                    placeholder="ejemplo@correo.com"
                    className="border-gray-300 focus:border-blue-500 focus:ring-blue-200"
                  />
                </FormControl>
                <FormMessage className="text-sm text-red-600" />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="font-medium text-gray-700">
                  Contraseña
                </FormLabel>
                <FormControl>
                  <Input
                    {...field}
                    type="password"
                    placeholder="••••••••"
                    className="border-gray-300 focus:border-blue-500 focus:ring-blue-200"
                  />
                </FormControl>
                <FormMessage className="text-sm text-red-600" />
              </FormItem>
            )}
          />
        </div>

        <Button
          type="submit"
          className="w-full py-3  text-white font-semibold rounded-lg shadow-md transition"
          disabled={isLoading}
        >
          {isLoading ? "Iniciando..." : "Iniciar Sesión"}
        </Button>
      </form>
    </Form>
  );
}
