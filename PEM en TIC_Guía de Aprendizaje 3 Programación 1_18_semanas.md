+--------------------------------------------------------------------------+
| ### Universidad Rafael Landívar                                          |
|                                                                          |
| Facultad de Humanidades                                                  |
|                                                                          |
| Departamento de Educación                                                |
|                                                                          |
| **Guía de aprendizaje núm. 3 — Formato 18 semanas**                      |
|                                                                          |
| **Semana 3 – Unidad 2a: Git y GitHub, control de versiones**             |
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

***"El código que no está en un repositorio es código que todavía puede
perderse. Un commit bien escrito es una carta a tu yo del futuro, explicando
qué cambiaste y por qué."***

**Fecha de la sesión:** 25 de julio de 2026 · **Entrega de esta guía:**
antes de la Sesión 4 (1 de agosto de 2026) · **Valor:** 1 punto.

+---------------------------------+------------------------------------+
| **Aprendizajes esperados**      | **Productos que evidencian el      |
|                                 | aprendizaje**                      |
+=================================+====================================+
| **Instala y configura Git en    | *Repositorio inicial del proyecto  |
| su entorno de trabajo.**        | publicado en GitHub, con al menos  |
|                                 | un commit y un README.md.*         |
+---------------------------------+                                    |
| **Realiza commits y gestiona    | *PDF de la plantilla de la Guía 3  |
| el historial de cambios,        | (`entregable.html`) con evidencia  |
| comprendiendo la importancia    | de cada paso y el enlace al        |
| del versionamiento.**           | repositorio.*                      |
+---------------------------------+------------------------------------+

**Habilidades y destrezas de la semana (guía):** Iniciación de Proyectos
(crear y estructurar el repositorio inicial en GitHub de manera autónoma) y
Gestión de Repositorios (aplicar la configuración e instalación de Git para
un entorno de desarrollo profesional).

**Valores y actitudes:** Responsabilidad Profesional (asumir la gestión de
versiones como una práctica indispensable del trabajo diario del
desarrollador) y Proactividad en el Desarrollo (mostrar iniciativa al
establecer la infraestructura necesaria para el trabajo colaborativo desde
el inicio del proyecto).

