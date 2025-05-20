import { Client } from 'pg';
import * as dotenv from 'dotenv';
dotenv.config();

async function listarUsuarios() {
  const client = new Client({
    connectionString: process.env.DATABASE_URL,
  });

  await client.connect();

  const res = await client.query(`
    SELECT id, name, email, role
    FROM "user"
    ORDER BY id ASC
  `);

  if (res.rows.length === 0) {
    console.log('⚠️  No hay usuarios registrados en el sistema.');
  } else {
    console.log('📋 Lista de usuarios:');
    for (const user of res.rows) {
      console.log('────────────────────────────');
      console.log(`🆔 ID            : ${user.id}`);
      console.log(`👤 Nombre        : ${user.name}`);
      console.log(`📧 Correo        : ${user.email}`);
      console.log(`🔐 Rol           : ${user.role}`);
    }
    console.log('────────────────────────────');
  }

  await client.end();
}

listarUsuarios().catch((err) => {
  console.error('❌ Error al listar usuarios:', err);
});
