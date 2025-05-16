"use client";

import { ColumnDef } from "@tanstack/react-table";
import { Eye, Trash, FileSpreadsheet, FileText } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { generateEvaluationReport } from "../[evaluationId]/utils/generatePdfReport";
import { exportEvaluationToExcel } from "../[evaluationId]/utils/generateExcelReport";
import { useRoleCheck } from "@/hooks/useRoleCheck";

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

export function getEvaluationColumns(role: string): ColumnDef<Evaluation>[] {
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
      cell: ({ row }) => {
        const { norm_name } = row.original.norm;
        return <span>{norm_name}</span>;
      },
    },
    {
      accessorKey: "evaluation_created_at",
      header: "Fecha de creación",
      cell: ({ row }) =>
        new Date(row.original.evaluation_created_at).toLocaleDateString(
          "es-ES",
          {
            year: "numeric",
            month: "long",
            day: "numeric",
          }
        ),
    },
    {
      id: "actions",
      enableHiding: false,
      cell: ({ row }) => {
        const evaluationId = row.original.evaluation_id;
        const companyId = String(row.original.company_id);
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
          console.log("Datos completos de la evaluación:", data);
          return Array.isArray(data) ? data[0] : data;
        };

        const handleExportPdf = async () => {
          console.log("Exportando PDF" + evaluationId);
          try {
            const fullEval = await fetchFullEval();
            await generateEvaluationReport(fullEval);
          } catch (err: any) {
            console.error(err);
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
            console.error(err);
            toast.error("No se pudo generar el Excel", {
              description: err.message,
            });
          }
        };
        // Elegimos destino según rol
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
                  className="bg-blue-600 text-white hover:bg-blue-700 hover:text-white"
                  onClick={handleExportPdf}
                >
                  <FileText />
                </Button>

                <Button
                  variant="outline"
                  size="icon"
                  title="Descargar Excel"
                  className="bg-green-700 text-white hover:bg-green-800 hover:text-white"
                  onClick={handleExportExcel}
                >
                  <FileSpreadsheet />
                </Button>
              </>
            )}
            <Button variant="destructive" size="icon">
              <Trash />
            </Button>
            <Link href={href}>
              <Button size="icon">
                <Eye />
              </Button>
            </Link>
          </div>
        );
      },
    },
  ];
}
