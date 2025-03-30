# 📂 Estructura del Proyecto

## 🏛 ESTRUCTURA PROPUESTA PARA CADA CAPA

```
/proyecto-auditoria-iso
│── /frontend (Next.js - Capa de UI)
│   ├── /src
│   │   ├── /components
│   │   │   ├── /auth (Auth Component)
│   │   │   ├── /user-web-interface (User Web Interfaces Component)
│   │   │   ├── /admin-interface
│   │   ├── /hooks
│   │   ├── /lib
│   │   ├── /styles
│   │   ├── /utils
│   │   ├── /services (Llamadas a la API)
│   ├── next.config.js
│   ├── package.json
│   ├── tailwind.config.js
│   └── tsconfig.json
│
│── /backend (Nest.js - Capa de lógica de negocio)
│   ├── /src
│   │   ├── /components
│   │   │   ├── /auth (Auth Component, solo si es necesario aquí)
│   │   │   ├── /user-management (User Management Component)
│   │   │   ├── /auditory (Auditory Component)
│   │   │   ├── /reports (Reports/Evaluation Component)
│   │   │   ├── /email (E-mail Component, conexión con Resend)
│   │   ├── /common
│   │   ├── /config
│   │   ├── /middlewares
│   │   ├── /guards
│   │   ├── /interceptors
│   ├── main.ts
│   ├── package.json
│   ├── nest-cli.json
│   ├── tsconfig.json
│   ├── .env
│   ├── .gitignore
│
│── /data-access (PostgreSQL + Prisma - Capa de datos)
│   ├── /src
│   │   ├── /components
│   │   │   ├── /query-manager (Query Manager Component)
│   │   │   ├── /system-schema (System Data Schema Component)
│   │   │   ├── /regulations-schema (Regulations Schema Component)
│   │   ├── /prisma
│   │   │   ├── migrations
│   │   │   ├── schema.prisma
│   │   │   ├── seed.ts
│   │   ├── database.module.ts
│   │   ├── database.service.ts
│   ├── package.json
│   ├── prisma.yml
│   ├── tsconfig.json
│
│── /docs (Documentación)
│── README.md
│── .gitignore
│── docker-compose.yml
```

---

## 🌿 Estructura de ramas en GitHub

- `main` → Solo recibe código estable (deploys finales)
- `develop` → Rama principal de desarrollo (base de todas las features)
- `feature/` → Ramas específicas para cada funcionalidad
- `bugfix/` → Ramas para corregir errores específicos
- `hotfix/` → Ramas para arreglos urgentes en producción

Ejemplo de uso en features:

- `feature/audits-frontend` → UI para auditorías
- `feature/audits-backend` → API para auditorías

---

## ⚙️ Cómo trabajar con las ramas

### 1️⃣ Cuando una persona comienza una funcionalidad:

Crea su propia rama basada en `develop`:

```bash
git checkout develop
git pull origin develop
git checkout -b feature/audits-frontend
git push origin feature/audits-frontend
```

### 2️⃣ Cada persona trabaja en su parte:

Si dos personas trabajan en audits, una en frontend y otra en backend:

- Persona A (UI de audits) → `feature/audits-frontend`
- Persona B (API de audits) → `feature/audits-backend`

Ambos trabajan en paralelo sin conflictos.

### 3️⃣ Hacer commits y mantener sincronizada la rama:

```bash
git add .
git commit -m "UI del forms para auditoria"
git pull origin feature/audits-frontend # Para traer cambios remotos
git push origin feature/audits-frontend
```

Si hay actualizaciones en `develop` que deben integrar:

```bash
git checkout develop
git pull origin develop
git checkout feature/audits-frontend
git merge develop # Fusionar los últimos cambios de develop
git push origin feature/audits-frontend
```

### 4️⃣ Cuando termina la feature, se hace PR a `develop`:

Una vez lista, se crea un Pull Request (PR) para fusionarla en `develop`. Ejemplo: "Merge feature/audits-frontend → develop".

✅ **Después de que se fusionen los PRs, se borran las ramas de features y bugfixes.** 🚨 **Nunca se borra **`main ni develop`**.**

