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

Sesión **[sincrónica]{.underline}** #2 — Sábado 18 de julio de 2026, 11:10–12:20

**Tema:** Semana 2 · Unidad 1b — Lógica, métodos y buenas prácticas

+----------------+------------------------------------------------------------+
|                | ![Cabeza con                                               |
|                | engranajes](media/image4.png){width="0.4583333333333333in" |
|                | height="0.4583333333333333in"}**Información importante**   |
+================+============================================================+
| **Aprendizajes | - Utiliza condicionales y ciclos para resolver problemas.  |
| esperados**    |                                                            |
|                | - Organiza el código en métodos reutilizables.            |
|                |                                                            |
|                | - Aplica indentación y convenciones de nomenclatura.       |
+----------------+------------------------------------------------------------+
| **Contenidos   | - Condicionales (if/else, switch) y ciclos (for, while).   |
| temáticos**    |                                                            |
|                | - Métodos: declaración, parámetros y retorno.              |
|                |                                                            |
|                | - Organización del código y buenas prácticas.              |
|                |                                                            |
|                | - Introducción a clases y objetos simples.                 |
+----------------+------------------------------------------------------------+
| **Habilidades  | - Control de Flujo: implementar estructuras condicionales  |
| y destrezas**  |   y cíclicas para gestionar la lógica de ejecución del      |
|                |   programa.                                                |
|                |                                                            |
|                | - Abstracción Básica: encapsular lógica reutilizable en    |
|                |   métodos con parámetros y valores de retorno.             |
|                |                                                            |
|                | - Diseño Orientado a Objetos: instanciar clases y          |
|                |   manipular objetos simples para modelar entidades del     |
|                |   mundo real.                                              |
+----------------+------------------------------------------------------------+
| **Valores y    | - Pensamiento Algorítmico: desarrollar la capacidad de     |
| actitudes**    |   descomponer problemas complejos en pasos pequeños y      |
|                |   secuenciales.                                            |
|                |                                                            |
|                | - Visión Sistémica: comprender cómo las piezas aisladas    |
|                |   (métodos) se integran para formar un sistema funcional.  |
|                |                                                            |
|                | - Responsabilidad Ética: escribir código no solo           |
|                |   funcional, sino legible y fácil de mantener por otros.   |
+----------------+------------------------------------------------------------+
| **Productos    | *PDF del Quiz de Final de Clase + PDF del Challenge        |
| que evidencian | "Arma el código" (Actividad en clase — Sesión 2, 0.66      |
| el             | pts). El trabajo autónomo se evidencia con la Guía de      |
| aprendizaje**  | Aprendizaje 2 (1 pt).*                                     |
+----------------+------------------------------------------------------------+

  -----------------------------------------------------------------------
  ![Internet](media/image6.png){width="0.5104166666666666in"
  height="0.5104166666666666in"}**Desarrollo de la secuencia (70 minutos)**
  -----------------------------------------------------------------------

  -----------------------------------------------------------------------

> **Material de apoyo de la sesión:** carpeta HTML
> `Material_Sesion_Clase_2_HTML_18_semanas/` (hub `index.html` con guía
> docente, quizzes, ejercicios, cheat sheet, challenge y entregable, todos
> con exportación a PDF). Compilador online (sin instalar nada):
> <https://www.educative.io/compilers/java>. Quien ya instaló su entorno en
> la Semana 1 puede usar VS Code.

1.  **Activación de presaberes — Quiz de Presaberes**

*Actividad: Bienvenida + resolución individual del Quiz de Presaberes en línea
(8 preguntas autocalificadas: repaso de variables/operadores de la Semana 1 y
diagnóstico de la intuición sobre decisiones y repeticiones; no cuenta para
nota).*

*Tiempo estimado: 5 minutos (minutos 00–05)*

*Recursos: `quiz_presaberes.html` del material de la sesión, enlace compartido
en el chat.*

*Actividad que realizará el estudiante: Responder el quiz, calificarse y
exportar su resultado a PDF.*

2.  **Construcción del conocimiento — Condicionales: if/else y switch**

*Actividad: Pregunta detonadora "¿cómo decide un semáforo qué luz encender?".
Demostración guiada de `if / else if / else` con el ejemplo del semáforo y
de `switch` con `break` para clasificar días de la semana. Se provoca un
error a propósito (quitar un `break`) para modelar el "fallthrough".*

*Tiempo estimado: 10 minutos (minutos 05–15)*

*Recursos: Compilador online compartido en pantalla, `clase.html` (guion).*

*Actividad que realizará el estudiante: Escribir y ejecutar el ejemplo del
semáforo, provocar el error del `switch` sin `break` y explicar en sus
palabras qué ocurrió.*

