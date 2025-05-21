import { Button } from "@/components/ui/button";
import { columns } from "./components/RulesTable/columns";
import RulesTable from "./components/RulesTable/RulesTable";
import { MOCK_RULES } from "./mock/mock";
import Link from "next/link";

export default function DashboardPage() {
  return (
    <div className="space-y-4 flex flex-col">
      <h1 className="text-3xl font-bold">Normas</h1>
      <Button className="self-end" asChild>
        <Link href="/dashboard/rules/create">Crear nueva norma</Link>
      </Button>
      <RulesTable columns={columns} data={MOCK_RULES} rules={MOCK_RULES} />
    </div>
  );
}
