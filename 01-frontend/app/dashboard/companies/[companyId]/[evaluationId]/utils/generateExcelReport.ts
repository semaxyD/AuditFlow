"use client";

import ExcelJS from "exceljs";
import { saveAs } from "file-saver";
import { toast } from "sonner";

export const exportEvaluationToExcel = async (evaluation: any) => {
  try {
    const workbook = new ExcelJS.Workbook();

    const summarySheet = workbook.addWorksheet("Resumen");
    summarySheet.columns = [
      { header: "Campo", key: "campo", width: 30 },
      { header: "Valor", key: "valor", width: 50 },
    ];

    summarySheet.addRows([
      { campo: "Empresa", valor: evaluation.company_name },
      { campo: "NIT", valor: evaluation.nit },
      { campo: "Norma", valor: evaluation.norm_name },
      { campo: "Total preguntas", valor: evaluation.total_questions },
      { campo: "Respondidas", valor: evaluation.answered_questions },
      {
        campo: "Porcentaje completado",
        valor:
          evaluation.completion_percentage != null
            ? `${Math.round(evaluation.completion_percentage * 100) / 100}%`
            : "—",
      },
    ]);

    const sheetNames = new Set<string>();
    const getSafeSheetName = (title: string) => {
      let base = title.replace(/[\\/*[\]:?]/g, "").substring(0, 31);
      let name = base,
        i = 1;
      while (sheetNames.has(name)) {
        const suffix = `_${i++}`;
        name = base.substring(0, 31 - suffix.length) + suffix;
      }
      sheetNames.add(name);
      return name;
    };

    if (
      !Array.isArray(evaluation.criteria) ||
      evaluation.criteria.length === 0
    ) {
      toast.error("No hay criterios disponibles para exportar.");
      return;
    }

    evaluation.criteria.forEach((crit: any) => {
      const sheetName = getSafeSheetName(crit.title);
      const sheet = workbook.addWorksheet(sheetName);

      sheet.columns = [
        { header: "ID Pregunta", key: "question_id", width: 12 },
        { header: "Pregunta", key: "text", width: 60 },
        { header: "Respuesta", key: "response", width: 15 },
        { header: "Comentarios", key: "comments", width: 40 },
        { header: "Evidencias", key: "evidences", width: 50 },
      ];

      crit.questions.forEach((q: any) => {
        sheet.addRow({
          question_id: q.question_id,
          text: q.text,
          response: q.response ?? "",
          comments: q.comments ? q.comments.join("; ") : "",
          evidences:
            q.evidences && Array.isArray(q.evidences[0])
              ? (q.evidences[0] as string[]).join("; ")
              : "",
        });
      });
    });

    const buffer = await workbook.xlsx.writeBuffer();
    const blob = new Blob([buffer], {
      type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
    });
    saveAs(blob, `${evaluation.company_name || evaluation.norm_name}.xlsx`);
  } catch (error: any) {
    toast.error("Error al exportar la evaluación a Excel:", {
      description: error.message,
    });
  }
};
