+--------------------------------------------------------------------------+
| ### Universidad Rafael Landívar                                          |
|                                                                          |
| Facultad de Humanidades                                                  |
|                                                                          |
| Departamento de Educación                                                |
|                                                                          |
| **Guía de aprendizaje núm. 4 — Formato 18 semanas**                      |
|                                                                          |
| **Semana 4 – Unidad 2b: Ramas, colaboración y documentación**            |
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

***"Una Pull Request no es un obstáculo burocrático: es la invitación a que
alguien más te ayude a mejorar antes de que tu código llegue a producción."***

**Fecha de la sesión:** 1 de agosto de 2026 · **Entrega de esta guía:**
antes de la Sesión 5 (8 de agosto de 2026) · **Valor:** 1 punto.

+---------------------------------+------------------------------------+
| **Aprendizajes esperados**      | **Productos que evidencian el      |
|                                 | aprendizaje**                      |
+=================================+====================================+
| **Crea y fusiona ramas para     | *Repositorio del proyecto con una  |
| gestionar versiones.**          | rama development, un README.md     |
|                                 | profesional y una Pull Request     |
+---------------------------------+ fusionada hacia main.*             |
| **Colabora en repositorios      |                                    |
| compartidos y documenta el      | *PDF de la plantilla de la Guía 4  |
| proyecto con README             | (`entregable.html`) con evidencia  |
| profesional.**                  | de cada paso y el enlace a la      |
|                                 | Pull Request.*                     |
+---------------------------------+------------------------------------+

**Habilidades y destrezas de la semana (guía):** Implementación de Ramas
(ejecutar el flujo de trabajo en la rama de desarrollo garantizando que
main permanezca estable) y Comunicación Técnica (redactar un README.md
estructurado que explique eficazmente el propósito, uso y configuración del
proyecto).

**Valores y actitudes:** Disciplina en el Flujo (mantener la organización
del repositorio siguiendo estrategias de ramificación consistentes) y
Orientación a la Calidad (comprometerse con la claridad y la precisión al
documentar el trabajo realizado, asegurando que cualquier usuario pueda
entender el proyecto).

