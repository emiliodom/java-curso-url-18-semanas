# Universidad Rafael Landívar
### Facultad de Humanidades — Departamento de Educación
## Programa del curso

---

## 1. Información del profesor y generalidad del curso

| Campo | Detalle |
|---|---|
| Nombre del profesor | EMILIO JOSÉ DOMÍNGUEZ ORTEGA |
| Correo electrónico | ejdominguezo@url.edu.gt |
| Día y horario de las sesiones | Sábados, 11:10 a 12:20 |
| Salón | En línea |
| Enlace de la sesión virtual | En Aula Virtual |

---

## 2. Información general

### 2.1 Descripción del curso
*(sección a completar por el profesor con la descripción institucional del curso)*

### 2.2 Modalidad
El curso se desarrolla en modalidad completamente virtual, combinando:
- **Sesiones sincrónicas semanales:** cada sábado durante 1 hora 10 minutos, incluyendo demostración de contenidos, resolución de dudas, demostraciones prácticas y seguimiento del proyecto.
- **Trabajo autónomo semanal:** el estudiante realiza ejercicios prácticos, avanza en el proyecto y completa la guía semanal de forma asincrónica entre sesiones.

### 2.3 Competencias e indicadores de logro
**Competencia general:** Diseña y facilita soluciones web básicas utilizando Java y Spring Boot, aplicando principios de programación, control de versiones y despliegue web, con un enfoque pedagógico y de impacto social.

- Semanas 1–2: Aplica fundamentos de lógica y buenas prácticas de programación en Java
- Semanas 3–4: Utiliza GitHub para el control de versiones de proyectos educativos
- Semanas 5–6: Comprende y aplica patrones de diseño básicos en el desarrollo web
- Semanas 7–8: Configura y desarrolla proyectos con Spring Boot
- Semanas 10–11: Implementa rutas, controladores y formularios con validación
- Semanas 12–13: Desarrolla aplicaciones con persistencia de datos y autenticación
- Semanas 14–16: Publica y mantiene aplicaciones web en entornos de producción **sobre Render (hosting) y Neon (base de datos PostgreSQL)**
- Semanas 17–18: Presenta proyectos con impacto social y facilita evaluación crítica entre pares

### 2.4 Metodología
- **Aprendizaje invertido:** la exposición de saberes se realiza por medio de documentos, videos y otros materiales por parte del estudiante. El tiempo de sesión sincrónica se dedica a la discusión, resolución de problemas y actividades prácticas bajo la supervisión del profesor (Edutrends).
- **Aprendizaje basado en proyectos:** se orienta al diseño y desarrollo de un proyecto de manera colaborativa, como forma de lograr los objetivos de aprendizaje y desarrollar competencias de administración de proyectos reales (Edutrends).
- **Aprendizaje basado en indagación:** el docente ayuda a los alumnos a externar ideas a través de preguntas y la indagación constante ante un problema (Educrea).

### 2.5 Proyecto que se desarrollará
Los estudiantes desarrollarán una aplicación web funcional orientada al registro y gestión de información de una entidad sin fines de lucro (guarderías, casas hogar o dispensarios comunitarios). El sistema se construye de forma incremental a lo largo de las 18 semanas y permitirá:
- Registro e información básica de beneficiarios o usuarios
- Gestión sencilla de datos con operaciones CRUD
- Autenticación por perfiles y roles de usuario
- Interfaz amigable, accesible y responsiva
- Fácil mantenimiento, documentación técnica y escalabilidad básica
- **Despliegue en línea con URL pública y HTTPS, sobre Render conectado a una base de datos PostgreSQL gestionada en Neon**

### 2.6 Responsabilidades del estudiante en el curso
- Conectarse puntualmente a cada sesión sincrónica semanal (1 hora 10 minutos cada sábado).
- Completar las guías de aprendizaje autónomo semanales (18 guías en total).
- Avanzar progresivamente en el proyecto con cuatro entregas parciales.
- Aplicar buenas prácticas de organización, documentación y control de versiones.
- Participar en las dos rondas de evaluación entre pares (semanas 9 y 18).

