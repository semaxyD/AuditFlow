import { COMPANIES_MOCK } from "../../ComplaintsTable/mock/companies";
import VersionTable from "./ComplatainsTable/TableVersions";
import { versionColumns } from "./ComplatainsTable/columns";

export default function CompanyVersionPage({
  params,
}: {
  params: { companyId: string };
}) {
  const company = COMPANIES_MOCK.find(
    (c) => c.id.toString() === params.companyId
  );
  console.log("Empresa encontrada:", company);

  if (!company) {
    return <p>Empresa no encontrada.</p>;
  }

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold text-teal-700">{company.name}</h1>
      <p className="text-muted-foreground">{company.nit}</p>
      <div className="bg-white rounded-lg shadow p-6 pt-2 mt-4">
        <h2 className="text-xl mt-6 font-semibold">Versiones</h2>
        <VersionTable
          columns={versionColumns}
          data={
            company.evaluations?.flatMap(
              (evaluation) =>
                evaluation.versions?.map((version) => ({
                  ...version,
                  evaluation_id: evaluation.evaluation_id,
                  company_id: company.id,
                })) || [] // si evaluation.versions es undefined, devolvemos []
            ) || [] // si evaluations es undefined, devolvemos []
          }
        />
      </div>
    </div>
  );
}
