// ComplaintsTable/columns.tsx

import type { Version } from "../../../ComplaintsTable/types/company";
import { ColumnDef } from "@tanstack/react-table";
import { Eye, Trash } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useParams } from "next/navigation";

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
    cell: ({ row }) => (
      <div className="w-full max-w-[120px]">
        <div className="h-2 bg-muted rounded-full overflow-hidden">
          <div
            className="h-full bg-teal-700 transition-all"
            style={{ width: `${row.original.score}%` }}
          />
        </div>
        <div className="text-xs text-right mt-1">{row.original.score}</div>
      </div>
    ),
  },
  {
    id: "actions",
    enableHiding: false,
    cell: ({ row }) => {
      const params = useParams();
      const evaluationId = params?.evaluationId as string;
      const { version_id } = row.original;

      console.log("Datos de la versión:", row.original);
      console.log("Evaluation ID:", evaluationId);
      console.log("Version ID:", version_id);

      if (!evaluationId || !version_id) {
        console.error("Faltan IDs necesarios:", { evaluationId, version_id });
        return null;
      }

      return (
        <div className="flex gap-2 justify-end">
          <Link
            href={`/dashboard/companies/${evaluationId}/version/${version_id}`}
          >
            <Button variant="outline" size="sm">
              <Eye className="w-4 h-4" />
            </Button>
          </Link>
          <Button variant="destructive" size="sm">
            <Trash className="w-4 h-4" />
          </Button>
        </div>
      );
    },
  },
];
