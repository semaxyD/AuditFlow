"use client";

import { useForm, FormProvider } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMemo, useState, useEffect } from "react";
import { z } from "zod";
import {
  createEvaluationSchema,
  VALID_ANSWERS,
} from "../schemas/evaluation.schema";
import { AUDIT_FORM_MOCK } from "../mock/mock";
import { Button } from "@/components/ui/button";
import { SectionQuestions } from "./SectionQuestions";
import { toast } from "sonner";

// Tipos
import { EvaluationForm as EvaluationFormType } from "../types/evaluation-form.types";
import { mapBackendEvaluationToForm } from "../edit/[evaluationId]/helpers/mapBackendEvaluationForm";

type EvaluationSchema = z.infer<ReturnType<typeof createEvaluationSchema>>;

// Props que recibe el componente
interface EvaluationFormProps {
  backendData?: any; // Lo que traes del back, puede ser undefined si estás creando
}

export function EvaluationForm({ backendData }: EvaluationFormProps) {
  const [activeSection, setActiveSection] = useState(0);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const isEditing = !!backendData;

  // Transformar datos si estamos editando
  const formData: EvaluationFormType = useMemo(() => {
    return isEditing
      ? mapBackendEvaluationToForm(backendData)
      : AUDIT_FORM_MOCK;
  }, [backendData, isEditing]);

  // Crear el schema dinámico
  const schema = useMemo(() => createEvaluationSchema(formData), [formData]);

  const defaultValues = useMemo(() => {
    return {
      totalQuestions: formData.totalQuestions,
      sections: formData.sections.reduce((acc, section) => {
        acc[section.id] = section.questions.reduce((qAcc, q) => {
          const backendSection = backendData?.sections.find(
            (s: any) => s.id === section.id
          );
          const backendQuestion = backendSection?.questions.find(
            (bq: any) => bq.id === q.id
          );

          const answer = backendQuestion?.response ?? "";

          // Si hay respuesta, buscamos su score en VALID_ANSWERS
          const answerScore =
            VALID_ANSWERS.find((valid) => valid.value === answer)?.score ?? 0;

          qAcc[q.id] = {
            answer: backendQuestion?.response ?? "",
            evidence: backendQuestion?.evidence ?? "",
            observations: backendQuestion?.observations ?? "",
            score: answer ? answerScore : 0,
          };

          return qAcc;
        }, {} as any);
        return acc;
      }, {} as any),
    };
  }, [formData, backendData]);

  const methods = useForm<EvaluationSchema>({
    resolver: zodResolver(schema),
    defaultValues,
    mode: "onChange",
  });

  const {
    handleSubmit,
    formState: { errors, isSubmitting },
    trigger,
  } = methods;

  useEffect(() => {
    const errorKeys = Object.keys(errors);
    if (errorKeys.length > 0) {
      console.log("Errores de validación:", errors);
    }
  }, [errors]);

  const onSubmit = async (data: EvaluationSchema) => {
    try {
      setSubmitError(null);

      // 1. Transformamos el data del formulario al formato del backend
      const payload = {
        // Si tu schema incluye name u observations, sácalas de data.
        // Si no, usa backendData?.name y backendData?.observations
        name: data.name ?? backendData?.name ?? "",
        observations: data.observations ?? backendData?.observations ?? "",
        sections: Object.entries(data.sections).map(
          ([sectionId, questionsObj]) => ({
            id: Number(sectionId),
            questions: Object.entries(questionsObj).map(([questionId, q]) => {
              const question = q as {
                answer: string;
                evidence: string | string[];
                observations: string;
                score: number;
              };
              return {
                id: Number(questionId),
                answer: question.answer,
                // pero el backend quiere un array de strings:
                evidence: question.evidence
                  ? Array.isArray(question.evidence)
                    ? question.evidence
                    : [question.evidence]
                  : [],
                comments: question.observations,
                score: question.score,
              };
            }),
          })
        ),
      };

      // 2. Logs para validar
      console.log("Payload preparado:", payload);
      console.log("Payload JSON:\n", JSON.stringify(payload, null, 2));

      // 3. Envío real (descomenta cuando tu API esté lista)
      /*
    const response = await fetch(
      isEditing
        ? `/api/evaluations/${backendData.id}`
        : `/api/evaluations`,
      {
        method: isEditing ? "PUT" : "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      }
    );
    const result = await response.json();
    console.log("Respuesta del servidor:", result);
    */
    } catch (error) {
      console.error("Error en el envío:", error);
      setSubmitError(
        error instanceof Error
          ? error.message
          : "Error desconocido al enviar el formulario"
      );
    }
  };

  const handleValidateForm = async () => {
    const result = await trigger();
    if (!result) {
      console.log("Errores de validación:", errors);
    }
  };

  return (
    <FormProvider {...methods}>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-8" noValidate>
        <div className="mb-4">
          <h2 className="text-lg font-semibold text-teal-700">
            {isEditing ? "Editar evaluación" : "Crear nueva evaluación"}
          </h2>

          <div className="flex flex-wrap gap-2 mt-4 mb-8">
            {formData.sections.map((section, index) => (
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
        <SectionQuestions section={formData.sections[activeSection]} />

        <div className="flex justify-between mt-6">
          <Button
            type="button"
            variant="outline"
            disabled={activeSection === 0}
            onClick={() => setActiveSection((prev) => Math.max(0, prev - 1))}
          >
            Anterior
          </Button>

          {activeSection < formData.sections.length - 1 ? (
            <Button
              type="button"
              onClick={(e) => {
                e.preventDefault();
                setActiveSection((prev) =>
                  Math.min(formData.sections.length - 1, prev + 1)
                );
              }}
            >
              Siguiente
            </Button>
          ) : (
            <Button type="submit" disabled={isSubmitting}>
              {isSubmitting
                ? isEditing
                  ? "Actualizando..."
                  : "Enviando..."
                : isEditing
                ? "Actualizar"
                : "Enviar"}
            </Button>
          )}
        </div>
      </form>
    </FormProvider>
  );
}
