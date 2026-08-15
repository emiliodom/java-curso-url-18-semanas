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

Sesión **[sincrónica]{.underline}** #6 — Sábado 15 de agosto de 2026, 11:10–12:20

**Tema:** Semana 6 — Arquitectura en capas

+----------------+------------------------------------------------------------+
|                | ![Cabeza con                                               |
|                | engranajes](media/image4.png){width="0.4583333333333333in" |
|                | height="0.4583333333333333in"}**Información importante**   |
+================+============================================================+
| **Aprendizajes | - Diseña la arquitectura en capas de su aplicación.        |
| esperados**    |                                                            |
|                | - Comprende la relación entre servicios, repositorios y    |
|                |   controladores.                                           |
|                |                                                            |
|                | - Aplica principios básicos de bajo acoplamiento.          |
+----------------+------------------------------------------------------------+
| **Contenidos   | - Arquitectura en capas: presentación, negocio, datos.     |
| temáticos**    |                                                            |
|                | - Capas de servicio y repositorio.                         |
|                |                                                            |
|                | - Relación entre patrones y frameworks modernos.           |
|                |                                                            |
|                | - Revisión del diseño del proyecto personal.               |
+----------------+------------------------------------------------------------+
| **Habilidades  | - Implementación de Arquitectura en Capas: estructurar el   |
| y destrezas**  |   software diferenciando claramente las capas de           |
|                |   presentación, negocio y datos.                           |
|                |                                                            |
|                | - Integración de Patrones: vincular la arquitectura en      |
|                |   capas con el uso de frameworks modernos y revisar el      |
|                |   diseño técnico del proyecto personal.                    |
+----------------+------------------------------------------------------------+
| **Valores y    | - Visión Estratégica: valorar cómo la elección de una       |
| actitudes**    |   arquitectura influye directamente en la escalabilidad y  |
|                |   el mantenimiento del sistema.                            |
|                |                                                            |
|                | - Mentalidad Crítica: adoptar una postura reflexiva al      |
|                |   revisar y validar el diseño de los propios proyectos     |
|                |   ante los estándares actuales.                            |
+----------------+------------------------------------------------------------+
| **Productos    | *PDF del Quiz (modo Final) + PDF del Challenge (Actividad  |
| que evidencian | en clase — Sesión 6, 0.66 pts). El trabajo autónomo se     |
| el             | evidencia con la Guía de Aprendizaje 6: diagrama de capas  |
| aprendizaje**  | y entidades del proyecto (1 pt).*                          |
+----------------+------------------------------------------------------------+

  -----------------------------------------------------------------------
  ![Internet](media/image6.png){width="0.5104166666666666in"
  height="0.5104166666666666in"}**Desarrollo de la secuencia (70 minutos)**
  -----------------------------------------------------------------------

  -----------------------------------------------------------------------

> **Material de apoyo de la sesión:** carpeta HTML
> `Material_Sesion_Clase_6_HTML_18_semanas/` (hub `index.html` con quiz
> unificado, guía docente, ejercicios funcionales, cheat sheet con
> preparación de entorno, challenge con dos simuladores, y la página
> "Proyecto" que integra la guía y el entregable calificable). No requiere
> instalar nada nuevo esta sesión — es buen momento para verificar el
> entorno de la Semana 1 (VS Code + JDK) de cara a la Semana 7.

1.  **Activación de presaberes — Quiz (modo Presaberes)**

*Actividad: Bienvenida + resolución individual del Quiz en línea, en modo
"Presaberes" (8 preguntas autocalificadas, sorteadas de un banco más grande,
sobre repaso de MVC e intuición de la nueva arquitectura; no cuenta para
nota).*

*Tiempo estimado: 5 minutos (minutos 00–05)*

*Recursos: `quiz.html` del material de la sesión, enlace compartido en el
chat.*

*Actividad que realizará el estudiante: Elegir "Presaberes" en el menú
desplegable, responder, calificarse y exportar su resultado a PDF.*

2.  **Construcción del conocimiento — Repaso de MVC y el problema de un Modelo que hace demasiado**

*Actividad: Repaso relámpago de MVC (Semana 5) y pregunta detonadora sobre
por qué mezclar datos, reglas y acceso a la base de datos en una sola clase
se vuelve difícil de mantener. Introducción a la idea de dividir el
"Modelo" en Entidad, Repositorio y Servicio.*

*Tiempo estimado: 10 minutos (minutos 05–15)*

*Recursos: `clase.html` (guion), diagrama MVC de la Semana 5 como referencia.*

*Actividad que realizará el estudiante: Escuchar y anotar la analogía; no
hay entrega en este bloque.*

3.  **Construcción del conocimiento — Las 3 capas grandes + el chef y la bodega**

