# Guía y Plantilla Maestra: Entregable de Proyecto Llave en Mano
## Introducción al Desarrollo Web con Java · Universidad Rafael Landívar
### Profesorado con Especialidad en TIC · Profesor: Emilio Domínguez

---

## 📌 ¿Qué significa una entrega "Llave en Mano"?

En el ámbito profesional y en la ingeniería de software educativo, un proyecto **llave en mano** (*turnkey*) significa que la solución tecnológica está **100% terminada, desplegada en la nube, documentada y lista para ser utilizada de inmediato por el usuario final o la institución**, sin requerir que el cliente configure servidores, instale compiladores ni resuelva dependencias técnicas complejas.

Este documento contiene todos los estándares, formatos, plantillas de correo, protocolos de credenciales y guiones de video necesarios para realizar la entrega formal del proyecto en las Semanas 17 y 18.

---

## Módulo 1. Documentación Técnica y Manuales de Usuario

Todo proyecto entregable debe contar con tres niveles de documentación organizados en el repositorio de GitHub:

### 1.1 Estructura Estándar del `README.md` del Repositorio
El archivo `README.md` es la carta de presentación técnica del sistema. Debe estructurarse con las siguientes secciones obligatorias:

1. **Encabezado:** Nombre del sistema, logotipo o insignia, enlace a la aplicación en vivo en Render (`https://tu-app.onrender.com`) y estado de despliegue (`Build: Passing`).
2. **Contexto de la Institución:** Nombre de la entidad sin fines de lucro beneficiaria (ej. Hogar de Niños, Dispensario Médico, Comedor Comunitario), problemática que enfrentaba y objetivo de la solución digital.
3. **Arquitectura y Árbol de Paquetes:** Diagrama o árbol de directorios explicando la función de cada paquete:
   - `gt.edu.url.miproyecto.model`: Clases `@Entity` y restricciones Bean Validation.
   - `gt.edu.url.miproyecto.repository`: Interfaces `JpaRepository`.
   - `gt.edu.url.miproyecto.service`: Lógica de negocio intermedia.
   - `gt.edu.url.miproyecto.controller`: Controladores `@Controller` y rutas HTTP.
   - `gt.edu.url.miproyecto.config`: Configuración de Spring Security y encriptación BCrypt.
   - `src/main/resources/templates`: Vistas dinámicas Thymeleaf.
4. **Instrucciones de Ejecución Local:**
   ```bash
   git clone https://github.com/usuario/mi-proyecto.git
   cd mi-proyecto
   ./mvnw spring-boot:run
   ```
   *Acceso local:* `http://localhost:8080` (Base H2 en memoria/archivo).
5. **Configuración de Producción (Variables de Entorno en Render):**
   Tabla documentando las variables requeridas (sin revelar secretos):
   - `SPRING_PROFILES_ACTIVE`: `prod`
   - `DB_URL`: Cadena JDBC de Neon (`jdbc:postgresql://.../neondb?sslmode=require`)
   - `DB_USER`: Usuario de Neon
   - `DB_PASSWORD`: Contraseña de Neon
   - `ADMIN_PASSWORD`: Clave del administrador del sistema
   - `ENTRENADOR_PASSWORD` (u `OPERADOR_PASSWORD`): Clave del rol estándar

### 1.2 Manual de Usuario para el Personal de la Entidad
Documento orientado a usuarios no técnicos (directores, secretarias o voluntarios):
- **Paso 1: Acceso:** Abrir la URL en el navegador de cualquier computadora o celular.
- **Paso 2: Inicio de Sesión:** Ingresar con el usuario y clave asignados.
- **Paso 3: Registro de Beneficiarios:** Cómo ingresar a "Nuevo Registro", qué casillas son obligatorias, qué alertas rojas aparecen si hay un error y cómo corregirlas.
- **Paso 4: Consulta y Búsqueda:** Cómo visualizar el listado general y utilizar los filtros.
- **Paso 5: Roles y Permisos:** Qué acciones puede hacer un voluntario frente a las acciones reservadas exclusivamente para la dirección (eliminar o modificar registros sensibles).
---

