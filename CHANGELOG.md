# Bitácora de Cambios (Changelog)

Todas las modificaciones y adiciones de hitos del proyecto se registran en este documento.

## [2026-10-30] — Ajuste de Semana Activa en Portada y Accesibilidad de Contraste (S16–S18)

### Modificado
- **Portal Raíz (`index.html`):**
  - Configurada explícitamente la **Semana 16** como semana activa (`SEMANA_ACTIVA_N = 16`) en la tarjeta principal (`#featured`) con llamado destacado a la sesión de QA y Arquitectura.
  - Las Semanas 17 y 18 se mantienen listas pero etiquetadas con estado "Próximamente" hasta sus respectivas fechas oficiales (7 y 14 de noviembre), reflejando con exactitud la estadística de publicación (`16 / 18` semanas publicadas).
- **Accesibilidad y Contraste (WCAG AA/AAA) en Semanas 16, 17 y 18 (`styles.css`):**
  - Muted text reforzado: `.small-muted` y `.text-muted` actualizados a `#374151` (ratio de contraste superior a 9.6:1 en fondo claro, nivel AAA).
  - Enlaces accesibles: `a` con color base `#0a58ca` (6.4:1) y hover `#084298`, superando el mínimo legal de 4.5:1.
  - Botones y encabezados con texto blanco: `.btn-primary` y `.bg-primary` con fondo `#0a58ca` (6.4:1), `.btn-success` con `#15803d` (5.0:1), `.btn-danger` con `#b91c1c` (6.4:1).
  - Badges de estado de alto contraste: advertencia con fondo `#fef08a` y texto `#713f12` (7.4:1), info con `#e0f2fe` y `#0369a1` (5.2:1).
  - Tarjetas y tablas: bordes nítidos (`#cbd5e1`), encabezados con fondo `#f1f5f9` y texto `#0f172a`, e inputs de formulario con bordes perceptibles (`#94a3b8`).
  - Navegación, acordeones, mapas de ruta y timeline de 70 min con tipografía oscura de alta legibilidad para pantalla y proyector.
- **Tokens del Portal (`portal.css`):**
  - Variables de color atenuadas reforzadas (`--muted: #3d4a61;`, `--soon: #475569;`, `--border: #cbd5e1;`).

## [2026-10-30] — Cierre Curricular: Semanas 16, 17, 18 y Entregable Llave en Mano

### Añadido
- **Semana 16 (Unidad 8b · QA, pruebas y mantenimiento):**
  - Material interactivo en `Material_Sesion_Clase_16_HTML_18_semanas/`: hub, clase, cheatsheet, ejercicios con 6 casos de prueba (CP-01 a CP-06), quiz barajado, challenge drag & drop y reporte de pruebas en `proyecto.html`.
  - Documentos oficiales institucionales: Sesión de Clase 16 y Guía de Aprendizaje 16 (`.md` y `.docx`).
  - Refuerzo exhaustivo del árbol canónico de Spring Boot y del ciclo Formulario (Thymeleaf) ↔ Controlador ↔ Modelo (Bean Validation) ↔ Repositorio (JPA/Neon).
  - Verificación del ciclo continuo cambio local ➔ commit ➔ push a `main` ➔ redeploy automático en Render.
- **Semana 17 (Unidad 9a · Presentación interna y ★ Entrega Parcial 4):**
  - Material interactivo en `Material_Sesion_Clase_17_HTML_18_semanas/`: hub, clase, ejercicios con guion de demo de 4 min y temporizador, cheatsheet anti-cold start, herramienta en línea de `evaluacion_pares.html`, challenge y radicación en `proyecto.html`.
  - Documentos oficiales institucionales: Sesión 17 y Guía 17 (`.md` y `.docx`).
  - Hito de evaluación sumativo mayor: **7.0 puntos** (Guía 17 = 2 pts + Entrega Parcial 4 = 5 pts).
- **Semana 18 (Unidad 9b · Gran Cierre, defensa final, evaluación y reflexión):**
  - Material interactivo en `Material_Sesion_Clase_18_HTML_18_semanas/`: hub, clase, simulador de 8 preguntas de tribunal, cheatsheet del curso completo, herramienta de `evaluacion_pares.html` (Ronda 2 oficial), formulario de `autoevaluacion.html`, quiz integrador y acta de defensa en `proyecto.html`.
  - Documentos oficiales institucionales: Sesión 18 y Guía 18 (`.md` y `.docx`).
  - Hito de evaluación final: **15.78 puntos** (Defensa Formal = 10 pts, Peer Review R2 = 5 pts, Actividad sincrónica = 0.78 pts).
- **Entregable Maestro Llave en Mano:**
  - `ENTREGABLE_PROYECTO_LLAVE_EN_MANO.md`: estándares de README, manuales de usuario para la ONG, guiones de video A (Pitch de 3 min) y B (Técnico de 5 min), gestión confidencial de credenciales y plataformas, plantillas de correo formal de traspaso y checklist de certificación de 20 puntos.
- **Portal Raíz (`index.html`):**
  - Activación de Semanas 16, 17 y 18 con enlaces a carpetas interactivas, documentos oficiales y llamadas destacadas.
  - Inclusión del recurso "Proyecto Llave en Mano" en la barra de recursos transversal.
- **Referencia Técnica (`CLAUDE.md` y `README.md`):**
  - Sincronización completa del estado del repositorio con las 18 semanas publicadas al 100%.
