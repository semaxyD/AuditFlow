import { EvaluationForm } from "./components/EvaluationForm";

export default function Evaluation() {
  return (
    <div className="space-y-4">
      <h1 className="text-4xl font-bold text-teal-700">Crear evaluación</h1>
      <p className="text-gray-500">
        Aquí puedes crear una nueva evaluación para la norma.
      </p>
      <EvaluationForm />
    </div>
  );
}
