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
- **Semana 5** (Patrones de diseño y arquitectura web: MVC) — completa.
  Primera semana de **hito con Entrega Parcial** (★ Entrega Parcial 1, 5 pts
  adicionales a la Guía normal) y primera semana 100% conceptual/sin código
  (no hay instalación ni sintaxis Java — eso empieza en la Semana 7). Ver
  "Semanas con hito (Entrega Parcial)" y "Challenge de clasificación" más
  abajo para los dos patrones nuevos que introdujo.
- **Semana 6** (Arquitectura en capas) — completa. Profundiza el MVC de la
  Semana 5 dividiendo "Modelo" en Entidad + Repositorio + Servicio, con
  bajo acoplamiento y antipatrón de "saltarse capas". **Primera semana con
  la plantilla reducida** (ver "Cambio de estructura desde la Semana 6" más
  abajo): quiz unificado, Proyecto+Entregable fusionados, sin puente
  Python, cheatsheet con pestaña de preparación de entorno, y un challenge
  con pestañas (clasificación + simulador funcional interactivo).
- **Semanas 7–18** — pendientes, mismo patrón reducido descrito en este archivo.

### Cuando el tema de la semana no es sintaxis Java (ej. Git, MVC, despliegue)

La plantilla de abajo asume "código Java" por defecto, pero no todas las
semanas lo son (Semana 3 = Git/GitHub; Semanas 5–6 = patrones/arquitectura;
Semana 14–16 = despliegue/QA). Ajustes aplicados en la Semana 3 que sirven de
precedente:

- **`ejercicios.html`** puede ser de terminal/consola en vez de compilador
  online — usa el mismo formato (pista + solución en `<details>`), solo
  cambia el entorno de ejecución.
- **`guia_programador_python.html`** (histórico, solo Semanas 1–5): si el
  tema no era sintaxis, pivoteaba su contenido a lo que sí aplicara — en
  Git fue ".gitignore Python vs Java" + "GUI↔CLI"; en MVC fue "MVC vs. MVT
  de Django". **Descontinuada desde la Semana 6** (decisión explícita del
  profesor: se omite todo puente con Python de aquí en adelante) — no crear
  esta página en semanas nuevas.
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

### Página `proyecto.html` — patrón desde Semana 4 (fusionada con el entregable desde Semana 6)

Cuando el tema de la semana requiere que el estudiante aplique lo aprendido
directamente sobre el **repositorio real del proyecto del curso** (no solo
sobre un ejemplo/práctica desechable), la semana tiene una página
`proyecto.html` con esa guía paso a paso — separada de `ejercicios.html`
(que debe usar un dominio de práctica distinto y desechable, ver regla de
no-repetición más abajo).

- **Semanas 4–5 (histórico):** `proyecto.html` era solo instructiva
  (checkpoints ✅, troubleshooting, Plan B) y enlazaba a un `entregable.html`
  aparte con la rúbrica.
- **Desde la Semana 6:** `entregable.html` ya no existe como archivo
  separado — `proyecto.html` incluye la guía paso a paso Y, después de un
  `<hr>` con encabezado "📋 Entregable — completa esto para tu
  calificación", la plantilla calificable con rúbrica. Ver "Cambio de
  estructura desde la Semana 6" más arriba.

Se agrega al navbar de la semana con la etiqueta `Proyecto` y como tarjeta
en el `index.html` de la semana. No es obligatoria cada semana — solo
cuando el tema exige tocar el repositorio real (ej. ramas, arquitectura,
despliegue), a diferencia de temas que se practican solo en ejercicios
sueltos.

### Semanas con hito (Entrega Parcial) — patrón desde Semana 5

La sección 4.2 de `Nuevo_Programa_18_semanas.md` tiene una categoría aparte,
**"Avances del proyecto — 4 entregas (20%)"**, con hitos en las Semanas 5, 9,
14 y 17 (5 pts cada uno) — **distinta** de la fila normal de "Guías de
aprendizaje" (1 pt) que existe todas las semanas. Cuando el texto del
programa para una semana incluye "★ Entrega Parcial N" en la fila de la
Guía de aprendizaje, esa semana tiene **doble evaluación sobre la misma
entrega**: revisar siempre la tabla completa de 4.2 (no solo la fila de
"Guías") para confirmar el punteo exacto del hito — no asumir que es igual
al resto de semanas. Patrón de archivos a seguir (ver Semana 5; desde la
Semana 6, `entregable.html` ya no es un archivo aparte — ver "Cambio de
estructura desde la Semana 6" — así que en los hitos futuros (9, 14, 17)
todo esto vive dentro de `proyecto.html`):

