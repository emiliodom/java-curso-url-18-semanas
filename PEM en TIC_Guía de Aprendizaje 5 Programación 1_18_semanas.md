+--------------------------------------------------------------------------+
| ### Universidad Rafael Landívar                                          |
|                                                                          |
| Facultad de Humanidades                                                  |
|                                                                          |
| Departamento de Educación                                                |
|                                                                          |
| **Guía de aprendizaje núm. 5 — Formato 18 semanas**                      |
|                                                                          |
| **Semana 5 – Patrones de diseño y arquitectura web (MVC)**               |
|                                                                          |
| +----------------------------+-----------------------------------------+ |
| | Profesorados con           | Nombre del curso: Introducción al       | |
| | Especialidad en TIC        | Desarrollo Web con Java                 | |
| |                            |                                         | |
| | **Año Psicopedagógico**    | Enfoque Pedagógico para Docentes       | |
| +============================+=========================================+ |
+--------------------------------------------------------------------------+

![Transformación Digital -- Universidad Rafael
Landívar](media/image1.png){width="3.2336996937882763in"
height="1.3760411198600175in"}![gráficos de color
degradado](media/image2.png){width="8.268055555555556in"
height="1.5618055555555554in"}

![Libro abierto](media/image4.png){width="0.5729166666666666in"
height="0.5729166666666666in"}

**PARTE INTRODUCTORIA**

***"Diseñar la estructura antes de escribir la lógica detallada no es perder
tiempo: es la diferencia entre construir sobre un plano y construir sobre la
marcha."***

**Fecha de la sesión:** 8 de agosto de 2026 · **Entrega de esta guía:**
antes de la Sesión 6 (15 de agosto de 2026) · **Valor:** 1 punto (Guía 5)
**+ 5 puntos adicionales** como Avance del Proyecto — ★ Entrega Parcial 1.

+---------------------------------+------------------------------------+
| **Aprendizajes esperados**      | **Productos que evidencian el      |
|                                 | aprendizaje**                      |
+=================================+====================================+
| **Comprende el propósito de     | *Diagrama MVC del proyecto real    |
| los patrones de diseño y        | (Modelo, Vista y Controlador       |
| aplica el patrón MVC de forma   | identificados y coherentes entre   |
| conceptual y práctica.**        | sí).*                              |
+---------------------------------+                                    |
| **Distingue responsabilidades   | *Repositorio con carpetas          |
| entre capas de la               | modelo/, vista/ y controlador/,    |
| aplicación.**                   | publicado mediante una Pull        |
|                                 | Request, más el PDF de la          |
|                                 | plantilla (`entregable.html`).*    |
+---------------------------------+------------------------------------+

**Habilidades y destrezas de la semana (guía):** Modelado Técnico (elaborar
diagramas que representen la arquitectura MVC de una aplicación) y
Capacidad de Ejecución (desarrollar y entregar una propuesta de proyecto que
cumpla con la estructura MVC requerida).

**Valores y actitudes:** Responsabilidad de Entrega (comprometerse con el
cumplimiento de hitos parciales bajo estándares de calidad establecidos) y
Rigor en el Diseño (mantener la coherencia entre el diseño conceptual —el
diagrama— y la implementación real del proyecto).