3.  **Construcción del conocimiento — Ciclos: for y while**

*Actividad: Explicación de `for` (cuando se sabe el número de repeticiones) y
`while` (cuando no se sabe de antemano), con ejemplos de tabla de multiplicar
y cuenta regresiva de saldo. Demostración deliberada de un ciclo infinito
(quitando el incremento) para reforzar la idea de "condición de salida
garantizada".*

*Tiempo estimado: 12 minutos (minutos 15–27)*

*Recursos: Ejemplos de código en vivo.*

*Actividad que realizará el estudiante: Predecir cuántas vueltas da un `for`
antes de ejecutarlo (identificando el error "off-by-one") y verificar en el
compilador.*

4.  **Construcción del conocimiento — Métodos: parámetros y retorno**

*Actividad: Explicación de métodos como "mini recetas reutilizables":
diferencia entre métodos `void` y métodos con retorno, uso de parámetros y
la palabra clave `return`, con los ejemplos `saludar`, `calcularPromedio` y
`esAprobatorio`.*

*Tiempo estimado: 8 minutos (minutos 27–35)*

*Recursos: Ejemplos de código en vivo; pregunta guía "¿qué parte de un
programa largo convertirían en método?".*

*Actividad que realizará el estudiante: Escribir un método propio con
parámetros y retorno, y llamarlo dos veces con datos distintos.*

***Pausa activa***

*Actividad: Pausa breve para descanso, hidratación y reinicio de foco.
Micro-check en el chat: "¿if/else, switch, for o while: cuál se te complicó
más?"*

*Tiempo estimado: 2 minutos (minutos 35–37)*

5.  **Construcción del conocimiento — Primeros pasos: clases y objetos simples**

*Actividad: Introducción a la Programación Orientada a Objetos con el
ejemplo `Mascota` (campos `nombre`, `edad` y método `hacerSonido()`).
Explicación de clase como "molde" y objeto como "instancia creada con `new`".
Conexión explícita con el proyecto del curso: en la Semana 12 cada entidad
del sistema será una clase similar.*

*Tiempo estimado: 10 minutos (minutos 37–47)*

*Recursos: Ejemplos de código en vivo.*

*Actividad que realizará el estudiante: Crear una clase simple propia, crear
dos objetos con datos distintos y acceder a sus campos/métodos con el punto.*

6.  **Práctica — Challenge "Arma el código" + práctica guiada**

*Actividad: Juego interactivo de arrastrar y soltar en tres niveles (fácil:
if/else; medio: ciclo for con piezas trampa; difícil: método + clase con
piezas trampa). El docente modela el nivel fácil y acompaña con preguntas
guía sobre orden de declaración y ubicación de la clase auxiliar.*

*Tiempo estimado: 10 minutos (minutos 47–57)*

*Recursos: `challenge.html` del material de la sesión. Quien termina antes
continúa con los Ejercicios 1–4 de `ejercicios.html`.*

*Actividad que realizará el estudiante: Completar al menos el nivel medio,
verificar su solución, exportar su resultado a PDF y comprobar la salida en
el compilador si logra 100%.*

7.  **Consolidación — Quiz de Final de Clase**

*Actividad: Resolución individual del Quiz de Final de Clase (10 preguntas
autocalificadas sobre condicionales, ciclos, métodos y clases) con
retroalimentación inmediata por pregunta.*

*Tiempo estimado: 8 minutos (minutos 57–65)*

*Recursos: `quiz_final.html` del material de la sesión.*

*Actividad que realizará el estudiante: Responder, calificarse, revisar la
retroalimentación y exportar el resultado a PDF. Los PDF del quiz y del
challenge se suben al aula virtual como evidencia de la Actividad en clase —
Sesión 2.*

8.  **Reflexión, evaluación anónima y cierre**

*Actividad: Síntesis en tres frases (decidir, repetir, organizar y modelar),
ticket de salida ("1 aprendizaje + 1 duda" en el chat), invitación a la
evaluación anónima de la sesión, presentación de la Guía de Aprendizaje 2 y
puente a la semana 3 ("aprenderán a guardar la historia de su código con Git
y GitHub").*

*Tiempo estimado: 5 minutos (minutos 65–70)*

*Recursos: `entregable.html` (plantilla de la Guía 2), formulario anónimo de
evaluación de la sesión (módulo `evaluacion_docente/`), chat de la
plataforma.*

*Actividad que realizará el estudiante: Escribir su ticket de salida,
responder la evaluación anónima (opcional pero recomendada) y anotar la
fecha límite de la Guía 2: antes de la Sesión 3 (25 de julio de 2026).*
