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

**GUÍA DE APRENDIZAJE AUTÓNOMO No. 13 — Formato 18 semanas**

![Transformación Digital -- Universidad Rafael
Landívar](media/image1.png){width="3.2336996937882763in"
height="1.3760411198600175in"}![gráficos de color
degradado](media/image2.png){width="8.268055555555556in"
height="1.5618055555555554in"}

![Libro abierto](media/image4.png){width="0.5729166666666666in"
height="0.5729166666666666in"}

**PARTE INTRODUCTORIA**

***"Una aplicación sin puerta con llave no es pública: es vulnerable."***

**Fecha de la sesión:** 10 de octubre de 2026 · **Entrega de esta guía:**
antes de la Sesión 14 (17 de octubre de 2026) · **Valor:** 1 punto. Esta
semana no tiene Entrega Parcial: los hitos del proyecto son las Semanas 5,
9, 14 y 17, y el siguiente es la Entrega Parcial 3, en la Semana 14.

+---------------------------------+------------------------------------+
| **Aprendizajes esperados**      | **Productos que evidencian el      |
|                                 | aprendizaje**                      |
+=================================+====================================+
| **Implementa autenticación      | *Proyecto con login funcional      |
| básica con Spring Security.**   | (usuarios en la base de datos y    |
|                                 | contraseñas cifradas con BCrypt),  |
|                                 | con las claves entregadas por      |
|                                 | variables de entorno.*             |
+---------------------------------+------------------------------------+
| **Define roles de usuario y     | *Dos roles con rutas restringidas  |
| restringe acceso.**             | en SecurityConfig y comprobadas    |
|                                 | con ambos usuarios.*               |
+---------------------------------+------------------------------------+
| **Aplica renderizado            | *PDF de la plantilla de la Guía 13 |
| condicional según rol.**        | (`proyecto.html`, sección          |
|                                 | "Entregable"), con la nota escrita |
|                                 | de datos sensibles, y módulo       |
|                                 | publicado en la rama development   |
|                                 | de GitHub.*                        |
+---------------------------------+------------------------------------+

**Habilidades y destrezas de la semana (guía):** Gestión de seguridad y
control de vistas, e Higiene de secretos (identificar qué datos son
sensibles de cara al despliegue).

**Valores y actitudes:** Responsabilidad ética sobre credenciales y Rigor
en el control de acceso.

**Alcance de esta guía:** el trabajo continúa el proyecto real del
estudiante, el mismo de la Semana 12 (entidad con su repositorio, servicio,
controlador, plantillas y base H2 en archivo). Se agrega un login con dos
roles, cuyas contraseñas **no se escriben en el código**: entran por las
variables de entorno `ADMIN_PASSWORD` y `ENTRENADOR_PASSWORD`. Se repasa el
CRUD conservando solo dos validaciones. El despliegue en Render y Neon
corresponde a la Semana 14.

**Nota sobre el despliegue:** la aplicación se alojará en **Render** y la
base de datos PostgreSQL vivirá en **Neon**. Las variables de entorno de
esta guía son el mismo mecanismo que se usará en la Semana 14 para
`DB_URL`, `DB_USER` y `DB_PASSWORD`; por eso la Parte D pide una nota
escrita sobre qué datos del proyecto son sensibles.

