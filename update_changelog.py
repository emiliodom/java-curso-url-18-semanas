# update_changelog.py
with open("CHANGELOG.md", "r", encoding="utf-8") as f:
    content = f.read()

new_entry = """## [2026-10-30] — Ajuste de Semana Activa en Portada y Accesibilidad de Contraste (S16–S18)

### Modificado
- **Portal Raíz (`index.html`):**
  - Configurada explícitamente la **Semana 16** como semana activa (`SEMANA_ACTIVA_N = 16`) en la tarjeta principal (`#featured`) con llamado destacado a la sesión de QA y Arquitectura.
  - Las Semanas 17 y 18 se mantienen listas pero etiquetadas con estado "Próximamente" hasta sus respectivas fechas oficiales (7 y 14 de noviembre), reflejando con exactitud la estadística de publicación (`16 / 18` semanas publicadas).
- **Accesibilidad y Contraste (WCAG AA/AAA) en Semanas 16, 17 y 18 (`styles.css`):**
  - Muted text reforzado: `.small-muted` y `.text-muted` actualizados a `#374151` (ratio de contraste superior a 9.6:1 en fondo claro, nivel AAA).
  - Enlaces accesibles: `a` con color base `#0a58ca` (6.4:1) y hover `#084298`, superando el mínimo legal de 4.5:1.
  - Botones y encabezados con texto blanco: `.btn-primary` y `.bg-primary` con fondo `#0a58ca` (6.4:1), `.btn-success` con `#15803d` (5.0:1), `.btn-danger` con `#b91c1c` (6.4:1).
  - Badges de estado de alto contraste: advertencia con fondo `#fef08a` y texto `#713f12` (7.4:1), info con `#e0f2fe` y `#0369a1` (5.2:1).
  - Tarjetas y tablas: bordes nítidos (`#cbd5e1`), encabezados con fondo `#f1f5f9` y texto `#0f172a`, e inputs de formulario con bordes perceptibles (`#94a3b8`).
  - Navegación, acordeones, mapas de ruta y timeline de 70 min con tipografía oscura de alta legibilidad para pantalla y proyector.
- **Tokens del Portal (`portal.css`):**
  - Variables de color atenuadas reforzadas (`--muted: #3d4a61;`, `--soon: #475569;`, `--border: #cbd5e1;`).

"""

target = "## [2026-10-30] — Cierre Curricular: Semanas 16, 17, 18 y Entregable Llave en Mano"
content = content.replace(target, new_entry + target)

with open("CHANGELOG.md", "w", encoding="utf-8") as f:
    f.write(content)

print("CHANGELOG.md updated successfully.")