+-----------------------------------------------------------------------+
| ![Libros](media/image6.png){width="0.4895833333333333in"              |
| height="0.4895833333333333in"}**PRIMERA PARTE: REFUERZO DE            |
| APRENDIZAJES**                                                        |
|                                                                       |
| **Propósito de la actividad:** Consolidar lo visto en la sesión       |
| sincrónica (conceptos de versionamiento, flujo local y remoto) y      |
| comprender por qué Git es una herramienta universal (no exclusiva de  |
| Java), pensando en cómo explicar estos conceptos a futuros            |
| estudiantes.                                                          |
|                                                                       |
| **Actividades (Instrucciones):**                                      |
|                                                                       |
| 1.  **Repaso interactivo:**                                           |
|     - Releer el cheat sheet de la semana                              |
|       (`Material_Sesion_Clase_3_HTML_18_semanas/cheatsheet.html`),    |
|       en especial las secciones A (commit) y B (push).               |
|     - Si no completaste el Challenge "Ordena el flujo Git" en clase,  |
|       terminar el nivel medio y difícil (`challenge.html`).           |
|     - Reintentar el Quiz Final como autoevaluación de estudio          |
|       (`quiz_final.html`, botón "Reintentar").                         |
|                                                                       |
| 2.  **Investigación breve:**                                          |
|     - Investigar qué es un "commit" y por qué se compara con una      |
|       fotografía del proyecto.                                       |
|     - Investigar la diferencia entre un repositorio público y uno     |
|       privado en GitHub, y cuándo conviene cada uno.                  |
|                                                                       |
| 3.  **Puente: Git no es solo Java (pensamiento crítico):**            |
|     - Leer la guía puente (`guia_programador_python.html`): Git es    |
|       agnóstico al lenguaje, diferencias de `.gitignore` entre        |
|       Python y Java, y equivalencias GUI ↔ terminal.                  |
|     - Resolver al menos 2 de los 4 ejercicios de traducción           |
|       (acción → comando) incluidos en esa guía.                       |
|     - Reflexionar: ¿por qué Git funciona igual sin importar el        |
|       lenguaje de programación que uses?                              |
|                                                                       |
| **Recursos:**                                                         |
|                                                                       |
| - Material HTML de la Semana 3 (hub `index.html` de la carpeta        |
|   `Material_Sesion_Clase_3_HTML_18_semanas/`).                        |
| - Documentación oficial de Git (<https://git-scm.com/doc>) y GitHub   |
|   Docs (<https://docs.github.com>).                                   |
| - Simulador sin instalar nada: Learn Git Branching                    |
|   (<https://learngitbranching.js.org/?locale=es_ES>).                 |
|                                                                       |
| **Evaluación (Formativa):**                                           |
|                                                                       |
| *Capacidad para explicar con sus propias palabras qué es un commit,   |
| qué diferencia a Git de GitHub, y por qué el control de versiones     |
| protege el trabajo de un desarrollador, evitando tecnicismos          |
| excesivos sin perder rigor técnico.*                                  |
+=======================================================================+
| ![Piezas de                                                           |
| rompecabezas](media/image8.png){width="0.5833333333333334in"          |
| height="0.5833333333333334in"}                                        |
+-----------------------------------------------------------------------+

**SEGUNDA PARTE: CONSTRUCCIÓN DEL PROYECTO**

**Propósito de la actividad:** Crear el repositorio inicial del proyecto del
curso (la app web para una entidad sin fines de lucro) directamente en
GitHub — la base sobre la que se construirá el resto del semestre.

**Actividades (Instrucciones):**

1.  **Preparación del Entorno:**
        -   Crear (si no existe) una cuenta gratuita en
            <https://github.com>.
        -   Instalar **GitHub Desktop** siguiendo
            `Material_Sesion_Clase_3_HTML_18_semanas/instalacion_github_desktop.html`
            (crea tu cuenta, instala VS Code + GitHub Desktop y confirma tu
            identidad — no requiere usar la terminal).
        -   **Alternativa por comandos:** si ya tienes soltura con la
            terminal, puedes usar Git directamente: confirmar que está
            instalado (`git --version`) y configurado
            (`git config --global --list`); si falta, seguir
            `Material_Sesion_Clase_1_HTML_18_semanas/instalacion.html`, Paso
            4, y el
            `Material_Sesion_Clase_3_HTML_18_semanas/anexo_comandos.html`
            para el flujo completo con comandos. Ambos caminos son válidos y
            esta guía acepta la evidencia de cualquiera de los dos.
        -   (Opcional) Si ni siquiera puedes instalar algo hoy, practica el
            concepto en <https://learngitbranching.js.org/?locale=es_ES>
            mientras completas la instalación real durante la semana.

2.  **Práctica de Código — completar la plantilla `entregable.html`:**
    -   **Parte A — Verificación de entorno (15%):** usuario con sesión
        iniciada en GitHub Desktop y tu identidad configurada en File →
        Options → Git (si usaste comandos: salida de `git --version` y
        `git config --global --list`).
    -   **Parte B — Primer commit local (30%):** repositorio creado con
        "File → New Repository...", con el nombre real de tu proyecto,
        `README.md` con nombre del proyecto, descripción breve de la
        entidad sin fines de lucro y autor; commit hecho con "Commit to
        main" y evidencia del mensaje en la pestaña "History" (si usaste
        comandos: `git init`, `git add`, `git commit` y evidencia de
        `git log --oneline`).
    -   **Parte C — Repositorio remoto en GitHub (35%):** repositorio
        publicado con el botón "Publish repository" (si usaste comandos:
        `git remote add origin` y `git push -u origin main`). **Entregar
        el enlace público al repositorio** — es la evidencia principal de
        esta guía, independientemente del camino que hayas usado para
        lograrlo.
    -   **Parte D — Buenas prácticas: .gitignore (10%):** archivo
        `.gitignore` apropiado para el proyecto (generado automáticamente
        si elegiste "Git ignore: Java" al crear el repositorio), con una
        breve explicación de su propósito.

3.  **Reflexión (Parte E, 10%):**
    -   **Orden y trazabilidad:** analizar uno de los propios mensajes de
        commit y evaluar su claridad para un lector futuro.
    -   **Seguridad colaborativa:** explicar cómo Git protege el progreso
        del proyecto ante errores o pérdidas.
    -   **Proactividad:** describir una dificultad de la semana y qué se
        hizo antes de pedir ayuda.

**Recursos:**
-   Plantilla del entregable con exportación a PDF (`entregable.html`).
-   Instalación de GitHub Desktop, sin comandos
    (`instalacion_github_desktop.html`): crear cuenta de GitHub, instalar
    GitHub Desktop y publicar el repositorio a punta de clics.
-   Cheat sheet de botones de GitHub Desktop (`cheatsheet.html`): primer
    commit, publicar, branch, Pull Request y merge.
-   Ejercicios guiados con GitHub Desktop (`ejercicios.html`), en especial
    el Ejercicio 8 (réplica exacta de esta entrega, a menor escala).
-   Anexo con el mismo flujo por comandos (`anexo_comandos.html`), para
    quien ya tenga soltura con la terminal.

**Evaluación (Sumativa — 1 punto):**
*Entrega del PDF de la plantilla completada (`Guia3_TuNombre.pdf`) con el
enlace al repositorio de GitHub, antes de la Sesión 4: Parte A 0.15 ·
Parte B 0.30 · Parte C 0.35 · Parte D 0.10 · Parte E 0.10. Se valora que el
repositorio exista de verdad y sea accesible (se verifica el enlace), la
claridad de los mensajes de commit y la honestidad de la reflexión. Entrega
tardía: −25% por día.*

**Al terminar:** responde la **evaluación anónima de la sesión** (formulario
de evaluación docente, sugerencias y quejas). Es 100% anónima y ayuda a
mejorar el curso semana a semana.
