# CLAUDE.md

Referencia técnica canónica de este repo. Léelo antes de explorar el código:
evita tener que abrir los ~3000 líneas de las carpetas de Semana 1/2 para
inferir el patrón — aquí está resumido. Solo abre los archivos de una semana
existente si necesitas copiar/adaptar contenido puntual, no para "descubrir"
la estructura.

## Qué es este repo

Materiales del curso **"Introducción al Desarrollo Web con Java" / Programación I**
(Universidad Rafael Landívar, Facultad de Humanidades, Depto. de Educación,
profesorado con especialidad en TIC). Profesor: Emilio Domínguez.

El curso migró a un **formato de 18 semanas**: sesiones sincrónicas
**sabatinas de 70 minutos (11:10–12:20)**, 100% en línea, inicia el
11 de julio de 2026. El programa completo (temario semana por semana,
competencias, evaluación, referencias) está en `Nuevo_Programa_18_semanas.md`
— **léelo primero** al construir una semana nueva, es la fuente de verdad del
tema, aprendizajes esperados, habilidades y valores de esa semana.

Proyecto que desarrollan los estudiantes durante el curso: una app web
(Java + Spring Boot) para el registro y gestión de una entidad sin fines de
lucro (guardería, casa hogar, dispensario comunitario).

## Estructura del repo (visión general)

```
index.html                          # Portal raíz — hub de las 18 semanas (ver más abajo)
portal.css                          # Estilos del portal raíz
Nuevo_Programa_18_semanas.md        # Programa oficial del curso — fuente del temario por semana
PEM en TIC_Sesión de Clase N ..._18_semanas.md/.docx   # Documento oficial de sesión, por semana
PEM en TIC_Guía de Aprendizaje N ..._18_semanas.md/.docx # Documento oficial de guía, por semana
Material_Sesion_Clase_N_HTML_18_semanas/   # Material HTML interactivo de la semana N (ver plantilla abajo)
evaluacion_docente/                 # Módulo de evaluación anónima (todas las 18 sesiones)
media/                              # Imágenes institucionales (logos URL) usadas por los .md oficiales
ARCHIVO_POR_AHORA/, Material_Sesion_Clase_N_X/, *.zip   # Formato ANTERIOR (pre-18-semanas), no vigente
```

El formato anterior (`Material_Sesion_Clase_2_GitHub/`, `_3_MVC/`, `_4_CRUD/`,
`_5_RUTAS/`, `_6_PERSISTENCIA/` y sus `.md`/`.docx` sin sufijo `_18_semanas`)
**ya no se usa** pero se conserva como archivo histórico. No lo actives en el
portal raíz: el profesor pidió explícitamente que el índice muestre solo el
material vigente (18 semanas). Vive colapsado en un `<details>` al final del
portal.

## Estado actual (ver también `Nuevo_Programa_18_semanas.md`)

- **Semana 1** (Fundamentos de Java: variables, tipos, casting, operadores) — completa.
- **Semana 2** (Condicionales, ciclos, métodos, clases/objetos simples) — completa.
- **Semanas 3–18** — pendientes, mismo patrón descrito en este archivo.

---

## Plantilla de una carpeta semanal — `Material_Sesion_Clase_N_HTML_18_semanas/`

Replicar exactamente esta estructura para cada semana nueva, ajustando el
contenido al tema de esa semana según `Nuevo_Programa_18_semanas.md`.

