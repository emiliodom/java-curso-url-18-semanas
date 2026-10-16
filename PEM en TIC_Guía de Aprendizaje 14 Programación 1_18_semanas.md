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

**GUÍA DE APRENDIZAJE AUTÓNOMO No. 14 — Formato 18 semanas**

![Transformación Digital -- Universidad Rafael
Landívar](media/image1.png){width="3.2336996937882763in"
height="1.3760411198600175in"}![gráficos de color
degradado](media/image2.png){width="8.268055555555556in"
height="1.5618055555555554in"}

![Libro abierto](media/image4.png){width="0.5729166666666666in"
height="0.5729166666666666in"}

**PARTE INTRODUCTORIA**

***"Una aplicación que solo funciona en tu computadora es un ensayo; la que funciona para otros es un servicio."***

**Fecha de la sesión:** 17 de octubre de 2026 · **Entrega de esta guía:**
antes de la Sesión 15 (24 de octubre de 2026) · **Valor:** esta guía
**cuenta doble**: Guía de Aprendizaje 14 (1 punto) y **★ Avance del
Proyecto — Entrega Parcial 3 (5 puntos)**, sobre una sola entrega. Es el
tercero de los cuatro hitos del proyecto (Semanas 5, 9, 14 y 17).

+---------------------------------+------------------------------------+
| **Aprendizajes esperados**      | **Productos que evidencian el      |
|                                 | aprendizaje**                      |
+=================================+====================================+
| **Empaqueta la aplicación con   | *El .jar construido con mvn clean  |
| Maven.**                        | package y el Dockerfile que lo     |
|                                 | construye en Render.*              |
+---------------------------------+------------------------------------+
| **Crea y conecta una base de    | *Proyecto en Neon con las tablas   |
| datos PostgreSQL gestionada en  | de la aplicación y registros que   |
| Neon.**                         | sobreviven a un reinicio.*         |
+---------------------------------+------------------------------------+
| **Despliega en Render usando    | *Web Service en Render con perfil  |
| variables de entorno.**         | prod y seis variables de entorno,  |
|                                 | sin ninguna clave en GitHub.*      |
+---------------------------------+------------------------------------+
| **Verifica el funcionamiento en | *PDF de la plantilla de la Guía 14 |
| una URL pública con HTTPS.**    | (`proyecto.html`, sección          |
|                                 | "Entregable") con la URL pública,  |
|                                 | las pruebas de CRUD, roles y       |
|                                 | persistencia, y la reflexión.*     |
+---------------------------------+------------------------------------+

**Habilidades y destrezas de la semana (guía):** Empaquetado y despliegue
correcto en Render con configuración de producción, Separación de
configuración y credenciales (12-factor app, en términos simples) y
Verificación end-to-end en producción.

**Valores y actitudes:** Responsabilidad operativa y Rigor en la
verificación (no dar por completa la entrega sin probar con datos reales).

**Alcance de esta guía:** el trabajo continúa el proyecto real del
estudiante, el mismo de la Semana 13 (entidad con CRUD, login con dos roles
y claves por variables de entorno). La aplicación se publica en **Render**
y sus datos pasan a **PostgreSQL en Neon**. No se modifica ninguna clase
Java ni plantilla: se agrega `server.port=${PORT:8080}`, se completa
`application-prod.properties` y se crean `Dockerfile` y `.dockerignore`.

**Precisión técnica:** Render no tiene soporte nativo para Java (octubre de
2026): las aplicaciones Java se despliegan con Docker. El Dockerfile se
entrega completo y explicado en el material; no es necesario instalar
Docker, porque Render construye la imagen.

