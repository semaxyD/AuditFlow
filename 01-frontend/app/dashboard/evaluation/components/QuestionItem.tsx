import { memo, useState, useEffect } from "react";
import { useController, useFormContext } from "react-hook-form";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Card } from "@/components/ui/card";
import { VALID_ANSWERS } from "../schemas/evaluation.schema";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

type Props = {
  sectionId: number;
  questionId: number;
  questionText: string;
};

export const QuestionItem = memo(function QuestionItem({
  sectionId,
  questionId,
  questionText,
}: Props) {
  const [showEvidence, setShowEvidence] = useState(false);
  const [showObservations, setShowObservations] = useState(false);

  const {
    control,
    register,
    setValue,
    formState: { errors, isSubmitted },
    clearErrors,
    watch,
    trigger,
  } = useFormContext();

  const namePrefix = `sections.${sectionId}.${questionId}`;

  // Observar el valor actual de answer para mostrar el campo de observaciones cuando sea necesario
  const currentAnswer = watch(`${namePrefix}.answer`);
  const shouldShowObservation = currentAnswer === "N/A";

  // Función para acceder de forma segura a los errores anidados
  const getNestedError = (path: string) => {
    try {
      const parts = path.split(".");
      let current: any = errors;

      for (const part of parts) {
        if (!current || !current[part]) return undefined;
        current = current[part];
      }

      return current;
    } catch (e) {
      console.error("Error al acceder a los errores:", e);
      return undefined;
    }
  };

  // Obtener error para este campo específico
  const fieldError = getNestedError(`sections.${sectionId}.${questionId}`);

  // Para depuración
  useEffect(() => {
    if (fieldError) {
      console.log(`Error en pregunta ${questionId}:`, fieldError);
    }
  }, [fieldError, questionId]);

  const { field: answerField } = useController({
    name: `${namePrefix}.answer`,
    control,
  });

  const handleAnswerChange = (val: string) => {
    answerField.onChange(val);

    const score = VALID_ANSWERS.find((opt) => opt.value === val)?.score ?? 0;

    // Actualizar el score en el campo correspondiente
    setValue(`${namePrefix}.score`, score, {
      shouldValidate: true,
      shouldDirty: true,
    });

    // Limpiar errores potenciales
    clearErrors(`${namePrefix}.answer`);

    // Si no es N/A y había un error de observaciones, también limpiarlo
    if (val !== "N/A") {
      clearErrors(`${namePrefix}.observations`);
    } else {
      // Si cambia a N/A y ya se había enviado el formulario, validar inmediatamente
      if (isSubmitted) {
        trigger(`${namePrefix}.observations`);
      }
    }
  };

  // Validar observaciones al cerrar el modal si la respuesta es N/A
  const handleCloseObservations = () => {
    setShowObservations(false);
    if (currentAnswer === "N/A") {
      trigger(`${namePrefix}.observations`);
    }
  };

  return (
    <Card className={`p-4 space-y-2 ${fieldError ? "border-red-400" : ""}`}>
      <p className="font-medium">{questionText}</p>

      <RadioGroup
        value={answerField.value}
        onValueChange={handleAnswerChange}
        className="flex gap-4"
      >
        {VALID_ANSWERS.map((option) => (
          <div
            key={option.label}
            className="flex flex-col gap-2 items-center space-x-6 w-20"
          >
            <RadioGroupItem
              value={option.value}
              id={`${namePrefix}-${option.value}`}
              className="mx-auto"
            />
            <label
              htmlFor={`${namePrefix}-${option.value}`}
              className="text-center"
            >
              {option.label}
            </label>
          </div>
        ))}
      </RadioGroup>

      {fieldError?.answer && (
        <p className="text-sm text-red-500">{fieldError.answer.message}</p>
      )}

      <div className="flex gap-2">
        <Button
          type="button"
          variant="secondary"
          onClick={() => setShowEvidence(true)}
        >
          Evidencias
        </Button>
        <Button
          type="button"
          variant="secondary"
          onClick={() => setShowObservations(true)}
        >
          Observaciones
        </Button>
      </div>

      {/* Mostrar feedback de error para observaciones directamente en el formulario */}
      {shouldShowObservation && fieldError?.observations && (
        <p className="text-sm text-red-500 mt-1">
          {fieldError.observations.message}
        </p>
      )}

      {/* Modal para Evidencias */}
      <Dialog open={showEvidence} onOpenChange={setShowEvidence}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Evidencias</DialogTitle>
          </DialogHeader>
          <div className="space-y-4">
            <p>Aquí puedes añadir evidencias</p>
            <input
              type="file"
              multiple
              onChange={(e) => {
                if (e.target.files?.length) {
                  console.log("Archivos seleccionados:", e.target.files);
                  // Implementar lógica de subida de archivos
                }
              }}
            />
          </div>
        </DialogContent>
      </Dialog>

      {/* Modal para Observaciones */}
      <Dialog
        open={showObservations}
        onOpenChange={(open) => {
          if (!open) handleCloseObservations();
          else setShowObservations(true);
        }}
      >
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Observaciones</DialogTitle>
          </DialogHeader>
          <div className="mt-2 w-full">
            <Textarea
              placeholder="Añadir observaciones"
              {...register(`${namePrefix}.observations`)}
              className={fieldError?.observations ? "border-red-400" : "w-full"}
            />
            {fieldError?.observations && (
              <p className="text-red-500 text-sm mt-1">
                {fieldError.observations.message}
              </p>
            )}
          </div>
        </DialogContent>
      </Dialog>
    </Card>
  );
});
