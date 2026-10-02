# Semana 12 — Persistencia de datos con JPA y Spring Data

**Unidad 6a** · Sábado 3 de octubre de 2026 · 70 min (11:10–12:20)

Hasta la Semana 11 los datos vivían en una lista en memoria y se perdían al apagar la aplicación. Esta semana se guardan en una base de datos con **JPA, Hibernate y Spring Data**: entidad (`@Entity`, `@Id`), repositorio (`JpaRepository`), CRUD completo, H2 en memoria vs. H2 en archivo, y perfiles de configuración.

> **Nota de arquitectura:** hoy se trabaja contra **H2 en la computadora**. En la Semana 14 la misma aplicación se conecta a **Neon** (PostgreSQL en la nube) sin cambiar el código Java: solo cambia el archivo de configuración del perfil. Render hospeda la aplicación; la base vive en Neon porque la base gratuita de Render expira.

## Contenido

| Archivo | Para qué sirve |
| --- | --- |
| `index.html` | Portada, ruta de 70 min y evaluación |
| `clase.html` | Guía docente minuto a minuto (demo de la base en memoria que olvida) |
| `ejercicios.html` | 8 ejercicios en escalera + Kit de 12 archivos completos (`taller-jpa`) |
| `cheatsheet.html` | Pestañas "Conceptos JPA" y "De H2 a Neon" + tabla de errores |
| `quiz.html` | Presaberes y Final con banco de 24 preguntas y opciones barajadas |
| `challenge.html` | Clasificación de piezas por archivo + simulador de reinicio |
| `proyecto.html` | Guía sobre el proyecto real + entregable de la Guía 12 |
| `styles.css`, `quiz.js`, `toast.js` | Recursos compartidos (copiados de la Semana 11) |

## Dominios

- Clase, ejercicios, cheatsheet: Biblioteca Comunitaria Semilla (`Libro`)
- Challenge: Comedor Infantil El Girasol (`Donacion`)
- Proyecto: el proyecto real del estudiante

## Evidencias de la semana

- Actividad en clase — Sesión 12 (0.66 pts): PDF del quiz Final + PDF del challenge.
- Guía de Aprendizaje 12 (1 pt): PDF de `proyecto.html` (`Guia12_TuNombre.pdf`) con el doble criterio: funciona contra H2 local y la entidad/repositorio no requieren cambios para PostgreSQL.
- Sin hito de Entrega Parcial (el siguiente es la Entrega Parcial 3, Semana 14).
