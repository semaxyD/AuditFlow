"use client";

import { useForm, FormProvider } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useMemo, useState, useEffect } from "react";
import { createEvaluationSchema } from "../schemas/evaluation.schema";
import { AUDIT_FORM_MOCK } from "../mock/mock";
import { Button } from "@/components/ui/button";
import { SectionQuestions } from "./SectionQuestions";

type EvaluationSchema = z.infer<ReturnType<typeof createEvaluationSchema>>;

export function EvaluationForm() {
  const [activeSection, setActiveSection] = useState(0);
  const [submitError, setSubmitError] = useState<string | null>(null);

  // Memoizamos el esquema para evitar recrearlo
  const schema = useMemo(() => createEvaluationSchema(AUDIT_FORM_MOCK), []);

  // Preparamos valores iniciales una sola vez
  const defaultValues = useMemo(() => {
    return {
      totalQuestions: AUDIT_FORM_MOCK.totalQuestions,
      sections: AUDIT_FORM_MOCK.sections.reduce((acc, section) => {
        acc[section.id] = section.questions.reduce((qAcc, q) => {
          qAcc[q.id] = {
            answer: "Si",
            evidence: [],
            observations: "",
            score: 100,
          };
          return qAcc;
        }, {} as any);
        return acc;
      }, {} as any),
    };
  }, []);

  const methods = useForm<EvaluationSchema>({
    resolver: zodResolver(schema),
    defaultValues,
    mode: "onChange",
  });

  const {
    handleSubmit,
    formState: { errors, isSubmitting, isValid, isDirty },
    reset,
    trigger,
  } = methods;

  // Verificar errores globales
  useEffect(() => {
    const errorKeys = Object.keys(errors);
    if (errorKeys.length > 0) {
      console.log("Errores de validación:", errors);
    }
  }, [errors]);

  const onSubmit = async (data: EvaluationSchema) => {
    try {
      setSubmitError(null);
      console.log("Datos a enviar:", data);

      // Simulando una llamada a una API
      // const response = await fetch('/api/evaluations', {
      //   method: 'POST',
      //   headers: {
      //     'Content-Type': 'application/json',
      //   },
      //   body: JSON.stringify(data),
      // });

      // if (!response.ok) {
      //   throw new Error(`Error ${response.status}: ${response.statusText}`);
      // }

      // const result = await response.json();
      // console.log("Respuesta del servidor:", result);

      alert("Formulario enviado con éxito!");
      // reset(); // Reiniciar formulario después de envío exitoso
    } catch (error) {
      console.error("Error al enviar formulario:", error);
      setSubmitError(
        error instanceof Error
          ? error.message
          : "Error desconocido al enviar el formulario"
      );
    }
  };

  const handleValidateForm = async () => {
    const result = await trigger();
    console.log("Resultado de validación:", result);
    if (!result) {
      console.log("Errores de validación:", errors);
    }
  };

  return (
    <FormProvider {...methods}>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-8" noValidate>
        {/* Navegación entre secciones */}
        <div className="mb-4">
          <h2 className="text-lg font-semibold text-teal-700">Secciones de la evaluación</h2>
          <div className="flex flex-wrap gap-2 mt-4 mb-8">
            {AUDIT_FORM_MOCK.sections.map((section, index) => (
              <Button
                key={section.id}
                type="button"
                variant={activeSection === index ? "default" : "outline"}
                onClick={() => setActiveSection(index)}
                size="sm"
              >
                {section.title}
              </Button>
            ))}
          </div>
        </div>

        {/* Solo renderizamos la sección activa */}
        <SectionQuestions section={AUDIT_FORM_MOCK.sections[activeSection]} />

        <div className="flex justify-between mt-6">
          <Button
            type="button"
            variant="outline"
            disabled={activeSection === 0}
            onClick={() => setActiveSection((prev) => Math.max(0, prev - 1))}
          >
            Anterior
          </Button>

          {activeSection < AUDIT_FORM_MOCK.sections.length - 1 ? (
            <Button
              type="button"
              onClick={() =>
                setActiveSection((prev) =>
                  Math.min(AUDIT_FORM_MOCK.sections.length - 1, prev + 1)
                )
              }
            >
              Siguiente
            </Button>
          ) : (
            <div className="flex gap-2">
              <Button type="submit" disabled={isSubmitting}>
                {isSubmitting ? "Enviando..." : "Enviar"}
              </Button>
            </div>
          )}
        </div>
      </form>
    </FormProvider>
  );
}
