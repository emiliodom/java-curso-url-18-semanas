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

Sesión **[sincrónica]{.underline}** #15 — Sábado 24 de octubre de 2026, 11:10–12:20

**Tema:** Semana 15 — Unidad 8a: Seguridad básica y HTTPS

| ![Cabeza con engranajes](media/image4.png){width="0.4583333333333333in" height="0.4583333333333333in"}**Información importante** | |
|:---|:---|
| **Aprendizajes esperados** | - Aplica principios básicos de seguridad web.<br>- Verifica la configuración HTTPS ya provista por Render.<br>- Identifica vulnerabilidades comunes en aplicaciones web. |
| **Contenidos temáticos** | - HTTPS ya viene resuelto: Render provee certificado SSL automático y gratuito sobre `*.onrender.com`; el foco es verificar que está activo.<br>- Protección CSRF y XSS: Spring Security trae CSRF habilitado por defecto para formularios Thymeleaf; solo se desactivaría en una API REST pura sin sesión, y en este proyecto debe permanecer activo.<br>- Cabeceras de seguridad HTTP: `X-Content-Type-Options` y `X-Frame-Options`, añadidas por defecto por Spring Security.<br>- SSL en la conexión a la base de datos: la cadena de Neon usa `sslmode=require`.<br>- Cómo utilizar todo lo construido para el proyecto propio: transformar el Kit de la Semana 14 en una ficha única (10–15 campos, sin relaciones), tipos de campos, páginas estáticas y páginas con parámetros. |
| **Habilidades y destrezas** | - Fortalecimiento de seguridad ya provista por la plataforma.<br>- Análisis crítico de la configuración propia.<br>- Adaptación de una plantilla de código al proyecto propio. |
| **Valores y actitudes** | - Mentalidad defensiva.<br>- Responsabilidad técnica. |
| **Productos que evidencian el aprendizaje** | *PDF del Quiz (modo Final) + PDF del Challenge (Actividad en clase — Sesión 15, 0.66 pts). El trabajo autónomo se evidencia con la Guía de Aprendizaje 15 (1 pt): auditoría de seguridad básica y checkpoint de entrega del proyecto.* |

![Internet](media/image6.png){width="0.5104166666666666in" height="0.5104166666666666in"}**Desarrollo de la secuencia (70 minutos)**

> **Material de apoyo de la sesión:** carpeta HTML
> `Material_Sesion_Clase_15_HTML_18_semanas/` (hub `index.html` con el
> inventario «hasta dónde hemos llegado», quiz unificado, guía docente,
> `ejercicios.html` con seis chequeos de auditoría y el diseño de la ficha
> propia, cheat sheet de tres pestañas, `transformar.html` —del Kit a tu
> proyecto—, `paginas.html` —páginas estáticas y con parámetros—, challenge
> de tres retos y la página «Checkpoint» con la lista de cotejo de entrega).
>
> **Alcance de la sesión (versión mínima):** los estudiantes van atrasados
> con el proyecto, por lo que la sesión es solo teoría y práctica en el
> navegador: **no se implementa código nuevo**. La seguridad la proveen
> Render (HTTPS) y Neon (SSL); se explica y se verifica. Desde esta semana
> no se agregan características nuevas: el resto del tiempo se dedica a
> adaptar el Kit al proyecto de cada estudiante y a preparar la entrega.

1.  **Activación de presaberes — Quiz (modo Presaberes) y «¿quién protege qué?»**

*Actividad: Resolución individual del Quiz en modo «Presaberes» (8 preguntas sorteadas). Se muestra el diagrama de los tres dueños de la seguridad: Render (HTTPS), Spring Security (CSRF, cabeceras, BCrypt) y Neon (SSL).*

*Tiempo estimado: 7 minutos (minutos 00–07)*

*Recursos: `quiz.html`, `index.html`.*

*Actividad que realizará el estudiante: Responder el quiz y explicar en el chat quién emitió el candado de su aplicación.*

2.  **Construcción del conocimiento — Auditoría de seguridad básica**

*Actividad: Se recorren en vivo los seis chequeos de `ejercicios.html` sobre la URL pública: candado HTTPS, redirección de http a https, cabeceras de seguridad en DevTools, campo `_csrf` en los formularios, un nombre con `<b>` mostrado como texto (`th:text` frente a `th:utext`) y `sslmode=require` en `DB_URL`. Se explica CSRF con la analogía del talonario con sello y cuándo tendría sentido desactivarlo (API REST pura sin sesión).*

*Tiempo estimado: 15 minutos (minutos 07–22)*

*Recursos: `ejercicios.html` (ejercicios 1–6), `cheatsheet.html` (pestaña Seguridad).*

*Actividad que realizará el estudiante: Repetir los seis chequeos con su propia URL y anotar el resultado en la Parte A del Checkpoint.*

3.  **Práctica guiada — Hasta dónde hemos llegado y del Kit a mi proyecto**

*Actividad: Se presenta el inventario de lo construido (Semanas 10–15) y la congelación de características. Con el ejemplo de la ficha única `Libro` (13 campos, sin relaciones) se explica cómo transformar `Jugador`: qué archivos cambian y cuáles no, la tabla de tipos Java (`String`, `Integer`, `BigDecimal`, `LocalDate`, `boolean`) con su input HTML y su validación, las rutas de `SecurityConfig` y la trampa de `ddl-auto=update` (columna obligatoria nueva sobre una tabla con datos).*

*Tiempo estimado: 23 minutos (minutos 22–45)*

*Recursos: `index.html` (inventario), `transformar.html`, `cheatsheet.html` (pestaña Campos y tipos).*

*Actividad que realizará el estudiante: Escribir en la Parte B del Checkpoint la ficha de su proyecto (10–15 campos con tipo, obligatoriedad y validación).*

4.  **Práctica guiada — Páginas estáticas y páginas con parámetros**

*Actividad: Se construye conceptualmente la página `/creditos` (plantilla, método `@GetMapping`, regla `permitAll`) y se explican las páginas con parámetros: `@PathVariable` para un registro (`/libros/7`) y `@RequestParam` para filtros opcionales (`/buscar?genero=Novela`), la regla «leer = GET, cambiar = POST» y la relación con XSS y CSRF.*

*Tiempo estimado: 10 minutos (minutos 45–55)*

*Recursos: `paginas.html`.*

*Actividad que realizará el estudiante: Decidir en la Parte D del Checkpoint su página estática y su página con parámetro.*

5.  **Consolidación — Evidencias y checkpoint de entrega**

*Actividad: Challenge (clasificar los 13 campos de una ficha en su tipo Java, ordenar la receta de adaptación del Kit con tres trampas y resolver cuatro casos de seguridad) y Quiz en modo «Final» (12 preguntas). Se presenta la lista de cotejo de entrega y la rúbrica de la Guía 15. Ticket de salida: «Mi entidad se llama ___ y tendrá ___ campos». Si el tiempo aprieta, se conserva el Challenge de campos y el Quiz Final.*

*Tiempo estimado: 15 minutos (minutos 55–70)*

*Recursos: `challenge.html`, `quiz.html` (modo Final), `proyecto.html`, formulario anónimo de evaluación de la sesión (`evaluacion_docente/`).*

*Actividad que realizará el estudiante: Completar y exportar a PDF el Challenge y el Quiz Final (Actividad en clase — Sesión 15), comenzar la lista de cotejo y anotar la fecha límite de la Guía 15: antes de la Sesión 16 (31 de octubre de 2026).*
