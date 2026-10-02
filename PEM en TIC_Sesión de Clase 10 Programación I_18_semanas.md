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

Sesión **[sincrónica]{.underline}** #10 — Sábado 19 de septiembre de 2026, 11:10–12:20

**Tema:** Semana 10 — Unidad 5a: Rutas, controladores y formularios

+----------------+------------------------------------------------------------+
|                | ![Cabeza con                                               |
|                | engranajes](media/image4.png){width="0.4583333333333333in" |
|                | height="0.4583333333333333in"}**Información importante**   |
+================+============================================================+
| **Aprendizajes | - Implementa rutas GET y POST en Spring Boot.              |
| esperados**    |                                                            |
|                | - Diseña formularios HTML integrados con Thymeleaf.        |
|                |                                                            |
|                | - Conecta formularios con controladores del backend.       |
+----------------+------------------------------------------------------------+
| **Contenidos   | - Controladores: @Controller y @GetMapping / @PostMapping. |
| temáticos**    |                                                            |
|                | - Formularios HTML con Thymeleaf.                          |
|                |                                                            |
|                | - Binding de datos entre formulario y objeto Java.         |
|                |                                                            |
|                | - Rutas parametrizadas y redirecciones.                    |
+----------------+------------------------------------------------------------+
| **Habilidades  | - Gestión de Solicitudes: implementar controladores        |
| y destrezas**  |   utilizando anotaciones clave como @Controller,           |
|                |   @GetMapping y @PostMapping.                              |
|                |                                                            |
|                | - Integración de Datos: vincular formularios HTML mediante |
|                |   Thymeleaf y realizar el binding de datos entre la        |
|                |   interfaz y objetos Java, además de gestionar rutas       |
|                |   parametrizadas y redirecciones.                          |
+----------------+------------------------------------------------------------+
| **Valores y    | - Precisión Técnica: valorar la correcta correspondencia   |
| actitudes**    |   entre las rutas definidas en el controlador y las        |
|                |   acciones ejecutadas en la interfaz de usuario.           |
|                |                                                            |
|                | - Orientación a la Experiencia de Usuario: mantener un     |
|                |   enfoque en la correcta captura y procesamiento de datos  |
|                |   desde los formularios web hacia el backend.              |
+----------------+------------------------------------------------------------+
| **Productos    | *PDF del Quiz (modo Final) + PDF del Challenge (Actividad  |
| que evidencian | en clase — Sesión 10, 0.66 pts). El trabajo autónomo se    |
| el             | evidencia con la Guía de Aprendizaje 10: módulo de         |
| aprendizaje**  | registro de la entidad principal del proyecto, funcionando |
|                | y publicado en GitHub (1 pt).*                             |
+----------------+------------------------------------------------------------+

  -----------------------------------------------------------------------
  ![Internet](media/image6.png){width="0.5104166666666666in"
  height="0.5104166666666666in"}**Desarrollo de la secuencia (70 minutos)**
  -----------------------------------------------------------------------

  -----------------------------------------------------------------------

> **Nota de calendario:** entre la Sesión 9 (5 de septiembre) y esta sesión
> transcurrieron dos semanas: el sábado 12 de septiembre no hubo clase por
> la semana de independencia.
>
> **Material de apoyo de la sesión:** carpeta HTML
> `Material_Sesion_Clase_10_HTML_18_semanas/` (hub `index.html` con quiz
> unificado, guía docente, ejercicios en escalera con Kit de archivos
> completos, cheat sheet de tres pestañas, challenge con clasificación de
> archivos y simulador de guardado, y la página "Proyecto" que integra la
> guía y el entregable calificable). Requiere el proyecto Spring Boot de las
> Semanas 7 a 9 corriendo en local.
>
> **Alcance de la sesión:** los datos que el formulario envía se guardan
> **en memoria** (una lista dentro de la capa de servicio) y se pierden al
> reiniciar la aplicación. La persistencia real en base de datos es el tema
> de la Semana 12. Conviene decirlo explícitamente durante la clase para que
> el estudiante no lo interprete como un error propio.

1.  **Activación de presaberes — Quiz (modo Presaberes)**

*Actividad: Bienvenida y resolución individual del Quiz en línea en modo
"Presaberes" (8 preguntas autocalificadas, sorteadas de un banco más
grande). Se retoma la promesa pendiente desde la Semana 8: hasta ahora el
formulario solo consultaba información; hoy aprenderá a enviarla y
guardarla.*

*Tiempo estimado: 5 minutos (minutos 00–05)*

*Recursos: `quiz.html` del material de la sesión, enlace compartido en el
chat.*

*Actividad que realizará el estudiante: Elegir "Presaberes" en el menú
desplegable, responder y calificarse.*

2.  **Construcción del conocimiento — @Controller frente a @RestController, y Thymeleaf**

*Actividad: Presentación de la distinción central de la semana: un método de
@RestController devuelve el contenido que verá el usuario, mientras que uno
de @Controller devuelve el nombre de una plantilla. La distinción se
demuestra en vivo dejando a propósito la anotación equivocada (el navegador
muestra la palabra "formulario" como texto) y corrigiéndola frente al grupo.
Se agrega después la dependencia spring-boot-starter-thymeleaf al pom.xml,
explicando que un Starter es un paquete de piezas ya combinadas, como se vio
en la Semana 7.*

*Tiempo estimado: 8 minutos (minutos 05–13)*

*Recursos: `clase.html` bloque 2, `cheatsheet.html` pestaña "Sintaxis de
hoy", proyecto de demostración con la dependencia ya descargada.*