## Módulo 2. Guía y Guiones para Videos Explicativos

La entrega llave en mano incluye dos piezas audiovisuales grabadas por el equipo de estudiantes. Se alojan en YouTube (modo "No listado / Oculto") o en Google Drive institucional con permisos abiertos de lectura:

### 2.1 Video A: Pitch Ejecutivo y Caso de Uso (Duración: 3:00 minutos)
- **Audiencia:** Directores de la institución, docentes evaluadores y público general.
- **Tono:** Profesional, claro, enfocado en el impacto social y humano.
- **Estructura Minuto a Minuto:**
  - **Minuto 0:00–0:45 (El Problema):** Presentación del equipo de estudiantes de la URL y contexto de la entidad sin fines de lucro. Mostrar la dificultad del registro en papel o archivos de Excel desorganizados.
  - **Minuto 0:45–2:00 (La Solución Digital):** Demostración visual de la aplicación web en Render. Mostrar la facilidad con que un voluntario ingresa un nuevo beneficiario desde una computadora o celular.
  - **Minuto 2:00–2:30 (Seguridad y Confiabilidad):** Explicar que los datos están respaldados en la nube con PostgreSQL (Neon), protegidos con contraseña y accesibles con candado seguro HTTPS.
  - **Minuto 2:30–3:00 (Agradecimiento y Cierre):** Impacto pedagógico del proyecto en la formación del profesorado en TIC y cierre formal.

### 2.2 Video B: Demostración Técnica y Recorrido de Arquitectura (Duración: 5:00 minutos)
- **Audiencia:** Docente del curso (Prof. Emilio Domínguez) y tribunal de evaluación técnica.
- **Tono:** Riguroso, técnico, empleando la terminología precisa de la ingeniería de software.
- **Estructura Minuto a Minuto:**
  - **Minuto 0:00–1:00 (Árbol y Arquitectura):** Compartir pantalla en VS Code. Mostrar la clase principal con `@SpringBootApplication`, la separación de paquetes (`model`, `repository`, `service`, `controller`, `config`, `templates`) y explicar por qué ningún archivo debe quedar fuera del paquete base.
  - **Minuto 1:00–2:15 (Formulario, Bean Validation y PRG):** Abrir la aplicación en vivo en Render. Abrir el formulario y presionar "Guardar" con casillas vacías para mostrar las alertas rojas generadas por `th:errors` y Bean Validation. Destacar que los campos escritos no se borran y explicar que el controlador retorna directamente la vista en vez de hacer redirect. Luego guardar un registro válido y explicar el patrón POST-Redirect-GET.
  - **Minuto 2:15–3:15 (Persistencia en Neon PostgreSQL):** Mostrar la tabla del listado alimentada por `th:each`. Abrir el panel de Neon (o consola H2 en dev) y verificar que la fila fue insertada con su clave primaria generada (`IDENTITY`).
  - **Minuto 3:15–4:15 (Seguridad por Roles):** Demostrar el login. Ingresar con rol estándar y mostrar cómo los botones de eliminación están ocultos por `sec:authorize`. Luego intentar forzar la URL directa de eliminación y mostrar la pantalla de acceso denegado (403) gracias a `requestMatchers` en `SecurityConfig`.
  - **Minuto 4:15–5:00 (CI/CD y Redeploy):** Mostrar el `Dockerfile` multietapa en GitHub y el log de Render evidenciando el último deploy automático tras el commit en la rama `main`.

### 2.3 Criterios de Calidad Audiovisual Obligatorios
- **Resolución:** Mínimo 1080p (Full HD) con texto de pantalla legible.
- **Audio:** Voz nítida sin eco ni música de fondo que opaque la explicación.
- **Puntualidad:** Videos que excedan por más de 30 segundos el tiempo límite sufrirán penalización en la rúbrica.
---

## Módulo 3. Protocolo Seguro de Credenciales y Plataformas