+-----------------------------------------------------------------------+
| ![Libros](media/image6.png){width="0.4895833333333333in"              |
| height="0.4895833333333333in"}**PRIMERA PARTE: REFUERZO DE            |
| APRENDIZAJES**                                                        |
|                                                                       |
| **Propósito de la actividad:** Consolidar el patrón MVC visto en la   |
| sesión sincrónica (la analogía del restaurante, las 3 capas y los     |
| antipatrones comunes) y comprender que es un patrón universal, no     |
| exclusivo de Java, pensando en cómo explicar estos conceptos a        |
| futuros estudiantes.                                                  |
|                                                                       |
| **Actividades (Instrucciones):**                                      |
|                                                                       |
| 1.  **Repaso interactivo:**                                           |
|     - Releer el cheat sheet de la semana                              |
|       (`Material_Sesion_Clase_5_HTML_18_semanas/cheatsheet.html`),    |
|       en especial las secciones B (responsabilidades) y D             |
|       (antipatrones).                                                 |
|     - Completar los 8 ejercicios de papel/diagrama de                 |
|       `ejercicios.html` si no se terminaron en clase.                 |
|     - Si no completaste el Challenge "Clasifica las piezas" en clase, |
|       terminar el nivel medio y difícil (`challenge.html`).           |
|     - Reintentar el Quiz Final como autoevaluación de estudio          |
|       (`quiz_final.html`, botón "Reintentar").                         |
|                                                                       |
| 2.  **Investigación breve:**                                          |
|     - Investigar un patrón de diseño distinto a MVC (ej. Singleton,   |
|       Observer) y escribir en 2 líneas qué problema resuelve.         |
|     - Investigar por qué la mayoría de frameworks web modernos        |
|       (Spring, Django, Ruby on Rails, Laravel) usan alguna variante   |
|       de MVC.                                                         |
|                                                                       |
| 3.  **Puente: MVC no es solo Java (pensamiento crítico):**            |
|     - Leer la guía puente (`guia_programador_python.html`): MVC en    |
|       Java/Spring vs. MVT en Python/Django, y la "trampa de           |
|       nombres" entre ambos.                                           |
|     - Resolver al menos 2 de los 4 ejercicios de traducción           |
|       incluidos en esa guía.                                          |
|     - Reflexionar: ¿por qué el nombre de una capa puede cambiar       |
|       entre frameworks, pero su responsabilidad no?                   |
|                                                                       |
| **Recursos:**                                                         |
|                                                                       |
| - Material HTML de la Semana 5 (hub `index.html` de la carpeta        |
|   `Material_Sesion_Clase_5_HTML_18_semanas/`).                        |
| - Herramienta de diagramas sin instalar nada: draw.io                 |
|   (<https://app.diagrams.net/>).                                      |
|                                                                       |
| **Evaluación (Formativa):**                                           |
|                                                                       |
| *Capacidad para explicar con sus propias palabras qué responsabilidad |
| tiene cada capa de MVC, identificar un antipatrón cuando lo ve, y     |
| justificar por qué separar responsabilidades ayuda a un equipo de     |
| trabajo, evitando tecnicismos excesivos sin perder rigor técnico.*    |
+=======================================================================+
| ![Piezas de                                                           |
| rompecabezas](media/image8.png){width="0.5833333333333334in"          |
| height="0.5833333333333334in"}                                        |
+-----------------------------------------------------------------------+

**SEGUNDA PARTE: CONSTRUCCIÓN DEL PROYECTO**

**Propósito de la actividad:** Diseñar y publicar la primera propuesta
formal de arquitectura MVC del proyecto del curso (la app web para una
entidad sin fines de lucro) — el hito **Entrega Parcial 1**, la base sobre
la que se construirá la implementación real a partir de la Semana 7.

**Actividades (Instrucciones):**

1.  **Preparación:**
        -   Confirmar que el repositorio del proyecto (Guías 3 y 4) sigue
            publicado y accesible en GitHub, con su README profesional.
        -   Seguir la guía paso a paso
            `Material_Sesion_Clase_5_HTML_18_semanas/proyecto.html` para
            identificar Modelo, Vista y Controlador del proyecto real,
            construir el diagrama y reorganizar el repositorio.

2.  **Práctica de Código — completar la plantilla `entregable.html`:**
    -   **Parte A — Modelo: datos y reglas (25%):** al menos 2 entidades
        reales del proyecto, con sus atributos y al menos una regla de
        negocio cada una.
    -   **Parte B — Vista: pantallas (20%):** al menos 3 pantallas
        principales, coherentes con las entidades del Modelo.
    -   **Parte C — Controlador: acciones (25%):** para cada acción
        importante, qué recibe, a qué Modelo le pregunta y qué Vista
        decide mostrar según el resultado.
    -   **Parte D — Diagrama y estructura en GitHub (20%):** repositorio
        real con las carpetas `modelo/`, `vista/` y `controlador/` (cada
        una con su propio `README.md`) y el diagrama general, publicados
        mediante una Pull Request de una rama nueva hacia `main`.
        **Entregar el enlace de la Pull Request** — es la evidencia
        principal de esta guía.

3.  **Reflexión (Parte E, 10%):**
    -   **Orden lógico:** identificar qué parte del proyecto fue más
        difícil de clasificar en Modelo, Vista o Controlador y por qué.
    -   **Visión analítica:** explicar en qué ayudó diseñar la estructura
        antes de escribir código.
    -   **Responsabilidad de entrega:** describir qué se haría diferente
        si hubiera que rehacer la propuesta desde cero.

**Recursos:**
-   Plantilla del entregable con exportación a PDF (`entregable.html`).
-   Guía paso a paso aplicada al proyecto real (`proyecto.html`): 8 pasos
    con checkpoints, solución de problemas y Plan B.
-   Cheat sheet de la semana (`cheatsheet.html`): responsabilidades por
    capa, antipatrones y estructura de carpetas de referencia.
-   Ejercicios guiados de bajo riesgo (`ejercicios.html`), con la app de
    ejemplo CineReseñas — para practicar el razonamiento antes de aplicarlo
    al proyecto real.

**Evaluación (Sumativa):**
*Entrega del PDF de la plantilla completada (`Guia5_TuNombre.pdf`) con el
enlace a la Pull Request, antes de la Sesión 6: Parte A 25% · Parte B 20% ·
Parte C 25% · Parte D 20% · Parte E 10%, sobre 1 punto como Guía 5. La misma
entrega se evalúa también, con criterios de coherencia arquitectónica y
existencia real en GitHub, como Avance del Proyecto — Entrega Parcial 1
(5 puntos adicionales). Entrega tardía: −25% por día sobre ambos rubros.*

**Al terminar:** responde la **evaluación anónima de la sesión** (formulario
de evaluación docente, sugerencias y quejas). Es 100% anónima y ayuda a
mejorar el curso semana a semana.
