<?php
/**
 * Panel del examen parcial: intentos por carné y notas.
 * Protegido con la contraseña de config.php.
 */

session_start();
require_once __DIR__ . '/../examen_datos.php';
require_once __DIR__ . '/../comun.php';

// --- Autenticación simple ---
if (isset($_GET['salir'])) {
    session_destroy();
    header('Location: index.php');
    exit;
}
if (isset($_POST['clave'])) {
    if (hash_equals(ADMIN_PASSWORD, (string) $_POST['clave'])) {
        $_SESSION['examen_admin'] = true;
    } else {
        $error = 'Contraseña incorrecta.';
    }
}
$autenticado = !empty($_SESSION['examen_admin']);

if (!$autenticado) {
    ?>
    <!doctype html>
    <html lang="es">
    <head>
      <meta charset="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <title>Examen parcial — Panel</title>
      <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" />
    </head>
    <body class="bg-light">
      <main class="container" style="max-width: 420px; margin-top: 12vh;">
        <div class="card shadow-sm">
          <div class="card-body">
            <h1 class="h5 fw-bold mb-3">Panel del examen parcial</h1>
            <?php if (!empty($error)): ?>
              <div class="alert alert-danger py-2 small"><?= htmlspecialchars($error) ?></div>
            <?php endif; ?>
            <form method="post">
              <label class="form-label small fw-semibold" for="clave">Contraseña</label>
              <input class="form-control mb-3" type="password" name="clave" id="clave" required autofocus />
              <button class="btn btn-primary w-100" type="submit">Entrar</button>
            </form>
          </div>
        </div>
      </main>
    </body>
    </html>
    <?php
    exit;
}

// --- Datos ---
$doc = leer_almacen();
$intentos = $doc['intentos'];
usort($intentos, function ($a, $b) {
    return strcmp($b['fecha'] ?? '', $a['fecha'] ?? '');
});

// Resumen por carné
$porCarne = [];
foreach ($intentos as $i) {
    $c = $i['carne'] ?? '?';
    if (!isset($porCarne[$c])) {
        $porCarne[$c] = ['carne' => $c, 'nombre' => $i['nombre'] ?? '', 'intentos' => [], 'nota' => 0];
    }
    $porCarne[$c]['intentos'][] = $i;
    if (!empty($i['nombre'])) {
        $porCarne[$c]['nombre'] = $i['nombre'];
    }
}
foreach ($porCarne as $c => &$r) {
    $punteos = array_map(function ($i) { return (float) ($i['punteo'] ?? 0); }, $r['intentos']);
    // Los intentos vienen ordenados de más reciente a más antiguo
    $ordenados = $r['intentos'];
    usort($ordenados, function ($a, $b) { return ($a['intento'] ?? 0) <=> ($b['intento'] ?? 0); });
    if (NOTA_QUE_CUENTA === 'primero') {
        $r['nota'] = (float) ($ordenados[0]['punteo'] ?? 0);
    } elseif (NOTA_QUE_CUENTA === 'ultimo') {
        $r['nota'] = (float) (end($ordenados)['punteo'] ?? 0);
    } else {
        $r['nota'] = $punteos ? max($punteos) : 0;
    }
}
unset($r);
ksort($porCarne);

