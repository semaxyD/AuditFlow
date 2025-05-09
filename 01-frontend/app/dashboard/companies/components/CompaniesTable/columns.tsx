"use client";

import { Button } from "@/components/ui/button";
import { ColumnDef } from "@tanstack/react-table";
import { ArrowUpDown, Circle, Delete, Eye, Pencil, Trash } from "lucide-react";
import "./CompaniesTable.css";
import Link from "next/link";
import { Company } from "../../mock/mock";
import DeleteCompanyModal from "../DeleteCompanyModal/DeleteCompanyModal";
import EditCompanyModal from "../EditCompanyModal/EditCompanyModal";

export const columns: ColumnDef<Company>[] = [
  {
    accessorKey: "id",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          className="pl-0 table-header"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Id
          <ArrowUpDown className="ml-2 h-4 w-4 text-right" />
        </Button>
      );
    },
  },
  {
    accessorKey: "name",
    header: "Nombre",
  },
  {
    accessorKey: "nit",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          className="pl-0 table-header"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          NIT
          <ArrowUpDown className="ml-2 h-4 w-4 text-right" />
        </Button>
      );
    },
  },
  {
    accessorKey: "address",
    header: "Dirección",
    cell: ({ row }) => {
      return (
        <div className="flex items-center gap-2 max-w-[200px]">
          <span className="truncate overflow-hidden whitespace-nowrap">
            {row.getValue("address")}
          </span>
        </div>
      );
    },
  },
  {
    accessorKey: "phone",
    header: "Teléfono",
  },
  {
    accessorKey: "contact_name",
    header: "Nombre contacto",
  },
  {
    accessorKey: "contact_email",
    header: "Email contacto",
  },

  {
    id: "actions",
    enableHiding: false,
    cell: ({ row }) => {
      return (
        <div className="flex gap-2 justify-end">
          <EditCompanyModal company={row.original} />
          <DeleteCompanyModal companyId={row.original.id.toString()} />
        </div>
      );
    },
  },
];
