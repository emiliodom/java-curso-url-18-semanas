+--------------------------------------------------------------------------+
| ### Universidad Rafael Landívar                                          |
|                                                                          |
| Facultad de Humanidades                                                  |
|                                                                          |
| Departamento de Educación                                                |
|                                                                          |
| **Guía de aprendizaje núm. 6 — Formato 18 semanas**                      |
|                                                                          |
| **Semana 6: Arquitectura en capas**                                     |
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

***"Un buen mesero nunca entra solo a la bodega: le pregunta al chef. Un
buen Controlador nunca habla directo con el Repositorio: le pregunta al
Servicio."***

**Fecha de la sesión:** 15 de agosto de 2026 · **Entrega de esta guía:**
antes de la Sesión 7 (22 de agosto de 2026) · **Valor:** 1 punto.

+---------------------------------+------------------------------------+
| **Aprendizajes esperados**      | **Productos que evidencian el      |
|                                 | aprendizaje**                      |
+=================================+====================================+
| **Diseña la arquitectura en     | *Diagrama completo de las 3 capas  |
| capas de su aplicación.**       | (Presentación, Negocio, Datos) con |
|                                 | las entidades del proyecto real.*  |
+---------------------------------+                                    |
| **Comprende la relación entre   | *PDF de la plantilla de la Guía 6  |
| servicios, repositorios y       | (`proyecto.html`, sección          |
| controladores, y aplica bajo    | "Entregable") con evidencia de     |
| acoplamiento.**                 | cada parte.*                       |
+---------------------------------+------------------------------------+

**Habilidades y destrezas de la semana (guía):** Modelado de Sistemas
(crear diagramas precisos que representen la arquitectura en capas del
proyecto) y Definición de Entidades (identificar y documentar correctamente
las entidades necesarias para el funcionamiento del sistema).

**Valores y actitudes:** Atención al Detalle (precisión técnica al definir
los componentes fundamentales del proyecto) y Coherencia en el Diseño
(alineación estricta entre la arquitectura propuesta y la lógica de negocio
del proyecto).

