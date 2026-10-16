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

Sesión **[sincrónica]{.underline}** #14 — Sábado 17 de octubre de 2026, 11:10–12:20

**Tema:** Semana 14 — Unidad 7a: Despliegue en producción con Render y Neon

+----------------+------------------------------------------------------------+
|                | ![Cabeza con                                               |
|                | engranajes](media/image4.png){width="0.4583333333333333in" |
|                | height="0.4583333333333333in"}**Información importante**   |
+================+============================================================+
| **Aprendizajes | - Empaqueta la aplicación con Maven.                       |
| esperados**    |                                                            |
|                | - Crea y conecta una base de datos PostgreSQL gestionada   |
|                |   en Neon.                                                 |
|                |                                                            |
|                | - Despliega en Render usando variables de entorno.         |
|                |                                                            |
|                | - Verifica el funcionamiento en una URL pública con HTTPS. |
+----------------+------------------------------------------------------------+
| **Contenidos   | - Empaquetado con Maven (mvn clean package): el .jar       |
| temáticos**    |   ejecutable con Tomcat embebido, sin .war ni servidor     |
|                |   externo.                                                 |
|                |                                                            |
|                | - Creación de la base de datos en Neon y su cadena de      |
|                |   conexión (sslmode=require). El plan gratuito de Neon no  |
|                |   vence: se suspende sin uso y despierta solo, sin perder  |
|                |   datos.                                                   |
|                |                                                            |
|                | - Perfil de producción: application-prod.properties con    |
|                |   ${DB_URL}, ${DB_USER} y ${DB_PASSWORD}, sin tocar        |
|                |   entidades ni repositorios.                               |
|                |                                                            |
|                | - Despliegue en Render conectado a GitHub mediante un      |
|                |   Dockerfile (Render no tiene soporte nativo para Java);   |
|                |   cada cambio en main dispara un nuevo despliegue.         |
|                |                                                            |
|                | - Variables de entorno en Render: DB_URL, DB_USER,         |
|                |   DB_PASSWORD, SPRING_PROFILES_ACTIVE=prod y las claves    |
|                |   iniciales de usuario de la Semana 13.                    |
|                |                                                            |
|                | - Verificación en URL pública; ddl-auto=update usado a     |
|                |   conciencia (en producción real: migraciones con Flyway). |
|                |                                                            |
|                | - El plan gratuito de Render duerme el servicio tras 15    |
|                |   minutos sin visitas y tarda cerca de un minuto en        |
|                |   despertar: es esperado, no un error.                     |
+----------------+------------------------------------------------------------+
| **Habilidades  | - Empaquetado y despliegue correcto en Render con          |
| y destrezas**  |   configuración de producción.                             |
|                |                                                            |
|                | - Separación de configuración y credenciales (12-factor    |
|                |   app, en términos simples).                               |
|                |                                                            |
|                | - Verificación end-to-end en producción.                   |
+----------------+------------------------------------------------------------+
| **Valores y    | - Responsabilidad operativa.                               |
| actitudes**    |                                                            |
|                | - Rigor en la verificación (no dar por completa la entrega |
|                |   sin probar con datos reales).                            |
+----------------+------------------------------------------------------------+
| **Productos    | *PDF del Quiz (modo Final) + PDF del Challenge (Actividad  |
| que evidencian | en clase — Sesión 14, 0.66 pts). El trabajo autónomo se    |
| el             | evidencia con la Guía de Aprendizaje 14 (1 pt), que es a   |
| aprendizaje**  | la vez el Avance del Proyecto — ★ Entrega Parcial 3 (5     |
|                | pts): aplicación en producción en Render con CRUD y        |
|                | autenticación funcionando contra la base de datos real de  |
|                | Neon (no H2).*                                             |
+----------------+------------------------------------------------------------+

  -----------------------------------------------------------------------
  ![Internet](media/image6.png){width="0.5104166666666666in"
  height="0.5104166666666666in"}**Desarrollo de la secuencia (70 minutos)**
  -----------------------------------------------------------------------

  -----------------------------------------------------------------------

