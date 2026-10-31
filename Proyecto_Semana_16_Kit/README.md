# Proyecto de referencia — Semana 14 (`taller-formularios` armado desde el Kit)

Proyecto construido **como lo haría un estudiante por la Ruta B**, sin agregar
nada fuera del material:

1. Generado en start.spring.io con los datos exactos del Kit de la Semana 13
   (Maven, Java 17, Spring Boot 4.1.1, Group `gt.edu.url`, Artifact
   `taller-formularios`, paquete `gt.edu.url.tallerformularios`; dependencias
   Spring Web, Thymeleaf, Validation, Spring Data JPA, H2 Database, Spring Boot
   DevTools, PostgreSQL Driver, Spring Security). `pom.xml`, `mvnw`, la clase
   principal y la prueba `contextLoads` son los que genera Initializr, sin editar.
2. Clases Java, plantillas y `estilos.css` copiados tal cual del
   [Kit de la Semana 13](../Material_Sesion_Clase_13_HTML_18_semanas/ejercicios.html).
3. `application*.properties`, `Dockerfile` y `.dockerignore` copiados tal cual
   del [Kit de la Semana 14](../Material_Sesion_Clase_14_HTML_18_semanas/ejercicios.html);
   `datos/` agregado al `.gitignore` (instrucción del Kit de la Semana 13).

Probado el 16/10/2026: el empaquetado falla sin claves y pasa con ellas; perfil
`dev` en el puerto 9090; perfil `prod` contra PostgreSQL en el puerto 10000 con
login, CRUD, validaciones, 403 del entrenador, redirección HTTPS detrás de proxy
y datos que sobreviven al reinicio.

Todos los comandos se ejecutan **dentro de la carpeta `taller-formularios/`**.
Las claves de abajo son de ejemplo: usa las tuyas.

---

## 1. Desarrollo en tu computadora (perfil `dev`, H2)

**macOS / Linux / Git Bash**

```bash
cd taller-formularios
export ADMIN_PASSWORD="Clave-Admin-2026"
export ENTRENADOR_PASSWORD="Clave-Entr-2026"
./mvnw spring-boot:run
```

**Windows (PowerShell)**

```powershell
cd taller-formularios
$env:ADMIN_PASSWORD = "Clave-Admin-2026"
$env:ENTRENADOR_PASSWORD = "Clave-Entr-2026"
.\mvnw.cmd spring-boot:run
```

Abre <http://localhost:8080> → usuario `admin` o `entrenador` con la clave que
definiste. Los datos quedan en `datos/` (ignorada por Git).

## 2. Empaquetar y ejecutar el `.jar` (Ejercicios 1 y 2)

En la **misma terminal** donde definiste las dos claves:

```bash
./mvnw clean package                 # Windows: .\mvnw.cmd clean package
java -jar target/taller-formularios-0.0.1-SNAPSHOT.jar
```

Si lo ejecutas en una terminal sin las claves, falla a propósito en la prueba
`contextLoads` (`Could not resolve placeholder 'ADMIN_PASSWORD'`).

Puerto prestado (como lo hará Render):

```bash
PORT=9090 java -jar target/taller-formularios-0.0.1-SNAPSHOT.jar       # Bash
# PowerShell: $env:PORT = "9090"; java -jar target/taller-formularios-0.0.1-SNAPSHOT.jar
#             (luego Remove-Item Env:PORT)
```

## 3. Tu computadora contra Neon (perfil `prod`, Ejercicio 5)

Con los valores de **tu** proyecto en Neon (Connect → pooling apagado):

**macOS / Linux / Git Bash** (la URL entre comillas simples por el `&`)

```bash
export SPRING_PROFILES_ACTIVE=prod
export DB_URL='jdbc:postgresql://ep-xxxx.us-east-2.aws.neon.tech/neondb?sslmode=require&channelBinding=require'
export DB_USER=neondb_owner
export DB_PASSWORD='npg_tu_clave'
export ADMIN_PASSWORD='Clave-Admin-2026'
export ENTRENADOR_PASSWORD='Clave-Entr-2026'
java -jar target/taller-formularios-0.0.1-SNAPSHOT.jar
```

**Windows (PowerShell)**

```powershell
$env:SPRING_PROFILES_ACTIVE = "prod"
$env:DB_URL = "jdbc:postgresql://ep-xxxx.us-east-2.aws.neon.tech/neondb?sslmode=require&channelBinding=require"
$env:DB_USER = "neondb_owner"
$env:DB_PASSWORD = "npg_tu_clave"
$env:ADMIN_PASSWORD = "Clave-Admin-2026"
$env:ENTRENADOR_PASSWORD = "Clave-Entr-2026"
java -jar target/taller-formularios-0.0.1-SNAPSHOT.jar
```

En el log debes ver `profile is active: "prod"` y `PgConnection`; las tablas
`jugador` y `usuario` aparecen en Neon → Tables. Los usuarios se crean con las
claves de este primer arranque: usa **las mismas** en Render.

## 4. (Opcional) Probar el Dockerfile en tu computadora

Solo si tienes Docker Desktop instalado; **no es necesario** para Render, que
construye la imagen por su cuenta.

```bash
docker build -t taller-formularios .
docker run --rm -p 8080:8080 \
  -e SPRING_PROFILES_ACTIVE=prod -e DB_URL="$DB_URL" -e DB_USER="$DB_USER" \
  -e DB_PASSWORD="$DB_PASSWORD" -e ADMIN_PASSWORD="$ADMIN_PASSWORD" \
  -e ENTRENADOR_PASSWORD="$ENTRENADOR_PASSWORD" taller-formularios
```

## 5. Publicar en Render (Ejercicios 6 y 7)

1. Este proyecto debe estar en la **raíz** de su repositorio de GitHub (o, si
   queda dentro de una subcarpeta, escribir esa carpeta en *Root Directory*).
   Antes del push: `git grep npg_` no debe encontrar nada.
2. Render → **+ New → Web Service** → repositorio → **Language: Docker**,
   Branch `main`, región Este de EE. UU., **Compute: Free**,
   Health Check Path `/login`.
3. Seis variables: `SPRING_PROFILES_ACTIVE=prod`, `DB_URL`, `DB_USER`,
   `DB_PASSWORD`, `ADMIN_PASSWORD`, `ENTRENADOR_PASSWORD` (no agregues `PORT`).
4. **Deploy Web Service** y leer Logs hasta `Your service is live 🎉`, con
   `"prod"`, `PgConnection` y `Tomcat started on port 10000`.
