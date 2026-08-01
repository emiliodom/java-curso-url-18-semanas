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

Sesión **[sincrónica]{.underline}** #4 — Sábado 1 de agosto de 2026, 11:10–12:20

**Tema:** Semana 4 · Unidad 2b — Ramas, colaboración y documentación

+----------------+------------------------------------------------------------+
|                | ![Cabeza con                                               |
|                | engranajes](media/image4.png){width="0.4583333333333333in" |
|                | height="0.4583333333333333in"}**Información importante**   |
+================+============================================================+
| **Aprendizajes | - Crea y fusiona ramas para gestionar versiones.           |
| esperados**    |                                                            |
|                | - Colabora en repositorios compartidos.                    |
|                |                                                            |
|                | - Documenta el proyecto con README profesional.            |
+----------------+------------------------------------------------------------+
| **Contenidos   | - Ramas (branches) y estrategia de trabajo.                |
| temáticos**    |                                                            |
|                | - Pull requests y revisión de código.                      |
|                |                                                            |
|                | - Resolución de conflictos básicos.                        |
|                |                                                            |
|                | - README.md y documentación del proyecto.                  |
+----------------+------------------------------------------------------------+
| **Habilidades  | - Gestión de Ramas: dominar el uso de branches para         |
| y destrezas**  |   implementar nuevas funcionalidades y resolver conflictos |
|                |   de fusión (merge conflicts) de forma aislada.            |
|                |                                                            |
|                | - Revisión Técnica: aplicar habilidades de lectura crítica |
|                |   mediante pull requests para validar la calidad del       |
|                |   código de otros.                                         |
+----------------+------------------------------------------------------------+
| **Valores y    | - Colaboración y Respeto: asumir una actitud profesional   |
| actitudes**    |   al dar y recibir retroalimentación constructiva durante  |
|                |   la revisión de código.                                   |
|                |                                                            |
|                | - Transparencia: valorar la documentación clara como el    |
|                |   medio principal para facilitar la comprensión del        |
|                |   proyecto por parte de otros desarrolladores.             |
+----------------+------------------------------------------------------------+
| **Productos    | *PDF del Quiz de Final de Clase + PDF del Challenge        |
| que evidencian | "Ordena el flujo de colaboración" (Actividad en clase —    |
| el             | Sesión 4, 0.66 pts). El trabajo autónomo se evidencia con  |
| aprendizaje**  | la Guía de Aprendizaje 4: rama de desarrollo y README      |
|                | profesional del proyecto (1 pt).*                          |
+----------------+------------------------------------------------------------+

  -----------------------------------------------------------------------
  ![Internet](media/image6.png){width="0.5104166666666666in"
  height="0.5104166666666666in"}**Desarrollo de la secuencia (70 minutos)**
  -----------------------------------------------------------------------

  -----------------------------------------------------------------------

> **Material de apoyo de la sesión:** carpeta HTML
> `Material_Sesion_Clase_4_HTML_18_semanas/` (hub `index.html` con guía
> docente, quizzes, ejercicios, cheat sheet, challenge, guía del proyecto y
> entregable, todos con exportación a PDF). Requiere **GitHub Desktop**
> (instalado en la Semana 3) y el repositorio del proyecto ya publicado en
> GitHub (Guía 3). Plan B sin instalar nada:
> <https://learngitbranching.js.org/?locale=es_ES>

1.  **Activación de presaberes — Quiz de Presaberes**

*Actividad: Bienvenida + resolución individual del Quiz de Presaberes en línea
(8 preguntas autocalificadas sobre trabajo en paralelo, revisión de código y
repaso de Git; no cuenta para nota).*

*Tiempo estimado: 5 minutos (minutos 00–05)*

*Recursos: `quiz_presaberes.html` del material de la sesión, enlace compartido
en el chat.*

*Actividad que realizará el estudiante: Responder el quiz, calificarse y
exportar su resultado a PDF.*

2.  **Construcción del conocimiento — ¿Por qué no trabajar siempre en main? Concepto de rama**

*Actividad: Pregunta detonadora "¿qué le pasa a la versión que ya funciona si
editas directo y tu cambio la rompe?". Explicación del concepto de rama
(branch) como copia paralela del proyecto, con la analogía de main como "la
versión en producción". Demostración en pantalla de la creación de una rama
con GitHub Desktop ("Current Branch" → "New Branch") sobre un repositorio de
práctica.*

*Tiempo estimado: 10 minutos (minutos 05–15)*

*Recursos: GitHub Desktop compartido en pantalla, `clase.html` (guion).*

*Actividad que realizará el estudiante: Crear su propia rama de práctica y
confirmar el cambio de "Current Branch".*

3.  **Construcción del conocimiento — Trabajar en una rama: cambios y commits aislados**

