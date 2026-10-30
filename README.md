# Programación I — Introducción al Desarrollo Web con Java

Materiales del curso **Introducción al Desarrollo Web con Java** (Universidad
Rafael Landívar, Profesorados con Especialidad en TIC), en formato de
**18 semanas**: sesiones sincrónicas sabatinas de **70 minutos** (11:10–12:20),
100% en línea, del 11 de julio al 14 de noviembre de 2026.

## Inicio rápido

Abre **[`index.html`](index.html)** en el navegador — es el portal/hub con
las 18 semanas del curso, cada una con su material interactivo, sus
documentos oficiales y el enlace a la evaluación anónima de la sesión.

> 💡 Recomendado: ábrelo con la extensión **Live Server** de VS Code
> ("Open with Live Server" sobre `index.html`) para evitar restricciones del
> navegador al cargar archivos locales.

## Qué hay en este repo

| Carpeta / archivo | Qué es |
| --- | --- |
| [`index.html`](index.html) | Portal del curso: las 18 semanas, cada una activándose al publicarse |
| [`Nuevo_Programa_18_semanas.md`](Nuevo_Programa_18_semanas.md) | Programa oficial del curso: temario, competencias, evaluación, proyecto |
| `Nuevo_Programa_18_semanas-DB con Neon.md` | Revisión vigente del programa **para las Semanas 12–18**: la base de datos PostgreSQL vivirá en Neon y no en Render |
| [`ENTREGABLE_PROYECTO_LLAVE_EN_MANO.md`](ENTREGABLE_PROYECTO_LLAVE_EN_MANO.md) | Estándar de entrega llave en mano: manual de usuario, guiones de video, credenciales seguras, correos formales y checklist de certificación |
| `Material_Sesion_Clase_N_HTML_18_semanas/` | Material interactivo de la semana N: hub, guía docente, ejercicios, quiz autocalificado, cheat sheet, challenge drag & drop y proyecto/entregable — todo exportable a PDF. Desde la Semana 6 se usa una plantilla reducida (quiz unificado, proyecto y entregable fusionados, sin puente Python); las semanas con hito de evaluación pueden agregar páginas propias (ver Semana 9) |
| `PEM en TIC_Sesión de Clase N..._18_semanas.md/.docx` | Documento oficial de la sesión N (formato institucional) |
| `PEM en TIC_Guía de Aprendizaje N..._18_semanas.md/.docx` | Documento oficial de la guía de aprendizaje N |
| [`examen_parcial/`](examen_parcial/) | Backend PHP del examen parcial: califica en el servidor y limita los intentos. La clave de respuestas y la contraseña de admin **no están en el repo** (ver su README) |
| [`evaluacion_docente/`](evaluacion_docente/) | Formulario 100% anónimo de evaluación del profesor, sugerencias y quejas (todas las sesiones en una sola fuente de datos) + dashboard `/admin` |
| `ARCHIVO_POR_AHORA/`, `Material_Sesion_Clase_N_X/` | Material del **formato anterior** (ya no vigente), conservado como archivo histórico |

## Semanas publicadas

