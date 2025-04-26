import React from "react";
import { MOCK_EVALUATIONS } from "../mock/mock";
import { Section } from "./components/Section/Section";
import EvaluationObservationsModal from "./components/EvaluationObservationsModal/EvaluationObservationsModal";

export default function ListedEvaluation({
  params,
}: {
  params: { evaluationId: string };
}) {
  const evaluation = MOCK_EVALUATIONS.find(
    (c) => c.id.toString() === params.evaluationId
  );

  if (!evaluation) {
    return <p>Evaluación no encontrada.</p>;
  }

  return (
    <div>
      <h1 className="text-4xl font-bold text-teal-700">
        Evaluación {evaluation.id}
      </h1>
      <div className="mt-4 space-y-2">
        <p className="text-gray-500">
          <b>Nombre:</b> {evaluation.name}
        </p>
        <p className="text-gray-500">
          <b>Fecha:</b> {evaluation.date}
        </p>
        <p className="text-gray-500">
          <b>Estado:</b> {evaluation.status}
        </p>
        <p className="text-gray-500">
          <b>Puntaje:</b> {evaluation.score}
        </p>
        <p className="text-gray-500">
          <b>Total de preguntas:</b> {evaluation.totalQuestions}
        </p>
      </div>
      <div className="flex mt-4 gap-2 ">
        <EvaluationObservationsModal />
      </div>
      <div className="mt-20">
        {evaluation.sections && evaluation.sections.length === 0 && (
          <p className="text-gray-500">No hay secciones disponibles.</p>
        )}
        {evaluation.sections &&
          evaluation.sections.map((sec) => (
            <Section key={sec.id} section={sec} />
          ))}
      </div>
    </div>
  );
}