Uno de los aprendizajes clave del curso es la **higiene de secretos**. En un proyecto llave en mano nunca se entregan contraseñas en texto plano dentro de un repositorio público ni en diapositivas. Se utiliza el siguiente protocolo:

### 3.1 Inventario de Plataformas del Sistema
1. **GitHub (Código Fuente y Control de Versiones):**
   - Repositorio público del proyecto con rama `main` protegida.
   - Todo el equipo y el docente deben tener acceso de lectura/colaboración.
2. **Neon (Base de Datos Gestionada en la Nube):**
   - Motor PostgreSQL 16 con SSL obligatorio (`sslmode=require`).
   - El cómputo se pausa por inactividad pero los datos persisten indefinidamente (no caducan).
3. **Render (Alojamiento y Despliegue de la Aplicación Web):**
   - Servicio Web conectado al repositorio de GitHub mediante webhook.
   - Despliegue gobernado por Dockerfile multietapa con Maven y Eclipse Temurin 17 JRE.
   - Certificado SSL automático sobre dominio `*.onrender.com`.

### 3.2 Formato Seguro de Ficha de Traspaso de Credenciales
Este cuadro se entrega exclusivamente a través del formulario oficial de entrega en el aula virtual de la URL o en un sobre digital privado, nunca en el repositorio de GitHub:

| Servicio / Rol | Usuario / Identificador | Ubicación de Configuración | Propósito |
|---|---|---|---|
| **Render Web Service** | Cuenta del equipo | Dashboard Render | Hospeda el contenedor de la aplicación |
| **Neon PostgreSQL** | `neondb_owner` | Dashboard Neon | Almacena las tablas de la base de datos |
| **Rol Administrador** | `admin` | Variable `ADMIN_PASSWORD` en Render | Acceso total a crear, editar y eliminar |
| **Rol Operador / Voluntario** | `operador` (o `entrenador`) | Variable `ENTRENADOR_PASSWORD` | Acceso a registro y consulta de listas |

---

## Módulo 4. Plantillas de Correo Formal de Entrega (Handoff)

### 4.1 Correo 1: Traspaso Formal a la Institución sin Fines de Lucro
**Asunto:** Entrega Oficial del Sistema Web de Gestión — Proyecto Universitario URL
**Para:** [Correo de la Dirección de la Entidad]
**De:** [Nombre del Equipo de Estudiantes] · Profesorado en TIC, Universidad Rafael Landívar

> Estimadas autoridades de [Nombre de la Institución]:
>
> Reciban un cordial saludo del equipo de estudiantes del Profesorado con Especialidad en TIC de la Universidad Rafael Landívar.
>
> A través de la presente, nos complace hacer entrega formal, **llave en mano**, del sistema web diseñado para apoyar la valiosa labor que ustedes realizan en favor de nuestra comunidad.
>
> **Datos de Acceso al Sistema:**
> - **Dirección Web (URL pública):** `https://[tu-app].onrender.com`
> - **Manual de Usuario:** Adjunto en formato PDF con el paso a paso ilustrado para el personal y voluntarios.
> - **Credenciales de Acceso Inicial:** Enviadas por canal privado / adjunto confidencial.
>
> La aplicación se encuentra alojada en servidores seguros en la nube con conexión cifrada (HTTPS) y base de datos respaldada. Para cualquier consulta técnica durante su implementación, quedamos a su entera disposición.
>
> Agradecemos profundamente habernos permitido colaborar con su institución durante este semestre.
>
> Atentamente,
> **[Nombres de los Integrantes del Equipo]**
> Estudiantes de Programación I — Profesorado en TIC
> Universidad Rafael Landívar

---

### 4.2 Correo 2: Entrega Académica Formal al Docente del Curso
**Asunto:** [PROYECTO FINAL] Entrega Llave en Mano — [Nombre de la Entidad] — Carné [Números]
**Para:** Prof. Emilio Domínguez · Introducción al Desarrollo Web con Java
**De:** [Nombre del Estudiante / Equipo]

