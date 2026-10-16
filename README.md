# CISM — rediseño web refactorizado

Aplicación React + Vite (frontend) y Node.js + Express (backend), con arquitectura por funcionalidades y API REST.

## Requisitos
Node.js 20+ y npm.

## Instalación
```bash
npm run install:all
```

## Desarrollo
En dos terminales desde la raíz:
```bash
npm run server
npm run dev
```
Abrir http://localhost:5173. Para compilar: `npm run build`. Para ejecutar pruebas: `npm run test`.

## Organización
- `frontend/src/components/`: componentes por área (layout, home, services, contact, placement).
- `frontend/src/data/`: textos, tarjetas y referencias visuales.
- `frontend/src/services/api.js`: acceso centralizado a la API.
- `frontend/src/pages/`: composición de páginas.
- `backend/src/routes/`: endpoints.
- `backend/src/controllers/`: validación y casos de uso HTTP.
- `backend/src/data/questions.js`: banco de preguntas y respuestas **solo servidor**.
- `backend/src/utils/store.js`: persistencia local demostrativa.

## Logo
Copiar el logo real a `frontend/public/assets/cultura-inglesa-logo.png`. No está incluido en el ZIP; se usa un texto de respaldo si falta.

## API REST
- `GET /api/health` — salud.
- `GET /api/questions` — 60 preguntas sin soluciones.
- `POST /api/assessments` — `{profile:{name,email,age,course},answers:{g1:1,...}}`.
- `POST /api/contacts` — `{name,email,message}`.

## Antes de publicar
Este proyecto es un **prototipo funcional**. Los registros se almacenan en archivos JSONL locales dentro de `backend/data` y **no se envían emails**. Implementar base de datos con acceso restringido, autenticación del personal, política de privacidad y consentimiento, medidas anti-spam y gestión de retención/borrado. Confirmar con CISM datos de contacto, trayectoria, programas, fotografías autorizadas y respuestas del examen. Revisar WCAG, SEO, CSP, HTTPS y despliegue de producción. No publicar el directorio `backend/data`.
