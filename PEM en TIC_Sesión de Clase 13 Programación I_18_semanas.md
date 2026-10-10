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

Sesión **[sincrónica]{.underline}** #13 — Sábado 10 de octubre de 2026, 11:10–12:20

**Tema:** Semana 13 — Unidad 6b: Autenticación, roles y renderizado condicional

+----------------+------------------------------------------------------------+
|                | ![Cabeza con                                               |
|                | engranajes](media/image4.png){width="0.4583333333333333in" |
|                | height="0.4583333333333333in"}**Información importante**   |
+================+============================================================+
| **Aprendizajes | - Implementa autenticación básica con Spring Security.     |
| esperados**    |                                                            |
|                | - Define roles de usuario y restringe acceso.              |
|                |                                                            |
|                | - Aplica renderizado condicional según rol.                |
+----------------+------------------------------------------------------------+
| **Contenidos   | - Definición de roles y restricción de rutas con Spring    |
| temáticos**    |   Security.                                                |
|                |                                                            |
|                | - Renderizado condicional con Thymeleaf (th:if,            |
|                |   sec:authorize).                                          |
|                |                                                            |
|                | - Almacenamiento seguro de contraseñas con                 |
|                |   BCryptPasswordEncoder: por qué nunca se guarda una       |
|                |   contraseña en texto plano ni se escribe una credencial   |
|                |   de administrador dentro del código. Conecta con la       |
|                |   Semana 14, donde las credenciales de la base de datos se |
|                |   manejarán como variables de entorno en Render y nunca en |
|                |   el repositorio de GitHub.                                |
+----------------+------------------------------------------------------------+
| **Habilidades  | - Gestión de seguridad y control de vistas.                |
| y destrezas**  |                                                            |
|                | - Higiene de secretos: identificar qué datos son sensibles |
|                |   de cara al despliegue.                                   |
+----------------+------------------------------------------------------------+
| **Valores y    | - Responsabilidad ética sobre credenciales.                |
| actitudes**    |                                                            |
|                | - Rigor en el control de acceso.                           |
+----------------+------------------------------------------------------------+
| **Productos    | *PDF del Quiz (modo Final) + PDF del Challenge (Actividad  |
| que evidencian | en clase — Sesión 13, 0.66 pts). El trabajo autónomo se    |
| el             | evidencia con la Guía de Aprendizaje 13: autenticación por |
| aprendizaje**  | roles funcional en el proyecto, más una nota escrita sobre |
|                | qué datos del proyecto son sensibles de cara al            |
|                | despliegue, publicados en GitHub (1 pt).*                  |
+----------------+------------------------------------------------------------+

  -----------------------------------------------------------------------
  ![Internet](media/image6.png){width="0.5104166666666666in"
  height="0.5104166666666666in"}**Desarrollo de la secuencia (70 minutos)**
  -----------------------------------------------------------------------

  -----------------------------------------------------------------------

> **Material de apoyo de la sesión:** carpeta HTML
> `Material_Sesion_Clase_13_HTML_18_semanas/` (hub `index.html`, quiz
> unificado, guía docente, `ejercicios.html` con tres pestañas —ocho
> ejercicios en escalera, Kit con todos los archivos completos y los errores
> que se provocan a propósito—, cheat sheet con las pestañas "Conceptos" y
> "Errores comunes", challenge con clasificación y simulador del login, y la
> página "Proyecto" que integra la guía paso a paso y el entregable
> calificable). Requiere el módulo de Jugador con persistencia construido en
> la Semana 12.
>
> **Alcance de la sesión:** sesión deliberadamente liviana: un solo tema
> nuevo —el inicio de sesión— explicado con calma, y repaso de lo demás. La
> aplicación `taller-formularios` (Escuela de Fútbol Los Cerritos, entidad
> `Jugador`) deja de ser una puerta abierta: los usuarios viven en la base de
> datos, sus contraseñas se guardan cifradas con BCrypt y las claves iniciales
> de los dos roles (`ADMIN` y `ENTRENADOR`) entran por las variables de
> entorno `ADMIN_PASSWORD` y `ENTRENADOR_PASSWORD`, sin escribirse en el
> código. El CRUD de `Jugador` se repasa con solo dos validaciones (nombre y
> edad). El despliegue en Render y Neon corresponde a la Semana 14.
>
> **Continuidad para grupos que completaron la Semana 12:** trabajar sobre el
> mismo proyecto; no regenerarlo ni cambiar su paquete. Se agregan a mano las
> dependencias `spring-boot-starter-security` y
> `thymeleaf-extras-springsecurity6` (sin versión) y se reinicia a mano. Esta
> semana la aplicación se arranca desde la terminal, porque el botón ▶ Run de
> VS Code no ve las variables de entorno definidas en la terminal. La carpeta
> `security/` es nueva y debe quedar dentro del paquete base.

