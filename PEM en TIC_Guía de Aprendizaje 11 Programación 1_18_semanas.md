+--------------------------------------------------------------------------+
| ### Universidad Rafael Landívar                                          |
|                                                                          |
| Facultad de Humanidades                                                  |
|                                                                          |
| Departamento de Educación                                                |
|                                                                          |
| **Guía de aprendizaje núm. 11 — Formato 18 semanas**                     |
|                                                                          |
| **Semana 11: Validación, errores y experiencia de usuario**             |
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

***"Un formulario que rechaza un dato y además borra todo lo escrito no está
validando: está castigando."***

**Fecha de la sesión:** 26 de septiembre de 2026 · **Entrega de esta guía:**
antes de la Sesión 12 (3 de octubre de 2026) · **Valor:** 1 punto. Esta
semana no tiene Entrega Parcial: los hitos del proyecto son las Semanas 5,
9, 14 y 17, y el siguiente es la Entrega Parcial 3, en la Semana 14.

+---------------------------------+------------------------------------+
| **Aprendizajes esperados**      | **Productos que evidencian el      |
|                                 | aprendizaje**                      |
+=================================+====================================+
| **Aplica validaciones básicas   | *Modelo anotado con Bean           |
| en formularios.**               | Validation y controlador que las   |
|                                 | revisa con @Valid y BindingResult.*|
+---------------------------------+------------------------------------+
| **Maneja errores con mensajes   | *Formulario que muestra mensajes   |
| claros al usuario.**            | propios en español y conserva los  |
|                                 | datos ya escritos al fallar.*      |
+---------------------------------+------------------------------------+
| **Diseña interfaces sencillas y | *PDF de la plantilla de la Guía 11 |
| accesibles.**                   | (`proyecto.html`, sección          |
|                                 | "Entregable") y módulo publicado   |
|                                 | en la rama development de GitHub.* |
+---------------------------------+------------------------------------+

**Habilidades y destrezas de la semana (guía):** Integración de Validaciones
(implementar formularios funcionales en el proyecto que incorporen
mecanismos de validación de datos) y Manejo de Errores (configurar sistemas
de mensajes de error efectivos dentro de los formularios para orientar
correctamente al usuario).

**Valores y actitudes:** Responsabilidad de Desarrollo (asumir el compromiso
de entregar formularios seguros que prevengan errores de usuario mediante
una validación correcta) y Enfoque en el Usuario (priorizar la claridad de
la información mostrada ante errores como parte integral de la funcionalidad
del sistema).

**Alcance de esta guía:** los datos se siguen guardando en memoria y se
pierden al reiniciar la aplicación; la persistencia en base de datos
corresponde a la Semana 12. Lo que se evalúa aquí es que los datos que
entran sean correctos y que el usuario entienda qué corregir.

