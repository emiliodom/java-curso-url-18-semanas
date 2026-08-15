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

Sesión **[sincrónica]{.underline}** #5 — Sábado 8 de agosto de 2026, 11:10–12:20

**Tema:** Semana 5 — Patrones de diseño y arquitectura web (MVC)

+----------------+------------------------------------------------------------+
|                | ![Cabeza con                                               |
|                | engranajes](media/image4.png){width="0.4583333333333333in" |
|                | height="0.4583333333333333in"}**Información importante**   |
+================+============================================================+
| **Aprendizajes | - Comprende el propósito de los patrones de diseño.        |
| esperados**    |                                                            |
|                | - Aplica el patrón MVC de forma conceptual y práctica.     |
|                |                                                            |
|                | - Distingue responsabilidades entre capas de la            |
|                |   aplicación.                                              |
+----------------+------------------------------------------------------------+
| **Contenidos   | - Introducción a los patrones de diseño de software.       |
| temáticos**    |                                                            |
|                | - Patrón MVC: Modelo, Vista, Controlador.                  |
|                |                                                            |
|                | - Separación de responsabilidades.                         |
|                |                                                            |
|                | - Organización de carpetas en un proyecto web.              |
+----------------+------------------------------------------------------------+
| **Habilidades  | - Arquitectura de Software: identificar y aplicar el       |
| y destrezas**  |   patrón Modelo-Vista-Controlador (MVC) para separar las   |
|                |   responsabilidades del sistema.                           |
|                |                                                            |
|                | - Estructuración de Proyectos: organizar correctamente las |
|                |   carpetas y archivos en un proyecto web para garantizar   |
|                |   su escalabilidad.                                        |
+----------------+------------------------------------------------------------+
| **Valores y    | - Orden Lógico: valorar la separación de responsabilidades |
| actitudes**    |   como un estándar profesional para la mantenibilidad del  |
|                |   código.                                                  |
|                |                                                            |
|                | - Visión Analítica: desarrollar la capacidad de diseñar la |
|                |   estructura de una aplicación antes de escribir la lógica |
|                |   detallada.                                               |
+----------------+------------------------------------------------------------+
| **Productos    | *PDF del Quiz de Final de Clase + PDF del Challenge        |
| que evidencian | "Clasifica las piezas" (Actividad en clase — Sesión 5,     |
| el             | 0.66 pts). El trabajo autónomo se evidencia con la Guía    |
| aprendizaje**  | de Aprendizaje 5: diagrama MVC del proyecto (1 pt), que    |
|                | además cuenta como Avance del Proyecto — ★ Entrega Parcial |
|                | 1: propuesta con estructura MVC en GitHub (5 pts).*        |
+----------------+------------------------------------------------------------+

  -----------------------------------------------------------------------
  ![Internet](media/image6.png){width="0.5104166666666666in"
  height="0.5104166666666666in"}**Desarrollo de la secuencia (70 minutos)**
  -----------------------------------------------------------------------

  -----------------------------------------------------------------------

> **Material de apoyo de la sesión:** carpeta HTML
> `Material_Sesion_Clase_5_HTML_18_semanas/` (hub `index.html` con guía
> docente, quizzes, ejercicios, cheat sheet, challenge de clasificación,
> guía del proyecto y entregable, todos con exportación a PDF). Sesión
> 100% conceptual: no requiere instalar nada nuevo (la implementación en
> Spring Boot empieza en la Semana 7). Sí requiere el repositorio del
> proyecto ya publicado (Semanas 3–4) para la Entrega Parcial 1.

1.  **Activación de presaberes — Quiz de Presaberes**

*Actividad: Bienvenida + resolución individual del Quiz de Presaberes en línea
(8 preguntas autocalificadas sobre intuición de "separar responsabilidades" y
repaso de ramas/Pull Requests de la Semana 4; no cuenta para nota).*

*Tiempo estimado: 5 minutos (minutos 00–05)*

*Recursos: `quiz_presaberes.html` del material de la sesión, enlace compartido
en el chat.*

*Actividad que realizará el estudiante: Responder el quiz, calificarse y
exportar su resultado a PDF.*

2.  **Construcción del conocimiento — El problema: un programa donde todo está mezclado**

*Actividad: Presentación de un pseudo-código "todo en un solo bloque" (validar,
guardar y mostrar mezclados) para evidenciar el problema de no separar
responsabilidades. Pregunta detonadora sobre qué pasaría si la misma
validación tuviera que copiarse en varias pantallas.*

*Tiempo estimado: 10 minutos (minutos 05–15)*

*Recursos: Pseudo-código en pantalla, `clase.html` (guion).*

*Actividad que realizará el estudiante: Identificar, en el ejemplo, qué
partes no deberían estar mezcladas.*

