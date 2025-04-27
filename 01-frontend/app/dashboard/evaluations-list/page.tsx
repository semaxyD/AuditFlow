import { columns } from "./components/EvaluationsTable/columns";
import EvaluationsTable from "./components/EvaluationsTable/EvaluationsTable";
import { MOCK_EVALUATIONS } from "./mock/mock";

export default function Evaluation() {
  return (
    <div className="space-y-4">
      <h1 className="text-4xl font-bold text-teal-700">
        Listado de evaluaciones
      </h1>
      <p className="text-gray-500">
        Aquí puedes ver todas las evaluaciones que has realizado para la norma.
      </p>
      <EvaluationsTable
        columns={columns}
        data={MOCK_EVALUATIONS}
        evaluations={MOCK_EVALUATIONS}
      />
    </div>
  );
}
