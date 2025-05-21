// app/dashboard/evaluations/getEvaluationColumns.tsx
"use client";

import { ColumnDef } from "@tanstack/react-table";
import { Eye, FileSpreadsheet, FileText, Pencil } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import DeleteEvaluationModal from "../components/DeleteEvaluationModal/DeleteEvaluationModal";
import { generateEvaluationReport } from "../[evaluationId]/utils/generatePdfReport";
import { exportEvaluationToExcel } from "../[evaluationId]/utils/generateExcelReport";

export type Evaluation = {
  evaluation_id: number;
  evaluation_created_at: string;
  creator_name: string;
  company_id: number;
  norm: {
    norm_id: number;
    norm_name: string;
    norm_code: string;
  };
};

const user = localStorage.getItem("user");
const parsedUser = user ? JSON.parse(user) : null;
const id = parsedUser?.id;

export function getEvaluationColumns(
  role: string,
  onDeleted: () => void
): ColumnDef<Evaluation>[] {
  return [
    {
      accessorKey: "evaluation_id",
      header: "ID Evaluación",
    },
    {
      accessorKey: "creator_name",
      header: "Creador",
    },
    {
      id: "norma",
      header: "Norma",
      cell: ({ row }) => <span>{row.original.norm.norm_name}</span>,
    },
    {
      accessorKey: "evaluation_created_at",
      header: "Fecha de creación",
      cell: ({ row }) =>
        new Date(row.original.evaluation_created_at).toLocaleDateString(
          "es-ES",
          { year: "numeric", month: "long", day: "numeric" }
        ),
    },
    {
      id: "actions",
      enableHiding: false,
      cell: ({ row }) => {
        const evaluationId = row.original.evaluation_id;
        const companyId = row.original.company_id;

        const fetchFullEval = async () => {
          const res = await fetch(
            `http://localhost:3001/reports-evaluation/evaluation/${evaluationId}/details`,
            {
              headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${localStorage.getItem("token")}`,
              },
            }
          );
          if (!res.ok) throw new Error("Falló al cargar los detalles");
          const data = await res.json();
          return Array.isArray(data) ? data[0] : data;
        };

        const handleExportPdf = async () => {
          try {
            const fullEval = await fetchFullEval();
            await generateEvaluationReport(fullEval);
          } catch (err: any) {
            toast.error("No se pudo generar el PDF", {
              description: err.message,
            });
          }
        };

        const handleExportExcel = async () => {
          try {
            const fullEval = await fetchFullEval();
            await exportEvaluationToExcel(fullEval);
          } catch (err: any) {
            toast.error("No se pudo generar el Excel", {
              description: err.message,
            });
          }
        };

        const href =
          role === "auditor_externo"
            ? `/dashboard/companies/${companyId}/version/${evaluationId}`
            : `/dashboard/companies/${companyId}/${evaluationId}`;

        return (
          <div className="flex gap-2 justify-end">
            {role === "auditor_externo" && (
              <>
                <Button
                  variant="outline"
                  size="icon"
                  title="Descargar PDF"
                  className="bg-blue-600 text-white hover:bg-blue-700"
                  onClick={handleExportPdf}
                >
                  <FileText />
                </Button>
                <Button
                  variant="outline"
                  size="icon"
                  title="Descargar Excel"
                  className="bg-green-700 text-white hover:bg-green-800"
                  onClick={handleExportExcel}
                >
                  <FileSpreadsheet />
                </Button>
              </>
            )}

            <Link href={href}>
              <Button size="icon" title="Ver detalles">
                <Eye />
              </Button>
            </Link>
            {role === "auditor_interno" && (
              <Link
                href={`/dashboard/evaluation/edit/${evaluationId}?companyId=${companyId}&ruleId=${row.original.norm.norm_id}&userId=${id}`}
              >
                <Button variant="outline" size="icon" title="Editar">
                  <Pencil />
                </Button>
              </Link>
            )}
            {(role === "auditor_interno" || role === "auditor_externo") && (
              <DeleteEvaluationModal evaluationId={evaluationId.toString()} />
            )}
          </div>
        );
      },
    },
  ];
}
