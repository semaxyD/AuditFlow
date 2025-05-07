"use client";

import { useEffect, useState } from "react";
import { columns } from "./ComplaintsTable/columns";
import { Company } from "./ComplaintsTable/types/company";
import CompaniesTable from "./ComplaintsTable/CompaniesTable";

export default function SearchUsersPage() {
  const fetchCompanies = async (token: string): Promise<Company[]> => {
    const res = await fetch(
      "http://localhost:3001/reports-evaluation/companies",
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      }
    );
    if (!res.ok) {
      throw new Error(`Error ${res.status}: ${res.statusText}`);
    }
    return res.json();
  };

  const [data, setData] = useState<Company[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const token = window.localStorage.getItem("token") || "";
    fetchCompanies(token)
      .then((companies) => setData(companies))
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, []);

  if (loading) {
    return (
      <div className="p-6">
        <p>Cargando empresas…</p>
      </div>
    );
  }
  if (error) {
    return (
      <div className="p-6">
        <p className="text-red-600">Error al cargar: {error}</p>
      </div>
    );
  }

  return (
    <div className="space-y-6 p-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold text-teal-700">Empresas</h1>
      </div>
      <p className="text-muted-foreground">
        Aquí encontrarás todas las empresas que han presentado una evaluación.
      </p>
      <div className="bg-white rounded-lg shadow p-6">
        <CompaniesTable columns={columns} data={data} />
      </div>
    </div>
  );
}