| Archivo | Propósito | Tamaño típico |
| --- | --- | --- |
| `index.html` | Hub/portada de la semana: hero con aprendizajes esperados, ruta del estudiante (70 min), tarjetas a las 8 secciones, cómo se evalúa, enlace a evaluación anónima | ~200–260 líneas |
| `clase.html` | Guía docente **minuto a minuto** de la sesión de 70 min (acordeón por bloque de tiempo, con `time-chip`), objetivos, distribución del tiempo en tabla, normas rápidas, Plan B si falla la tecnología | ~350–450 líneas |
| `ejercicios.html` | 8 ejercicios progresivos (calentamiento → integrador) con pista + solución en `<details>` | ~350–400 líneas |
| `cheatsheet.html` | Referencia rápida: sintaxis, tabla de errores comunes de la semana | ~150–220 líneas |
| `quiz_presaberes.html` | 8 preguntas autocalificadas (repaso semana anterior + intuición del tema nuevo), no cuenta para nota | ~140–160 líneas |
| `quiz_final.html` | 10 preguntas autocalificadas, evidencia de la "Actividad en clase" | ~160–180 líneas |
| `guia_programador_python.html` | "La Guía del Programador de Python": puente Python↔Java de los temas de la semana, tabla comparativa + 4 ejercicios de traducción (todas las **soluciones son Java**) | ~350–400 líneas |
| `challenge.html` | Juego drag & drop "Arma el código", 3 niveles (fácil/medio/difícil), medio y difícil con piezas trampa (distractors) | ~400–450 líneas |
| `entregable.html` | Plantilla rellenable de la Guía de Aprendizaje N: partes con % que suman 100, reflexión, lista de cotejo, rúbrica | ~160–180 líneas |
| `README.md` | Índice corto de la carpeta + evidencias de la semana | ~30–40 líneas |
| `styles.css` | **Copiar verbatim** de una semana existente (no reinventar) | 349 líneas |
| `quiz.js` | **Copiar verbatim** — motor de quiz genérico, solo cambia el comentario de cabecera con el número de semana | 74 líneas |

Todas las páginas comparten: navbar con los mismos 8 enlaces (+ "Instalación"
solo en Semana 1), botón **"Exportar a PDF"** (`window.print()` + reglas
`@media print` ya presentes en `styles.css`), diseño Bootstrap 5.3.3 por CDN,
100% en español, 100% código **Java** (aunque `guia_programador_python.html`
compare con Python, es solo la columna de referencia — el estudiante siempre
entrega Java).

### Reglas de contenido importantes

- **Solo la Semana 1 tiene `instalacion.html`** (VS Code + JDK + Git + Plan B
  online). Las semanas siguientes **no lo duplican**: enlazan de vuelta con
  `../Material_Sesion_Clase_1_HTML_18_semanas/instalacion.html`.
- **No repetir el mismo escenario/dominio entre `ejercicios.html`,
  `challenge.html`, `entregable.html` y `guia_programador_python.html` de la
  misma semana.** Lección aprendida en la Semana 2: el "semáforo" se repitió
  en Ejercicio 1 + Challenge fácil + Traducción 1, y la clase `Mascota`
  apareció 4 veces (Ejercicio 7, `clase.html`, `cheatsheet.html` y dos veces
  dentro de la propia guía Python). Antes de dar una semana por terminada,
  revisa los nombres de variables/clases/métodos de ejemplo usados en cada
  archivo y diversifica los dominios (ej. si `ejercicios.html` usa un
  semáforo, la guía Python debería usar donaciones, turnos, tallas de ropa,
  etc. — mismo patrón sintáctico, otro contexto). Reutilizar el mismo
  dominio entre `clase.html` (la demo en vivo) y `cheatsheet.html`/
  `ejercicios.html` sí es aceptable e intencional (refuerzo de lo enseñado).
- El challenge usa un banco de piezas arrastrables (`dd-piece`) y slots
  numerados (`dd-slot`); los niveles medio/difícil deben incluir 2–3 piezas
  trampa con errores de sintaxis o de lógica creíbles, no absurdos.
- El entregable siempre reparte el 100% en partes (A, B, C…) + una parte de
  reflexión final (resiliencia ante el error / pensamiento crítico o
  algorítmico / autonomía), más una lista de cotejo y una rúbrica.
- Evaluación semanal: "Actividad en clase — Sesión N" = 0.66 pts (PDF del
  quiz final + PDF del challenge) y "Entrega Guía N" = 1 pt — **verificar el
  peso exacto en la sección 4.2 de `Nuevo_Programa_18_semanas.md`**, porque
  cambia en semanas con hitos (9, 17, 18).

---

## Documentos oficiales por semana (Word/Markdown)

- Nombres: `PEM en TIC_Sesión de Clase N Programación I_18_semanas.md` y
  `PEM en TIC_Guía de Aprendizaje N Programación 1_18_semanas.md` (ojo: es
  "Programación I" en Sesión y "Programación 1" en Guía — inconsistencia ya
  presente en los documentos originales del profesor, se mantiene por
  consistencia con el resto del repo).
