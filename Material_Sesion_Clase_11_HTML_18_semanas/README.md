# Material — Semana 11 (formato 18 semanas · sesiones de 70 min)

**Semana 11 — Validación, errores y experiencia de usuario (Unidad 5b) · 26 de septiembre de 2026**

Abrir `index.html` en el navegador (es el hub de toda la semana).

## Qué cambia esta semana

El formulario de la Semana 10 guarda **cualquier cosa**: un nombre vacío, una
edad de 300 años, un correo que no es correo. Esta semana se blinda:

- **Bean Validation** en el modelo: `@NotBlank`, `@NotNull`, `@Size`, `@Min`,
  `@Max`, `@Email`, `@Pattern` — todas del paquete
  `jakarta.validation.constraints`.
- **`@Valid` + `BindingResult`** en el controlador, con su regla de oro: el
  `BindingResult` va **inmediatamente después** del objeto validado.
- **Mensajes en pantalla** con `th:errors`, `th:errorclass` y `#fields`,
  **sin borrar lo que el usuario ya escribió** (la excepción a la regla del
  `redirect` que se enseñó en la Semana 10).
- **Accesibilidad básica**: `label` asociado, `aria-describedby`,
  `role="alert"`, foco visible y errores que no dependen solo del color.
- **Página de error propia** (`templates/error.html`), que Spring Boot usa
  automáticamente.

Los datos siguen guardándose **en memoria**: la base de datos es la Semana 12.

## Las dos trampas que más tiempo hacen perder

Ambas están explicadas en el cheat sheet y provocadas a propósito en los
ejercicios, porque no dan un error claro:

1. **Falta la dependencia `spring-boot-starter-validation`** → las
   anotaciones se ignoran en silencio: el proyecto compila, arranca y sigue
   guardando basura.
2. **Campos numéricos declarados como `int`** → una casilla vacía produce un
   error técnico de conversión *antes* de que corran las reglas. En
   formularios siempre `Integer`, `Long` o `Double`.

## Archivos

| Archivo | Qué es |
| --- | --- |
| `index.html` | Hub de la semana, con la tabla "de dónde venimos y a dónde vamos" (S10 → S11 → S12 → S13) |
| `quiz.html` | Presaberes (8) + Final (12) sobre anotaciones, `@Valid`, `BindingResult`, `th:errors` y accesibilidad. Banco de 26 preguntas con **barajado de opciones** |
| `clase.html` | Guía docente minuto a minuto: la demo de apertura "guarda basura", las anotaciones en vivo, el error de `BindingResult` provocado a propósito, y el momento clave en que se comprueba que los datos no se borran |
| `ejercicios.html` | 2 pestañas: **8 ejercicios en escalera** (Nivel 1 → Nivel 4) y el **Kit de archivos completos** |
| `cheatsheet.html` | 3 pestañas: anotaciones **con su import completo**, cómo mostrar errores + accesibilidad + cómo se escribe un buen mensaje, y errores frecuentes (los silenciosos marcados 🔇) |
| `challenge.html` | 2 pestañas: "Elige la validación correcta" (reglas en palabras → anotación, con retroalimentación específica para las confusiones `@Size`/`@Pattern`) y un **simulador** donde se ve que con datos inválidos el servicio **nunca se ejecuta** |
| `proyecto.html` | Guía de 8 pasos + plantilla calificable de la Guía 11: validar el formulario del proyecto real con reglas propias de esa institución |
| `styles.css` | Estilos compartidos (copiado sin cambios desde la Semana 10) |
| `quiz.js` | Motor de quiz v2 (copiado sin cambios; `quiz.html` solo agrega el barajado de opciones) |
| `toast.js` | Motor compartido de notificaciones toast (copiado sin cambios) |

## Kit de archivos completos

Segunda pestaña de `ejercicios.html`, siguiendo el patrón de las Semanas 9 y
10: los **9 archivos** del módulo ya validado, enteros, con su ruta exacta,
su línea `package` y **todos sus `import`**. Encabezado por una **tabla de
anotaciones con su import completo**, porque esta semana es la que más
paquetes nuevos introduce.

Incluye además tres aclaraciones que no suelen estar en los tutoriales y que
sí producen errores reales:

- **Es `jakarta`, no `javax`** (Spring Boot 3 cambió el nombre del paquete).
- **`@Email` acepta el campo vacío**, por eso casi siempre va con `@NotBlank`.
- **`@Pattern` sí rechaza la cadena vacía**, así que un campo opcional con
  patrón necesita permitir el vacío en el propio patrón.

## Dominios de ejemplo (sin repetición entre páginas)

- `clase.html`, `ejercicios.html`, `cheatsheet.html`: **Escuela de Fútbol Los Cerritos** (continúa el proyecto de práctica `taller-formularios`, entidad `Jugador`).
- `challenge.html`: **Centro de Salud Buena Vida** (entidad `Paciente`).
- `proyecto.html`: el proyecto real del estudiante, con una tabla que ayuda a decidir qué regla tiene sentido en cada tipo de institución.

## Exportar a PDF

Todas las páginas tienen botón **Exportar a PDF**. Los estilos de impresión
ocultan navegación, botones y toasts, y fuerzan a mostrar **todas las
pestañas** — importante en `ejercicios.html`, `cheatsheet.html` y
`challenge.html`, que usan `nav-tabs`.

## Evidencias de la semana

1. **Actividad en clase — Sesión 11 (0.66 pts):** PDF del Quiz (modo Final) + PDF del Challenge.
2. **Entrega Guía 11 (1 pt):** PDF de `proyecto.html` (sección "Entregable") con el formulario validado y subido a GitHub.

Esta semana **no tiene Entrega Parcial**: los hitos del proyecto son las
Semanas 5, 9, 14 y 17, y el siguiente es la Entrega Parcial 3 en la Semana 14.

## Requisitos

- El módulo de registro de la Semana 10 funcionando (formulario + lista).
  Quien lo tenga incompleto puede reconstruirlo con el Kit de archivos.
- Conexión a internet la primera vez que se ejecuta el proyecto tras agregar
  la dependencia de validación: Maven la descarga y esa primera vez tarda.
