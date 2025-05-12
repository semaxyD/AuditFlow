// testeos
import { Client } from 'pg';
import * as dotenv from 'dotenv';

dotenv.config(); // Para leer tu .env

async function verificarRespuestasActualizadas(evaluationId: number) {
  const client = new Client({
    connectionString: process.env.DATABASE_URL,
  });

  await client.connect();

  const res = await client.query(`
    SELECT 
      ev.version_number,
      a.question_id,
      a.response,
      a.score,
      cm.text AS comment,
      e.url AS evidence
    FROM evaluation_version ev
    JOIN answer a ON a.version_id = ev.id
    LEFT JOIN comment cm ON cm.answer_id = a.id
    LEFT JOIN evidence e ON e.answer_id = a.id
    WHERE ev.evaluation_id = $1 AND ev.is_latest = true
    ORDER BY a.question_id;
  `, [evaluationId]);

  console.log(`📝 Respuestas actuales de la evaluación ID ${evaluationId}:`);
  console.table(res.rows);

  await client.end();
}

// Cambia el número si estás usando otra evaluación
verificarRespuestasActualizadas(1);

