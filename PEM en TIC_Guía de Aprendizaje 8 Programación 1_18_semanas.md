+--------------------------------------------------------------------------+
| ### Universidad Rafael Landívar                                          |
|                                                                          |
| Facultad de Humanidades                                                  |
|                                                                          |
| Departamento de Educación                                                |
|                                                                          |
| **Guía de aprendizaje núm. 8 — Formato 18 semanas**                      |
|                                                                          |
| **Semana 8: Spring Boot: configuración y primer servicio**              |
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

***"La semana pasada tu proyecto arrancaba y respondía con una página de
error genérica. Hoy le enseñas a responder con tus propias palabras."***

**Fecha de la sesión:** 29 de agosto de 2026 · **Entrega de esta guía:**
antes de la Sesión 9 (5 de septiembre de 2026) · **Valor:** 1 punto. Esta
semana no tiene Entrega Parcial adicional (el próximo hito del proyecto
es la Entrega Parcial 2, en la Semana 9).

+---------------------------------+------------------------------------+
| **Aprendizajes esperados**      | **Productos que evidencian el      |
|                                 | aprendizaje**                      |
+=================================+====================================+
| **Configura dependencias y      | *Clase @RestController con al      |
| perfiles del proyecto.**        | menos dos rutas GET, probadas en   |
|                                 | el navegador y en Postman.*        |
+---------------------------------+                                    |
| **Implementa un servicio REST   | *PDF de la plantilla de la Guía 8  |
| básico y lo prueba con          | (`proyecto.html`, sección          |
| herramientas simples.**         | "Entregable") con evidencia de     |
|                                 | cada parte, el formulario web      |
|                                 | funcionando, y el proyecto subido  |
|                                 | a la rama development de GitHub.*  |
+---------------------------------+------------------------------------+

**Habilidades y destrezas de la semana (guía):** Desarrollo de Endpoints
(implementar un endpoint simple dentro del proyecto como parte de la guía
de aprendizaje) y Control de Proyecto (asegurar que el proyecto esté
correctamente conectado y gestionado a través de GitHub).

**Valores y actitudes:** Autodisciplina (completar los ejercicios prácticos
manteniendo la integridad del código fuente en el repositorio remoto) y
Mentalidad orientada a pruebas (adoptar la costumbre de verificar el
funcionamiento del código inmediatamente después de su implementación).

