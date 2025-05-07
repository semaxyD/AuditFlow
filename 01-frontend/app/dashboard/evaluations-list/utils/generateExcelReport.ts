"use client";

import ExcelJS from "exceljs";
import { saveAs } from "file-saver";
import { toast } from "sonner";

export const exportEvaluationToExcel = async (evaluation: any) => {
  try {
    const workbook = new ExcelJS.Workbook();

    console.log("Exportando evaluación a Excel:", evaluation);

    // 1. Hoja de resumen
    const summarySheet = workbook.addWorksheet("Resumen");
    summarySheet.columns = [
      { header: "Campo", key: "campo", width: 25 },
      { header: "Valor", key: "valor", width: 50 },
    ];

    summarySheet.addRows([
      { campo: "ID", valor: evaluation.id },
      { campo: "Nombre", valor: evaluation.name },
      { campo: "Fecha", valor: evaluation.date },
      { campo: "Estado", valor: evaluation.status },
      { campo: "Puntaje", valor: evaluation.score },
      { campo: "Total de preguntas", valor: evaluation.totalQuestions },
      { campo: "Retroalimentación", valor: evaluation.evaluationFeedback },
    ]);

    // 2. Hojas por sección
    const sheetNames = new Set<string>();

    const getSafeSheetName = (title: string) => {
      let baseName = title.replace(/[\\/*[\]:?]/g, "").substring(0, 31);
      let name = baseName;
      let counter = 1;
      while (sheetNames.has(name)) {
        const suffix = `_${counter}`;
        name = baseName.substring(0, 31 - suffix.length) + suffix;
        counter++;
      }
      sheetNames.add(name);
      return name;
    };

    if (!evaluation.sections || evaluation.sections?.length === 0) {
      toast.error("No hay secciones disponibles para exportar.");
      return;
    }

    evaluation.sections.forEach((section: any) => {
      const sheetName = getSafeSheetName(section.title);
      const sheet = workbook.addWorksheet(sheetName);

      sheet.columns = [
        { header: "ID", key: "id", width: 10 },
        { header: "Pregunta", key: "question", width: 60 },
        { header: "Respuesta", key: "response", width: 15 },
        { header: "Observaciones", key: "observations", width: 25 },
        { header: "Evidencia", key: "evidence", width: 40 },
      ];

      section.questions.forEach((q: any) => {
        sheet.addRow({
          id: q.id,
          question: q.question,
          response: q.response,
          observations: q.observations,
          evidence: q.evidence.join(", "),
        });
      });
    });

    // 3. Exportar archivo
    const buffer = await workbook.xlsx.writeBuffer();
    const blob = new Blob([buffer], {
      type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
    });
    saveAs(blob, `${evaluation.name}.xlsx`);
  } catch (error: any) {
    toast.error("Error al exportar la evaluación a Excel: ", {
      description: error.message,
    });
  }
};