+-----------------------------------------------------------------------+
| ![Libros](media/image6.png){width="0.4895833333333333in"              |
| height="0.4895833333333333in"}**PRIMERA PARTE: REFUERZO DE            |
| APRENDIZAJES**                                                        |
|                                                                       |
| **Propósito de la actividad:** Consolidar la relación entre Servicio, |
| Repositorio y Controlador vista en la sesión sincrónica, y ejercitar  |
| el concepto de bajo acoplamiento con un mini-programa funcional real. |
|                                                                       |
| **Actividades (Instrucciones):**                                      |
|                                                                       |
| 1.  **Repaso interactivo:**                                           |
|     - Releer el cheat sheet de la semana                              |
|       (`Material_Sesion_Clase_6_HTML_18_semanas/cheatsheet.html`),    |
|       pestaña "Conceptos de arquitectura", en especial las secciones  |
|       D (bajo acoplamiento) y E (antipatrones).                       |
|     - Resolver los 7 ejercicios funcionales de `ejercicios.html`,     |
|       interactuando con el simulador de la lista de tareas.           |
|     - Si no completaste el Challenge en clase, terminar ambas         |
|       pestañas (`challenge.html`): clasificación y simulador          |
|       funcional.                                                       |
|     - Reintentar el Quiz en modo Final como autoevaluación de estudio |
|       (`quiz.html`, botón "🔀 Nuevas preguntas").                      |
|                                                                       |
| 2.  **Investigación breve:**                                          |
|     - Investigar qué significa "bajo acoplamiento" en el contexto de  |
|       ingeniería de software, más allá del ejemplo del restaurante.   |
|     - Investigar para qué sirve la anotación `@Service` en un         |
|       proyecto real de Spring Boot (sin necesidad de instalar nada    |
|       — solo lectura).                                                |
|                                                                       |
| **Recursos:**                                                         |
|                                                                       |
| - Material HTML de la Semana 6 (hub `index.html` de la carpeta        |
|   `Material_Sesion_Clase_6_HTML_18_semanas/`).                        |
| - Documentación oficial de Spring (<https://spring.io/guides>) —      |
|   solo como referencia de lectura, no se instala nada esta semana.    |
|                                                                       |
| **Evaluación (Formativa):**                                           |
|                                                                       |
| *Capacidad para explicar con sus propias palabras la diferencia entre |
| un Servicio y un Repositorio, y por qué el Controlador nunca debe     |
| hablar directo con el Repositorio, evitando tecnicismos excesivos sin |
| perder rigor técnico.*                                                |
+=======================================================================+
| ![Piezas de                                                           |
| rompecabezas](media/image8.png){width="0.5833333333333334in"          |
| height="0.5833333333333334in"}                                        |
+-----------------------------------------------------------------------+

**SEGUNDA PARTE: CONSTRUCCIÓN DEL PROYECTO**

**Propósito de la actividad:** Dividir el diseño MVC del proyecto (Semana 5)
en la arquitectura en capas completa (Presentación, Negocio, Datos),
identificando con precisión las Entidades, Repositorios y Servicios del
proyecto real, y verificando que el diseño respete el bajo acoplamiento.

**Actividades (Instrucciones):**

1.  **Preparación:**
    -   Tener a la mano el diagrama MVC completado en la Semana 5
        (Entrega Parcial 1).
    -   Seguir la guía paso a paso incluida al inicio de
        `Material_Sesion_Clase_6_HTML_18_semanas/proyecto.html` (Pasos 1
        a 4) antes de llenar la plantilla calificable.

2.  **Práctica de Código — completar la plantilla (sección "Entregable" de `proyecto.html`):**
    -   **Parte A — Repaso y verificación (15%):** enlace o contenido del
        diagrama MVC de la Semana 5.
    -   **Parte B — Entidad, Repositorio y Servicio (25%):** para al menos
        2 entidades del proyecto, su Entidad (atributos), su Repositorio
        (2-3 operaciones) y su Servicio (mínimo 1 regla de negocio real).
    -   **Parte C — Diagrama completo de 3 capas (30%):** diagrama o
        descripción textual mostrando Presentación, Negocio y Datos con
        todas sus piezas.
    -   **Parte D — Verificación de bajo acoplamiento (20%):** explicación
        de cómo el diseño garantiza que el Controlador nunca hable directo
        con el Repositorio.

3.  **Reflexión (Parte E, 10%):**
    -   **Visión estratégica:** cómo esta arquitectura ayudará cuando el
        proyecto crezca (Semana 14 en adelante).
    -   **Mentalidad crítica:** qué parte del diseño de la Semana 5 se
        tuvo que corregir hoy, y por qué.

**Recursos:**
-   Guía paso a paso + plantilla del entregable, en una sola página
    (`proyecto.html`), con exportación a PDF.
-   Cheat sheet de la semana (`cheatsheet.html`): analogía extendida,
    responsabilidades, antipatrones y anotaciones de Spring Boot.
-   Ejercicios funcionales con un mini-programa real (`ejercicios.html`)
    y el challenge con dos simuladores (`challenge.html`), como referencia
    de cómo se ve una arquitectura en capas correctamente separada.

**Evaluación (Sumativa — 1 punto):**
*Entrega del PDF de la plantilla completada (`Guia6_TuNombre.pdf`), antes
de la Sesión 7: Parte A 0.15 · Parte B 0.25 · Parte C 0.30 · Parte D 0.20 ·
Parte E 0.10. Se valora la coherencia entre el MVC de la Semana 5 y las
capas de esta semana, que las reglas de negocio vivan realmente en el
Servicio, y la honestidad de la reflexión. Entrega tardía: −25% por día.*

**Al terminar:** responde la **evaluación anónima de la sesión** (formulario
de evaluación docente, sugerencias y quejas). Es 100% anónima y ayuda a
mejorar el curso semana a semana.
