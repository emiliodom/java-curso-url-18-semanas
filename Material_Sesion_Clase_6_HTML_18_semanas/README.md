# Material — Semana 6 (formato 18 semanas · sesiones de 70 min)

**Semana 6 — Arquitectura en capas · 15 de agosto de 2026**

Abrir `index.html` en el navegador (es el hub de toda la semana).

## Cambio de estructura a partir de esta semana

Para reducir la carga de tareas y mejorar la funcionalidad, desde la Semana 6:

- **Presaberes y Quiz Final se fusionaron en una sola página** (`quiz.html`),
  con un `<select>` que elige el modo. Las preguntas se sortean al azar de
  un banco más grande definido en `QUESTION_BANK` (dentro de `quiz.html`);
  el motor genérico vive en `quiz.js`.
- **`proyecto.html` y `entregable.html` se fusionaron** en una sola página
  (`proyecto.html`): primero la guía paso a paso, después la plantilla
  calificable de la Guía de Aprendizaje. Ya no existe un `entregable.html`
  aparte.
- **Ya no hay `guia_programador_python.html`**: se omite el puente con
  Python de aquí en adelante (decisión del profesor).
- El `challenge.html` ahora usa **pestañas** (Bootstrap nav-tabs) para
  alojar más de un simulador en la misma página.

## Archivos

| Archivo | Qué es |
| --- | --- |
| `index.html` | Hub/portada con navegación a todas las secciones |
| `quiz.html` | Presaberes + Final en una sola página, con menú desplegable y preguntas aleatorias |
| `clase.html` | Guía docente minuto a minuto (el chef, la bodega, bajo acoplamiento, antipatrón de saltarse capas) |
| `ejercicios.html` | 7 ejercicios **funcionales**: un mini-programa real (lista de tareas) embebido y funcionando en el navegador |
| `cheatsheet.html` | 2 pestañas: conceptos de arquitectura, y preparación paso a paso del entorno (VS Code + Java) de cara a la Semana 7 |
| `challenge.html` | 2 pestañas: clasificación de piezas (Entidad/Repositorio/Servicio/Presentación) y un simulador funcional animado |
| `proyecto.html` | Guía paso a paso + plantilla calificable de la Guía 6 (diagrama de capas y entidades del proyecto real) |
| `styles.css` | Estilos compartidos + reglas de impresión/PDF + componentes de toasts, cajas de clasificación, mapa de capas y pestañas (copiado y ampliado desde la Semana 5) |
| `quiz.js` | Motor de quiz v2: renderiza preguntas aleatorias desde un `QUESTION_BANK` definido por página |
| `toast.js` | Motor compartido de notificaciones toast |

## Exportar a PDF

Todas las secciones tienen botón **Exportar a PDF**. Los estilos de
impresión ocultan la navegación, los botones, la pila de toasts, y
fuerzan a que se muestren **todas las pestañas** (nav-tabs) del documento.

## Evidencias de la semana

1. **Actividad en clase — Sesión 6 (0.66 pts):** PDF del Quiz (modo Final) + PDF del Challenge.
2. **Entrega Guía 6 (1 pt):** PDF de `proyecto.html` (sección "Entregable") con el diagrama de capas y entidades del proyecto real.

## Requisitos

- Ninguna instalación nueva esta semana — pero revisa la pestaña "Prepara tu entorno" de `cheatsheet.html`: la Semana 7 empieza código real con Spring Boot.
- El material funciona 100% offline salvo Bootstrap (CDN).
