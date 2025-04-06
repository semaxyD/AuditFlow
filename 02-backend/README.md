# Correr el backend + data access (NestJS + PostgreSQL)

Asegurarse que se está en: `git checkout develop`

---

## Qué hacer

### 🐘 Instalar PostgreSQL

Se debe tener una base de datos creada con los siguientes datos:

- **Nombre:** `auditflow_dev`
- **Usuario:** `postgres`
- **Contraseña:** `miguel123`

 Si se usan datos distintos, modificar estos archivos:

- `02-backend/src/app.module.ts`
- `03-data-access/src/components/query-manager/data-source.ts`

---

##  Instalar dependencias

```bash
cd 02-backend
npm install

cd ../03-data-access
npm install
```

---

## 🛠️ Compilar

### Data access:

```bash
npx tsc
```

### Backend:

```bash
npm run build
```

---

##  Iniciar

```bash
cd 02-backend
npm run start
```

 Si todo sale bien se debería ver:  
`Conectado a la base de datos correctamente`

---

##  Probar conexión

Abre en el navegador:

```
http://localhost:3001/ping
```

Debería aparecer:  
`{ "message": "Backend está funcionando correctamente" }`

---

## 📁 Nota

Las carpetas `node_modules/` y `dist/` están ignoradas en `.gitignore`