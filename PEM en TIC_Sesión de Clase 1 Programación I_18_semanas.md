+--------------------------------------------------------------------------+
| ### Universidad Rafael Landívar                                          |
|                                                                          |
| Facultad de Humanidades                                                  |
|                                                                          |
| Departamento de Educación                                                |
|                                                                          |
| +----------------------------+-----------------------------------------+ |
| | Profesorados con           | Nombre del curso: Introducción al       | |
| | Especialidad en TIC        | Desarrollo Web con Java                 | |
| |                            | Número de créditos: 4                   | |
| |                            |                                         | |
| |                            | Ciclo y módulo: Cuarto ciclo            | |
| +============================+=========================================+ |
+--------------------------------------------------------------------------+

![Transformación Digital -- Universidad Rafael
Landívar](media/image1.png){width="3.2336996937882763in"
height="1.3760411198600175in"}![gráficos de color
degradado](media/image2.png){width="8.268055555555556in"
height="1.5618055555555554in"}

**Secuencia de aprendizaje — Formato 18 semanas (sesión sincrónica de 70 minutos)**

Sesión **[sincrónica]{.underline}** #1 — Sábado 11 de julio de 2026, 11:10–12:20

**Tema:** Semana 1 · Unidad 1a — Fundamentos de Java y tipos de datos

+----------------+------------------------------------------------------------+
|                | ![Cabeza con                                               |
|                | engranajes](media/image4.png){width="0.4583333333333333in" |
|                | height="0.4583333333333333in"}**Información importante**   |
+================+============================================================+
| **Aprendizajes | - Comprende la estructura básica del lenguaje Java        |
| esperados**    |   (clase y método `main`).                                 |
|                |                                                            |
|                | - Declara variables, constantes y tipos primitivos.       |
|                |                                                            |
|                | - Aplica conversiones (casting) entre tipos de datos.     |
|                |                                                            |
|                | - Aplica operadores y expresiones simples (aritméticos,   |
|                |   lógicos y de comparación).                               |
+----------------+------------------------------------------------------------+
| **Contenidos   | - Introducción al lenguaje Java y su ecosistema            |
| temáticos**    |   (JDK, compilador, JVM).                                  |
|                |                                                            |
|                | - Variables, tipos de datos y conversiones.                |
|                |                                                            |
|                | - Operadores aritméticos, lógicos y de comparación.        |
|                |                                                            |
|                | - Estructura básica de un programa Java.                   |
+----------------+------------------------------------------------------------+
| **Habilidades  | - Dominio del Entorno: configurar y ejecutar               |
| y destrezas**  |   correctamente un programa desde la consola o el IDE      |
|                |   (esta semana: compilador online).                        |
|                |                                                            |
|                | - Análisis Sintáctico: identificar y aplicar la            |
|                |   estructura básica (clase/método main) y las reglas de    |
|                |   tipado.                                                  |
+----------------+------------------------------------------------------------+
| **Valores y    | - Resiliencia ante el error: ver el error de compilación   |
| actitudes**    |   como una herramienta de aprendizaje, no como un fracaso. |
|                |                                                            |
|                | - Pensamiento Crítico: cuestionar por qué Java requiere    |
|                |   tanta estructura (tipado fuerte) en comparación con      |
|                |   otros lenguajes.                                         |
+----------------+------------------------------------------------------------+
| **Productos    | *PDF del Quiz de Final de Clase + PDF del Challenge        |
| que evidencian | "Arma el código" (Actividad en clase — Sesión 1, 0.66      |
| el             | pts). El trabajo autónomo se evidencia con la Guía de      |
| aprendizaje**  | Aprendizaje 1 (1 pt).*                                     |
+----------------+------------------------------------------------------------+

  -----------------------------------------------------------------------
  ![Internet](media/image6.png){width="0.5104166666666666in"
  height="0.5104166666666666in"}**Desarrollo de la secuencia (70 minutos)**
  -----------------------------------------------------------------------

  -----------------------------------------------------------------------

> **Material de apoyo de la sesión:** carpeta HTML
> `Material_Sesion_Clase_1_HTML_18_semanas/` (hub `index.html` con guía
> docente, quizzes, ejercicios, cheat sheet, challenge y entregable, todos
> con exportación a PDF). Compilador online (sin instalar nada):
> <https://www.educative.io/compilers/java>

1.  **Activación de presaberes — Quiz de Presaberes**

*Actividad: Bienvenida + resolución individual del Quiz de Presaberes en línea
(8 preguntas autocalificadas sobre lógica, algoritmos y datos; no cuenta para
nota, funciona como diagnóstico de entrada).*

*Tiempo estimado: 5 minutos (minutos 00–05)*

*Recursos: `quiz_presaberes.html` del material de la sesión, enlace compartido
en el chat.*

*Actividad que realizará el estudiante: Responder el quiz, calificarse,
exportar su resultado a PDF y conservarlo para compararlo con el quiz de
cierre.*

2.  **Construcción del conocimiento — Java y su ecosistema + Hola Mundo**

*Actividad: Pregunta detonadora "¿Qué idioma habla tu computadora?" y
explicación breve del ecosistema (JDK, compilador javac, bytecode, JVM).
Demostración guiada del primer programa y del rol de `class` y
`public static void main`. Se provoca un error a propósito (borrar un `;`)
para modelar la lectura serena de errores de compilación.*