- Dejarlo explícito arriba (callout) y en la rúbrica final: "cuenta doble
  — Guía N (1 pt) + Avance del Proyecto — Entrega Parcial X (5 pts)". Es
  una sola entrega/plantilla, no dos plantillas separadas.
- `proyecto.html` es el vehículo del hito: primero la guía paso a paso que
  produce el contenido real (diagrama, código, despliegue, lo que
  aplique), y luego la plantilla calificable con los números de rúbrica
  del hito.
- `index.html` de esa semana necesita un callout adicional explicando el
  peso extra del hito, y el badge de la tarjeta de Proyecto debe destacarlo
  (ej. `★ Entrega Parcial 1`) para que no pase desapercibido entre las
  demás tarjetas.

### Challenge de clasificación (cajas) — alternativa desde Semana 5

El challenge de arrastrar-y-soltar de las Semanas 1–4 siempre fue de
**secuencia** (ordenar pasos en slots numerados, `dd-slot`/`dd-target` con
`counter-increment`). Cuando el tema de la semana es de **clasificar/
categorizar** en vez de ordenar (ej. MVC: identificar a qué capa pertenece
cada pieza, no en qué orden van), usar en su lugar el patrón de **cajas**
introducido en la Semana 5:

- CSS nuevo en `styles.css` (bloque documentado "Tablero de clasificación
  MVC"): `.mvc-board` (contenedor flex) + `.mvc-zone` (una caja por
  categoría, acepta **varias piezas**, no una sola) + `.dd-piece.correct-piece`
  / `.incorrect-piece` para marcar cada pieza individualmente (en vez de
  marcar el slot contenedor).
  Copiar este bloque verbatim a semanas futuras con challenges de
  clasificación (ej. capas de arquitectura, tipos de datos, capas de red).
- JS del challenge (siempre a la medida, no se copia verbatim entre
  semanas): cada pieza tiene una única `zone` correcta; `zone: 'trap'`
  significa "no pertenece a ninguna caja, se deja en el banco". Las cajas
  visibles varían por nivel (`level.zones`) — útil para introducir una caja
  extra de "antipatrón" solo en niveles Medio/Difícil sin tocar el nivel
  Fácil. `verify()` recorre todas las piezas (en cajas + en el banco) en
  vez de recorrer slots numerados.
- Sigue usando `toast.js` para la retroalimentación instantánea por
  movimiento — ese motor no cambia entre los dos patrones de challenge.

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

### Cambio de estructura desde la Semana 6 — plantilla reducida

Decisión explícita del profesor: a partir de la Semana 6, para "aminorar la
carga de tareas y mejorar la funcionalidad" del alumno. **No se retroactivó
a las Semanas 1–5**, que conservan su estructura original (10-11 páginas,
quizzes separados, puente Python, entregable separado). La plantilla vigente
desde la Semana 6 (ver tabla completa más abajo) cambia así:

- **Quiz unificado (`quiz.html`)**: reemplaza a `quiz_presaberes.html` +
  `quiz_final.html`. Un `<select id="quizType">` elige "Presaberes" o
  "Final"; el motor (`quiz.js` v2) sortea al azar `presaberesCount`/
  `finalCount` preguntas de un `QUESTION_BANK` global definido inline en
  `quiz.html`, donde cada pregunta tiene `level: 'presaberes' | 'final' |
  'ambas'`. Las de nivel `'ambas'` existen a propósito para que los dos
  modos no diverjan por completo en los conceptos que tocan — Presaberes
  debe preparar de verdad para el Final. Botón "🔀 Nuevas preguntas" para
  re-sortear sin recargar la página. `quiz.js` sigue siendo el motor
  genérico reutilizable (funciones `renderQuiz`/`gradeQuiz`/`resetQuiz`/
  `exportQuizPdf`); solo `QUESTION_BANK` y `QUIZ_CONFIG` cambian por semana.
- **`proyecto.html` absorbe a `entregable.html`**: ya no existe un
  `entregable.html` aparte. Una sola página con, en orden: la guía paso a
  paso (igual que antes, checkpoints ✅, troubleshooting, Plan B) y luego,
  tras un `<hr>` y un encabezado "📋 Entregable — completa esto para tu
  calificación", la plantilla rellenable con partes A–E, rúbrica y export a
  PDF. El nav-item se sigue llamando "Proyecto" (ya no hay "Entregable"
  separado).
- **Ya no existe `guia_programador_python.html`**: el puente con Python se
  omite por completo desde la Semana 6 en adelante (decisión explícita).
  No crear esta página en semanas futuras.
