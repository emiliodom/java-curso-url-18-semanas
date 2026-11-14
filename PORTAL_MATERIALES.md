# Portal de Materiales (frontend)

Abre el archivo [index.html](index.html) en la raíz para navegar por las 18
semanas del curso (formato vigente). El portal **ya no muestra tarjetas
genéricas de carpetas**: cada semana se genera desde un arreglo de datos en
el propio `index.html`.

## Recomendación

- Para una navegación más estable (y evitar restricciones del navegador al abrir archivos locales), abre el portal con un servidor local.
- En VS Code, la opción más fácil es la extensión **Live Server** y luego “Open with Live Server” sobre `index.html`.

## Cómo se activa una semana nueva

El portal genera sus 18 tarjetas desde el arreglo JS `WEEKS` dentro de
`index.html` (buscar `var WEEKS = [`). Cada semana ya tiene una entrada con
`n`, `fecha`, `tema`, `detalle`, `tags` y `badge`; para que su tarjeta pase
de "Próximamente" a "Disponible" solo hace falta agregarle tres campos:

```js
folder: 'Material_Sesion_Clase_N_HTML_18_semanas/index.html',
sesionDoc: 'PEM%20en%20TIC_Sesi%C3%B3n%20de%20Clase%20N%20Programaci%C3%B3n%20I_18_semanas.md',
guiaDoc: 'PEM%20en%20TIC_Gu%C3%ADa%20de%20Aprendizaje%20N%20Programaci%C3%B3n%201_18_semanas.md'
```

Con eso la tarjeta muestra sola su estado según la fecha (Completada / Esta
semana / Próxima clase / Próximamente), y si es la semana publicada más
reciente pasa automáticamente al bloque **"📍 Semana actual"**. Para darle en
ese bloque un texto más largo que `detalle`, agrega la propiedad opcional
`destacado` (admite HTML).

## Cierre del curso (14 de noviembre de 2026)

- El hero es el banner **"¡Felicidades por completar Programación 1!"**
  (`img/felicidades-programacion1-*`: JPG y WebP de 1600 y 960 px, y un
  recorte cuadrado para celular servido con `<picture>`). El texto del banner
  está también en el `alt` de la imagen.
- Debajo, el llamado **"Califica el curso completo. Sé escuchado"** lleva a
  `https://proximaweb.click/url/evaluacion_docente/index.html?modo=curso`
  (ver `evaluacion_docente/README.md`). El botón secundario evalúa la sesión
  del día. La barra superior, Recursos y la banda final apuntan al mismo
  formulario del curso.
- La Semana 18 es la semana actual (`SEMANA_ACTIVA_N = 18`) y la evaluación de
  la sesión quedó abierta todo el día (`OPEN_HOUR = '00:00:00'`).

## Diseño del portal (octubre de 2026)

- **Hero "Califica al docente. Sé escuchado."**: el botón principal lleva a
  `evaluacion_docente/` y la tarjeta de la derecha muestra si la evaluación
  de la semana está abierta y hasta cuándo. Los enlaces con clase
  `eval-gated` (hero, barra superior, recursos y franja final) solo se
  bloquean antes de la primera sesión del curso.
- **Franja de datos** calculada desde `WEEKS`, `SESSION_SATURDAYS` y `HITOS`:
  semanas publicadas, porcentaje de sesiones realizadas, próxima clase y
  próximo hito. Si cambian las fechas, `SESSION_SATURDAYS` debe seguir
  idéntico en `index.html` y en `evaluacion_docente/index.html`.
- **Filtros por unidad** (chips) según el campo `badge` de cada semana, más
  el buscador con `Ctrl+K` / `⌘K`.
- Todo el estilo vive en `portal.css` (sin Bootstrap), con modo claro y
  oscuro automáticos y diseño adaptado a celular.
- El recurso **Mini retrospectiva de equipo** apunta a `mini_retro/`, una
  aplicación PHP autoguiada. Funciona al publicarse en un hosting PHP; un
  portal servido como archivos estáticos (por ejemplo, GitHub Pages) no ejecuta
  PHP. Para probarla localmente, sigue `mini_retro/README.md`.

No se duplican tarjetas a mano ni se editan `data-title`/`data-tags` sueltos
como en el formato anterior. Para la estructura completa que debe tener la
carpeta `Material_Sesion_Clase_N_HTML_18_semanas/` de una semana nueva, ver
**[`CLAUDE.md`](CLAUDE.md)** en la raíz del repo.

## Nota sobre enlaces con espacios

En `index.html` los enlaces a archivos con espacios van con URL-encoding (por ejemplo `Formato%20programa%20de%20curso.md`).

## Material del formato anterior

Las carpetas del formato anterior (`Material_Sesion_Clase_N_X/` sin sufijo
`_18_semanas` y `ARCHIVO_POR_AHORA/`) se eliminaron del repositorio en el
commit `1223811`. El desplegable "🗄 Archivo" que las enlazaba se quitó del
portal el 14 de noviembre de 2026 porque todos sus enlaces estaban rotos. Si
se necesitan, se recuperan del historial de Git.
