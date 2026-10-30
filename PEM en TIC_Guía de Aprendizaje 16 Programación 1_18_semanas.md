+--------------------------------------------------------------------------+
| ### Universidad Rafael Landívar                                          |
|                                                                          |
| Facultad de Humanidades                                                  |
|                                                                          |
| Departamento de Educación                                                |
|                                                                          |
| +----------------------------+-----------------------------------------+ |
| | Profesorados con           | Nombre del curso: Introducción al       | |
| | Especialidad en TIC        | Desarrollo Web con Java                 | |
| |                            |                                         | |
| |                            | Ciclo y módulo: Cuarto ciclo            | |
| +============================+=========================================+ |
+--------------------------------------------------------------------------+

**GUÍA DE APRENDIZAJE AUTÓNOMO No. 16 — Formato 18 semanas**

![Transformación Digital -- Universidad Rafael
Landívar](media/image1.png){width="3.2336996937882763in"
height="1.3760411198600175in"}![gráficos de color
degradado](media/image2.png){width="8.268055555555556in"
height="1.5618055555555554in"}

![Libro abierto](media/image4.png){width="0.5729166666666666in"
height="0.5729166666666666in"}

**PARTE INTRODUCTORIA**

***"Probar no es buscar que el sistema falle por azar: es certificar con rigor que cada capa cumple su contrato antes de que el usuario final lo descubra."***

**Fecha de la sesión:** 31 de octubre de 2026 · **Entrega de esta guía:**
antes de la Sesión 17 (7 de noviembre de 2026) · **Valor:** 1 punto.
*Esta guía consolida la calidad técnica y la estabilidad del proyecto previa a la ★ Entrega Parcial 4 (proyecto completo) de la Semana 17.*

| **Aprendizajes esperados** | **Productos que evidencian el aprendizaje** |
|:---|:---|
| **Comprende la arquitectura del proyecto y sus archivos clave.** | *Identificación y mapeo preciso de Modelo, Repositorio, Servicio, Controlador y Vistas.* |
| **Diseña y ejecuta casos de prueba funcionales (QA).** | *Matriz de 5 a 6 casos de prueba ejecutados sobre la aplicación desplegada en Render.* |
| **Aplica buenas prácticas de mantenimiento y despliegue continuo.** | *Evidencia de redeploy automático exitoso en Render disparado mediante `git push` a GitHub.* |
| **Elabora documentación técnica mínima del sistema.** | *README actualizado con descripción del árbol, puertos, variables de entorno y credenciales seguras.* |

**Habilidades y destrezas de la semana (guía):** Aseguramiento de calidad sistemático · Diagnóstico de errores a través de capas · Gestión del ciclo de despliegue continuo (CI/CD básico).

**Valores y actitudes:** Rigurosidad técnica · Disciplina en el mantenimiento · Honestidad en el reporte de incidencias.

**PARTE DE DESARROLLO — Reporte de QA y Mantenimiento** (`Material_Sesion_Clase_16_HTML_18_semanas/proyecto.html`)

| Parte | Peso | Qué se entrega |
|:---|:---|:---|
| A. Radiografía Arquitectónica del Proyecto | 20 % | Mapeo de los archivos clave propios: nombre de entidad, repositorio, controlador, servicio y vistas Thymeleaf con sus rutas exactas. |
| B. Matriz de Pruebas Funcionales (QA) | 40 % | Ejecución de al menos 5 casos de prueba funcionales detallados (carga de formulario, validación de errores, persistencia en Neon, protección de rutas por rol y renderizado de lista) con precondiciones, pasos, resultado obtenido y estado (Pasa / Falla). |
| C. Evidencia de Redeploy Automático en Render | 25 % | Registro del ciclo de mantenimiento: descripción del cambio realizado en el código local, commit realizado, hash o captura del push en GitHub y captura o transcripción del log de deploy exitoso en Render. |
| D. Documentación Técnica Mínima | 10 % | Enlace al repositorio GitHub con `README.md` actualizado con instrucciones de arranque local, variables de entorno requeridas en producción y tabla de roles. |
| E. Reflexión y Plan hacia la Entrega Parcial 4 | 5 % | Análisis de las fallas detectadas durante las pruebas, cómo se resolvieron y checklist de preparación para la demo de la Semana 17. |

**Instrucciones de entrega:** completar la sección calificable de `proyecto.html` (se guarda en `localStorage`), pulsar «Exportar a PDF» y subir `Guia16_TuNombre.pdf` al aula virtual junto con los PDF del Quiz (modo Final) y del Challenge. Verificar que los enlaces a Render y GitHub sean públicos y funcionales.

**Rúbrica:** Excelente (100%) = Matriz de pruebas rigurosa con datos reales, evidencia indiscutible de redeploy en Render con log y documentación técnica clara; Satisfactorio (75%) = Pruebas completas con detalles menores omitidos o captura parcial del log de Render; Insuficiente (<60%) = Casos de prueba genéricos sin datos propios, sin evidencia de redeploy o enlaces rotos.

