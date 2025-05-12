import { Client } from 'pg';
import * as dotenv from 'dotenv';

dotenv.config(); // Lee DATABASE_URL

async function listarUsuarios() {
  const client = new Client({
    connectionString: process.env.DATABASE_URL,
  });

  await client.connect();

  const res = await client.query(`
    SELECT 
      id,
      name,
      email,
      role
    FROM "user"
    ORDER BY id ASC;
  `);

  console.log("👥 Lista de usuarios:");
  console.table(res.rows);

  await client.end();
}

listarUsuarios();