+-----------------------------------------------------------------------+
| ![Libros](media/image6.png){width="0.4895833333333333in"              |
| height="0.4895833333333333in"}**PRIMERA PARTE: REFUERZO DE            |
| APRENDIZAJES**                                                        |
|                                                                       |
| **Propósito de la actividad:** Consolidar lo visto en la sesión       |
| sincrónica (ramas, Pull Requests, revisión de código y resolución de |
| conflictos) y comprender por qué este flujo es agnóstico al lenguaje  |
| de programación, pensando en cómo explicar estos conceptos a futuros  |
| estudiantes.                                                          |
|                                                                       |
| **Actividades (Instrucciones):**                                      |
|                                                                       |
| 1.  **Repaso interactivo:**                                           |
|     - Releer el cheat sheet de la semana                              |
|       (`Material_Sesion_Clase_4_HTML_18_semanas/cheatsheet.html`),    |
|       en especial las secciones E (resolver conflictos) y F (README). |
|     - Si no completaste el Challenge "Ordena el flujo de              |
|       colaboración" en clase, terminar el nivel medio y difícil       |
|       (`challenge.html`).                                             |
|     - Reintentar el Quiz Final como autoevaluación de estudio          |
|       (`quiz_final.html`, botón "Reintentar").                         |
|                                                                       |
| 2.  **Investigación breve:**                                          |
|     - Investigar qué es una "Pull Request" en un proyecto de código   |
|       abierto real (ej. buscar una en GitHub y leer su descripción y  |
|       comentarios).                                                   |
|     - Investigar por qué muchos equipos exigen al menos una           |
|       aprobación (revisión) antes de fusionar una Pull Request.       |
|                                                                       |
| 3.  **Puente: las ramas no son de Java (pensamiento crítico):**       |
|     - Leer la guía puente (`guia_programador_python.html`): ramas,    |
|       Pull Requests y merges son agnósticos al lenguaje, convención   |
|       de nombres de ramas, y equivalencias GUI ↔ terminal.            |
|     - Resolver al menos 2 de los 4 ejercicios de traducción           |
|       (acción → comando) incluidos en esa guía.                       |
|     - Reflexionar: ¿por qué casi todos los proyectos profesionales,   |
|       sin importar el lenguaje, usan ramas y Pull Requests en vez de  |
|       editar directo en main?                                        |
|                                                                       |
| **Recursos:**                                                         |
|                                                                       |
| - Material HTML de la Semana 4 (hub `index.html` de la carpeta        |
|   `Material_Sesion_Clase_4_HTML_18_semanas/`).                        |
| - Documentación oficial de GitHub sobre Pull Requests                 |
|   (<https://docs.github.com/pull-requests>).                          |
| - Simulador sin instalar nada: Learn Git Branching                    |
|   (<https://learngitbranching.js.org/?locale=es_ES>).                 |
|                                                                       |
| **Evaluación (Formativa):**                                           |
|                                                                       |
| *Capacidad para explicar con sus propias palabras qué es una rama,    |
| qué diferencia a una Pull Request de un commit normal, y por qué la   |
| revisión de código y la documentación son parte del trabajo           |
| profesional, evitando tecnicismos excesivos sin perder rigor          |
| técnico.*                                                             |
+=======================================================================+
| ![Piezas de                                                           |
| rompecabezas](media/image8.png){width="0.5833333333333334in"          |
| height="0.5833333333333334in"}                                        |
+-----------------------------------------------------------------------+

**SEGUNDA PARTE: CONSTRUCCIÓN DEL PROYECTO**

**Propósito de la actividad:** Organizar el repositorio del proyecto del
curso (la app web para una entidad sin fines de lucro) con una rama de
desarrollo, documentarlo con un README.md profesional, y practicar el ciclo
completo de colaboración (Pull Request + revisión + fusión) — la base sobre
la que se construirá el trabajo en equipo del resto del semestre.

**Actividades (Instrucciones):**

1.  **Preparación del Entorno:**
        -   Confirmar que el repositorio de la Guía 3 sigue publicado y
            accesible en GitHub.
        -   Abrirlo en GitHub Desktop mediante "Current Repository" y
            confirmar que "Current Branch" muestre `main` sin cambios
            pendientes.
        -   Seguir la guía paso a paso
            `Material_Sesion_Clase_4_HTML_18_semanas/proyecto.html` para
            crear la rama, documentar el README y abrir la Pull Request
            sobre el repositorio real.

2.  **Práctica de Código — completar la plantilla `entregable.html`:**
    -   **Parte A — Verificación de entorno (15%):** enlace al repositorio
        real (el mismo de la Guía 3) y resumen del README previo a esta
        guía.
    -   **Parte B — Rama development (25%):** rama `development` creada
        con "Current Branch" → "New Branch", con al menos un commit propio
        y evidencia del mensaje en la pestaña "History" de esa rama (no de
        main).
    -   **Parte C — README.md profesional (30%):** contenido completo del
        README actualizado, con nombre del proyecto, descripción de la
        entidad sin fines de lucro, funcionalidades planeadas para las 18
        semanas, tecnologías, cómo clonar/ejecutar y autor.
    -   **Parte D — Pull Request y revisión (20%):** Pull Request abierta
        de `development` hacia `main`, con al menos un comentario de
        revisión (de un compañero o autorrevisión honesta) antes de
        fusionarla. **Entregar el enlace de la Pull Request** — es la
        evidencia principal de esta guía.

3.  **Reflexión (Parte E, 10%):**
    -   **Disciplina en el flujo:** explicar por qué main debe permanecer
        estable y qué se hizo esta semana para lograrlo.
    -   **Colaboración y respeto:** describir el comentario de revisión
        dado o recibido y evaluar si fue específico y constructivo.
    -   **Orientación a la calidad:** identificar qué parte del README aún
        falta completar en semanas futuras.

**Recursos:**
-   Plantilla del entregable con exportación a PDF (`entregable.html`).
-   Guía paso a paso aplicada al proyecto real (`proyecto.html`): rama
    development, README profesional y Pull Request, con checkpoints y
    solución de problemas.
-   Cheat sheet de la semana (`cheatsheet.html`): crear rama, Pull Request,
    revisión, merge, resolución de conflictos y estructura de README.
-   Ejercicios guiados con un repositorio de práctica (`ejercicios.html`),
    en especial el Ejercicio 8 (provocar y resolver un conflicto, sin
    arriesgar el proyecto real).

**Evaluación (Sumativa — 1 punto):**
*Entrega del PDF de la plantilla completada (`Guia4_TuNombre.pdf`) con el
enlace a la Pull Request, antes de la Sesión 5: Parte A 0.15 · Parte B 0.25
· Parte C 0.30 · Parte D 0.20 · Parte E 0.10. Se valora que la rama, el
README y la Pull Request existan de verdad en GitHub (se verifican los
enlaces), que main se haya mantenido estable durante el proceso, y la
honestidad de la reflexión. Entrega tardía: −25% por día.*

**Al terminar:** responde la **evaluación anónima de la sesión** (formulario
de evaluación docente, sugerencias y quejas). Es 100% anónima y ayuda a
mejorar el curso semana a semana.
