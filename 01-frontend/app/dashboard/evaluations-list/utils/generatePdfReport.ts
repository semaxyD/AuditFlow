import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";
import Chart from "chart.js/auto";

export const generateEvaluationReport = async (evaluation: any) => {
  const ctx = (
    document.getElementById("chartCanvas") as HTMLCanvasElement
  ).getContext("2d");

  const labels = evaluation.sections.map((s: any) => s.title);
  const data = evaluation.sections.map((s: any) => s.questions.length);

  if (!ctx) {
    throw new Error("Failed to get 2D context for chart rendering.");
  }

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
      plugins: {
        legend: { display: false },
        title: { display: true, text: "Resumen de Secciones" },
      },
    },
  });

  // Esperar que el gráfico se renderice
  await new Promise((resolve) => setTimeout(resolve, 500));

  const chartImage = chart.toBase64Image();

  const doc = new jsPDF();
  const margin = 14;
  const pageWidth = doc.internal.pageSize.getWidth();

  // Título y datos
  doc.setFontSize(18);
  doc.text(evaluation.name, pageWidth / 2, 20, { align: "center" });

  doc.setFontSize(11);
  doc.text(`Fecha: ${evaluation.date}`, margin, 35);
  doc.text(`Estado: ${evaluation.status}`, margin, 42);
  doc.text(`Puntaje: ${evaluation.score}`, margin, 49);

  // Insertar gráfico
  doc.addImage(chartImage, "PNG", margin, 60, pageWidth - 2 * margin, 80);

  let yOffset = 150;

  // Tablas por sección
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

  chart.destroy(); // Limpia el gráfico del canvas
  doc.save(`${evaluation.name}.pdf`);
};
