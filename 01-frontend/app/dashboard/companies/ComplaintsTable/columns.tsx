"use client";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ColumnDef } from "@tanstack/react-table";
import { ArrowUpDown, Pencil, Trash, Eye } from "lucide-react";
import { Company } from "./mock/companies";
import "./CompaniesTable.css";

export const columns: ColumnDef<Company>[] = [
  {
    accessorKey: "name",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          className="pl-0 table-header"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Nombre
          <ArrowUpDown className="ml-2 h-4 w-4 text-right" />
        </Button>
      );
    },
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
      const companyId = row.original.id;
      return (
        <div className="flex gap-2 justify-end">
          {/* Enlace a la página de detalles de la empresa */}
          <Link href={`/dashboard/companies/${companyId}`}>
            <Button variant="outline" size="icon">
              <Eye />
            </Button>
          </Link>

          {/* Puedes añadir otros botones de acción, como editar o eliminar */}
          {/* <Button variant="outline" size="icon">
            <Pencil  />
          </Button> */}
          <Button variant="destructive" size="icon">
            <Trash />
          </Button>
        </div>
      );
    },
  },
];