- ✅ **Semana 1** — Fundamentos de Java y tipos de datos (11 jul 2026)
- ✅ **Semana 2** — Lógica, métodos y buenas prácticas (18 jul 2026)
- ✅ **Semana 3** — Git y GitHub: control de versiones (25 jul 2026)
- ✅ **Semana 4** — Ramas, colaboración y documentación (1 ago 2026)
- ✅ **Semana 5** — Patrones de diseño y arquitectura web / MVC (8 ago 2026) — ★ Entrega Parcial 1
- ✅ **Semana 6** — Arquitectura en capas (15 ago 2026)
- ✅ **Semana 7** — Entorno de desarrollo y Spring Boot (22 ago 2026)
- ✅ **Semana 8** — Spring Boot: configuración y primer servicio (29 ago 2026)
- ✅ **Semana 9** — Hito Parcial: examen parcial y entrega de avance (5 sep 2026) — ★ Entrega Parcial 2, examen de mitad de curso y peer review Ronda 1
- ✅ **Semana 10** — Rutas, controladores y formularios (19 sep 2026) — Thymeleaf, `@PostMapping` y binding de datos
- ✅ **Semana 11** — Validación, errores y experiencia de usuario (26 sep 2026) — Bean Validation, mensajes de error y accesibilidad
- ✅ **Semana 12** — Persistencia de datos con JPA y Spring Data (3 oct 2026) — los datos por fin sobreviven al reinicio, y se estrena la recarga automática con DevTools
- ✅ **Semana 13** — Autenticación, roles y renderizado condicional (10 oct 2026) — login con usuarios en la base, BCrypt, dos roles y claves por variables de entorno
- ✅ **Semana 14** — Despliegue en producción con Render y Neon (17 oct 2026) — ★ Entrega Parcial 3; `.jar`, Dockerfile, PostgreSQL en Neon y URL pública HTTPS. Proyecto de referencia armado desde el Kit en [`Proyecto_Semana_14_Kit/`](Proyecto_Semana_14_Kit/) y verificación en [`VERIFICACION_Semana_14_despliegue.md`](VERIFICACION_Semana_14_despliegue.md)
- ✅ **Semana 15** — Seguridad básica y HTTPS (24 oct 2026) — versión mínima, sin código nuevo: auditoría (HTTPS, SSL a Neon, CSRF, XSS, cabeceras), checkpoint de entrega y cómo transformar el Kit de la Semana 14 en el proyecto propio (ficha única de 10–15 campos, páginas estáticas y con parámetros)
- ✅ **Semana 16** — QA, pruebas funcionales, arquitectura y mantenimiento (31 oct 2026) — refuerzo del árbol de carpetas, responsabilidades únicas, circuito Formulario ↔ Controlador ↔ Modelo ↔ Repositorio, matriz de 6 casos de prueba (CP-01 a CP-06) y ciclo continuo `git push` a `main` ➔ redeploy automático en Render
- ✅ **Semana 17** — Presentación interna, retroalimentación y Entrega Parcial 4 (7 nov 2026) — ★ Entrega Parcial 4 (7 pts acumulados: 2 pts Guía 17 + 5 pts avance final), ensayo general de demo (guion de 4 min), protocolo anti-cold start de Render y Neon, y coevaluación entre pares con rúbrica compartida
- ✅ **Semana 18** — Entrega final, defensa formal, evaluación y reflexión (14 nov 2026) — ★ Defensa formal de proyecto ante tribunal docente (10 pts), Evaluación entre pares Ronda 2 oficial (5 pts), autoevaluación metacognitiva del futuro docente en TIC y entrega de paquete de software llave en mano (15.78 pts en juego)

> **Calendario:** las 18 sesiones no son sábados consecutivos. El **12 de
> septiembre de 2026 no hubo clase** (semana de independencia), por lo que la
> Sesión 9 fue el 5 de septiembre y la Sesión 10 saltó al 19. El programa, el
> portal y el calendario del módulo de evaluación anónima ya contemplan el salto.

> La Semana 9 es la de mayor peso del curso (21.66 pts en cuatro
> instrumentos) y la única con 9 páginas: agrega `examen.html` y
> `evaluacion_pares.html`. Su `ejercicios.html` incluye un **Kit de
> archivos completos** con los 11 archivos del proyecto —cada uno con su
> ruta, su línea `package` y sus `import`— útil como material de
> recuperación para cualquier estudiante atrasado.

## Dónde vive la base de datos del proyecto

La aplicación del estudiante se **aloja en Render**, pero su base de datos
PostgreSQL vive en **Neon**: la base gratuita de Render es temporal y se
elimina, lo que destruiría el proyecto antes de la presentación final. Por
eso la Semana 12 ya deja sembrados los perfiles de Spring (`dev` con H2 local,
`prod` con las credenciales como variables de entorno) y la Semana 14 solo
cambia la configuración, **sin tocar una línea de Java**.

## Este repositorio es público

Las credenciales y las respuestas de los estudiantes no se versionan. El
`.gitignore` de la raíz deja fuera la clave de respuestas del examen
(`examen_parcial/examen_datos.php`), la contraseña del panel admin
(`examen_parcial/config.php`, que se versiona como `config.php.ejemplo`) y
los JSON de `examen_parcial/data/` y `evaluacion_docente/data/`. Esos
archivos se suben por FTP a Hostinger, nunca por git.

## Evaluación anónima de cada sesión

Al final de cada clase se comparte el mismo enlace (`evaluacion_docente/`)
para las 18 semanas; el estudiante solo elige la sesión que está evaluando.
Es completamente anónimo: no se guarda nombre, correo ni IP. Ver
[`evaluacion_docente/README.md`](evaluacion_docente/README.md) para el
detalle de despliegue en Hostinger.

## ¿Vas a construir el material de una semana nueva?

La estructura completa a replicar (lista exacta de archivos, convenciones,
reglas para no repetir ejercicios entre secciones, cómo activar la semana en
el portal y cómo convertir los documentos oficiales a `.docx`) está
documentada en **[`CLAUDE.md`](CLAUDE.md)**. Ábrelo antes de empezar.

## Compilador de Java sin instalar nada

Las primeras semanas no requieren instalar nada: se usa el compilador online
[Educative](https://www.educative.io/compilers/java). La guía completa de
instalación de entorno (VS Code + JDK + Git, con troubleshooting y un Plan B
100% en línea) está en
`Material_Sesion_Clase_1_HTML_18_semanas/instalacion.html`.
