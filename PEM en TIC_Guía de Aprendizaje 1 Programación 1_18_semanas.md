+--------------------------------------------------------------------------+
| ### Universidad Rafael Landívar                                          |
|                                                                          |
| Facultad de Humanidades                                                  |
|                                                                          |
| Departamento de Educación                                                |
|                                                                          |
| **Guía de aprendizaje núm. 1 — Formato 18 semanas**                      |
|                                                                          |
| **Semana 1 – Unidad 1a: Fundamentos de Java y tipos de datos**           |
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

***"En Java, cada variable tiene un tipo y cada tipo cuenta una historia:
aprender a elegir el dato correcto es el primer paso para escribir software
que otros puedan leer, mantener y confiar."***

**Fecha de la sesión:** 11 de julio de 2026 · **Entrega de esta guía:**
antes de la Sesión 2 (18 de julio de 2026) · **Valor:** 1 punto.

+---------------------------------+------------------------------------+
| **Aprendizajes esperados**      | **Productos que evidencian el      |
|                                 | aprendizaje**                      |
+=================================+====================================+
| **Comprende la estructura       | *PDF de la plantilla de la Guía 1  |
| básica del lenguaje Java.**     | (`entregable.html`) con: código y  |
|                                 | salida de las Partes A, B y C,     |
+---------------------------------+ reflexión y lista de cotejo        |
| **Declara variables, constantes | completada.*                       |
| y tipos primitivos, aplica      |                                    |
| conversiones (casting) y        |                                    |
| combina operadores aritméticos, |                                    |
| lógicos y de comparación en     |                                    |
| expresiones.**                  |                                    |
+---------------------------------+------------------------------------+

**Habilidades y destrezas de la semana (guía):** Lógica de Operaciones
(combinar con precisión operadores aritméticos, lógicos y de comparación) y
Gestión de Datos (aplicar conversiones/casting y manejo de variables de forma
eficiente y segura).

**Valores y actitudes:** Autodisciplina (rigor en la sintaxis y buenas
prácticas de nombrado desde la primera línea) y Autonomía (proactividad en la
búsqueda de soluciones antes de solicitar ayuda externa).

