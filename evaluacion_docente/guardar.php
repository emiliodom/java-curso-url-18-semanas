<?php
/**
 * Recibe la evaluación anónima (JSON por POST) y la agrega a data/evaluaciones.json
 * — UN SOLO archivo para las 18 sesiones (única fuente de información).
 *
 * Anonimato: NO se guarda IP, user-agent, cookies ni ningún dato identificable.
 */

header('Content-Type: application/json; charset=utf-8');

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['ok' => false, 'error' => 'Método no permitido']);
    exit;
}

$raw = file_get_contents('php://input');
$in  = json_decode($raw, true);

if (!is_array($in)) {
    http_response_code(400);
    echo json_encode(['ok' => false, 'error' => 'JSON inválido']);
    exit;
}

// Honeypot anti-bots: si el campo oculto viene lleno, fingimos éxito y descartamos.
if (!empty($in['sitio_web'])) {
    echo json_encode(['ok' => true]);
    exit;
}

// --- Validación ---
$sesion = isset($in['sesion']) ? (int) $in['sesion'] : 0;
if ($sesion < 1 || $sesion > 18) {
    http_response_code(400);
    echo json_encode(['ok' => false, 'error' => 'Sesión inválida (1–18)']);
    exit;
}

$criterios = ['claridad', 'ritmo', 'utilidad', 'dominio', 'ambiente'];
$puntajes  = [];
foreach ($criterios as $c) {
    $v = isset($in['puntajes'][$c]) ? (int) $in['puntajes'][$c] : 0;
    if ($v < 1 || $v > 5) {
        http_response_code(400);
        echo json_encode(['ok' => false, 'error' => "Falta calificar: $c"]);
        exit;
    }
    $puntajes[$c] = $v;
}

function limpiar_texto($t) {
    $t = is_string($t) ? trim($t) : '';
    $t = strip_tags($t);
    // mb_substr si existe (respeta tildes); si no, substr normal
    return function_exists('mb_substr') ? mb_substr($t, 0, 1500) : substr($t, 0, 1500);
}

$registro = [
    'id'          => 'ev_' . bin2hex(random_bytes(6)),
    'fecha'       => gmdate('c'),           // hora del servidor, no del cliente
    'sesion'      => $sesion,
    'puntajes'    => $puntajes,
    'lo_mejor'    => limpiar_texto($in['lo_mejor'] ?? ''),
    'sugerencias' => limpiar_texto($in['sugerencias'] ?? ''),
    'quejas'      => limpiar_texto($in['quejas'] ?? ''),
];

// --- Guardado con bloqueo de archivo ---
$dataDir  = __DIR__ . '/data';
$dataFile = $dataDir . '/evaluaciones.json';

if (!is_dir($dataDir)) {
    mkdir($dataDir, 0755, true);
}

$fp = fopen($dataFile, 'c+');
if (!$fp || !flock($fp, LOCK_EX)) {
    http_response_code(500);
    echo json_encode(['ok' => false, 'error' => 'No se pudo abrir el almacén de datos']);
    exit;
}

$contenido = stream_get_contents($fp);
$doc = json_decode($contenido, true);
if (!is_array($doc) || !isset($doc['evaluaciones'])) {
    $doc = [
        'curso'        => 'Programación I — formato 18 semanas',
        'descripcion'  => 'Evaluaciones anónimas del profesor, sugerencias y quejas. Una sola fuente para todas las sesiones.',
        'evaluaciones' => [],
    ];
}

$doc['evaluaciones'][] = $registro;
$doc['total'] = count($doc['evaluaciones']);
$doc['actualizado'] = gmdate('c');

ftruncate($fp, 0);
rewind($fp);
fwrite($fp, json_encode($doc, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE));
fflush($fp);
flock($fp, LOCK_UN);
fclose($fp);

echo json_encode(['ok' => true]);
