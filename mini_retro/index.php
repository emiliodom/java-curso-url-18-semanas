<!doctype html>
<html lang="es">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <meta name="description" content="Retrospectiva guiada para equipos de proyecto: recopila datos, descubre patrones, acuerda acciones y exporta un informe.">
  <title>Retro de equipo | Programación I</title>
  <link rel="stylesheet" href="styles.css">
  <script src="app.js" defer></script>
</head>
<body>
  <header class="site-header">
    <a class="brand" href="../index.html" aria-label="Volver al portal del curso">
      <span class="brand-mark" aria-hidden="true">↻</span>
      <span>Retro de equipo<small>Laboratorio de aprendizaje · Programación I</small></span>
    </a>
    <nav class="header-actions" aria-label="Recursos">
      <a class="header-link" href="GUIA_RETROSPECTIVA.html">Guía para docente y equipos</a>
      <a class="header-link" href="../Material_Sesion_Clase_17_HTML_18_semanas/index.html">Material Semana 17</a>
    </nav>
  </header>

  <main class="shell">
    <section class="intro">
      <p class="eyebrow">Herramienta autoguiada · 30 minutos</p>
      <h1>Mejorar el proceso, juntos.</h1>
      <p class="intro-copy">Una retrospectiva completa para que cada equipo reconozca lo que funcionó, entienda los obstáculos y salga con acciones concretas. No se necesita una persona facilitadora.</p>
      <div class="principle">
        <span aria-hidden="true">🛡️</span>
        <p><strong>Acuerdo de seguridad:</strong> partimos de que cada persona hizo lo mejor que pudo con lo que sabía y tenía en ese momento. Hablamos del proceso y de los hechos, no culpamos a personas.</p>
      </div>
    </section>

    <div id="globalMessage" class="message" role="status" aria-live="polite" hidden></div>

    <section id="welcome" class="welcome card">
      <div>
        <p class="eyebrow">Tu equipo conduce la sesión</p>
        <h2>Empiecen cuando estén listos</h2>
        <p>La información se guarda en este navegador y en el servidor PHP. El enlace de continuación funciona como llave compartida: no lo publiques. No escriban contraseñas ni datos sensibles.</p>
      </div>
      <button id="startNew" class="button button-primary" type="button">Crear retrospectiva</button>
    </section>

    <section id="workspace" hidden>
      <div class="session-bar card">
        <div class="session-identity">
          <p class="eyebrow">Sesión del equipo</p>
          <h2 id="teamTitle">Retrospectiva</h2>
          <p id="projectSubtitle" class="muted"></p>
          <button id="copyLink" class="text-button" type="button">Copiar enlace privado para continuar</button>
        </div>
        <div class="timer" aria-label="Cronómetro de la sesión">
          <span class="timer-label">Tiempo en sesión · objetivo 30 min</span>
          <strong id="timerDisplay" aria-live="off">00:00</strong>
          <button id="timerToggle" class="button button-small" type="button">Iniciar cronómetro</button>
        </div>
        <div id="saveStatus" class="save-status" role="status" aria-live="polite">Sin cambios</div>
      </div>

      <nav class="step-nav card" aria-label="Etapas de la retrospectiva">
        <ol id="stepNav"></ol>
      </nav>

      <section id="lessonPanel" class="lesson-panel" aria-live="polite"></section>

      <div class="lesson-controls">
        <button id="previousStep" class="button button-secondary" type="button">← Anterior</button>
        <span id="stepHint" class="muted" aria-live="polite"></span>
        <button id="nextStep" class="button button-primary" type="button">Siguiente etapa →</button>
      </div>

      <section id="report" class="report card" hidden></section>
      <div class="end-controls">
        <button id="deleteSession" class="text-button text-danger" type="button">Borrar esta retrospectiva</button>
      </div>
    </section>
  </main>

  <footer class="site-footer">
    <p>Programación I · Herramienta de reflexión colaborativa</p>
    <p>Exportar abre el diálogo de impresión del navegador; seleccionen “Guardar como PDF”.</p>
  </footer>
</body>
</html>
