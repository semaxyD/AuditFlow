"use client";

import { useForm, FormProvider } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useMemo, useState, useEffect } from "react";
import { createEvaluationSchema } from "../schemas/evaluation.schema";
import { AUDIT_FORM_MOCK } from "../mock/mock";
import { Button } from "@/components/ui/button";
import { SectionQuestions } from "./SectionQuestions";
import { ObservationsModal } from "./ObservationsModal";
import { EvaluationSettingsModal } from "./EvaluationSettingsModal";

type EvaluationSchema = z.infer<ReturnType<typeof createEvaluationSchema>>;

export function EvaluationForm({
  companies,
  rules,
}: {
  companies: any[];
  rules: any[];
}) {
  const [activeSection, setActiveSection] = useState(0);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [openObservationsModal, setOpenObservationsModal] = useState(false);
  const [finalObservation, setFinalObservation] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [openModal, setOpenModal] = useState(true);
  const [isLoading, setIsLoading] = useState(true);
  const [info, setInfo] = useState<{
    ruleId: number | undefined;
    companyId: number | undefined;
  }>({
    ruleId: undefined,
    companyId: undefined,
  });

  // Memoizamos el esquema para evitar recrearlo
  const schema = useMemo(() => createEvaluationSchema(AUDIT_FORM_MOCK), []);

  // Preparamos valores iniciales una sola vez
  const defaultValues = useMemo(() => {
    return {
      totalQuestions: AUDIT_FORM_MOCK.totalQuestions,
      sections: AUDIT_FORM_MOCK.sections.reduce((acc, section) => {
        acc[section.id] = section.questions.reduce((qAcc, q) => {
          qAcc[q.id] = {
            answer: "",
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
    formState: { errors, isValid, isDirty },
    reset,
    trigger,
  } = methods;

  useEffect(() => {
    if (info.ruleId && (info.companyId || companies.length === 1)) {
      setIsLoading(false);
    } else {
      setIsLoading(true);
    }
  }, [info, companies.length]);

  // Verificar errores globales
  useEffect(() => {
    const errorKeys = Object.keys(errors);
    if (errorKeys.length > 0) {
      console.log("Errores de validación:", errors);
    }
  }, [errors]);

  const handleSaveObservation = (observation: string) => {
    console.log("Observación recibida en el formulario:", observation);
    setFinalObservation(observation);
    handleSubmitForm(observation);
  };

  const handleSubmitForm = async (currentObservation: string) => {
    try {
      setIsSubmitting(true);
      setSubmitError(null);

      const formData = methods.getValues();

      if (!info) {
        alert("Seleccione una norma y compañia");
        return;
      }

      const dataToSubmit = {
        ...formData,
        finalObservation: currentObservation,
        companyId: info.companyId,
        ruleId: info.ruleId,
      };

      // Aquí iría tu lógica de envío a la API
      // const response = await fetch('/api/evaluations', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify(dataToSubmit),
      // });

      console.log(dataToSubmit)

      alert("Formulario enviado con éxito!");
      reset();
    } catch (error) {
      console.error("Error al enviar formulario:", error);
      setSubmitError(
        error instanceof Error
          ? error.message
          : "Error desconocido al enviar el formulario"
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const onSubmit = async (data: EvaluationSchema) => {
    try {
      console.log("Formulario validado, abriendo modal");
      setSubmitError(null);
      setOpenObservationsModal(true);
    } catch (error) {
      console.error("Error al validar formulario:", error);
      setSubmitError(
        error instanceof Error
          ? error.message
          : "Error desconocido al validar el formulario"
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
        {/* Navegación entre secciones */}
        <div className="mb-4">
          <h2 className="text-lg font-semibold text-teal-700">
            Secciones de la evaluación
          </h2>
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
        <ObservationsModal
          openObservationsModal={openObservationsModal}
          setOpenObservationsModal={setOpenObservationsModal}
          onSaveObservation={handleSaveObservation}
          initialObservation={finalObservation}
        />

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
