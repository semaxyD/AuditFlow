import { Client } from 'pg';
import * as dotenv from 'dotenv';

dotenv.config();

async function consultarUsuarios() {
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
    ORDER BY id;
  `);

  console.log(`👥 Lista de usuarios en el sistema:`);
  res.rows.forEach((u) => {
    console.log('──────────────────────────────');
    console.log(`🆔 ID Usuario      : ${u.id}`);
    console.log(`👤 Nombre          : ${u.name}`);
    console.log(`📧 Correo          : ${u.email}`);
    console.log(`🎭 Rol             : ${u.role}`);
  });

  await client.end();
}

consultarUsuarios();
