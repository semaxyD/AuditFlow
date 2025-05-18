import { EvaluationForm } from "./components/EvaluationForm";
import { EvaluationSettingsModal } from "./components/EvaluationSettingsModal";

export default function Evaluation() {
  // ACA HACER EL FETCH PARA TRAER LAS COMPAÑIAS, Y LAS NORMAS DISPONIBLES Y 
  // PASARLAS AL COMPONENTE DE EVALUATIONFORM POR PROPS

  return (
    <div className="space-y-4">
      <h1 className="text-4xl font-bold text-teal-700">Crear evaluación</h1>
      <p className="text-gray-500">
        Aquí puedes crear una nueva evaluación para la norma.
      </p>
      <EvaluationForm
        companies={[
          { id: 1, name: "Compañia 1" },
          { id: 2, name: "Compañia 2" },
        ]}
        rules={[
          { id: 1, name: "ISO 14001" },
          { id: 2, name: "Norma 2" },
        ]}
      />
    </div>
  );
}