1.  **Activación de presaberes — Quiz (modo Presaberes) y repaso de lo que guarda la aplicación**

*Actividad: Resolución individual del Quiz en línea en modo "Presaberes" (8
preguntas autocalificadas, sorteadas de un banco más grande) y repaso en voz
alta con la aplicación en marcha. Se abre con una prueba: se entra a
`/jugadores` y cualquiera que conozca la dirección puede ver a niños
menores de edad, borrarlos o cambiarlos. Pregunta al grupo en el chat: ¿quién
debería poder borrar un jugador y quién solo mirar la lista? De las respuestas
salen las palabras "director" y "entrenador", que serán los roles ADMIN y
ENTRENADOR.*

*Tiempo estimado: 8 minutos (minutos 00–08)*

*Recursos: `quiz.html` del material de la sesión, enlace compartido en el
chat; proyecto `taller-formularios` en ejecución.*

*Actividad que realizará el estudiante: Elegir "Presaberes" en el menú
desplegable, responder y calificarse; responder en el chat quién debe poder
borrar y quién solo consultar.*

2.  **Construcción del conocimiento — Autenticación frente a autorización y demostración del login por defecto**

*Actividad: Se dibujan dos preguntas: "¿quién eres?" (autenticación) y "¿qué
puedes hacer?" (autorización), con las analogías de la llave del aula y del
director frente al docente de turno. Se escribe el flujo del login en cinco
pasos: la persona escribe usuario y contraseña en login.html; Spring Security
llama a UsuarioDetailsService; el servicio busca al usuario con
UsuarioRepository; Spring compara lo escrito con el hash guardado (BCrypt); si
coincide la persona entra con su rol y si no vuelve a /login?error. Se
provoca a propósito el login por defecto: en un proyecto de práctica se agrega
solo la dependencia spring-boot-starter-security y al arrancar aparece en la
consola "Using generated security password", con usuario user y un código
distinto en cada arranque. El mensaje clave es que Spring protege todo por
defecto, pero con una sola cuenta inventada; hoy se reemplaza por usuarios
reales guardados en la base. Se aclara que, al marcar Thymeleaf junto con
Security en Initializr, se agrega solo thymeleaf-extras-springsecurity6; quien
continúa su proyecto de la Semana 12 agrega a mano ambas dependencias, sin
versión, y reinicia manualmente.*

*Tiempo estimado: 12 minutos (minutos 08–20)*

*Recursos: `clase.html` bloque 2, `cheatsheet.html` pestaña "Conceptos",
proyecto de práctica con la dependencia de Security.*

*Actividad que realizará el estudiante: Observar la demostración, copiar el
flujo de cinco pasos y agregar las dos dependencias a su proyecto de la
Semana 12.*

3.  **Construcción del conocimiento — Construir el login: Usuario, BCrypt, SecurityConfig, login.html y variables de entorno**