*Actividad que realizará el estudiante: Agregar la dependencia de Thymeleaf
a su propio proyecto y ejecutarlo para confirmar que sigue arrancando.*

3.  **Construcción del conocimiento — La primera plantilla y el formulario en pantalla**

*Actividad: Creación de la carpeta `src/main/resources/templates/` y de la
primera plantilla, contrastándola con `static/`: lo que está en templates lo
procesa el servidor y solo se alcanza a través de un @Controller, mientras
que lo de static se entrega tal cual y sí tiene dirección propia. Se
construye el formulario con los tres atributos que lo enlazan al objeto:
th:object, th:field y th:action. Se provoca a propósito el error de
plantilla no encontrada, escribiendo mal el nombre del return, para que el
grupo lo reconozca cuando le ocurra.*

*Tiempo estimado: 12 minutos (minutos 13–25)*

*Recursos: `clase.html` bloque 3, Kit de archivos completos de
`ejercicios.html` (archivos 4 y 7).*

*Actividad que realizará el estudiante: Crear su carpeta templates y mostrar
su primer formulario en el navegador.*

***Pausa activa***

*Actividad: Pausa breve para descanso, hidratación y reinicio de foco.
Micro-check en el chat: "¿en qué carpeta va una plantilla de Thymeleaf?"*

*Tiempo estimado: 2 minutos (minutos 25–27)*

4.  **Práctica guiada — Recibir el formulario, guardar y redirigir**

*Actividad: Implementación del método @PostMapping que recibe el envío. Se
explica el binding: @ModelAttribute hace que Spring cree el objeto con su
constructor vacío y lo llene llamando a los setters, razón por la cual un
modelo sin setters guarda registros en blanco sin mostrar ningún error. El
método termina con una redirección en lugar de devolver una plantilla, y se
explica el porqué: si devolviera la vista directamente, la dirección del
navegador seguiría siendo el POST y al recargar se guardaría el registro por
segunda vez.*

*Tiempo estimado: 15 minutos (minutos 27–42)*

*Recursos: `clase.html` bloque 5, `cheatsheet.html` pestaña "El circuito del
formulario".*

*Actividad que realizará el estudiante: Implementar su propio método POST,
enviar el formulario y confirmar en la terminal que los datos llegan
completos.*

5.  **Práctica guiada — Listado y ruta parametrizada**

*Actividad: Uso de th:each para generar una fila por cada registro guardado
y de @PathVariable para abrir el detalle de uno solo. Al cerrar el bloque se
reinicia la aplicación en vivo para mostrar que la lista quedó vacía,
dejando explícito el límite de la semana y anticipando la Semana 12.*

*Tiempo estimado: 10 minutos (minutos 42–52)*

*Recursos: `clase.html` bloque 6, Kit de archivos completos (archivos 8 y 9).*

*Actividad que realizará el estudiante: Listar sus registros en una tabla y
comprobar qué ocurre al reiniciar el proyecto.*

6.  **Práctica — Challenge**

*Actividad: Resolución del challenge de la sesión, con dos pestañas: "¿Dónde
vive cada archivo?", que clasifica plantillas, archivos estáticos y clases
Java en sus carpetas correctas con piezas trampa de semanas futuras, y un
simulador del patrón guardar-redirigir-mostrar que contrasta dos escenarios
y muestra el registro duplicándose cuando falta la redirección. Ambientado
en el Huerto Comunitario La Cosecha.*

*Tiempo estimado: 8 minutos (minutos 52–60)*

*Recursos: `challenge.html` del material de la sesión.*

*Actividad que realizará el estudiante: Completar al menos el nivel medio de
la primera pestaña, recorrer los dos escenarios del simulador y exportar su
PDF.*

7.  **Consolidación — Quiz (modo Final de clase)**

*Actividad: Resolución individual del Quiz en modo "Final de clase" (12
preguntas autocalificadas sobre @Controller, Thymeleaf, @PostMapping,
binding, redirecciones y rutas parametrizadas), con retroalimentación
inmediata por pregunta.*

*Tiempo estimado: 7 minutos (minutos 60–67)*

*Recursos: `quiz.html` del material de la sesión, esta vez en modo Final.*

*Actividad que realizará el estudiante: Responder, calificarse, revisar la
retroalimentación y exportar el resultado a PDF. Los PDF del quiz y del
challenge se suben al aula virtual como evidencia de la Actividad en clase —
Sesión 10.*

8.  **Reflexión, evaluación anónima y cierre**

*Actividad: Síntesis en tres frases (el @Controller devuelve el nombre de
una plantilla; Thymeleaf la convierte en HTML con los datos del Model;
@PostMapping y @ModelAttribute convierten el formulario en un objeto Java),
ticket de salida en el chat donde cada estudiante indica qué entidad va a
registrar en su proyecto y con qué tres campos, invitación a la evaluación
anónima de la sesión, presentación de la Guía de Aprendizaje 10 y puente
hacia la Semana 11 (validación de datos y mensajes de error).*

*Tiempo estimado: 3 minutos (minutos 67–70)*

*Recursos: `proyecto.html` (guía y plantilla del entregable), formulario
anónimo de evaluación de la sesión (módulo `evaluacion_docente/`), chat de
la plataforma.*

*Actividad que realizará el estudiante: Escribir su ticket de salida,
responder la evaluación anónima (opcional pero recomendada) y anotar la
fecha límite de la Guía 10: antes de la Sesión 11 (26 de septiembre de
2026).*
