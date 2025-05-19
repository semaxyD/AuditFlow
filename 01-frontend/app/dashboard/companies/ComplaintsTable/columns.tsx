// ComplaintsTable/columns.tsx
"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ColumnDef } from "@tanstack/react-table";
import { ArrowUpDown, Trash, Eye } from "lucide-react";
import { Company } from "./mock/companies";
import EditCompanyModal from "../components/EditCompanyModal/EditCompanyModal";
import DeleteCompanyModal from "../components/DeleteCompanyModal/DeleteCompanyModal";

// 1) Cambiamos export const columns => export function getColumns
export function getColumns(onDeleted: () => void): ColumnDef<Company>[] {
  return [
    {
      accessorKey: "name",
      header: ({ column }) => (
        <Button
          variant="ghost"
          className="pl-0 table-header"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Nombre
          <ArrowUpDown className="ml-2 h-4 w-4 text-right" />
        </Button>
      ),
    },
    {
      accessorKey: "id",
      header: "NIT",
    },
    {
      accessorKey: "address",
      header: "Dirección",
    },
    {
      accessorKey: "phone",
      header: "Teléfono",
    },
    {
      accessorKey: "contact_name",
      header: "Contacto",
    },
    {
      accessorKey: "contact_email",
      header: "Correo de contacto",
    },
    {
      id: "actions",
      enableHiding: false,
      cell: ({ row }) => {
        const companyId = row.original.id.toString();
        return (
          <div className="flex gap-2 justify-end">
            <Link href={`/dashboard/companies/${companyId}`}>
              <Button variant="outline" size="icon">
                <Eye />
              </Button>
            </Link>
            <EditCompanyModal company={row.original} />
            {/* Aquí recibe onDeleted */}
            <DeleteCompanyModal companyId={companyId} onDeleted={onDeleted} />
          </div>
        );
      },
    },
  ];
}
