import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";
import Chart from "chart.js/auto";
import { toast } from "sonner";

export const generateEvaluationReport = async (evaluation: any) => {
  try {
    const criteria: Array<{ title: string; questions: any[] }> =
      Array.isArray(evaluation.criteria) && evaluation.criteria.length > 0
        ? evaluation.criteria
        : [
            {
              title: "Preguntas",
              questions: evaluation.questions ?? [],
            },
          ];

    if (criteria.length === 0) {
      toast.error("No hay criterios disponibles para exportar.");
      return;
    }

    const canvas = document.createElement("canvas");
    const width = 800,
      height = 400;
    canvas.width = width;
    canvas.height = height;
    const ctx = canvas.getContext("2d");
    if (!ctx) throw new Error("No se pudo obtener el contexto 2D.");

    const labels = criteria.map((c) => c.title);
    const data = criteria.map((c) => c.questions.length);

    const chart = new Chart(ctx, {
      type: "bar",
      data: {
        labels,
        datasets: [
          {
            label: "Preguntas por criterio",
            data,
            backgroundColor: "#4CAF50",
          },
        ],
      },
      options: {
        responsive: false,
        animation: false,
        plugins: {
          legend: { display: false },
          title: { display: true, text: "Resumen de Criterios" },
        },
      },
    });

    await new Promise((r) => setTimeout(r, 300));
    const chartImage = canvas.toDataURL("image/png", 1.0);

    const doc = new jsPDF();
    const margin = 14;
    const pageWidth = doc.internal.pageSize.getWidth();

    // Encabezado
    doc.setFontSize(18);
    doc.text(evaluation.company_name || evaluation.name, pageWidth / 2, 20, {
      align: "center",
    });
    doc.setFontSize(11);
    doc.text(`Norma: ${evaluation.norm_name}`, margin, 30);
    doc.text(`NIT: ${evaluation.nit}`, margin, 37);
    doc.text(`Total preguntas: ${evaluation.total_questions}`, margin, 44);
    doc.text(`Respondidas: ${evaluation.answered_questions}`, margin, 51);

    const chartH = 80;
    const chartW = pageWidth - 2 * margin;
    doc.addImage(chartImage, "PNG", margin, 60, chartW, chartH);

    let yOffset = 60 + chartH + 10;

    criteria.forEach((crit, idx) => {
      doc.setFontSize(13);
      doc.setFont("helvetica", "bold");
      doc.text(`${idx + 1}. ${crit.title}`, margin, yOffset);
      yOffset += 6;

      const tableData = crit.questions.map((q: any) => [
        q.text,
        q.response ?? "",
        q.comments ? q.comments.join("; ") : "",
        Array.isArray(q.evidences) ? q.evidences.flat().join("; ") : "",
      ]);

      autoTable(doc, {
        head: [["Pregunta", "Respuesta", "Comentarios", "Evidencias"]],
        body: tableData,
        startY: yOffset,
        margin: { left: margin, right: margin },
        styles: { fontSize: 9 },
        headStyles: { fillColor: [230, 230, 230] },
        alternateRowStyles: { fillColor: [245, 245, 245] },
        didDrawPage: (data) => {
          yOffset = data.cursor ? data.cursor.y + 10 : yOffset;
        },
      });
    });

    chart.destroy();
    doc.save(`${evaluation.company_name || evaluation.name}.pdf`);
  } catch (error: any) {
    toast.error("Error al exportar la evaluación a PDF:", {
      description: error.message,
    });
  }
};
