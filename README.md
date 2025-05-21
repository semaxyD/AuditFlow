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
- `feature/` → Ramas específicas para cada funcionalidad (se crean solo al momento de empezar a implementar una feature)
- `bugfix/` → Ramas para corregir errores específicos (se crean solo al momento de corregir un bug)
- `hotfix/` → Ramas para arreglos urgentes en producción (se crea solo al momento de añadir un hotfix)

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

### 4️⃣ Cuando termina la feature, se hace PR o merge a `develop`:

Una vez lista, se crea un Pull Request (PR) para fusionarla en `develop`. Ejemplo: "Merge feature/audits-frontend → develop".

✅ **Después de que se fusionen los PRs, se borran las ramas de features y bugfixes.** 🚨 **Nunca se borra **`main ni develop`**.**

---
### 🐳 Montaje del Proyecto con Docker

Este proyecto está dockerizado y listo para usarse en cualquier máquina con Docker Desktop. A continuación se detalla el paso a paso para levantar los contenedores del backend y data-access, y cómo comenzar a interactuar con la API.

---

## ✅ Requisitos Previos

Antes de comenzar, asegurate de tener:

- [Docker Desktop](https://www.docker.com/products/docker-desktop) instalado.
- Acceso a internet para construir las imágenes.
- Tener el disco `C:` compartido con Docker Desktop (esto está habilitado por defecto).
- PowerShell o terminal habilitada para correr los comandos.
- Git instalado para clonar el repositorio (opcional, también podés descargarlo como ZIP).

---

## 🚀 Instrucciones de Uso

### 1. Clonar o descargar el proyecto

Si tenés Git instalado, podés clonarlo:

```bash
git clone https://github.com/usuario/nombre-del-repo.git
cd nombre-del-repo
```
O bien, descargá el proyecto en formato ZIP desde GitHub y descomprimilo en tu equipo.

### 2. Construir y levantar los contenedores

Ubicate en la raíz del proyecto (donde se encuentra el archivo docker-compose.yml) y ejecutá el siguiente comando:
```bash
docker-compose up --build
```
La primera vez puede tardar unos minutos, dependiendo de tu conexión y hardware.

### 3. Probar el aplicativo Web
Puedes probar accediendo al navegador con la ruta:
```bash
http://localhost:3001
```
---
### 📄 Monitoreo - Logs del sistema

Durante la ejecución, el backend genera un archivo de log llamado `AuditFlow.log`.

Este archivo se guardará automáticamente en el directorio raíz del disco C: de tu sistema:

📁 `C:\AuditFlow.log`

No es necesario crear manualmente ninguna carpeta. Solo asegurate de:

- Tener Docker Desktop instalado (aunque corras los contenedores desde PowerShell).
- Tener el disco `C:` compartido con Docker (lo está por defecto).


