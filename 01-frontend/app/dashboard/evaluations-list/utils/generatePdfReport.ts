import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";

export const generateEvaluationReport = (evaluation: any) => {
  const doc = new jsPDF();
  const margin = 14;
  const pageWidth = doc.internal.pageSize.getWidth();

  // Title
  doc.setFontSize(18);
  doc.setFont("helvetica", "bold");
  doc.text(evaluation.name, pageWidth / 2, 20, { align: "center" });

  // Meta Info
  doc.setFontSize(11);
  doc.setFont("helvetica", "normal");
  doc.text(`Fecha: ${evaluation.date}`, margin, 35);
  doc.text(`Estado: ${evaluation.status}`, margin, 42);
  doc.text(`Puntaje: ${evaluation.score}`, margin, 49);
  doc.text(`Total de preguntas: ${evaluation.totalQuestions}`, margin, 56);
  doc.text(`Retroalimentación: ${evaluation.evaluationFeedback}`, margin, 63);

  let yOffset = 75;

  // Sections
  evaluation.sections.forEach((section: any, index: number) => {
    doc.setFont("helvetica", "bold");
    doc.setFontSize(14);
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
      styles: {
        fontSize: 9,
        cellPadding: 3,
        textColor: "#333",
        font: "helvetica",
      },
      headStyles: {
        fillColor: [230, 230, 230],
        textColor: "#000",
        fontStyle: "bold",
      },
      alternateRowStyles: {
        fillColor: [245, 245, 245],
      },
      didDrawPage: (data) => {
        if (data.cursor) {
          yOffset = data.cursor.y + 10;
        }
      },
    });
  });

  doc.save(`${evaluation.name}.pdf`);
};
