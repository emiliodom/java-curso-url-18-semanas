+--------------------------------------------------------------------------+
| ### Universidad Rafael Landívar                                          |
|                                                                          |
| Facultad de Humanidades                                                  |
|                                                                          |
| Departamento de Educación                                                |
|                                                                          |
| **Guía de aprendizaje núm. 2 — Formato 18 semanas**                      |
|                                                                          |
| **Semana 2 – Unidad 1b: Lógica, métodos y buenas prácticas**             |
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

***"Un programa que solo declara variables es una fotografía; un programa
que decide y repite es una película. Los métodos son la forma de contar esa
película sin repetir la misma escena una y otra vez."***

**Fecha de la sesión:** 18 de julio de 2026 · **Entrega de esta guía:**
antes de la Sesión 3 (25 de julio de 2026) · **Valor:** 1 punto.

+---------------------------------+------------------------------------+
| **Aprendizajes esperados**      | **Productos que evidencian el      |
|                                 | aprendizaje**                      |
+=================================+====================================+
| **Utiliza condicionales y       | *PDF de la plantilla de la Guía 2  |
| ciclos para resolver            | (`entregable.html`) con: código y  |
| problemas sencillos.**          | salida de las Partes A, B, C y D,  |
|                                 | reflexión y lista de cotejo        |
+---------------------------------+ completada.*                       |
| **Organiza el código en         |                                    |
| métodos reutilizables y da      |                                    |
| sus primeros pasos con clases   |                                    |
| y objetos simples.**            |                                    |
+---------------------------------+------------------------------------+

**Habilidades y destrezas de la semana (guía):** Control de Flujo
(implementar if/switch y for/while con precisión) y Abstracción Básica
(encapsular lógica reutilizable en métodos con parámetros y retorno).

**Valores y actitudes:** Pensamiento Algorítmico (descomponer problemas
complejos en pasos pequeños y secuenciales) y Responsabilidad Ética
(escribir código no solo funcional, sino legible y fácil de mantener por
otros).

+-----------------------------------------------------------------------+
| ![Libros](media/image6.png){width="0.4895833333333333in"              |
| height="0.4895833333333333in"}**PRIMERA PARTE: REFUERZO DE            |
| APRENDIZAJES**                                                        |
|                                                                       |
| **Propósito de la actividad:** Consolidar lo visto en la sesión       |
| sincrónica (condicionales, ciclos, métodos y clases simples) y        |
| reforzar el puente con lenguajes ya conocidos, pensando en cómo       |
| explicar estos conceptos a futuros estudiantes.                       |
|                                                                       |
| **Actividades (Instrucciones):**                                      |
|                                                                       |
| 1.  **Repaso interactivo:**                                           |
|     - Releer el cheat sheet de la semana                              |
|       (`Material_Sesion_Clase_2_HTML_18_semanas/cheatsheet.html`).    |
|     - Si no completaste el Challenge "Arma el código" en clase,       |
|       terminar el nivel medio y difícil (`challenge.html`).           |
|     - Reintentar el Quiz Final como autoevaluación de estudio          |
|       (`quiz_final.html`, botón "Reintentar").                         |
|                                                                       |
| 2.  **Puente entre lenguajes (pensamiento crítico):**                 |
|     - Leer "La Guía del Programador de Python"                        |
|       (`guia_programador_python.html`): if/elif/else vs if/else if,   |
|       for-in-range vs for clásico, def/return vs métodos static, y    |
|       class/__init__ vs class/new.                                    |
|     - Resolver al menos 2 de los 4 ejercicios de traducción           |
|       Python → Java incluidos en esa guía.                            |
|     - Reflexionar: ¿qué fue más fácil de entender en Java gracias a   |
|       tu experiencia con Python (si tienes): condicionales, ciclos,   |
|       métodos o clases? ¿Por qué?                                     |
|                                                                       |
| 3.  **Investigación breve:**                                          |
|     - Investigar qué es un "ciclo infinito" y por qué puede colgar    |
|       un programa o un servidor en producción.                       |
|     - Investigar la diferencia entre un método `static` y uno de      |
|       instancia (solo lectura introductoria; se profundizará más      |
|       adelante en el curso).                                          |
|                                                                       |
| **Recursos:**                                                         |
|                                                                       |
| - Material HTML de la Semana 2 (hub `index.html` de la carpeta        |
|   `Material_Sesion_Clase_2_HTML_18_semanas/`).                        |
| - Documentación oficial de Java (Oracle): control de flujo y clases.  |
| - Compilador online: <https://www.educative.io/compilers/java>        |
|                                                                       |
| **Evaluación (Formativa):**                                           |
|                                                                       |
| *Capacidad para explicar con sus propias palabras cuándo usar `if`    |
| vs `switch`, `for` vs `while`, y qué diferencia una clase de un       |
| objeto, evitando tecnicismos excesivos sin perder rigor técnico.*     |
+=======================================================================+
| ![Piezas de                                                           |
| rompecabezas](media/image8.png){width="0.5833333333333334in"          |
| height="0.5833333333333334in"}                                        |
+-----------------------------------------------------------------------+