+-----------------------------------------------------------------------+
| ![Libros](media/image6.png){width="0.4895833333333333in"              |
| height="0.4895833333333333in"}**PRIMERA PARTE: REFUERZO DE            |
| APRENDIZAJES**                                                        |
|                                                                       |
| **Propósito de la actividad:** Consolidar la creación, prueba y       |
| consumo (desde un formulario web) de un servicio REST básico visto    |
| en la sesión sincrónica, resolviendo ejercicios 100% reales en la     |
| propia computadora.                                                   |
|                                                                       |
| **Actividades (Instrucciones):**                                      |
|                                                                       |
| 1.  **Repaso interactivo:**                                           |
|     - Releer el cheat sheet de la semana                              |
|       (`Material_Sesion_Clase_8_HTML_18_semanas/cheatsheet.html`),    |
|       sus tres pestañas: conceptos y código, comandos/troubleshooting |
|       y el anexo de adelanto (estilo y base de datos).                |
|     - Resolver los 7 ejercicios de `ejercicios.html` en tu propia     |
|       terminal, VS Code y navegador (proyecto de práctica            |
|       `laboratorio-spring`).                                          |
|     - Si no completaste el Challenge en clase, terminar ambas         |
|       pestañas (`challenge.html`): secuencia y simulador de una       |
|       petición.                                                       |
|     - Reintentar el Quiz en modo Final como autoevaluación de estudio |
|       (`quiz.html`, botón "🔀 Nuevas preguntas").                      |
|                                                                       |
| 2.  **Investigación breve:**                                          |
|     - Investigar qué otros métodos HTTP existen además de GET (POST,  |
|       PUT, DELETE) y para qué se usa cada uno, sin implementarlos     |
|       todavía.                                                        |
|     - Investigar la diferencia entre una respuesta en texto plano y   |
|       una respuesta en formato JSON (solo lectura, se profundiza más  |
|       adelante en el curso).                                          |
|                                                                       |
| **Recursos:**                                                         |
|                                                                       |
| - Material HTML de la Semana 8 (hub `index.html` de la carpeta        |
|   `Material_Sesion_Clase_8_HTML_18_semanas/`).                        |
| - Documentación oficial de Spring Web                                 |
|   (<https://docs.spring.io/spring-boot/docs/current/reference/html/web.html>). |
|                                                                       |
| **Evaluación (Formativa):**                                           |
|                                                                       |
| *Capacidad para explicar con sus propias palabras qué hace cada       |
| anotación (@RestController, @GetMapping, @RequestParam) y por qué una |
| URL escrita con una sola letra distinta produce un error 404 aunque   |
| el código Java esté correcto.*                                        |
+=======================================================================+
| ![Piezas de                                                           |
| rompecabezas](media/image8.png){width="0.5833333333333334in"          |
| height="0.5833333333333334in"}                                        |
+-----------------------------------------------------------------------+

**SEGUNDA PARTE: CONSTRUCCIÓN DEL PROYECTO**

**Propósito de la actividad:** Agregar un `@RestController` y un
formulario web sencillo al proyecto Spring Boot REAL del estudiante
(guardería, casa hogar, dispensario u otra entidad sin fines de lucro),
probarlos y subirlos a su repositorio real de GitHub, continuando la base
generada en la Semana 7.

**Actividades (Instrucciones):**

1.  **Preparación:**
    -   Tener el proyecto Spring Boot real (Semana 7) corriendo en local.
    -   Tener a la mano la Ficha del Proyecto (`ficha_proyecto.html`) con
        el nombre real de la entidad/institución.
    -   Seguir la guía paso a paso incluida al inicio de
        `Material_Sesion_Clase_8_HTML_18_semanas/proyecto.html` (Pasos 1
        a 5) antes de llenar la plantilla calificable.

2.  **Práctica de Código — completar la plantilla (sección "Entregable" de `proyecto.html`):**
    -   **Parte A — Tu @RestController (25%):** código completo de la
        clase controladora, con al menos dos rutas GET (una con
        @RequestParam).
    -   **Parte B — Evidencia de las pruebas (25%):** resultado de probar
        las rutas en el navegador y en Postman/Thunder Client.
    -   **Parte C — Tu formulario web (25%):** código del formulario y
        descripción de su funcionamiento.
    -   **Parte D — Subida a GitHub (15%):** enlace a los archivos nuevos
        en la rama `development`.

3.  **Reflexión (Parte E, 10%):**
    -   **Rigurosidad técnica:** por qué la URL debe coincidir
        exactamente con lo escrito en `@GetMapping`.
    -   **Profesionalismo en el control de versiones:** en qué momento se
        hizo (o debió hacerse) un commit durante el trabajo de hoy.

**Recursos:**
-   Guía paso a paso + plantilla del entregable, en una sola página
    (`proyecto.html`), con exportación a PDF.
-   Cheat sheet de la semana (`cheatsheet.html`): conceptos, código y
    comandos.
-   Ejercicios 100% reales (`ejercicios.html`) y el challenge con dos
    pestañas (`challenge.html`), como referencia de los mismos pasos
    aplicados a un proyecto de práctica antes de aplicarlos al proyecto
    real.

**Evaluación (Sumativa — 1 punto):**
*Entrega del PDF de la plantilla completada (`Guia8_TuNombre.pdf`), antes
de la Sesión 9: Parte A 0.25 · Parte B 0.25 · Parte C 0.25 · Parte D 0.15 ·
Parte E 0.10. Se valora que el endpoint y el formulario realmente existan
y funcionen (no solo que se describan), que los textos usen el nombre real
de la institución del estudiante, y la honestidad de la reflexión. Entrega
tardía: −25% por día.*

**Al terminar:** responde la **evaluación anónima de la sesión** (formulario
de evaluación docente, sugerencias y quejas). Es 100% anónima y ayuda a
mejorar el curso semana a semana.
