/* Motor de quiz compartido — Semana 2 (18 semanas)
   Cada pregunta: <div class="quiz-q" data-answer="b"> con radios name="qN" y
   divs .quiz-feedback.ok / .quiz-feedback.ko  */
(function () {
  window.gradeQuiz = function () {
    var questions = document.querySelectorAll('.quiz-q');
    var total = questions.length;
    var correct = 0;
    var unanswered = 0;

    questions.forEach(function (q) {
      var answer = q.getAttribute('data-answer');
      var chosen = q.querySelector('input[type="radio"]:checked');
      q.classList.remove('correct', 'incorrect');
      if (!chosen) {
        unanswered++;
        q.classList.add('incorrect');
        return;
      }
      if (chosen.value === answer) {
        correct++;
        q.classList.add('correct');
      } else {
        q.classList.add('incorrect');
      }
    });

    var banner = document.getElementById('scoreBanner');
    var pct = Math.round((correct / total) * 100);
    var msg;
    if (pct === 100) {
      msg = '¡Excelente! Dominas el tema de hoy.';
    } else if (pct >= 80) {
      msg = '¡Muy bien! Revisa la retroalimentación de las que fallaste.';
    } else if (pct >= 60) {
      msg = 'Vas en camino. Repasa el cheat sheet y vuelve a intentar.';
    } else {
      msg = 'No pasa nada: el error también enseña. Repasa la guía y reintenta.';
    }

    banner.className = 'score-banner show alert ' + (pct >= 80 ? 'alert-success' : pct >= 60 ? 'alert-warning' : 'alert-danger');
    banner.innerHTML =
      '<div class="h5 mb-1">Resultado: ' + correct + ' / ' + total + ' (' + pct + '%)</div>' +
      '<div>' + msg + (unanswered > 0 ? ' · Sin responder: ' + unanswered : '') + '</div>' +
      '<div class="small mt-1">Fecha: ' + new Date().toLocaleString('es-GT') + '</div>';
    banner.scrollIntoView({ behavior: 'smooth', block: 'center' });
  };

  window.resetQuiz = function () {
    document.querySelectorAll('.quiz-q').forEach(function (q) {
      q.classList.remove('correct', 'incorrect');
      q.querySelectorAll('input[type="radio"]').forEach(function (r) { r.checked = false; });
    });
    var banner = document.getElementById('scoreBanner');
    banner.className = 'score-banner';
    banner.innerHTML = '';
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  window.exportQuizPdf = function () {
    var name = (document.getElementById('studentName') || {}).value || '';
    var banner = document.getElementById('scoreBanner');
    if (!banner.classList.contains('show')) {
      alert('Primero pulsa "Calificar" para que tu resultado aparezca en el PDF.');
      return;
    }
    if (!name.trim()) {
      alert('Escribe tu nombre en la casilla "Nombre del estudiante" para identificar tu PDF.');
      document.getElementById('studentName').focus();
      return;
    }
    window.print();
  };
})();
