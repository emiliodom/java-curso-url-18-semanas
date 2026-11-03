<?php
declare(strict_types=1);

header('Content-Type: application/json; charset=utf-8');
header('Cache-Control: no-store, private');
header('X-Content-Type-Options: nosniff');
header('Referrer-Policy: no-referrer');

function respond(int $status, array $body): void
{
    http_response_code($status);
    echo json_encode($body, JSON_UNESCAPED_UNICODE | JSON_INVALID_UTF8_SUBSTITUTE);
    exit;
}

function text_value($value, int $maxLength): string
{
    if (!is_string($value)) {
        return '';
    }
    $value = trim(strip_tags($value));
    if (function_exists('mb_substr')) {
        return mb_substr($value, 0, $maxLength, 'UTF-8');
    }
    return substr($value, 0, $maxLength);
}

function valid_id($value): string
{
    if (!is_string($value) || !preg_match('/^[a-zA-Z0-9_-]{1,60}$/', $value)) {
        return '';
    }
    return $value;
}

function default_state(): array
{
    return [
        'version' => 1,
        'teamName' => '',
        'projectName' => '',
        'reviewPeriod' => '',
        'meetingDate' => date('Y-m-d'),
        'norms' => ['process' => false, 'equalVoice' => false, 'confidentiality' => false, 'closingConfirm' => false],
        'cards' => [],
        'themes' => [
            ['id' => bin2hex(random_bytes(8)), 'title' => 'Fortalezas a repetir'],
            ['id' => bin2hex(random_bytes(8)), 'title' => 'Fricciones del proceso'],
            ['id' => bin2hex(random_bytes(8)), 'title' => 'Preguntas abiertas'],
        ],
        'insight' => '',
        'votes' => new stdClass(),
        'actions' => [],
        'confidence' => 0,
        'takeaway' => '',
        'elapsedSeconds' => 0,
        'timerRunning' => false,
        'currentStep' => 0,
    ];
}