$maximo = examen_puntaje_maximo();
$totalEstudiantes = count($porCarne);
$promedio = $totalEstudiantes ? array_sum(array_column($porCarne, 'nota')) / $totalEstudiantes : 0;
?>
<!doctype html>
<html lang="es">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>Examen parcial — Resultados</title>
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" />
</head>
<body class="bg-light">
  <nav class="navbar bg-white border-bottom mb-4">
    <div class="container">
      <span class="navbar-brand fw-bold">Examen parcial — Semana 9</span>
      <div class="d-flex gap-2">
        <a class="btn btn-sm btn-outline-primary" href="descargar.php?formato=csv">Descargar CSV</a>
        <a class="btn btn-sm btn-outline-secondary" href="descargar.php?formato=json">Descargar JSON</a>
        <a class="btn btn-sm btn-outline-dark" href="?salir=1">Salir</a>
      </div>
    </div>
  </nav>

  <main class="container pb-5">
    <div class="row g-3 mb-4">
      <div class="col-md-3"><div class="card"><div class="card-body">
        <div class="small text-muted">Estudiantes</div>
        <div class="h3 fw-bold mb-0"><?= $totalEstudiantes ?></div>
      </div></div></div>
      <div class="col-md-3"><div class="card"><div class="card-body">
        <div class="small text-muted">Intentos registrados</div>
        <div class="h3 fw-bold mb-0"><?= count($intentos) ?></div>
      </div></div></div>
      <div class="col-md-3"><div class="card"><div class="card-body">
        <div class="small text-muted">Promedio (de <?= $maximo ?>)</div>
        <div class="h3 fw-bold mb-0"><?= number_format($promedio, 2) ?></div>
      </div></div></div>
      <div class="col-md-3"><div class="card"><div class="card-body">
        <div class="small text-muted">Nota que cuenta</div>
        <div class="h5 fw-bold mb-0 text-capitalize"><?= htmlspecialchars(NOTA_QUE_CUENTA) ?> intento</div>
      </div></div></div>
    </div>

    <h2 class="h5 fw-bold mb-3">Resumen por carné</h2>
    <div class="table-responsive mb-5">
      <table class="table table-sm bg-white align-middle">
        <thead><tr>
          <th>Carné</th><th>Nombre</th><th class="text-center">Intentos</th>
          <th class="text-end">Intento 1</th><th class="text-end">Intento 2</th>
          <th class="text-end">Nota (de <?= $maximo ?>)</th>
        </tr></thead>
        <tbody>
        <?php if (!$porCarne): ?>
          <tr><td colspan="6" class="text-center text-muted py-4">Todavía no hay intentos registrados.</td></tr>
        <?php endif; ?>
        <?php foreach ($porCarne as $r):
            $i1 = null; $i2 = null;
            foreach ($r['intentos'] as $i) {
                if (($i['intento'] ?? 0) === 1) $i1 = $i;
                if (($i['intento'] ?? 0) === 2) $i2 = $i;
            }
        ?>
          <tr>
            <td class="fw-semibold"><?= htmlspecialchars($r['carne']) ?></td>
            <td><?= htmlspecialchars($r['nombre']) ?></td>
            <td class="text-center"><?= count($r['intentos']) ?></td>
            <td class="text-end"><?= $i1 ? number_format($i1['punteo'], 2) : '—' ?></td>
            <td class="text-end"><?= $i2 ? number_format($i2['punteo'], 2) : '—' ?></td>
            <td class="text-end fw-bold"><?= number_format($r['nota'], 2) ?></td>
          </tr>
        <?php endforeach; ?>
        </tbody>
      </table>
    </div>

    <h2 class="h5 fw-bold mb-3">Detalle de cada intento</h2>
    <div class="table-responsive">
      <table class="table table-sm bg-white align-middle">
        <thead><tr>
          <th>Fecha (UTC)</th><th>Carné</th><th>Nombre</th><th class="text-center">Intento</th>
          <th>Por sección</th><th class="text-center">Duración</th><th class="text-end">Punteo</th>
        </tr></thead>
        <tbody>
        <?php foreach ($intentos as $i): ?>
          <tr>
            <td class="small"><?= htmlspecialchars(str_replace('T', ' ', substr($i['fecha'] ?? '', 0, 16))) ?></td>
            <td class="fw-semibold"><?= htmlspecialchars($i['carne'] ?? '') ?></td>
            <td class="small"><?= htmlspecialchars($i['nombre'] ?? '') ?></td>
            <td class="text-center"><?= (int) ($i['intento'] ?? 0) ?></td>
            <td class="small">
              <?php foreach (($i['secciones'] ?? []) as $s): ?>
                <span class="badge text-bg-light border me-1">
                  <?= htmlspecialchars(strtoupper($s['id'])) ?>: <?= $s['correctas'] ?>/<?= $s['total'] ?>
                </span>
              <?php endforeach; ?>
            </td>
            <td class="text-center small">
              <?= isset($i['duracion_seg']) && $i['duracion_seg'] !== null
                    ? floor($i['duracion_seg'] / 60) . 'm ' . ($i['duracion_seg'] % 60) . 's'
                    : '—' ?>
            </td>
            <td class="text-end fw-bold"><?= number_format($i['punteo'] ?? 0, 2) ?></td>
          </tr>
        <?php endforeach; ?>
        </tbody>
      </table>
    </div>
  </main>
</body>
</html>
