+--------------------------------------------------------------------------+
| ### Universidad Rafael Landívar                                          |
|                                                                          |
| Facultad de Humanidades                                                  |
|                                                                          |
| Departamento de Educación                                                |
|                                                                          |
| **Guía de aprendizaje núm. 7 — Formato 18 semanas**                      |
|                                                                          |
| **Semana 7: Entorno de desarrollo y Spring Boot**                       |
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

***"Hoy el motor que instalaste en la Semana 1 finalmente enciende algo:
tu primer proyecto Spring Boot, corriendo de verdad en tu computadora."***

**Fecha de la sesión:** 22 de agosto de 2026 · **Entrega de esta guía:**
antes de la Sesión 8 (29 de agosto de 2026) · **Valor:** 1 punto. Esta
semana no tiene Entrega Parcial adicional (el próximo hito del proyecto
es la Entrega Parcial 2, en la Semana 9).

+---------------------------------+------------------------------------+
| **Aprendizajes esperados**      | **Productos que evidencian el      |
|                                 | aprendizaje**                      |
+=================================+====================================+
| **Instala y configura el        | *Proyecto Spring Boot generado,   |
| entorno de desarrollo.**        | corriendo en local y con evidencia |
|                                 | del log de arranque.*              |
+---------------------------------+                                    |
| **Comprende la estructura de un | *PDF de la plantilla de la Guía 7  |
| proyecto Spring Boot y crea/    | (`proyecto.html`, sección          |
| ejecuta su primer proyecto      | "Entregable") con evidencia de     |
| web.**                          | cada parte, y el proyecto subido a |
|                                 | la rama development de GitHub.*   |
+---------------------------------+------------------------------------+

**Habilidades y destrezas de la semana (guía):** Desarrollo Funcional
(construir y ejecutar un primer proyecto en Spring Boot desde cero) y
Validación Local (verificar la correcta puesta en marcha y funcionamiento
del proyecto en el entorno local).

**Valores y actitudes:** Orientación a Resultados (enfocarse en lograr que
el entorno de desarrollo sea funcional y estable desde la primera
ejecución) y Autodisciplina (mantener el rigor técnico al asegurar que
todas las dependencias y configuraciones locales estén correctamente
validadas).

