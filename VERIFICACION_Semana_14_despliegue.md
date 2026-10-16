# Verificación de la Semana 14 — despliegue en Render + Neon

Documento de uso del docente (no es material del estudiante). Resume qué se
comprobó de verdad antes de publicar el material de la Semana 14 (sesión del
**17 de octubre de 2026**), qué se tomó de la documentación oficial y qué
conviene revisar en vivo el día anterior a la clase.

---

## 1. Lo que se ejecutó de verdad (16 de octubre de 2026)

Proyecto `taller-formularios` generado en start.spring.io (Spring Boot
**4.1.1**, Java **17**, dependencias Web, Thymeleaf, Validation, Data JPA, H2,
DevTools, PostgreSQL Driver, Security) con todos los archivos del Kit de la
Semana 13 más los cambios de la Semana 14 (`server.port=${PORT:8080}`,
`application-prod.properties` completo, `Dockerfile`, `.dockerignore`).
Base de datos: PostgreSQL 16 real (embebido, en local), con el usuario
`neondb_owner` y la base `neondb`, igual que Neon.

| Prueba | Resultado |
| --- | --- |
| `./mvnw clean package` sin `ADMIN_PASSWORD` | Falla en `contextLoads` con `Could not resolve placeholder 'ADMIN_PASSWORD'` (mensaje copiado al material) |
| `./mvnw clean package` con las claves | `BUILD SUCCESS`, `.jar` de ~60 MB |
| `java -jar` con `PORT=18080` y perfil `prod` | `Tomcat started on port 18080`, `profile is active: "prod"`, `PgConnection` |
| Login incorrecto / admin / entrenador | `/login?error` / `/jugadores` / 403 en `/jugadores/nuevo` |
| Crear jugador, validación vacía y edad 30 | Guarda; mensajes "El nombre es obligatorio." y "La edad máxima es 17 años." |
| Reinicio de la aplicación | Los jugadores siguen; los usuarios **no** se duplican |
| Consulta directa a PostgreSQL | Tablas `jugador` y `usuario`; contraseñas `$2a$10$…` |
| `X-Forwarded-Proto: https` (como Render) | La redirección a `/login` sale con `https://` gracias a `server.forward-headers-strategy=framework` |
| Memoria con 1 CPU y heap de 384 MB | ~327 MB de RSS tras uso: cabe en los 512 MB del plan gratuito |

### Errores provocados (mensajes reales, copiados al material)

| Provocación | Mensaje |
| --- | --- |
| Sin `SPRING_PROFILES_ACTIVE` | **Arranca sin error** con `profile is active: "dev"` y `jdbc:h2:file:./datos/jugadores` (error silencioso) |
| `DB_URL` = cadena `postgresql://…` sin `jdbc:` | `Driver org.postgresql.Driver claims to not accept jdbcUrl, postgresql://neondb_owner:<CLAVE>@…` (**imprime la clave**) |
| Servidor sin SSL con `sslmode=require` | `PSQLException: The server does not support SSL.` |
| Host de Neon inexistente | Neon responde `password authentication failed for user 'neondb_owner'` |
| Cualquier falla de conexión | El **último** `Caused by` es `Unable to determine Dialect without JDBC metadata` (engañoso) |
| `channel_binding=require` (con guion bajo) en JDBC | El driver lo ignora y conecta |
| `channelBinding=require` contra un servidor sin SCRAM/SSL | `Channel binding is required, but server skipped authentication` (prueba de que el parámetro sí se reconoce) |
| Sin `DB_PASSWORD` | Spring **no** se queja del placeholder: envía `${DB_PASSWORD}` literal y Neon respondería `password authentication failed` |

## 2. Lo que NO se pudo ejecutar aquí (revisar en vivo)

- **El build de Docker en Render.** No había un daemon de Docker disponible.
  El Dockerfile ejecuta exactamente el mismo `mvn -B -DskipTests clean package`
  que sí se probó, y las dos imágenes (`maven:3.9-eclipse-temurin-17`,
  `eclipse-temurin:17-jre`) existen en Docker Hub (comprobado vía API el
  16/10/2026). Hacer el despliegue del "servicio A" el día anterior lo confirma.
- **Conexión a Neon con SSL + SCRAM + `channelBinding=require`.** Es el formato
  que publica Neon en su guía de Java y el driver que trae Spring Boot 4.1.1
  (pgjdbc 42.7.13) lo soporta.
- **Tiempo de arranque en el plan gratuito (0.1 CPU).** Se estimó 40–90 s.

## 3. Correcciones al programa (`Nuevo_Programa_18_semanas-DB con Neon.md`)

1. **"Render detecta el proyecto Maven automáticamente (sin Dockerfile)" ya no
   es cierto.** Render solo soporta de forma nativa Node/Bun, Python, Ruby, Go,
   Rust y Elixir; para Java exige Docker (render.com/docs/language-support y
   render.com/docs/docker). El material usa un Dockerfile de dos etapas.
2. Render renombró **Instance Type → Compute** (26 de agosto de 2026).
3. Neon: el botón es **Connect** → ventana **Connect to your branch**; la rama por
   defecto se llama `production`; *Connection pooling* viene encendido (el
   material indica apagarlo). Almacenamiento gratuito: 1 GB por proyecto desde
   el 2 de octubre de 2026 (antes 0.5 GB).
4. La aplicación necesita **seis** variables en Render, no cuatro: además de
   `DB_URL`, `DB_USER`, `DB_PASSWORD` y `SPRING_PROFILES_ACTIVE`, las claves de
   usuario de la Semana 13 (`ADMIN_PASSWORD`, `ENTRENADOR_PASSWORD`).

## 4. Lista para el día anterior (≈45 min)

1. Crear el proyecto `escuela-futbol-demo` en Neon (región Este de EE. UU.).
2. Desplegar el "servicio A" en Render con el Kit completo; inscribir 3 jugadores.
3. Confirmar en Logs: `Build successful 🎉`, `"prod"`, `PgConnection`,
   `port 10000`, `Your service is live 🎉`.
4. Anotar el tiempo real de build y de arranque; si difieren mucho de
   "5–10 min" y "~1 min", avisar para ajustar el material.
5. Visitar la URL 10 minutos antes de la clase (para que no esté dormida).
