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

Sesión **[sincrónica]{.underline}** #8 — Sábado 29 de agosto de 2026, 11:10–12:20

**Tema:** Semana 8 — Spring Boot: configuración y primer servicio

+----------------+------------------------------------------------------------+
|                | ![Cabeza con                                               |
|                | engranajes](media/image4.png){width="0.4583333333333333in" |
|                | height="0.4583333333333333in"}**Información importante**   |
+================+============================================================+
| **Aprendizajes | - Configura dependencias y perfiles del proyecto.          |
| esperados**    |                                                            |
|                | - Implementa un servicio REST básico.                     |
|                |                                                            |
|                | - Prueba endpoints con herramientas simples.               |
+----------------+------------------------------------------------------------+
| **Contenidos   | - Dependencias con Spring Boot Starter.                    |
| temáticos**    |                                                            |
|                | - Anotaciones básicas: @SpringBootApplication,             |
|                |   @RestController.                                        |
|                |                                                            |
|                | - Endpoints GET simples y prueba con navegador/Postman.    |
|                |                                                            |
|                | - Integración del proyecto con GitHub.                     |
+----------------+------------------------------------------------------------+
| **Habilidades  | - Implementación de Endpoints: crear endpoints GET básicos |
| y destrezas**  |   utilizando las anotaciones fundamentales de Spring Boot, |
|                |   como @SpringBootApplication y @RestController.          |
|                |                                                            |
|                | - Validación y Sincronización: probar los endpoints        |
|                |   mediante herramientas como el navegador o Postman,       |
|                |   mientras se asegura la correcta integración del proyecto |
|                |   con GitHub.                                              |
+----------------+------------------------------------------------------------+
| **Valores y    | - Rigurosidad Técnica: valorar la correcta gestión de      |
| actitudes**    |   dependencias a través de Spring Boot Starter para        |
|                |   construir aplicaciones robustas.                         |
|                |                                                            |
|                | - Profesionalismo en el Control de Versiones: mantener un  |
|                |   hábito constante de sincronización con repositorios      |
|                |   remotos durante el desarrollo.                           |
+----------------+------------------------------------------------------------+
| **Productos    | *PDF del Quiz (modo Final) + PDF del Challenge (Actividad  |
| que evidencian | en clase — Sesión 8, 0.66 pts). El trabajo autónomo se     |
| el             | evidencia con la Guía de Aprendizaje 8: endpoint simple +  |
| aprendizaje**  | formulario del proyecto conectado a GitHub (1 pt).*        |
+----------------+------------------------------------------------------------+

  -----------------------------------------------------------------------
  ![Internet](media/image6.png){width="0.5104166666666666in"
  height="0.5104166666666666in"}**Desarrollo de la secuencia (70 minutos)**
  -----------------------------------------------------------------------

  -----------------------------------------------------------------------

> **Material de apoyo de la sesión:** carpeta HTML
> `Material_Sesion_Clase_8_HTML_18_semanas/` (hub `index.html` con quiz
> unificado, guía docente, ejercicios 100% reales en la máquina del
> estudiante, cheat sheet con comandos, troubleshooting y un anexo de
> adelanto, challenge con secuencia + simulador de una petición, y la
> página "Proyecto" que integra la guía y el entregable calificable).
> Requiere el proyecto Spring Boot generado en la Semana 7, corriendo en
> local. Postman es opcional: todas las rutas de hoy son GET y se prueban
> completamente desde el navegador.

1.  **Activación de presaberes — Quiz (modo Presaberes)**

*Actividad: Bienvenida + resolución individual del Quiz en línea, en modo
"Presaberes" (8 preguntas autocalificadas, sorteadas de un banco más grande,
sobre repaso de la Semana 7 y primeras intuiciones sobre servicios REST; no
cuenta para nota).*

*Tiempo estimado: 5 minutos (minutos 00–05)*

*Recursos: `quiz.html` del material de la sesión, enlace compartido en el
chat.*

*Actividad que realizará el estudiante: Elegir "Presaberes" en el menú
desplegable, responder, calificarse y exportar su resultado a PDF.*

2.  **Construcción del conocimiento — Repaso Semana 7, Starter y @RestController**

*Actividad: Repaso relámpago del proyecto de la Semana 7 (arranca pero
responde con la Whitelabel Error Page). Explicación de qué es un "Starter"
de Spring Boot (`spring-boot-starter-web`, ya presente en el `pom.xml`
desde la semana pasada) y elevator pitch de `@RestController` como la
anotación de la capa de presentación/controlador (Semanas 5–6) que
devuelve datos directamente, sin una vista del lado del servidor.*

*Tiempo estimado: 7 minutos (minutos 05–12)*

*Recursos: `clase.html` (guion), `pom.xml` del proyecto de la Semana 7.*

*Actividad que realizará el estudiante: Confirmar en su propio proyecto que
`spring-boot-starter-web` ya está en el `pom.xml` desde la semana pasada.*