*Actividad: Extensión de la analogía del restaurante: el chef (Servicio)
aplica las recetas y decide qué pedir a la bodega (Repositorio), que solo
guarda y entrega ingredientes (Entidad). Presentación de las 3 capas
grandes: Presentación, Negocio y Datos.*

*Tiempo estimado: 12 minutos (minutos 15–27)*

*Recursos: Tabla comparativa restaurante↔aplicación en pantalla compartida.*

*Actividad que realizará el estudiante: Ubicar mentalmente sus propios
Modelos de la Semana 5 dentro de las 3 capas grandes.*

4.  **Construcción del conocimiento — Servicio vs. Repositorio y bajo acoplamiento**

*Actividad: Ejemplo aplicado (registro de un beneficiario) mostrando las
5 piezas completas. Explicación de la regla de bajo acoplamiento: el
Controlador solo le habla al Servicio, nunca directo al Repositorio.*

*Tiempo estimado: 10 minutos (minutos 27–37)*

*Recursos: Pseudo-código en pantalla, `cheatsheet.html` sección D.*

*Actividad que realizará el estudiante: Verificar mentalmente que su propio
diseño respete esta regla.*

***Pausa activa***

*Actividad: Pausa breve para descanso, hidratación y reinicio de foco.
Micro-check en el chat: "en una palabra, ¿qué hace el Repositorio?"*

*Tiempo estimado: 2 minutos (minutos 37–39)*

5.  **Construcción del conocimiento — Frameworks modernos, antipatrón "saltarse capas" y revisión del proyecto personal**

*Actividad: Vista previa de las anotaciones de Spring Boot (@Controller,
@Service, @Repository, @Entity) sin instalar nada. Presentación del
antipatrón "saltarse capas" (Controlador → Repositorio directo). Revisión
guiada del diseño MVC personal de cada estudiante, identificando qué parte
sería Entidad, Repositorio y Servicio.*

*Tiempo estimado: 10 minutos (minutos 39–49)*

*Recursos: `cheatsheet.html` secciones E y F, diagrama MVC propio de cada
estudiante (Semana 5).*

*Actividad que realizará el estudiante: Marcar en su propio diagrama qué
parte de su "Modelo" corresponde a cada una de las 3 piezas nuevas.*

6.  **Práctica — Challenge (dos simuladores) + práctica guiada**

*Actividad: Exploración del challenge de la sesión, con dos pestañas: un
juego de clasificación de piezas (Entidad/Repositorio/Servicio/
Presentación, con antipatrones) y un simulador funcional animado que
muestra, paso a paso, cómo viaja un dato real por las 4 capas de la
Clínica Veterinaria PetCare, en dos escenarios (caso exitoso y conflicto
de horario).*

*Tiempo estimado: 8 minutos (minutos 49–57)*

*Recursos: `challenge.html` del material de la sesión. Quien termina antes
continúa con `ejercicios.html`.*

*Actividad que realizará el estudiante: Completar al menos el nivel medio
de clasificación y recorrer completo el simulador funcional en ambos
escenarios.*

7.  **Consolidación — Quiz (modo Final de clase)**

*Actividad: Resolución individual del Quiz en modo "Final de clase" (10
preguntas autocalificadas, sorteadas de un banco más grande, sobre
arquitectura en capas, bajo acoplamiento y antipatrones) con
retroalimentación inmediata por pregunta.*

*Tiempo estimado: 8 minutos (minutos 57–65)*

*Recursos: `quiz.html` del material de la sesión, esta vez en modo Final.*

*Actividad que realizará el estudiante: Elegir "Final de clase" en el menú
desplegable, responder, calificarse, revisar la retroalimentación y
exportar el resultado a PDF. Los PDF del quiz y del challenge se suben al
aula virtual como evidencia de la Actividad en clase — Sesión 6.*

8.  **Reflexión, evaluación anónima y cierre**

*Actividad: Síntesis en tres frases (Entidad guarda el dato, Repositorio lo
guarda/recupera, Servicio decide con reglas), ticket de salida ("1
aprendizaje + 1 duda" en el chat), invitación a la evaluación anónima de la
sesión, presentación de la Guía de Aprendizaje 6 (página "Proyecto"), y
aviso de revisar la preparación del entorno antes de la Semana 7.*

*Tiempo estimado: 5 minutos (minutos 65–70)*

*Recursos: `proyecto.html` (guía + plantilla del entregable), formulario
anónimo de evaluación de la sesión (módulo `evaluacion_docente/`), chat de
la plataforma.*

*Actividad que realizará el estudiante: Escribir su ticket de salida,
responder la evaluación anónima (opcional pero recomendada) y anotar la
fecha límite de la Guía 6: antes de la Sesión 7 (22 de agosto de 2026).*
