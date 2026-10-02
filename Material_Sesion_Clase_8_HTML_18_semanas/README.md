# Material — Semana 8 (formato 18 semanas · sesiones de 70 min)

**Semana 8 — Spring Boot: configuración y primer servicio · 29 de agosto de 2026**

Abrir `index.html` en el navegador (es el hub de toda la semana).

## Qué cambia esta semana

La Semana 7 dejó el proyecto arrancando pero respondiendo con una página de
error genérica (Whitelabel Error Page). Hoy ese proyecto **responde de
verdad**: se escribe el primer `@RestController`, se definen rutas GET con
`@GetMapping`/`@RequestParam`, se prueban con el navegador y con Postman, y
se construye un **formulario web sencillo** (HTML + JavaScript con
`fetch`) que le habla al endpoint — **sin guardar ningún dato todavía**
(eso llega más adelante en el curso: rutas de guardado y Thymeleaf en la
Semana 10, base de datos con JPA en la Semana 12).

## Archivos

| Archivo | Qué es |
| --- | --- |
| `index.html` | Hub/portada con navegación a todas las secciones |
| `quiz.html` | Presaberes + Final en una sola página: `@RestController`, `@GetMapping`, `@RequestParam`, cómo probar endpoints |
| `clase.html` | Guía docente minuto a minuto: repaso de la Semana 7, primer controlador en vivo, prueba en navegador/Postman y construcción del formulario con `fetch` |
| `ejercicios.html` | 7 ejercicios **100% reales**: primer endpoint, endpoint con parámetro, prueba con Postman, primer formulario, provocar un error de ruta y un reto integrador con commit a GitHub |
| `cheatsheet.html` | 3 pestañas: conceptos y código completo de hoy, comandos + solución de problemas, y un **Anexo** con adelanto (sin implementar) de estilo y guardado en base de datos |
| `challenge.html` | 2 pestañas: "Ordena los pasos" (secuencia, dominio nuevo: Ludoteca Los Soñadores) y "Simulador de una petición" (mapa de capas iluminado, escenario exitoso vs. ruta mal escrita) |
| `proyecto.html` | Guía paso a paso + plantilla calificable de la Guía 8: agregar un `@RestController` y un formulario reales al proyecto del estudiante y subirlos a GitHub |
| `styles.css` | Estilos compartidos (copiado sin cambios desde la Semana 7 — ya incluye toasts, secuencia, clasificación, mapa de capas y pestañas) |
| `quiz.js` | Motor de quiz v2 (copiado sin cambios desde la Semana 7) |
| `toast.js` | Motor compartido de notificaciones toast (copiado sin cambios) |

## Exportar a PDF

Todas las secciones tienen botón **Exportar a PDF**. Los estilos de
impresión ocultan la navegación, los botones y la pila de toasts, y
fuerzan a que se muestren **todas las pestañas** (nav-tabs) del documento.

## Evidencias de la semana

1. **Actividad en clase — Sesión 8 (0.66 pts):** PDF del Quiz (modo Final) + PDF del Challenge.
2. **Entrega Guía 8 (1 pt):** PDF de `proyecto.html` (sección "Entregable") con el endpoint y el formulario reales, funcionando y subidos a GitHub.

Esta semana **no tiene** Entrega Parcial adicional (el próximo hito del
proyecto es la Entrega Parcial 2, en la Semana 9).

## Requisitos

- El proyecto Spring Boot generado en la Semana 7, corriendo en local.
- Postman o la extensión "Thunder Client" de VS Code son **opcionales**:
  todas las rutas de esta semana son GET y se pueden probar completamente
  desde el navegador.
- El material HTML funciona 100% offline salvo Bootstrap (CDN); lo que
  SÍ requiere ejecutar el proyecto real es `ejercicios.html`/`proyecto.html`.
