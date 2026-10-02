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

Sesión **[sincrónica]{.underline}** #12 — Sábado 3 de octubre de 2026, 11:10–12:20

**Tema:** Semana 12 — Unidad 6a: Persistencia de datos con JPA y Spring Data

+----------------+------------------------------------------------------------+
|                | ![Cabeza con                                               |
|                | engranajes](media/image4.png){width="0.4583333333333333in" |
|                | height="0.4583333333333333in"}**Información importante**   |
+================+============================================================+
| **Aprendizajes | - Conecta la aplicación a una base de datos relacional.    |
| esperados**    |                                                            |
|                | - Define entidades y repositorios con Spring Data JPA.     |
|                |                                                            |
|                | - Realiza operaciones CRUD básicas.                        |
+----------------+------------------------------------------------------------+
| **Contenidos   | - Introducción a JPA y Spring Data: qué problema resuelve  |
| temáticos**    |   un ORM y cómo Hibernate traduce objetos Java en filas.   |
|                |                                                            |
|                | - Entidades: @Entity, @Id, @Column y                       |
|                |   @GeneratedValue(strategy = GenerationType.IDENTITY).     |
|                |                                                            |
|                | - Repositorios con JpaRepository y métodos derivados por   |
|                |   nombre (findByTituloContainingIgnoreCase,                |
|                |   findByDisponibleTrue).                                   |
|                |                                                            |
|                | - Perfiles de Spring: application-dev.properties (H2       |
|                |   local) y application-prod.properties preparado para la   |
|                |   base de datos PostgreSQL gestionada en Neon.             |
|                |                                                            |
|                | - Operaciones CRUD desde el controlador: save, findAll,    |
|                |   findById, deleteById, con el repositorio inyectado por   |
|                |   constructor.                                             |
|                |                                                            |
|                | - Recarga automática con Spring Boot DevTools: qué se      |
|                |   actualiza solo (plantillas y código Java) y qué sigue    |
|                |   exigiendo detener y arrancar a mano (pom.xml y los       |
|                |   archivos de configuración).                              |
+----------------+------------------------------------------------------------+
| **Habilidades  | - Mapeo de Datos Justificado: explicar qué hace cada       |
| y destrezas**  |   anotación de persistencia y de qué paquete proviene, en  |
|                |   lugar de copiarla.                                       |
|                |                                                            |
|                | - Gestión de Repositorios y CRUD Real: implementar el      |
|                |   ciclo completo de alta, consulta, edición y baja sobre   |
|                |   una base de datos que conserva la información.           |
|                |                                                            |
|                | - Preparación de la Estructura de Perfiles: dejar lista la |
|                |   configuración de producción sin modificar el código.     |
+----------------+------------------------------------------------------------+
| **Valores y    | - Precisión Técnica: comprender el porqué de cada decisión |
| actitudes**    |   de mapeo y de configuración antes de escribirla.         |
|                |                                                            |
|                | - Visión a Futuro: reconocer que las decisiones de hoy     |
|                |   (estrategia de identificadores y perfiles) facilitan el  |
|                |   despliegue de la Semana 14.                              |
+----------------+------------------------------------------------------------+
| **Productos    | *PDF del Quiz (modo Final) + PDF del Challenge (Actividad  |
| que evidencian | en clase — Sesión 12, 0.66 pts). El trabajo autónomo se    |
| el             | evidencia con la Guía de Aprendizaje 12: módulo CRUD del   |
| aprendizaje**  | proyecto funcionando contra una base de datos que conserva |
|                | los registros al reiniciar, publicado en GitHub (1 pt).*   |
+----------------+------------------------------------------------------------+

  -----------------------------------------------------------------------
  ![Internet](media/image6.png){width="0.5104166666666666in"
  height="0.5104166666666666in"}**Desarrollo de la secuencia (70 minutos)**
  -----------------------------------------------------------------------

  -----------------------------------------------------------------------