3.  **Construcción del conocimiento — Primer @RestController en vivo**

*Actividad: Creación en vivo de una clase `BienvenidaController` con dos
métodos `@GetMapping`: uno fijo (`/api/saludo`) y uno con `@RequestParam`
(`/api/bienvenida`), ambientado en el Comedor Solidario Manos Unidas.
Explicación de cada anotación y su función.*

*Tiempo estimado: 12 minutos (minutos 12–24)*

*Recursos: `clase.html` bloque 3, código completo también disponible en
`cheatsheet.html` sección A.*

*Actividad que realizará el estudiante: Escribir la misma clase en su
proyecto de práctica, en paralelo al docente.*

4.  **Práctica guiada — Prueba en el navegador y con Postman**

*Actividad: Prueba en vivo de ambas rutas visitando las URLs en el
navegador, y luego la misma prueba en Postman (o la extensión "Thunder
Client" de VS Code), señalando el código de estado 200 OK y los headers de
la respuesta.*

*Tiempo estimado: 6 minutos (minutos 24–30)*

*Recursos: Postman o Thunder Client, `cheatsheet.html` pestaña de
comandos.*

*Actividad que realizará el estudiante: Probar sus propias rutas en el
navegador y en Postman/Thunder Client.*

***Pausa activa***

*Actividad: Pausa breve para descanso, hidratación y reinicio de foco.
Micro-check en el chat: "en una palabra, ¿qué anotación conecta una URL con
un método Java?"*

*Tiempo estimado: 2 minutos (minutos 30–32)*

5.  **Práctica guiada — Tu primer formulario web**

*Actividad: Construcción en vivo de `src/main/resources/static/index.html`
con un formulario HTML y JavaScript (`fetch`) que consulta el endpoint
`/api/bienvenida` y muestra la respuesta sin recargar la página. Se aclara
explícitamente que esto NO es Thymeleaf (Semana 10) y que ningún dato se
guarda todavía.*

*Tiempo estimado: 16 minutos (minutos 32–48)*

*Recursos: `clase.html` bloque 6, código completo en `cheatsheet.html`
sección A.*

*Actividad que realizará el estudiante: Construir el mismo formulario en su
proyecto de práctica y verificarlo en `localhost:8080`.*

6.  **Práctica — Challenge (secuencia + simulador de una petición)**

*Actividad: Exploración del challenge de la sesión, con dos pestañas: un
juego de secuencia ("Ordena los pasos" para publicar y probar un endpoint,
con pasos trampa creíbles) y un simulador que ilumina, paso a paso, el
recorrido de una petición GET (formulario → DispatcherServlet →
@RestController), ambientado en la Ludoteca Los Soñadores.*

*Tiempo estimado: 10 minutos (minutos 48–58)*

*Recursos: `challenge.html` del material de la sesión. Quien termina antes
continúa con `ejercicios.html` en su propia máquina.*

*Actividad que realizará el estudiante: Completar al menos el nivel medio de
"Ordena los pasos" y recorrer completo el simulador en ambos escenarios.*

7.  **Consolidación — Quiz (modo Final de clase)**

*Actividad: Resolución individual del Quiz en modo "Final de clase" (10
preguntas autocalificadas, sorteadas de un banco más grande, sobre
`@RestController`, `@GetMapping`, `@RequestParam` y cómo probar endpoints)
con retroalimentación inmediata por pregunta.*

*Tiempo estimado: 7 minutos (minutos 58–65)*

*Recursos: `quiz.html` del material de la sesión, esta vez en modo Final.*

*Actividad que realizará el estudiante: Elegir "Final de clase" en el menú
desplegable, responder, calificarse, revisar la retroalimentación y
exportar el resultado a PDF. Los PDF del quiz y del challenge se suben al
aula virtual como evidencia de la Actividad en clase — Sesión 8.*

8.  **Reflexión, evaluación anónima y cierre**

*Actividad: Síntesis en tres frases (`@RestController` + `@GetMapping`
conectan una URL con un método Java, el navegador/Postman prueban esa
ruta, y un formulario con `fetch` le habla al servicio sin recargar la
página), ticket de salida ("1 aprendizaje + 1 duda" en el chat), invitación
a la evaluación anónima de la sesión, presentación de la Guía de
Aprendizaje 8 (página "Proyecto"), y puente hacia la Semana 9 (repaso
general y Entrega Parcial 2).*

*Tiempo estimado: 5 minutos (minutos 65–70)*

*Recursos: `proyecto.html` (guía + plantilla del entregable), formulario
anónimo de evaluación de la sesión (módulo `evaluacion_docente/`), chat de
la plataforma.*

*Actividad que realizará el estudiante: Escribir su ticket de salida,
responder la evaluación anónima (opcional pero recomendada) y anotar la
fecha límite de la Guía 8: antes de la Sesión 9 (5 de septiembre de 2026).*