- **`cheatsheet.html` puede usar pestañas (Bootstrap nav-tabs)** cuando el
  contenido crece demasiado para una sola página — desde la Semana 6 tiene
  una pestaña "Conceptos" y otra "Prepara tu entorno" (repaso detallado,
  paso a paso, de VS Code + JDK antes de que empiece código real en la
  Semana 7 — un refuerzo puntual, no una violación de "solo Semana 1 tiene
  instalacion.html": sigue enlazando de vuelta a esa guía completa para el
  detalle y el Plan B).
- **`challenge.html` puede usar pestañas para alojar más de un simulador.**
  Desde la Semana 6 tiene "🧩 Clasifica las piezas" (el patrón de cajas de
  la Semana 5) y "⚙️ Simulador funcional": un mini-diagrama animado
  (`.layer-map`/`.layer-card`/`.sim-log`, bloque CSS documentado en
  `styles.css`) donde un botón "Siguiente paso" resalta la capa activa y
  registra un mensaje en un log tipo consola, simulando un dato real
  recorriendo las capas (con al menos 2 escenarios: caso exitoso y caso
  con regla incumplida). Este patrón de simulador es reutilizable para
  semanas futuras que necesiten mostrar un flujo funcional animado.
- **`ejercicios.html` prioriza "aprendizaje funcional"**: en vez de
  ejercicios 100% de papel/diagrama (como la Semana 5), preferir un
  mini-programa real embebido y funcionando en el navegador (vanilla
  JS, sin frameworks) cuando el tema lo permita, con ejercicios cortos que
  piden observar/predecir/verificar sobre ese programa real — nunca
  ejercicios de alta complejidad; la meta es aprendizaje práctico, no
  crear una segunda evaluación difícil.
- **Impresión de pestañas**: cualquier semana que use `nav-tabs` necesita
  el bloque de `@media print` que fuerza `.tab-pane { display: block
  !important; }` y oculta `.nav-tabs` (ya agregado en `styles.css` desde la
  Semana 6) — si no, el PDF solo muestra la pestaña activa al momento de
  imprimir.
- **Autosuficiencia del alumno**: todas las páginas deben poder usarse sin
  el profesor presente (instrucciones completas, checkpoints, soluciones en
  `<details>`). La única excepción es `clase.html`, que es guía docente
  (conceptos y guion para el profesor) — pero aun así debe estar bien
  elaborada, no es una excusa para hacerla menos cuidada.

---

## Plantilla de una carpeta semanal — `Material_Sesion_Clase_N_HTML_18_semanas/`

Replicar exactamente esta estructura para cada semana nueva, ajustando el
contenido al tema de esa semana según `Nuevo_Programa_18_semanas.md`. Esta
es la plantilla **vigente desde la Semana 6** (7 páginas). Las Semanas 1–5
usan la plantilla anterior, más grande (10–11 páginas: quizzes separados,
`guia_programador_python.html`, `entregable.html` aparte) — no se
retroactivaron, ver "Cambio de estructura desde la Semana 6" arriba.

| Archivo | Propósito | Tamaño típico |
| --- | --- | --- |
| `index.html` | Hub/portada de la semana: hero con aprendizajes esperados, ruta del estudiante (70 min), tarjetas a las secciones, cómo se evalúa, enlace a evaluación anónima | ~200–280 líneas |
| `clase.html` | Guía docente **minuto a minuto** de la sesión de 70 min (acordeón por bloque de tiempo, con `time-chip`), objetivos, distribución del tiempo en tabla, normas rápidas, Plan B si falla la tecnología | ~350–450 líneas |
| `ejercicios.html` | Ejercicios progresivos y de **dificultad fácil de resolver**, con pista + solución en `<details>` — preferir un mini-programa funcional embebido cuando el tema lo permita (ver arriba) | ~350–500 líneas |
| `cheatsheet.html` | Referencia rápida: conceptos/sintaxis, tabla de errores comunes de la semana. Puede usar pestañas si crece mucho (ej. preparación de entorno) | ~200–350 líneas |
| `quiz.html` | Presaberes + Final unificados con `<select>` y banco de preguntas aleatorio (ver arriba) | ~250–350 líneas |
| `challenge.html` | Juego(s) interactivo(s): drag & drop de secuencia u de clasificación, o pestañas con más de un simulador (ver arriba) | ~400–700 líneas |
| `proyecto.html` | Guía paso a paso aplicada al proyecto real **+** plantilla calificable de la Guía de Aprendizaje N fusionadas en una sola página (ver arriba) | ~250–350 líneas |
| `README.md` | Índice corto de la carpeta + evidencias de la semana | ~30–50 líneas |
| `styles.css` | **Copiar y ampliar** desde la semana más reciente (no reinventar) — incluye toasts (S3), cajas de clasificación (S5), mapa de capas/simulador y pestañas (S6) | ~450–600 líneas |
| `quiz.js` | Motor de quiz v2 (`renderQuiz`/`gradeQuiz`/`resetQuiz`/`regenerateQuiz`/`exportQuizPdf`) — genérico, reutilizable; solo el `QUESTION_BANK` cambia por semana (definido inline en `quiz.html`) | ~170 líneas |
| `toast.js` | **Copiar verbatim** solo si el challenge de esa semana da retroalimentación por movimiento (ver sección de toasts más abajo) | 25 líneas |

