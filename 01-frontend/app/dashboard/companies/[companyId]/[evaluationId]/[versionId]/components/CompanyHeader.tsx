import { Badge } from "@/components/ui/badge";

export function CompanyHeader({ name, nit }: { name: string; nit: string }) {
  return (
    <div className="mb-8">
      <h1 className="text-3xl font-bold text-teal-700">{name}</h1>
      <div className="flex items-center mt-2">
        <Badge variant="outline" className="text-sm">
          ID: {nit}
        </Badge>
      </div>
    </div>
  );
}
