# Semana 14 — Despliegue en producción con Render y Neon

**Unidad 7a** · Sábado 17 de octubre de 2026 · 70 min (11:10–12:20) · **★ Entrega Parcial 3**

La aplicación `taller-formularios` (Escuela de Fútbol Los Cerritos, entidad `Jugador`, con el login y los roles de la Semana 13) se publica en internet: la aplicación en **Render** (Web Service con Docker, plan gratuito) y los datos en **PostgreSQL de Neon**. No cambia ninguna clase Java: solo `server.port=${PORT:8080}`, el perfil `prod` completo y dos archivos nuevos (`Dockerfile`, `.dockerignore`).

## Contenido

| Archivo | Para qué sirve |
| --- | --- |
| `index.html` | Portada: mapa "de dónde vienes / qué harás / a dónde vas", diagrama de arquitectura, evaluación |
| `clase.html` | Guía docente minuto a minuto, preparación previa (el primer build tarda 5–10 min), FAQ, Plan B |
| `ejercicios.html` | 8 ejercicios en escalera con maquetas numeradas de Neon y Render, Kit de archivos completos y 10 errores reales |
| `cheatsheet.html` | Conceptos con diagramas, las 6 variables (con separador de la cadena de Neon), pantallas 2026, errores |
| `quiz.html` | Presaberes y Final (opciones barajadas), lenguaje de aula |
| `challenge.html` | Secuencia del despliegue con trampas + simulador de la consola de Render con 4 diagnósticos (Centro de Reciclaje Tierra Viva) |
| `proyecto.html` | Guía de 13 pasos con mapa de avance + entregable doble: Guía 14 (1 pt) y ★ Entrega Parcial 3 (5 pts) |
| `styles.css` | Copiado de la Semana 13 + componentes nuevos: mapa de ruta, maquetas de pantalla, diagramas, terminal, tubería |
| `diagramas.js` | **Nuevo**: dibuja los diagramas Mermaid (CDN `mermaid@11.4.1`) con un tema único, también dentro de pestañas y al imprimir |
| `quiz.js`, `toast.js` | Recursos compartidos (sin cambios) |

## Notas

- Render **no** tiene runtime nativo de Java: se usa Docker (precisión al programa, ver `clase.html` y `../VERIFICACION_Semana_14_despliegue.md`).
- Todo el código fue compilado y ejecutado en perfil `prod` contra PostgreSQL; los mensajes de error marcados "real" se copiaron de esas ejecuciones.
- Las maquetas de pantalla son dibujos simplificados (no capturas) con los nombres de botones comprobados en la documentación oficial de octubre de 2026.

## Evidencias de la semana

- Actividad en clase — Sesión 14 (0.66 pts): PDF del quiz Final + PDF del challenge (un nivel de secuencia y los 4 diagnósticos).
- Guía de Aprendizaje 14 (1 pt) + ★ Entrega Parcial 3 (5 pts): PDF de `proyecto.html` (`Guia14_EntregaParcial3_TuNombre.pdf`), antes de la Sesión 15 (24 oct 2026).
