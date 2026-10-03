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
| tablas y el uso de repositorios, continuando el módulo validado de    |
| Semana 11 antes de transferirlo a otro dominio.                      |
|                                                                       |
| **Actividades (Instrucciones):**                                      |
|                                                                       |
| 1.  **Repaso interactivo:**                                           |
|     - Estudiar las pestañas de `cheatsheet.html`: "Continuidad:       |
|       Jugador" aplica las anotaciones y repositorio al mismo          |
|       `taller-formularios` de la Semana 11; "De H2 a Neon" anticipa   |
|       la configuración de producción. La pestaña adicional          |
|       "Referencia: taller-jpa (Libro)" es un ejemplo completo aparte. |
|     - En `ejercicios.html`, resolver primero "Ejercicios", siguiendo  |
|       sus checkpoints. Usar después el "Kit de Acompañamiento de      |
|       Ejercicios" para consultar los archivos finales y su explicación.|
|       Quienes ya completaron Semana 11 continúan con `Jugador`,       |
|       conservando el formulario y sus validaciones mientras            |
|       reemplazan `List<Jugador>` por JPA. Quienes aún no llegaron a    |
|       Semana 11 usan el Kit para iniciar Jugador desde cero: generan  |
|       el proyecto en Spring Initializr, seleccionan allí las          |
|       dependencias y siguen el árbol completo de archivos. Ambos      |
|       recorridos incluyen validación, persistencia y                  |
|       `templates/error.html`. Después, la Práctica independiente de  |
|       Biblioteca y el Anexo `taller-jpa` transfieren lo aprendido. El |
|       paso final de H2 en archivo, perfiles `dev` y `prod`, y          |
|       `.gitignore` es obligatorio.                                     |
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
|   `Material_Sesion_Clase_12_HTML_18_semanas/`), con seis pestañas de |
|   ejercicios: Ejercicios, Kit de Acompañamiento, explicación del Kit,|
|   Kit Jugador desde cero, Práctica independiente de Biblioteca y     |
|   Anexo `taller-jpa`.                                                |
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
real —el mismo módulo de `Jugador` validado en la Semana 11— por una **base
de datos**, de modo que la información de la institución
que se atiende (guardería, casa hogar, dispensario u otra entidad sin fines
de lucro) deje de perderse al apagar la aplicación.

**Actividades (Instrucciones):**

1.  **Preparación:**
    -   Tener funcionando el módulo de registro con validación de la
        Semana 11 (formulario que guarda, lista que muestra y mensajes de
        error).
    -   **Si la Semana 11 ya está completa, continúa desde ese proyecto:**
        no vuelvas a crear el formulario ni a escribir de nuevo sus
        validaciones. Conserva `Jugador`, sus plantillas, rutas y mensajes;
        incorpora las piezas JPA y modifica únicamente el almacenamiento y
        las acciones necesarias para editar y borrar. En el Kit, las marcas
        "Ya viene de Semana 11", "Se incorpora en Semana 12",
        "Se modifica para usar JPA" e "Imprescindible" distinguen cada tipo
        de cambio.
    -   **Decidir primero, en palabras, cuál será la primera tabla:** qué
        entidad de la institución se va a guardar, qué campos tiene y cuál
        es el tipo de cada uno. La tabla de apoyo está al inicio de
        `proyecto.html`.
    -   Seguir la guía de ocho pasos incluida en
        `Material_Sesion_Clase_12_HTML_18_semanas/proyecto.html`:
        dependencias —incluida **Spring Boot DevTools**, que recarga la
        aplicación cuando se recompila el código; los cambios de plantilla
        solo requieren refrescar el navegador. `pom.xml` y los
        `application*.properties` siguen requiriendo reinicio manual—,
        entidad, repositorio, servicio sin lista,
        perfiles y
        H2 en archivo, pruebas del CRUD y del reinicio, verificación del
        segundo criterio, y publicación en GitHub.
    -   **No omitir los requisitos nuevos de persistencia:** `data-jpa`
        permite resolver los imports JPA y `JpaRepository`; si falta, esos
        imports quedan sin resolver y no compila. H2 aporta el driver local;
        si falta, la aplicación puede compilar pero falla al arrancar con
        `Failed to load driver class org.h2.Driver`. La entidad necesita
        `@Entity`, `@Id`, un id compatible con `JpaRepository` y constructor
        vacío: sin `@Entity` puede aparecer `Not a managed type`, sin `@Id`
        aparece `No identifier specified for entity` y sin constructor
        Hibernate no puede crear la entidad. `@GeneratedValue` permite que
        la base genere el id; si no se configura, el estudiante tendría que
        asignarlo manualmente. El repositorio debe quedar debajo del paquete
        base para que Spring lo encuentre, y los nombres de sus métodos
        derivados deben coincidir con campos reales; de lo contrario puede
        fallar la inyección o aparecer `No property ... found for type`. En
        Spring Boot 4, la consola requiere además su starter y la propiedad
        que la habilita; sin esa configuración `/h2-console` responde 404.
        Al editar, el formulario debe enviar el `id` oculto o se insertará
        otra fila. Para conservar datos al reiniciar usa H2 en archivo con
        `ddl-auto=update`; `mem` es temporal y `ddl-auto=create` vuelve a
        crear la tabla vacía. El driver PostgreSQL solo se necesita cuando
        se activa el perfil `prod` que lo declara.

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
-   Ejercicios progresivos de Jugador, Kit de Acompañamiento y explicación
    (`ejercicios.html`, pestañas 1–3) para aplicar JPA sobre Semana 11 sin
    rehacer las validaciones; Kit para iniciar Jugador desde cero (pestaña
    4), generado desde Spring Initializr con las dependencias seleccionadas
    en la página y siguiendo el árbol completo. Ambos Kits de Jugador
    incluyen `error.html`. La Práctica independiente de Biblioteca y el
    Anexo `taller-jpa` ocupan las pestañas 5 y 6.
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
