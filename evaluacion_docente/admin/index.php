<?php
/**
 * Dashboard /admin — Evaluación docente anónima (todas las sesiones en un solo lugar).
 * Protegido con contraseña (ver ../config.php).
 */
session_start();
require __DIR__ . '/../config.php';

// --- Login / logout ---
if (isset($_GET['salir'])) {
    session_destroy();
    header('Location: index.php');
    exit;
}
if (isset($_POST['clave'])) {
    if (hash_equals(ADMIN_PASSWORD, $_POST['clave'])) {
        $_SESSION['admin_ok'] = true;
    } else {
        $error_login = 'Contraseña incorrecta.';
    }
}
$autenticado = !empty($_SESSION['admin_ok']);

// --- Datos ---
$dataFile = __DIR__ . '/../data/evaluaciones.json';
$doc = ['evaluaciones' => []];
if ($autenticado && file_exists($dataFile)) {
    $doc = json_decode(file_get_contents($dataFile), true) ?: ['evaluaciones' => []];
}
$evals = $doc['evaluaciones'] ?? [];

$criterios = [
    'claridad' => 'Claridad',
    'ritmo'    => 'Ritmo',
    'utilidad' => 'Utilidad',
    'dominio'  => 'Dominio',
    'ambiente' => 'Ambiente',
];

// Filtro por sesión (?sesion=N)
$filtro = isset($_GET['sesion']) && $_GET['sesion'] !== '' ? (int) $_GET['sesion'] : 0;
$visibles = $filtro
    ? array_values(array_filter($evals, function ($e) use ($filtro) { return (int)$e['sesion'] === $filtro; }))
    : $evals;

// Estadísticas por sesión
$porSesion = [];
foreach ($evals as $e) {
    $s = (int) $e['sesion'];
    if (!isset($porSesion[$s])) {
        $porSesion[$s] = ['n' => 0, 'sumas' => array_fill_keys(array_keys($criterios), 0)];
    }
    $porSesion[$s]['n']++;
    foreach ($criterios as $k => $_) {
        $porSesion[$s]['sumas'][$k] += (int) ($e['puntajes'][$k] ?? 0);
    }
}
ksort($porSesion);

