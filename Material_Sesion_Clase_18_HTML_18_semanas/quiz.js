/* Motor de quiz compartido — v2, introducido en Semana 6 (18 semanas).
   A partir de esta semana, Presaberes y Quiz Final viven en UNA sola
   página (quiz.html) con un <select> que elige el tipo. Cada semana
   define su propio banco de preguntas en un array global QUESTION_BANK
   (en el <script> de quiz.html, ANTES de cargar este archivo) con esta
   forma:

   var QUESTION_BANK = [
     {
       level: 'presaberes' | 'final' | 'ambas',
       pregunta: '...',
       opciones: [{v:'a', t:'...'}, {v:'b', t:'...'}, {v:'c', t:'...'}],
       correcta: 'b',
       fbOk: 'mensaje si acierta',
       fbKo: 'mensaje si falla'
     }, ...
   ];
   var QUIZ_CONFIG = { presaberesCount: 8, finalCount: 10 };

   'ambas' = pregunta válida para los dos modos (asegura que Presaberes y
   Final no diverjan por completo en los conceptos que tocan). Requiere
   en el HTML: <select id="quizType">, <div id="quizContainer">,
   <div id="scoreBanner">, <input id="studentName">. */
(function () {
  function shuffle(arr) {
    var a = arr.slice();
    for (var i = a.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var t = a[i]; a[i] = a[j]; a[j] = t;
    }
    return a;
  }

  function poolFor(type) {
    var bank = window.QUESTION_BANK || [];
    return bank.filter(function (q) { return q.level === type || q.level === 'ambas'; });
  }

  function countFor(type) {
    var cfg = window.QUIZ_CONFIG || { presaberesCount: 8, finalCount: 10 };
    return type === 'presaberes' ? cfg.presaberesCount : cfg.finalCount;
  }

  function renderQuestion(q, idx) {
    var wrap = document.createElement('div');
    wrap.className = 'quiz-q';
    wrap.setAttribute('data-answer', q.correcta);

    var title = document.createElement('div');
    title.className = 'fw-semibold mb-2';
    title.innerHTML = (idx + 1) + ') ' + q.pregunta;
    wrap.appendChild(title);

    q.opciones.forEach(function (op) {
      var line = document.createElement('div');
      line.className = 'form-check';
      var inputId = 'q' + idx + '_' + op.v;
      line.innerHTML =
        '<input class="form-check-input" type="radio" name="q' + idx + '" id="' + inputId + '" value="' + op.v + '" />' +
        '<label class="form-check-label" for="' + inputId + '">' + op.t + '</label>';
      wrap.appendChild(line);
    });

    var ok = document.createElement('div');
    ok.className = 'quiz-feedback ok';
    ok.innerHTML = '✅ ' + q.fbOk;
    wrap.appendChild(ok);

    var ko = document.createElement('div');
    ko.className = 'quiz-feedback ko';
    ko.innerHTML = q.fbKo;
    wrap.appendChild(ko);

    return wrap;
  }

  window.renderQuiz = function () {
    var type = document.getElementById('quizType').value;
    var pool = shuffle(poolFor(type));
    var n = Math.min(countFor(type), pool.length);
    var chosen = pool.slice(0, n);

    var container = document.getElementById('quizContainer');
    container.innerHTML = '';
    chosen.forEach(function (q, i) { container.appendChild(renderQuestion(q, i)); });

    var banner = document.getElementById('scoreBanner');
    banner.className = 'score-banner';
    banner.innerHTML = '';

    var label = document.getElementById('quizTypeLabel');
    if (label) {
      label.textContent = type === 'presaberes'
        ? 'Presaberes · ' + n + ' preguntas · no cuenta para nota'
        : 'Final de clase · ' + n + ' preguntas · evidencia de la Actividad en clase';
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  window.regenerateQuiz = function () {
    window.renderQuiz();
  };

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
    var pct = total > 0 ? Math.round((correct / total) * 100) : 0;
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
