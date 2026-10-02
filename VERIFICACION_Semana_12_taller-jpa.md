# Verificación de la Semana 12 — levantar `taller-jpa`

Documento de uso del docente (no es material del estudiante). Sirve para
comprobar, antes de la Sesión 12 del **3 de octubre de 2026**, que todo el
código del material de la Semana 12 compila, arranca y se comporta como dice
el `cheatsheet.html`.

**Tiempo estimado:** 35–45 minutos la primera vez (la mayor parte es la
descarga inicial de Maven).

**Lo más valioso de esta verificación** es la sección 5: los mensajes de
error exactos. Todo lo demás es casi seguro que funciona; los mensajes de
error son lo único que se redactó a partir de documentación y no de una
corrida real. Si alguno difiere, anótalo y lo corrijo en el cheatsheet.

---

## 0. Requisitos previos

```bash
java -version      # debe decir 17 o superior
```

Si no aparece, la guía completa de instalación está en
`Material_Sesion_Clase_1_HTML_18_semanas/instalacion.html`. No hace falta
instalar Maven: el proyecto trae su propio `mvnw`.

También conviene tener **VS Code con la extensión Java** abierta, porque así
se ve el árbol de archivos y la carpeta `datos/` apareciendo en vivo.

---

## 1. Generar el proyecto

### Ruta A — rápida, desde la terminal (recomendada para esta verificación)

En **Git Bash**:

```bash
cd ~/Desktop
curl https://start.spring.io/starter.zip \
  -d type=maven-project \
  -d language=java \
  -d javaVersion=17 \
  -d groupId=gt.edu.url \
  -d artifactId=taller-jpa \
  -d name=taller-jpa \
  -d packageName=gt.edu.url.tallerjpa \
  -d dependencies=web,thymeleaf,validation,data-jpa,h2,devtools \
  -o taller-jpa.zip
unzip taller-jpa.zip -d taller-jpa
cd taller-jpa
```

> En **PowerShell**, `curl` es un alias de `Invoke-WebRequest` y no entiende
> `-d`. Hay que escribir `curl.exe` con el `.exe` explícito, o usar la Ruta B.

### Ruta B — gráfica, la que harán los estudiantes

Entrar a <https://start.spring.io> y elegir: Maven · Java · Spring Boot 3.x
estable (sin `SNAPSHOT`) · Group `gt.edu.url` · Artifact `taller-jpa` ·
Packaging Jar · Java 17. En **ADD DEPENDENCIES**, estas seis:

| Dependencia | Para qué |
|---|---|
| Spring Web | el controlador y el servidor |
| Thymeleaf | las plantillas HTML |
| Validation | las anotaciones de la Semana 11 |
| Spring Data JPA | JPA, Hibernate y los repositorios |
| H2 Database | la base de datos local y su driver |
| Spring Boot DevTools | recarga automática: reinicia la app al recompilar y quita la caché de Thymeleaf |

GENERATE → descomprimir → abrir la carpeta en VS Code.

**Vale la pena hacer la Ruta B al menos una vez**, porque es la que el
estudiante verá y conviene confirmar que la interfaz de Initializr no cambió
desde la Semana 7.

---

## 2. Copiar los archivos del Kit

Abrir `Material_Sesion_Clase_12_HTML_18_semanas/ejercicios.html` → pestaña
**"Kit de archivos completos"**. Son 12 archivos; cada uno trae su ruta
exacta arriba. Los paquetes son:

```
gt.edu.url.tallerjpa              TallerJpaApplication.java
gt.edu.url.tallerjpa.model        Libro.java
gt.edu.url.tallerjpa.repository   LibroRepository.java
gt.edu.url.tallerjpa.service      LibroService.java
gt.edu.url.tallerjpa.controller   LibroController.java
src/main/resources/               application.properties
                                  application-dev.properties
                                  application-prod.properties
src/main/resources/templates/     las plantillas Thymeleaf
```

Si se generó el proyecto con otro `groupId`, hay que ajustar la línea
`package` de los cinco archivos Java. Es exactamente el tropiezo que el
material advierte, así que conviene vivirlo.

Por último, agregar al final del `.gitignore`:

```
datos/
```

---

## 3. Arrancar

```bash
./mvnw spring-boot:run        # Git Bash
.\mvnw spring-boot:run        # PowerShell
```

La primera vez Maven descarga medio internet: entre 2 y 5 minutos es normal.

---

## 4. Las seis comprobaciones del camino feliz

| # | Qué verificar | Cómo | Señal de que está bien |
|---|---|---|---|
| 1 | **Arranca limpio** | mirar el final del log | `Started TallerJpaApplication in ... seconds`, sin líneas rojas |
| 2 | **El perfil `dev` está activo** | buscar en el log | `The following 1 profile is active: "dev"` |
| 3 | **La tabla existe de verdad** | <http://localhost:8080/h2-console> · JDBC URL `jdbc:h2:file:./datos/biblioteca` · usuario `sa` · contraseña vacía | se ve la tabla `LIBRO` y `SELECT * FROM LIBRO` corre |
| 4 | **El CRUD completo** | `/libros`, `/libros/nuevo`, el botón de editar, el de eliminar, y `/libros/disponibles` | las cuatro operaciones funcionan y el filtro devuelve solo los disponibles |
| 5 | **La validación de la S11 sigue viva** | enviar el formulario vacío | aparecen los mensajes en español, no una página de error |
| 6 | **La promesa de la semana** | crear 2 libros → `Ctrl+C` → arrancar otra vez → `/libros` | **los 2 libros siguen ahí**, y existe el archivo `datos/biblioteca.mv.db` |

