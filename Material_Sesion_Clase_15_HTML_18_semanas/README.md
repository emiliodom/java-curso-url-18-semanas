# Semana 15 — Seguridad básica, HTTPS y «cómo uso todo lo construido para mi proyecto»

**Unidad 8a** · Sábado 24 de octubre de 2026 · 70 min (11:10–12:20)

Versión **mínima por decisión del docente** (los estudiantes van atrasados con el proyecto): solo teoría y práctica en el navegador, quizzes y challenges. **No se implementa código nuevo**: la seguridad la proveen Render (HTTPS) y Neon (SSL). A cambio se agrega un **checkpoint de entrega** y se explica cómo transformar el Kit de la Semana 14 (`Jugador`) en el proyecto propio de cada estudiante (ejemplo: ficha única `Libro` de una Biblioteca, 13 campos, sin relaciones). Desde hoy **no se agregan características nuevas**.

## Contenido

| Archivo | Para qué sirve |
| --- | --- |
| `index.html` | Portada: mapa del curso, diagrama «quién protege qué», inventario «hasta dónde hemos llegado» |
| `clase.html` | Guía docente minuto a minuto, preparación y Plan B |
| `ejercicios.html` | 6 chequeos de auditoría (candado, redirección, cabeceras, CSRF, XSS, SSL a Neon) + diseño de la ficha propia |
| `cheatsheet.html` | 3 pestañas: seguridad, tabla de tipos Java ↔ input HTML ↔ validación, errores comunes |
| `transformar.html` | **Del Kit a tu proyecto**: mapa de archivos, entidad `Libro` completa, formulario, lista, SecurityConfig y la trampa de `ddl-auto=update` |
| `paginas.html` | Páginas estáticas (`/creditos`) y páginas con parámetros (`@PathVariable`, `@RequestParam`) |
| `quiz.html` | Presaberes (8) y Final (12), banco de 26 preguntas, opciones barajadas |
| `challenge.html` | Arrastrar campos → tipo Java, ordenar la receta (con 3 trampas) y detective de seguridad (4 casos) |
| `proyecto.html` | **Checkpoint ★**: auditoría, ficha de campos, lista de cotejo con progreso (se guarda en el navegador), páginas, reflexión y rúbrica de la Guía 15 |
| `styles.css`, `quiz.js`, `toast.js`, `diagramas.js` | Copiados de la Semana 14 sin cambios |

## Notas

- El código de `transformar.html` y `paginas.html` (entidad `Libro`, formulario, `/creditos`, `/libros/{id}`, `/buscar?genero=`) se **compiló y probó** en una copia del Kit: login, 403 sin `_csrf`, validaciones, guardado, escape de `<b>` con `th:text`, `/libros/abc` → 400, `/libros/99` → 500 y cabeceras `nosniff` / `X-Frame-Options: DENY` / `Cache-Control`. La copia de prueba **no** se incluye en el repositorio (esta semana no se implementa código).
- `Strict-Transport-Security` solo aparece en respuestas por HTTPS, por eso se comprueba en la URL de Render y no en `localhost`.
- Las páginas se generan con fragmentos HTML + una plantilla común; el resultado es HTML estático (sin dependencias nuevas).

## Evidencias de la semana

- Actividad en clase — Sesión 15 (0.66 pts): PDF del quiz Final + PDF del challenge.
- Guía de Aprendizaje 15 (1 pt): PDF del Checkpoint ★ (`proyecto.html`), antes de la Sesión 16 (31 de octubre de 2026).