---

## 3. Programación

### Semana 1 · Unidad 1a — Fundamentos de Java y tipos de datos
**Fecha:** 11 de julio de 2026
**Aprendizajes esperados:** Comprende la estructura básica del lenguaje Java · Declara variables, constantes y tipos primitivos · Aplica operadores y expresiones simples

**Contenidos temáticos:** Introducción al lenguaje Java y su ecosistema · Variables, tipos de datos y conversiones · Operadores aritméticos, lógicos y de comparación · Estructura básica de un programa Java

**Habilidades y destrezas:** Dominio del entorno (configurar y ejecutar un programa desde consola o IDE) · Análisis sintáctico (estructura clase/método main y reglas de tipado)

**Valores y actitudes:** Resiliencia ante el error (verlo como aprendizaje, no fracaso) · Pensamiento crítico (cuestionar el tipado fuerte de Java)

**Guía de Aprendizaje 1:** Ejercicios de variables y expresiones en Java

---

### Semana 2 · Unidad 1b — Lógica, métodos y buenas prácticas
**Fecha:** 18 de julio de 2026 *(Feriado alumnos Antigua)*
**Aprendizajes esperados:** Utiliza condicionales y ciclos para resolver problemas · Organiza el código en métodos reutilizables · Aplica indentación y convenciones de nomenclatura

**Contenidos temáticos:** Condicionales (if/else, switch) y ciclos (for, while) · Métodos: declaración, parámetros y retorno · Organización del código y buenas prácticas · Introducción a clases y objetos simples

**Habilidades y destrezas:** Control de flujo · Abstracción básica (encapsular lógica en métodos)

**Valores y actitudes:** Pensamiento algorítmico · Visión sistémica

**Guía de Aprendizaje 2:** Mini-programa con métodos y ciclos

---

### Semana 3 · Unidad 2a — Git y GitHub: control de versiones
**Fecha:** 25 de julio de 2026
**Aprendizajes esperados:** Instala y configura Git en su entorno de trabajo · Realiza commits y gestiona el historial de cambios · Comprende la importancia del versionamiento en proyectos

**Contenidos temáticos:** Conceptos de control de versiones · Instalación y configuración de Git · Flujo básico: init, add, commit, push · Repositorios remotos en GitHub

**Habilidades y destrezas:** Dominio del flujo de trabajo Git · Integración remota con GitHub

**Valores y actitudes:** Orden y trazabilidad · Seguridad colaborativa

**Guía de Aprendizaje 3:** Repositorio inicial del proyecto en GitHub

---

### Semana 4 · Unidad 2b — Ramas, colaboración y documentación
**Fecha:** 1 de agosto de 2026
**Aprendizajes esperados:** Crea y fusiona ramas para gestionar versiones · Colabora en repositorios compartidos · Documenta el proyecto con README profesional

**Contenidos temáticos:** Ramas (branches) y estrategia de trabajo · Pull requests y revisión de código · Resolución de conflictos básicos · README.md y documentación del proyecto

**Habilidades y destrezas:** Gestión de ramas y resolución de merge conflicts · Revisión técnica vía pull requests

**Valores y actitudes:** Colaboración y respeto · Transparencia en la documentación

**Guía de Aprendizaje 4:** Rama de desarrollo y README del proyecto

---

### Semana 5 · Patrones de diseño y arquitectura web (MVC)
**Fecha:** 8 de agosto de 2026
**Aprendizajes esperados:** Comprende el propósito de los patrones de diseño · Aplica el patrón MVC de forma conceptual y práctica · Distingue responsabilidades entre capas de la aplicación

**Contenidos temáticos:** Introducción a patrones de diseño de software · Patrón MVC: Modelo, Vista, Controlador · Separación de responsabilidades · Organización de carpetas en un proyecto web

