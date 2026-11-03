(function () {
  var apertura = new Date(2026, 10, 7, 7, 0, 0).getTime();
  var archivoActual = window.location.pathname.split('/').pop().toLowerCase();
  var paginaPermitida = archivoActual === 'entregables.html';
  var modal = null;
  var intervalo = null;

  if (Date.now() >= apertura) return;

  function mostrarBloqueo() {
    if (modal) return;

    var estilos = document.createElement('style');
    estilos.textContent =
      '#bloqueo-semana17{position:fixed;inset:0;z-index:3000;display:grid;place-items:center;padding:1.25rem;background:rgba(15,23,42,.78);backdrop-filter:blur(7px)}' +
      '#bloqueo-semana17 .bloqueo-tarjeta{width:min(100%,520px);padding:2rem;border:1px solid #64748b;border-radius:1rem;background:#1e293b;color:#f8fafc;box-shadow:0 1.5rem 4rem rgba(0,0,0,.4);text-align:center}' +
      '#bloqueo-semana17 h2{margin:0 0 1rem;font-size:1.5rem}' +
      '#bloqueo-semana17 p{line-height:1.6}' +
      '#bloqueo-semana17 .bloqueo-tiempo{margin:1rem 0;font-size:1.7rem;font-weight:700;font-variant-numeric:tabular-nums}' +
      '#bloqueo-semana17 a,#bloqueo-semana17 button{display:inline-block;margin-top:.5rem;padding:.65rem 1rem;border:0;border-radius:.5rem;background:#f8fafc;color:#0f172a;font:inherit;font-weight:700;text-decoration:none;cursor:pointer}' +
      '@media(prefers-reduced-motion:no-preference){#bloqueo-semana17 .bloqueo-tarjeta{animation:entrada-bloqueo .2s ease-out}}' +
      '@keyframes entrada-bloqueo{from{opacity:0;transform:translateY(8px)}to{opacity:1;transform:translateY(0)}}';
    document.head.appendChild(estilos);

    modal = document.createElement('div');
    modal.id = 'bloqueo-semana17';
    modal.setAttribute('role', 'dialog');
    modal.setAttribute('aria-modal', 'true');
    modal.setAttribute('aria-labelledby', 'bloqueo-titulo');

    var tarjeta = document.createElement('div');
    tarjeta.className = 'bloqueo-tarjeta';

    var titulo = document.createElement('h2');
    titulo.id = 'bloqueo-titulo';
    titulo.textContent = 'Este material todavía no está disponible';

    var mensaje = document.createElement('p');
    mensaje.textContent = 'Las demás secciones de la Semana 17 se abrirán el sábado 7 de noviembre de 2026 a las 7:00 a. m. (hora local de tu dispositivo).';

    var cuenta = document.createElement('p');
    cuenta.className = 'bloqueo-tiempo';
    cuenta.setAttribute('aria-live', 'off');
    cuenta.setAttribute('aria-label', 'Tiempo restante para abrir las secciones');

    var permanencia = document.createElement('p');
    permanencia.textContent = 'Al abrirse, las secciones permanecerán disponibles y no se volverán a cerrar.';

    tarjeta.appendChild(titulo);
    tarjeta.appendChild(mensaje);
    tarjeta.appendChild(cuenta);
    tarjeta.appendChild(permanencia);

    if (paginaPermitida) {
      var continuar = document.createElement('button');
      continuar.type = 'button';
      continuar.textContent = 'Seguir en Entregables';
      continuar.addEventListener('click', quitarBloqueo);
      tarjeta.appendChild(continuar);
    } else {
      var volver = document.createElement('a');
      volver.href = 'entregables.html';
      volver.textContent = 'Ir a Entregables';
      tarjeta.appendChild(volver);
    }

    modal.appendChild(tarjeta);
    document.body.appendChild(modal);
    Array.prototype.forEach.call(document.body.children, function (elemento) {
      if (elemento !== modal) {
        elemento.setAttribute('data-bloqueado-semana17', '');
        elemento.inert = true;
      }
    });

    actualizarCuenta();
    intervalo = window.setInterval(actualizarCuenta, 1000);
    var control = tarjeta.querySelector('button, a');
    if (control) control.focus();
  }

  function quitarBloqueo() {
    if (intervalo) window.clearInterval(intervalo);
    intervalo = null;
    if (modal) modal.remove();
    modal = null;
    Array.prototype.forEach.call(document.querySelectorAll('[data-bloqueado-semana17]'), function (elemento) {
      elemento.inert = false;
      elemento.removeAttribute('data-bloqueado-semana17');
    });
  }

  function actualizarCuenta() {
    var restante = apertura - Date.now();
    if (restante <= 0) {
      quitarBloqueo();
      return;
    }

    var segundos = Math.floor(restante / 1000);
    var dias = Math.floor(segundos / 86400);
    var horas = Math.floor((segundos % 86400) / 3600);
    var minutos = Math.floor((segundos % 3600) / 60);
    var segundosFinales = segundos % 60;
    var cuenta = modal.querySelector('.bloqueo-tiempo');
    cuenta.textContent =
      String(dias).padStart(2, '0') + ' días ' +
      String(horas).padStart(2, '0') + ':' +
      String(minutos).padStart(2, '0') + ':' +
      String(segundosFinales).padStart(2, '0');
  }

  if (!paginaPermitida) {
    mostrarBloqueo();
    return;
  }

  Array.prototype.forEach.call(document.querySelectorAll('.navbar a[href], main a[href]'), function (enlace) {
    var url = new URL(enlace.href, window.location.href);
    var estaEnSemana17 = url.pathname.toLowerCase().indexOf('/material_sesion_clase_17_html_18_semanas/') !== -1;
    var esEntregables = url.pathname.toLowerCase().endsWith('/entregables.html');
    var enlaceDeNavegacion = enlace.closest('.navbar') !== null;

    if ((enlaceDeNavegacion || estaEnSemana17) && !esEntregables) {
      enlace.addEventListener('click', function (evento) {
        if (Date.now() < apertura) {
          evento.preventDefault();
          mostrarBloqueo();
        }
      });
    }
  });
})();