**SEGUNDA PARTE: CONSTRUCCIÓN DEL PROYECTO**

**Propósito de la actividad:** Escribir y ejecutar programas Java que
integren condicionales, ciclos, métodos y una primera clase simple — el
mismo patrón (regla de negocio + entidad) que se usará en Spring Boot desde
la Semana 8 para el proyecto del curso.

**Actividades (Instrucciones):**

1.  **Preparación del Entorno:**
        -   Puedes seguir usando el compilador online (sin instalar nada):
            <https://www.educative.io/compilers/java>
        -   Si ya instalaste tu entorno en la Semana 1 (VS Code + JDK +
            Git), puedes trabajar directamente en tu computadora — no es
            obligatorio todavía.

2.  **Práctica de Código — completar la plantilla `entregable.html`:**
    -   **Parte A — Decisiones (25%):** un programa con al menos un
        `if/else if/else` Y un `switch`, sobre el mismo dato o datos
        distintos, con nombres de variable en camelCase.
    -   **Parte B — Repetición (25%):** un programa con un ciclo `for` y
        un ciclo `while`, cada uno resolviendo un problema distinto, con
        comentarios que expliquen la condición de parada de cada ciclo.
    -   **Parte C — Métodos (25%):** 2 métodos propios (uno con retorno
        distinto de `void`, otro que retorne `boolean`), cada uno llamado
        con al menos dos conjuntos de datos distintos.
    -   **Parte D — Reto Pedagógico: mi primera clase (15%):** una clase
        simple relacionada con el proyecto del curso (ej. `Beneficiario`,
        `Voluntario`, `Donacion`) con al menos 2 campos, 2 objetos creados
        a partir de ella y, si es posible, un método propio.
    -   **Trabajo en equipo (opcional, recomendado):** comparar en pareja
        los nombres de métodos y clases elegidos y sugerirse mejoras de
        claridad antes de entregar (revisión de pares introductoria).

3.  **Reflexión (Parte E, 10%):**
    -   **Resiliencia ante el error:** ¿tuviste algún ciclo infinito o un
        "fallthrough" de switch esta semana? ¿Cómo lo detectaste y
        corregiste?
    -   **Pensamiento algorítmico:** piensa en un método que escribiste.
        ¿Por qué decidiste separar ese pedazo de código en un método en
        vez de dejarlo suelto en `main`?
    -   **Autonomía:** ¿qué recurso usaste primero al trabarte esta
        semana? ¿Funcionó?

**Recursos:**
-   Plantilla del entregable con exportación a PDF (`entregable.html`).
-   Cheat sheet de la semana (`cheatsheet.html`) y ejercicios resueltos
    (`ejercicios.html`).
-   Guía rápida del compilador online (Educative) o guía de instalación de
    la Semana 1 (`instalacion.html`) si ya trabajas localmente.

**Evaluación (Sumativa — 1 punto):**
*Entrega del PDF de la plantilla completada (`Guia2_TuNombre.pdf`) en el aula
virtual antes de la Sesión 3: Parte A 0.25 · Parte B 0.25 · Parte C 0.25 ·
Parte D 0.15 · Parte E 0.10. Se valora que el código compile, la claridad de
los nombres y la honestidad de la reflexión. Entrega tardía: −25% por día.*

**Al terminar:** responde la **evaluación anónima de la sesión** (formulario
de evaluación docente, sugerencias y quejas). Es 100% anónima y ayuda a
mejorar el curso semana a semana.