**Habilidades y destrezas:** Arquitectura de software (MVC) · Estructuración de proyectos

**Valores y actitudes:** Orden lógico · Visión analítica

**Guía de Aprendizaje 5:** Diagrama MVC + ★ **Entrega parcial 1:** propuesta con estructura MVC

---

### Semana 6 *(Feriado Estudiantes La Capital)*
**Fecha:** 15 de agosto de 2026
**Aprendizajes esperados:** Diseña la arquitectura en capas de su aplicación · Comprende la relación entre servicios, repositorios y controladores · Aplica principios básicos de bajo acoplamiento

**Contenidos temáticos:** Arquitectura en capas: presentación, negocio, datos · Capas de servicio y repositorio · Relación entre patrones y frameworks modernos · Revisión del diseño del proyecto personal

**Habilidades y destrezas:** Implementación de arquitectura en capas · Integración de patrones con frameworks modernos

**Valores y actitudes:** Visión estratégica · Mentalidad crítica

**Guía de Aprendizaje 6:** Diagrama de capas y entidades del proyecto

---

### Semana 7 · Entorno de desarrollo y Spring Boot
**Fecha:** 22 de agosto de 2026
**Aprendizajes esperados:** Instala y configura el entorno de desarrollo · Comprende la estructura de un proyecto Spring Boot · Crea y ejecuta el primer proyecto web

**Contenidos temáticos:** Requisitos técnicos: JDK, IDE, Maven/Gradle · Spring Initializr y estructura del proyecto · Primer proyecto Spring Boot funcional · Archivos de configuración (application.properties)

**Habilidades y destrezas:** Preparación del entorno · Inicialización y configuración del proyecto

**Valores y actitudes:** Metodología estructurada · Curiosidad técnica

**Guía de Aprendizaje 7:** Proyecto Spring Boot inicial corriendo en local

---

### Semana 8 · Unidad 4b — Spring Boot: configuración y primer servicio
**Fecha:** 29 de agosto de 2026
**Aprendizajes esperados:** Configura dependencias y perfiles del proyecto · Implementa un servicio REST básico · Prueba endpoints con herramientas simples

**Contenidos temáticos:** Dependencias con Spring Boot Starter · Anotaciones básicas: `@SpringBootApplication`, `@RestController` · Endpoints GET simples y prueba con navegador/Postman · Integración del proyecto con GitHub

**Habilidades y destrezas:** Implementación de endpoints · Validación y sincronización con GitHub

**Valores y actitudes:** Rigurosidad técnica · Profesionalismo en el control de versiones

**Guía de Aprendizaje 8:** Endpoint simple del proyecto conectado a GitHub

---

### Semana 9 · Hito Parcial — Examen parcial y entrega de avance
**Fecha:** 5 de septiembre de 2026
**Aprendizajes esperados:** Demuestra comprensión de los conceptos de las primeras 8 semanas · Presenta el avance estructural del proyecto · Evalúa el trabajo de sus pares de forma constructiva

**Contenidos temáticos:** Repaso integrado: Java, GitHub, MVC, Spring Boot · Revisión y retroalimentación del proyecto · Examen de mitad de curso · Primera ronda de evaluación entre pares

**Habilidades y destrezas:** Síntesis técnica · Evaluación y reflexión

**Valores y actitudes:** Honestidad y responsabilidad · Apertura a la mejora

**Guía de Aprendizaje 9:** Examen parcial + evaluación de pares + ★ **Entrega parcial 2:** app Spring Boot base en GitHub

---

### Semana 10 · Unidad 5a — Rutas, controladores y formularios
**Fecha:** 19 de septiembre de 2026
**Aprendizajes esperados:** Implementa rutas GET y POST en Spring Boot · Diseña formularios HTML integrados con Thymeleaf · Conecta formularios con controladores del backend

