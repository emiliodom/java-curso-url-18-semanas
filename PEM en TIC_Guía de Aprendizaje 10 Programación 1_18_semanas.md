+--------------------------------------------------------------------------+
| ### Universidad Rafael Landívar                                          |
|                                                                          |
| Facultad de Humanidades                                                  |
|                                                                          |
| Departamento de Educación                                                |
|                                                                          |
| **Guía de aprendizaje núm. 10 — Formato 18 semanas**                     |
|                                                                          |
| **Semana 10: Rutas, controladores y formularios**                        |
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

***"Hasta ahora tu aplicación solo respondía preguntas. Esta semana empieza
a recibir respuestas."***

**Fecha de la sesión:** 19 de septiembre de 2026 · **Entrega de esta guía:**
antes de la Sesión 11 (26 de septiembre de 2026) · **Valor:** 1 punto. Esta
semana no tiene Entrega Parcial: los hitos del proyecto son las Semanas 5,
9, 14 y 17, y el siguiente es la Entrega Parcial 3, en la Semana 14.

+---------------------------------+------------------------------------+
| **Aprendizajes esperados**      | **Productos que evidencian el      |
|                                 | aprendizaje**                      |
+=================================+====================================+
| **Implementa rutas GET y POST   | *Módulo de registro funcionando:   |
| en Spring Boot.**               | un formulario que guarda y una     |
|                                 | lista que muestra lo guardado.*    |
+---------------------------------+                                    |
| **Diseña formularios HTML       | *PDF de la plantilla de la Guía 10 |
| integrados con Thymeleaf y los  | (`proyecto.html`, sección          |
| conecta con controladores del   | "Entregable"), y el módulo subido  |
| backend.**                      | a la rama development de GitHub.*  |
+---------------------------------+------------------------------------+

**Habilidades y destrezas de la semana (guía):** Desarrollo de Funcionalidad
(construir un módulo de registro completo para la entidad principal del
proyecto) y Aplicación Práctica (integrar los conceptos de controladores,
formularios y binding de datos en una funcionalidad real).

**Valores y actitudes:** Responsabilidad de Desarrollo (comprometerse con la
implementación de módulos funcionales que aporten valor real a la estructura
del proyecto) y Disciplina en la Implementación (asegurar la integridad de
los datos durante el proceso de registro de entidades en el sistema).

**Alcance de esta guía:** el módulo guarda los registros **en memoria**, de
modo que se pierden al reiniciar la aplicación. No es un defecto de la
entrega: la persistencia en base de datos corresponde a la Semana 12, y la
validación de los datos ingresados a la Semana 11.