*Actividad: Un archivo a la vez, mostrando su ruta, su package y sus import.
Se crean model/Usuario.java (entidad con username, password y rol; la
contraseña guardada es el hash, nunca la clave real), UsuarioRepository con
el método derivado Optional<Usuario> findByUsername(String username),
UsuarioDetailsService (que responde a Spring "dame los datos de este usuario"
y usa orElseThrow) y SecurityConfig con el PasswordEncoder
(BCryptPasswordEncoder) y la cadena de filtros, con permitAll para /login,
/estilos.css y /error. Se explica la diferencia entre cifrar y aplicar un
hash —una caja con candado frente a una licuadora— y se muestra que BCrypt
produce un texto que empieza con $2a$ y distinto cada vez para la misma
clave. Se crean login.html y AccesoController: los campos se llaman
exactamente username y password y el formulario usa th:action, que agrega el
token contra envíos falsos. Las contraseñas entran por variables de entorno:
en application.properties solo hay un hueco, app.admin.password=${ADMIN_PASSWORD}
(y su par para el entrenador), y cada estudiante define sus propias claves en
la misma terminal desde la que arranca la aplicación. Se provoca la variable
faltante: sin definirlas la aplicación no arranca y el último "Caused by"
dice "Could not resolve placeholder 'ADMIN_PASSWORD'"; es una protección, no
un problema. Se advierte la trampa de la semana: CargadorUsuarios solo crea
los usuarios si no existen, de modo que cambiar la variable después no
cambia la clave ya guardada; en desarrollo se detiene la aplicación y se
borra la carpeta datos/ (que debe estar en .gitignore). Se pregunta al grupo
en qué archivo está escrita la contraseña del administrador; la respuesta
correcta es que en ninguno. Se recuerda la regla de oro de la sesión: ante un
error largo, leer el último "Caused by:".*

*Tiempo estimado: 25 minutos (minutos 20–45)*

*Recursos: `clase.html` bloque 3, `ejercicios.html` (ejercicios 2 a 5 y Kit
con todos los archivos completos), `cheatsheet.html`. La carpeta security/ va
dentro del paquete base gt.edu.url.tallerformularios.*

*Actividad que realizará el estudiante: Crear los archivos en paralelo al
docente, definir sus propias claves como variables de entorno, arrancar desde
la terminal y comprobar que entra con su usuario.*

4.  **Construcción del conocimiento — Roles: restringir rutas y ocultar botones**

