import { Client } from 'pg';
import * as dotenv from 'dotenv';

dotenv.config();

async function verVersionAnteriorEvaluacion(evaluationId: number, versionNumber: number) {
  const client = new Client({ connectionString: process.env.DATABASE_URL });
  await client.connect();

  const res = await client.query(`
    SELECT
      q.id AS question_id,
      q.text AS question_text,
      a.response,
      ARRAY_AGG(DISTINCT e.url) FILTER (WHERE e.id IS NOT NULL) AS evidences
    FROM evaluation_version ev
    JOIN answer a ON a.version_id = ev.id
    JOIN question q ON q.id = a.question_id
    LEFT JOIN evidence e ON e.answer_id = a.id
    WHERE ev.evaluation_id = $1
      AND ev.version_number = $2
    GROUP BY q.id, q.text, a.response
    ORDER BY q.id;
  `, [evaluationId, versionNumber]);

  if (res.rows.length === 0) {
    console.log(`❌ No se encontraron datos para la versión #${versionNumber} de evaluación ${evaluationId}`);
  } else {
    console.log(`📦 Versión #${versionNumber} de evaluación ${evaluationId}:`);
    console.table(res.rows);
  }

  await client.end();
}

// Versión anterior a is_latest = true es la 2
verVersionAnteriorEvaluacion(13, 3);