> Estimado Profesor Domínguez:
>
> Hacemos entrega de nuestro proyecto final **llave en mano** para el curso Programación I, cumpliendo con todos los requerimientos arquitectónicos y funcionales de las 18 semanas de trabajo:
>
> 1. **URL de la Aplicación en Producción:** `https://[tu-app].onrender.com`
>    *(Nota: Realizamos el ping preventivo para asegurar respuesta inmediata sin demoras de arranque en frío).*
> 2. **Repositorio de GitHub (rama main):** `https://github.com/[usuario]/[repositorio]`
> 3. **Video A (Pitch Ejecutivo de 3 min):** `https://youtu.be/[enlace-video-A]`
> 4. **Video B (Demo Técnica y Arquitectura de 5 min):** `https://youtu.be/[enlace-video-B]`
> 5. **Credenciales de Prueba:**
>    - Administrador: usuario `admin` / clave `[clave-configurada]`
>    - Rol Estándar: usuario `operador` / clave `[clave-configurada]`
> 6. **Documentación:** El repositorio cuenta con el `README.md` técnico completo, diagrama de paquetes, manual de despliegue local y lista de variables de entorno de Render.
>
> Quedamos atentos a la sesión sincrónica de defensa final.
>
> Respetuosamente,
> **[Nombre y Carné de los Integrantes]**
---

## Módulo 5. Checklist de Certificación Llave en Mano (20 Puntos)

Antes de considerar entregado el sistema, el equipo debe verificar afirmativamente cada uno de estos 20 puntos:

### A. Despliegue y Plataforma en la Nube (1–4)
- [ ] **1. URL Pública:** La aplicación responde con código 200 en `https://...onrender.com`.
- [ ] **2. HTTPS Automático:** El candado de seguridad SSL de Render está activo y sin advertencias.
- [ ] **3. Neon Persistente:** La base de datos guarda registros que sobreviven a reinicios del servicio.
- [ ] **4. Ping Preventivo:** Se probó el calentamiento para evitar el cold start de 50s previo a la demo.

### B. Arquitectura y Código Fuente (5–8)
- [ ] **5. Árbol Canónico:** Todos los archivos Java residen dentro del paquete base (`gt.edu.url...`).
- [ ] **6. Separación en Capas:** Entidad (`model`), Persistencia (`repository`), Negocio (`service`), Controlador (`controller`).
- [ ] **7. Dockerfile Multietapa:** Maven compila con `-DskipTests` y empaqueta en JRE 17 ligero.
- [ ] **8. `.gitignore` & `.dockerignore`:** No se subieron carpetas `target/`, `.env` ni binarios pesados a GitHub.

### C. Funcionalidad y Experiencia de Usuario (9–12)
- [ ] **9. CRUD Operativo:** Es posible crear nuevos registros y visualizarlos en la tabla dinámica.
- [ ] **10. Bean Validation:** Alertas en rojo visibles cuando un campo obligatorio está vacío.
- [ ] **11. Retención de Inputs:** El formulario no borra los datos válidos al cometer una equivocación.
- [ ] **12. POST-Redirect-GET:** Presionar F5 tras guardar no reenvía el formulario ni duplica datos.

### D. Seguridad y Control de Acceso (13–16)
- [ ] **13. Login con Spring Security:** Formulario de autenticación obligatorio para rutas protegidas.
- [ ] **14. Contraseñas Cifradas:** Las claves de usuario se almacenan con hash BCrypt en la base de datos.
- [ ] **15. Roles Diferenciados:** Acciones destructivas (eliminar) restringidas al rol `ADMIN`.
- [ ] **16. Higiene de Secretos:** Cero contraseñas expuestas en texto plano dentro del repositorio de GitHub.

### E. Entregables y Documentación (17–20)
- [ ] **17. README Profesional:** Documentación técnica con árbol, manual de instalación y variables.
- [ ] **18. Manual de Usuario:** Guía clara paso a paso orientada a la entidad sin fines de lucro.
- [ ] **19. Video A (Pitch de 3 min):** Grabado en 1080p explicando el problema y la solución social.
- [ ] **20. Video B (Demo Técnica de 5 min):** Demostración del código, arquitectura y funcionamiento en vivo.