*Actividad: Demostración guiada en vivo del flujo de commit dentro de una
rama (idéntico al de la Semana 3, pero aislado de main): editar un archivo,
revisar en "Changes" y confirmar con "Commit to [nombre-de-la-rama]".*

*Tiempo estimado: 12 minutos (minutos 15–27)*

*Recursos: GitHub Desktop compartido en pantalla, `clase.html` (guion).*

*Actividad que realizará el estudiante: Hacer al menos un commit dentro de su
rama de práctica, confirmando que el botón de commit ya no dice "main".*

4.  **Construcción del conocimiento — Pull Request: proponer y revisar código**

*Actividad: Demostración de publicación de una rama ("Publish branch"),
creación de una Pull Request (Branch → Create Pull Request) verificando la
dirección "base: main ← compare: rama", y simulación de una revisión de
código comparando un comentario destructivo contra uno constructivo.*

*Tiempo estimado: 10 minutos (minutos 27–37)*

*Recursos: Cuenta de GitHub del docente en pantalla compartida, una segunda
cuenta o repositorio de ejemplo para simular la revisión.*

*Actividad que realizará el estudiante: Publicar su rama, crear su propia
Pull Request y escribir una descripción clara de su cambio.*

***Pausa activa***

*Actividad: Pausa breve para descanso, hidratación y reinicio de foco.
Micro-check en el chat: "¿ya ves tu Pull Request en GitHub.com?"*

*Tiempo estimado: 2 minutos (minutos 37–39)*

5.  **Construcción del conocimiento — Fusión (merge) y resolución de un conflicto básico**

*Actividad: Demostración del caso sin conflicto (Merge pull request →
Confirm merge → Fetch origin en GitHub Desktop) y, después, del caso con
conflicto usando dos ramas preparadas de antemano que editan la misma línea
de un archivo: identificación de las marcas de conflicto
(`<<<<<<<`/`=======`/`>>>>>>>`), edición manual del archivo en VS Code,
eliminación de las marcas y confirmación con "Commit merge".*

*Tiempo estimado: 10 minutos (minutos 39–49)*

*Recursos: Repositorio de ejemplo con conflicto premeditado, VS Code y
GitHub Desktop compartidos en pantalla.*

*Actividad que realizará el estudiante: Observar la resolución del conflicto
guiada y anotar los pasos para su propia práctica en `ejercicios.html`.*

6.  **Práctica — Challenge "Ordena el flujo de colaboración" + práctica guiada**

*Actividad: Juego interactivo de arrastrar y soltar en tres niveles (fácil:
rama y primer commit; medio: publicar y proponer Pull Request, con acciones
trampa; difícil: revisión, conflicto y fusión, con acciones trampa), con
retroalimentación instantánea en cada movimiento (notificaciones tipo
toast). El docente modela el nivel fácil y acompaña con preguntas guía sobre
el orden del flujo.*

*Tiempo estimado: 8 minutos (minutos 49–57)*

*Recursos: `challenge.html` del material de la sesión. Quien termina antes
continúa con los Ejercicios 6–8 de `ejercicios.html`.*

*Actividad que realizará el estudiante: Completar al menos el nivel medio,
alcanzar el 100% verificando su resultado y exportarlo a PDF.*

7.  **Consolidación — Quiz de Final de Clase**

*Actividad: Resolución individual del Quiz de Final de Clase (10 preguntas
autocalificadas sobre ramas, Pull Requests, merges, conflictos y
documentación) con retroalimentación inmediata por pregunta.*

*Tiempo estimado: 8 minutos (minutos 57–65)*

*Recursos: `quiz_final.html` del material de la sesión.*

*Actividad que realizará el estudiante: Responder, calificarse, revisar la
retroalimentación y exportar el resultado a PDF. Los PDF del quiz y del
challenge se suben al aula virtual como evidencia de la Actividad en clase —
Sesión 4.*

8.  **Reflexión, evaluación anónima y cierre**

*Actividad: Síntesis en tres frases (experimenta en una rama, propón con una
Pull Request, deja que main siempre funcione), ticket de salida ("1
aprendizaje + 1 duda" en el chat), invitación a la evaluación anónima de la
sesión, presentación de la página `proyecto.html` (aplicar todo lo visto al
repositorio real) y de la Guía de Aprendizaje 4, y puente a la semana 5
("la próxima semana verán patrones de diseño y arquitectura web — MVC —
para organizar el código dentro de cada archivo").*

*Tiempo estimado: 5 minutos (minutos 65–70)*

*Recursos: `proyecto.html` y `entregable.html` (plantilla de la Guía 4),
formulario anónimo de evaluación de la sesión (módulo `evaluacion_docente/`),
chat de la plataforma.*

*Actividad que realizará el estudiante: Escribir su ticket de salida,
responder la evaluación anónima (opcional pero recomendada) y anotar la
fecha límite de la Guía 4: antes de la Sesión 5 (8 de agosto de 2026).*
