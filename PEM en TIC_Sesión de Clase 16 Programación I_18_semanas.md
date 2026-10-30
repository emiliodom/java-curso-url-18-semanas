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

Sesión **[sincrónica]{.underline}** #16 — Sábado 31 de octubre de 2026, 11:10–12:20

**Tema:** Semana 16 — Unidad 8b: QA, pruebas funcionales, arquitectura y mantenimiento

| ![Cabeza con engranajes](media/image4.png){width="0.4583333333333333in" height="0.4583333333333333in"}**Información importante** | |
|:---|:---|
| **Aprendizajes esperados** | - Domina y explica el árbol de directorios del proyecto Spring Boot y la función de sus archivos clave.<br>- Comprende y diagrama la interacción completa entre Modelo, Controlador, Formulario Thymeleaf y Repositorio.<br>- Diseña y ejecuta una matriz de casos de prueba funcional para verificar el flujo extremo a extremo.<br>- Aplica el ciclo de mantenimiento continuo: cambio en código local → commit → push a GitHub → redeploy automático en Render. |
| **Contenidos temáticos** | - **Refuerzo arquitectónico integral:** árbol del proyecto (`src/main/java`, `model`, `repository`, `service`, `controller`, `config`, `resources/templates`, `static`), responsabilidades de cada archivo y paquete.<br>- **Ciclo de vida del dato:** flujo detallado Formulario (HTML/Thymeleaf) ↔ Controlador (`@GetMapping`/`@PostMapping`) ↔ Validación (`BindingResult`) ↔ Repositorio (`JpaRepository`) ↔ Neon PostgreSQL.<br>- **QA y pruebas funcionales:** concepto de aseguramiento de calidad, diseño de casos de prueba (CP), entradas, pasos, resultados esperados vs. obtenidos y severidad.<br>- **Documentación técnica mínima:** README profesional del sistema, manual de instalación y variables de entorno.<br>- **Ciclo cambio → push → redeploy:** verificación del pipeline continuo en Render sin intervención manual en el servidor. |
| **Habilidades y destrezas** | - Trazabilidad y diagnóstico de fallas a través de las capas del sistema.<br>- Diseño sistemático de casos de prueba y listas de verificación de QA.<br>- Gestión de despliegue continuo mediante control de versiones. |
| **Valores y actitudes** | - Rigurosidad técnica en la verificación.<br>- Disciplina en el mantenimiento y la documentación. |
| **Productos que evidencian el aprendizaje** | *PDF del Quiz (modo Final) + PDF del Challenge (Actividad en clase — Sesión 16, 0.66 pts). El trabajo autónomo se evidencia con la Guía de Aprendizaje 16 (1 pt): matriz de pruebas funcionales ejecutada + evidencia de redeploy exitoso en Render con captura del log.* |

![Internet](media/image6.png){width="0.5104166666666666in" height="0.5104166666666666in"}**Desarrollo de la secuencia (70 minutos)**

> **Material de apoyo de la sesión:** carpeta HTML
> `Material_Sesion_Clase_16_HTML_18_semanas/` (hub `index.html` con mapa del árbol y flujo de datos interactivo, quiz unificado, guía docente `clase.html`, `ejercicios.html` con diseño y ejecución de 6 casos de prueba, cheat sheet con anatomía del proyecto y matriz QA, challenge de clasificación del árbol y tubería de ejecución, y `proyecto.html` con la plantilla de reporte de QA y redeploy).
>
> **Enfoque pedagógico prioritario:** ante la dificultad de los estudiantes para integrar los conceptos de las semanas 10 a 15, esta sesión no introduce librerías nuevas. Dedica el 50% del tiempo a consolidar el mapa mental de la arquitectura (dónde vive cada archivo y cómo viaja el dato) y el otro 50% a estructurar las pruebas y el mantenimiento en Render.

1.  **Activación de presaberes — Quiz (Presaberes) y el mapa del árbol**

