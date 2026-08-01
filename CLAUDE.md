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
- **Semana 3** (Git y GitHub: control de versiones) — completa. Primera semana
  cuyo tema no es sintaxis Java: ver más abajo cómo se adaptó la plantilla.
- **Semana 4** (Ramas, colaboración y documentación) — completa. Continúa el
  tema de Git/GitHub de la Semana 3 (branches, Pull Requests, revisión de
  código, conflictos básicos, README profesional) y agrega una 11ª página,
  `proyecto.html` — ver "Página adicional `proyecto.html`" más abajo.
- **Semanas 5–18** — pendientes, mismo patrón descrito en este archivo.

### Cuando el tema de la semana no es sintaxis Java (ej. Git, MVC, despliegue)

La plantilla de abajo asume "código Java" por defecto, pero no todas las
semanas lo son (Semana 3 = Git/GitHub; Semanas 5–6 = patrones/arquitectura;
Semana 14–16 = despliegue/QA). Ajustes aplicados en la Semana 3 que sirven de
precedente:

- **`ejercicios.html`** puede ser de terminal/consola en vez de compilador
  online — usa el mismo formato (pista + solución en `<details>`), solo
  cambia el entorno de ejecución.
- **`guia_programador_python.html`**: si el tema no es sintaxis (no hay
  "traducción Python↔Java" posible), pivotea su contenido a lo que sí
  aplique — en Git fue ".gitignore Python vs Java" + "GUI↔CLI" — pero
  **conserva el nombre de archivo, la posición en el navbar y el formato de
  4 "ejercicios de traducción"** para no romper la consistencia entre
  semanas. Cambiar solo la etiqueta del nav si el texto "Python→Java" no
  aplica (Semana 3 usó "Puente Git").
- **`instalacion.html`** de la Semana 1 se puede referenciar con ancla
  (`#paso4`, etc.) desde `clase.html`/`ejercicios.html` de semanas
  posteriores cuando profundizan un tema ya instalado ahí (ej. Git).
- **Páginas de instalación adicionales fuera de la Semana 1** sí están
  permitidas cuando cubren una herramienta nueva que la Semana 1 no incluyó
  (ej. `instalacion_github_desktop.html` en la Semana 3, para la ruta 100%
  gráfica de Git con GitHub Desktop). No es una violación de "solo Semana 1
  tiene instalacion.html": esa regla es sobre no duplicar JDK/VS Code/Git
  CLI, no sobre prohibir guías de instalación nuevas para herramientas
  nuevas. Patrón a seguir: mismo estilo de página que `instalacion.html`
  (índice con anclas, checkpoints ✅ por paso, tabla de troubleshooting en
  acordeón, sección de videos en español, Plan B sin instalar nada), enlazar
  cruzado con anclas hacia/desde la Semana 1 para las partes que sí se
  solapan (ej. VS Code/extensión Java), y agregarla al navbar de las 9
  páginas de esa semana + una tarjeta en su `index.html`.

### Página adicional `proyecto.html` — patrón desde Semana 4

Cuando el tema de la semana requiere que el estudiante aplique lo aprendido
directamente sobre el **repositorio real del proyecto del curso** (no solo
sobre un ejemplo/práctica desechable), agregar una página extra
`proyecto.html` con esa guía paso a paso — separada de `ejercicios.html`
(que debe usar un dominio de práctica distinto y desechable, ver regla de
no-repetición más abajo) y de `entregable.html` (que sigue siendo la
plantilla calificable con rúbrica). `proyecto.html` es instructivo, no
calificable: checkpoints ✅ por paso, tabla de solución de problemas en
`<details>`, Plan B, y un botón final que enlaza a `entregable.html`. Se
agrega al navbar de las 9+ páginas de esa semana (ver Semana 4: 9 enlaces,
`Proyecto` justo antes de `Entregable`) y como tarjeta en el `index.html` de
la semana. No es obligatoria cada semana — solo cuando el tema exige tocar
el repositorio real (ej. ramas, arquitectura, despliegue), a diferencia de
temas que se practican solo en ejercicios sueltos.

### Challenge con retroalimentación instantánea (toasts) — patrón desde Semana 3

Cuando el challenge se presta a evaluar **cada movimiento** (no solo al
pulsar "Verificar"), usar el patrón de toasts introducido en la Semana 3:

- `styles.css` incluye el componente `.toast-stack`/`.toast-item` (colores
  ok/warn/bad/info) — **ya está en el `styles.css` a partir de la Semana 3**;
  cualquier semana nueva debe copiar el `styles.css` de la Semana 3 en
  adelante (no el de la Semana 1/2) para heredarlo.
- `toast.js` (archivo nuevo, copiar verbatim junto a `quiz.js`): expone
  `showToast(mensaje, tipo)`. Requiere `<div class="toast-stack" id="toastStack">`
  en la página y debe cargarse **antes** del script que lo usa.
- **Regla clave para no agotar tokens en la retroalimentación:** clasificar
  cada pieza con una `categoría` (ej. `init`, `stage`, `commit`, `push`) y
  cada slot con su categoría esperada. La función de feedback compara por
  categoría/orden con ~4 mensajes genéricos (correcto / va antes / va después
  / sintaxis no coincide / es una trampa), **nunca** un mensaje por cada
  combinación pieza×slot posible. Ver `challenge.html` de la Semana 3 para el
  patrón completo (`feedbackForDrop()`).
- Esto se suma (no reemplaza) al patrón de verificación final por
  "Verificar" + banner de puntaje, que sigue igual que semanas 1–2.

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
| `styles.css` | **Copiar verbatim** de la semana más reciente (no reinventar) — incluye el componente de toasts desde la Semana 3 | ~380 líneas |
| `quiz.js` | **Copiar verbatim** — motor de quiz genérico, solo cambia el comentario de cabecera con el número de semana | 74 líneas |
| `toast.js` | **Copiar verbatim** solo si el challenge de esa semana da retroalimentación por movimiento (ver sección de toasts más abajo) | 25 líneas |

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
