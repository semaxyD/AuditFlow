import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useState, useEffect } from "react";

export function ObservationsModal({
  openObservationsModal,
  setOpenObservationsModal,
  onSaveObservation,
  initialObservation = "",
}: {
  openObservationsModal: boolean;
  setOpenObservationsModal: (value: boolean) => void;
  onSaveObservation: (observation: string) => void;
  initialObservation?: string;
}) {
  const [observation, setObservation] = useState(initialObservation);

  useEffect(() => {
    console.log("Modal abierto:", openObservationsModal);
    console.log("Valor inicial recibido:", initialObservation);
    if (openObservationsModal) {
      setObservation(initialObservation);
    }
  }, [openObservationsModal, initialObservation]);

  const handleSave = () => {
    console.log("Guardando observación:", observation);
    if (observation.trim()) {
      onSaveObservation(observation);
      setOpenObservationsModal(false);
    }
  };

  return (
    <Dialog open={openObservationsModal} onOpenChange={setOpenObservationsModal}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Añadir observación final</DialogTitle>
          <DialogDescription>
            Añada una observación final a la evaluación antes de finalizarla.
          </DialogDescription>
        </DialogHeader>
        <div className="flex flex-col gap-4 py-4">
          <div className="flex flex-col gap-4">
            <Label htmlFor="observation" className="text-right">
              Observación
            </Label>
            <Textarea 
              id="observation" 
              value={observation}
              onChange={(e) => {
                console.log("Nuevo valor:", e.target.value);
                setObservation(e.target.value);
              }}
              className="col-span-3 resize-none" 
              placeholder="Escriba su observación aquí..."
            />
          </div>
        </div>
        <DialogFooter>
          <Button 
            type="button" 
            onClick={handleSave}
            disabled={!observation.trim()}
          >
            Guardar
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
