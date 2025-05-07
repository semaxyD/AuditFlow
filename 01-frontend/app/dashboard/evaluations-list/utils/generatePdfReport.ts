import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";
import Chart from "chart.js/auto";
import { toast } from "sonner";

export const generateEvaluationReport = async (evaluation: any) => {
  try {
    // Crear un canvas temporal en alta resolución
    const canvas = document.createElement("canvas");
    const width = 800; // alta resolución
    const height = 400;
    canvas.width = width;
    canvas.height = height;

    const ctx = canvas.getContext("2d");
    if (!ctx) throw new Error("No se pudo obtener el contexto 2D.");

    if (!evaluation.sections || evaluation.sections?.length === 0) {
      toast.error("No hay secciones disponibles para exportar.");
      return;
    }

    const labels = evaluation.sections.map((s: any) => s.title);
    const data = evaluation.sections.map((s: any) => s.questions.length);

    // Renderizar el gráfico
    const chart = new Chart(ctx, {
      type: "bar",
      data: {
        labels,
        datasets: [
          {
            label: "Cantidad de preguntas por sección",
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
          title: { display: true, text: "Resumen de Secciones" },
        },
      },
    });

    // Esperar que se dibuje el gráfico (sin animación debería ser inmediato)
    await new Promise((resolve) => setTimeout(resolve, 300));

    const chartImage = canvas.toDataURL("image/png", 1.0); // calidad alta

    const doc = new jsPDF();
    const margin = 14;
    const pageWidth = doc.internal.pageSize.getWidth();

    // Encabezado
    doc.setFontSize(18);
    doc.text(evaluation.name, pageWidth / 2, 20, { align: "center" });

    doc.setFontSize(11);
    doc.text(`Fecha: ${evaluation.date}`, margin, 35);
    doc.text(`Estado: ${evaluation.status}`, margin, 42);
    doc.text(`Puntaje: ${evaluation.score}`, margin, 49);

    // Insertar gráfico con buena resolución
    const chartDisplayHeight = 80;
    const chartDisplayWidth = pageWidth - 2 * margin;
    doc.addImage(
      chartImage,
      "PNG",
      margin,
      60,
      chartDisplayWidth,
      chartDisplayHeight
    );

    let yOffset = 60 + chartDisplayHeight + 10;

    // Generar tablas por sección
    evaluation.sections.forEach((section: any, index: number) => {
      doc.setFontSize(13);
      doc.setFont("helvetica", "bold");
      doc.text(`${index + 1}. ${section.title}`, margin, yOffset);
      yOffset += 6;

      const tableData = section.questions.map((q: any) => [
        q.question,
        q.response,
        q.observations,
        q.evidence.join(", "),
      ]);

      autoTable(doc, {
        head: [["Pregunta", "Respuesta", "Observaciones", "Evidencia"]],
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
    doc.save(`${evaluation.name}.pdf`);
  } catch (error: any) {
    toast.error("Error al exportar la evaluación a PDF: ", {
      description: error.message,
    });
  }
};
