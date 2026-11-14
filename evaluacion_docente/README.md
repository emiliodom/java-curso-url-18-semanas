# Evaluación docente anónima — sugerencias y quejas (18 sesiones, una sola fuente)

Módulo autocontenido para recolectar, **de forma 100% anónima**, la evaluación del
profesor, sugerencias y quejas de **cada sesión** del curso. Toda la información se
acumula en **un solo archivo JSON** (`data/evaluaciones.json`) — una única fuente de
verdad para las 18 semanas — y se consulta desde un **dashboard protegido en `/admin`**.

## Qué incluye

| Archivo | Función |
| --- | --- |
| `index.html` | Formulario anónimo (selector de sesión 1–18, 5 escalas 1–5, lo mejor / sugerencias / quejas) |
| `guardar.php` | Recibe el envío y lo agrega al JSON (con bloqueo de archivo y honeypot anti-bots) |
| `data/evaluaciones.json` | Se crea solo con el primer envío. Única fuente de datos |
| `data/.htaccess` | Bloquea la lectura directa del JSON desde el navegador |
| `admin/index.php` | Dashboard con login: totales, promedio global, promedios por sesión, comentarios filtrables |
| `admin/descargar.php` | Descarga del JSON completo (requiere sesión de admin) |
| `config.php` | ⚠ Aquí defines la contraseña del panel |

## Anonimato (por diseño)

- No se pide nombre, carné ni correo.
- El servidor **no guarda IP, user-agent ni cookies** del estudiante.
- Solo se registra: sesión evaluada, puntajes, textos y fecha/hora del servidor.

## Cómo subirlo a Hostinger (paso a paso)

Hostinger (planes compartidos) trae **PHP activado por defecto**, que es lo único que
este módulo necesita. No requiere base de datos.

1. Entra a **hPanel → Archivos → Administrador de archivos** (o conéctate por FTP con FileZilla).
2. Ve a la carpeta `public_html/` de tu dominio.
3. **Opción A (rutas cortas, recomendada si el dominio es solo para esto):**
   sube el **contenido** de `evaluacion_docente/` directo a `public_html/`.
   - Formulario: `https://tudominio.com/`
   - Dashboard: `https://tudominio.com/admin/`
4. **Opción B (conviviendo con el portal de materiales):**
   sube la carpeta completa `evaluacion_docente/` dentro de `public_html/`.
   - Formulario: `https://tudominio.com/evaluacion_docente/`
   - Dashboard: `https://tudominio.com/evaluacion_docente/admin/`
5. **Edita `config.php`** (clic derecho → Editar en el Administrador de archivos) y
   cambia `CAMBIA-ESTA-CLAVE-2026` por una contraseña fuerte y privada.
6. Verifica que tu dominio tenga **HTTPS activo** (hPanel → Seguridad → SSL, es gratis
   con Let's Encrypt). Importante para que las respuestas viajen cifradas.
7. Prueba: abre el formulario, envía una respuesta de prueba, entra a `/admin`,
   confirma que aparece y bórrala si quieres descargando/limpiando el JSON.

### Permisos (solo si el envío falla)

Si al enviar aparece "No se pudo abrir el almacén de datos", da permisos de escritura
a la carpeta `data/`: en el Administrador de archivos → clic derecho sobre `data` →
Permisos → `755` (o `775` si persiste).

## Flujo de uso cada semana

1. Al cerrar cada sesión, comparte el enlace del formulario en el chat (el mismo
   enlace todas las semanas — el estudiante solo elige la semana en el selector).
2. Revisa el dashboard `/admin` después de clase: promedios por sesión, sugerencias y quejas.
3. Descarga el JSON cuando quieras respaldar o analizar los datos (Excel, Python, etc.).

## Evaluación del curso completo (modo `curso`)

Desde el cierre del curso (14 de noviembre de 2026) el mismo formulario sirve
para evaluar **todo el curso**:

- Enlace directo: `https://proximaweb.click/url/evaluacion_docente/index.html?modo=curso`
  (o pulsar "⭐ El curso completo" en la parte superior del formulario).
- Seis criterios de 1 a 5: organización del curso, materiales, aprendizaje,
  el proyecto como forma de aprender, desempeño del docente y si lo
  recomendarían; más lo mejor, sugerencias para la próxima generación y quejas.
- Se guarda en el mismo `data/evaluaciones.json` con `"tipo": "curso"` y
  `"sesion": 0`. Los registros sin `tipo` (anteriores) cuentan como sesión.
- En `/admin` aparece la sección **🎓 Evaluación del curso completo** con sus
  promedios, separada de los promedios por sesión, y el filtro de comentarios
  tiene la opción "Curso completo".
- **Para que el enlace funcione hay que volver a subir por FTP**
  `index.html`, `guardar.php` y `admin/index.php`. Si el servidor tiene la
  versión anterior, el enlace abre el formulario de sesión de siempre.

## Enlace desde el material de clase

El hub de la Semana 1 (`Material_Sesion_Clase_1_HTML_18_semanas/index.html`) puede
enlazar al formulario una vez publicado, por ejemplo:

```html
<a href="https://tudominio.com/evaluacion_docente/">Evalúa la sesión (anónimo)</a>
```

> Nota: el formulario **no funciona abriendo el archivo localmente** (necesita PHP).
> Pruébalo ya subido a Hostinger.