+-----------------------------------------------------------------------+
| ![Libros](media/image6.png){width="0.4895833333333333in"              |
| height="0.4895833333333333in"}**PRIMERA PARTE: REFUERZO DE            |
| APRENDIZAJES**                                                        |
|                                                                       |
| **Propósito de la actividad:** Consolidar el uso de Bean Validation y  |
| la presentación accesible de errores, practicando primero sobre un    |
| proyecto desechable antes de tocar el proyecto real.                  |
|                                                                       |
| **Actividades (Instrucciones):**                                      |
|                                                                       |
| 1.  **Repaso interactivo:**                                           |
|     - Estudiar las tres pestañas del cheat sheet                      |
|       (`Material_Sesion_Clase_11_HTML_18_semanas/cheatsheet.html`):   |
|       las anotaciones con su import completo, cómo mostrar los        |
|       errores con accesibilidad, y el catálogo de errores frecuentes. |
|     - Resolver los 8 ejercicios en escalera de `ejercicios.html` con  |
|       el proyecto de práctica `taller-formularios`. Los ejercicios 1, |
|       2 y 5 muestran con las propias manos los tres fallos            |
|       silenciosos de la semana: guardar basura, anotar sin la         |
|       dependencia, y usar `int` en vez de `Integer`.                  |
|     - Completar ambas pestañas del challenge si no se terminaron en   |
|       clase, en especial el simulador de datos inválidos.             |
|     - Repetir el Quiz en modo Final con el botón "🔀 Nuevas           |
|       preguntas" como autoevaluación de estudio.                      |
|                                                                       |
| 2.  **Investigación breve:**                                          |
|     - Investigar qué otras anotaciones de validación existen en       |
|       `jakarta.validation.constraints` además de las vistas (por      |
|       ejemplo `@Positive`, `@PastOrPresent`, `@Digits`) y para qué    |
|       sirve cada una.                                                 |
|     - Investigar qué significa que una página web sea accesible y     |
|       revisar, en particular, la recomendación de no comunicar        |
|       información usando únicamente el color.                         |
|                                                                       |
| **Recursos:**                                                         |
|                                                                       |
| - Material HTML de la Semana 11 (hub `index.html` de la carpeta       |
|   `Material_Sesion_Clase_11_HTML_18_semanas/`), incluido el **Kit de  |
|   archivos completos** con los nueve archivos del módulo validado,    |
|   cada uno con su ruta, su línea `package` y todos sus `import`.      |
| - Documentación de Jakarta Bean Validation                            |
|   (<https://jakarta.ee/specifications/bean-validation/>).             |
| - Iniciativa de Accesibilidad Web del W3C                             |
|   (<https://www.w3.org/WAI/>).                                        |
|                                                                       |
| **Evaluación (Formativa):**                                           |
|                                                                       |
| *Capacidad para explicar por qué un formulario puede seguir guardando |
| datos inválidos aunque el modelo esté anotado, y por qué cuando la    |
| validación falla se devuelve la plantilla en lugar de una             |
| redirección.*                                                         |
+=======================================================================+
| ![Piezas de                                                           |
| rompecabezas](media/image8.png){width="0.5833333333333334in"          |
| height="0.5833333333333334in"}                                        |
+-----------------------------------------------------------------------+

**SEGUNDA PARTE: CONSTRUCCIÓN DEL PROYECTO**

**Propósito de la actividad:** Agregar **validación y mensajes de error** al
formulario del proyecto real del estudiante, con reglas que correspondan a
la institución que atiende (guardería, casa hogar, dispensario u otra
entidad sin fines de lucro).

**Actividades (Instrucciones):**

1.  **Preparación:**
    -   Tener funcionando el módulo de registro de la Semana 10
        (formulario que guarda y lista que muestra).
    -   **Definir primero las reglas en palabras, antes de escribir
        código:** qué campo, qué regla real tiene en esa institución y qué
        anotación la implementa. La tabla de apoyo está en el Paso 0 de
        `proyecto.html`.
    -   Seguir la guía de ocho pasos incluida al inicio de
        `Material_Sesion_Clase_11_HTML_18_semanas/proyecto.html`.

2.  **Práctica de Código — completar la plantilla (sección "Entregable" de `proyecto.html`):**
    -   **Parte A — Tus reglas explicadas (20%):** mínimo cuatro reglas,
        indicando campo, anotación y por qué tiene sentido en esa
        institución.
    -   **Parte B — Modelo anotado (25%):** la clase completa, con su
        `package`, todos sus `import` y los mensajes en español.
    -   **Parte C — Controlador y plantilla (25%):** el método POST con
        `@Valid` y `BindingResult`, y el bloque de un campo del formulario
        con su `label`, su mensaje de error y `aria-describedby`.
    -   **Parte D — Las cuatro pruebas (20%):** formulario vacío, valor
        fuera de rango, formato inválido y —la más importante— un campo mal
        con el resto bien, comprobando que **no se pierde lo escrito**.

3.  **Reflexión (Parte E, 10%):**
    -   **Empatía con el usuario:** cuál de los mensajes propios resultaría
        más claro a una persona apurada, y reescritura del menos claro.
    -   **Rigor en la calidad:** qué dato podría seguir entrando mal a
        pesar de las validaciones, y cómo se detectaría.

**Recursos:**
-   Guía paso a paso y plantilla del entregable, en una sola página
    (`proyecto.html`), con exportación a PDF.
-   Kit de archivos completos (`ejercicios.html`, segunda pestaña) para
    copiar cualquier archivo faltante, cambiando el paquete y la entidad.
-   Cheat sheet de la semana, en especial la tabla de anotaciones con su
    import y el catálogo de errores frecuentes.

**Evaluación (Sumativa — 1 punto):**
*Entrega del PDF de la plantilla completada (`Guia11_TuNombre.pdf`), antes de
la Sesión 12: Parte A 0.20 · Parte B 0.25 · Parte C 0.25 · Parte D 0.20 ·
Parte E 0.10. Se valora especialmente que las reglas correspondan a la
institución real del estudiante (no anotaciones copiadas al azar), que los
mensajes estén escritos en español y resulten útiles para quien los lea, y
que los datos ya escritos no se pierdan cuando la validación falla. Entrega
tardía: −25% por día.*

**Al terminar:** responde la **evaluación anónima de la sesión** (formulario
de evaluación docente, sugerencias y quejas). Es 100% anónima y ayuda a
mejorar el curso semana a semana.
