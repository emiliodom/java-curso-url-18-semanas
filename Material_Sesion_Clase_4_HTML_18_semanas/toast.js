/* Motor de toasts compartido — introducido en Semana 3.
   Uso: showToast('mensaje', 'ok' | 'warn' | 'bad' | 'info', ms?)
   Requiere un <div class="toast-stack" id="toastStack"></div> en la página
   y los estilos .toast-* de styles.css. Copiar verbatim a semanas futuras
   que necesiten feedback instantáneo (ej. challenges de drag & drop). */
(function () {
  var ICONS = { ok: '✅', warn: '⚠️', bad: '❌', info: 'ℹ️' };

  window.showToast = function (message, type, ms) {
    type = type || 'info';
    ms = ms || 4000;
    var stack = document.getElementById('toastStack');
    if (!stack) return;

    var item = document.createElement('div');
    item.className = 'toast-item ' + type;
    item.innerHTML =
      '<span class="toast-icon">' + (ICONS[type] || ICONS.info) + '</span>' +
      '<span class="toast-text"></span>';
    item.querySelector('.toast-text').textContent = message;
    stack.appendChild(item);

    setTimeout(function () {
      item.classList.add('leaving');
      setTimeout(function () { item.remove(); }, 200);
    }, ms);
  };
})();
