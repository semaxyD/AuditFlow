import { columns } from "./components/CompaniesTable/columns";
import CompaniesTable from "./components/CompaniesTable/CompaniesTable";
import { COMPANIES_MOCK } from "./mock/mock";

export default function Companies() {
  return (
    <div className="space-y-4">
      <h1 className="text-4xl font-bold text-teal-700">
        Listado de compañías
      </h1>
      <p className="text-gray-500">
        Aquí puedes ver todas las compañías que existen en el sistema.
      </p>
      <CompaniesTable
        columns={columns}
        data={COMPANIES_MOCK}
        companies={COMPANIES_MOCK}
      />
    </div>
  );
}
