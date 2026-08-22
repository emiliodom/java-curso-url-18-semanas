# Material — Semana 7 (formato 18 semanas · sesiones de 70 min)

**Semana 7 — Entorno de desarrollo y Spring Boot · 22 de agosto de 2026**

Abrir `index.html` en el navegador (es el hub de toda la semana).

## Qué cambia esta semana

Primera semana con **código Java real ejecutándose de verdad** (las
Semanas 5–6 fueron 100% conceptuales). Sigue la plantilla reducida
introducida en la Semana 6 (quiz unificado, `proyecto.html` fusionado, sin
puente Python). Alcance deliberadamente acotado: **no se escriben
controladores ni endpoints propios** (`@RestController` es tema de la
Semana 8) — hoy el objetivo es generar, entender y ejecutar el proyecto
base con Spring Initializr.

`ejercicios.html` corrige explícitamente el problema detectado en la
Semana 6 (una actividad en JavaScript sin valor real para aprender Java):
esta semana los 7 ejercicios se resuelven en la terminal, VS Code y
navegador reales del estudiante, con un proyecto Spring Boot de práctica
que corre de verdad — nada de simuladores embebidos en la página.

## Archivos

| Archivo | Qué es |
| --- | --- |
| `index.html` | Hub/portada con navegación a todas las secciones |
| `quiz.html` | Presaberes + Final en una sola página: JDK, Maven/Wrapper, Spring Initializr, estructura del proyecto, `application.properties` |
| `clase.html` | Guía docente minuto a minuto: Spring Initializr en vivo, recorrido de la estructura, primer arranque y lectura del log |
| `ejercicios.html` | 7 ejercicios **100% reales**: generar el proyecto, ejecutarlo, leer el log, cambiar el puerto y provocar/resolver un error real de puerto ocupado |
| `cheatsheet.html` | 2 pestañas: conceptos (Initializr, estructura, `application.properties`) y comandos + solución de problemas |
| `challenge.html` | 2 pestañas: "Ordena los pasos" (secuencia, dominio nuevo: Biblioteca Comunitaria El Andén) y "Simulador de arranque" (log de consola realista, escenario exitoso vs. error de puerto) |
| `proyecto.html` | Guía paso a paso + plantilla calificable de la Guía 7: generar, ejecutar y subir a GitHub el proyecto Spring Boot REAL del estudiante |
| `styles.css` | Estilos compartidos (copiado sin cambios desde la Semana 6 — ya incluye toasts, secuencia, clasificación, mapa de capas y pestañas) |
| `quiz.js` | Motor de quiz v2 (copiado sin cambios desde la Semana 6) |
| `toast.js` | Motor compartido de notificaciones toast (copiado sin cambios) |

## Exportar a PDF

Todas las secciones tienen botón **Exportar a PDF**. Los estilos de
impresión ocultan la navegación, los botones y la pila de toasts, y
fuerzan a que se muestren **todas las pestañas** (nav-tabs) del documento.

## Evidencias de la semana

1. **Actividad en clase — Sesión 7 (0.66 pts):** PDF del Quiz (modo Final) + PDF del Challenge.
2. **Entrega Guía 7 (1 pt):** PDF de `proyecto.html` (sección "Entregable") con el proyecto Spring Boot inicial corriendo en local y subido a GitHub.

Esta semana **no tiene** Entrega Parcial adicional (el próximo hito del
proyecto es en la Semana 9).

## Requisitos

- JDK 21 y VS Code ya instalados (Semana 1) — sin ellos, nada de esta
  semana funciona. Agregar la extensión "Spring Boot Extension Pack" en
  VS Code (nueva esta semana).
- Conexión a internet para Spring Initializr (start.spring.io) y para la
  descarga inicial de dependencias de Maven.
- El material HTML funciona 100% offline salvo Bootstrap (CDN); lo que
  SÍ requiere internet es la parte de `ejercicios.html`/`proyecto.html`
  que corre fuera del navegador (Spring Initializr + Maven).
