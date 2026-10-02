# Examen parcial — módulo de calificación (Semana 9)

Backend en PHP puro (sin base de datos, igual que `evaluacion_docente/`) para el
**examen parcial de mitad de curso**: entrega las preguntas, califica en el
servidor, limita a **2 intentos por carné** y guarda todo en un JSON.

## Por qué la calificación va en el servidor

El examen vale **15 puntos** y es autocalificable. Si la clave de respuestas
estuviera en el HTML, cualquiera podría verla con *Ver código fuente*. Por eso:

- La clave vive **solo** en `examen_datos.php`, que nunca se envía al navegador.
- `verificar.php` entrega las preguntas **sin** el campo `correcta`.
- `calificar.php` recibe las respuestas, califica y devuelve el punteo.
- Al estudiante se le dice **si acertó o no cada pregunta, pero nunca cuál era
  la correcta** — así el segundo intento sigue siendo un examen.
- Las opciones se **barajan por estudiante**, así que "la respuesta es la B" no
  significa nada entre compañeros.

El límite de 2 intentos también se aplica en el servidor: aunque alguien
manipule la página, un tercer intento no se registra.

## Dos archivos NO están en este repositorio

El repositorio del curso es **público**, así que estos dos quedaron fuera a
propósito (ver `.gitignore` en la raíz):

| Archivo | Por qué no se sube | Cómo recuperarlo |
|---|---|---|
| `examen_datos.php` | contiene la **clave de respuestas** del examen de 15 pts | vive en tu equipo y en Hostinger; súbelo por FTP, nunca por git |
| `config.php` | contiene la **contraseña del panel `/admin`** | copia `config.php.ejemplo` como `config.php` y pon tu clave |

Tampoco se suben los JSON de `data/`: son las respuestas de los estudiantes.

Si alguna vez clonas el repo en una máquina nueva, el módulo **no arrancará**
hasta que esos dos archivos estén en su sitio.

## Archivos

| Archivo | Qué hace |
| --- | --- |
| `examen_datos.php` | **Fuente única**: las 20 preguntas, sus opciones y la clave. Es el único archivo que se edita para cambiar el examen. |
| `verificar.php` | `POST {carne, nombre}` → valida intentos disponibles y devuelve el examen sin respuestas. |
| `calificar.php` | `POST {carne, nombre, respuestas, duracion_seg}` → califica, guarda y devuelve el resultado. |
| `comun.php` | Funciones compartidas (almacén con `flock`, validación de carné). |
| `config.php` | Contraseña del panel, intentos máximos y qué intento cuenta para la nota. |
| `data/intentos.json` | Se crea solo. Todos los intentos. |
| `data/.htaccess` | Bloquea la lectura directa del JSON desde el navegador. |
| `admin/index.php` | Panel: resumen por carné, notas y detalle de cada intento. |
| `admin/descargar.php` | Descarga de resultados en CSV (para el aula virtual) o JSON. |

## Estructura del examen (15 pts, 20 minutos)

| Sección | Contenido | Preguntas | Punteo |
| --- | --- | --- | --- |
| 1 | Conceptos: GitHub, Java, Spring Boot y su librería web, endpoints, ambientes de desarrollo y producción | 10 × 0.6 | 6 |
| 2 | Encontrar 5 errores en un archivo Java | 5 × 0.8 | 4 |
| 3 | Estructura mínima necesaria para ejecutar un endpoint | 5 × 1.0 | 5 |
| | | **20** | **15** |

Todas las preguntas son de **opción múltiple** (3 opciones).

## Antes de la sesión — despliegue en Hostinger

1. **Cambia la contraseña** en `config.php` (`ADMIN_PASSWORD`).
2. Sube la carpeta `examen_parcial/` al hosting, al mismo nivel que
   `Material_Sesion_Clase_9_HTML_18_semanas/` (la página del examen la busca
   como `../examen_parcial/`).
3. Verifica que `data/` tenga permisos de escritura (755 suele bastar).
4. Abre `examen_parcial/admin/` y confirma que pide la contraseña.
5. **Haz una prueba completa con un carné falso** (por ejemplo `PRUEBA1`) antes
   de la clase, y bórrala después descargando el JSON, quitando ese registro y
   volviéndolo a subir — o simplemente déjala, se distingue por el carné.

### Probar en local, sin hosting

Desde la raíz del repo:

```bash
php -S 127.0.0.1:8000
```

Y abrir `http://127.0.0.1:8000/Material_Sesion_Clase_9_HTML_18_semanas/examen.html`.
Requiere PHP 7.2 o superior. Abrir el archivo con doble clic (`file://`) **no**
funciona para el examen: el navegador no puede llamar a los scripts PHP.

## Durante la sesión

- El estudiante escribe nombre y carné, acepta el compromiso de honestidad y
  empieza. Tiene **20 minutos** con cronómetro visible; al llegar a cero el
  examen se entrega solo con lo que lleve contestado.
- Si alguien cierra la pestaña por accidente, puede volver a entrar: se le
  contará como su segundo intento.

## Después

- Entra a `examen_parcial/admin/`, revisa el resumen por carné y descarga el
  **CSV** para pasar las notas al aula virtual.
- Por defecto cuenta el **mejor** de los dos intentos. Se cambia en
  `config.php` con `NOTA_QUE_CUENTA` (`mejor`, `primero` o `ultimo`).

## Límites honestos de este módulo

- No hay cuentas de usuario: el carné es lo único que identifica. Alguien podría
  escribir el carné de otra persona. Para este curso se asume buena fe, y el
  registro queda con fecha y hora para cualquier revisión.
- No impide que alguien busque en internet durante el examen; eso se controla
  con la supervisión de la sesión sincrónica, no con el código.
