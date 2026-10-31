# apply_contrast.py
import os

css_snippet = """
/* ==========================================================================
   HIGH CONTRAST & ACCESSIBILITY ENHANCEMENTS (WCAG AA/AAA)
   Optimizado para legibilidad en pantallas variadas y proyector de aula.
   ========================================================================== */

/* 1. Muted text legible y de alto contraste (AAA) */
.small-muted,
.text-muted,
body .text-muted {
    color: #374151 !important;
}

/* 2. Enlaces con contraste superior a 4.5:1 (AA) */
a {
    color: #0a58ca;
    text-decoration-color: rgba(10, 88, 202, 0.4);
}
a:hover {
    color: #084298;
}

/* 3. Botones accesibles con texto blanco de alto contraste */
.btn-primary {
    background-color: #0a58ca !important;
    border-color: #0a58ca !important;
    color: #ffffff !important;
}
.btn-primary:hover, .btn-primary:focus {
    background-color: #084298 !important;
    border-color: #084298 !important;
    color: #ffffff !important;
}
.btn-outline-primary {
    color: #0a58ca !important;
    border-color: #0a58ca !important;
}
.btn-outline-primary:hover {
    background-color: #0a58ca !important;
    color: #ffffff !important;
}
.btn-outline-secondary {
    color: #334155 !important;
    border-color: #64748b !important;
}
.btn-outline-secondary:hover {
    background-color: #334155 !important;
    color: #ffffff !important;
}
.btn-success {
    background-color: #15803d !important;
    border-color: #15803d !important;
    color: #ffffff !important;
}
.btn-danger {
    background-color: #b91c1c !important;
    border-color: #b91c1c !important;
    color: #ffffff !important;
}

/* 4. Badges con relación de contraste óptima */
.badge.bg-primary {
    background-color: #0a58ca !important;
    color: #ffffff !important;
}
.badge.bg-secondary {
    background-color: #334155 !important;
    color: #ffffff !important;
}
.badge.bg-success {
    background-color: #15803d !important;
    color: #ffffff !important;
}
.badge.bg-danger {
    background-color: #b91c1c !important;
    color: #ffffff !important;
}
.badge.bg-warning,
.badge.text-bg-warning {
    background-color: #fef08a !important;
    color: #713f12 !important;
    border: 1px solid #facc15 !important;
}
.badge.bg-info,
.badge.text-bg-info {
    background-color: #e0f2fe !important;
    color: #0369a1 !important;
    border: 1px solid #7dd3fc !important;
}
.badge.bg-light,
.badge.text-bg-light {
    background-color: #f1f5f9 !important;
    color: #0f172a !important;
    border: 1px solid #cbd5e1 !important;
}
.badge.bg-dark {
    background-color: #0f172a !important;
    color: #ffffff !important;
}

/* 5. Tarjetas con bordes nítidos */
.card {
    border: 1px solid #cbd5e1 !important;
    box-shadow: 0 4px 16px rgba(15, 23, 42, 0.05);
}
.card-header {
    border-bottom: 1px solid #cbd5e1 !important;
    font-weight: 700;
}
.card-header.bg-primary {
    background-color: #0a58ca !important;
    color: #ffffff !important;
}
.card-header.bg-dark {
    background-color: #0f172a !important;
    color: #ffffff !important;
}
.card-header.bg-warning {
    background-color: #fef08a !important;
    color: #713f12 !important;
    border-bottom: 2px solid #facc15 !important;
}

/* 6. Tablas y rúbricas de evaluación */
.table {
    color: #1e293b;
}
.table thead.table-light th,
.table thead th {
    background-color: #f1f5f9 !important;
    color: #0f172a !important;
    font-weight: 700;
    border-bottom: 2px solid #cbd5e1 !important;
}
.table-bordered > :not(caption) > * > * {
    border-color: #cbd5e1 !important;
}
.table td label {
    display: block;
    padding: 0.35rem 0.45rem;
    border-radius: 0.35rem;
    cursor: pointer;
    color: #1e293b;
    font-weight: 500;
}
.table td label:hover {
    background-color: #f1f5f9;
    color: #0f172a;
}
.table td label input[type="radio"] {
    margin-right: 0.4rem;
    accent-color: #0a58ca;
}

/* 7. Barra de navegación */
.navbar .nav-link {
    color: #334155 !important;
    font-weight: 500;
}
.navbar .nav-link:hover,
.navbar .nav-link:focus {
    color: #0a58ca !important;
}
.navbar .nav-link.active {
    color: #0a58ca !important;
    font-weight: 700;
}
.navbar-brand {
    color: #0f172a !important;
}

/* 8. Formularios y campos interactivos */
.form-control,
.form-select {
    border-color: #94a3b8 !important;
    color: #0f172a !important;
    background-color: #ffffff !important;
}
.form-control:focus,
.form-select:focus {
    border-color: #0a58ca !important;
    box-shadow: 0 0 0 3px rgba(10, 88, 202, 0.2) !important;
    color: #0f172a !important;
}
.form-label {
    color: #0f172a !important;
    font-weight: 600;
}

/* 9. Pestañas de navegación (nav-tabs) */
.nav-tabs .nav-link {
    color: #374151 !important;
    font-weight: 600;
}
.nav-tabs .nav-link.active {
    color: #0a58ca !important;
    font-weight: 700;
    border-bottom: 3px solid #0a58ca !important;
}

/* 10. Código en línea de alto contraste */
code:not(pre code):not(.term code):not(.gui-mock code):not(.s12-error-map code):not(.s12-transition-panel code) {
    color: #991b1b;
    background: #f1f5f9;
    border: 1px solid #e2e8f0;
    padding: 0.12rem 0.38rem;
    border-radius: 0.35rem;
    font-weight: 600;
    font-size: 0.88em;
}

/* 11. Mapa de ruta y puntos de avance */
.ruta-mapa .ruta-paso {
    color: #374151 !important;
}
.ruta-mapa .ruta-punto {
    background: #ffffff;
    border: 3px solid #94a3b8 !important;
    color: #0f172a !important;
    font-weight: 800;
}
.ruta-mapa .ruta-paso.aqui {
    color: #072b61 !important;
    font-weight: 700;
}
.ruta-mapa .ruta-paso.aqui .ruta-punto {
    background: #0a58ca !important;
    border-color: #0a58ca !important;
    color: #ffffff !important;
}
.ruta-mapa .ruta-paso.aqui .ruta-etq::after {
    color: #0a58ca !important;
    font-weight: 800;
}
.ruta-mapa .ruta-paso.hecho .ruta-punto {
    background: #15803d !important;
    border-color: #15803d !important;
    color: #ffffff !important;
}
.ruta-mapa .ruta-paso.hecho::before,
.ruta-mapa .ruta-paso.aqui::before {
    background: #15803d !important;
}

/* 12. Línea de tiempo de la clase (70 minutos) */
.linea-70 .seg {
    color: #0f172a !important;
    font-weight: 600;
}
.linea-70 .seg b {
    color: #000000 !important;
    font-weight: 800;
}

/* 13. Acordeones */
.accordion-button {
    color: #0f172a !important;
    font-weight: 700;
}
.accordion-button:not(.collapsed) {
    color: #072b61 !important;
    background-color: #eff6ff !important;
}
.accordion-item {
    border: 1px solid #cbd5e1 !important;
}
"""