**Contenidos temáticos:** Controladores: `@Controller` y `@GetMapping`/`@PostMapping` · Formularios HTML con Thymeleaf · Binding de datos entre formulario y objeto Java · Rutas parametrizadas y redirecciones

**Habilidades y destrezas:** Gestión de solicitudes · Integración de datos formulario–backend

**Valores y actitudes:** Precisión técnica · Orientación a la experiencia de usuario

**Guía de Aprendizaje 10:** Módulo de registro de entidad principal del proyecto

---

### Semana 11 · Unidad 5b — Validación, errores y experiencia de usuario
**Fecha:** 26 de septiembre de 2026 ← *(semana en curso)*
**Aprendizajes esperados:** Aplica validaciones básicas en formularios · Maneja errores con mensajes claros al usuario · Diseña interfaces sencillas y accesibles

**Contenidos temáticos:** Validación con Bean Validation (`@NotNull`, `@Size`, etc.) · Manejo de errores y mensajes de retroalimentación · Buenas prácticas de UX en formularios web · Accesibilidad básica en HTML (aria, labels, contraste)

**Habilidades y destrezas:** Implementación de validación · Manejo de errores

**Valores y actitudes:** Empatía con el usuario · Rigor en la calidad

**Guía de Aprendizaje 11:** Formularios del proyecto con validación y mensajes de error

---

### Semana 12 · Unidad 6a — Persistencia de datos con JPA y Spring Data
**Fecha:** 3 de octubre de 2026
**Aprendizajes esperados:** Conecta la aplicación a una base de datos relacional · Define entidades y repositorios con Spring Data JPA · Realiza operaciones CRUD básicas

**Contenidos temáticos:**
- **Introducción a JPA y Spring Data:** qué problema resuelve un ORM (evita escribir SQL manual para operaciones repetitivas) y cómo Hibernate traduce objetos Java en filas de una tabla — este es el concepto ancla de la sesión.
- **Entidades: `@Entity`, `@Id`, `@Column`:** convenciones de mapeo nombre-de-clase → nombre-de-tabla y estrategia de generación de ID. Usar `@GeneratedValue(strategy = GenerationType.IDENTITY)` por ser compatible tanto con H2 (local) como con PostgreSQL/Neon (producción, desde la Semana 14).
- **Repositorios con `JpaRepository`:** métodos derivados por nombre (`findByNombre`, `findByActivoTrue`, etc.); Spring genera la consulta automáticamente.
- **Perfiles de Spring (introducir desde ahora):** crear `application-dev.properties` (H2 en memoria, ya presente en el `pom.xml`) y dejar preparado `application-prod.properties` para la URL de Neon. Sembrar esta idea aquí evita que la Semana 14 se sienta como un cambio brusco.
- **Operaciones CRUD desde el controlador:** flujo `save()` / `findAll()` / `findById()` / `deleteById()`, inyectando el repositorio por constructor.

**Habilidades y destrezas:** Mapeo de datos justificado (no solo copiado) · Gestión de repositorios y CRUD real · Preparación de la estructura de perfiles para producción

**Valores y actitudes:** Precisión técnica · Visión a futuro (decisiones de hoy facilitan el despliegue de la Semana 14)

**Guía de Aprendizaje 12:** Módulo CRUD funcional del proyecto. Criterio doble: (1) funciona contra H2 local, y (2) la entidad/repositorio no requieren cambios de código para reconectarse a PostgreSQL — solo cambia la configuración del perfil.

---

### Semana 13 · Unidad 6b — Autenticación, roles y renderizado condicional
**Fecha:** 10 de octubre de 2026
**Aprendizajes esperados:** Implementa autenticación básica con Spring Security · Define roles de usuario y restringe acceso · Aplica renderizado condicional según rol

