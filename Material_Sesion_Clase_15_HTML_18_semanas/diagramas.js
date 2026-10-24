/* Motor de diagramas compartido — introducido en Semana 14.
   Dibuja con Mermaid (cargado por CDN antes de este archivo) todos los
   bloques <div class="mermaid">…</div> de la página, con un tema único
   para todo el curso (colores de styles.css).

   Problema que resuelve: Mermaid mide el texto para dibujar y, si el
   diagrama está dentro de una pestaña oculta (display:none), sale vacío o
   aplastado. Por eso, al cargar, se muestran TODAS las pestañas fuera de
   la pantalla un instante, se dibuja todo y se vuelven a ocultar. Así los
   diagramas también salen bien al Exportar a PDF.

   Reglas para semanas futuras:
   - Cargar en este orden: mermaid.min.js (CDN, versión fija) → diagramas.js.
   - No poner diagramas dentro de <details> ni de acordeones colapsados.
   - Envolver cada diagrama en <figure class="mmd-figure"> con <figcaption>. */
(function () {
  var estilo = document.createElement('style');
  estilo.textContent =
    '.mmd-dibujando .tab-pane:not(.active){display:block!important;position:absolute!important;' +
    'left:-20000px!important;top:0;width:960px;opacity:1!important;}';
  document.head.appendChild(estilo);

  function dibujar() {
    if (!window.mermaid) {
      document.querySelectorAll('.mermaid').forEach(function (el) {
        el.style.color = '#334155';
        el.style.fontSize = '0.8rem';
        el.style.whiteSpace = 'pre';
        el.insertAdjacentHTML('beforebegin',
          '<div class="small text-danger mb-1">No se pudo cargar la librería de diagramas (¿sin internet?). Se muestra el texto del diagrama.</div>');
      });
      return;
    }
    window.mermaid.initialize({
      startOnLoad: false,
      securityLevel: 'strict',
      theme: 'base',
      fontFamily: 'system-ui, -apple-system, "Segoe UI", Roboto, sans-serif',
      themeVariables: {
        primaryColor: '#eff6ff',
        primaryBorderColor: '#3b82f6',
        primaryTextColor: '#0f172a',
        secondaryColor: '#f5f3ff',
        tertiaryColor: '#f0fdf4',
        lineColor: '#64748b',
        fontSize: '15px',
        clusterBkg: '#f8fafc',
        clusterBorder: '#cbd5e1',
        noteBkgColor: '#fef3c7',
        noteBorderColor: '#f59e0b',
        actorBkg: '#eff6ff',
        actorBorder: '#3b82f6',
        signalColor: '#334155',
        git0: '#0d6efd',
        git1: '#22c55e',
        git2: '#6610f2',
        gitBranchLabel0: '#ffffff',
        gitBranchLabel1: '#ffffff'
      },
      flowchart: { curve: 'basis', htmlLabels: true, padding: 12 },
      sequence: { mirrorActors: false, showSequenceNumbers: true, actorMargin: 40 },
      gitGraph: { mainBranchName: 'main', showCommitLabel: true }
    });

    document.body.classList.add('mmd-dibujando');
    window.mermaid.run({ querySelector: '.mermaid' })
      .catch(function (e) { console.error('Mermaid:', e); })
      .finally(function () { document.body.classList.remove('mmd-dibujando'); });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', dibujar);
  } else {
    dibujar();
  }
})();