function sanitize_state($value): array
{
    if (!is_array($value)) {
        respond(400, ['ok' => false, 'error' => 'El contenido de la retrospectiva no es válido.']);
    }

    $state = default_state();
    $state['teamName'] = text_value($value['teamName'] ?? '', 80);
    $state['projectName'] = text_value($value['projectName'] ?? '', 120);
    $state['reviewPeriod'] = text_value($value['reviewPeriod'] ?? '', 120);
    $meetingDate = text_value($value['meetingDate'] ?? '', 10);
    $state['meetingDate'] = preg_match('/^\d{4}-\d{2}-\d{2}$/', $meetingDate) ? $meetingDate : date('Y-m-d');
    $state['insight'] = text_value($value['insight'] ?? '', 1200);
    $state['takeaway'] = text_value($value['takeaway'] ?? '', 1200);
    $state['currentStep'] = isset($value['currentStep']) ? max(0, min(5, (int) $value['currentStep'])) : 0;
    $state['elapsedSeconds'] = isset($value['elapsedSeconds']) ? max(0, min(10800, (int) $value['elapsedSeconds'])) : 0;
    $state['timerRunning'] = !empty($value['timerRunning']);

    $norms = isset($value['norms']) && is_array($value['norms']) ? $value['norms'] : [];
    foreach (['process', 'equalVoice', 'confidentiality', 'closingConfirm'] as $name) {
        $state['norms'][$name] = !empty($norms[$name]);
    }

    $allowedCategories = ['keep', 'change', 'questions'];
    $cardIds = [];
    $cards = isset($value['cards']) && is_array($value['cards']) ? array_slice($value['cards'], 0, 40) : [];
    foreach ($cards as $card) {
        if (!is_array($card)) {
            continue;
        }
        $id = valid_id($card['id'] ?? '');
        $category = $card['category'] ?? '';
        if ($id === '' || !in_array($category, $allowedCategories, true) || isset($cardIds[$id])) {
            continue;
        }
        $cardIds[$id] = true;
        $state['cards'][] = [
            'id' => $id,
            'text' => text_value($card['text'] ?? '', 240),
            'category' => $category,
            'themeId' => valid_id($card['themeId'] ?? ''),
        ];
    }

    $themeIds = [];
    $themes = isset($value['themes']) && is_array($value['themes']) ? array_slice($value['themes'], 0, 12) : [];
    $state['themes'] = [];
    foreach ($themes as $theme) {
        if (!is_array($theme)) {
            continue;
        }
        $id = valid_id($theme['id'] ?? '');
        if ($id === '' || isset($themeIds[$id])) {
            continue;
        }
        $themeIds[$id] = true;
        $state['themes'][] = ['id' => $id, 'title' => text_value($theme['title'] ?? '', 70)];
    }
    foreach ($state['cards'] as &$card) {
        if (!isset($themeIds[$card['themeId']])) {
            $card['themeId'] = '';
        }
    }
    unset($card);

    $votes = isset($value['votes']) && is_array($value['votes']) ? $value['votes'] : [];
    $cleanVotes = [];
    $voteTotal = 0;
    foreach ($votes as $id => $count) {
        $id = valid_id((string) $id);
        $count = (int) $count;
        if (!isset($cardIds[$id]) || $count < 1 || $voteTotal >= 3) {
            continue;
        }
        $cleanVotes[$id] = 1;
        $voteTotal++;
    }
    $state['votes'] = (object) $cleanVotes;

    $actions = isset($value['actions']) && is_array($value['actions']) ? array_slice($value['actions'], 0, 3) : [];
    $actionIds = [];
    foreach ($actions as $action) {
        if (!is_array($action)) {
            continue;
        }
        $id = valid_id($action['id'] ?? '');
        if ($id === '' || isset($actionIds[$id])) {
            continue;
        }
        $actionIds[$id] = true;
        $due = text_value($action['due'] ?? '', 10);
        $state['actions'][] = [
            'id' => $id,
            'task' => text_value($action['task'] ?? '', 240),
            'owner' => text_value($action['owner'] ?? '', 100),
            'due' => preg_match('/^\d{4}-\d{2}-\d{2}$/', $due) ? $due : '',
            'measure' => text_value($action['measure'] ?? '', 400),
        ];
    }
    $confidence = isset($value['confidence']) ? (int) $value['confidence'] : 0;
    $state['confidence'] = $confidence >= 1 && $confidence <= 5 ? $confidence : 0;
    return $state;
}

if (($_SERVER['REQUEST_METHOD'] ?? '') !== 'POST') {
    header('Allow: POST');
    respond(405, ['ok' => false, 'error' => 'Método no permitido.']);
}

$contentType = strtolower(trim(explode(';', $_SERVER['CONTENT_TYPE'] ?? '')[0]));
if ($contentType !== 'application/json') {
    respond(415, ['ok' => false, 'error' => 'El contenido debe enviarse como JSON.']);
}

$raw = file_get_contents('php://input');
if ($raw === false || strlen($raw) > 65536) {
    respond(413, ['ok' => false, 'error' => 'La solicitud excede el tamaño permitido.']);
}
$request = json_decode($raw, true);
if (!is_array($request) || json_last_error() !== JSON_ERROR_NONE) {
    respond(400, ['ok' => false, 'error' => 'La solicitud JSON no es válida.']);
}

$action = $request['action'] ?? '';
if (!in_array($action, ['create', 'load', 'save', 'delete'], true)) {
    respond(400, ['ok' => false, 'error' => 'La acción solicitada no es válida.']);
}

$dataDir = __DIR__ . DIRECTORY_SEPARATOR . 'data';
if (!is_dir($dataDir) && !mkdir($dataDir, 0755, true) && !is_dir($dataDir)) {
    respond(500, ['ok' => false, 'error' => 'No se pudo preparar el almacén. Contacten a soporte técnico del sitio.']);
}
$file = $dataDir . DIRECTORY_SEPARATOR . 'sessions.json';
$handle = fopen($file, 'c+');
if ($handle === false) {
    respond(500, ['ok' => false, 'error' => 'No se pudo abrir el almacén. Revisen los permisos de escritura de mini_retro/data/.']);
}
if (!flock($handle, LOCK_EX)) {
    fclose($handle);
    respond(500, ['ok' => false, 'error' => 'No se pudo bloquear el almacén para una operación segura.']);
}