> **Material de apoyo de la sesión:** carpeta HTML
> `Material_Sesion_Clase_12_HTML_18_semanas/` (hub `index.html` con quiz
> unificado, guía docente, ocho ejercicios en escalera con Kit de doce
> archivos completos, cheat sheet de dos pestañas —"Conceptos JPA" y "De H2
> a Neon"—, challenge con clasificación de piezas y simulador de
> persistencia, y la página "Proyecto" que integra la guía paso a paso y el
> entregable calificable). Requiere el módulo de registro construido en las
> Semanas 10 y 11.
>
> **Alcance de la sesión:** esta es la sesión en la que se cumple la promesa
> hecha desde la Semana 8. Hasta ahora los datos vivían en una lista dentro
> del servicio y se perdían al apagar la aplicación; al terminar esta sesión
> los registros **sobreviven al reinicio**. El trabajo se realiza contra una
> base de datos H2 local (primero en memoria, para evidenciar el problema, y
> luego en archivo, para resolverlo). La autenticación corresponde a la
> Semana 13 y el despliegue en producción a la Semana 14.
>
> **Nota sobre el despliegue (cambio respecto de lo anunciado antes):** la
> aplicación se alojará en **Render**, pero la base de datos PostgreSQL
> vivirá en **Neon**, porque la base de datos gratuita de Render es temporal
> y se elimina, lo que pondría en riesgo el proyecto antes de la
> presentación final. Por eso en esta sesión se crean ya los perfiles de
> Spring: en la Semana 14 la misma aplicación se conectará a Neon **sin
> modificar una sola línea de Java**, cambiando únicamente la configuración
> del perfil.

1.  **Activación de presaberes — Quiz (modo Presaberes)**

*Actividad: Bienvenida y resolución individual del Quiz en línea en modo
"Presaberes" (8 preguntas autocalificadas, sorteadas de un banco más grande,
con las opciones barajadas en cada intento). Se abre con una pregunta
incómoda: ¿dónde están los registros que la aplicación guardó la semana
pasada, después de apagarla?*

*Tiempo estimado: 5 minutos (minutos 00–05)*

*Recursos: `quiz.html` del material de la sesión, enlace compartido en el
chat.*

*Actividad que realizará el estudiante: Elegir "Presaberes" en el menú
desplegable, responder y calificarse.*

2.  **Construcción del conocimiento — Demostración del problema y qué resuelve un ORM**

*Actividad: Demostración en vivo con el módulo de la Semana 11: se registran
dos datos, se detiene la aplicación, se vuelve a arrancar y la lista aparece
vacía. Esa imagen sustituye cualquier explicación sobre por qué hace falta
una base de datos. A continuación se introduce el concepto ancla de la
sesión: qué es un ORM, cómo Hibernate traduce un objeto Java en una fila de
una tabla, y qué sentencias SQL deja de escribir el programador gracias a
ello. Se agregan al pom.xml las dependencias spring-boot-starter-data-jpa y
el driver de H2, y junto a ellas spring-boot-devtools, que a partir de esta
sesión evita tener que detener y recompilar el proyecto tras cada cambio: el
docente modifica un texto de una plantilla y muestra que basta con refrescar
el navegador. Se advierte de inmediato la excepción que más confunde: los
cambios en pom.xml y en los archivos application*.properties siguen
requiriendo un reinicio manual.*

*Tiempo estimado: 9 minutos (minutos 05–14)*

*Recursos: `clase.html` bloque 2, `cheatsheet.html` pestaña "Conceptos JPA",
proyecto de demostración `taller-jpa` con las dependencias ya descargadas.*

*Actividad que realizará el estudiante: Agregar las tres dependencias a su
proyecto de práctica, confirmar que sigue arrancando y comprobar la recarga
automática cambiando un texto de una plantilla.*

3.  **Construcción del conocimiento — Entidad, repositorio y las dos familias de anotaciones**

