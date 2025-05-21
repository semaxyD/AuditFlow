"use client";

import {
  ColumnDef,
  flexRender,
  getCoreRowModel,
  useReactTable,
  SortingState,
  getSortedRowModel,
  getPaginationRowModel,
  getFilteredRowModel,
} from "@tanstack/react-table";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import { Company } from "./types/company";
import { getColumns } from "./columns";
import CreateCompanyModal from "../components/CreateCompanyModal/CreateCompanyModal";
import { useRoleCheck } from "@/hooks/useRoleCheck";

type Props = {
  data: Company[];
  onDeleted: () => void;
  onUpdated: () => void;
};

export default function CompaniesTable({ data, onDeleted, onUpdated }: Props) {
  const [sorting, setSorting] = useState<SortingState>([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [tableData, setTableData] = useState<Company[]>(data);
  const { role, status } = useRoleCheck("admin");

  const columns = getColumns(onDeleted, onUpdated);

  const table = useReactTable({
    data: tableData,
    columns,
    state: {
      sorting,
      globalFilter: searchTerm,
    },
    onSortingChange: setSorting,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
  });

  useEffect(() => {
    table.setGlobalFilter(searchTerm);
  }, [searchTerm, table]);

  return (
    <div className="mt-10 flex flex-col gap-4">
      {role === "admin" ? (
        <div className="self-end">
          <CreateCompanyModal />
        </div>
      ) : null}

      {table.getRowModel().rows.length > 0 ? (
        <>
          <div className="rounded-md border mt-3">
            <Table>
              <TableHeader>
                {table.getHeaderGroups().map((headerGroup) => (
                  <TableRow key={headerGroup.id}>
                    {headerGroup.headers.map((header) => (
                      <TableHead key={header.id}>
                        {header.isPlaceholder
                          ? null
                          : flexRender(
                              header.column.columnDef.header,
                              header.getContext()
                            )}
                      </TableHead>
                    ))}
                  </TableRow>
                ))}
              </TableHeader>
              <TableBody>
                {table.getRowModel().rows.map((row) => (
                  <TableRow key={row.id}>
                    {row.getVisibleCells().map((cell) => (
                      <TableCell key={cell.id}>
                        {flexRender(
                          cell.column.columnDef.cell,
                          cell.getContext()
                        )}
                      </TableCell>
                    ))}
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>

          <div className="flex items-center justify-end space-x-2 py-4">
            <Button
              variant="outline"
              size="sm"
              onClick={() => table.previousPage()}
              disabled={!table.getCanPreviousPage()}
            >
              Anterior
            </Button>
            <Button
              variant="outline"
              size="sm"
              onClick={() => table.nextPage()}
              disabled={!table.getCanNextPage()}
            >
              Siguiente
            </Button>
          </div>
        </>
      ) : (
        <p className="mt-5">No hay compañías registradas</p>
      )}
    </div>
  );
}
