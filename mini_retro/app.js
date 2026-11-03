(function () {
  'use strict';

  var STORAGE_KEY = 'url_mini_retro_v1';
  var API_URL = 'api.php';
  var CATEGORIES = [
    { id: 'keep', title: 'Seguir haciendo', icon: '+' },
    { id: 'change', title: 'Probar o cambiar', icon: '↗' },
    { id: 'questions', title: 'Preguntas', icon: '?' }
  ];
  var STEPS = [
    { title: 'Preparar', time: 3 },
    { title: 'Reunir datos', time: 8 },
    { title: 'Encontrar patrones', time: 7 },
    { title: 'Acordar acciones', time: 8 },
    { title: 'Cerrar', time: 4 },
    { title: 'Acta', time: 0 }
  ];
  var panel = document.getElementById('lessonPanel');
  var state = null;
  var sessionToken = '';
  var currentStep = 0;
  var saveTimer = null;
  var remoteSaveChain = Promise.resolve();
  var activeDragId = '';
  var pointerDragId = '';
  var pointerStart = null;
  var timerInterval = null;
  var lastTimerSave = 0;

  function makeDefaultState() {
    var today = new Date();
    var date = new Date(today.getTime() - today.getTimezoneOffset() * 60000).toISOString().slice(0, 10);
    return {
      version: 1,
      teamName: '',
      projectName: '',
      reviewPeriod: '',
      meetingDate: date,
      norms: { process: false, equalVoice: false, confidentiality: false },
      cards: [],
      themes: [
        { id: makeId(), title: 'Fortalezas a repetir' },
        { id: makeId(), title: 'Fricciones del proceso' },
        { id: makeId(), title: 'Preguntas abiertas' }
      ],
      insight: '',
      votes: {},
      actions: [],
      confidence: 0,
      takeaway: '',
      elapsedSeconds: 0,
      timerRunning: false
    };
  }

  function makeId() {
    if (window.crypto && window.crypto.randomUUID) return window.crypto.randomUUID();
    return 'id-' + Date.now().toString(36) + '-' + Math.random().toString(36).slice(2, 12);
  }

  function element(tag, className, text) {
    var item = document.createElement(tag);
    if (className) item.className = className;
    if (text !== undefined && text !== null) item.textContent = text;
    return item;
  }

  function eventElement(event) {
    var target = event.target;
    return target && (target.nodeType === 1 ? target : target.parentElement);
  }

  function showMessage(message, type) {
    var box = document.getElementById('globalMessage');
    box.textContent = message;
    box.className = 'message' + (type ? ' ' + type : '');
    box.hidden = !message;
  }

  function setSaveStatus(text, isError) {
    var status = document.getElementById('saveStatus');
    if (!status) return;
    status.textContent = text;
    status.classList.toggle('is-error', Boolean(isError));
  }

  function readLocalDraft() {
    try {
      var raw = localStorage.getItem(STORAGE_KEY);
      return raw ? JSON.parse(raw) : null;
    } catch (error) {
      showMessage('No se pudo leer el borrador local del navegador. La copia del servidor seguirá disponible si el enlace privado está vigente.', 'error');
      return null;
    }
  }

  function persistLocalDraft() {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify({
        token: sessionToken,
        state: state,
        currentStep: currentStep
      }));
      return true;
    } catch (error) {
      setSaveStatus('El navegador no permitió guardar una copia local.', true);
      showMessage('El almacenamiento local está bloqueado o lleno. Mantengan esta pestaña abierta y descarguen el PDF antes de salir.', 'error');
      return false;
    }
  }

  async function apiRequest(payload) {
    var response;
    try {
      response = await fetch(API_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
        cache: 'no-store',
        body: JSON.stringify(payload)
      });
    } catch (error) {
      throw new Error('No hay conexión con el servidor PHP. El borrador local se conserva en este navegador.');
    }

    var result;
    try {
      result = await response.json();
    } catch (error) {
      throw new Error('El servidor devolvió una respuesta inválida. El borrador local se conserva.');
    }
    if (!response.ok || !result.ok) {
      throw new Error(result.error || 'El servidor no pudo completar la solicitud.');
    }
    return result;
  }

  async function createSession() {
    var button = document.getElementById('startNew');
    button.disabled = true;
    button.textContent = 'Creando…';
    try {
      var result = await apiRequest({ action: 'create' });
      sessionToken = result.token;
      state = result.state;
      currentStep = 0;
      history.replaceState(null, '', location.pathname + location.search + '#' + sessionToken);
      persistLocalDraft();
      openWorkspace();
      showMessage('Retrospectiva creada. Completen las etapas en equipo; los cambios se guardan automáticamente.', 'success');
    } catch (error) {
      showMessage(error.message, 'error');
    } finally {
      button.disabled = false;
      button.textContent = 'Crear retrospectiva';
    }
  }

  async function restoreSession(token) {
    var local = readLocalDraft();
    try {
      var result = await apiRequest({ action: 'load', token: token });
      sessionToken = token;
      state = result.state;
      currentStep = Number.isInteger(result.currentStep) ? result.currentStep : (local && local.token === token ? local.currentStep || 0 : 0);
      state.timerRunning = false;
      persistLocalDraft();
      openWorkspace();
      if (location.hash.slice(1) !== token) {
        history.replaceState(null, '', location.pathname + location.search + '#' + token);
      }
    } catch (error) {
      if (local && local.token === token && local.state) {
        sessionToken = token;
        state = local.state;
        state.timerRunning = false;
        currentStep = Number.isInteger(local.currentStep) ? local.currentStep : 0;
        openWorkspace();
        showMessage(error.message + ' Están usando la copia local; al volver el servidor, guarden para sincronizar.', 'error');
        return;
      }
      showMessage(error.message + ' Comprueben el enlace o creen una nueva retrospectiva.', 'error');
    }
  }

  function openWorkspace() {
    document.getElementById('welcome').hidden = true;
    document.getElementById('workspace').hidden = false;
    renderAll();
    startClock();
  }

  function renderAll() {
    renderSessionBar();
    renderNavigation();
    renderStep();
    renderControls();
  }

  function renderSessionBar() {
    document.getElementById('teamTitle').textContent = state.teamName || 'Nueva retrospectiva';
    document.getElementById('projectSubtitle').textContent = state.projectName
      ? state.projectName + (state.reviewPeriod ? ' · ' + state.reviewPeriod : '')
      : 'Completen la etapa Preparar para identificar su sesión.';
    document.getElementById('timerDisplay').textContent = formatTime(state.elapsedSeconds);
    document.getElementById('timerToggle').textContent = state.timerRunning ? 'Pausar cronómetro' : 'Iniciar cronómetro';
  }

  function formatTime(seconds) {
    var mins = Math.floor(seconds / 60);
    var secs = seconds % 60;
    return String(mins).padStart(2, '0') + ':' + String(secs).padStart(2, '0');
  }

  function renderNavigation() {
    var list = document.getElementById('stepNav');
    list.replaceChildren();
    STEPS.forEach(function (step, index) {
      var li = element('li');
      var button = element('button', 'step-button');
      button.type = 'button';
      button.dataset.step = String(index);
      button.disabled = index > currentStep && !canVisit(index);
      button.setAttribute('aria-current', index === currentStep ? 'step' : 'false');
      if (index < currentStep && isStepComplete(index)) button.classList.add('is-done');
      var number = element('span', '', index === 5 ? 'ETAPA 6' : 'ETAPA ' + (index + 1) + ' · ' + step.time + ' MIN');
      var title = element('strong', '', step.title);
      button.append(number, title);
      li.appendChild(button);
      list.appendChild(li);
    });
  }

  function canVisit(index) {
    for (var i = 0; i < index; i++) {
      if (!isStepComplete(i)) return false;
    }
    return true;
  }

  function renderControls() {
    var previous = document.getElementById('previousStep');
    var next = document.getElementById('nextStep');
    previous.disabled = currentStep === 0;
    next.hidden = currentStep === 5;
    next.textContent = currentStep === 4 ? 'Generar acta →' : 'Siguiente etapa →';
    document.getElementById('stepHint').textContent = currentStep === 5
      ? 'El informe reúne todos los acuerdos de esta sesión.'
      : 'Tiempo sugerido para esta etapa: ' + STEPS[currentStep].time + ' min.';
    document.getElementById('report').hidden = currentStep !== 5;
    if (currentStep === 5) renderReport();
  }

  function renderStep() {
    panel.replaceChildren();
    if (currentStep === 5) {
      panel.hidden = true;
      return;
    }
    panel.hidden = false;
    var article = element('article', 'lesson-card card');
    var heading = element('div', 'phase-heading');
    var headingCopy = document.createElement('div');
    headingCopy.append(
      element('p', 'eyebrow', 'ETAPA ' + (currentStep + 1) + ' DE 5'),
      element('h2', '', stageTitle(currentStep)),
      element('p', 'explain', stageDescription(currentStep))
    );
    heading.append(headingCopy, element('span', 'phase-time', '⏱ ' + STEPS[currentStep].time + ' min'));
    article.appendChild(heading);

    if (currentStep === 0) renderSetup(article);
    if (currentStep === 1) renderGather(article);
    if (currentStep === 2) renderInsights(article);
    if (currentStep === 3) renderActions(article);
    if (currentStep === 4) renderClosing(article);
    panel.appendChild(article);
  }

  function stageTitle(index) {
    return ['Preparen el espacio', 'Reúnan hechos y experiencias', 'Encuentren patrones y elijan un foco', 'Acuerden experimentos concretos', 'Cierren con aprendizaje y confianza'][index];
  }

  function stageDescription(index) {
    return [
      'Aterricen el propósito, el periodo que revisarán y las reglas para conversar con seguridad.',
      'Cada integrante aporta hechos observables. Después, agrupen las tarjetas en las tres columnas.',
      'Busquen patrones del proceso, no culpables. Agrupen tarjetas, escriban el aprendizaje y voten por lo que merece atención.',
      'Conviertan el foco en acciones pequeñas, con responsable por rol, fecha y evidencia de éxito.',
      'Cada persona expresa su nivel de confianza y un aprendizaje que se lleva. El equipo sale con un cierre explícito.'
    ][index];
  }

  function addCallout(parent, text) {
    parent.appendChild(element('div', 'callout', text));
  }

  function addField(parent, labelText, name, value, type, placeholder) {
    var wrapper = element('div', 'field');
    var label = element('label', '', labelText);
    label.htmlFor = 'field-' + name;
    var input = document.createElement(type === 'textarea' ? 'textarea' : 'input');
    input.id = 'field-' + name;
    input.dataset.field = name;
    if (type !== 'textarea') input.type = type || 'text';
    input.value = value || '';
    if (placeholder) input.placeholder = placeholder;
    if (name === 'meetingDate') input.max = new Date().toISOString().slice(0, 10);
    wrapper.append(label, input);
    parent.appendChild(wrapper);
  }

  function renderSetup(article) {
    addCallout(article, 'Lean el acuerdo en voz alta. Una persona puede ir leyendo las instrucciones, pero todas las decisiones son del equipo.');
    var fields = element('div', 'field-grid');
    addField(fields, 'Nombre del equipo (sin datos personales)', 'teamName', state.teamName, 'text', 'Ej. Equipo Horizonte');
    addField(fields, 'Proyecto o sistema que revisan', 'projectName', state.projectName, 'text', 'Ej. Registro del dispensario');
    addField(fields, 'Periodo o hito que revisan', 'reviewPeriod', state.reviewPeriod, 'text', 'Ej. Semana 14 a 17');
    addField(fields, 'Fecha de la retrospectiva', 'meetingDate', state.meetingDate, 'date', '');
    article.appendChild(fields);
    article.appendChild(element('h3', '', 'Acuerdos de trabajo'));
    var rules = [
      ['process', 'Hablamos de hechos, decisiones y condiciones del proceso; no atribuimos fallas a una persona.'],
      ['equalVoice', 'Damos espacio a todas las voces; se puede pasar turno y volver a participar después.'],
      ['confidentiality', 'Compartimos aprendizajes, no citas atribuibles. No escribimos contraseñas ni datos sensibles.']
    ];
    var list = element('div', 'check-list');
    rules.forEach(function (rule) {
      var row = element('div', 'check-row');
      var input = document.createElement('input');
      input.type = 'checkbox';
      input.dataset.norm = rule[0];
      input.id = 'norm-' + rule[0];
      input.checked = Boolean(state.norms[rule[0]]);
      var label = element('label', '', rule[1]);
      label.htmlFor = input.id;
      row.append(input, label);
      list.appendChild(row);
    });
    article.appendChild(list);
  }

  function renderGather(article) {
    addCallout(article, 'Escriban una idea por tarjeta y usen ejemplos concretos. Arrastren las tarjetas entre columnas; también pueden usar el menú “Mover a” si trabajan desde una pantalla táctil o con teclado.');
    var form = element('form', 'card-form');
    form.id = 'cardForm';
    var textLabel = element('label', '', 'Hecho, observación o idea (máx. 240 caracteres)');
    var text = document.createElement('input');
    text.name = 'cardText';
    text.required = true;
    text.maxLength = 240;
    text.autocomplete = 'off';
    text.placeholder = 'Ej. El push del viernes quedó sin revisión y bloqueó el deploy';
    textLabel.appendChild(text);
    var categoryLabel = element('label', '', 'Columna inicial');
    var select = document.createElement('select');
    select.name = 'category';
    CATEGORIES.forEach(function (category) {
      var option = element('option', '', category.title);
      option.value = category.id;
      select.appendChild(option);
    });
    categoryLabel.appendChild(select);
    var submit = element('button', 'button button-primary', 'Agregar tarjeta');
    submit.type = 'submit';
    form.append(textLabel, categoryLabel, submit);
    article.appendChild(form);
    article.appendChild(element('p', 'helper', 'Para avanzar: mínimo 3 tarjetas y al menos una en cada columna.'));
    var board = element('div', 'drop-board');
    CATEGORIES.forEach(function (category) {
      var zone = element('section', 'drop-zone');
      zone.dataset.category = category.id;
      zone.setAttribute('aria-label', category.title + ', zona para soltar tarjetas');
      var head = element('div', 'zone-head');
      head.append(element('span', 'zone-icon', category.icon), element('h3', '', category.title));
      zone.appendChild(head);
      var cards = state.cards.filter(function (card) { return card.category === category.id; });
      if (!cards.length) zone.appendChild(element('p', 'empty-hint', 'Arrastren aquí una tarjeta.'));
      cards.forEach(function (card) { zone.appendChild(renderCard(card, 'category')); });
      board.appendChild(zone);
    });
    article.appendChild(board);
  }

  function renderCard(card, mode) {
    var item = element('article', 'retro-card');
    item.draggable = true;
    item.dataset.cardId = card.id;
    item.setAttribute('aria-label', 'Tarjeta movible: ' + card.text);
    item.appendChild(element('p', '', card.text));
    var tools = element('div', 'card-tools');
    var label = element('span', 'helper', mode === 'category' ? 'Arrastra para mover' : 'Votos: ' + (state.votes[card.id] || 0));
    tools.appendChild(label);

    if (mode === 'category') {
      var select = document.createElement('select');
      select.dataset.moveCard = card.id;
      select.setAttribute('aria-label', 'Mover tarjeta a otra columna');
      CATEGORIES.forEach(function (category) {
        var option = element('option', '', category.title);
        option.value = category.id;
        option.selected = category.id === card.category;
        select.appendChild(option);
      });
      tools.appendChild(select);
    } else {
      var moveSelect = document.createElement('select');
      moveSelect.dataset.moveCard = card.id;
      moveSelect.setAttribute('aria-label', 'Mover tarjeta a otro tema');
      var ungrouped = element('option', '', 'Sin agrupar');
      ungrouped.value = '';
      ungrouped.selected = !card.themeId;
      moveSelect.appendChild(ungrouped);
      state.themes.forEach(function (theme) {
        var option = element('option', '', theme.title);
        option.value = theme.id;
        option.selected = theme.id === card.themeId;
        moveSelect.appendChild(option);
      });
      var vote = element('button', 'small-button', (state.votes[card.id] || 0) > 0 ? 'Quitar voto' : '＋ Votar');
      vote.type = 'button';
      vote.dataset.voteCard = card.id;
      vote.disabled = !state.votes[card.id] && totalVotes() >= 3;
      vote.setAttribute('aria-label', (state.votes[card.id] ? 'Quitar voto de ' : 'Votar por ') + card.text);
      tools.append(moveSelect, vote);
    }
    item.appendChild(tools);
    return item;
  }

  function totalVotes() {
    return Object.keys(state.votes).reduce(function (sum, id) { return sum + (Number(state.votes[id]) || 0); }, 0);
  }

  function renderInsights(article) {
    addCallout(article, 'Agrupar no es buscar una causa personal. Pregunten: ¿qué condición del sistema se repite?, ¿qué ayudó?, ¿qué podemos comprobar en el siguiente ciclo?');
    var form = element('form', 'theme-form');
    form.id = 'themeForm';
    var input = document.createElement('input');
    input.name = 'themeTitle';
    input.maxLength = 70;
    input.required = true;
    input.placeholder = 'Nombre de un patrón o tema nuevo';
    input.setAttribute('aria-label', 'Nombre del nuevo tema');
    var button = element('button', 'button button-secondary', '＋ Agregar tema');
    button.type = 'submit';
    form.append(input, button);
    article.appendChild(form);
    article.appendChild(element('p', 'helper', 'Arrastren tarjetas a un tema o asígnenlas desde su menú. Un patrón válido agrupa al menos dos tarjetas.'));

    var grid = element('div', 'theme-grid');
    state.themes.forEach(function (theme) {
      var zone = element('section', 'theme-zone');
      zone.dataset.themeId = theme.id;
      zone.setAttribute('aria-label', theme.title + ', zona para agrupar tarjetas');
      var title = document.createElement('input');
      title.value = theme.title;
      title.maxLength = 70;
      title.dataset.themeTitle = theme.id;
      title.setAttribute('aria-label', 'Editar nombre del tema');
      title.className = 'theme-title-input';
      zone.appendChild(title);
      zone.appendChild(element('p', 'helper', state.cards.filter(function (card) { return card.themeId === theme.id; }).length + ' tarjeta(s)'));
      var cards = state.cards.filter(function (card) { return card.themeId === theme.id; });
      if (!cards.length) zone.appendChild(element('p', 'empty-hint', 'Arrastren tarjetas a este tema.'));
      cards.forEach(function (card) { zone.appendChild(renderCard(card, 'theme')); });
      var remove = element('button', 'text-button text-danger', 'Quitar tema');
      remove.type = 'button';
      remove.dataset.removeTheme = theme.id;
      zone.appendChild(remove);
      grid.appendChild(zone);
    });
    article.appendChild(grid);

    var bank = element('section', 'theme-bank');
    bank.appendChild(element('h3', '', 'Tarjetas sin agrupar'));
    var unassigned = state.cards.filter(function (card) { return !card.themeId || !state.themes.some(function (theme) { return theme.id === card.themeId; }); });
    if (!unassigned.length) bank.appendChild(element('p', 'empty-hint', 'Todas las tarjetas están agrupadas. Pueden moverlas si cambian de opinión.'));
    var bankCards = element('div', 'theme-card-bank');
    unassigned.forEach(function (card) { bankCards.appendChild(renderCard(card, 'theme')); });
    bank.appendChild(bankCards);
    bank.dataset.themeId = '';
    bank.classList.add('theme-zone');
    article.appendChild(bank);

    var insightBox = element('div', 'insight-box');
    var insightLabel = element('label', 'field-label', '¿Qué aprendizaje o explicación del patrón se llevan? (mín. 20 caracteres)');
    insightLabel.htmlFor = 'teamInsight';
    var insight = document.createElement('textarea');
    insight.id = 'teamInsight';
    insight.dataset.field = 'insight';
    insight.maxLength = 1200;
    insight.value = state.insight;
    insight.placeholder = 'Ej. Los bloqueos de integración aparecieron cuando trabajamos sin revisar ramas a diario; acordar una revisión breve podría reducirlos.';
    insightBox.append(insightLabel, insight);
    var voteHint = element('p', 'helper', 'El equipo dispone de 3 votos para señalar los hechos que más conviene atender. Votos usados: ' + totalVotes() + ' / 3.');
    insightBox.appendChild(voteHint);
    article.appendChild(insightBox);
  }

  function renderActions(article) {
    addCallout(article, 'Elijan una acción pequeña que puedan probar antes de la próxima revisión. Un buen acuerdo dice qué se hará, qué rol lo impulsa, cuándo y qué evidencia mostrará que ayudó.');
    var form = element('form', 'action-form');
    form.id = 'actionForm';
    var fields = [
      ['actionText', 'Acción verificable', 'Ej. Revisar cada PR antes de mezclarlo', 'text'],
      ['actionOwner', 'Responsable por rol (no hace falta nombre)', 'Ej. Quien abre el PR', 'text'],
      ['actionDue', 'Fecha de revisión', '', 'date'],
      ['actionMeasure', '¿Qué evidencia indicará que funcionó?', 'Ej. Ningún conflicto pendiente al cierre del día', 'textarea']
    ];
    fields.forEach(function (field) {
      var label = element('label', field[0] === 'actionMeasure' ? 'wide' : '', field[1]);
      var control = document.createElement(field[3] === 'textarea' ? 'textarea' : 'input');
      control.name = field[0];
      control.required = true;
      if (field[3] !== 'textarea') control.type = field[3];
      if (field[2]) control.placeholder = field[2];
      label.appendChild(control);
      form.appendChild(label);
    });
    var button = element('button', 'button button-primary wide', state.actions.length >= 3 ? 'Máximo 3 acuerdos' : '＋ Añadir acuerdo');
    button.type = 'submit';
    button.disabled = state.actions.length >= 3;
    form.appendChild(button);
    article.appendChild(form);
    article.appendChild(element('p', 'helper', 'Máximo 3 acciones. Pueden arrastrar para priorizar o usar los botones ↑ y ↓. Cada acción requiere responsable, fecha y evidencia.'));
    var list = element('div', 'action-list');
    list.dataset.actionList = 'true';
    state.actions.forEach(function (action, index) {
      var item = element('article', 'action-item');
      item.draggable = true;
      item.dataset.actionId = action.id;
      var number = element('span', 'action-number', String(index + 1));
      var copy = document.createElement('div');
      copy.append(element('h3', '', action.task));
      copy.append(
        element('p', '', 'Responsable por rol: ' + action.owner),
        element('p', '', 'Revisar el: ' + action.due),
        element('p', '', 'Evidencia de éxito: ' + action.measure)
      );
      var controls = element('div', 'action-buttons');
      [['up', '↑', 'Subir prioridad'], ['down', '↓', 'Bajar prioridad'], ['delete', '×', 'Eliminar acuerdo']].forEach(function (control) {
        var controlButton = element('button', '', control[1]);
        controlButton.type = 'button';
        controlButton.dataset.actionMove = control[0];
        controlButton.dataset.actionId = action.id;
        controlButton.setAttribute('aria-label', control[2]);
        controls.appendChild(controlButton);
      });
      item.append(number, copy, controls);
      list.appendChild(item);
    });
    if (!state.actions.length) list.appendChild(element('p', 'empty-hint', 'Todavía no hay acuerdos de acción.'));
    article.appendChild(list);
  }

  function renderClosing(article) {
    addCallout(article, 'Den una vuelta breve. Cada persona puede responder en voz alta; registren una conclusión del grupo, no una cita personal.');
    article.appendChild(element('h3', '', '¿Qué confianza tiene el equipo en que probará estas acciones?'));
    article.appendChild(element('p', 'helper', '1 = poca confianza · 5 = mucha confianza. Si la cifra es baja, simplifiquen los acuerdos antes de cerrar.'));
    var ratings = element('div', 'rating-row');
    [1, 2, 3, 4, 5].forEach(function (value) {
      var input = document.createElement('input');
      input.type = 'radio';
      input.name = 'confidence';
      input.id = 'confidence-' + value;
      input.value = String(value);
      input.checked = Number(state.confidence) === value;
      var label = element('label', '', String(value));
      label.htmlFor = input.id;
      ratings.append(input, label);
    });
    article.appendChild(ratings);
    var takeaway = element('div', 'field');
    var label = element('label', '', '¿Qué aprendizaje o compromiso se lleva el equipo? (mín. 20 caracteres)');
    label.htmlFor = 'teamTakeaway';
    var textarea = document.createElement('textarea');
    textarea.id = 'teamTakeaway';
    textarea.dataset.field = 'takeaway';
    textarea.maxLength = 1200;
    textarea.value = state.takeaway;
    textarea.placeholder = 'Cerramos con el compromiso de probar la revisión diaria de PR y comprobar si disminuyen los bloqueos.';
    takeaway.append(label, textarea);
    article.appendChild(takeaway);
    var checkRow = element('div', 'check-row');
    var confirm = document.createElement('input');
    confirm.type = 'checkbox';
    confirm.id = 'closingConfirm';
    confirm.dataset.norm = 'closingConfirm';
    confirm.checked = Boolean(state.norms.closingConfirm);
    var confirmLabel = element('label', '', 'Confirmamos que las acciones tienen responsable, fecha y evidencia; el informe no incluirá contraseñas ni datos personales.');
    confirmLabel.htmlFor = confirm.id;
    checkRow.append(confirm, confirmLabel);
    article.appendChild(checkRow);
  }

  function renderReport() {
    var report = document.getElementById('report');
    report.replaceChildren();
    report.appendChild(element('p', 'eyebrow', 'ACTA DE RETROSPECTIVA'));
    report.appendChild(element('h2', '', state.teamName));
    report.appendChild(element('p', 'report-meta', state.projectName + ' · ' + state.reviewPeriod + ' · ' + state.meetingDate + ' · Duración: ' + formatTime(state.elapsedSeconds)));
    report.appendChild(element('p', '', 'Propósito: aprender del proceso y acordar experimentos concretos, sin buscar culpables.'));
    var timeline = element('section', 'report-section');
    timeline.appendChild(element('h3', '', '1. Datos observados'));
    CATEGORIES.forEach(function (category) {
      var cards = state.cards.filter(function (card) { return card.category === category.id; });
      timeline.appendChild(element('p', '', category.title + ':'));
      var list = element('ul');
      cards.forEach(function (card) { list.appendChild(element('li', '', card.text)); });
      timeline.appendChild(list);
    });
    report.appendChild(timeline);

    var patterns = element('section', 'report-section');
    patterns.appendChild(element('h3', '', '2. Patrones, aprendizaje y votos'));
    state.themes.forEach(function (theme) {
      var matching = state.cards.filter(function (card) { return card.themeId === theme.id; });
      if (!matching.length) return;
      patterns.appendChild(element('p', '', theme.title + ' (' + matching.length + ' tarjeta(s)):'));
      var list = element('ul');
      matching.forEach(function (card) {
        list.appendChild(element('li', '', card.text + ' · votos: ' + (state.votes[card.id] || 0)));
      });
      patterns.appendChild(list);
    });
    patterns.appendChild(element('p', '', 'Aprendizaje del equipo: ' + state.insight));
    patterns.appendChild(element('p', '', 'Votos emitidos: ' + totalVotes() + ' / 3'));
    report.appendChild(patterns);

    var agreements = element('section', 'report-section');
    agreements.appendChild(element('h3', '', '3. Acciones acordadas'));
    var actionList = element('ol');
    state.actions.forEach(function (action) {
      actionList.appendChild(element('li', '', action.task + ' · Responsable: ' + action.owner + ' · Fecha: ' + action.due + ' · Evidencia: ' + action.measure));
    });
    agreements.appendChild(actionList);
    report.appendChild(agreements);

    var close = element('section', 'report-section');
    close.appendChild(element('h3', '', '4. Cierre'));
    close.append(
      element('p', '', 'Confianza del equipo para cumplir los acuerdos: ' + state.confidence + ' / 5.'),
      element('p', '', 'Aprendizaje o compromiso final: ' + state.takeaway),
      element('p', 'report-meta', 'Acuerdos: conversación sin culpa, participación equitativa y respeto de la confidencialidad.')
    );
    report.appendChild(close);

    var actions = element('div', 'report-actions no-print');
    var print = element('button', 'button button-primary', 'Exportar acta a PDF');
    print.type = 'button';
    print.addEventListener('click', function () { window.print(); });
    var back = element('button', 'button button-secondary', 'Volver a la retrospectiva');
    back.type = 'button';
    back.addEventListener('click', function () { goToStep(4); });
    actions.append(print, back);
    report.appendChild(actions);
  }

  function isStepComplete(index) {
    if (!state) return false;
    if (index === 0) {
      return state.teamName.trim().length >= 2 &&
        state.projectName.trim().length >= 2 &&
        state.reviewPeriod.trim().length >= 2 &&
        Boolean(state.meetingDate) &&
        state.norms.process && state.norms.equalVoice && state.norms.confidentiality;
    }
    if (index === 1) {
      return state.cards.length >= 3 && CATEGORIES.every(function (category) {
        return state.cards.some(function (card) { return card.category === category.id; });
      });
    }
    if (index === 2) {
      var hasCluster = state.themes.some(function (theme) {
        return state.cards.filter(function (card) { return card.themeId === theme.id; }).length >= 2;
      });
      return hasCluster && state.insight.trim().length >= 20 && totalVotes() >= 1;
    }
    if (index === 3) {
      return state.actions.length >= 1 && state.actions.every(function (action) {
        return action.task.trim().length >= 10 && action.owner.trim().length >= 2 &&
          Boolean(action.due) && action.measure.trim().length >= 5;
      });
    }
    if (index === 4) {
      return Number(state.confidence) >= 1 && Number(state.confidence) <= 5 &&
        state.takeaway.trim().length >= 20 && Boolean(state.norms.closingConfirm);
    }
    return true;
  }

  function missingFor(index) {
    if (index === 0) return ['Completen equipo, proyecto, periodo y fecha; marquen los tres acuerdos de trabajo.'];
    if (index === 1) return ['Agreguen al menos 3 tarjetas y coloquen una en cada columna.'];
    if (index === 2) return ['Agrupen 2 tarjetas en un patrón, escriban un aprendizaje de 20 caracteres y emitan al menos 1 voto.'];
    if (index === 3) return ['Añadan al menos una acción con tarea, responsable por rol, fecha y evidencia de éxito.'];
    if (index === 4) return ['Seleccionen confianza 1–5, escriban un cierre de 20 caracteres y confirmen los acuerdos.'];
    return [];
  }

  function goToStep(index) {
    if (index > currentStep && !isStepComplete(currentStep)) {
      var requirements = missingFor(currentStep);
      document.getElementById('stepHint').textContent = requirements.join(' ');
      showMessage(requirements.join(' '), 'error');
      return;
    }
    if (!canVisit(index)) {
      showMessage(missingFor(firstIncompleteStep()).join(' '), 'error');
      return;
    }
    currentStep = Math.max(0, Math.min(5, index));
    state.currentStep = currentStep;
    showMessage('', '');
    renderAll();
    persistLocalDraft();
    scheduleRemoteSave();
    window.scrollTo({ top: document.getElementById('workspace').offsetTop, behavior: 'smooth' });
  }

  function firstIncompleteStep() {
    for (var i = 0; i < 5; i++) if (!isStepComplete(i)) return i;
    return 5;
  }

  function handleInput(event) {
    var target = event.target;
    if (target.dataset.field) {
      state[target.dataset.field] = target.value;
      if (target.dataset.field === 'teamName' || target.dataset.field === 'projectName' || target.dataset.field === 'reviewPeriod') {
        renderSessionBar();
      }
      renderNavigation();
      persistLocalDraft();
      scheduleRemoteSave();
      return;
    }
    if (target.dataset.norm) {
      state.norms[target.dataset.norm] = target.checked;
      renderNavigation();
      persistLocalDraft();
      scheduleRemoteSave();
      return;
    }
    if (target.name === 'confidence') {
      state.confidence = Number(target.value);
      renderNavigation();
      persistLocalDraft();
      scheduleRemoteSave();
      return;
    }
    if (target.dataset.moveCard) {
      var card = findCard(target.dataset.moveCard);
      if (card) {
        if (currentStep === 1) card.category = target.value;
        else card.themeId = target.value || '';
        renderStep();
        renderNavigation();
        scheduleSave();
      }
      return;
    }
    if (target.dataset.themeTitle) {
      var theme = state.themes.find(function (item) { return item.id === target.dataset.themeTitle; });
      if (theme) theme.title = target.value;
      scheduleSave();
    }
  }

  function findCard(id) {
    return state.cards.find(function (card) { return card.id === id; });
  }

  function handleSubmit(event) {
    event.preventDefault();
    var form = event.target;
    if (form.id === 'cardForm') {
      var text = form.elements.cardText.value.trim();
      if (text.length < 3) {
        showMessage('Escriban una observación de al menos 3 caracteres.', 'error');
        form.elements.cardText.focus();
        return;
      }
      if (state.cards.length >= 40) {
        showMessage('Esta sesión admite hasta 40 tarjetas para que el informe siga siendo manejable.', 'error');
        return;
      }
      state.cards.push({ id: makeId(), text: text.slice(0, 240), category: form.elements.category.value, themeId: '' });
      renderAll();
      scheduleSave();
      return;
    }
    if (form.id === 'themeForm') {
      var title = form.elements.themeTitle.value.trim();
      if (title.length < 3 || state.themes.length >= 12) {
        showMessage(title.length < 3 ? 'El nombre del tema debe tener al menos 3 caracteres.' : 'La sesión admite hasta 12 temas.', 'error');
        return;
      }
      state.themes.push({ id: makeId(), title: title.slice(0, 70) });
      renderStep();
      scheduleSave();
      return;
    }
    if (form.id === 'actionForm') {
      if (state.actions.length >= 3) {
        showMessage('La sesión admite hasta 3 acciones priorizadas.', 'error');
        return;
      }
      var values = new FormData(form);
      var action = {
        id: makeId(),
        task: String(values.get('actionText') || '').trim().slice(0, 240),
        owner: String(values.get('actionOwner') || '').trim().slice(0, 100),
        due: String(values.get('actionDue') || '').trim(),
        measure: String(values.get('actionMeasure') || '').trim().slice(0, 400)
      };
      if (action.task.length < 10 || action.owner.length < 2 || !action.due || action.measure.length < 5) {
        showMessage('Completen la tarea, el rol responsable, la fecha y una evidencia concreta.', 'error');
        return;
      }
      state.actions.push(action);
      renderAll();
      scheduleSave();
    }
  }

  function handleClick(event) {
    var clicked = eventElement(event);
    var target = clicked && clicked.closest('button');
    if (!target) return;
    if (target.dataset.step !== undefined) {
      goToStep(Number(target.dataset.step));
      return;
    }
    if (target.dataset.voteCard) {
      var cardId = target.dataset.voteCard;
      if (state.votes[cardId]) {
        delete state.votes[cardId];
      } else if (totalVotes() < 3) {
        state.votes[cardId] = 1;
      }
      renderStep();
      renderNavigation();
      scheduleSave();
      return;
    }
    if (target.dataset.removeTheme) {
      var themeId = target.dataset.removeTheme;
      state.themes = state.themes.filter(function (theme) { return theme.id !== themeId; });
      state.cards.forEach(function (card) { if (card.themeId === themeId) card.themeId = ''; });
      renderStep();
      renderNavigation();
      scheduleSave();
      return;
    }
    if (target.dataset.actionMove) {
      var id = target.dataset.actionId;
      var index = state.actions.findIndex(function (action) { return action.id === id; });
      if (target.dataset.actionMove === 'delete') {
        state.actions.splice(index, 1);
      } else {
        var newIndex = target.dataset.actionMove === 'up' ? index - 1 : index + 1;
        if (newIndex >= 0 && newIndex < state.actions.length) {
          var moved = state.actions.splice(index, 1)[0];
          state.actions.splice(newIndex, 0, moved);
        }
      }
      renderStep();
      renderNavigation();
      scheduleSave();
    }
  }

  function handleDragStart(event) {
    var target = eventElement(event);
    if (!target) return;
    var card = target.closest('[data-card-id]');
    var action = target.closest('[data-action-id]');
    var draggable = card || action;
    if (!draggable) return;
    draggable.classList.add('is-dragging');
    activeDragId = draggable.dataset.cardId || 'action:' + draggable.dataset.actionId;
    if (event.dataTransfer) event.dataTransfer.effectAllowed = 'move';
    if (event.dataTransfer) event.dataTransfer.setData('text/plain', activeDragId);
  }

  function getDropTarget(x, y) {
    var pointed = document.elementFromPoint(x, y);
    return pointed && pointed.closest('.drop-zone, .theme-zone, .action-list, .action-item');
  }

  function moveDraggedItem(dragged, target) {
    if (dragged.indexOf('action:') === 0 && currentStep === 3) {
      reorderAction(dragged.slice(7), target);
      return;
    }
    var card = findCard(dragged);
    if (!card) return;
    if (currentStep === 1 && target.dataset.category) {
      card.category = target.dataset.category;
    } else if (currentStep === 2 && target.classList.contains('theme-zone')) {
      card.themeId = target.dataset.themeId || '';
    } else {
      return;
    }
    renderStep();
    renderNavigation();
    scheduleSave();
  }

  function handlePointerDown(event) {
    var target = eventElement(event);
    if (!target || event.button !== 0 || target.closest('button, select, input, textarea')) return;
    var card = target.closest('[data-card-id]');
    var action = target.closest('[data-action-id]');
    var draggable = card || action;
    if (!draggable) return;
    pointerDragId = draggable.dataset.cardId || 'action:' + draggable.dataset.actionId;
    pointerStart = { x: event.clientX, y: event.clientY };
  }

  function handlePointerMove(event) {
    if (!pointerDragId || !pointerStart) return;
    if (Math.hypot(event.clientX - pointerStart.x, event.clientY - pointerStart.y) < 6) return;
    var target = getDropTarget(event.clientX, event.clientY);
    document.querySelectorAll('.is-over').forEach(function (item) { item.classList.remove('is-over'); });
    if (target && (target.classList.contains('drop-zone') || target.classList.contains('theme-zone'))) {
      target.classList.add('is-over');
    }
  }

  function finishPointerDrag(event) {
    if (!pointerDragId || !pointerStart) return;
    var dragged = pointerDragId;
    var moved = Math.hypot(event.clientX - pointerStart.x, event.clientY - pointerStart.y) >= 6;
    pointerDragId = '';
    pointerStart = null;
    document.querySelectorAll('.is-over').forEach(function (item) { item.classList.remove('is-over'); });
    if (!moved) return;
    var target = getDropTarget(event.clientX, event.clientY);
    if (target) moveDraggedItem(dragged, target);
  }

  function handleDragOver(event) {
    var origin = eventElement(event);
    var target = origin && origin.closest('.drop-zone, .theme-zone, .action-list, .action-item');
    if (!target) return;
    event.preventDefault();
    if (target.classList.contains('drop-zone') || target.classList.contains('theme-zone')) target.classList.add('is-over');
  }

  function handleDrop(event) {
    var origin = eventElement(event);
    var target = origin && origin.closest('.drop-zone, .theme-zone, .action-list, .action-item');
    if (!target) return;
    event.preventDefault();
    document.querySelectorAll('.is-over').forEach(function (item) { item.classList.remove('is-over'); });
    var dragged = (event.dataTransfer && event.dataTransfer.getData('text/plain')) || activeDragId;
    activeDragId = '';
    if (!dragged) return;
    pointerDragId = '';
    pointerStart = null;
    moveDraggedItem(dragged, target);
  }

  function reorderAction(id, target) {
    var from = state.actions.findIndex(function (action) { return action.id === id; });
    if (from < 0) return;
    var to = target.classList.contains('action-item')
      ? state.actions.findIndex(function (action) { return action.id === target.dataset.actionId; })
      : state.actions.length - 1;
    if (to < 0 || from === to) return;
    var action = state.actions.splice(from, 1)[0];
    state.actions.splice(Math.max(0, Math.min(to, state.actions.length)), 0, action);
    renderStep();
    scheduleSave();
  }

  function handleDragEnd() {
    document.querySelectorAll('.is-dragging, .is-over').forEach(function (item) {
      item.classList.remove('is-dragging', 'is-over');
    });
    activeDragId = '';
    pointerDragId = '';
    pointerStart = null;
  }

  function scheduleSave() {
    renderNavigation();
    persistLocalDraft();
    scheduleRemoteSave();
  }

  function scheduleRemoteSave() {
    if (!sessionToken || !state) return;
    setSaveStatus('Guardando cambios…', false);
    window.clearTimeout(saveTimer);
    saveTimer = window.setTimeout(async function () {
      var snapshot = JSON.parse(JSON.stringify(state));
      snapshot.currentStep = currentStep;
      remoteSaveChain = remoteSaveChain.catch(function () {}).then(async function () {
        try {
          await apiRequest({ action: 'save', token: sessionToken, state: snapshot });
          setSaveStatus('Guardado en el servidor · ' + new Date().toLocaleTimeString(), false);
          if (document.getElementById('globalMessage').textContent.indexOf('No hay conexión') === 0) showMessage('', '');
        } catch (error) {
          setSaveStatus('No se sincronizó con el servidor; borrador local disponible.', true);
          showMessage(error.message + ' Copien el enlace privado y el PDF cuando la conexión vuelva.', 'error');
        }
      });
    }, 650);
  }

  function startClock() {
    if (timerInterval) window.clearInterval(timerInterval);
    timerInterval = window.setInterval(function () {
      if (!state || !state.timerRunning) return;
      state.elapsedSeconds = Math.min(10800, Number(state.elapsedSeconds || 0) + 1);
      document.getElementById('timerDisplay').textContent = formatTime(state.elapsedSeconds);
      if (state.elapsedSeconds >= 10800) {
        state.timerRunning = false;
        renderSessionBar();
        showMessage('El cronómetro llegó al límite de 3 horas y se pausó.', 'error');
      }
      if (state.elapsedSeconds - lastTimerSave >= 10 || !state.timerRunning) {
        lastTimerSave = state.elapsedSeconds;
        persistLocalDraft();
        scheduleRemoteSave();
      }
    }, 1000);
  }

  async function deleteSession() {
    if (!window.confirm('¿Borrar definitivamente esta retrospectiva del servidor y de este navegador? Esta acción no se puede deshacer.')) return;
    try {
      await apiRequest({ action: 'delete', token: sessionToken });
      localStorage.removeItem(STORAGE_KEY);
      history.replaceState(null, '', location.pathname + location.search);
      sessionToken = '';
      state = null;
      currentStep = 0;
      document.getElementById('workspace').hidden = true;
      document.getElementById('welcome').hidden = false;
      showMessage('La retrospectiva fue borrada.', 'success');
    } catch (error) {
      showMessage(error.message + ' No se borró ningún dato; vuelvan a intentarlo cuando el servidor esté disponible.', 'error');
    }
  }

  async function copyLink() {
    var url = location.origin + location.pathname + location.search + '#' + sessionToken;
    try {
      await navigator.clipboard.writeText(url);
      showMessage('Enlace privado copiado. Compártanlo solo con el equipo.', 'success');
    } catch (error) {
      window.prompt('Copien este enlace privado y compártanlo solo con el equipo:', url);
    }
  }

  panel.addEventListener('input', handleInput);
  panel.addEventListener('change', handleInput);
  panel.addEventListener('submit', handleSubmit);
  panel.addEventListener('click', handleClick);
  panel.addEventListener('dragstart', handleDragStart);
  panel.addEventListener('dragover', handleDragOver);
  panel.addEventListener('drop', handleDrop);
  panel.addEventListener('dragend', handleDragEnd);
  panel.addEventListener('pointerdown', handlePointerDown);
  document.addEventListener('pointermove', handlePointerMove);
  document.addEventListener('pointerup', finishPointerDrag);
  document.addEventListener('pointercancel', handleDragEnd);
  document.getElementById('stepNav').addEventListener('click', handleClick);

  document.getElementById('startNew').addEventListener('click', createSession);
  document.getElementById('previousStep').addEventListener('click', function () { goToStep(currentStep - 1); });
  document.getElementById('nextStep').addEventListener('click', function () { goToStep(currentStep + 1); });
  document.getElementById('timerToggle').addEventListener('click', function () {
    state.timerRunning = !state.timerRunning;
    renderSessionBar();
    scheduleSave();
  });
  document.getElementById('copyLink').addEventListener('click', copyLink);
  document.getElementById('deleteSession').addEventListener('click', deleteSession);

  var tokenFromLink = location.hash.slice(1);
  if (/^[a-f0-9]{48}$/.test(tokenFromLink)) {
    restoreSession(tokenFromLink);
  } else {
    var saved = readLocalDraft();
    if (saved && /^[a-f0-9]{48}$/.test(saved.token || '')) restoreSession(saved.token);
  }
})();
