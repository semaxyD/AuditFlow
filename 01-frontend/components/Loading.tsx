"use client";

import { Loader2 } from "lucide-react";

export function Loading({ message = "Cargando…" }: { message?: string }) {
  return (
    <div className="flex flex-col items-center justify-center py-12">
      <Loader2 className="w-12 h-12 text-teal-700 animate-spin" />
      <span className="mt-4 text-lg font-medium text-teal-800">{message}</span>
    </div>
  );
}