folders = [
    "Material_Sesion_Clase_16_HTML_18_semanas",
    "Material_Sesion_Clase_17_HTML_18_semanas",
    "Material_Sesion_Clase_18_HTML_18_semanas"
]

for folder in folders:
    css_path = os.path.join(folder, "styles.css")
    with open(css_path, "r", encoding="utf-8") as f:
        content = f.read()
    
    # Check if already added
    if "HIGH CONTRAST & ACCESSIBILITY ENHANCEMENTS" in content:
        print(f"Already updated: {css_path}")
        continue
    
    # Update root variables if present
    content = content.replace("--brand: #0d6efd;", "--brand: #0a58ca;\n    --brand-hover: #084298;")
    content = content.replace("--ok: #22c55e;", "--ok: #15803d;")
    content = content.replace("--warn: #f59e0b;", "--warn: #b45309;")
    content = content.replace("--bad: #ef4444;", "--bad: #b91c1c;")
    content = content.replace(".small-muted {\n    color: rgba(0, 0, 0, 0.65);\n}", ".small-muted {\n    color: #374151;\n}")
    
    # Append high contrast block
    content = content.rstrip() + "\n\n" + css_snippet.strip() + "\n"
    
    with open(css_path, "w", encoding="utf-8") as f:
        f.write(content)
    print(f"Updated: {css_path}")

# Also update portal.css tokens
portal_path = "portal.css"
with open(portal_path, "r", encoding="utf-8") as f:
    portal_content = f.read()

portal_content = portal_content.replace("--border: #e3e8f0;", "--border: #cbd5e1;")
portal_content = portal_content.replace("--muted: #55627a;", "--muted: #3d4a61;")
portal_content = portal_content.replace("--soon: #64748b;", "--soon: #475569;")
portal_content = portal_content.replace("--now: #2563eb;", "--now: #1d4ed8;")
portal_content = portal_content.replace("--star: #b45309;", "--star: #9a3412;")

with open(portal_path, "w", encoding="utf-8") as f:
    f.write(portal_content)
print(f"Updated: {portal_path}")

