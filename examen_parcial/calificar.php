<?php
/**
 * Paso 2 del examen: recibe las respuestas, las califica EN EL SERVIDOR
 * (la clave nunca sale de examen_datos.php) y guarda el intento.
 *
 * POST { carne, nombre, respuestas: {p1:'a', p2:'c', ...}, duracion_seg }
 * ->  { ok, punteo, maximo, porcentaje, secciones: [...], detalle: {...}, intento }
 *
 * El límite de intentos se aplica AQUÍ, del lado del servidor: aunque alguien
 * manipule la página, un tercer intento no se registra.
 */

require_once __DIR__ . '/examen_datos.php';
require_once __DIR__ . '/comun.php';

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    responder(['ok' => false, 'error' => 'Método no permitido'], 405);
}

$in = json_decode(file_get_contents('php://input'), true);
if (!is_array($in)) {
    responder(['ok' => false, 'error' => 'Solicitud inválida'], 400);
}

$carne = normalizar_carne($in['carne'] ?? '');
if ($carne === '') {
    responder(['ok' => false, 'error' => 'Carné inválido.'], 400);
}
$nombre    = limpiar_texto($in['nombre'] ?? '');
$recibidas = isset($in['respuestas']) && is_array($in['respuestas']) ? $in['respuestas'] : [];
$duracion  = isset($in['duracion_seg']) ? max(0, (int) $in['duracion_seg']) : null;

list($fp, $doc) = abrir_almacen();
if (!$fp) {
    responder(['ok' => false, 'error' => 'No se pudo abrir el almacén de datos.'], 500);
}

$usados = contar_intentos($doc, $carne);
if ($usados >= INTENTOS_MAXIMOS) {
    flock($fp, LOCK_UN);
    fclose($fp);
    responder([
        'ok' => false,
        'agotado' => true,
        'error' => 'Este carné ya usó sus ' . INTENTOS_MAXIMOS . ' intentos.',
    ], 403);
}

// --- Calificación ---
$def = examen_definicion();
$detalle       = [];
$resumenSecc   = [];
$punteoTotal   = 0.0;
$totalCorrectas = 0;
$totalPreguntas = 0;

foreach ($def['secciones'] as $sec) {
    $correctasSec = 0;
    foreach ($sec['preguntas'] as $p) {
        $totalPreguntas++;
        $marcada = isset($recibidas[$p['id']]) ? (string) $recibidas[$p['id']] : '';
        $acerto  = ($marcada !== '' && $marcada === $p['correcta']);
        if ($acerto) {
            $correctasSec++;
            $totalCorrectas++;
        }
        // Se informa si acertó o no, pero NUNCA cuál era la correcta:
        // el segundo intento debe seguir siendo un examen.
        $detalle[$p['id']] = [
            'correcta'  => $acerto,
            'respondio' => $marcada !== '',
        ];
    }
    $puntosSec = round($correctasSec * $sec['puntos_por_pregunta'], 2);
    $punteoTotal += $puntosSec;
    $resumenSecc[] = [
        'id'        => $sec['id'],
        'nombre'    => $sec['nombre'],
        'correctas' => $correctasSec,
        'total'     => count($sec['preguntas']),
        'puntos'    => $puntosSec,
        'maximo'    => round(count($sec['preguntas']) * $sec['puntos_por_pregunta'], 2),
    ];
}

$maximo     = examen_puntaje_maximo();
$punteoTotal = round($punteoTotal, 2);
$porcentaje  = $maximo > 0 ? round(($punteoTotal / $maximo) * 100) : 0;
$intentoNum  = $usados + 1;

$registro = [
    'id'            => 'ex_' . bin2hex(random_bytes(6)),
    'fecha'         => gmdate('c'),
    'carne'         => $carne,
    'nombre'        => $nombre,
    'intento'       => $intentoNum,
    'punteo'        => $punteoTotal,
    'maximo'        => $maximo,
    'porcentaje'    => $porcentaje,
    'correctas'     => $totalCorrectas,
    'preguntas'     => $totalPreguntas,
    'secciones'     => $resumenSecc,
    'respuestas'    => $recibidas,   // queda registro de lo que marcó, para revisión
    'duracion_seg'  => $duracion,
];

$doc['intentos'][] = $registro;
$doc['maximo'] = $maximo;
cerrar_almacen($fp, $doc);

responder([
    'ok'               => true,
    'intento'          => $intentoNum,
    'intentos_maximos' => INTENTOS_MAXIMOS,
    'restantes'        => INTENTOS_MAXIMOS - $intentoNum,
    'punteo'           => $punteoTotal,
    'maximo'           => $maximo,
    'porcentaje'       => $porcentaje,
    'correctas'        => $totalCorrectas,
    'preguntas'        => $totalPreguntas,
    'secciones'        => $resumenSecc,
    'detalle'          => $detalle,
]);
