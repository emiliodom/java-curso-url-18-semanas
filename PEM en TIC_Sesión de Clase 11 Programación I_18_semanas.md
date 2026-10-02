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

Sesión **[sincrónica]{.underline}** #11 — Sábado 26 de septiembre de 2026, 11:10–12:20

**Tema:** Semana 11 — Unidad 5b: Validación, errores y experiencia de usuario

+----------------+------------------------------------------------------------+
|                | ![Cabeza con                                               |
|                | engranajes](media/image4.png){width="0.4583333333333333in" |
|                | height="0.4583333333333333in"}**Información importante**   |
+================+============================================================+
| **Aprendizajes | - Aplica validaciones básicas en formularios.              |
| esperados**    |                                                            |
|                | - Maneja errores con mensajes claros al usuario.           |
|                |                                                            |
|                | - Diseña interfaces sencillas y accesibles.                |
+----------------+------------------------------------------------------------+
| **Contenidos   | - Validación con Bean Validation (@NotNull, @Size, etc.).  |
| temáticos**    |                                                            |
|                | - Manejo de errores y mensajes de retroalimentación.       |
|                |                                                            |
|                | - Buenas prácticas de UX en formularios web.               |
|                |                                                            |
|                | - Accesibilidad básica en HTML (aria, labels, contraste).  |
+----------------+------------------------------------------------------------+
| **Habilidades  | - Implementación de Validación: aplicar Bean Validation    |
| y destrezas**  |   (@NotNull, @Size, etc.) para asegurar la integridad de   |
|                |   los datos y gestionar errores con mensajes de            |
|                |   retroalimentación claros.                                |
|                |                                                            |
|                | - Optimización de Experiencia: aplicar buenas prácticas de |
|                |   UX en formularios web e integrar accesibilidad básica    |
|                |   mediante HTML (uso de ARIA, labels y contraste).         |
+----------------+------------------------------------------------------------+
| **Valores y    | - Empatía con el Usuario: valorar la accesibilidad y una   |
| actitudes**    |   retroalimentación clara como componentes esenciales para |
|                |   una experiencia de usuario inclusiva.                    |
|                |                                                            |
|                | - Rigor en la Calidad: comprometerse con la validación     |
|                |   exhaustiva de los datos para construir aplicaciones      |
|                |   robustas y confiables.                                   |
+----------------+------------------------------------------------------------+
| **Productos    | *PDF del Quiz (modo Final) + PDF del Challenge (Actividad  |
| que evidencian | en clase — Sesión 11, 0.66 pts). El trabajo autónomo se    |
| el             | evidencia con la Guía de Aprendizaje 11: formularios del   |
| aprendizaje**  | proyecto con validación y mensajes de error, publicados en |
|                | GitHub (1 pt).*                                            |
+----------------+------------------------------------------------------------+

  -----------------------------------------------------------------------
  ![Internet](media/image6.png){width="0.5104166666666666in"
  height="0.5104166666666666in"}**Desarrollo de la secuencia (70 minutos)**
  -----------------------------------------------------------------------

  -----------------------------------------------------------------------

> **Material de apoyo de la sesión:** carpeta HTML
> `Material_Sesion_Clase_11_HTML_18_semanas/` (hub `index.html` con quiz
> unificado, guía docente, ejercicios en escalera con Kit de archivos
> completos, cheat sheet de tres pestañas, challenge con clasificación de
> reglas y simulador de envío, y la página "Proyecto" que integra la guía y
> el entregable calificable). Requiere el módulo de registro construido en
> la Semana 10.
>
> **Alcance de la sesión:** los datos se siguen guardando en memoria y se
> pierden al reiniciar la aplicación; la persistencia en base de datos es el
> tema de la Semana 12. Esta sesión se ocupa de que los datos que entran
> sean correctos y de que el usuario entienda qué corregir cuando no lo son.

1.  **Activación de presaberes — Quiz (modo Presaberes)**

*Actividad: Bienvenida y resolución individual del Quiz en línea en modo
"Presaberes" (8 preguntas autocalificadas, sorteadas de un banco más
grande). Se abre con una pregunta provocadora: qué ocurre hoy si alguien
inscribe a una persona de 300 años o deja el nombre vacío.*

*Tiempo estimado: 5 minutos (minutos 00–05)*

*Recursos: `quiz.html` del material de la sesión, enlace compartido en el
chat.*

*Actividad que realizará el estudiante: Elegir "Presaberes" en el menú
desplegable, responder y calificarse.*

2.  **Construcción del conocimiento — Demostración del problema y dependencia de validación**

*Actividad: Demostración en vivo con el formulario de la Semana 10: se
envían datos sin sentido (nombre vacío, edad de 300 años) y se muestra el
registro guardado en la lista. Esa imagen sustituye a cualquier explicación
sobre por qué hay que validar. A continuación se agrega al pom.xml la
dependencia spring-boot-starter-validation, aclarando que las anotaciones no
vienen incluidas con spring-boot-starter-web y que, si falta, las
validaciones se ignoran sin mostrar ningún error.*

*Tiempo estimado: 7 minutos (minutos 05–12)*

*Recursos: `clase.html` bloque 2, proyecto de demostración con la
dependencia previamente descargada.*

*Actividad que realizará el estudiante: Agregar la dependencia a su propio
proyecto y ejecutarlo para confirmar que sigue arrancando.*

3.  **Construcción del conocimiento — Anotaciones, @Valid y BindingResult**