function prom($sesion, $k) {
    return $sesion['n'] ? round($sesion['sumas'][$k] / $sesion['n'], 2) : 0;
}
function h($t) { return htmlspecialchars($t ?? '', ENT_QUOTES, 'UTF-8'); }
?>
<!doctype html>
<html lang="es">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>Admin — Evaluación docente</title>
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" />
  <style>
    body { background: #f6f8fb; }
    .card { border: 1px solid rgba(0,0,0,.06); box-shadow: 0 10px 30px rgba(16,24,40,.06); }
    .bar { height: 10px; border-radius: 999px; background: #e5e7eb; overflow: hidden; }
    .bar > span { display: block; height: 100%; background: #0d6efd; }
    .queja { border-left: 4px solid #ef4444; }
    .sugerencia { border-left: 4px solid #f59e0b; }
    .mejor { border-left: 4px solid #22c55e; }
    .comment-card { background: #fff; border-radius: .5rem; padding: .75rem 1rem; margin-bottom: .5rem; }
  </style>
</head>
<body>

<?php if (!$autenticado): ?>
  <main class="container py-5" style="max-width: 420px;">
    <div class="card">
      <div class="card-body">
        <h1 class="h4 fw-bold mb-3">🔐 Panel de evaluación docente</h1>
        <?php if (!empty($error_login)): ?>
          <div class="alert alert-danger"><?= h($error_login) ?></div>
        <?php endif; ?>
        <form method="post">
          <label class="form-label" for="clave">Contraseña de administrador</label>
          <input class="form-control mb-3" type="password" id="clave" name="clave" required autofocus />
          <button class="btn btn-primary w-100" type="submit">Entrar</button>
        </form>
        <div class="text-secondary small mt-3">La contraseña se define en <code>config.php</code>.</div>
      </div>
    </div>
  </main>
<?php else: ?>
  <nav class="navbar bg-white border-bottom sticky-top">
    <div class="container">
      <span class="navbar-brand fw-bold">📊 Evaluación docente — Dashboard</span>
      <div class="d-flex gap-2">
        <a class="btn btn-sm btn-outline-primary" href="descargar.php">⬇ Descargar JSON</a>
        <a class="btn btn-sm btn-outline-secondary" href="index.php?salir=1">Salir</a>
      </div>
    </div>
  </nav>

  <main class="container py-4">
    <div class="row g-3 mb-4">
      <div class="col-md-3">
        <div class="card text-center"><div class="card-body">
          <div class="display-6 fw-bold"><?= count($evals) ?></div>
          <div class="text-secondary">respuestas totales</div>
        </div></div>
      </div>
      <div class="col-md-3">
        <div class="card text-center"><div class="card-body">
          <div class="display-6 fw-bold"><?= count($porSesion) ?></div>
          <div class="text-secondary">sesiones con datos</div>
        </div></div>
      </div>
      <div class="col-md-3">
        <div class="card text-center"><div class="card-body">
          <?php
            $todas = 0; $n = 0;
            foreach ($porSesion as $s) { foreach ($criterios as $k => $_) { $todas += $s['sumas'][$k]; } $n += $s['n'] * count($criterios); }
            $global = $n ? round($todas / $n, 2) : 0;
          ?>
          <div class="display-6 fw-bold"><?= $global ?>/5</div>
          <div class="text-secondary">promedio global</div>
        </div></div>
      </div>
      <div class="col-md-3">
        <div class="card text-center"><div class="card-body">
          <?php $quejas = count(array_filter($evals, function ($e) { return !empty($e['quejas']); })); ?>
          <div class="display-6 fw-bold"><?= $quejas ?></div>
          <div class="text-secondary">quejas registradas</div>
        </div></div>
      </div>
    </div>

    <div class="card mb-4">
      <div class="card-body">
        <h2 class="h5 fw-bold mb-3">Promedios por sesión (todas las sesiones, una sola fuente)</h2>
        <?php if (!$porSesion): ?>
          <div class="text-secondary">Aún no hay respuestas.</div>
        <?php else: ?>
        <div class="table-responsive">
          <table class="table table-sm align-middle">
            <thead>
              <tr>
                <th>Sesión</th><th>Respuestas</th>
                <?php foreach ($criterios as $label): ?><th><?= h($label) ?></th><?php endforeach; ?>
                <th style="min-width:140px">Promedio</th>
              </tr>
            </thead>
            <tbody>
              <?php foreach ($porSesion as $num => $s):
                $proms = [];
                foreach ($criterios as $k => $_) { $proms[$k] = prom($s, $k); }
                $pGeneral = round(array_sum($proms) / count($proms), 2);
              ?>
              <tr>
                <td><a href="?sesion=<?= $num ?>">Semana <?= $num ?></a></td>
                <td><?= $s['n'] ?></td>
                <?php foreach ($proms as $p): ?>
                  <td class="<?= $p < 3 ? 'text-danger fw-bold' : '' ?>"><?= $p ?></td>
                <?php endforeach; ?>
                <td>
                  <div class="d-flex align-items-center gap-2">
                    <div class="bar flex-grow-1"><span style="width: <?= $pGeneral / 5 * 100 ?>%"></span></div>
                    <span class="fw-semibold"><?= $pGeneral ?></span>
                  </div>
                </td>
              </tr>
              <?php endforeach; ?>
            </tbody>
          </table>
        </div>
        <?php endif; ?>
      </div>
    </div>

    <div class="card mb-4">
      <div class="card-body">
        <div class="d-flex align-items-center justify-content-between flex-wrap gap-2 mb-3">
          <h2 class="h5 fw-bold mb-0">Comentarios (<?= count($visibles) ?>)</h2>
          <form method="get" class="d-flex gap-2">
            <select class="form-select form-select-sm" name="sesion" onchange="this.form.submit()">
              <option value="">Todas las sesiones</option>
              <?php for ($i = 1; $i <= 18; $i++): ?>
                <option value="<?= $i ?>" <?= $filtro === $i ? 'selected' : '' ?>>Semana <?= $i ?></option>
              <?php endfor; ?>
            </select>
          </form>
        </div>

        <?php if (!$visibles): ?>
          <div class="text-secondary">Sin respuestas para este filtro.</div>
        <?php endif; ?>

        <?php foreach (array_reverse($visibles) as $e): ?>
          <div class="comment-card border">
            <div class="d-flex justify-content-between flex-wrap">
              <span class="fw-semibold">Semana <?= (int) $e['sesion'] ?></span>
              <span class="text-secondary small"><?= h(substr($e['fecha'], 0, 16)) ?> UTC · <?= h($e['id']) ?></span>
            </div>
            <div class="small text-secondary mb-2">
              <?php foreach ($criterios as $k => $label): ?>
                <?= h($label) ?>: <strong><?= (int) ($e['puntajes'][$k] ?? 0) ?></strong> ·
              <?php endforeach; ?>
            </div>
            <?php if (!empty($e['lo_mejor'])): ?>
              <div class="comment-card mejor mb-1">👍 <?= h($e['lo_mejor']) ?></div>
            <?php endif; ?>
            <?php if (!empty($e['sugerencias'])): ?>
              <div class="comment-card sugerencia mb-1">💡 <?= h($e['sugerencias']) ?></div>
            <?php endif; ?>
            <?php if (!empty($e['quejas'])): ?>
              <div class="comment-card queja mb-0">⚠ <?= h($e['quejas']) ?></div>
            <?php endif; ?>
          </div>
        <?php endforeach; ?>
      </div>
    </div>

    <div class="text-secondary small">
      Fuente única de datos: <code>data/evaluaciones.json</code> · Anónimo por diseño (no se registra IP ni identidad).
    </div>
  </main>
<?php endif; ?>

</body>
</html>