+-----------------------------------------------------------------------+
| ![Libros](media/image6.png){width="0.4895833333333333in"              |
| height="0.4895833333333333in"}**PRIMERA PARTE: REFUERZO DE            |
| APRENDIZAJES**                                                        |
|                                                                       |
| **Propósito de la actividad:** Consolidar el circuito completo de un  |
| formulario web —mostrar, enviar, recibir, guardar y listar— mediante  |
| ejercicios resueltos en la propia computadora, antes de aplicarlo al  |
| proyecto real.                                                        |
|                                                                       |
| **Actividades (Instrucciones):**                                      |
|                                                                       |
| 1.  **Repaso interactivo:**                                           |
|     - Estudiar las tres pestañas del cheat sheet                      |
|       (`Material_Sesion_Clase_10_HTML_18_semanas/cheatsheet.html`):   |
|       la sintaxis de la semana, el circuito del formulario en seis    |
|       pasos y la tabla de errores frecuentes.                         |
|     - Resolver los 8 ejercicios en escalera de `ejercicios.html` con  |
|       el proyecto de práctica `taller-formularios`. Construyen, una   |
|       pieza a la vez, el mismo módulo que pide la Segunda Parte.      |
|     - Completar ambas pestañas del challenge si no se terminaron en   |
|       clase, en especial el simulador de guardar y redirigir.         |
|     - Repetir el Quiz en modo Final con el botón "🔀 Nuevas           |
|       preguntas" como autoevaluación de estudio.                      |
|                                                                       |
| 2.  **Investigación breve:**                                          |
|     - Investigar qué otros atributos de Thymeleaf existen además de   |
|       los vistos (por ejemplo `th:value`, `th:selected`,              |
|       `th:classappend`) y para qué sirven.                            |
|     - Investigar por qué el método POST no muestra los datos en la    |
|       barra de direcciones y en qué se diferencia de GET para el      |
|       envío de información sensible.                                  |
|                                                                       |
| **Recursos:**                                                         |
|                                                                       |
| - Material HTML de la Semana 10 (hub `index.html` de la carpeta       |
|   `Material_Sesion_Clase_10_HTML_18_semanas/`), incluido el **Kit de  |
|   archivos completos** con los nueve archivos del módulo, cada uno    |
|   con su ruta, su línea `package` y todos sus `import`.               |
| - Documentación oficial de Thymeleaf                                  |
|   (<https://www.thymeleaf.org/documentation.html>).                   |
|                                                                       |
| **Evaluación (Formativa):**                                           |
|                                                                       |
| *Capacidad para explicar por qué un formulario puede guardar          |
| registros en blanco sin mostrar ningún mensaje de error, y por qué el |
| método que guarda debe terminar en una redirección y no devolviendo   |
| la plantilla de la lista.*                                            |
+=======================================================================+
| ![Piezas de                                                           |
| rompecabezas](media/image8.png){width="0.5833333333333334in"          |
| height="0.5833333333333334in"}                                        |
+-----------------------------------------------------------------------+

**SEGUNDA PARTE: CONSTRUCCIÓN DEL PROYECTO**

**Propósito de la actividad:** Construir el **módulo de registro de la
entidad principal** del proyecto real del estudiante (guardería, casa hogar,
dispensario u otra entidad sin fines de lucro): un formulario que capture los
datos, los guarde y los muestre en una lista.

**Actividades (Instrucciones):**

1.  **Preparación:**
    -   Tener el proyecto de la Semana 9 corriendo en local, con sus
        paquetes `controller`, `service` y `model`.
    -   Definir cuál es la **entidad principal** del proyecto y con qué
        tres o cuatro campos se va a registrar (por ejemplo `Nino` con
        nombre, edad y encargado; `Paciente` con nombre, edad y motivo de
        consulta). La tabla de sugerencias está en el Paso 0 de
        `proyecto.html`.
    -   Seguir la guía de siete pasos incluida al inicio de
        `Material_Sesion_Clase_10_HTML_18_semanas/proyecto.html`.

2.  **Práctica de Código — completar la plantilla (sección "Entregable" de `proyecto.html`):**
    -   **Parte A — Clase de modelo (20%):** la clase completa, con su
        `package`, sus atributos, el constructor vacío y los getters y
        setters de todos los campos.
    -   **Parte B — Controlador (25%):** la clase completa, con sus
        `import` y las tres rutas: GET que muestra el formulario, POST que
        guarda y redirige, y GET que lista.
    -   **Parte C — Plantillas (25%):** el bloque `form` con `th:action`,
        `th:object` y los `th:field`, y el bloque con el `th:each` de la
        lista.
    -   **Parte D — Evidencia de funcionamiento (20%):** las tres
        comprobaciones del Paso 6 (el envío redirige a la lista, los
        registros aparecen completos, y recargar no duplica) más el enlace
        al repositorio.

3.  **Reflexión (Parte E, 10%):**
    -   **Precisión técnica:** qué error costó más resolver y cómo se
        encontró; o bien, qué se revisaría primero ante un formulario que
        "no guarda nada".
    -   **Orientación a la experiencia de usuario:** qué le falta al
        formulario para que una persona de la institución, que no sabe
        programar, lo use sin equivocarse.

**Recursos:**
-   Guía paso a paso y plantilla del entregable, en una sola página
    (`proyecto.html`), con exportación a PDF.
-   Kit de archivos completos (`ejercicios.html`, segunda pestaña) para
    copiar cualquier archivo faltante, cambiando el paquete y la entidad.
-   Cheat sheet de la semana, en especial la pestaña de errores frecuentes.

**Evaluación (Sumativa — 1 punto):**
*Entrega del PDF de la plantilla completada (`Guia10_TuNombre.pdf`), antes de
la Sesión 11: Parte A 0.20 · Parte B 0.25 · Parte C 0.25 · Parte D 0.20 ·
Parte E 0.10. Se valora que el módulo realmente funcione (que registre y
liste, no solo que el código esté escrito), que la entidad y los datos
correspondan a la institución real del estudiante, y la honestidad de la
reflexión. Entrega tardía: −25% por día.*

**Al terminar:** responde la **evaluación anónima de la sesión** (formulario
de evaluación docente, sugerencias y quejas). Es 100% anónima y ayuda a
mejorar el curso semana a semana.
