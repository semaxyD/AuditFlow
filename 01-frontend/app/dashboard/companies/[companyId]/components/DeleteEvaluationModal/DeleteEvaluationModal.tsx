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

export default function DeleteEvaluationModal({
  evaluationId,
}: {
  evaluationId: string;
}) {
  const [isDeleting, setIsDeleting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleDelete = async () => {
    setIsDeleting(true);
    setError(null);
    const token = window.localStorage.getItem("token") || "";

    try {
      const res = await fetch(
        `http://localhost:3001/auditory/delete/evaluation/${evaluationId}`,
        {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );
      console.log("res", res);

      if (!res.ok) {
        throw new Error(`Error ${res.status}: ${res.statusText}`);
      }

      toast.success("Evaluación eliminada correctamente", {
        description: "La evaluación ha sido eliminada de la base de datos.",
      });
      window.location.reload();
    } catch (err: any) {
      setError(err.message);
      toast.error("Error al eliminar la evaluación", {
        description: err.message,
      });
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
          title="Eliminar evaluación"
          disabled={isDeleting}
        >
          <Trash />
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>
            ¿Estás seguro de eliminar esta evaluación?
          </AlertDialogTitle>
          <AlertDialogDescription>
            Esta acción es permanente y eliminará todos los datos asociados a la
            evaluación.
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
