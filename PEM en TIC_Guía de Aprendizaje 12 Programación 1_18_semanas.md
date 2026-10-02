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

**GUÍA DE APRENDIZAJE AUTÓNOMO No. 12 — Formato 18 semanas**

![Transformación Digital -- Universidad Rafael
Landívar](media/image1.png){width="3.2336996937882763in"
height="1.3760411198600175in"}![gráficos de color
degradado](media/image2.png){width="8.268055555555556in"
height="1.5618055555555554in"}

![Libro abierto](media/image4.png){width="0.5729166666666666in"
height="0.5729166666666666in"}

**PARTE INTRODUCTORIA**

***"Un programa que olvida todo cuando se apaga no es una aplicación:
es un borrador."***

**Fecha de la sesión:** 3 de octubre de 2026 · **Entrega de esta guía:**
antes de la Sesión 13 (10 de octubre de 2026) · **Valor:** 1 punto. Esta
semana no tiene Entrega Parcial: los hitos del proyecto son las Semanas 5,
9, 14 y 17, y el siguiente es la Entrega Parcial 3, en la Semana 14.

+---------------------------------+------------------------------------+
| **Aprendizajes esperados**      | **Productos que evidencian el      |
|                                 | aprendizaje**                      |
+=================================+====================================+
| **Conecta la aplicación a una   | *Proyecto configurado con H2 en    |
| base de datos relacional.**     | archivo y perfiles dev/prod, cuyos |
|                                 | registros sobreviven al reinicio.* |
+---------------------------------+------------------------------------+
| **Define entidades y            | *Entidad anotada con               |
| repositorios con Spring Data    | jakarta.persistence y repositorio  |
| JPA.**                          | que extiende JpaRepository.*       |
+---------------------------------+------------------------------------+
| **Realiza operaciones CRUD      | *PDF de la plantilla de la Guía 12 |
| básicas.**                      | (`proyecto.html`, sección          |
|                                 | "Entregable") y módulo publicado   |
|                                 | en la rama development de GitHub.* |
+---------------------------------+------------------------------------+

**Habilidades y destrezas de la semana (guía):** Mapeo de Datos Justificado
(explicar qué hace cada anotación de persistencia y de qué paquete proviene,
en lugar de copiarla), Gestión de Repositorios y CRUD Real (implementar el
ciclo completo de alta, consulta, edición y baja sobre una base de datos que
conserva la información) y Preparación de la Estructura de Perfiles (dejar
lista la configuración de producción sin modificar el código).

**Valores y actitudes:** Precisión Técnica (comprender el porqué de cada
decisión de mapeo y de configuración antes de escribirla) y Visión a Futuro
(reconocer que las decisiones de hoy facilitan el despliegue de la Semana
14).

**Alcance de esta guía:** el trabajo se realiza contra una base de datos H2
en el propio equipo del estudiante. La autenticación por roles corresponde a
la Semana 13 y el despliegue en producción a la Semana 14. Lo que se evalúa
aquí es que los datos **se guarden de verdad y sobrevivan al reinicio**, y
que la entidad y el repositorio estén escritos de forma que no haya que
tocarlos para cambiar de base de datos.

**Nota sobre la base de datos del proyecto (cambio respecto de lo anunciado
antes):** la aplicación se alojará en **Render**, pero la base de datos
PostgreSQL vivirá en **Neon**, porque la base de datos gratuita de Render es
temporal y se elimina, lo que pondría en riesgo el proyecto antes de la
presentación final. Por eso esta guía pide crear ya los perfiles de Spring:
en la Semana 14 la misma aplicación se conectará a Neon **sin modificar una
sola línea de Java**.