> **Material de apoyo de la sesión:** carpeta HTML
> `Material_Sesion_Clase_14_HTML_18_semanas/` (hub `index.html` con el mapa
> "de dónde vienes, qué harás, a dónde vas" y el diagrama de arquitectura,
> quiz unificado, guía docente, `ejercicios.html` con tres pestañas —ocho
> ejercicios en escalera con maquetas numeradas de cada pantalla de Neon y
> Render, Kit de archivos completos y diez errores reales que se provocan a
> propósito—, cheat sheet con cuatro pestañas —conceptos, las seis
> variables con un separador de la cadena de Neon, pantallas de 2026 y
> errores comunes—, challenge con secuencia del despliegue y simulador de la
> consola de Render, y la página "Proyecto" con la guía de trece pasos y el
> entregable calificable de la Guía 14 y la Entrega Parcial 3). Los
> diagramas se dibujan con Mermaid. Requiere el proyecto con login y roles
> construido en la Semana 13.
>
> **Alcance de la sesión:** la aplicación `taller-formularios` (Escuela de
> Fútbol Los Cerritos, entidad `Jugador`) sale de la computadora del
> estudiante: se empaqueta en un `.jar`, sus datos pasan a una base
> PostgreSQL en Neon y se publica en Render con una dirección `https://`. No
> se modifica ninguna clase Java ni plantilla: solo se agrega
> `server.port=${PORT:8080}`, se completa `application-prod.properties` y se
> crean `Dockerfile` y `.dockerignore`.
>
> **Precisión al programa:** el programa indica que Render detecta el
> proyecto Maven sin Dockerfile. Según la documentación vigente de Render
> (octubre de 2026), Render solo tiene soporte nativo para Node, Python,
> Ruby, Go, Rust y Elixir; las aplicaciones Java se despliegan con Docker.
> El material entrega un Dockerfile de dos etapas completo y explicado; el
> estudiante no necesita instalar Docker, porque Render construye la imagen.
> También: el campo "Instance Type" de Render se llama "Compute" desde
> agosto de 2026.
>
> **Preparación del docente (día anterior):** crear un proyecto en Neon y
> desplegar en Render un servicio de respaldo ya funcionando ("servicio A"),
> porque el primer despliegue tarda de 5 a 10 minutos. Visitar su URL diez
> minutos antes de la clase para que no esté dormido.

1.  **Activación de presaberes — Quiz (modo Presaberes) y "¿qué significa publicar?"**

*Actividad: Resolución individual del Quiz en línea en modo "Presaberes" (8
preguntas autocalificadas, sorteadas de un banco más grande). Se pide al
grupo escribir `localhost:8080` en su celular: no abre, porque "localhost"
significa "esta misma máquina". Pregunta al grupo en el chat: si la
directora quiere usar el sistema desde su casa el domingo, ¿qué necesita
que esté encendido? De ahí surge la idea de servidor: una computadora que
no se apaga y que alguien más cuida.*

*Tiempo estimado: 7 minutos (minutos 00–07)*

*Recursos: `quiz.html` del material de la sesión, enlace compartido en el
chat; celular del estudiante.*

*Actividad que realizará el estudiante: Elegir "Presaberes" en el menú
desplegable, responder y calificarse; intentar abrir localhost desde el
celular y responder en el chat.*

2.  **Construcción del conocimiento — El mapa del despliegue y el empaquetado con Maven**