+-----------------------------------------------------------------------+
| ![Libros](media/image6.png){width="0.4895833333333333in"              |
| height="0.4895833333333333in"}**PRIMERA PARTE: REFUERZO DE            |
| APRENDIZAJES**                                                        |
|                                                                       |
| **Propósito de la actividad:** Consolidar lo visto en la sesión       |
| sincrónica (estructura de un programa, tipos de datos, casting y      |
| operadores) y comprender el "porqué" del tipado fuerte de Java,       |
| pensando en cómo explicar estos conceptos a futuros estudiantes.      |
|                                                                       |
| **Actividades (Instrucciones):**                                      |
|                                                                       |
| 1.  **Repaso interactivo:**                                           |
|     - Releer el cheat sheet de la semana                              |
|       (`Material_Sesion_Clase_1_HTML_18_semanas/cheatsheet.html`).    |
|     - Si no completaste el Challenge "Arma el código" en clase,       |
|       terminar el nivel medio y difícil (`challenge.html`).           |
|     - Reintentar el Quiz Final como autoevaluación de estudio          |
|       (`quiz_final.html`, botón "Reintentar").                         |
|                                                                       |
| 2.  **Investigación y Lectura:**                                      |
|     - Leer sobre la historia de Java y por qué es un lenguaje         |
|       fuertemente tipado.                                             |
|     - Investigar qué es la JVM (Java Virtual Machine) y qué significa |
|       "write once, run anywhere".                                     |
|                                                                       |
| 3.  **Puente entre lenguajes (pensamiento crítico):**                 |
|     - Leer "La Guía del Programador de Python"                        |
|       (`guia_programador_python.html`): tabla comparativa             |
|       Python ↔ Java y los 5 tropiezos clásicos.                       |
|     - Resolver al menos 2 de los 4 ejercicios de traducción           |
|       Python → Java incluidos en esa guía.                            |
|     - Reflexionar: ¿Cómo explicaría a un adolescente la diferencia    |
|       entre una variable en Python y una en Java?                     |
|                                                                       |
| **Recursos:**                                                         |
|                                                                       |
| - Material HTML de la Semana 1 (hub `index.html` de la carpeta        |
|   `Material_Sesion_Clase_1_HTML_18_semanas/`).                        |
| - Documentación oficial de Java (Oracle) y JDK 17+                    |
|   (<https://adoptium.net>).                                           |
| - Compilador online: <https://www.educative.io/compilers/java>        |
|                                                                       |
| **Evaluación (Formativa):**                                           |
|                                                                       |
| *Capacidad para explicar con sus propias palabras qué es un tipo de   |
| dato, qué hace el casting y por qué Java exige declarar tipos,        |
| evitando tecnicismos excesivos sin perder rigor técnico.*             |
+=======================================================================+
| ![Piezas de                                                           |
| rompecabezas](media/image8.png){width="0.5833333333333334in"          |
| height="0.5833333333333334in"}                                        |
+-----------------------------------------------------------------------+

**SEGUNDA PARTE: CONSTRUCCIÓN DEL PROYECTO**

**Propósito de la actividad:** Escribir y ejecutar programas Java que usen
variables, constantes, conversiones y expresiones — la base del modelo de
datos que, semana a semana, se convertirá en la aplicación web del proyecto
(registro de beneficiarios de una entidad sin fines de lucro).

**Actividades (Instrucciones):**

1.  **Preparación del Entorno:**
        -   **No instalar nada.** Usar el compilador online:
            <https://www.educative.io/compilers/java>
        -   Pegar el template inicial y ejecutar:

                ```java
                public class Main {
                    public static void main(String[] args) {
                        System.out.println("Hola mundo");
                    }
                }
                ```

        -   Nota: En Educative la clase normalmente debe llamarse **Main**.
        -   (Opcional) Si ya tienes Java/IDE instalado puedes usarlo, pero
            **no es requisito**: la instalación local se hace en la semana 7.

2.  **Práctica de Código — completar la plantilla `entregable.html`:**
    -   **Parte A — Mi ficha en Java (30%):** programa con 1 `String`,
        1 `int`, 1 `double`, 1 `boolean` y 1 constante `final`, con datos
        reales, nombres en camelCase e impresión con etiquetas.
    -   **Parte B — Calculadora personal (30%):** con dos variables `int`,
        imprimir suma, resta, multiplicación, división y residuo (`%`), y
        agregar una línea con **casting** para que la división muestre
        decimales. Comentar cada línea explicando qué hace.
    -   **Parte C — Expresiones que deciden (25%):** inventar un caso real
        del contexto propio (beca, descuento, ingreso a un programa social…)
        y construir 2 expresiones booleanas: una con `&&` y otra con `||`,
        impresas con etiquetas claras.
    -   **Reto Pedagógico transversal:** escribir los comentarios del código
        como si fueran para un estudiante que aprende por primera vez.

3.  **Reflexión (Parte D, 15%):**
    -   **Resiliencia ante el error:** copiar el mensaje de error más
        difícil que dio el compilador esta semana y explicar cómo se
        resolvió.
    -   **Pensamiento crítico:** en 3–4 líneas, ¿por qué Java obliga a
        declarar el tipo de cada variable? ¿Qué ventaja tiene (o no) frente
        a lenguajes como Python?
    -   **Autonomía:** ¿qué recurso usaste primero al trabarte (cheat sheet,
        releer el error, buscar en línea, preguntar)? ¿Funcionó?

**Recursos:**
-   Plantilla del entregable con exportación a PDF (`entregable.html`).
-   Cheat sheet de la semana (`cheatsheet.html`) y ejercicios resueltos
    (`ejercicios.html`).
-   Guía rápida del compilador online (Educative).

**Evaluación (Sumativa — 1 punto):**
*Entrega del PDF de la plantilla completada (`Guia1_TuNombre.pdf`) en el aula
virtual antes de la Sesión 2: Parte A 0.30 · Parte B 0.30 · Parte C 0.25 ·
Parte D 0.15. Se valora que el código compile, la claridad de los nombres y
la honestidad de la reflexión. Entrega tardía: −25% por día.*

**Al terminar:** responde la **evaluación anónima de la sesión** (formulario
de evaluación docente, sugerencias y quejas). Es 100% anónima y ayuda a
mejorar el curso semana a semana.
