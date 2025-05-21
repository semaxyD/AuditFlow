import * as csv from 'csv-parser';
import { Readable } from 'stream';

interface ParsedRow {
  norma_codigo: string;
  norma_nombre: string;
  criterio: string;
  pregunta: string;
}

export async function parseNormCsv(buffer: Buffer): Promise<ParsedRow[]> {
  return new Promise((resolve, reject) => {
    const results: ParsedRow[] = [];

    const stream = Readable.from(buffer);

    stream
      .pipe(csv())
      .on('data', (row) => {
        results.push({
          norma_codigo: (row['norma_codigo'] || '').trim(),
          norma_nombre: (row['norma_nombre'] || '').trim(),
          criterio: (row['criterio'] || '').trim(),
          pregunta: (row['pregunta'] || '').trim(),
        });
      })
      .on('end', () => {
        // Validaciones básicas:
        if (results.length === 0) {
          return reject(new Error('El archivo CSV está vacío o mal formateado.'));
        }

        // Verifica que todos los campos existan en cada fila
        const hasInvalid = results.some(
          (row) =>
            !row.norma_codigo ||
            !row.norma_nombre ||
            !row.criterio ||
            !row.pregunta
        );

        if (hasInvalid) {
          return reject(new Error('El archivo contiene filas incompletas.'));
        }

        resolve(results);
      })
      .on('error', (err) => {
        reject(new Error('Error al leer el archivo CSV: ' + err.message));
      });
  });
}
