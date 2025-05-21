"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import React, { useRef, useState } from "react";
import { toast } from "sonner";

export default function AddRule() {
  const [file, setFile] = useState<File | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [uploading, setUploading] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setError(null);
    const selectedFile = e.target.files?.[0];
    if (!selectedFile) {
      setFile(null);
      return;
    }
    if (
      selectedFile.type !== "text/csv" &&
      !selectedFile.name.endsWith(".csv")
    ) {
      setError("El archivo debe ser un .csv");
      setFile(null);
      return;
    }
    if (selectedFile.size > 5 * 1024 * 1024) {
      setError("El archivo no debe superar los 5MB");
      setFile(null);
      return;
    }
    setFile(selectedFile);
  };

  const handleUpload = async () => {
    if (!file) {
      setError("Selecciona un archivo para subir.");
      return;
    }
    setUploading(true);
    setError(null);
    const formData = new FormData();
    formData.append("file", file);

    const token = localStorage.getItem("token");

    try {
      const res = await fetch("http://localhost:3001/auditory/norms/upload", {
        method: "POST",
        body: formData,
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      if (!res.ok) {
        throw new Error("Error al subir el archivo.");
      }
      toast("Archivo subido correctamente");
      setFile(null);
      if (inputRef.current) inputRef.current.value = "";
    } catch (err) {
      setError("No se pudo subir el archivo.");
    } finally {
      setUploading(false);
    }
  };

  return (
    <div className="space-y-4 flex flex-col max-w-lg">
      <div className="bg-muted p-4 rounded">
        <p>
          Para subir una nueva norma, debes subir un archivo en formato{" "}
          <b>.csv</b> con la siguiente estructura:
        </p>
        <pre className="bg-background p-2 rounded mt-2 text-sm overflow-x-auto">
          norma_codigo,norma_nombre,criterio,pregunta
        </pre>
      </div>
      <Input
        ref={inputRef}
        type="file"
        className="cursor-pointer"
        accept=".csv,text/csv"
        onChange={handleFileChange}
        disabled={uploading}
      />
      {error && <div className="text-red-500 text-sm">{error}</div>}
      <Button onClick={handleUpload} disabled={!file || uploading}>
        {uploading ? "Subiendo..." : "Subir archivo"}
      </Button>
    </div>
  );
}