+-----------------------------------------------------------------------+
| ![Libros](media/image6.png){width="0.4895833333333333in"              |
| height="0.4895833333333333in"}**PRIMERA PARTE: REFUERZO DE            |
| APRENDIZAJES**                                                        |
|                                                                       |
| **Propósito de la actividad:** Consolidar la generación, exploración  |
| y ejecución de un proyecto Spring Boot vista en la sesión sincrónica, |
| resolviendo ejercicios 100% reales en la propia computadora.         |
|                                                                       |
| **Actividades (Instrucciones):**                                      |
|                                                                       |
| 1.  **Repaso interactivo:**                                           |
|     - Releer el cheat sheet de la semana                              |
|       (`Material_Sesion_Clase_7_HTML_18_semanas/cheatsheet.html`),    |
|       ambas pestañas: conceptos y comandos/troubleshooting.           |
|     - Resolver los 7 ejercicios de `ejercicios.html` en tu propia     |
|       terminal, VS Code y navegador (proyecto de práctica            |
|       `laboratorio-spring`).                                          |
|     - Si no completaste el Challenge en clase, terminar ambas         |
|       pestañas (`challenge.html`): secuencia y simulador de arranque. |
|     - Reintentar el Quiz en modo Final como autoevaluación de estudio |
|       (`quiz.html`, botón "🔀 Nuevas preguntas").                      |
|                                                                       |
| 2.  **Investigación breve:**                                          |
|     - Investigar qué otras dependencias comunes existen en Spring     |
|       Initializr (sin agregarlas todavía) y para qué sirve cada una,  |
|       comparando con Spring Web.                                      |
|     - Investigar la diferencia entre Maven y Gradle como herramientas |
|       de construcción (solo lectura, el curso usa Maven).             |
|                                                                       |
| **Recursos:**                                                         |
|                                                                       |
| - Material HTML de la Semana 7 (hub `index.html` de la carpeta        |
|   `Material_Sesion_Clase_7_HTML_18_semanas/`).                        |
| - Spring Initializr (<https://start.spring.io>) y documentación       |
|   oficial de Spring Boot (<https://docs.spring.io/spring-boot/docs/current/reference/html/>). |
|                                                                       |
| **Evaluación (Formativa):**                                           |
|                                                                       |
| *Capacidad para explicar con sus propias palabras qué hace cada       |
| archivo generado (pom.xml, la clase Application, application.        |
| properties) y por qué la Whitelabel Error Page es una señal de éxito  |
| parcial esta semana, no de fracaso.*                                  |
+=======================================================================+
| ![Piezas de                                                           |
| rompecabezas](media/image8.png){width="0.5833333333333334in"          |
| height="0.5833333333333334in"}                                        |
+-----------------------------------------------------------------------+

**SEGUNDA PARTE: CONSTRUCCIÓN DEL PROYECTO**

**Propósito de la actividad:** Generar, ejecutar y configurar el proyecto
Spring Boot REAL del estudiante (guardería, casa hogar, dispensario u otra
entidad sin fines de lucro), dejándolo corriendo en local y subido a su
repositorio real de GitHub como base para las próximas semanas.

**Actividades (Instrucciones):**

1.  **Preparación:**
    -   Tener a la mano la Ficha del Proyecto (`ficha_proyecto.html`) con
        el nombre de la entidad/institución real.
    -   Tener el repositorio real de GitHub (Semanas 3–4) accesible, con
        su rama `development`.
    -   Seguir la guía paso a paso incluida al inicio de
        `Material_Sesion_Clase_7_HTML_18_semanas/proyecto.html` (Pasos 1
        a 5) antes de llenar la plantilla calificable.

2.  **Práctica de Código — completar la plantilla (sección "Entregable" de `proyecto.html`):**
    -   **Parte A — Verificación del entorno (10%):** salida de `java
        -version` y `javac -version`.
    -   **Parte B — Parámetros de tu proyecto (20%):** Group, Artifact,
        versión de Spring Boot, versión de Java, dependencias usadas y
        enlace al repositorio.
    -   **Parte C — Evidencia del primer arranque (30%):** línea del log
        que confirma el arranque exitoso y descripción de lo observado en
        `localhost:8080`.
    -   **Parte D — Configuración y subida a GitHub (25%):** contenido de
        `application.properties` y enlace a la carpeta del proyecto en la
        rama `development`.

3.  **Reflexión (Parte E, 15%):**
    -   **Metodología estructurada:** por qué configurar bien
        `application.properties` desde ahora evita problemas cuando el
        proyecto crezca.
    -   **Autodisciplina:** qué paso requirió más paciencia (ej. la
        primera descarga de dependencias, o el error de puerto ocupado) y
        cómo se resolvió.

**Recursos:**
-   Guía paso a paso + plantilla del entregable, en una sola página
    (`proyecto.html`), con exportación a PDF.
-   Cheat sheet de la semana (`cheatsheet.html`): conceptos, estructura y
    comandos.
-   Ejercicios 100% reales (`ejercicios.html`) y el challenge con dos
    simuladores (`challenge.html`), como referencia de los mismos pasos
    aplicados a un proyecto de práctica antes de aplicarlos al proyecto
    real.

**Evaluación (Sumativa — 1 punto):**
*Entrega del PDF de la plantilla completada (`Guia7_TuNombre.pdf`), antes
de la Sesión 8: Parte A 0.10 · Parte B 0.20 · Parte C 0.30 · Parte D 0.25 ·
Parte E 0.15. Se valora que el proyecto realmente exista y corra (no solo
que se describa), que los parámetros sean coherentes con el proyecto real
del estudiante, y la honestidad de la reflexión. Entrega tardía: −25% por
día.*

**Al terminar:** responde la **evaluación anónima de la sesión** (formulario
de evaluación docente, sugerencias y quejas). Es 100% anónima y ayuda a
mejorar el curso semana a semana.
