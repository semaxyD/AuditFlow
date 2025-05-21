"use client";

import { useForm, FormProvider } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMemo, useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { useRoleCheck } from "@/hooks/useRoleCheck";
import { toast } from "sonner";
import { createEvaluationSchema } from "../../../schemas/evaluation.schema";
import { SectionQuestions } from "../../../components/SectionQuestions";
import { ObservationsModal } from "../../../components/ObservationsModal";
import type { EvaluationForm as EvalFormType } from "../../../types/evaluation-form.types";
import { useParams, useSearchParams } from "next/navigation";

export function EvaluationEditForm() {
  // — Estados —
  const params = useParams();
  const searchParams = useSearchParams();

  const evaluationId = params.evaluationId;
  const companyId = searchParams.get("companyId");
  const ruleId = searchParams.get("ruleId");

  const [formData, setFormData] = useState<EvalFormType>({
    name: "",
    description: "",
    totalQuestions: 0,
    sections: [],
  });
  const [info, setInfo] = useState<{ ruleId?: number; companyId?: number }>({
    ruleId: Number(ruleId),
    companyId: Number(companyId),
  });
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
    setIsLoadingForm(true);
    const token = window.localStorage.getItem("token") || "";

    fetch(
      `http://localhost:3001/reports-evaluation/evaluation/${evaluationId}/details`,
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      }
    )
      .then(async (res) => {
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        const json = await res.json();

        // La respuesta viene como un array, tomamos el primer elemento
        const payload = Array.isArray(json) && json.length > 0 ? json[0] : null;
        if (!payload) {
          throw new Error("Detalles de evaluación vacíos");
        }

        // Mapear criterios a secciones
        const sections = payload.criteria.map((c: any) => ({
          id: c.id,
          title: c.title,
          questions: c.questions.map((q: any) => ({
            id: q.question_id,
            question: q.text,
            // si quieres inicializar el formulario con la respuesta existente:
            answer: q.response || "",
            // evidencias vienen como array anidado; lo aplanamos
            evidences: Array.isArray(q.evidences) ? q.evidences.flat(2) : [],
            comments: q.comments,
            // cualquier otro campo que necesites:
            createdAt: q.created_at,
            versionId: q.version_id,
          })),
        }));

        setFormData({
          // por ejemplo, puedes usar company_name y norm_name como título y descripción
          name: payload.company_name,
          description: payload.norm_name,
          totalQuestions: payload.total_questions,
          // si quieres mostrar cuántas respondió:
          answeredQuestions: payload.answered_questions,
          completionPercentage: payload.completion_percentage,
          sections,
        });
      })
      .catch((err) => {
        console.error("Error cargando detalles de la evaluación:", err);
      })
      .finally(() => setIsLoadingForm(false));
  }, [evaluationId]);

  useEffect(() => {
    if (formData.sections.length > 0) {
      setActiveSection(0);
    }
  }, [formData.sections]);

  const schema = useMemo(() => createEvaluationSchema(formData), [formData]);
  const defaultValues = useMemo(() => {
    return {
      totalQuestions: formData.totalQuestions,
      sections: formData.sections.reduce(
        (secAcc, sec) => {
          secAcc[sec.id] = sec.questions.reduce(
            (qAcc, q) => {
              // valor de respuesta ya traído de la API
              const answer = q.answer || "";
              // aplanamos el array de evidencias y lo unimos en un string separado por comas
              const evidenceList = Array.isArray(q.evidences)
                ? q.evidences
                : [];
              const evidence = evidenceList.join(", ");
              // observaciones (comments) o cadena vacía
              const observations = q.comments || "";
              // calculamos score según la respuesta
              let score = 0;
              if (
                answer.toLowerCase() === "si" ||
                answer.toLowerCase() === "sí"
              ) {
                score = 100;
              } else if (answer === "NM") {
                score = 50;
              } else {
                score = 0;
              }

              qAcc[q.id] = {
                answer,
                evidence,
                observations,
                score,
              };
              return qAcc;
            },
            {} as Record<
              number,
              {
                answer: string;
                evidence: string;
                observations: string;
                score: number;
              }
            >
          );
          return secAcc;
        },
        {} as Record<
          number,
          Record<
            number,
            {
              answer: string;
              evidence: string;
              observations: string;
              score: number;
            }
          >
        >
      ),
    };
  }, [formData]);

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
    const endpoint = `http://localhost:3001/auditory/${evaluationId}`;

    fetch(endpoint, {
      method: "PUT",
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
        window.location.href = "/dashboard/companies";

        toast.success("Evaluación guardada con éxito");
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
