# Material — Semana 9 (formato 18 semanas · sesiones de 70 min)

**Semana 9 — Hito Parcial: examen parcial y entrega de avance · 5 de septiembre de 2026**

Abrir `index.html` en el navegador (es el hub de toda la semana).

## Qué cambia esta semana

Es la **semana con más peso del curso**: no se enseña contenido nuevo, se
evalúa lo construido entre las Semanas 1 y 8. Caen cuatro instrumentos
distintos que suman **21.66 puntos**:

| Instrumento | Dónde vive | Puntos |
| --- | --- | --- |
| Actividad en clase — Sesión 9 | `quiz.html` (modo simulacro) + `challenge.html` | 0.66 |
| Examen parcial (unidades 1–4) | `examen.html` + módulo `examen_parcial/` | 15 |
| Evaluación entre pares — Ronda 1 | `evaluacion_pares.html` | 5 |
| Guía 9 + ★ Entrega Parcial 2 | `proyecto.html` (cuenta doble) | 1 + 5 |

Por eso esta semana tiene **9 páginas** en vez de las 7 de la plantilla
reducida: se agregan `examen.html` y `evaluacion_pares.html`, porque el
examen y el peer review son entregas con rúbrica propia que no caben
dentro de las páginas existentes.

## Lo que se corrigió respecto a las Semanas 7–8

En aquellas semanas los fragmentos de código mostraban anotaciones
(`@RestController`, `@GetMapping`) **sin la línea `package` ni los
`import`**, y sin decir en qué carpeta va cada archivo. Esta semana eso se
resuelve en tres lugares:

- **`ejercicios.html`, pestaña "📦 Kit de archivos completos"**: los 11
  archivos del proyecto, enteros, cada uno con su ruta exacta, su
  `package`, sus `import` y una tabla que explica para qué sirve cada
  import y qué error aparece si falta.
- **`cheatsheet.html`, pestaña "🧬 Anatomía de un archivo Java"**: la regla
  "carpeta = paquete", y por qué un endpoint puede compilar bien y aun así
  responder 404 (quedó fuera del paquete base y Spring nunca lo registró).
- **`ejercicios.html`, ejercicios 3 y 4**: el estudiante rompe el
  `package` a propósito y luego saca la clase del paquete base, para ver
  con sus propias manos los dos errores distintos que eso produce.

## Archivos

| Archivo | Qué es |
| --- | --- |
| `index.html` | Hub con la tabla de las 4 entregas de la semana y sus puntajes |
| `quiz.html` | Repaso rápido (10 preguntas) + Simulacro del examen (15), banco de 32 preguntas que cubre S1–S8 |
| `clase.html` | Guía docente de una sesión de evaluación: repaso relámpago, aplicación del examen, organización del peer review y cierre del hito |
| `ejercicios.html` | 2 pestañas: 8 ejercicios en escalera (Nivel 1 → Nivel 4) y el **Kit de archivos completos** |
| `cheatsheet.html` | 3 pestañas: repaso integrado S1–S8, anatomía de un archivo Java, y catálogo de errores frecuentes con solución |
| `challenge.html` | 2 pestañas: "Clasifica las piezas" (cajas por unidad, con trampas de semanas futuras) y "Del cero al hito" (secuencia del ciclo completo) |
| `examen.html` | **Examen parcial (15 pts)**: 20 preguntas de opción múltiple en 3 secciones, cronómetro de 20 minutos, calificación automática y máximo 2 intentos por carné. Requiere el módulo PHP `examen_parcial/` publicado (ver más abajo) |
| `evaluacion_pares.html` | **Peer review Ronda 1 (5 pts)**: rúbrica compartida de 5 criterios + 2 fortalezas y 2 sugerencias, con ejemplos de comentario útil vs. inútil |
| `proyecto.html` | **Guía 9 (1 pt) + ★ Entrega Parcial 2 (5 pts)**: guía de 8 pasos para dejar la app con MVC funcional (modelo + servicio + controlador + formulario) en GitHub, y plantilla calificable con doble rúbrica |
| `styles.css` | Estilos compartidos (copiado sin cambios desde la Semana 8) |
| `quiz.js` | Motor de quiz v2 (copiado sin cambios; `quiz.html` solo reetiqueta los dos modos) |
| `toast.js` | Motor compartido de notificaciones toast (copiado sin cambios) |

## Dominios de ejemplo (sin repetición entre páginas)

- `clase.html`, `ejercicios.html`, `cheatsheet.html`: **Banco de Alimentos San Miguel** (proyecto de práctica `repaso-spring`).
- `challenge.html`: **Escuela de Música Clave de Sol**.
- `examen.html`: **Escuela de Música Clave de Sol** en el fragmento de código con errores (Sección 2).
- `proyecto.html`: el proyecto real del estudiante (guardería, casa hogar, dispensario…).

## El examen parcial necesita el módulo PHP publicado

El examen es **autocalificable y vale 15 puntos**, así que la clave de respuestas
**no puede estar en el HTML** (se vería con "ver código fuente"). Por eso vive en
el módulo `examen_parcial/`, en la raíz del repo, que:

- entrega las preguntas sin las respuestas correctas y **baraja las opciones por
  estudiante**;
- califica en el servidor y guarda cada intento en `data/intentos.json`;
- **limita a 2 intentos por carné**, aplicado del lado del servidor;
- incluye un panel en `examen_parcial/admin/` con las notas y descarga en CSV.

**Antes de la sesión hay que publicarlo en el hosting y probarlo con un carné
falso.** Si no está publicado, la página del examen avisa que no hay conexión y
nadie puede resolverlo. Pasos completos en `examen_parcial/README.md`.

Para probar en local, desde la raíz del repo: `php -S 127.0.0.1:8000` y abrir
`http://127.0.0.1:8000/Material_Sesion_Clase_9_HTML_18_semanas/examen.html`.
Abrir el archivo con doble clic (`file://`) no sirve para el examen.

## Exportar a PDF

Todas las páginas tienen botón **Exportar a PDF**. Los estilos de impresión
ocultan navegación, botones y toasts, y fuerzan a mostrar **todas las
pestañas** — importante en `ejercicios.html`, `cheatsheet.html` y
`challenge.html`, que usan `nav-tabs`.

## Requisitos

- El proyecto Spring Boot de las Semanas 7 y 8, corriendo en local y en GitHub.
  Quien no lo tenga puede reconstruirlo completo desde el Kit de archivos.
- Enlace del repositorio a la mano **antes** de la sesión: sin él, la Ronda 1
  de evaluación entre pares no se puede realizar.
- Parejas cruzadas del peer review definidas por el docente antes de la clase.
