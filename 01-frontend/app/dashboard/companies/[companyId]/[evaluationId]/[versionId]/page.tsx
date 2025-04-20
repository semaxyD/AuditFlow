import { COMPANIES_MOCK } from "../../../ComplaintsTable/mock/companies"; // Ajusta la ruta correctamente

export default function EvaluationPage({
  params,
}: {
  params: { companyId: string; evaluationId: string; versionId: string };
}) {
  const { companyId, evaluationId, versionId } = params;

  // Buscar la empresa
  const company = COMPANIES_MOCK.find((c) => c.id.toString() === companyId);

  if (!company) {
    return <p>Empresa no encontrada.</p>;
  }

  // Buscar la evaluación correspondiente
  const evaluation = company.evaluations.find(
    (evalItem) => evalItem.evaluation_id.toString() === evaluationId
  );

  if (!evaluation) {
    return <p>Evaluación no encontrada.</p>;
  }

  // Buscar la versión específica basada en el versionId
  const version = evaluation.versions.find(
    (v) => v.version_id.toString() === versionId
  );

  if (!version) {
    return <p>Versión no encontrada.</p>;
  }

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold text-teal-700">{company.name}</h1>
      <p className="text-muted-foreground">{company.nit}</p>
      <div className="bg-white rounded-lg shadow p-6 pt-2 mt-4">
        <h2 className="text-xl mt-6 font-semibold">
          {evaluation.norm.norm_name} - {evaluation.norm.norm_code}
        </h2>
        <h3>Versión: {version.version_number}</h3>
        <h3>
          Fecha de creación: {new Date(version.created_at).toLocaleDateString()}
        </h3>
        <div className="mt-6">
          <h4 className="text-lg font-semibold">Preguntas y Respuestas</h4>
          {version.questions.map((question) => (
            <div key={question.question_id} className="mt-4">
              <h5 className="font-medium">{question.question_text}</h5>
              <ul>
                <li>Respuesta: {question.response}</li>
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
