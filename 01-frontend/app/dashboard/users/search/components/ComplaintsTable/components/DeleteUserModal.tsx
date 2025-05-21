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
import { toast } from "sonner";
const base = process.env.NEXT_PUBLIC_ENDPOINT;

export function DeleteUserModal({ userId }: { userId: string }) {
  const handleDeleteUser = async () => {
    try {
      console.log("Eliminando usuario con ID:", userId);
      const token = localStorage.getItem("token") || "";

      const response = await fetch(`${base}/user/delete/${userId}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });

      if (!response.ok) {
        const errorText = await response.text();
        console.error("Error al eliminar usuario:", errorText);
        toast.error("Error al eliminar usuario");
        return;
      }
      toast.success("Usuario eliminado exitosamente");

      console.log("Usuario eliminado exitosamente");
      window.location.reload();
    } catch (error) {
      console.error("Excepción al eliminar usuario:", error);
      alert("Ocurrió un error al intentar eliminar el usuario.");
    }
  };

  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button variant="destructive" size="icon">
          <Trash />
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>¿Esta seguro?</AlertDialogTitle>
          <AlertDialogDescription>
            Este usuario y todas sus evaluaciones serán eliminadas del sistema.{" "}
            <br />
            <b>Esta acción no se puede deshacer.</b>
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancelar</AlertDialogCancel>
          <AlertDialogAction asChild>
            <Button variant="destructive" onClick={handleDeleteUser}>
              Continuar
            </Button>
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
