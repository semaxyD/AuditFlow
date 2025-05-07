// testear conexion con bd supabase
import { Client } from 'pg';
import * as dotenv from 'dotenv';

dotenv.config(); // Para leer tu .env 

async function verContenidoTabla(nombreTabla: string) {
  const client = new Client({
    connectionString: process.env.DATABASE_URL,
  });

  await client.connect();

  const res = await client.query(`SELECT * FROM ${nombreTabla} LIMIT 10;`);

  console.log(`Contenido de la tabla ${nombreTabla}:`);
  console.table(res.rows);

  await client.end();
}

// Llamar la función:
verContenidoTabla('question');

