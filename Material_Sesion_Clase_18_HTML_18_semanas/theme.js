/* Selector de tema claro/oscuro (Bootstrap 5.3 data-bs-theme).
   Cargar en <head> (sin defer) para evitar parpadeo. Guarda la preferencia
   en localStorage; por defecto sigue la preferencia del sistema.
   Inyecta el botón al final de .navbar-nav. */
(function () {
  var KEY = 'curso-theme';
  var root = document.documentElement;
  function stored() { try { return localStorage.getItem(KEY); } catch (e) { return null; } }
  function initial() {
    return stored() || (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
  }
  function apply(t) {
    root.setAttribute('data-bs-theme', t);
    var b = document.getElementById('themeToggle');
    if (b) {
      b.textContent = t === 'dark' ? '☀️ Claro' : '🌙 Oscuro';
      b.setAttribute('aria-label', t === 'dark' ? 'Cambiar a tema claro' : 'Cambiar a tema oscuro');
    }
  }
  apply(initial());
  document.addEventListener('DOMContentLoaded', function () {
    var nav = document.querySelector('.navbar-nav');
    if (nav) {
      var li = document.createElement('li');
      li.className = 'nav-item ms-lg-2 no-print';
      li.innerHTML = '<button type="button" id="themeToggle" class="btn btn-outline-secondary btn-sm"></button>';
      nav.appendChild(li);
      li.firstChild.addEventListener('click', function () {
        var t = root.getAttribute('data-bs-theme') === 'dark' ? 'light' : 'dark';
        try { localStorage.setItem(KEY, t); } catch (e) {}
        apply(t);
      });
    }
    apply(root.getAttribute('data-bs-theme'));
  });
})();
