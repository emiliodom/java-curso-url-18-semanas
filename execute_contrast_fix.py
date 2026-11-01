import glob
import re
import os

# 1. Update portal.css
portal_path = "portal.css"
with open(portal_path, "r", encoding="utf-8") as f:
    portal = f.read().replace("\r\n", "\n")

old_pills = """.pill { display: inline-flex; align-items: center; gap: 5px; padding: 3px 10px; border-radius: 999px; font-size: 0.76rem; font-weight: 700; background: var(--surface-2); color: var(--muted); border: 1px solid var(--border); }
.pill.ok { background: var(--ok-soft); color: var(--ok); border-color: transparent; }
.pill.now { background: var(--now-soft); color: var(--now); border-color: transparent; }
.pill.star { background: var(--star-soft); color: var(--star); border-color: transparent; }
.pill.brand { background: var(--brand-soft); color: var(--brand); border-color: transparent; }"""

new_pills = """.pill { display: inline-flex; align-items: center; gap: 5px; padding: 3px 10px; border-radius: 999px; font-size: 0.76rem; font-weight: 700; background: var(--surface-2); color: #1e293b; border: 1px solid var(--border); }
.pill.ok { background: #dcfce7; color: #14532d; border-color: #86efac; font-weight: 800; }
.pill.now { background: #dbeafe; color: #1e40af; border-color: #93c5fd; font-weight: 800; }
.pill.star { background: #fef3c7; color: #78350f; border-color: #fcd34d; font-weight: 800; }
.pill.brand { background: #e0e7ff; color: #312e81; border-color: #a5b4fc; font-weight: 800; }"""

if old_pills in portal:
    portal = portal.replace(old_pills, new_pills)
    print("Updated pills in portal.css")

old_week = """.week.is-soon .week-n { background: var(--surface-2); color: var(--soon); }
.week.is-done .week-n { background: var(--ok-soft); color: var(--ok); }
.week-meta { font-size: 0.8rem; color: var(--muted); font-weight: 600; }
.week h3 { font-size: 1.02rem; font-weight: 800; margin: 0; letter-spacing: -0.01em; }
.week p { font-size: 0.9rem; color: var(--muted); margin: 0; flex: 1; }"""

new_week = """.week.is-soon .week-n { background: #f1f5f9; color: #334155; font-weight: 800; }
.week.is-done .week-n { background: #dcfce7; color: #14532d; font-weight: 800; }
.week-meta { font-size: 0.8rem; color: #374151; font-weight: 700; }
.week h3 { font-size: 1.02rem; font-weight: 800; margin: 0; letter-spacing: -0.01em; color: #0f172a; }
.week p { font-size: 0.9rem; color: #1e293b; margin: 0; flex: 1; }"""

if old_week in portal:
    portal = portal.replace(old_week, new_week)
    print("Updated week cards in portal.css")

with open(portal_path, "w", encoding="utf-8") as f:
    f.write(portal)

