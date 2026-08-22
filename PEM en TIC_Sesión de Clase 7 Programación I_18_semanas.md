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

Sesión **[sincrónica]{.underline}** #7 — Sábado 22 de agosto de 2026, 11:10–12:20

**Tema:** Semana 7 — Entorno de desarrollo y Spring Boot

+----------------+------------------------------------------------------------+
|                | ![Cabeza con                                               |
|                | engranajes](media/image4.png){width="0.4583333333333333in" |
|                | height="0.4583333333333333in"}**Información importante**   |
+================+============================================================+
| **Aprendizajes | - Instala y configura el entorno de desarrollo.            |
| esperados**    |                                                            |
|                | - Comprende la estructura de un proyecto Spring Boot.     |
|                |                                                            |
|                | - Crea y ejecuta el primer proyecto web.                   |
+----------------+------------------------------------------------------------+
| **Contenidos   | - Requisitos técnicos: JDK, IDE, Maven/Gradle.             |
| temáticos**    |                                                            |
|                | - Spring Initializr y estructura del proyecto.             |
|                |                                                            |
|                | - Primer proyecto Spring Boot funcional.                   |
|                |                                                            |
|                | - Archivos de configuración (application.properties).     |
+----------------+------------------------------------------------------------+
| **Habilidades  | - Preparación del Entorno: configurar correctamente los    |
| y destrezas**  |   requisitos técnicos (JDK, IDE, herramientas de           |
|                |   construcción como Maven/Gradle).                        |
|                |                                                            |
|                | - Inicialización y Configuración: utilizar Spring          |
|                |   Initializr para estructurar proyectos y gestionar        |
|                |   archivos de configuración como application.properties.  |
+----------------+------------------------------------------------------------+
| **Valores y    | - Metodología Estructurada: valorar la importancia de una  |
| actitudes**    |   configuración inicial sólida para el éxito del           |
|                |   desarrollo a largo plazo.                                |
|                |                                                            |
|                | - Curiosidad Técnica: mostrar interés por entender cómo    |
|                |   las herramientas de automatización facilitan el          |
|                |   despliegue funcional de un proyecto.                     |
+----------------+------------------------------------------------------------+
| **Productos    | *PDF del Quiz (modo Final) + PDF del Challenge (Actividad  |
| que evidencian | en clase — Sesión 7, 0.66 pts). El trabajo autónomo se     |
| el             | evidencia con la Guía de Aprendizaje 7: proyecto Spring    |
| aprendizaje**  | Boot inicial corriendo en local y subido a GitHub (1 pt).* |
+----------------+------------------------------------------------------------+

  -----------------------------------------------------------------------
  ![Internet](media/image6.png){width="0.5104166666666666in"
  height="0.5104166666666666in"}**Desarrollo de la secuencia (70 minutos)**
  -----------------------------------------------------------------------

  -----------------------------------------------------------------------

> **Material de apoyo de la sesión:** carpeta HTML
> `Material_Sesion_Clase_7_HTML_18_semanas/` (hub `index.html` con quiz
> unificado, guía docente, ejercicios 100% reales en la máquina del
> estudiante, cheat sheet con comandos y troubleshooting, challenge con
> secuencia + simulador de arranque, y la página "Proyecto" que integra
> la guía y el entregable calificable). Requiere JDK 21 y VS Code ya
> instalados desde la Semana 1 — no hay instalación pesada nueva, solo
> agregar la extensión "Spring Boot Extension Pack".

1.  **Activación de presaberes — Quiz (modo Presaberes)**

*Actividad: Bienvenida + resolución individual del Quiz en línea, en modo
"Presaberes" (8 preguntas autocalificadas, sorteadas de un banco más grande,
sobre repaso conceptual y primeras intuiciones sobre Spring Boot; no cuenta
para nota).*

*Tiempo estimado: 5 minutos (minutos 00–05)*

*Recursos: `quiz.html` del material de la sesión, enlace compartido en el
chat.*

*Actividad que realizará el estudiante: Elegir "Presaberes" en el menú
desplegable, responder, calificarse y exportar su resultado a PDF.*

2.  **Construcción del conocimiento — Por qué Spring Boot y requisitos técnicos**

*Actividad: Elevator pitch sobre qué es un framework y qué resuelve Spring
Boot. Repaso de los 3 requisitos técnicos (JDK, IDE, Maven/Gradle) y por qué
no hace falta instalar Maven aparte gracias al Maven Wrapper incluido en
cada proyecto generado.*

*Tiempo estimado: 7 minutos (minutos 05–12)*

*Recursos: `clase.html` (guion), tabla comparativa de requisitos técnicos.*

*Actividad que realizará el estudiante: Verificar en su propia terminal que
`java -version` y `javac -version` respondan correctamente.*

