// DeleteCompanyModal.tsx
"use client";

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import { Trash } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";
const base = process.env.NEXT_PUBLIC_ENDPOINT;
export default function DeleteCompanyModal({
  companyId,
  onDeleted,
}: {
  companyId: string;
  onDeleted: () => void;
}) {
  const [isDeleting, setIsDeleting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleDelete = async () => {
    setIsDeleting(true);
    setError(null);
    const token = window.localStorage.getItem("token") || "";

    try {
      const res = await fetch(`${base}/user/delete/company/${companyId}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });

      toast.success("Empresa eliminada correctamente", {
        description: "La empresa ha sido eliminada de la base de datos.",
      });

      if (!res.ok) {
        throw new Error(`Error ${res.status}: ${res.statusText}`);
        toast.error("Error al eliminar la empresa", {
          description: res.statusText,
        });
      }

      // Llamamos al callback en lugar de recargar la página
      onDeleted();
    } catch (err: any) {
      setError(err.message);
    } finally {
      setIsDeleting(false);
    }
  };

  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button
          variant="destructive"
          size="icon"
          title="Eliminar compañía"
          disabled={isDeleting}
        >
          <Trash />
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>
            ¿Estás seguro de eliminar esta compañía?
          </AlertDialogTitle>
          <AlertDialogDescription>
            Esta acción no se puede deshacer. Todos los datos de la compañía
            serán eliminados permanentemente.
          </AlertDialogDescription>
        </AlertDialogHeader>
        {error && <p className="px-6 text-sm text-red-600">Error: {error}</p>}
        <AlertDialogFooter>
          <AlertDialogCancel disabled={isDeleting}>Cancelar</AlertDialogCancel>
          <AlertDialogAction asChild>
            <Button
              variant="destructive"
              className="w-1/2"
              onClick={handleDelete}
              disabled={isDeleting}
            >
              {isDeleting ? "Eliminando…" : "Eliminar"}
            </Button>
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