# 2. Update styles.css across weeks 16, 17, 18
css_block = """
/* ==========================================================================
   ENFORCED DARK CODE BLOCKS & HIGH-CONTRAST LIGHT MODE
   Garantiza que ningun bloque pre se vuelva blanco o ilegible en modo claro.
   ========================================================================== */

/* 1. Todos los bloques pre son oscuros con texto blanco brillante e hiper-legible (16.5:1) */
pre,
pre code,
pre.bg-light,
pre.bg-light code,
pre.bg-white,
pre.bg-white code,
pre.bg-body,
pre.bg-body code,
pre.bg-body-tertiary,
pre.bg-body-tertiary code,
pre.bg-body-secondary,
pre.bg-body-secondary code {
    background-color: #0b1220 !important;
    color: #f1f5f9 !important;
    border: 1px solid #334155 !important;
    border-radius: 0.5rem !important;
    font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace !important;
}

/* Comentarios en bloques pre con gris claro visible (7.2:1) */
pre .text-muted,
pre span.text-muted,
pre code .text-muted {
    color: #94a3b8 !important;
}

/* 2. Codigo en linea fuera de pre: en modo claro con pastilla roja visible (5.9:1) */
:root:not([data-bs-theme="dark"]) code:not(pre code):not(.term code):not(.gui-mock code):not(.s12-error-map code):not(.s12-transition-panel code),
[data-bs-theme="light"] code:not(pre code):not(.term code):not(.gui-mock code):not(.s12-error-map code):not(.s12-transition-panel code) {
    color: #991b1b !important;
    background-color: #f1f5f9 !important;
    border: 1px solid #cbd5e1 !important;
    padding: 0.15rem 0.38rem !important;
    border-radius: 0.35rem !important;
    font-weight: 600 !important;
    font-size: 0.88em !important;
}

/* 3. Texto atenuado en modo claro (nivel AAA > 9:1) */
:root:not([data-bs-theme="dark"]) .small-muted,
:root:not([data-bs-theme="dark"]) .text-muted,
:root:not([data-bs-theme="dark"]) p.text-muted,
:root:not([data-bs-theme="dark"]) span.text-muted,
:root:not([data-bs-theme="dark"]) div.text-muted,
[data-bs-theme="light"] .small-muted,
[data-bs-theme="light"] .text-muted,
[data-bs-theme="light"] p.text-muted,
[data-bs-theme="light"] span.text-muted,
[data-bs-theme="light"] div.text-muted {
    color: #374151 !important;
}

/* 4. Enlaces siempre de alto contraste */
a:not(.btn):not(.nav-link):not(.navbar-brand):not(.logo) {
    color: #0a58ca !important;
    text-decoration-color: rgba(10, 88, 202, 0.4);
}
a:not(.btn):not(.nav-link):not(.navbar-brand):not(.logo):hover {
    color: #084298 !important;
}

/* 5. Badges solidos y nitidos */
.badge.bg-warning, .badge.text-bg-warning {
    background-color: #fef08a !important;
    color: #713f12 !important;
    border: 1px solid #facc15 !important;
    font-weight: 700 !important;
}
.badge.bg-info, .badge.text-bg-info {
    background-color: #e0f2fe !important;
    color: #0369a1 !important;
    border: 1px solid #7dd3fc !important;
    font-weight: 700 !important;
}
.badge.bg-light, .badge.text-bg-light {
    background-color: #f1f5f9 !important;
    color: #0f172a !important;
    border: 1px solid #cbd5e1 !important;
    font-weight: 700 !important;
}
.badge.bg-secondary {
    background-color: #334155 !important;
    color: #ffffff !important;
}
.badge.bg-primary {
    background-color: #0a58ca !important;
    color: #ffffff !important;
}
.badge.bg-success {
    background-color: #146c43 !important;
    color: #ffffff !important;
}
.badge.bg-danger {
    background-color: #b02a37 !important;
    color: #ffffff !important;
}
.badge.bg-dark {
    background-color: #0f172a !important;
    color: #ffffff !important;
}

/* 6. Pestanas (nav-tabs y nav-pills) en modo claro */
:root:not([data-bs-theme="dark"]) .nav-tabs .nav-link,
[data-bs-theme="light"] .nav-tabs .nav-link {
    color: #374151 !important;
    font-weight: 600 !important;
}
:root:not([data-bs-theme="dark"]) .nav-tabs .nav-link:hover,
[data-bs-theme="light"] .nav-tabs .nav-link:hover {
    color: #0a58ca !important;
}
:root:not([data-bs-theme="dark"]) .nav-tabs .nav-link.active,
[data-bs-theme="light"] .nav-tabs .nav-link.active {
    color: #0a58ca !important;
    font-weight: 700 !important;
    border-bottom: 3px solid #0a58ca !important;
    background-color: #ffffff !important;
}

/* 7. Tarjetas y tablas con bordes perceptibles en modo claro */
:root:not([data-bs-theme="dark"]) .card,
[data-bs-theme="light"] .card {
    border: 1px solid #cbd5e1 !important;
    background-color: #ffffff !important;
}
.card-header.bg-primary { background-color: #0a58ca !important; color: #ffffff !important; }
.card-header.bg-dark { background-color: #0f172a !important; color: #ffffff !important; }
.card-header.bg-warning { background-color: #fef08a !important; color: #713f12 !important; border-bottom: 2px solid #facc15 !important; }
.card-header.bg-success { background-color: #146c43 !important; color: #ffffff !important; }
.card-header.bg-danger { background-color: #b02a37 !important; color: #ffffff !important; }
.card-header.bg-secondary { background-color: #334155 !important; color: #ffffff !important; }
.card-header.bg-light { background-color: #f1f5f9 !important; color: #0f172a !important; border-bottom: 1px solid #cbd5e1 !important; }

/* 8. Botones outline */
.btn-outline-warning { color: #7a4d00 !important; border-color: #b97a00 !important; background-color: #fff8e1 !important; }
.btn-outline-warning:hover { background-color: #b97a00 !important; color: #fff !important; }
.btn-outline-info { color: #055160 !important; border-color: #0a7d96 !important; background-color: #e6f7fb !important; }
.btn-outline-info:hover { background-color: #0a6f86 !important; color: #fff !important; }
.btn-outline-primary { color: #0a58ca !important; border-color: #0a58ca !important; }
.btn-outline-primary:hover { background-color: #0a58ca !important; color: #ffffff !important; }
.btn-outline-secondary { color: #334155 !important; border-color: #64748b !important; }
.btn-outline-secondary:hover { background-color: #334155 !important; color: #ffffff !important; }
.btn-outline-dark { color: #0f172a !important; border-color: #0f172a !important; }
.btn-outline-dark:hover { background-color: #0f172a !important; color: #ffffff !important; }
"""

for n in (16, 17, 18):
    p = f"Material_Sesion_Clase_{n}_HTML_18_semanas/styles.css"
    content = open(p, encoding="utf-8").read()
    if "ENFORCED DARK CODE BLOCKS" in content:
        content = content[:content.index("/* ==========================================================================\n   ENFORCED DARK CODE BLOCKS")]
    content = content.rstrip() + "\n\n" + css_block.strip() + "\n"
    open(p, "w", encoding="utf-8").write(content)
    print("Updated styles.css in week", n)

# 3. Clean up HTML pre classes and update cache-bust param
def clean_pre(m):
    cls = m.group(1)
    cleaned = re.sub(r'\b(bg-light|bg-white)\b', '', cls)
    cleaned = ' '.join(cleaned.split())
    if cleaned:
        return f'<pre class="{cleaned}"'
    return '<pre'

for fpath in glob.glob("Material_Sesion_Clase_1[678]_HTML_18_semanas/*.html"):
    h = open(fpath, encoding="utf-8").read()
    h_new = re.sub(r'<pre\s+class="([^"]*)"', clean_pre, h)
    h_new = re.sub(r'href="styles\.css(\?v=[^"]*)?"', 'href="styles.css?v=20261031d"', h_new)
    if h_new != h:
        open(fpath, "w", encoding="utf-8").write(h_new)
        print("Updated HTML pre and cache-bust in", os.path.basename(fpath))

print("All execution completed successfully!")

