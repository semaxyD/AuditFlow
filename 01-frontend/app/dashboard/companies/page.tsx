"use client";

import { columns } from "./ComplaintsTable/columns"; // Importamos las columnas de la tabla
import { COMPANIES_MOCK } from "./ComplaintsTable/mock/companies";
import CompaniesTable from "./ComplaintsTable/CompaniesTable";

export default function SearchUsersPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold">Empresas</h1>
      </div>

      <div className="bg-white rounded-lg shadow p-6">
        <CompaniesTable columns={columns} data={COMPANIES_MOCK} />
      </div>
    </div>
  );
}