*Actividad: Se proyecta el diagrama de arquitectura (computadora → GitHub →
Render → Neon, con las variables de entorno entrando a Render y el usuario
llegando por HTTPS) y se recorre con la analogía de la mudanza: empacar (el
.jar), conseguir el archivo central de expedientes (Neon), la receta para
armar todo en el edificio nuevo (Dockerfile), entregar las llaves en sobre
cerrado (variables de entorno) y recorrer el edificio (verificación). Se
escriben tres reglas de la "12-factor app" en simple: un código para muchos
lugares, la configuración vive afuera y los datos viven en un servicio
aparte. Se provoca a propósito el primer error: `./mvnw clean package` en
una terminal sin `ADMIN_PASSWORD` falla en la prueba `contextLoads` con
"Could not resolve placeholder 'ADMIN_PASSWORD'", porque la prueba generada
por Initializr enciende la aplicación completa; se definen las claves y se
obtiene `BUILD SUCCESS`. Se ejecuta el .jar con `java -jar`, sin VS Code,
mostrando que lleva Tomcat adentro. Se agrega `server.port=${PORT:8080}`:
Render indica el puerto con la variable PORT y, si no existe, se usa 8080.*

*Tiempo estimado: 10 minutos (minutos 07–17)*

*Recursos: `index.html` (diagrama), `clase.html` bloque 2, `ejercicios.html`
(ejercicios 1 y 2).*

*Actividad que realizará el estudiante: Empaquetar su proyecto, leer el
error de la prueba, corregirlo y ejecutar el .jar; agregar la línea del
puerto.*

3.  **Construcción del conocimiento — Neon: la base de datos y las tres piezas de conexión**

*Actividad: Se explica por qué Neon y no la base gratuita de Render (esta se
elimina a los 30 días; el proyecto debe vivir hasta la Semana 18). Se crea
en vivo un proyecto (New Project, nombre, región del Este de Estados
Unidos, Create project) y se observa que Neon crea la rama `production`, la
base `neondb` y el usuario `neondb_owner`. Con el botón Connect se abre la
ventana "Connect to your branch", se apaga "Connection pooling" (conexión
directa), se muestra la contraseña y se copia la cadena a una nota privada.
Se desarma la cadena por colores y con el separador del cheat sheet en
DB_URL (con `jdbc:postgresql://` al inicio y
`?sslmode=require&channelBinding=require`), DB_USER y DB_PASSWORD;
`sslmode=require` se explica como "sobre sellado". Se prueba la llave desde
la computadora: con las seis variables y `SPRING_PROFILES_ACTIVE=prod`, el
log muestra `profile is active: "prod"` y `PgConnection`, y el jugador
inscrito aparece en Neon → Tables. Se advierte que los usuarios se crean con
las claves de ese primer arranque y que en Render deben usarse las mismas.*

*Tiempo estimado: 10 minutos (minutos 17–27)*

*Recursos: `clase.html` bloque 3, `ejercicios.html` (ejercicios 3 a 5, con
maquetas numeradas), `cheatsheet.html` pestaña "Las 6 variables".*

*Actividad que realizará el estudiante: Crear su proyecto en Neon, obtener
las tres piezas en una nota privada (nunca en el chat ni en GitHub) y
comprobar desde su computadora que la aplicación escribe en Neon.*

4.  **Construcción del conocimiento — Render: Dockerfile, Pull Request a main, Web Service y variables**

*Actividad: Se explica el Dockerfile de dos etapas con la analogía de la
cocina (imagen maven:3.9-eclipse-temurin-17 que construye el .jar con
`-DskipTests`) y el plato servido (imagen eclipse-temurin:17-jre que solo lo
ejecuta), y se advierte que los tutoriales con `openjdk:17-jdk-slim` ya no
funcionan porque esa imagen fue retirada. Se revisa que no haya secretos
(`git grep npg_` sin resultados) y se llevan los cambios de `development` a
`main` con un Pull Request: desde hoy, lo que llega a `main` se publica. Se
crea el Web Service: + New → Web Service → repositorio → Language: Docker,
Branch: main, región igual a Neon, Compute: Free, las seis variables de
entorno (SPRING_PROFILES_ACTIVE=prod, DB_URL, DB_USER, DB_PASSWORD,
ADMIN_PASSWORD y ENTRENADOR_PASSWORD; PORT no se agrega porque la pone
Render) y Health Check Path `/login`. Mientras el primer build corre de
fondo, se enseña a leer el log (las líneas con `==>` son de Render; las
demás, de la aplicación) y el diagrama "¿Dónde busco?": falla de
construcción frente a falla de arranque.*