+-----------------------------------------------------------------------+
| ![Libros](media/image6.png){width="0.4895833333333333in"              |
| height="0.4895833333333333in"}**PRIMERA PARTE: REFUERZO DE            |
| APRENDIZAJES**                                                        |
|                                                                       |
| **Propósito de la actividad:** Consolidar el mapeo de objetos a       |
| tablas y el uso de repositorios, practicando primero sobre un         |
| proyecto desechable antes de tocar el proyecto real.                  |
|                                                                       |
| **Actividades (Instrucciones):**                                      |
|                                                                       |
| 1.  **Repaso interactivo:**                                           |
|     - Estudiar las dos pestañas del cheat sheet                       |
|       (`Material_Sesion_Clase_12_HTML_18_semanas/cheatsheet.html`):   |
|       "Conceptos JPA", con la tabla de anotaciones y su import        |
|       completo, los métodos que ya trae `JpaRepository` y el          |
|       catálogo de errores frecuentes; y "De H2 a Neon", con la tabla  |
|       comparativa entre la base local y la de producción.             |
|     - Resolver los ocho ejercicios en escalera de `ejercicios.html`   |
|       con el proyecto de práctica `taller-jpa` (Biblioteca            |
|       Comunitaria Semilla, entidad `Libro`). El Ejercicio 4 muestra   |
|       con las propias manos el problema —la base en memoria olvida—   |
|       y el **Ejercicio 8 es el imprescindible**: H2 en archivo,       |
|       perfiles `dev` y `prod`, y la carpeta de datos en               |
|       `.gitignore`.                                                   |
|     - Completar ambas pestañas del challenge si no se terminaron en   |
|       clase, en especial el simulador que compara la base en memoria  |
|       con la base en archivo.                                         |
|     - Repetir el Quiz en modo Final con el botón "🔀 Nuevas           |
|       preguntas" como autoevaluación de estudio.                      |
|                                                                       |
| 2.  **Investigación breve:**                                          |
|     - Investigar qué otras estrategias de generación de               |
|       identificadores existen además de `IDENTITY` (por ejemplo       |
|       `SEQUENCE` y `AUTO`) y por qué en este curso se eligió          |
|       `IDENTITY`.                                                     |
|     - Investigar qué significa que una base de datos sea              |
|       "relacional" y qué diferencia hay entre una base **en memoria** |
|       y una base **en archivo o en servidor**.                        |
|                                                                       |
| **Recursos:**                                                         |
|                                                                       |
| - Material HTML de la Semana 12 (hub `index.html` de la carpeta       |
|   `Material_Sesion_Clase_12_HTML_18_semanas/`), incluido el **Kit de  |
|   archivos completos** con los doce archivos del módulo con           |
|   persistencia, cada uno con su ruta, su línea `package` y todos sus  |
|   `import`.                                                           |
| - Documentación de Spring Data JPA                                    |
|   (<https://spring.io/projects/spring-data-jpa>).                     |
| - Documentación de Neon (<https://neon.tech/docs>), para anticipar    |
|   la Semana 14.                                                       |
|                                                                       |
| **Evaluación (Formativa):**                                           |
|                                                                       |
| *Capacidad para explicar por qué los datos pueden seguir              |
| desapareciendo al reiniciar aunque la base ya esté configurada en     |
| archivo, y por qué `findById` devuelve un `Optional` en lugar del     |
| objeto directamente.*                                                 |
+=======================================================================+
| ![Piezas de                                                           |
| rompecabezas](media/image8.png){width="0.5833333333333334in"          |
| height="0.5833333333333334in"}                                        |
+-----------------------------------------------------------------------+

**SEGUNDA PARTE: CONSTRUCCIÓN DEL PROYECTO**

**Propósito de la actividad:** Sustituir la lista en memoria del proyecto
real por una **base de datos**, de modo que la información de la institución
que se atiende (guardería, casa hogar, dispensario u otra entidad sin fines
de lucro) deje de perderse al apagar la aplicación.

**Actividades (Instrucciones):**

1.  **Preparación:**
    -   Tener funcionando el módulo de registro con validación de la
        Semana 11 (formulario que guarda, lista que muestra y mensajes de
        error).
    -   **Decidir primero, en palabras, cuál será la primera tabla:** qué
        entidad de la institución se va a guardar, qué campos tiene y cuál
        es el tipo de cada uno. La tabla de apoyo está al inicio de
        `proyecto.html`.
    -   Seguir la guía de ocho pasos incluida en
        `Material_Sesion_Clase_12_HTML_18_semanas/proyecto.html`:
        dependencias —incluida **Spring Boot DevTools**, que recarga la
        aplicación sola tras cada cambio de código o plantilla, salvo en
        `pom.xml` y en los `application*.properties`, donde el reinicio
        sigue siendo manual—, entidad, repositorio, servicio sin lista,
        perfiles y
        H2 en archivo, pruebas del CRUD y del reinicio, verificación del
        segundo criterio, y publicación en GitHub.

2.  **Práctica de Código — completar la plantilla (sección "Entregable" de `proyecto.html`):**
    -   **Parte A — Tu entidad, explicada (20%):** qué entidad se eligió,
        qué campos tiene, qué tipo de dato es cada uno y por qué.
    -   **Parte B — Entidad y repositorio (25%):** las dos clases
        completas, con su `package`, todos sus `import` y las anotaciones
        de persistencia conviviendo con las de validación de la Semana 11.
    -   **Parte C — Servicio y configuración (25%):** el servicio ya sin la
        lista en memoria, con el repositorio inyectado por constructor, y
        los tres archivos de configuración de perfiles.
    -   **Parte D — Las pruebas y el doble criterio (20%):** evidencia de
        las cuatro operaciones (crear, listar, editar, borrar) y —la prueba
        decisiva— **el reinicio del que los datos salen intactos**, más la
        verificación de que ninguna línea de la entidad ni del repositorio
        depende de H2.

3.  **Reflexión (Parte E, 10%):**
    -   **Precisión técnica:** qué anotación costó más entender y cómo se
        explicaría ahora a un compañero con las propias palabras.
    -   **Visión a futuro:** qué tendría que cambiar en el proyecto para
        conectarlo a Neon en la Semana 14, y por qué esa lista debería ser
        muy corta.

**Recursos:**
-   Guía paso a paso y plantilla del entregable, en una sola página
    (`proyecto.html`), con exportación a PDF.
-   Kit de archivos completos (`ejercicios.html`, segunda pestaña) para
    copiar cualquier archivo faltante, cambiando el paquete y la entidad.
-   Cheat sheet de la semana, en especial la tabla de anotaciones con su
    import y el catálogo de errores frecuentes, donde está documentada la
    trampa silenciosa de `ddl-auto=create`.

**Evaluación (Sumativa — 1 punto):**
*Entrega del PDF de la plantilla completada (`Guia12_TuNombre.pdf`), antes
de la Sesión 13: Parte A 0.20 · Parte B 0.25 · Parte C 0.25 · Parte D 0.20 ·
Parte E 0.10. Se aplica el **doble criterio** de esta guía: (1) el módulo
funciona contra H2 local y los registros sobreviven al reinicio, y (2) la
entidad y el repositorio no requieren cambios de código para reconectarse a
PostgreSQL —solo cambia la configuración del perfil—. Se valora además que
la entidad corresponda a la institución real del estudiante (no una copiada
del ejemplo) y que cada archivo se entregue completo, con su `package` y sus
`import`. Entrega tardía: −25% por día.*

**Al terminar:** responde la **evaluación anónima de la sesión** (formulario
de evaluación docente, sugerencias y quejas). Es 100% anónima y ayuda a
mejorar el curso semana a semana.
