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
import { ObservationsModal } from "./ObservationsModal";
import { EvaluationSettingsModal } from "./EvaluationSettingsModal";

type EvaluationSchema = z.infer<ReturnType<typeof createEvaluationSchema>>;

export function EvaluationForm({
  companies,
  rules,
  backendData = null,
}: {
  companies: any[];
  rules: any[];
  backendData?: any; // ← nuevo prop opcional
}) {
  const [activeSection, setActiveSection] = useState(0);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [openObservationsModal, setOpenObservationsModal] = useState(false);
  const [finalObservation, setFinalObservation] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [openModal, setOpenModal] = useState(true);
  const [isLoading, setIsLoading] = useState(true);
  const [info, setInfo] = useState<{
    ruleId?: number;
    companyId?: number;
  }>({
    ruleId: undefined,
    companyId: undefined,
  });

  const isEditing = Boolean(backendData); // ← usa el prop

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
          const answerScore =
            VALID_ANSWERS.find((valid) => valid.value === answer)?.score ?? 0;

          qAcc[q.id] = {
            answer,
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
    formState: { errors },
    reset,
    trigger,
  } = methods;

  useEffect(() => {
    setIsLoading(!(info.ruleId && (info.companyId || companies.length === 1)));
  }, [info, companies.length]);

  useEffect(() => {
    if (Object.keys(errors).length > 0) {
      console.log("Errores de validación:", errors);
    }
  }, [errors]);

  const handleSaveObservation = (observation: string) => {
    setFinalObservation(observation);
    handleSubmitForm(observation);
  };

  const handleSubmitForm = async (currentObservation: string) => {
    try {
      setIsSubmitting(true);
      setSubmitError(null);
      const formValues = methods.getValues();

      if (!info.ruleId || !info.companyId) {
        alert("Seleccione una norma y compañía");
        return;
      }

      const dataToSubmit = {
        ...formValues,
        finalObservation: currentObservation,
        companyId: info.companyId,
        ruleId: info.ruleId,
      };

      console.log(dataToSubmit);
      alert("Formulario enviado con éxito!");
      reset();
    } catch (error) {
      console.error("Error en el envío:", error);
      setSubmitError(
        error instanceof Error
          ? error.message
          : "Error desconocido al enviar el formulario"
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const onSubmit = () => {
    setOpenObservationsModal(true);
  };

  const handleValidateForm = async () => {
    const valid = await trigger();
    if (!valid) console.log("Errores de validación:", errors);
  };

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-[400px]">
        <div className="text-center">
          <h2 className="text-lg font-semibold text-teal-700 mb-2">
            Cargando formulario...
          </h2>
          <p className="text-gray-600">
            Por favor, seleccione una norma y una empresa para continuar.
          </p>
        </div>
        <EvaluationSettingsModal
          companies={companies}
          rules={rules}
          openModal={openModal}
          setOpenModal={setOpenModal}
          setInfo={setInfo}
        />
      </div>
    );
  }

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

        <ObservationsModal
          openObservationsModal={openObservationsModal}
          setOpenObservationsModal={setOpenObservationsModal}
          onSaveObservation={handleSaveObservation}
          initialObservation={finalObservation}
        />

        <SectionQuestions section={formData.sections[activeSection]} />

        <div className="flex justify-between mt-6">
          <Button
            type="button"
            variant="outline"
            disabled={activeSection === 0}
            onClick={() => setActiveSection((p) => Math.max(0, p - 1))}
          >
            Anterior
          </Button>

          {activeSection < formData.sections.length - 1 ? (
            <Button
              type="button"
              onClick={(e) => {
                e.preventDefault();
                setActiveSection((p) =>
                  Math.min(formData.sections.length - 1, p + 1)
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
