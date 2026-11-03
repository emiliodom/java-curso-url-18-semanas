(function () {
  var apertura = new Date(2026, 10, 14, 7, 0, 0).getTime();
  var overlay = null;
  var intervalo = null;

  if (Date.now() >= apertura) return;

  var estilos = document.createElement('style');
  estilos.textContent =
    '#bloqueo-semana18{position:fixed;inset:0;z-index:3000;display:grid;place-items:center;padding:1.25rem;background:rgba(15,23,42,.78);backdrop-filter:blur(7px)}' +
    '#bloqueo-semana18 .bloqueo-tarjeta{width:min(100%,520px);padding:2rem;border:1px solid #64748b;border-radius:1rem;background:#1e293b;color:#f8fafc;box-shadow:0 1.5rem 4rem rgba(0,0,0,.4);text-align:center}' +
    '#bloqueo-semana18 h2{margin:0 0 1rem;font-size:1.5rem}' +
    '#bloqueo-semana18 p{line-height:1.6}' +
    '#bloqueo-semana18 .bloqueo-tiempo{margin:1rem 0;font-size:1.7rem;font-weight:700;font-variant-numeric:tabular-nums}' +
    '#bloqueo-semana18 a{display:inline-block;margin-top:.5rem;padding:.65rem 1rem;border-radius:.5rem;background:#f8fafc;color:#0f172a;font-weight:700;text-decoration:none}' +
    '@media(prefers-reduced-motion:no-preference){#bloqueo-semana18 .bloqueo-tarjeta{animation:entrada-bloqueo18 .2s ease-out}}' +
    '@keyframes entrada-bloqueo18{from{opacity:0;transform:translateY(8px)}to{opacity:1;transform:translateY(0)}}';
  document.head.appendChild(estilos);

  overlay = document.createElement('div');
  overlay.id = 'bloqueo-semana18';
  overlay.setAttribute('role', 'dialog');
  overlay.setAttribute('aria-modal', 'true');
  overlay.setAttribute('aria-labelledby', 'bloqueo-titulo18');

  var tarjeta = document.createElement('div');
  tarjeta.className = 'bloqueo-tarjeta';

  var titulo = document.createElement('h2');
  titulo.id = 'bloqueo-titulo18';
  titulo.textContent = 'El material de la Semana 18 aún no está disponible';

  var mensaje = document.createElement('p');
  mensaje.textContent = 'Las actividades de la Semana 18 se abrirán el sábado 14 de noviembre de 2026 a las 7:00 a. m. (hora local de tu dispositivo).';

  var cuenta = document.createElement('p');
  cuenta.className = 'bloqueo-tiempo';
  cuenta.setAttribute('aria-live', 'off');
  cuenta.setAttribute('aria-label', 'Tiempo restante para abrir el material');

  var nota = document.createElement('p');
  nota.textContent = 'Mientras tanto, solo está disponible la información de entregables.';

  var enlace = document.createElement('a');
  enlace.href = '../Material_Sesion_Clase_17_HTML_18_semanas/entregables.html';
  enlace.textContent = 'Consultar información de Entregables';

  tarjeta.appendChild(titulo);
  tarjeta.appendChild(mensaje);
  tarjeta.appendChild(cuenta);
  tarjeta.appendChild(nota);
  tarjeta.appendChild(enlace);
  overlay.appendChild(tarjeta);
  document.body.appendChild(overlay);

  Array.prototype.forEach.call(document.body.children, function (elemento) {
    if (elemento !== overlay) elemento.inert = true;
  });

  actualizarCuenta();
  intervalo = window.setInterval(actualizarCuenta, 1000);
  enlace.focus();

  function actualizarCuenta() {
    var restante = apertura - Date.now();
    if (restante <= 0) {
      window.clearInterval(intervalo);
      overlay.remove();
      Array.prototype.forEach.call(document.body.children, function (elemento) {
        elemento.inert = false;
      });
      return;
    }

    var segundos = Math.floor(restante / 1000);
    var dias = Math.floor(segundos / 86400);
    var horas = Math.floor((segundos % 86400) / 3600);
    var minutos = Math.floor((segundos % 3600) / 60);
    var segundosFinales = segundos % 60;
    cuenta.textContent =
      String(dias).padStart(2, '0') + ' días ' +
      String(horas).padStart(2, '0') + ':' +
      String(minutos).padStart(2, '0') + ':' +
      String(segundosFinales).padStart(2, '0');
  }
})();