*Tiempo estimado: 18 minutos (minutos 27–45)*

*Recursos: `clase.html` bloque 4, `ejercicios.html` (ejercicios 6 y 7, Kit
y pestaña de errores), servicio A ya desplegado.*

*Actividad que realizará el estudiante: Crear su Dockerfile y su
.dockerignore, hacer el Pull Request a main y crear su Web Service con las
seis variables siguiendo la maqueta numerada.*

5.  **Práctica guiada — Verificación de punta a punta con datos reales**

*Actividad: Se comparte en el chat la URL del servicio A; todos la abren en
el celular y ven el login con candado (las acciones con sesión las muestra
el docente, sin compartir claves). Se recorre: login incorrecto, login de
administrador, inscripción de un jugador propuesto por el grupo, visible al
refrescar Neon → Tables; sesión de entrenador con 403 al escribir a mano
`/jugadores/nuevo`; y la prueba central: Manual Deploy → Restart service y,
al volver a Live, el jugador sigue. Se discute el valor de la semana: "Live"
no significa "funciona"; como docentes no se da por aprendido un tema porque
el estudiante dijo "sí entendí".*

*Tiempo estimado: 12 minutos (minutos 45–57)*

*Recursos: `clase.html` bloque 5, `ejercicios.html` (ejercicio 8, con el
diagrama de secuencia de una petición en producción).*

*Actividad que realizará el estudiante: Abrir la URL desde su celular,
seguir la verificación y repetirla con su propio servicio cuando esté
Live.*

6.  **Práctica y consolidación — Error silencioso, dormir y despertar, Entrega Parcial 3 y evidencias**

*Actividad: Se provoca el error más peligroso de la semana: se borra
SPRING_PROFILES_ACTIVE en Render y se redespliega; la aplicación arranca y
"funciona", pero el log dice `profile is active: "dev"` y
`jdbc:h2:file:./datos/jugadores`: los datos quedan en el disco del
contenedor, que se borra en cada despliegue, sin ningún aviso. Se restaura la
variable. Con el diagrama de estados se explica el plan gratuito: tras 15
minutos sin visitas el servicio duerme y la primera visita tarda cerca de un
minuto; no es un error. Se presenta la página Proyecto y su rúbrica doble:
Guía 14 (1 pt) y Entrega Parcial 3 (5 pts), con la prueba del reinicio
como evidencia obligatoria. Evidencias: Challenge ambientado en el Centro
de Reciclaje Comunitario Tierra Viva (secuencia del despliegue con trampas
de tutoriales viejos y simulador de la consola de Render con cuatro
escenarios y un diagnóstico en cada uno) y Quiz en modo "Final" (12
preguntas, opciones barajadas). Ticket de salida: pegar en el chat solo la
URL pública de su aplicación (nunca una clave) o el ejercicio en que se
quedó. Si el tiempo aprieta, se recorta el error provocado y se conservan el
Challenge y el Quiz Final.*

*Tiempo estimado: 13 minutos (minutos 57–70)*

*Recursos: `challenge.html` y `quiz.html` (modo Final), `proyecto.html`
(guía y plantilla del entregable), formulario anónimo de evaluación de la
sesión (módulo `evaluacion_docente/`), chat de la plataforma.*

*Actividad que realizará el estudiante: Completar el Challenge y el Quiz
Final y exportar ambos a PDF (se suben al aula virtual como evidencia de la
Actividad en clase — Sesión 14), escribir su ticket de salida, responder la
evaluación anónima (opcional pero recomendada) y anotar la fecha límite de
la Guía 14 y la Entrega Parcial 3: antes de la Sesión 15 (24 de octubre de
2026).*