rewind($handle);
$contents = stream_get_contents($handle);
if ($contents === false) {
    flock($handle, LOCK_UN);
    fclose($handle);
    respond(500, ['ok' => false, 'error' => 'No se pudieron leer los datos guardados.']);
}
$store = $contents === '' ? ['sessions' => []] : json_decode($contents, true);
if (!is_array($store) || !isset($store['sessions']) || !is_array($store['sessions'])) {
    flock($handle, LOCK_UN);
    fclose($handle);
    respond(500, ['ok' => false, 'error' => 'El almacén está dañado; no se modificó para evitar perder datos. Contacten a soporte técnico.']);
}

$token = $request['token'] ?? '';
if ($action === 'create') {
    if (count($store['sessions']) >= 2000) {
        flock($handle, LOCK_UN);
        fclose($handle);
        respond(507, ['ok' => false, 'error' => 'El almacén alcanzó su límite. Exporten y borren sesiones antiguas, o contacten a soporte.']);
    }
    do {
        $token = bin2hex(random_bytes(24));
    } while (isset($store['sessions'][$token]));
    $now = gmdate('c');
    $store['sessions'][$token] = [
        'state' => default_state(),
        'currentStep' => 0,
        'createdAt' => $now,
        'updatedAt' => $now,
    ];
    $response = ['ok' => true, 'token' => $token, 'state' => $store['sessions'][$token]['state'], 'currentStep' => 0];
} else {
    if (!is_string($token) || !preg_match('/^[a-f0-9]{48}$/', $token)) {
        flock($handle, LOCK_UN);
        fclose($handle);
        respond(400, ['ok' => false, 'error' => 'El enlace de acceso no es válido.']);
    }
    if (!isset($store['sessions'][$token])) {
        flock($handle, LOCK_UN);
        fclose($handle);
        respond(404, ['ok' => false, 'error' => 'No se encontró la retrospectiva. Verifiquen el enlace privado.']);
    }
    if ($action === 'load') {
        $record = $store['sessions'][$token];
        flock($handle, LOCK_UN);
        fclose($handle);
        respond(200, [
            'ok' => true,
            'state' => $record['state'],
            'currentStep' => (int) ($record['currentStep'] ?? 0),
            'updatedAt' => $record['updatedAt'] ?? null,
        ]);
    }
    if ($action === 'delete') {
        unset($store['sessions'][$token]);
        $response = ['ok' => true];
    } else {
        $normalized = sanitize_state($request['state'] ?? null);
        $store['sessions'][$token] = [
            'state' => $normalized,
            'currentStep' => $normalized['currentStep'],
            'createdAt' => $store['sessions'][$token]['createdAt'] ?? gmdate('c'),
            'updatedAt' => gmdate('c'),
        ];
        $response = ['ok' => true, 'updatedAt' => $store['sessions'][$token]['updatedAt']];
    }
}

$encoded = json_encode($store, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE | JSON_INVALID_UTF8_SUBSTITUTE);
if ($encoded === false || !ftruncate($handle, 0) || !rewind($handle)) {
    flock($handle, LOCK_UN);
    fclose($handle);
    respond(500, ['ok' => false, 'error' => 'No se pudo preparar el guardado. No se confirmó la operación.']);
}
$written = fwrite($handle, $encoded);
if ($written === false || $written !== strlen($encoded) || !fflush($handle)) {
    flock($handle, LOCK_UN);
    fclose($handle);
    respond(500, ['ok' => false, 'error' => 'El guardado quedó incompleto. Mantengan la pestaña abierta y contacten a soporte técnico.']);
}
flock($handle, LOCK_UN);
fclose($handle);
respond(200, $response);