**Contenidos temáticos:**
- Definición de roles y restricción de rutas con Spring Security.
- Renderizado condicional con Thymeleaf (`th:if`, `sec:authorize`).
- **Almacenamiento seguro de contraseñas:** `BCryptPasswordEncoder`; explicar por qué nunca se guarda una contraseña en texto plano ni se hardcodea una credencial de administrador — conecta directo con la Semana 14, donde las credenciales de la base de datos se manejarán como variables de entorno en Render, nunca en el repositorio de GitHub.

**Habilidades y destrezas:** Gestión de seguridad y control de vistas · **Higiene de secretos:** identificar qué datos son sensibles de cara al despliegue

**Valores y actitudes:** Responsabilidad ética sobre credenciales · Rigor en el control de acceso

**Guía de Aprendizaje 13:** Autenticación por roles funcional + nota escrita sobre qué datos del proyecto son "sensibles" de cara al despliegue

---

### Semana 14 · Unidad 7a — Despliegue en producción con Render y Neon
**Fecha:** 17 de octubre de 2026
**Aprendizajes esperados:** Empaqueta la aplicación con Maven · Crea y conecta una base de datos PostgreSQL gestionada en Neon · Despliega en Render usando variables de entorno · Verifica el funcionamiento en una URL pública con HTTPS

**Contenidos temáticos:**
- **Empaquetado con Maven (`mvn clean package`):** genera el `.jar` ejecutable; Spring Boot usa Tomcat embebido, así que no hace falta desplegar un `.war` en un servidor externo.
- **Creación de la base de datos en Neon:** crear proyecto, copiar la cadena de conexión (incluye `sslmode=require` — Neon exige SSL por defecto, a diferencia de H2 en local). El free tier de Neon no expira por fecha; solo "pausa" el cómputo por inactividad y despierta solo, sin pérdida de datos.
- **Perfil de producción:** completar `application-prod.properties` con placeholders (`${DB_URL}`, `${DB_USER}`, `${DB_PASSWORD}`) apuntando a Neon — aquí es donde el trabajo de perfiles sembrado en la Semana 12 da resultado, sin tocar entidades ni repositorios.
- **Despliegue en Render conectado a GitHub:** crear un "Web Service"; Render detecta el proyecto Maven automáticamente (sin Dockerfile). Cada push a `main` dispara un redeploy automático.
- **Variables de entorno en Render:** `DB_URL`, `DB_USER`, `DB_PASSWORD` (valores de Neon) y `SPRING_PROFILES_ACTIVE=prod`, configuradas desde el dashboard de Render — nunca en el código.
- **Verificación en URL pública:** confirmar que la app carga y que las tablas se crearon (`spring.jpa.hibernate.ddl-auto=update` — aclarar que en un proyecto real de producción se usaría una herramienta de migraciones como Flyway, pero que por el alcance del curso se usa `ddl-auto` conscientemente).
- **Advertencia pedagógica:** el plan gratuito de Render "duerme" el servicio tras 15 minutos sin tráfico y tarda ~1 minuto en reactivarse. Es un comportamiento esperado del plan gratuito, no un error del alumno.

**Habilidades y destrezas:** Empaquetado y despliegue correcto en Render con configuración de producción · Separación de configuración y credenciales (12-factor app, en términos simples) · Verificación end-to-end en producción

**Valores y actitudes:** Responsabilidad operativa · Rigor en la verificación (no dar por completa la entrega sin probar con datos reales)

**Guía de Aprendizaje 14:** Aplicación desplegada en Render con base de datos Neon + ★ **Entrega parcial 3:** app en producción con CRUD y autenticación funcionando contra la base de datos real (no H2)

---

### Semana 15 · Unidad 8a — Seguridad básica y HTTPS
**Fecha:** 24 de octubre de 2026
**Aprendizajes esperados:** Aplica principios básicos de seguridad web · Verifica la configuración HTTPS ya provista por Render · Identifica vulnerabilidades comunes en aplicaciones web