3.  **Construcción del conocimiento — Spring Initializr en vivo**

*Actividad: Generación en vivo de un proyecto en start.spring.io, explicando
cada campo del formulario (Project, Language, Spring Boot, Group, Artifact,
Packaging, Java, Dependencies) y por qué se elige Spring Web como única
dependencia esta semana.*

*Tiempo estimado: 10 minutos (minutos 12–22)*

*Recursos: start.spring.io compartido en pantalla, tabla de parámetros en
`clase.html`.*

*Actividad que realizará el estudiante: Generar su propio proyecto de
práctica con los mismos parámetros, en paralelo al docente.*

4.  **Construcción del conocimiento — Recorrido de la estructura generada**

*Actividad: Apertura del proyecto en VS Code y recorrido de `pom.xml`, la
clase `...Application.java` (con `@SpringBootApplication`) y
`application.properties`, explicando la función de cada archivo.*

*Tiempo estimado: 8 minutos (minutos 22–30)*

*Recursos: `cheatsheet.html` sección C (estructura de carpetas), proyecto
recién generado.*

*Actividad que realizará el estudiante: Ubicar los 3 archivos clave en su
propio proyecto.*

***Pausa activa***

*Actividad: Pausa breve para descanso, hidratación y reinicio de foco.
Micro-check en el chat: "en una palabra, ¿qué archivo tiene el método
main?"*

*Tiempo estimado: 2 minutos (minutos 30–32)*

5.  **Práctica guiada — Primer arranque, lectura del log y application.properties**

*Actividad: Ejecución en vivo del proyecto (botón Run o `mvnw
spring-boot:run`), lectura de la línea "Started ... Application in X
seconds", visita a `localhost:8080` para interpretar la Whitelabel Error
Page como señal de éxito parcial (no de fracaso), y modificación de
`server.port` y `spring.application.name` en `application.properties` con
verificación del cambio.*

*Tiempo estimado: 13 minutos (minutos 32–45)*

*Recursos: `clase.html` bloque 6, `cheatsheet.html` sección D.*

*Actividad que realizará el estudiante: Ejecutar su propio proyecto, leer el
log, visitar `localhost:8080`, y repetir el cambio de puerto verificando el
resultado.*

6.  **Práctica — Challenge (secuencia + simulador de arranque)**

*Actividad: Exploración del challenge de la sesión, con dos pestañas: un
juego de secuencia ("Ordena los pasos" para poner a correr un proyecto
Spring Boot, con pasos trampa creíbles) y un simulador de arranque con un
log de consola realista en dos escenarios (arranque exitoso y error de
puerto ya ocupado), ambientado en la Biblioteca Comunitaria El Andén.*

*Tiempo estimado: 12 minutos (minutos 45–57)*

*Recursos: `challenge.html` del material de la sesión. Quien termina antes
continúa con `ejercicios.html` en su propia máquina.*

*Actividad que realizará el estudiante: Completar al menos el nivel medio de
"Ordena los pasos" y recorrer completo el simulador de arranque en ambos
escenarios.*

7.  **Consolidación — Quiz (modo Final de clase)**

*Actividad: Resolución individual del Quiz en modo "Final de clase" (10
preguntas autocalificadas, sorteadas de un banco más grande, sobre JDK,
Maven/Wrapper, Spring Initializr y application.properties) con
retroalimentación inmediata por pregunta.*

*Tiempo estimado: 8 minutos (minutos 57–65)*

*Recursos: `quiz.html` del material de la sesión, esta vez en modo Final.*

*Actividad que realizará el estudiante: Elegir "Final de clase" en el menú
desplegable, responder, calificarse, revisar la retroalimentación y
exportar el resultado a PDF. Los PDF del quiz y del challenge se suben al
aula virtual como evidencia de la Actividad en clase — Sesión 7.*

8.  **Reflexión, evaluación anónima y cierre**

*Actividad: Síntesis en tres frases (Spring Initializr genera el esqueleto,
la clase Application lo enciende, application.properties lo configura),
ticket de salida ("1 aprendizaje + 1 duda" en el chat), invitación a la
evaluación anónima de la sesión, presentación de la Guía de Aprendizaje 7
(página "Proyecto"), y puente hacia la Semana 8 (@RestController y rutas
propias).*

*Tiempo estimado: 5 minutos (minutos 65–70)*

*Recursos: `proyecto.html` (guía + plantilla del entregable), formulario
anónimo de evaluación de la sesión (módulo `evaluacion_docente/`), chat de
la plataforma.*

*Actividad que realizará el estudiante: Escribir su ticket de salida,
responder la evaluación anónima (opcional pero recomendada) y anotar la
fecha límite de la Guía 7: antes de la Sesión 8 (29 de agosto de 2026).*
