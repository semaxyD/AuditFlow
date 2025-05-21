import type { Version } from "../../../ComplaintsTable/types/company";
import { ColumnDef } from "@tanstack/react-table";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useParams } from "next/navigation";
import { toast } from "sonner";
import {
  Circle,
  Eye,
  FileSpreadsheet,
  FileText,
  Pencil,
  Trash,
} from "lucide-react";
import { generateEvaluationReport } from "../utils/generatePdfReport";
import { exportEvaluationToExcel } from "../utils/generateExcelReport";
const base = process.env.NEXT_PUBLIC_ENDPOINT;
export const versionColumns: ColumnDef<Version>[] = [
  {
    accessorKey: "version_number",
    header: "Versión",
    cell: ({ row }) => (
      <div className="font-medium">v{row.original.version_number}</div>
    ),
  },
  {
    accessorKey: "create_by",
    header: "Creado por",
  },
  {
    accessorKey: "created_at",
    header: "Fecha de creación",
    cell: ({ row }) =>
      new Date(row.original.created_at).toLocaleDateString("es-CO", {
        year: "numeric",
        month: "long",
        day: "numeric",
      }),
  },
  {
    accessorKey: "is_latest",
    header: "¿Última?",
    cell: ({ row }) =>
      row.original.is_latest ? (
        <span className="text-teal-700 font-semibold">Sí</span>
      ) : (
        <span className="text-muted-foreground">No</span>
      ),
  },
  {
    accessorKey: "score",
    header: "Puntaje",
    cell: ({ row }) => {
      const score = row.original.score as number;
      return (
        <div className="flex items-center gap-2">
          <Circle
            className={`h-2 w-2 ${
              score >= 90
                ? "fill-green-500 text-transparent"
                : score >= 75
                ? "fill-yellow-500 text-transparent"
                : "fill-red-500 text-transparent"
            }`}
          />
          {score}
        </div>
      );
    },
  },
  {
    id: "actions",
    enableHiding: false,
    cell: ({ row }) => {
      const params = useParams();
      const evaluationId = params.evaluationId as string;
      const versionId = row.original.version_id;

      // Reutilizamos la misma llamada fetch para PDF y Excel
      const fetchFullEval = async () => {
        const res = await fetch(
          `${base}/reports-evaluation/${evaluationId}/version/${versionId}`,
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

      return (
        <div className="flex gap-2 justify-end">
          <Button
            variant="outline"
            size="icon"
            title="Descargar PDF"
            className="bg-red-600 text-white hover:bg-red-700 hover:text-white"
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

          <Link
            href={`/dashboard/companies/${evaluationId}/version/${versionId}`}
          >
            <Button size="icon">
              <Eye />
            </Button>
          </Link>
        </div>
      );
    },
  },
];