*Actividad: Anotación del modelo con Bean Validation (@NotBlank, @NotNull,
@Size, @Min, @Max), nombrando en voz alta el paquete de cada anotación
(jakarta.validation.constraints) al escribir su import. Se explica por qué
los campos numéricos de un formulario deben declararse como Integer y no
como int. Luego se activa la revisión en el controlador con @Valid y se lee
el resultado con BindingResult, provocando a propósito el error de colocar
BindingResult en una posición incorrecta. Se explica por qué, cuando hay
errores, se devuelve la plantilla en lugar de una redirección.*

*Tiempo estimado: 14 minutos (minutos 12–26)*

*Recursos: `clase.html` bloque 3, `cheatsheet.html` pestaña "Anotaciones y
paquetes", Kit de archivos completos de `ejercicios.html`.*

*Actividad que realizará el estudiante: Anotar su modelo y modificar su
método POST en paralelo al docente.*

***Pausa activa***

*Actividad: Pausa breve para descanso, hidratación y reinicio de foco.
Micro-check en el chat: "¿de qué paquete viene @NotBlank?"*

*Tiempo estimado: 2 minutos (minutos 26–28)*

4.  **Práctica guiada — Mostrar los errores sin perder los datos**

*Actividad: Incorporación en la plantilla de th:errors, th:errorclass y las
expresiones #fields para mostrar el mensaje de cada campo y un resumen de
errores al inicio del formulario. El momento central del bloque es la
comprobación de que, al fallar la validación, el usuario conserva todo lo
que ya había escrito y solo corrige lo señalado; se contrasta con lo que
ocurriría al usar una redirección. Se introduce el atributo novalidate para
poder probar la validación del servidor durante la clase.*

*Tiempo estimado: 14 minutos (minutos 28–42)*

*Recursos: `clase.html` bloque 5, `cheatsheet.html` pestaña "Mostrar errores
y accesibilidad".*

*Actividad que realizará el estudiante: Agregar los mensajes a su formulario
y comprobar, enviando un campo inválido, que los datos correctos no se
borran.*

5.  **Práctica guiada — Experiencia de usuario, accesibilidad y página de error**

*Actividad: Aplicación de accesibilidad básica: etiquetas label asociadas
por for/id, aria-describedby para ligar cada mensaje con su campo,
role="alert" en el resumen de errores, foco visible y estilos de error que
no dependan únicamente del color. Se discute brevemente cómo se escribe un
mensaje de error útil (qué campo, por qué y qué hacer). Se crea por último
templates/error.html, que Spring Boot utiliza automáticamente, y se
comprueba visitando una dirección inexistente.*

*Tiempo estimado: 10 minutos (minutos 42–52)*

*Recursos: `clase.html` bloque 6, Kit de archivos completos (archivos 8 y 10).*

*Actividad que realizará el estudiante: Asociar etiquetas y mensajes en su
formulario y crear su propia página de error con el nombre de su
institución.*

6.  **Práctica — Challenge**

*Actividad: Resolución del challenge de la sesión, con dos pestañas: "Elige
la validación correcta", donde se clasifican reglas expresadas en palabras
bajo la anotación que las implementa (con piezas trampa que no son
validación), y un simulador que compara el envío de datos válidos e
inválidos, evidenciando que con errores la petición nunca llega a la capa de
servicio. Ambientado en el Centro de Salud Buena Vida.*

*Tiempo estimado: 8 minutos (minutos 52–60)*

*Recursos: `challenge.html` del material de la sesión.*

*Actividad que realizará el estudiante: Completar al menos el nivel medio de
la primera pestaña, recorrer los dos escenarios del simulador y exportar su
PDF.*

7.  **Consolidación — Quiz (modo Final de clase)**

*Actividad: Resolución individual del Quiz en modo "Final de clase" (12
preguntas autocalificadas sobre anotaciones y sus paquetes, @Valid,
BindingResult, presentación de errores y accesibilidad), con
retroalimentación inmediata por pregunta.*

*Tiempo estimado: 7 minutos (minutos 60–67)*

*Recursos: `quiz.html` del material de la sesión, esta vez en modo Final.*

*Actividad que realizará el estudiante: Responder, calificarse, revisar la
retroalimentación y exportar el resultado a PDF. Los PDF del quiz y del
challenge se suben al aula virtual como evidencia de la Actividad en clase —
Sesión 11.*

8.  **Reflexión, evaluación anónima y cierre**

*Actividad: Síntesis en tres frases (las anotaciones declaran las reglas,
@Valid y BindingResult las revisan antes de guardar, y th:errors se las
explica al usuario sin borrarle lo escrito), ticket de salida en el chat
donde cada estudiante indica una regla de validación que su institución real
necesita y con qué anotación la implementaría, invitación a la evaluación
anónima de la sesión, presentación de la Guía de Aprendizaje 11 y puente
hacia la Semana 12 (persistencia con base de datos).*

*Tiempo estimado: 3 minutos (minutos 67–70)*

*Recursos: `proyecto.html` (guía y plantilla del entregable), formulario
anónimo de evaluación de la sesión (módulo `evaluacion_docente/`), chat de
la plataforma.*

*Actividad que realizará el estudiante: Escribir su ticket de salida,
responder la evaluación anónima (opcional pero recomendada) y anotar la
fecha límite de la Guía 11: antes de la Sesión 12 (3 de octubre de 2026).*
