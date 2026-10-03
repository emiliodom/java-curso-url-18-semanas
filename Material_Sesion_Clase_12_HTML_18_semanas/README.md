# Semana 12 — Persistencia de datos con JPA y Spring Data

**Unidad 6a** · Sábado 3 de octubre de 2026 · 70 min (11:10–12:20)

La Semana 11 ya tenía formularios validados para `Jugador`, pero el servicio guardaba en una lista en memoria. En la Semana 12 se continúa con la misma aplicación `taller-formularios`: la entidad se convierte en JPA y el servicio reemplaza la lista por `JugadorRepository`, con CRUD, H2 en memoria vs. H2 en archivo y perfiles de configuración.

> **Nota de arquitectura:** hoy se trabaja contra **H2 en la computadora**. En la Semana 14 la misma aplicación se conecta a **Neon** (PostgreSQL en la nube) sin cambiar el código Java: solo cambia el archivo de configuración del perfil. Render hospeda la aplicación; la base vive en Neon porque la base gratuita de Render expira.

## Contenido

| Archivo | Para qué sirve |
| --- | --- |
| `index.html` | Portada, ruta de 70 min y evaluación |
| `clase.html` | Guía docente minuto a minuto (demo de la base en memoria que olvida) |
| `ejercicios.html` | Seis pestañas: Ejercicios Jugador, Kit de Acompañamiento, explicación del Kit, Kit Jugador desde cero en Initializr, práctica independiente Biblioteca y anexo `taller-jpa` |
| `cheatsheet.html` | Conceptos JPA aplicados a Jugador + pestaña "De H2 a Neon" + tabla de errores |
| `quiz.html` | Presaberes y Final con banco de 24 preguntas y opciones barajadas |
| `challenge.html` | Clasificación de piezas por archivo + simulador de reinicio |
| `proyecto.html` | Guía sobre el proyecto real + entregable de la Guía 12 |
| `styles.css`, `quiz.js`, `toast.js` | Recursos compartidos (copiados de la Semana 11) |

## Dominios

- Hilo principal (clase, continuación, cheatsheet, proyecto): Escuela de Fútbol Los Cerritos (`Jugador`, `taller-formularios`)
- Práctica independiente y referencia funcional: Biblioteca Comunitaria Semilla (`Libro`, `taller-jpa`)
- Challenge: Comedor Infantil El Girasol (`Donacion`)

La ruta principal conserva el proyecto de Semana 11 y sus validaciones; el paso didáctico es sustituir `List<Jugador>` por JPA. `ejercicios.html` ofrece seis pestañas en este orden: Ejercicios progresivos de Jugador, Kit de Acompañamiento de Ejercicios con los archivos finales, Explicación del Kit, Kit para iniciar el módulo completo de Jugador desde Spring Initializr, Práctica independiente de Biblioteca y Anexo `taller-jpa`/Biblioteca. Ambos Kits de Jugador incluyen `templates/error.html`. El Kit desde cero sigue el árbol expandido de la Semana 10 y no requiere editar el `pom.xml`. Spring Initializr actualmente ofrece Spring Boot 4.1.1, pero no una dependencia H2 Console seleccionable; por eso ese Kit comprueba la persistencia mediante CRUD y apagado/arranque manual, sin activar `/h2-console`. DevTools sí se selecciona en Initializr para recargar cambios de código mientras se desarrolla. El proyecto funcional de referencia usa `groupId` `gt.edu.url`, consola H2 en starter separado, driver PostgreSQL y caché Thymeleaf desactivada en `dev`. Su anexo incluye 12 errores reproducibles; `TallerJpaApplicationTests.java` pertenece solo a esa referencia.

## Evidencias de la semana

- Actividad en clase — Sesión 12 (0.66 pts): PDF del quiz Final + PDF del challenge.
- Guía de Aprendizaje 12 (1 pt): PDF de `proyecto.html` (`Guia12_TuNombre.pdf`) con el doble criterio: funciona contra H2 local y la entidad/repositorio no requieren cambios para PostgreSQL.
- Sin hito de Entrega Parcial (el siguiente es la Entrega Parcial 3, Semana 14).
