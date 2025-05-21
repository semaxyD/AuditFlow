// app/dashboard/evaluations-list/[evaluationId]/page.tsx
import EvalFetcher from "./components/EvalFetcher";

export default function ListedEvaluationPage({
  params,
}: {
  params: { evaluationId: string };
}) {
  // Este Server Component NO hace fetch, sólo pasa el evaluationId
  return <EvalFetcher evaluationId={params.evaluationId} />;
}
