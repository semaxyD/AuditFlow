import { COMPANIES_MOCK } from "../ComplaintsTable/mock/companies";
import EvaluationTable from "./ComplatainsTable/TableEvaluations";
import { evaluationColumns } from "./ComplatainsTable/columns";

export default function CompanyPage({
  params,
}: {
  params: { companyId: string };
}) {
  const company = COMPANIES_MOCK.find((c) => c.id === params.companyId);

  if (!company) {
    return <p>Empresa no encontrada.</p>;
  }

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold">{company.name}</h1>
      <p className="text-muted-foreground">{company.nit}</p>
      <h2 className="text-xl mt-6 font-semibold">Evaluaciones</h2>
      <EvaluationTable
        columns={evaluationColumns}
        data={company.evaluations.map((evaluation) => ({
          ...evaluation,
          company_id: company.id, // 👈 injecta el ID de la empresa en cada evaluación
        }))}
      />{" "}
    </div>
  );
}
