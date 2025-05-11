"use client";

import React, { memo, useState, useEffect } from "react";
import { useController, useFormContext, useFieldArray } from "react-hook-form";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Trash2, Plus } from "lucide-react";
import { VALID_ANSWERS } from "../schemas/evaluation.schema";

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

  // Manejo dinámico de array de evidencias
  const { fields, append, remove } = useFieldArray({
    control,
    name: `${namePrefix}.evidences`,
  });

  // Observa la respuesta para mostrar observaciones si es "N/A"
  const currentAnswer = watch(`${namePrefix}.answer`);
  const shouldShowObservation = currentAnswer === "N/A";

  // Controlador de la respuesta
  const { field: answerField } = useController({
    name: `${namePrefix}.answer`,
    control,
  });

  // Obtenemos errores anidados de forma segura
  const getNestedError = (path: string) => {
    return path
      .split(".")
      .reduce<any>(
        (acc, key) => (acc && acc[key] ? acc[key] : undefined),
        errors
      );
  };

  const fieldError = getNestedError(namePrefix);

  useEffect(() => {
    if (fieldError) console.log(`Error en pregunta ${questionId}:`, fieldError);
  }, [fieldError, questionId]);

  // Cambiar respuesta y calcular score
  const handleAnswerChange = (val: string) => {
    answerField.onChange(val);
    const score = VALID_ANSWERS.find((opt) => opt.value === val)?.score ?? 0;
    setValue(`${namePrefix}.score`, score, {
      shouldValidate: true,
      shouldDirty: true,
    });
    clearErrors(`${namePrefix}.answer`);
    if (val !== "N/A") clearErrors(`${namePrefix}.observations`);
    else if (isSubmitted) trigger(`${namePrefix}.observations`);
  };

  // Estados para controlar diálogos
  const [showEvidence, setShowEvidence] = useState(false);
  const [showObservations, setShowObservations] = useState(false);

  // Al cerrar evidencias, disparar validación
  const handleCloseEvidence = () => {
    setShowEvidence(false);
    trigger(`${namePrefix}.evidences`);
  };

  // Al cerrar observaciones, validar si corresponde
  const handleCloseObservations = () => {
    setShowObservations(false);
    if (currentAnswer === "N/A") trigger(`${namePrefix}.observations`);
  };

  return (
    <Card className={`p-4 space-y-4 ${fieldError ? "border-red-400" : ""}`}>
      <p className="font-medium">{questionText}</p>

      <RadioGroup
        value={answerField.value}
        onValueChange={handleAnswerChange}
        className="flex gap-4"
      >
        {VALID_ANSWERS.map((option) => (
          <div key={option.value} className="flex flex-col items-center w-20">
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

      {/* Lista de errores de evidencias */}
      {fieldError?.evidences && (
        <p className="text-sm text-red-500">
          {Array.isArray(fieldError.evidences)
            ? fieldError.evidences.map((e: any) => e?.url?.message).join(", ")
            : (fieldError.evidences as any).message}
        </p>
      )}

      {/* Modal de Evidencias */}
      <Dialog open={showEvidence} onOpenChange={handleCloseEvidence}>
        <DialogContent className="space-y-4">
          <DialogHeader>
            <DialogTitle>Evidencias</DialogTitle>
          </DialogHeader>

          <div className="space-y-3">
            {fields.map((field, idx) => (
              <div key={field.id} className="flex items-center gap-2">
                <Input
                  placeholder="https://ejemplo.com"
                  {...register(`${namePrefix}.evidences.${idx}.url` as const, {
                    required: "La URL es obligatoria",
                    pattern: {
                      value: /^https?:\/\/\S+$/,
                      message: "URL inválida",
                    },
                  })}
                  className={
                    getNestedError(`${namePrefix}.evidences.${idx}.url`)
                      ? "border-red-400"
                      : ""
                  }
                />
                <Button
                  type="button"
                  variant="destructive"
                  size="icon"
                  onClick={() => remove(idx)}
                  aria-label="Eliminar evidencia"
                >
                  <Trash2 className="w-4 h-4" />
                </Button>
              </div>
            ))}

            <Button
              type="button"
              variant="outline"
              size="sm"
              onClick={() => append({ url: "" })}
              className="mt-2 flex items-center gap-2"
            >
              <Plus className="w-4 h-4" /> Añadir evidencia
            </Button>
          </div>
        </DialogContent>
      </Dialog>

      {/* Modal de Observaciones */}
      <Dialog
        open={showObservations}
        onOpenChange={(open) => !open && handleCloseObservations()}
      >
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Observaciones</DialogTitle>
          </DialogHeader>
          <Textarea
            placeholder="Añadir observaciones"
            {...register(`${namePrefix}.observations`, {
              required:
                currentAnswer === "N/A" && "Las observaciones son obligatorias",
            })}
            className={fieldError?.observations ? "border-red-400" : "w-full"}
          />
          {fieldError?.observations && (
            <p className="text-sm text-red-500 mt-1">
              {fieldError.observations.message}
            </p>
          )}
        </DialogContent>
      </Dialog>
    </Card>
  );
});