+-----------------------------------------------------------------------+
| ![Libros](media/image6.png){width="0.4895833333333333in"              |
| height="0.4895833333333333in"}**PRIMERA PARTE: REFUERZO DE            |
| APRENDIZAJES**                                                        |
|                                                                       |
| **Propósito de la actividad:** Consolidar la diferencia entre         |
| autenticación (¿quién eres?) y autorización (¿qué puedes hacer?), y   |
| el manejo de contraseñas sin escribirlas en el código, antes de       |
| aplicarlo al proyecto real.                                           |
|                                                                       |
| **Actividades (Instrucciones):**                                      |
|                                                                       |
| 1.  **Repaso interactivo:**                                           |
|     - Estudiar las dos pestañas de `cheatsheet.html`: "Conceptos" y  |
|       "Errores comunes".                                              |
|     - En `ejercicios.html`, resolver primero la pestaña "Ejercicios"  |
|       (ocho ejercicios en escalera con los jugadores de la Escuela de |
|       Fútbol Los Cerritos) y consultar después el "Kit: todos los     |
|       archivos". Quien no tenga el proyecto o lo tenga roto genera    |
|       uno nuevo con el Kit y lee cada archivo en lugar de escribirlo  |
|       desde cero. Reproducir en la pestaña "Errores que vas a         |
|       provocar" al menos la variable de entorno faltante.             |
|     - Completar ambas pestañas del challenge (clasificación y         |
|       simulador del login) si no se terminaron en clase.              |
|     - Repetir el Quiz en modo Final con el botón "🔀 Nuevas           |
|       preguntas" como autoevaluación de estudio.                      |
|                                                                       |
| 2.  **Investigación breve:**                                          |
|     - Investigar qué diferencia hay entre **cifrar** una contraseña   |
|       y aplicar un **hash** (BCrypt), y por qué la misma clave        |
|       produce un hash distinto cada vez.                              |
|     - Investigar qué significa que una credencial esté                |
|       "hardcodeada" y por qué es un riesgo en un repositorio público. |
|                                                                       |
| **Recursos:**                                                         |
|                                                                       |
| - Material HTML de la Semana 13 (hub `index.html` de la carpeta       |
|   `Material_Sesion_Clase_13_HTML_18_semanas/`).                       |
| - Documentación de Spring Security                                    |
|   (<https://spring.io/projects/spring-security>).                     |
|                                                                       |
| **Evaluación (Formativa):**                                           |
|                                                                       |
| *Capacidad para explicar con las propias palabras la diferencia entre |
| ocultar un botón con `sec:authorize` y proteger una ruta con          |
| `requestMatchers`, y por qué no basta con lo primero.*                |
+=======================================================================+
| ![Piezas de                                                           |
| rompecabezas](media/image8.png){width="0.5833333333333334in"          |
| height="0.5833333333333334in"}                                        |
+-----------------------------------------------------------------------+

**SEGUNDA PARTE: CONSTRUCCIÓN DEL PROYECTO**

**Propósito de la actividad:** Comprobar que el proyecto real guarda datos
y ponerle **puerta con llave**: un login con dos roles, de modo que la
información de la institución que se atiende (guardería, casa hogar,
dispensario u otra entidad sin fines de lucro) solo pueda ser vista y
modificada por quien corresponde, sin escribir ninguna contraseña en el
código.

**Actividades (Instrucciones):**

1.  **Preparación:**
    -   Tener el proyecto real de la Semana 12 funcionando: la entidad de
        la institución con repositorio, servicio, controlador, plantillas y
        la base H2 en archivo (`jdbc:h2:file:./datos/...`). **Esta guía
        continúa ese mismo proyecto:** no se empieza uno nuevo. En el
        código, `TuEntidad` y `gt.edu.url.tuproyecto` son el nombre de la
        clase y el paquete base de cada estudiante; el ejemplo de la clase
        (`Jugador`, Escuela de Fútbol Los Cerritos) solo sirve de
        referencia.
    -   Seguir la guía de diez pasos incluida en
        `Material_Sesion_Clase_13_HTML_18_semanas/proyecto.html`: trabajar
        en la rama `development` (Paso 0); comprobar que todo el proyecto
        guarda datos —crear, listar, editar, eliminar y reiniciar— (Paso
        1); dejar solo dos validaciones en la entidad (Paso 2); agregar
        las dependencias `spring-boot-starter-security` y
        `thymeleaf-extras-springsecurity6`, sin versión (Paso 3); crear
        `Usuario` y `UsuarioRepository` (Paso 4); entregar las
        contraseñas por variables de entorno (Paso 5); crear la carpeta
        `security` con `UsuarioDetailsService`, `SecurityConfig` y
        `CargadorUsuarios` (Paso 6); crear `AccesoController`,
        `login.html` y `acceso-denegado.html` (Paso 7); ocultar según el
        rol con `sec:authorize` (Paso 8); probar con los dos usuarios
        (Paso 9) y subir el avance a GitHub sin subir secretos (Paso 10).
    -   **Las contraseñas nunca se escriben en el código.**
        `application.properties` solo contiene los "huecos"
        `${ADMIN_PASSWORD}` y `${ENTRENADOR_PASSWORD}`; cada estudiante
        inventa sus claves y las define en la misma terminal desde la que
        arranca la aplicación. Esta semana se arranca **desde la
        terminal**, no con el botón ▶ Run de VS Code, porque ese botón no
        ve las variables definidas en la terminal. Si falta una variable la
        aplicación se niega a arrancar (`Could not resolve placeholder`):
        es una protección, no un error.
    -   **Reglas de seguridad que se evalúan:** en `SecurityConfig`
        gana la primera regla que coincide, por lo que `anyRequest()` va
        siempre al final; la carpeta `security` debe quedar dentro del
        paquete base; las contraseñas se guardan con
        `passwordEncoder.encode(...)` (hash BCrypt); los formularios usan
        `th:action` para llevar el token CSRF; y ocultar un botón no
        protege la ruta. `CargadorUsuarios` solo crea usuarios que no
        existen: si se cambia la variable después, hay que detener la
        aplicación y borrar la carpeta `datos/` (solo en desarrollo).
    -   **Qué no se sube a GitHub:** la carpeta `datos/` (debe estar en
        `.gitignore`) y cualquier contraseña real. El repositorio es
        público.

2.  **Práctica de Código — completar la plantilla (sección "Entregable" de `proyecto.html`):**
    -   **Parte A — Mi proyecto guarda datos (20%):** evidencia del
        reinicio (registros antes y después, sin duplicados al editar), la
        URL de la base y las dos validaciones elegidas con sus mensajes.
    -   **Parte B — Login y dos roles funcionando (25%):** las cuatro
        capturas de la prueba (login, vista del administrador, vista del
        segundo rol y el 403 al entrar a mano a la ruta de crear) y el
        `SecurityConfig` completo, con su `package` y todos sus `import`.
    -   **Parte C — Variables de entorno y .gitignore (20%):** las dos
        líneas de `application.properties` que usan variables de entorno y
        el `.gitignore` (sin contraseñas reales), más una explicación de
        cómo se entregarían las claves al propietario de la institución sin
        escribirlas en el código ni en GitHub.
    -   **Parte D — Nota escrita: datos sensibles de mi proyecto de cara al
        despliegue (25%):** lista de al menos 5 datos del proyecto, si
        son sensibles y dónde vivirá cada uno en la Semana 14, más un
        párrafo de 3 a 5 líneas sobre qué dato sería más grave perder o
        filtrar.

3.  **Reflexión (Parte E, 10%):**
    -   **Empatía con el usuario:** cómo se sentirá la persona del rol con
        menos permisos al ver "No tienes permiso" y qué cambiaría del
        mensaje para que se sienta orientada y no bloqueada.
    -   **Rigor en la calidad:** diferencia entre ocultar un botón y
        proteger una ruta, y qué falta para considerar el login "listo"
        para el público en la Semana 14.

**Recursos:**
-   Guía paso a paso y plantilla del entregable, en una sola página
    (`proyecto.html`), con exportación a PDF.
-   Ejercicios y Kit de archivos completos (`ejercicios.html`), con la
    pestaña de errores que se provocan a propósito.
-   Cheat sheet de la semana y su pestaña de errores comunes.

**Evaluación (Sumativa — 1 punto):**
*Entrega del PDF de la plantilla completada (`Guia13_TuNombre.pdf`), antes
de la Sesión 14: Parte A 0.20 · Parte B 0.25 · Parte C 0.20 · Parte D 0.25 ·
Parte E 0.10. Se valora que el login y los roles funcionen en el proyecto
real del estudiante (no copiados con los nombres del ejemplo), que ninguna
contraseña real aparezca en el código ni en el PDF, y que la nota de la
Parte D sea concreta y propia. Esta semana no hay Entrega Parcial: la
siguiente es la Entrega Parcial 3 en la Semana 14.*

**Al terminar:** responde la **evaluación anónima de la sesión** (formulario
de evaluación docente, sugerencias y quejas). Es 100% anónima y ayuda a
mejorar el curso semana a semana.