La número 6 es la que hay que ver con los propios ojos, porque es el momento
emocional de la clase y lo que el curso viene prometiendo desde la Sesión 8.

---

## 4b. DevTools (novedad de esta semana)

La recarga automática se introduce en la Semana 12, así que conviene
comprobar las tres velocidades antes de la clase:

| Qué se cambia | Qué debería pasar | Señal |
|---|---|---|
| Un texto de una plantilla de `templates/` | **nada se reinicia** | basta refrescar el navegador y el texto cambió |
| Una línea de código Java | reinicio automático en 1–2 s | en el log vuelve a aparecer `Started TallerJpaApplication`, sin haber tocado la terminal |
| `pom.xml` o cualquier `application*.properties` | **no se recarga** | hay que detener con `Ctrl+C` y arrancar otra vez |

> Lo que dispara el reinicio es la **recompilación**, no el guardado. Si al
> guardar un `.java` no pasa nada, es que se está corriendo desde la terminal
> con `./mvnw spring-boot:run` y VS Code no está recompilando: arrancar con el
> botón ▶ Run (o el Spring Boot Dashboard) y volver a probar. Vale la pena
> confirmar cuál de las dos formas funciona en tu equipo, porque es la primera
> pregunta que van a hacer los estudiantes.

DevTools va con `<optional>true</optional>`, así que **se desactiva solo** al
empaquetar el jar: no estorba en el despliegue de la Semana 14.

---

## 5. Los errores provocados — la verificación que más importa

Ojo: los cambios en `pom.xml` **no** los recoge DevTools, así que en las dos
filas que tocan ese archivo hay que detener y arrancar a mano.

Para cada fila: hacer el cambio, arrancar, **copiar el mensaje real** y
compararlo con lo que dice el material. Después de cada prueba, deshacer el
cambio antes de pasar a la siguiente.

| Qué romper | Dónde | Mensaje que el material promete | Anotar |
|---|---|---|---|
| Quitar `@Id` (y su import) | `Libro.java` | `No identifier specified for entity` | ¿aparece esa frase literal? |
| Quitar el constructor vacío `public Libro() { }` | `Libro.java` | `No default constructor for entity` — el material advierte que puede salir **al arrancar o en la primera lectura**, según la versión de Hibernate | ¿cuál de los dos momentos fue? |
| Borrar la dependencia `h2` | `pom.xml` | `Failed to load driver class org.h2.Driver` **o** `Failed to configure a DataSource` | ¿cuál de los dos salió? |
| Borrar `spring-boot-starter-data-jpa` | `pom.xml` | error de compilación: `package jakarta.persistence does not exist` | ¿compila o arranca y falla? |
| Cambiar `findByDisponibleTrue` por `findByDisponible1rue` | `LibroRepository.java` | `No property ... found for type Libro` al arrancar | ¿el nombre de la propiedad aparece en el mensaje? |
| Devolver `Libro` en vez de `Optional<Libro>` sin `.orElseThrow()` | `LibroService.java` | `incompatible types: Optional<Libro> cannot be converted to Libro` | ¿lo marca VS Code antes de compilar? |

### La trampa silenciosa (probarla aparte)

Esta merece su propia prueba porque es la más difícil de diagnosticar y la
que más tiempo le va a costar al estudiante si cae en ella:

1. En `application-dev.properties`, cambiar `spring.jpa.hibernate.ddl-auto=update`
   por `create`.
2. Arrancar, crear un libro, detener, arrancar otra vez.
3. **Debe aparecer la lista vacía** aunque la URL siga diciendo `file:`.
4. Devolver el valor a `update` y confirmar que los datos vuelven a
   sobrevivir.

Si este comportamiento no se reproduce, hay que corregir el cheatsheet,
porque es la explicación de por qué un estudiante puede jurar que configuró
todo bien y seguir perdiendo los datos.

---

## 6. El perfil `prod` (comprobación de 2 minutos)

`application-prod.properties` usa `${DB_URL}`, `${DB_USER}` y
`${DB_PASSWORD}`, que **todavía no existen**: son para Neon, en la Semana 14.
Solo hay que confirmar dos cosas:

- Con el perfil por defecto (`dev`), esos marcadores **no estorban** y la
  aplicación arranca normal.
- Si se fuerza `prod` (`./mvnw spring-boot:run -Dspring-boot.run.profiles=prod`),
  la aplicación **falla al arrancar** por falta de las variables. Eso es lo
  esperado y correcto hoy; no es un error del material.

---

## 7. Si solo hay 15 minutos

Hacer la Ruta A, copiar el Kit, arrancar, y verificar únicamente:

1. Arranca limpio (comprobación 1).
2. Los datos sobreviven al reinicio (comprobación 6).
3. La trampa de `ddl-auto=create` (sección 5).

Es el 80% del valor. El resto se puede revisar el viernes.

---

## 8. Qué hacer con los resultados

Si algún mensaje de error real difiere del prometido, basta con pasarme la
lista (qué prueba y qué dijo la terminal) y ajusto estas tres páginas, que
son las únicas que citan mensajes literales:

- `Material_Sesion_Clase_12_HTML_18_semanas/cheatsheet.html` → tabla
  "Errores comunes de la semana"
- `Material_Sesion_Clase_12_HTML_18_semanas/clase.html` → tabla "Errores que
  verás en las salas"
- `Material_Sesion_Clase_12_HTML_18_semanas/ejercicios.html` → Ejercicio 7

Al terminar, el proyecto `taller-jpa` se puede borrar: es desechable. El que
importa es el proyecto real, que se toca en `proyecto.html`.
