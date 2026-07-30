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
| |                            | Número de créditos: 4                   | |
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

Sesión **[sincrónica]{.underline}** #3 — Sábado 25 de julio de 2026, 11:10–12:20

**Tema:** Semana 3 · Unidad 2a — Git y GitHub: control de versiones

+----------------+------------------------------------------------------------+
|                | ![Cabeza con                                               |
|                | engranajes](media/image4.png){width="0.4583333333333333in" |
|                | height="0.4583333333333333in"}**Información importante**   |
+================+============================================================+
| **Aprendizajes | - Instala y configura Git en su entorno de trabajo.        |
| esperados**    |                                                            |
|                | - Realiza commits y gestiona el historial de cambios.      |
|                |                                                            |
|                | - Comprende la importancia del versionamiento en           |
|                |   proyectos.                                               |
+----------------+------------------------------------------------------------+
| **Contenidos   | - Conceptos de control de versiones.                       |
| temáticos**    |                                                            |
|                | - Instalación y configuración de Git.                       |
|                |                                                            |
|                | - Flujo básico: init, add, commit, push.                   |
|                |                                                            |
|                | - Repositorios remotos en GitHub.                          |
+----------------+------------------------------------------------------------+
| **Habilidades  | - Dominio del Flujo de Trabajo: ejecutar con fluidez el     |
| y destrezas**  |   ciclo de vida básico de Git (init, add, commit, push)    |
|                |   para gestionar cambios.                                  |
|                |                                                            |
|                | - Integración Remota: configurar y sincronizar             |
|                |   repositorios locales con plataformas remotas como        |
|                |   GitHub.                                                  |
+----------------+------------------------------------------------------------+
| **Valores y    | - Orden y Trazabilidad: valorar la importancia de          |
| actitudes**    |   documentar los cambios en el código mediante mensajes    |
|                |   de commit significativos.                                |
|                |                                                            |
|                | - Seguridad Colaborativa: comprender el control de         |
|                |   versiones como una medida esencial para proteger el      |
|                |   progreso del proyecto ante errores o pérdidas.           |
+----------------+------------------------------------------------------------+
| **Productos    | *PDF del Quiz de Final de Clase + PDF del Challenge        |
| que evidencian | "Ordena el flujo Git" (Actividad en clase — Sesión 3,      |
| el             | 0.66 pts). El trabajo autónomo se evidencia con la Guía    |
| aprendizaje**  | de Aprendizaje 3: repositorio inicial del proyecto en      |
|                | GitHub (1 pt).*                                            |
+----------------+------------------------------------------------------------+

  -----------------------------------------------------------------------
  ![Internet](media/image6.png){width="0.5104166666666666in"
  height="0.5104166666666666in"}**Desarrollo de la secuencia (70 minutos)**
  -----------------------------------------------------------------------

  -----------------------------------------------------------------------

> **Material de apoyo de la sesión:** carpeta HTML
> `Material_Sesion_Clase_3_HTML_18_semanas/` (hub `index.html` con guía
> docente, quizzes, ejercicios, cheat sheet, challenge y entregable, todos
> con exportación a PDF). Requiere **GitHub Desktop** instalado
> (`instalacion_github_desktop.html`, ruta 100% gráfica, sin comandos) y
> cuenta de GitHub — o, para quien ya tenga soltura con la terminal, Git
> instalado (Semana 1) más el `anexo_comandos.html` de la carpeta. Plan B
> sin instalar nada: <https://learngitbranching.js.org/?locale=es_ES>

1.  **Activación de presaberes — Quiz de Presaberes**

*Actividad: Bienvenida + resolución individual del Quiz de Presaberes en línea
(8 preguntas autocalificadas sobre respaldos, versiones e intuición de
"guardar cambios"; no cuenta para nota).*

*Tiempo estimado: 5 minutos (minutos 00–05)*

*Recursos: `quiz_presaberes.html` del material de la sesión, enlace compartido
en el chat.*

*Actividad que realizará el estudiante: Responder el quiz, calificarse y
exportar su resultado a PDF.*

2.  **Construcción del conocimiento — Conceptos de control de versiones + verificar Git**

*Actividad: Pregunta detonadora "¿qué pasa si dos personas editan el mismo
documento a la vez?". Explicación de Git (herramienta local) y GitHub (sitio
remoto), con la analogía del historial de versiones de Google Docs.
Verificación grupal de la instalación de Git (`git --version`,
`git config --global --list`).*

*Tiempo estimado: 10 minutos (minutos 05–15)*

*Recursos: Terminal compartida en pantalla, material de instalación de la
Semana 1 como respaldo.*

*Actividad que realizará el estudiante: Verificar su propia instalación de
Git y configurar nombre/correo si falta.*

