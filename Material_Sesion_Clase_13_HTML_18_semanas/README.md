# Semana 13 — Autenticación, roles y renderizado condicional

**Unidad 6b** · Sábado 10 de octubre de 2026 · 70 min (11:10–12:20)

Sesión ligera: la aplicación `taller-formularios` (Escuela de Fútbol Los Cerritos, entidad `Jugador`) ya guarda datos; hoy se le agrega login con usuarios en la base (BCrypt), dos roles (`ADMIN`, `ENTRENADOR`), contraseñas por variables de entorno y un repaso del CRUD con solo dos validaciones.

## Contenido

| Archivo | Para qué sirve |
| --- | --- |
| `index.html` | Portada, ruta de 70 min y evaluación |
| `clase.html` | Guía docente minuto a minuto |
| `ejercicios.html` | 8 ejercicios en escalera, Kit de archivos completos y errores reproducibles |
| `cheatsheet.html` | Conceptos de seguridad + tabla de errores con mensaje real |
| `quiz.html` | Presaberes y Final (opciones barajadas), lenguaje de aula |
| `challenge.html` | Clasificación (código / variable de entorno / hash) + simulador de inicio de sesión (Laboratorio de Robótica) |
| `proyecto.html` | Guía sobre el proyecto real + entregable de la Guía 13 |
| `styles.css`, `quiz.js`, `toast.js` | Recursos compartidos (copiados de la Semana 12) |

## Notas

- El Kit fue compilado y probado completo con Spring Boot 4.1.1 / Java 17 (login, dos roles, CRUD, persistencia tras reinicio).
- Se arranca desde la terminal con las variables `ADMIN_PASSWORD` y `ENTRENADOR_PASSWORD` definidas; el botón ▶ de VS Code no las ve.
- Sin Biblioteca esta semana: todo continúa con `Jugador`.

## Evidencias de la semana

- Actividad en clase — Sesión 13 (0.66 pts): PDF del quiz Final + PDF del challenge.
- Guía de Aprendizaje 13 (1 pt): PDF de `proyecto.html` con el login por roles funcionando y la nota de datos sensibles.
- Sin hito de Entrega Parcial (el siguiente es la Entrega Parcial 3, Semana 14).
