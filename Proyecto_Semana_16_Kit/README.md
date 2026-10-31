# Proyecto de referencia — Semana 16 (`taller-formularios` con Flujo Dinámico)

Proyecto de referencia extendido para la **Semana 16** con el **flujo dinámico completo**:
1. **Asignación a Equipos (`/asignacion-equipo`):** formularios dinámicos cuyos `<option>` se leen de la base de datos (equipos y jugadores registrados), sin código HTML quemado.
2. **Estadísticas de Jugador (`/estadisticas-jugador`):** captura y consulta de métricas (partidos, goles, asistencias) vinculadas al id del jugador.
3. **Hub del Jugador (`/mi-hub`):** portal personal donde el usuario jugador autenticado consulta su equipo, la plantilla (con sus círculos y casillas de *"Vacante"* si faltan cupos) y sus estadísticas individuales.
4. **Recursos Multimedia:** inclusión de imágenes estáticas desde `src/main/resources/static/img/` y videos de YouTube embebidos con `<iframe>` sin librerías adicionales.

Todo construido bajo la arquitectura canónica de **Spring Boot 4 / Java 17**, Spring Data JPA, Thymeleaf y Spring Security sin dependencias extraordinarias.

---

## 1. Usuarios y Roles de Prueba

| Usuario | Rol | Contraseña (Variable) | Acceso |
|---|---|---|---|
| `admin` | `ROLE_ADMIN` | `ADMIN_PASSWORD` | Inscribir, editar, eliminar, asignar equipos y ver estadísticas |
| `entrenador` | `ROLE_ENTRENADOR` | `ENTRENADOR_PASSWORD` | Ver jugadores y registrar estadísticas de desempeño |
| `jugador` | `ROLE_JUGADOR` | `JUGADOR_PASSWORD` (opcional) | Redirección automática a `/mi-hub` para ver su equipo y estadísticas |

---

## 2. Desarrollo en tu computadora (perfil `dev`, H2)

**macOS / Linux / Git Bash**
```bash
cd taller-formularios
export ADMIN_PASSWORD="Clave-Admin-2026"
export ENTRENADOR_PASSWORD="Clave-Entr-2026"
export JUGADOR_PASSWORD="Clave-Jugador-2026"
./mvnw spring-boot:run
```

**Windows (PowerShell)**
```powershell
cd taller-formularios
$env:ADMIN_PASSWORD = "Clave-Admin-2026"
$env:ENTRENADOR_PASSWORD = "Clave-Entr-2026"
$env:JUGADOR_PASSWORD = "Clave-Jugador-2026"
.\mvnw.cmd spring-boot:run
```

Abre <http://localhost:8080> e inicia sesión con `admin`, `entrenador` o `jugador`.

---

## 3. Nuevos Endpoints y Vistas de la Semana 16

- `/asignacion-equipo` (GET / POST): asigna un jugador a un equipo disponible respetando el cupo máximo.
- `/estadisticas-jugador` (GET / POST): selector dinámico de jugador y formulario de actualización de estadísticas.
- `/mi-hub` (GET): vista personalizada del jugador logueado con la plantilla visual del equipo.
- `/img/escudo.svg`: recurso estático servido desde `static/img/` accesible públicamente.
