# Mini retrospectiva de equipo

Aplicación PHP autoguiada para que un grupo revise su proceso, acuerde mejoras y
se lleve un acta lista para guardar como PDF. No requiere cuenta, base de datos,
API externa, credenciales ni configuración de secretos.

## Ejecutar localmente

Requiere PHP 7.4 o posterior. Desde la raíz del repositorio:

```powershell
php -S 127.0.0.1:8000 -t mini_retro
```

Abre <http://127.0.0.1:8000/>. No abras `index.php` con `file://`: el guardado
necesita el servidor PHP.

## Publicar en un hosting PHP

1. Sube el contenido de `mini_retro/` a una carpeta de un hosting con PHP 7.4+
   y Apache (por ejemplo, `public_html/mini_retro/`).
2. Asegúrate de subir `data/.htaccess`. Esta regla bloquea la lectura pública
   directa del almacén JSON.
3. PHP debe poder escribir en `mini_retro/data/`. Si hace falta, configura esa
   carpeta con permisos `755` o `775`, según el usuario con que corre PHP.
4. Abre la URL de `mini_retro/`, crea una sesión de prueba y comprueba que se
   conserva al recargar la página.
5. Activa HTTPS antes de compartir enlaces entre dispositivos.

El primer guardado crea `data/sessions.json`. Ese archivo no se versiona en Git.
El directorio `data/` contiene información de los equipos: mantenlo respaldado
solo mientras haga falta y elimina las sesiones cuando el grupo ya haya
descargado su PDF.

## Cómo conduce la sesión el equipo

El reproductor tiene cinco etapas guiadas y un acta final:

1. **Preparar:** identificar equipo, proyecto y periodo; aceptar acuerdos de
   seguridad, participación equitativa y confidencialidad.
2. **Reunir datos:** crear observaciones y moverlas a *Seguir haciendo*,
   *Probar o cambiar* y *Preguntas*. Se requieren al menos tres tarjetas y una
   por columna.
3. **Encontrar patrones:** agrupar tarjetas por tema, describir el aprendizaje
   y emitir hasta tres votos para priorizar.
4. **Acordar acciones:** escribir hasta tres experimentos con responsable por
   rol, fecha de revisión y evidencia de éxito; se pueden reordenar.
5. **Cerrar:** medir confianza del equipo y registrar el aprendizaje final.

El botón **Siguiente etapa** valida los requisitos y explica qué falta. Las
zonas aceptan arrastrar y soltar; cada tarjeta también tiene un menú para
moverla con teclado o pantalla táctil. El cronómetro es opcional, cuenta el
tiempo de la sesión y se puede pausar. El informe final recopila los hechos,
patrones y votos, acuerdos de acción, nivel de confianza y cierre.

En **Exportar acta a PDF**, el navegador abre el diálogo de impresión:
selecciona **Guardar como PDF**. El PDF es el comprobante que el grupo adjunta
en la entrega indicada por el curso.

## Guardado, enlace privado y privacidad

- Los cambios se guardan automáticamente en el servidor PHP y en el navegador.
  Si el servidor falla, se informa en pantalla y se conserva la copia local
  cuando el navegador lo permite.
- Cada sesión tiene un enlace privado aleatorio. El fragmento del enlace es
  una llave de acceso: cualquiera que lo tenga puede leer y editar esa sesión.
  Compártelo solo con el equipo; no lo publiques ni lo agregues al repositorio.
- El grupo debe trabajar en una sola sesión compartida (idealmente una pantalla
  común). No hay edición simultánea en tiempo real; cambios concurrentes desde
  varias copias pueden sobrescribirse.
- No escribas nombres completos, contraseñas, datos de beneficiarios ni otra
  información sensible. El campo del equipo debe ser un alias.
- Después de descargar el PDF, usa **Borrar esta retrospectiva** para eliminar
  los datos del servidor y del navegador. La acción solicita confirmación y no
  se puede deshacer.
- No hay inicio de sesión ni panel administrativo: este recurso es para
  actividades de equipo y no debe almacenar información sensible.

## Archivos

| Archivo | Responsabilidad |
| --- | --- |
| `index.php` | Interfaz accesible del reproductor |
| `app.js` | Etapas, arrastrar/soltar, validación, guardado y acta imprimible |
| `api.php` | API JSON con validación, llave de sesión y bloqueo de archivo |
| `styles.css` | Diseño adaptable y formato de impresión |
| `data/.htaccess` | Protección del almacén JSON en Apache |