*Tiempo estimado: 8 minutos (minutos 05–13)*

*Recursos: Compilador online compartido en pantalla, `clase.html` (guion).*

*Actividad que realizará el estudiante: Escribir y ejecutar su primer
programa en Java, romperlo a propósito y leer el mensaje de error en voz
alta.*

3.  **Construcción del conocimiento — Variables, constantes y tipos primitivos**

*Actividad: Explicación con la analogía de "cajitas con forma": cada variable
tiene un tipo que determina qué puede guardar. Demostración en vivo con
`String`, `int`, `double`, `char`, `boolean` y constante `final`, más
convenciones de nombres (camelCase, MAYÚSCULAS para constantes).*

*Tiempo estimado: 12 minutos (minutos 13–25)*

*Recursos: Ejemplos de código en vivo, cheat sheet del material.*

*Actividad que realizará el estudiante: Modificar el programa para declarar
variables con sus datos personales (nombre, edad, estatura, inicial,
¿estudiante?) e imprimirlas con etiquetas. Pregunta crítica guiada: ¿por qué
Java obliga a declarar tipos y Python no?*

4.  **Construcción del conocimiento — Conversiones (casting)**

*Actividad: Demostración de conversión implícita (int → double) y explícita
(double → int, con truncamiento), el caso clásico de la división entera
(7 / 2 = 3) y las conversiones texto ↔ número (`Integer.parseInt`,
`String.valueOf`).*

*Tiempo estimado: 8 minutos (minutos 25–33)*

*Recursos: Ejemplos de código en vivo.*

*Actividad que realizará el estudiante: Predecir salidas antes de ejecutar
(9.99 → int, 7/2 vs (double) 7/2) y verificar sus predicciones en el
compilador.*

5.  **Construcción del conocimiento — Operadores y expresiones**

*Actividad: Recorrido por operadores aritméticos (+, -, *, /, %), de
comparación (==, !=, >, <, >=, <=) y lógicos (&&, ||, !). Énfasis en la
diferencia entre `=` (asigna) y `==` (compara) y en que las comparaciones
producen valores boolean almacenables.*

*Tiempo estimado: 10 minutos (minutos 33–43)*

*Recursos: Ejemplos de código en vivo; mini-reto relámpago en el chat
(predecir `10 % 3 == 1 && 4 / 2 == 2`).*

*Actividad que realizará el estudiante: Resolver el mini-reto prediciendo el
resultado y luego comprobarlo ejecutando.*

***Pausa activa***

*Actividad: Pausa breve para descanso, hidratación y reinicio de foco.
Micro-check en el chat: "¿cuál fue el error más raro que te dio el
compilador?"*

*Tiempo estimado: 2 minutos (minutos 43–45)*

6.  **Práctica — Challenge "Arma el código" + práctica guiada**

*Actividad: Juego interactivo de arrastrar y soltar: reconstruir programas
Java desordenados en tres niveles (fácil, medio, difícil; los niveles medio y
difícil incluyen piezas trampa con errores de sintaxis). El docente modela el
nivel fácil y acompaña con preguntas guía: ¿por qué esa línea va antes?, ¿qué
pasa si se usa antes de declarar?*

*Tiempo estimado: 12 minutos (minutos 45–57)*

*Recursos: `challenge.html` del material de la sesión. Quien termina antes
continúa con los Ejercicios 1–3 de `ejercicios.html` en el compilador.*

*Actividad que realizará el estudiante: Completar al menos el nivel medio,
verificar su solución, exportar su resultado a PDF y, si logra 100%, copiar
el programa al compilador para comprobar la salida.*

7.  **Consolidación — Quiz de Final de Clase**

*Actividad: Resolución individual del Quiz de Final de Clase (10 preguntas
autocalificadas sobre estructura del programa, tipos, casting y operadores)
con retroalimentación inmediata por pregunta.*

*Tiempo estimado: 8 minutos (minutos 57–65)*

*Recursos: `quiz_final.html` del material de la sesión.*

*Actividad que realizará el estudiante: Responder, calificarse, revisar la
retroalimentación y exportar el resultado a PDF. Los PDF del quiz y del
challenge se suben al aula virtual como evidencia de la Actividad en clase —
Sesión 1.*

8.  **Reflexión, evaluación anónima y cierre**

*Actividad: Síntesis en tres frases (estructura, cajitas con forma,
expresiones), ticket de salida ("1 aprendizaje + 1 duda" en el chat),
invitación a la evaluación anónima de la sesión (formulario de evaluación
docente, sugerencias y quejas), presentación de la Guía de Aprendizaje 1 y
puente a la semana 2 ("el programa tomará decisiones y repetirá tareas").*

*Tiempo estimado: 5 minutos (minutos 65–70)*

*Recursos: `entregable.html` (plantilla de la Guía 1), formulario anónimo de
evaluación de la sesión (módulo `evaluacion_docente/` publicado en el
hosting), chat de la plataforma.*

*Actividad que realizará el estudiante: Escribir su ticket de salida,
responder la evaluación anónima (2 minutos, opcional pero recomendada) y
anotar la fecha límite de la Guía 1: antes de la Sesión 2 (18 de julio de
2026).*