+-----------------------------------------------------------------------+
| ![Libros](media/image6.png){width="0.4895833333333333in"              |
| height="0.4895833333333333in"}**PRIMERA PARTE: REFUERZO DE            |
| APRENDIZAJES**                                                        |
|                                                                       |
| **Propósito de la actividad:** Comprender qué significa desplegar,    |
| distinguir desarrollo de producción y practicar el despliegue con la  |
| aplicación de ejemplo antes de aplicarlo al proyecto real.            |
|                                                                       |
| **Actividades (Instrucciones):**                                      |
|                                                                       |
| 1.  **Repaso interactivo:**                                           |
|     - Estudiar las cuatro pestañas de `cheatsheet.html`: "Conceptos", |
|       "Las 6 variables", "Pantallas 2026" y "Errores comunes".        |
|     - En `ejercicios.html`, resolver la pestaña "Ejercicios" (ocho    |
|       ejercicios en escalera con los jugadores de la Escuela de       |
|       Fútbol Los Cerritos, con maquetas numeradas de cada pantalla de |
|       Neon y Render) y consultar el "Kit: archivos completos".        |
|       Reproducir en la pestaña "Errores que vas a provocar" al menos  |
|       el error silencioso (sin SPRING_PROFILES_ACTIVE) y la cadena de |
|       Neon pegada sin transformar.                                    |
|     - Completar ambas pestañas del challenge (secuencia del           |
|       despliegue y simulador de la consola de Render) si no se        |
|       terminaron en clase.                                            |
|     - Repetir el Quiz en modo Final con el botón "🔀 Nuevas           |
|       preguntas" como autoevaluación de estudio.                      |
|                                                                       |
| 2.  **Investigación breve:**                                          |
|     - Investigar qué es un contenedor de Docker y en qué se           |
|       diferencia de instalar un programa directamente en un servidor. |
|     - Investigar qué propone la "12-factor app" sobre la              |
|       configuración y explicarlo con un ejemplo escolar.              |
|                                                                       |
| **Recursos:**                                                         |
|                                                                       |
| - Material HTML de la Semana 14 (hub `index.html` de la carpeta       |
|   `Material_Sesion_Clase_14_HTML_18_semanas/`).                       |
| - Documentación de Render (<https://render.com/docs>) y de Neon       |
|   (<https://neon.com/docs>).                                          |
|                                                                       |
| **Evaluación (Formativa):**                                           |
|                                                                       |
| *Capacidad para explicar con las propias palabras por qué el mismo    |
| código funciona en la computadora y en producción, y qué parte de la  |
| configuración cambia entre ambos lugares.*                            |
+=======================================================================+
| ![Piezas de                                                           |
| rompecabezas](media/image8.png){width="0.5833333333333334in"          |
| height="0.5833333333333334in"}                                        |
+-----------------------------------------------------------------------+

**SEGUNDA PARTE: CONSTRUCCIÓN DEL PROYECTO**

**Propósito de la actividad:** Publicar el proyecto real en internet para
que la institución que se atiende (guardería, casa hogar, dispensario u
otra entidad sin fines de lucro) pueda usarlo desde cualquier dispositivo,
con sus datos guardados en una base de datos real y sin que ninguna clave
quede expuesta.

**Actividades (Instrucciones):**

1.  **Preparación:**
    -   Tener el proyecto de la Semana 13 funcionando y subido a GitHub.
        En el código, `TuEntidad`, `tu-proyecto` y `gt.edu.url.tuproyecto`
        son la clase, el Artifact y el paquete de cada estudiante; el
        ejemplo de la clase (`Jugador`) solo sirve de referencia.
    -   Seguir la guía de trece pasos incluida en
        `Material_Sesion_Clase_14_HTML_18_semanas/proyecto.html`, con su
        mapa de avance: trabajar en `development` (Paso 0); empaquetar y
        ejecutar el `.jar` (Paso 1); agregar el puerto flexible y completar
        el perfil `prod` (Paso 2); crear la base en Neon y obtener DB_URL,
        DB_USER y DB_PASSWORD (Paso 3); comprobar desde la computadora,
        con el perfil `prod`, que la aplicación escribe en Neon (Paso 4);
        crear `Dockerfile` y `.dockerignore` (Paso 5); revisar secretos y
        llevar los cambios a `main` con un Pull Request (Paso 6); crear el
        Web Service en Render (Paso 7); configurar las seis variables de
        entorno (Paso 8); leer el log hasta "Live" (Paso 9); verificar de
        punta a punta (Paso 10); comprobar el despliegue continuo (Paso 11)
        y documentar el despliegue en el README (Paso 12).
    -   **Ninguna clave se escribe en el código, en el chat ni en el
        PDF.** Las tres piezas de Neon y las claves de usuario viven solo
        en una nota privada y en Render → Environment. Si una clave llega a
        GitHub o a un log, primero se cambia en Neon (Roles → Reset
        password) y luego se actualiza en Render.
    -   **Puntos que se evalúan:** `DB_URL` empieza con
        `jdbc:postgresql://` e incluye `sslmode=require`; el log de Render
        dice `profile is active: "prod"` (sin esa variable la aplicación
        usa H2 dentro del contenedor y pierde los datos sin avisar); los
        registros aparecen en Neon y sobreviven a un reinicio; las claves
        de usuario en Render son las mismas con las que se crearon los
        usuarios en Neon.
    -   **El servicio no se borra después de entregar:** debe seguir
        publicado hasta la presentación final de la Semana 18. La primera
        visita tras 15 minutos sin uso tarda cerca de un minuto; es el
        comportamiento del plan gratuito.

2.  **Práctica de Código — completar la plantilla (sección "Entregable" de `proyecto.html`):**
    -   **Parte A — Mi aplicación está en internet:** captura de la URL
        abierta desde el celular con candado y las cinco líneas clave del
        log de Render.
    -   **Parte B — Mis datos viven en Neon:** captura de Neon → Tables con
        registros creados desde la URL pública, conteo antes y después del
        reinicio del servicio y regiones elegidas.
    -   **Parte C — CRUD y autenticación en producción:** evidencias del
        login incorrecto, del CRUD con el rol administrador, de los dos
        mensajes de validación, de la vista del segundo rol y de su 403.
    -   **Parte D — Configuración y secretos:**
        `application-prod.properties` y `Dockerfile` completos, los
        nombres (sin valores) de las variables en Render y el resultado de
        `git grep npg_`.

3.  **Reflexión (Parte E):**
    -   **Documentación:** sección "Despliegue" del README y el commit que
        se publicó solo.
    -   **Responsabilidad operativa:** pasos, en orden, si una clave de
        Neon quedara expuesta.
    -   **Rigor en la verificación:** qué prueba demostró que se usa Neon y
        no H2, y por qué "Live" no era suficiente.
    -   **Mirada docente:** analogía y diagrama para explicar "desplegar" a
        estudiantes de bachillerato en tres minutos.

**Recursos:**
-   Guía paso a paso con mapa de avance y plantilla del entregable, en una
    sola página (`proyecto.html`), con exportación a PDF.
-   Ejercicios con maquetas numeradas, Kit de archivos completos y errores
    reales (`ejercicios.html`).
-   Cheat sheet con el separador de la cadena de Neon (`cheatsheet.html`).

**Evaluación (Sumativa — 1 punto + ★ 5 puntos):**
*Entrega del PDF de la plantilla completada
(`Guia14_EntregaParcial3_TuNombre.pdf`), antes de la Sesión 15. **Entrega
Parcial 3 (5 pts):** aplicación publicada y accesible por HTTPS con perfil
prod (Parte A) 1.0 · base de datos real en Neon con persistencia comprobada
(Parte B) 1.25 · CRUD, login, dos roles y 403 en la URL pública (Parte C)
1.5 · configuración por perfil y variables, Dockerfile y cero secretos en
GitHub (Parte D) 1.0 · README de despliegue y despliegue continuo (Parte
E1) 0.25. **Guía 14 (1 pt):** plantilla completa 0.6 · reflexión 0.4. Una
clave real visible en el PDF o en GitHub resta la totalidad de la Parte D.
Entregar tarde: −25% por día.*

**Al terminar:** responde la **evaluación anónima de la sesión** (formulario
de evaluación docente, sugerencias y quejas). Es 100% anónima y ayuda a
mejorar el curso semana a semana.