*Actividad: Resolución del Quiz en modo Presaberes (8 preguntas). Diagnóstico en vivo sobre las dudas frecuentes: ¿por qué un archivo en la carpeta equivocada no es detectado por Spring?, ¿dónde se define el formulario y dónde se reciben los datos?*

*Tiempo estimado: 8 minutos (minutos 00–08)*

*Recursos: `quiz.html`, diagrama del árbol en `index.html`.*

*Actividad que realizará el estudiante: Responder el quiz y ubicar en el chat en qué archivo ocurre el guardado en base de datos.*

2.  **Construcción del conocimiento — El viaje del dato: Formulario ↔ Controlador ↔ Modelo ↔ Repositorio**

*Actividad: Demostración visual y en código del circuito completo de una petición web: (1) GET `/nuevo` con `model.addAttribute`, (2) render en Thymeleaf con `th:object` y `th:field`, (3) POST con `@ModelAttribute` y `@Valid`, (4) bifurcación por error con `BindingResult`, (5) invocación a `repositorio.save()` y persistencia en Neon, (6) patrón POST-Redirect-GET. Se identifican los archivos clave y sus responsabilidades.*

*Tiempo estimado: 22 minutos (minutos 08–30)*

*Recursos: `clase.html`, `cheatsheet.html` (pestaña Arquitectura y Flujo).*

*Actividad que realizará el estudiante: Seguir el diagrama en su pantalla y verificar que en su proyecto las 4 capas coincidan con el estándar.*

3.  **Práctica guiada — Diseño y ejecución de casos de prueba funcionales (QA)**

*Actividad: Metodología de QA para proyectos web educativos: cómo escribir un caso de prueba con identificador, precondición, pasos, datos de entrada, resultado esperado y estado. Ejecución guiada de 4 casos clave: CP-01 (carga de formulario vacío), CP-02 (envío con validaciones fallidas y mensajes visibles), CP-03 (persistencia exitosa y redirección), y CP-04 (control de acceso con roles ADMIN vs usuario común).*

*Tiempo estimado: 20 minutos (minutos 30–50)*

*Recursos: `ejercicios.html`, matriz de QA en `proyecto.html`.*

*Actividad que realizará el estudiante: Ejecutar los casos de prueba sobre su aplicación desplegada en Render y registrar los resultados en su formato.*

4.  **Práctica guiada — Ciclo de mantenimiento: cambio → commit → push → redeploy en Render**

*Actividad: Demostración en vivo de mantenimiento en producción: corrección de un texto o estilo en el proyecto local, prueba rápida, `git commit -m "QA: corrección en formulario"`, `git push origin main`. Inspección en vivo del panel de Render: log de build (`mvn clean package`), log de deploy y verificación en la URL pública con recarga.*

*Tiempo estimado: 10 minutos (minutos 50–60)*

*Recursos: Consola de Render, terminal Git, `proyecto.html` (Parte B).*

*Actividad que realizará el estudiante: Realizar un ajuste menor en su repositorio, enviar el push a GitHub y monitorear el log en Render hasta ver el mensaje de deploy exitoso.*

5.  **Consolidación — Challenge, Quiz Final y rúbrica de la Guía 16**

*Actividad: Challenge interactivo (armar el árbol del proyecto ubicando los archivos clave en sus carpetas correctas + simulación del flujo de datos en caso de error de validación) y Quiz en modo Final (12 preguntas). Revisión de la rúbrica de la Guía 16 y preparación para el hito de la Semana 17 (Entrega Parcial 4).*

*Tiempo estimado: 10 minutos (minutos 60–70)*

*Recursos: `challenge.html`, `quiz.html` (modo Final), `proyecto.html` (rúbrica), `evaluacion_docente/`.*

*Actividad que realizará el estudiante: Exportar PDF del Challenge y Quiz Final, y verificar los requisitos de entrega de la Guía 16 para antes de la Sesión 17 (7 de noviembre de 2026).*