- Formato institucional URL: tablas ASCII (`+---+`), imágenes referenciadas
  desde `media/` (ya existen 4: `image1.png`, `image2.png`, `image4.png`,
  `image6.png` — no crear nuevas, son los logos/íconos institucionales fijos).
- Contenido: guion de la sesión de 70 min (paralelo a `clase.html` pero en
  prosa/formato institucional, con tiempos y "actividad que realizará el
  estudiante") para la Sesión; partes A–E con instrucciones para la Guía.

### Conversión a `.docx`

Ejecutar **desde la raíz del repo** (para que pandoc resuelva las rutas de
`media/`):

```bash
pandoc "PEM en TIC_Sesión de Clase N Programación I_18_semanas.md" \
  -f markdown -t docx --resource-path=. \
  -o "PEM en TIC_Sesión de Clase N Programación I_18_semanas.docx"
```

Verificación rápida tras convertir (debe dar `4`, las imágenes institucionales
embebidas):

```bash
unzip -l "archivo.docx" | grep -c "word/media"
```

---

## Portal raíz (`index.html`)

Un solo archivo (no hay una página por semana en el portal). Genera las 18
tarjetas dinámicamente desde el arreglo JS `WEEKS` (buscar `var WEEKS = [`).

- **Para publicar la semana N:** agregar `folder`, `sesionDoc` y `guiaDoc` a
  la entrada `{ n: N, ... }` correspondiente. La tarjeta pasa sola de
  "Próximamente" (atenuada) a "Disponible".
- **Bloque "📍 Semana actual destacada"** (justo antes de la cuadrícula): se
  actualiza **a mano** a la última semana publicada (título, detalle y los 3
  enlaces: material/Sesión/Guía).
- **Timer de evaluación anónima** (`SESSION_SATURDAYS` + `OPEN_HOUR =
  '11:00:00'`): ya es genérico para las 18 semanas basado en la fecha real
  (`new Date()`) — no se toca por semana. Desbloquea el botón/enlace a
  `evaluacion_docente/` automáticamente cada sábado al terminar la clase.
- **`<details>` "🗄 Archivo — formato anterior"** al final: enlaces al
  material pre-18-semanas. No agregar tarjetas del formato anterior a la
  cuadrícula principal.
- El buscador (`Ctrl+K`) filtra por `data-title`/`data-tags` de cada tarjeta.

## Módulo `evaluacion_docente/`

Formulario 100% anónimo (no guarda nombre, correo ni IP) de evaluación del
profesor + sugerencias + quejas, para las 18 sesiones, con **una sola fuente
de datos** (`data/evaluaciones.json`).

- `index.html`: formulario. El selector de semana se auto-preselecciona
  según la fecha real (semana lectiva = sábado de la sesión → viernes
  siguiente), usando el mismo arreglo `SESSION_SATURDAYS` que el portal raíz
  (si cambian las fechas del programa, actualizar en ambos lugares).
- `guardar.php`: agrega el registro al JSON con `flock` (bloqueo de archivo)
  y un honeypot anti-bots (`sitio_web`).
- `admin/index.php` + `admin/descargar.php`: dashboard protegido con
  contraseña (definida en `config.php` — **cambiarla antes de publicar**),
  con promedios por sesión, comentarios filtrables y descarga del JSON.
- `data/.htaccess`: bloquea la lectura directa del JSON desde el navegador.
- Pensado para **Hostinger** (PHP puro, sin base de datos). Paso a paso de
  despliegue completo en `evaluacion_docente/README.md`.
- Probado localmente con `php -S 127.0.0.1:PUERTO` desde la carpeta
  `evaluacion_docente/` — requiere PHP 7.2+ (usar `function_exists('mb_substr')`
  como fallback si el hosting no tiene `mbstring`, ya resuelto en `guardar.php`).

## Memoria del usuario (fuera de este repo)

Las preferencias del profesor y el estado vivo del proyecto (qué semana se
está construyendo, decisiones tomadas) viven en la memoria personal de
Claude Code (`~/.claude/projects/.../memory/`), no en este repo. Ese sistema
de memoria **no debe duplicar** lo que ya está documentado aquí — este
`CLAUDE.md` es la referencia técnica; la memoria de usuario guarda solo el
"por qué" y el estado cambiante (qué semana toca ahora, fechas, feedback de
proceso).