*Actividad: Conversión de una clase ordinaria en entidad, nombrando en voz
alta el paquete de cada anotación al escribir su import: @Entity, @Id,
@GeneratedValue(strategy = GenerationType.IDENTITY) y @Column, todas de
jakarta.persistence. Se explica por qué se elige IDENTITY: funciona igual en
H2 y en PostgreSQL, de modo que la entidad no tendrá que cambiar en la
Semana 14. Se advierte que sobre la misma clase conviven ahora dos familias
de anotaciones —jakarta.persistence, que dice cómo se guarda el dato, y
jakarta.validation.constraints de la Semana 11, que dice qué dato se
acepta—. Luego se crea el repositorio como una interfaz vacía que extiende
JpaRepository, y se muestra que Spring escribe su implementación durante el
arranque; se agregan dos métodos derivados por nombre para evidenciar que la
consulta se deduce del nombre del método.*

*Tiempo estimado: 14 minutos (minutos 14–28)*

*Recursos: `clase.html` bloque 3, `cheatsheet.html` (tabla "anotación →
import completo → error si falta"), Kit de archivos completos de
`ejercicios.html`.*

*Actividad que realizará el estudiante: Anotar su entidad y crear su
repositorio en paralelo al docente.*

***Pausa activa***

*Actividad: Pausa breve para descanso, hidratación y reinicio de foco.
Micro-check en el chat: "¿de qué paquete viene @Entity y de cuál @NotBlank?"*

*Tiempo estimado: 2 minutos (minutos 28–30)*

4.  **Construcción del conocimiento — Errores provocados a propósito y el CRUD completo**

*Actividad: Se provocan deliberadamente los fallos que no producen mensajes
claros, porque son los que harán perder horas al estudiante si no los
reconoce: quitar @Id (la aplicación no arranca y el registro dice "No
identifier specified for entity"), eliminar el constructor vacío tras haber
escrito uno con parámetros, retirar el driver de H2 y escribir mal el nombre
de un método derivado. Cada error se lee en el registro de arranque,
señalando qué línea del mensaje importa. Se completa después el ciclo CRUD
—save, findAll, findById, deleteById— inyectando el repositorio por
constructor, y se aclara por qué findById devuelve Optional y cómo se
resuelve con .orElseThrow(). Se abre la consola de H2 en /h2-console para
ver la tabla real con sus filas.*

*Tiempo estimado: 10 minutos (minutos 30–40)*

*Recursos: `clase.html` bloque 4, `cheatsheet.html` (tabla de errores
comunes: síntoma → causa → arreglo).*

*Actividad que realizará el estudiante: Reproducir al menos uno de los
errores en su propio proyecto, leer el mensaje y repararlo.*

5.  **Práctica guiada — Cumplir la promesa: H2 en archivo y perfiles de Spring**

*Actividad: Momento central de la sesión. Se demuestra que con la dirección
jdbc:h2:mem: los datos siguen desapareciendo al reiniciar, y se cambia a
jdbc:h2:file:./datos/biblioteca para que persistan de verdad; se reinicia la
aplicación delante del grupo —deteniéndola a mano con Ctrl+C, no dejando que
DevTools la reinicie sola, porque aquí el apagado deliberado es justamente la
prueba— y los registros siguen ahí. Se recuerda también que estos archivos de
configuración son de los que DevTools no recarga. Se advierte además
la trampa silenciosa de la semana: con ddl-auto=create la tabla se
reconstruye vacía en cada arranque aunque la dirección apunte a un archivo.
Se crean finalmente los tres archivos de configuración —application.properties,
que elige el perfil; application-dev.properties, con H2; y
application-prod.properties, con los marcadores ${DB_URL}, ${DB_USER} y
${DB_PASSWORD} para Neon— y se agrega la carpeta de datos al .gitignore.*

*Tiempo estimado: 10 minutos (minutos 40–50)*

*Recursos: `clase.html` bloque 5, `cheatsheet.html` pestaña "De H2 a Neon"
(tabla comparativa H2 local frente a PostgreSQL en Neon).*

*Actividad que realizará el estudiante: Cambiar la dirección de su base de
datos, reiniciar y comprobar con sus propios ojos que el registro sobrevive.*

6.  **Práctica — Ejercicios en escalera**

*Actividad: Trabajo autónomo sobre el proyecto de práctica `taller-jpa`
(Biblioteca Comunitaria Semilla, entidad Libro), con acompañamiento del
docente en el chat o en salas. El docente circula atento a los errores
recogidos en la tabla de la guía docente. Quien avance, inicia la guía del
proyecto real.*

*Tiempo estimado: 6 minutos (minutos 50–56)*

*Recursos: `ejercicios.html` (ocho ejercicios con pista y solución, y el Kit
de doce archivos completos con su ruta, su línea package y todos sus
import).*

*Actividad que realizará el estudiante: Resolver los ejercicios posibles en
el tiempo disponible y dejar el resto como trabajo autónomo; el Ejercicio 8
—H2 en archivo y perfiles— es el imprescindible.*

7.  **Práctica — Challenge**

*Actividad: Resolución del challenge de la sesión, ambientado en el Comedor
Infantil El Girasol, con dos pestañas: la primera clasifica cada anotación,
método o línea de configuración en la caja que le corresponde (entidad,
repositorio, servicio o controlador, y archivo de configuración), con piezas
trampa en los niveles medio y difícil; la segunda es un simulador que
recorre el viaje de un save() por las capas y compara los dos escenarios de
la semana, evidenciando que con la base en memoria el conteo de filas
regresa a cero tras el reinicio y con la base en archivo no.*

*Tiempo estimado: 6 minutos (minutos 56–62)*

*Recursos: `challenge.html` del material de la sesión.*

*Actividad que realizará el estudiante: Completar al menos el nivel medio de
la primera pestaña, recorrer los dos escenarios del simulador y exportar su
PDF.*

8.  **Consolidación — Quiz (modo Final de clase)**

*Actividad: Resolución individual del Quiz en modo "Final de clase" (12
preguntas autocalificadas sobre el papel del ORM, las anotaciones de
persistencia y sus paquetes, los métodos de JpaRepository, Optional, los
perfiles y la diferencia entre base en memoria y base en archivo), con
retroalimentación inmediata por pregunta y las opciones barajadas en cada
intento.*

*Tiempo estimado: 6 minutos (minutos 62–68)*

*Recursos: `quiz.html` del material de la sesión, esta vez en modo Final.*

*Actividad que realizará el estudiante: Responder, calificarse, revisar la
retroalimentación y exportar el resultado a PDF. Los PDF del quiz y del
challenge se suben al aula virtual como evidencia de la Actividad en clase —
Sesión 12.*

9.  **Reflexión, evaluación anónima y cierre**

*Actividad: Síntesis en tres frases (la entidad describe la tabla, el
repositorio hace el trabajo sin que nadie lo escriba, y el perfil decide
contra qué base de datos se trabaja sin tocar el código), ticket de salida
en el chat donde cada estudiante indica qué entidad de su institución real
será su primera tabla, invitación a la evaluación anónima de la sesión,
presentación de la Guía de Aprendizaje 12 y puente hacia la Semana 13
(autenticación, roles y renderizado condicional).*

*Tiempo estimado: 2 minutos (minutos 68–70)*

*Recursos: `proyecto.html` (guía y plantilla del entregable), formulario
anónimo de evaluación de la sesión (módulo `evaluacion_docente/`), chat de
la plataforma.*

*Actividad que realizará el estudiante: Escribir su ticket de salida,
responder la evaluación anónima (opcional pero recomendada) y anotar la
fecha límite de la Guía 12: antes de la Sesión 13 (10 de octubre de 2026).*