**Contenidos temáticos:**
- **HTTPS ya viene resuelto:** Render provee certificado SSL automático y gratuito sobre `*.onrender.com`. El foco de la sesión es **verificar** que está activo, no configurarlo manualmente.
- **Protección CSRF y XSS:** Spring Security trae CSRF habilitado por defecto para formularios Thymeleaf; explicar cuándo tendría sentido desactivarlo (API REST pura sin sesión) y por qué en este proyecto debe permanecer activo.
- **Cabeceras de seguridad HTTP:** revisar `X-Content-Type-Options`, `X-Frame-Options`, añadidas por defecto por Spring Security.
- **SSL en la conexión a la base de datos:** confirmar que la cadena de conexión a Neon usa `sslmode=require` — no es opcional.

**Habilidades y destrezas:** Fortalecimiento de seguridad ya provista por la plataforma · Análisis crítico de la configuración propia

**Valores y actitudes:** Mentalidad defensiva · Responsabilidad técnica

**Guía de Aprendizaje 15:** Auditoría de seguridad básica — checklist con "¿la URL de Render carga con candado HTTPS?", "¿la conexión a Neon fuerza SSL?", "¿el CSRF sigue activo en los formularios?"

---

### Semana 16 · Unidad 8b — QA, pruebas y mantenimiento
**Fecha:** 31 de octubre de 2026 *(Halloween)*
**Aprendizajes esperados:** Diseña casos de prueba básicos para su aplicación · Aplica buenas prácticas de mantenimiento y documentación · Realiza un redeploy con cambios incorporados

**Contenidos temáticos:**
- Introducción a QA y pruebas funcionales; casos de prueba y listas de verificación.
- Documentación técnica mínima del sistema.
- **Ciclo de mantenimiento cambio → push → redeploy:** en Render este ciclo es automático — un `git push` a `main` dispara el redeploy sin pasos manuales, mostrando el valor real del control de versiones visto en las Semanas 3–4.

**Habilidades y destrezas:** Aseguramiento de calidad y documentación · Gestión del ciclo de despliegue continuo

**Valores y actitudes:** Rigurosidad técnica · Disciplina en el mantenimiento

**Guía de Aprendizaje 16:** Documento de pruebas funcionales + evidencia de al menos un redeploy exitoso disparado por un push a GitHub (captura del log de deploy en Render)

---

### Semana 17 · Unidad 9a — Presentación interna y retroalimentación
**Fecha:** 7 de noviembre de 2026
**Aprendizajes esperados:** Presenta el proyecto de forma clara y estructurada · Recibe y da retroalimentación constructiva entre pares · Identifica mejoras finales antes de la entrega

**Contenidos temáticos:** Estructura de una presentación técnica de proyecto · Demostración de funcionalidades al grupo · Segunda ronda de evaluación entre pares · Plan de mejoras finales para la Semana 18

**Nota operativa para la demo:** recordar "despertar" la app en Render y la base de datos en Neon unos minutos antes de presentar (haciendo una petición de prueba a la URL), para evitar el retraso de arranque en frío durante la presentación en vivo.

**Habilidades y destrezas:** Comunicación técnica · Evaluación y planeación entre pares

**Valores y actitudes:** Profesionalismo · Apertura a la retroalimentación

**Guía de Aprendizaje 17:** Presentación interna + evaluación de pares + ★ **Entrega parcial 4:** proyecto completo

---

### Semana 18 · Unidad 9b — Entrega final, evaluación y reflexión
**Fecha:** 14 de noviembre de 2026
**Aprendizajes esperados:** Presenta el proyecto final funcional y documentado · Evalúa proyectos de pares con criterios definidos · Reflexiona sobre el proceso de aprendizaje y su rol docente

**Contenidos temáticos:** Presentación y defensa del proyecto final (software funcional + documentación técnica) · Evaluación cruzada (peer review) con criterios técnicos definidos · Metacognición y cierre del proceso

**Habilidades y destrezas:** Comunicación persuasiva · Pensamiento evaluativo

**Valores y actitudes:** Humildad intelectual · Integridad profesional

