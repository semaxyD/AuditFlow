import { Client } from 'pg';
import * as dotenv from 'dotenv';

dotenv.config();

async function consultarVersionActiva() {
  const client = new Client({
    connectionString: process.env.DATABASE_URL,
  });

  await client.connect();

  const evaluationId = 1;

  const res = await client.query(`
    SELECT 
      ev.id AS version_id,
      ev.version_number,
      ev.is_latest,
      ev.status,
      ev.completion_percentage,
      ev.total_questions,
      ev.answered_questions,
      ev.score
    FROM evaluation_version ev
    WHERE ev.evaluation_id = $1
    ORDER BY version_number;
  `, [evaluationId]);

  console.log(`📋 Versiones de la evaluación ${evaluationId}:`);
  res.rows.forEach((v) => {
    console.log('──────────────────────────────');
    console.log(`🆔 ID Versión           : ${v.version_id}`);
    console.log(`🔢 Número de Versión    : ${v.version_number}`);
    console.log(`⭐ Última versión        : ${v.is_latest}`);
    console.log(`📊 Estado               : ${v.status}`);
    console.log(`✅ Cumplimiento (%)     : ${v.completion_percentage}`);
    console.log(`❓ Total preguntas       : ${v.total_questions}`);
    console.log(`✏️  Respondidas          : ${v.answered_questions}`);
    console.log(`🧮 Score total           : ${v.score}`);
  });

  await client.end();
}

consultarVersionActiva();
