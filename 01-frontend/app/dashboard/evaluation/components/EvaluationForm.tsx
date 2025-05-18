"use client";

import { useForm, FormProvider } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMemo, useState, useEffect } from "react";
import { createEvaluationSchema } from "../schemas/evaluation.schema";
import { Button } from "@/components/ui/button";
import { SectionQuestions } from "./SectionQuestions";
import { ObservationsModal } from "./ObservationsModal";
import { EvaluationSettingsModal } from "./EvaluationSettingsModal";
import { useRoleCheck } from "@/hooks/useRoleCheck";
import type { EvaluationForm as EvalFormType } from "../types/evaluation-form.types";
import { toast } from "sonner";

export function EvaluationForm({
  companies,
  rules,
}: {
  companies: { id: number; name: string }[];
  rules: any[];
}) {
  // — Estados —
  const [formData, setFormData] = useState<EvalFormType>({
    name: "",
    description: "",
    totalQuestions: 0,
    sections: [],
  });
  const [info, setInfo] = useState<{ ruleId?: number; companyId?: number }>({});
  const [isLoadingForm, setIsLoadingForm] = useState(false);
  const [activeSection, setActiveSection] = useState(0);
  const [openObservationsModal, setOpenObservationsModal] = useState(false);
  const [finalObservation, setFinalObservation] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Detectamos rol para ajustar la lógica de modal
  const { role } = useRoleCheck("auditor_interno", "auditor_externo");
  const isInternal = role === "auditor_interno";

  // Carga preguntas cuando cambia ruleId
  useEffect(() => {
    if (!info.ruleId) return;
    setIsLoadingForm(true);
    const token = window.localStorage.getItem("token") || "";

    fetch(`http://localhost:3001/auditory/questions/${info.ruleId}`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    })
      .then(async (res) => {
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        const json = await res.json();
        const sections = json["Preguntas por criterios Generadas"].map(
          (c: any) => ({
            id: c.criterion_id,
            title: c.criterion_description,
            questions: c.questions.map((q: any) => ({
              id: q.question_id,
              question: q.question_text,
              evidence: [] as string[],
            })),
          })
        );
        setFormData({
          name: "",
          description: "",
          totalQuestions: sections.reduce(
            (sum, sec) => sum + sec.questions.length,
            0
          ),
          sections,
        });
      })
      .catch((err) => console.error("Error cargando preguntas:", err))
      .finally(() => setIsLoadingForm(false));
  }, [info.ruleId]);

  useEffect(() => {
    if (formData.sections.length > 0) {
      setActiveSection(0);
    }
  }, [formData.sections]);

  const schema = useMemo(() => createEvaluationSchema(formData), [formData]);
  const defaultValues = useMemo(
    () => ({
      totalQuestions: formData.totalQuestions,
      sections: formData.sections.reduce((acc, sec) => {
        acc[sec.id] = sec.questions.reduce((qAcc, q) => {
          qAcc[q.id] = {
            answer: "",
            evidence: "",
            observations: "",
            score: 100,
          };
          return qAcc;
        }, {} as any);
        return acc;
      }, {} as any),
    }),
    [formData]
  );

  const methods = useForm({
    resolver: zodResolver(schema),
    defaultValues,
    mode: "onChange",
  });
  const { handleSubmit, reset, getValues } = methods;

  useEffect(() => {
    // Para interno solo ruleId, para externo ruleId + companyId
    if (
      !isLoadingForm &&
      info.ruleId &&
      (isInternal || info.companyId) &&
      formData.sections.length > 0
    ) {
      reset(defaultValues);
    }
  }, [
    isLoadingForm,
    info,
    defaultValues,
    reset,
    formData.sections.length,
    isInternal,
  ]);

  const onSubmit = () => setOpenObservationsModal(true);

  const handleSaveObservation = (obs: string) => {
    setFinalObservation(obs);
    setOpenObservationsModal(false);
    setIsSubmitting(true);

    const values = getValues();
    const sectionsPayload = formData.sections.map((sec) => ({
      id: sec.id,
      questions: sec.questions.map((q) => {
        const ans = values.sections[sec.id][q.id];
        const answerText = ans.answer === "Si" ? "Sí" : ans.answer;
        return {
          id: q.id,
          answer: answerText,
          evidence: Array.isArray(ans.evidence)
            ? ans.evidence
            : ans.evidence
            ? [ans.evidence]
            : [],
          comments: ans.observations,
          score: ans.score,
        };
      }),
    }));

    const payload: any = {
      observations: obs,
      sections: sectionsPayload,
    };
    // Si es externo, incluimos companyId
    if (!isInternal) payload.companyId = info.companyId;

    console.log("Payload reestructurado:", JSON.stringify(payload, null, 2));

    const token = window.localStorage.getItem("token") || "";
    const endpoint =
      role === "auditor_interno" || role === "auditor_externo"
        ? `http://localhost:3001/auditory/${info.ruleId}/${info.companyId}/saveExternal`
        : `http://localhost:3001/auditory/${info.ruleId}/save`;

    fetch(endpoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(payload),
    })
      .then(async (res) => {
        if (!res.ok) {
          const errBody = await res.json().catch(() => ({}));
          toast.error(
            errBody.message || `Error ${res.status}: ${res.statusText}`
          );
          throw new Error(errBody.message);
        }
        toast.success("Evaluación guardada con éxito");
        reset(defaultValues);
      })
      .catch((err) => {
        console.error(err);
      })
      .finally(() => setIsSubmitting(false));
  };

  if (isLoadingForm) {
    return (
      <div className="flex items-center justify-center min-h-[400px]">
        <div className="text-center">
          <h2 className="text-lg font-semibold text-teal-700 mb-2">
            Cargando preguntas…
          </h2>
          <p className="text-gray-600">Un momento, por favor.</p>
        </div>
      </div>
    );
  }

  return (
    <>
      {!info.ruleId || (!isInternal && !info.companyId) ? (
        <EvaluationSettingsModal
          companies={companies}
          openModal={true}
          setOpenModal={() => {}}
          setInfo={setInfo}
        />
      ) : null}

      {info.ruleId &&
        (isInternal || info.companyId) &&
        formData.sections.length > 0 && (
          <FormProvider {...methods}>
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="space-y-8"
              noValidate
            >
              {/* Navegación de secciones */}
              <div className="mb-4">
                <h2 className="text-lg font-semibold text-teal-700">
                  Secciones de la evaluación
                </h2>
                <div className="flex flex-wrap gap-2 mt-4 mb-8">
                  {formData.sections.map((sec, idx) => (
                    <Button
                      key={sec.id}
                      type="button"
                      variant={activeSection === idx ? "default" : "outline"}
                      size="sm"
                      onClick={() => setActiveSection(idx)}
                    >
                      {sec.title}
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
                  onClick={() => setActiveSection((s) => s - 1)}
                >
                  Anterior
                </Button>
                {activeSection < formData.sections.length - 1 ? (
                  <Button
                    type="button"
                    onClick={() => setActiveSection((s) => s + 1)}
                  >
                    Siguiente
                  </Button>
                ) : (
                  <Button type="submit" disabled={isSubmitting}>
                    {isSubmitting ? "Enviando..." : "Enviar"}
                  </Button>
                )}
              </div>
            </form>
          </FormProvider>
        )}
    </>
  );
}