**Fechas de acta:** 1ra ronda 14–20 de noviembre · 2da ronda 21–27 de noviembre · Cierre 28 de noviembre

---

## 4. Evaluación

### 4.1 Descripción del proceso de evaluación del aprendizaje
El proceso de evaluación está diseñado bajo un enfoque formativo y sumativo, integrando el desarrollo técnico continuo con la reflexión pedagógica:
- **Evaluación continua (Guías de Aprendizaje):** entrega semanal de actividades prácticas que verifican la aplicación progresiva de conceptos técnicos en el repositorio del proyecto.
- **Hitos de entrega parcial:** momentos específicos de evaluación sumativa que validan la evolución de la arquitectura y funcionalidad del proyecto (MVC, CRUD, Autenticación, Despliegue en Render + Neon).
- **Evaluación entre pares (Peer Review):** dos rondas de retroalimentación sobre proyectos ajenos bajo criterios técnicos definidos.
- **Evaluación final y metacognición:** presentación del proyecto final funcional y documentado, sumado a una reflexión sobre el proceso de aprendizaje personal y el rol docente.

### 4.2 Detalle de la evaluación del aprendizaje

| Rubro | Sesión/Guía | Semana | Actividad | Punteo |
|---|---|---|---|---|
| Trabajo en clase (sincrónica) | Sesión 1–18 | 1–18 | Actividad en clase por sesión | 0.66 c/u (0.78 en Semana 18) |
| Guías de aprendizaje sem. 1–9 (15%) | Guía 1–9 | 1–9 | Entrega de guía semanal | 1 c/u |
| Guías de aprendizaje sem. 10–18 (15%) | Guía 10–17 | 10–17 | Entrega de guía semanal | 1 c/u (2 en Guía 17) |
| Avances del proyecto — 4 entregas (20%) | Entrega 1 | Semana 5 | Propuesta + estructura MVC en GitHub | 5 |
| | Entrega 2 | Semana 9 | App Spring Boot base con MVC funcional | 5 |
| | Entrega 3 | Semana 14 | App desplegada en Render con base de datos Neon, CRUD y autenticación | 5 |
| | Entrega 4 | Semana 17 | Proyecto completo con seguridad y QA | 5 |
| Presentación del proyecto final (20%) | — | Semana 18 | Presentación formal + demo | 10 |
| Evaluación entre pares — 2 rondas (10%) | Ronda 1 | Semana 9 | Rúbrica compartida | 5 |
| | Ronda 2 | Semana 18 | Rúbrica compartida | 5 |
| Examen parcial — mitad de curso (10%) | — | Semana 9 | Prueba escrita o práctica, unidades 1–4 | 15 |
| **Total** | | | | **100** |

---

## 6. Referencias

### 6.1 Herramientas tecnológicas requeridas
- JDK 17 o superior (https://adoptium.net)
- IntelliJ IDEA Community o Visual Studio Code con extensión Java
- Git y cuenta en GitHub (https://github.com)
- Maven o Gradle (incluido en Spring Initializr)
- Spring Initializr (https://start.spring.io)
- Postman o Bruno para prueba de APIs
- **Cuenta en Render** (hosting de la aplicación) **y en Neon** (base de datos PostgreSQL gestionada) para el despliegue del proyecto

### 6.2 Referencias bibliográficas y recursos en línea
- Spring Boot Reference Documentation — https://docs.spring.io/spring-boot/docs/current/reference/html/
- Baeldung Spring Boot Guides — https://www.baeldung.com/spring-boot
- Thymeleaf Documentation — https://www.thymeleaf.org/documentation.html
- Pro Git (Scott Chacon y Ben Straub) — https://git-scm.com/book/es/v2
- Spring Security Reference — https://docs.spring.io/spring-security/reference/
- W3C Web Accessibility Initiative (WAI) — https://www.w3.org/WAI/
- Render Docs — https://render.com/docs
- Neon Docs — https://neon.tech/docs