Todas las páginas comparten: navbar con los mismos 7 enlaces (Quiz, Guía
Docente, Ejercicios, Cheat Sheet, Challenge, Proyecto, Ficha del Proyecto),
botón **"Exportar a PDF"** (`window.print()` + reglas `@media print` ya
presentes en `styles.css`, incluyendo forzar visibles todas las
`nav-tabs`/`tab-pane`), diseño Bootstrap 5.3.3 por CDN, 100% en español,
100% código **Java** (sin puente a Python desde la Semana 6).

### Reglas de contenido importantes

- **Solo la Semana 1 tiene `instalacion.html`** (VS Code + JDK + Git + Plan B
  online). Las semanas siguientes **no lo duplican**: enlazan de vuelta con
  `../Material_Sesion_Clase_1_HTML_18_semanas/instalacion.html` (se permite
  un repaso paso a paso *resumido* dentro del cheatsheet de otra semana,
  como hizo la Semana 6, siempre enlazando de vuelta para el detalle completo).
- **No repetir el mismo escenario/dominio entre `ejercicios.html`,
  `challenge.html` y `proyecto.html` (parte de guía) de la misma semana.**
  Lección aprendida en la Semana 2: el "semáforo" se repitió en Ejercicio 1
  + Challenge fácil + Traducción 1, y la clase `Mascota` apareció 4 veces.
  Antes de dar una semana por terminada, revisa los nombres de
  variables/clases/métodos/dominios de ejemplo usados en cada archivo y
  diversifícalos (ej. Semana 6: ejercicios usó un voluntariado/lista de
  tareas, el challenge usó una clínica veterinaria, y `proyecto.html` usa
  el proyecto real del estudiante — 3 dominios distintos). Reutilizar el
  mismo dominio entre `clase.html` (la demo en vivo) y `cheatsheet.html`/
  `ejercicios.html` sí es aceptable e intencional (refuerzo de lo enseñado),
  igual que entre las pestañas de un mismo `challenge.html`.
- El challenge de secuencia usa un banco de piezas arrastrables (`dd-piece`)
  y slots numerados (`dd-slot`); el de clasificación usa `.mvc-zone` (ver
  patrón de la Semana 5). Los niveles medio/difícil deben incluir 2–3
  piezas trampa creíbles, no absurdas.
- La sección "Entregable" de `proyecto.html` siempre reparte el 100% en
  partes (A, B, C…) + una parte de reflexión final, más una lista de cotejo
  y una rúbrica.
- Evaluación semanal: "Actividad en clase — Sesión N" = 0.66 pts (PDF del
  quiz en modo Final + PDF del challenge) y "Entrega Guía N" = 1 pt —
  **verificar el peso exacto en la sección 4.2 de
  `Nuevo_Programa_18_semanas.md`**, porque cambia en semanas con hitos
  (5, 9, 14, 17).

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

## `ficha_proyecto.html` (registro inicial del proyecto, transversal)

Página única en la raíz del repo (no pertenece a ninguna semana): ficha de
registro del proyecto real del estudiante — Entidad/Institución, Ubicación,
Integrantes (tabla), Propuesta breve escrita y Comentarios. Autocontenida
(estilos inline, no depende del `styles.css` de ninguna semana) porque debe
seguir funcionando aunque cambie el patrón visual de semanas futuras. Botón
"Exportar a PDF" con `window.print()`, igual que el resto del sitio — sin
backend, sin guardar datos en servidor.

Enlazada desde el portal raíz (`index.html`, bloque `.glass` justo antes de
la cuadrícula de semanas) y desde el navbar de la Semana 5 en adelante
(último ítem, `../ficha_proyecto.html`, etiqueta "Ficha del Proyecto" — no
confundir con la tarjeta/página `proyecto.html` de cada semana, que es la
guía paso a paso semanal). Si se agrega a una semana nueva, replicar el
mismo `<li>` al final del navbar de esa semana. No se ha retro-agregado a
las Semanas 1–4 (decisión explícita: portal + semana vigente en adelante).

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
