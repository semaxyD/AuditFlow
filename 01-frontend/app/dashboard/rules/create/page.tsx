import { Button } from "@/components/ui/button";

import Link from "next/link";
import AddRule from "./components/AddRule";

export default function DashboardPage() {
  return (
    <div className="space-y-4 flex flex-col">
      <h1 className="text-3xl font-bold">Crear nueva norma</h1>
      <AddRule/>
    </div>
  );
}
