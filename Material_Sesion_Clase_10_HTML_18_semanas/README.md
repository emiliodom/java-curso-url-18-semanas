# Material — Semana 10 (formato 18 semanas · sesiones de 70 min)

**Semana 10 — Rutas, controladores y formularios (Unidad 5a) · 19 de septiembre de 2026**

Abrir `index.html` en el navegador (es el hub de toda la semana).

> **Nota de calendario:** entre la Sesión 9 (5 de septiembre) y esta hay dos
> semanas de diferencia: el sábado **12 de septiembre no hubo clase** por la
> semana de independencia. El programa, el portal y el calendario del módulo
> de evaluación anónima ya contemplan ese salto.

## Qué cambia esta semana

Se cumple la promesa que quedó abierta desde la Semana 8: **por fin se
guardan los datos que el usuario escribe**. El formulario de las Semanas 8–9
solo *consultaba* (GET + `fetch`); ahora el estudiante aprende el circuito
completo de un formulario real:

- `@Controller` (devuelve el **nombre de una plantilla**) frente al
  `@RestController` que venía usando (devuelve **datos**). Es la confusión
  central de la semana y se enseña provocándola a propósito.
- **Thymeleaf**: dependencia nueva en el `pom.xml`, carpeta nueva
  `src/main/resources/templates/`, y la diferencia con `static/`.
- `@PostMapping` + `@ModelAttribute`: el **binding** de los campos del
  formulario a un objeto Java.
- Patrón **guardar → redirigir → mostrar**, y por qué existe (sin el
  `redirect`, recargar la página duplica el registro).
- `th:each` para listar y `@PathVariable` para rutas parametrizadas.

**Límite deliberado del alcance:** los datos se guardan **en memoria** (una
lista dentro del `@Service`) y se pierden al reiniciar la aplicación. Eso se
dice de frente en todo el material para que nadie lo reporte como error: la
persistencia real con base de datos es la **Semana 12**.

## Archivos

| Archivo | Qué es |
| --- | --- |
| `index.html` | Hub de la semana, con la tabla "de dónde venimos y a dónde vamos" (S8 → S10 → S11 → S12) |
| `quiz.html` | Presaberes (8) + Final (12) sobre `@Controller`, Thymeleaf, `@PostMapping`, binding y redirecciones. Banco de 26 preguntas con **barajado de opciones** (patrón de la S9) |
| `clase.html` | Guía docente minuto a minuto: la demo de `@RestController` → `@Controller`, la primera plantilla, el POST y el redirect |
| `ejercicios.html` | 2 pestañas: **8 ejercicios en escalera** (Nivel 1 → Nivel 4) que construyen un mismo módulo de registro, y el **Kit de archivos completos** |
| `cheatsheet.html` | 3 pestañas: sintaxis de hoy (anotaciones + atributos `th:`), **el circuito del formulario en 6 pasos**, y errores frecuentes (con los silenciosos marcados 🔇) |
| `challenge.html` | 2 pestañas: "¿Dónde vive cada archivo?" (`templates/` vs `static/` vs paquetes Java) y un **simulador POST/Redirect/GET** que muestra el registro duplicándose cuando falta el `redirect` |
| `proyecto.html` | Guía de 7 pasos + plantilla calificable de la Guía 10: el **módulo de registro de la entidad principal** del proyecto real |
| `styles.css` | Estilos compartidos (copiado sin cambios desde la Semana 9) |
| `quiz.js` | Motor de quiz v2 (copiado sin cambios; `quiz.html` solo agrega el barajado de opciones) |
| `toast.js` | Motor compartido de notificaciones toast (copiado sin cambios) |

## Kit de archivos completos

Segunda pestaña de `ejercicios.html`, siguiendo el patrón establecido en la
Semana 9: los **9 archivos** del módulo de registro, enteros, cada uno con su
**ruta exacta**, su línea `package`, todos sus `import` y una tabla de "qué
hace cada import / qué error aparece si falta". Incluye el bloque de la
dependencia de Thymeleaf para el `pom.xml`, las tres plantillas
(`formulario.html`, `lista.html`, `detalle.html`), el CSS y el
`application.properties` con `spring.thymeleaf.cache=false`.

Dos advertencias van destacadas ahí porque son las que hacen perder más
tiempo: el modelo **necesita constructor vacío y setters** (sin ellos el
formulario guarda registros en blanco, sin ningún mensaje de error), y
`templates/` **no** es `static/`.

## Dominios de ejemplo (sin repetición entre páginas)

- `clase.html`, `ejercicios.html`, `cheatsheet.html`: **Escuela de Fútbol Los Cerritos** (proyecto de práctica `taller-formularios`, entidad `Jugador`).
- `challenge.html`: **Huerto Comunitario La Cosecha** (entidad `Voluntario`).
- `proyecto.html`: el proyecto real del estudiante (guardería, casa hogar, dispensario…), con una tabla que sugiere la entidad principal según el tipo de institución.

## Exportar a PDF

Todas las páginas tienen botón **Exportar a PDF**. Los estilos de impresión
ocultan navegación, botones y toasts, y fuerzan a mostrar **todas las
pestañas** — importante en `ejercicios.html`, `cheatsheet.html` y
`challenge.html`, que usan `nav-tabs`.

## Evidencias de la semana

1. **Actividad en clase — Sesión 10 (0.66 pts):** PDF del Quiz (modo Final) + PDF del Challenge.
2. **Entrega Guía 10 (1 pt):** PDF de `proyecto.html` (sección "Entregable") con el módulo de registro funcionando y subido a GitHub.

Esta semana **no tiene Entrega Parcial**: los hitos del proyecto son las
Semanas 5, 9, 14 y 17, y el siguiente es la Entrega Parcial 3 en la Semana 14.

> El programa oficial trae dos erratas en la fila de esta semana, confirmadas
> por el profesor: dice "Hito Parcial" (no lo es; la 4.2 no asigna ninguna
> entrega parcial a la Semana 10) y "Sesión presencial 9" (corresponde a la
> 10). El material y los documentos oficiales usan los datos corregidos.

## Requisitos

- El proyecto Spring Boot de las Semanas 7–9, corriendo en local y en GitHub.
  Quien lo tenga incompleto puede reconstruirlo con el Kit de archivos.
- Conexión a internet la primera vez que se ejecuta el proyecto tras agregar
  Thymeleaf: Maven descarga la dependencia nueva y esa primera vez tarda.