3.  **Construcción del conocimiento — La analogía del restaurante + las 3 capas de MVC**

*Actividad: Presentación de la analogía del restaurante (cocina = Modelo,
menú/mesas = Vista, mesero = Controlador) con una tabla comparativa, y
segundo ejemplo de refuerzo (biblioteca) si el grupo lo requiere.*

*Tiempo estimado: 12 minutos (minutos 15–27)*

*Recursos: `clase.html` (guion con la tabla de la analogía).*

*Actividad que realizará el estudiante: Explicar con sus propias palabras,
en el chat, qué capa corresponde a cada rol del restaurante.*

4.  **Construcción del conocimiento — MVC aplicado al proyecto del curso, capa por capa**

*Actividad: Ejemplo completo de un registro de beneficiario organizado en
las 3 capas (Modelo con la clase y su regla, Vista con el formulario,
Controlador coordinando ambas), mostrando qué cambia y qué no cuando se
modifica una regla o el diseño visual.*

*Tiempo estimado: 10 minutos (minutos 27–37)*

*Recursos: Pseudo-código en pantalla, `clase.html` (guion).*

*Actividad que realizará el estudiante: Identificar, para su propia entidad
sin fines de lucro, un ejemplo de dato/regla, uno de pantalla y uno de
acción coordinada.*

***Pausa activa***

*Actividad: Pausa breve para descanso, hidratación y reinicio de foco.
Micro-check en el chat: "en una palabra, ¿qué hace el Controlador?"*

*Tiempo estimado: 2 minutos (minutos 37–39)*

5.  **Construcción del conocimiento — Antipatrones: controlador gordo y vista con lógica**

*Actividad: Presentación de dos antipatrones comunes con ejemplos de
pseudo-código: el "controlador gordo" (valida reglas de negocio él mismo) y
la "vista con lógica de negocio" (calcula datos en el HTML), junto con su
corrección.*

*Tiempo estimado: 10 minutos (minutos 39–49)*

*Recursos: Pseudo-código en pantalla, `clase.html` (guion).*

*Actividad que realizará el estudiante: Aplicar la pregunta de diagnóstico
rápido ("¿dato/regla, vista o decisión?") a los ejemplos mostrados.*

6.  **Práctica — Challenge "Clasifica las piezas" + práctica guiada**

*Actividad: Juego interactivo de clasificación (no de secuencia) en tres
niveles (fácil: piezas obvias en 3 cajas; medio: piezas + una caja de
antipatrones y una pieza trampa; difícil: casos con matices), con
retroalimentación instantánea en cada movimiento (notificaciones tipo
toast). El docente modela el nivel fácil y acompaña con preguntas guía.*

*Tiempo estimado: 8 minutos (minutos 49–57)*

*Recursos: `challenge.html` del material de la sesión. Quien termina antes
continúa con los Ejercicios 6–8 de `ejercicios.html`.*

*Actividad que realizará el estudiante: Completar al menos el nivel medio,
alcanzar el 100% verificando su resultado y exportarlo a PDF.*

7.  **Consolidación — Quiz de Final de Clase**

*Actividad: Resolución individual del Quiz de Final de Clase (10 preguntas
autocalificadas sobre MVC, responsabilidades por capa y antipatrones) con
retroalimentación inmediata por pregunta.*

*Tiempo estimado: 8 minutos (minutos 57–65)*

*Recursos: `quiz_final.html` del material de la sesión.*

*Actividad que realizará el estudiante: Responder, calificarse, revisar la
retroalimentación y exportar el resultado a PDF. Los PDF del quiz y del
challenge se suben al aula virtual como evidencia de la Actividad en clase —
Sesión 5.*

8.  **Reflexión, evaluación anónima y cierre**

*Actividad: Síntesis en tres frases (el Modelo guarda y decide, la Vista
muestra, el Controlador coordina), ticket de salida ("1 aprendizaje + 1
duda" en el chat), invitación a la evaluación anónima de la sesión,
presentación de la página `proyecto.html` (el hito más grande hasta ahora:
Entrega Parcial 1) y de la Guía de Aprendizaje 5, y puente a la semana 6
("la próxima semana verán arquitectura en capas: cómo se organizan
carpetas y archivos reales dentro de cada una de estas 3 capas").*

*Tiempo estimado: 5 minutos (minutos 65–70)*

*Recursos: `proyecto.html` y `entregable.html` (plantilla de la Guía 5),
formulario anónimo de evaluación de la sesión (módulo `evaluacion_docente/`),
chat de la plataforma.*

*Actividad que realizará el estudiante: Escribir su ticket de salida,
responder la evaluación anónima (opcional pero recomendada) y anotar la
fecha límite de la Guía 5: antes de la Sesión 6 (15 de agosto de 2026).*
