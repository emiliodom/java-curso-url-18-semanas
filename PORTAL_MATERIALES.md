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

No se duplican tarjetas a mano ni se editan `data-title`/`data-tags` sueltos
como en el formato anterior. Para la estructura completa que debe tener la
carpeta `Material_Sesion_Clase_N_HTML_18_semanas/` de una semana nueva, ver
**[`CLAUDE.md`](CLAUDE.md)** en la raíz del repo.

## Nota sobre enlaces con espacios

En `index.html` los enlaces a archivos con espacios van con URL-encoding (por ejemplo `Formato%20programa%20de%20curso.md`).

## Material del formato anterior

Las carpetas `Material_Sesion_Clase_N_X/` sin sufijo `_18_semanas` son del
formato de curso anterior (ya no vigente). Quedan enlazadas solo dentro del
`<details>` "🗄 Archivo — formato anterior" al final del portal, sin tarjetas
en la cuadrícula principal.