*Actividad: Se escriben en SecurityConfig, en este orden exacto, las reglas
requestMatchers y se leen como un reglamento escolar: permitAll para
/login, /estilos.css y /error; hasRole("ADMIN") para /jugadores/nuevo y
/jugadores/*/editar; hasRole("ADMIN") para los POST a /jugadores/**; y
anyRequest().authenticated() siempre al final. Gana la primera regla que
coincide; si anyRequest() se escribe antes, la aplicación no arranca con
"Can't configure requestMatchers after anyRequest". En lista.html se usa
sec:authorize="hasRole('ADMIN')" en el enlace de inscribir y en la columna de
acciones, sec:authentication="name" para mostrar quién tiene la sesión y un
formulario POST con th:action para cerrar sesión; se recuerda el espacio de
nombres xmlns:sec y la dependencia thymeleaf-extras-springsecurity6. Se
prueba con los dos usuarios (la mitad del grupo con admin y la otra mitad con
entrenador, luego intercambian): admin crea, edita y elimina; entrenador solo
ve la lista. La prueba que importa: como entrenador, escribir a mano
http://localhost:8080/jugadores/nuevo en la barra de direcciones y recibir
"Acceso denegado" (403). Aviso al grupo completo: ocultar un botón no
protege; sec:authorize es cosmético (decide qué se dibuja) y requestMatchers
es la protección real (decide qué se permite).*

*Tiempo estimado: 10 minutos (minutos 45–55)*

*Recursos: `clase.html` bloque 4, `ejercicios.html` (ejercicio 6),
`cheatsheet.html` pestaña "Errores comunes".*

*Actividad que realizará el estudiante: Agregar las reglas por rol y los
sec:authorize, probar con admin y con entrenador, y comprobar el 403 al entrar
a mano a la ruta de crear.*

5.  **Práctica guiada — Repaso del CRUD con solo dos validaciones**

*Actividad: Como admin, se recorre el CRUD completo de Jugador (crear,
listar, editar, eliminar) sin explicarlo de nuevo: JugadorService,
JugadorController y JugadorRepository no cambian. Solo dos validaciones en
Jugador: @NotBlank en nombre y @NotNull @Min(5) @Max(17) en edad. Se
provoca y se lee el error: formulario vacío ("El nombre es obligatorio." y
"La edad es obligatoria.") y luego una edad de 25 ("La edad máxima es 17
años."). Se pregunta si se guardó algo y qué devolvió el controlador: con
errores se devuelve la plantilla, para no perder lo escrito; con éxito,
guardar, redirigir y mostrar. Se recuerda que el campo numérico es Integer y
no int.*

*Tiempo estimado: 8 minutos (minutos 55–63)*

*Recursos: `clase.html` bloque 5, `ejercicios.html` (ejercicio 7).*

*Actividad que realizará el estudiante: Recorrer el CRUD con su usuario
admin y provocar los dos mensajes de validación.*

6.  **Práctica y consolidación — Cierre: datos sensibles, Challenge, Quiz Final y conexión con la Semana 14**

*Actividad: Nota de datos sensibles (3 minutos): el grupo clasifica en el
chat qué es sensible y no debe llegar nunca a GitHub —contraseñas de
usuarios, DB_URL, DB_USER y DB_PASSWORD de Neon, tokens o claves de API, la
carpeta datos/ (contiene jugadores, es decir, datos de menores) y correos o
teléfonos reales de encargados— y qué no lo es —nombre del proyecto, código
sin secretos, nombres de clases, estilos—. Evidencias (3 minutos): resolución
del Challenge, ambientado en el Laboratorio de Robótica del Instituto Nuevo
Horizonte, con dos pestañas: la primera clasifica dónde vive cada dato (con
piezas trampa en los niveles medio y difícil: secretos escritos donde cualquiera
los lee, que se dejan en el banco) y la segunda es un simulador del inicio de
sesión con tres escenarios (login correcto, contraseña incorrecta y docente
que intenta entrar a una ruta de administrador); y Quiz en modo "Final" (12
preguntas autocalificadas, opciones barajadas). Conexión con la Semana 14:
hoy las contraseñas llegaron por variables de entorno de la terminal; en la
Semana 14 la aplicación se publica en Render y la base vive en Neon, con
DB_URL, DB_USER y DB_PASSWORD como variables de entorno del hosting: mismo
mecanismo, otro lugar. Ticket de salida en el chat: "¿qué dato de tu proyecto
real nunca debería llegar a GitHub?". Invitación a la evaluación anónima de la
sesión y presentación de la Guía de Aprendizaje 13. Si el tiempo aprieta, se
recorta el repaso del CRUD y se conservan el Challenge y el Quiz Final, de
donde salen los PDF que califican.*

*Tiempo estimado: 7 minutos (minutos 63–70)*

*Recursos: `challenge.html` y `quiz.html` (modo Final) del material de la
sesión, `proyecto.html` (guía y plantilla del entregable), formulario anónimo
de evaluación de la sesión (módulo `evaluacion_docente/`), chat de la
plataforma.*

*Actividad que realizará el estudiante: Clasificar los datos sensibles en el
chat, completar el Challenge y el Quiz Final y exportar ambos a PDF (se suben
al aula virtual como evidencia de la Actividad en clase — Sesión 13), escribir
su ticket de salida, responder la evaluación anónima (opcional pero
recomendada) y anotar la fecha límite de la Guía 13: antes de la Sesión 14
(17 de octubre de 2026).*