3.  **Construcción del conocimiento — Flujo local: init, add, commit, log**

*Actividad: Demostración guiada en vivo de las tres zonas de Git (directorio
de trabajo, área de preparación, repositorio) con los comandos `git init`,
`git status`, `git add`, `git commit -m` y `git log --oneline` sobre una
carpeta de ejemplo.*

*Tiempo estimado: 12 minutos (minutos 15–27)*

*Recursos: Terminal compartida en pantalla, `clase.html` (guion).*

*Actividad que realizará el estudiante: Crear su propio repositorio de
práctica, seguir los mismos pasos y confirmar su primer commit con
`git log --oneline`.*

4.  **Construcción del conocimiento — Repositorio remoto: GitHub + push**

*Actividad: Demostración de creación de un repositorio vacío en
github.com/new, conexión con `git remote add origin`, verificación con
`git remote -v` y primera subida con `git branch -M main` +
`git push -u origin main`. Mención breve del error común "failed to push
some refs" y adelanto de ramas/PR/merge (detallado en el cheat sheet).*

*Tiempo estimado: 10 minutos (minutos 27–37)*

*Recursos: Cuenta de GitHub del docente en pantalla compartida.*

*Actividad que realizará el estudiante: Crear su propio repositorio en
GitHub, conectarlo y subir su carpeta de práctica, verificando que los
archivos aparecen en el navegador.*

***Pausa activa***

*Actividad: Pausa breve para descanso, hidratación y reinicio de foco.
Micro-check en el chat: "¿ya ves tus archivos en GitHub.com?"*

*Tiempo estimado: 2 minutos (minutos 37–39)*

5.  **Construcción del conocimiento — Buenas prácticas: mensajes de commit + .gitignore**

*Actividad: Comparación de mensajes de commit claros vs. ambiguos.
Explicación del archivo `.gitignore` (qué es, para qué sirve) con un ejemplo
para proyectos Java. Énfasis en nunca subir contraseñas ni datos sensibles.*

*Tiempo estimado: 10 minutos (minutos 39–49)*

*Recursos: Ejemplos de código en vivo.*

*Actividad que realizará el estudiante: Agregar un `.gitignore` a su
repositorio de práctica y verificar con `git status` que los archivos
ignorados ya no aparecen.*

6.  **Práctica — Challenge "Ordena el flujo Git" + práctica guiada**

*Actividad: Juego interactivo de arrastrar y soltar en tres niveles (fácil:
primer commit local; medio: conexión con GitHub, con comandos trampa;
difícil: rama + push + merge, con comandos trampa), con retroalimentación
instantánea en cada movimiento (notificaciones tipo toast). El docente
modela el nivel fácil y acompaña con preguntas guía sobre el orden del
flujo.*

*Tiempo estimado: 8 minutos (minutos 49–57)*

*Recursos: `challenge.html` del material de la sesión. Quien termina antes
continúa con los Ejercicios 5–8 de `ejercicios.html`.*

*Actividad que realizará el estudiante: Completar al menos el nivel medio,
alcanzar el 100% verificando su resultado y exportarlo a PDF.*

7.  **Consolidación — Quiz de Final de Clase**

*Actividad: Resolución individual del Quiz de Final de Clase (10 preguntas
autocalificadas sobre Git y GitHub) con retroalimentación inmediata por
pregunta.*

*Tiempo estimado: 8 minutos (minutos 57–65)*

*Recursos: `quiz_final.html` del material de la sesión.*

*Actividad que realizará el estudiante: Responder, calificarse, revisar la
retroalimentación y exportar el resultado a PDF. Los PDF del quiz y del
challenge se suben al aula virtual como evidencia de la Actividad en clase —
Sesión 3.*

8.  **Reflexión, evaluación anónima y cierre**

*Actividad: Síntesis en tres frases (fotografiar cambios, guardarlos en
internet, nunca perder el progreso), ticket de salida ("1 aprendizaje + 1
duda" en el chat), invitación a la evaluación anónima de la sesión,
presentación de la Guía de Aprendizaje 3 y puente a la semana 4 ("usarán
ramas para trabajar sin romper lo que ya funciona, y propondrán cambios con
una Pull Request").*

*Tiempo estimado: 5 minutos (minutos 65–70)*

*Recursos: `entregable.html` (plantilla de la Guía 3), formulario anónimo de
evaluación de la sesión (módulo `evaluacion_docente/`), chat de la
plataforma.*

*Actividad que realizará el estudiante: Escribir su ticket de salida,
responder la evaluación anónima (opcional pero recomendada) y anotar la
fecha límite de la Guía 3: antes de la Sesión 4 (1 de agosto de 2026).*
