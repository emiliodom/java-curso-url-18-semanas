<?php
/**
 * Descarga de resultados del examen parcial (JSON completo o CSV de notas).
 * Requiere haber iniciado sesión en el panel.
 */

session_start();
require_once __DIR__ . '/../examen_datos.php';
require_once __DIR__ . '/../comun.php';

if (empty($_SESSION['examen_admin'])) {
    http_response_code(403);
    echo 'No autorizado. Entra primero al panel.';
    exit;
}

$formato = $_GET['formato'] ?? 'json';
$doc = leer_almacen();

if ($formato === 'json') {
    header('Content-Type: application/json; charset=utf-8');
    header('Content-Disposition: attachment; filename="examen_parcial_s9.json"');
    echo json_encode($doc, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);
    exit;
}

// --- CSV: una fila por carné, con los dos intentos y la nota ---
$porCarne = [];
foreach ($doc['intentos'] as $i) {
    $c = $i['carne'] ?? '?';
    if (!isset($porCarne[$c])) {
        $porCarne[$c] = ['nombre' => '', 'i1' => null, 'i2' => null];
    }
    if (!empty($i['nombre'])) {
        $porCarne[$c]['nombre'] = $i['nombre'];
    }
    if (($i['intento'] ?? 0) === 1) $porCarne[$c]['i1'] = $i;
    if (($i['intento'] ?? 0) === 2) $porCarne[$c]['i2'] = $i;
}
ksort($porCarne);

header('Content-Type: text/csv; charset=utf-8');
header('Content-Disposition: attachment; filename="examen_parcial_s9.csv"');

$salida = fopen('php://output', 'w');
fwrite($salida, "\xEF\xBB\xBF"); // BOM, para que Excel lea bien las tildes

/**
 * Escribe una fila del CSV.
 * El separador, el delimitador y el carácter de escape se pasan SIEMPRE de forma
 * explícita: desde PHP 8.4 omitirlos genera un aviso de "Deprecated" que se
 * escribiría dentro del propio archivo y lo dejaría corrupto.
 */
function fila_csv($handle, array $campos) {
    fputcsv($handle, $campos, ',', '"', '');
}

fila_csv($salida, ['Carne', 'Nombre', 'Intento 1', 'Intento 2', 'Nota', 'Maximo', 'Intentos usados']);

foreach ($porCarne as $carne => $r) {
    $p1 = $r['i1']['punteo'] ?? null;
    $p2 = $r['i2']['punteo'] ?? null;
    $punteos = array_filter([$p1, $p2], function ($v) { return $v !== null; });

    if (NOTA_QUE_CUENTA === 'primero') {
        $nota = $p1 !== null ? $p1 : ($p2 !== null ? $p2 : 0);
    } elseif (NOTA_QUE_CUENTA === 'ultimo') {
        $nota = $p2 !== null ? $p2 : ($p1 !== null ? $p1 : 0);
    } else {
        $nota = $punteos ? max($punteos) : 0;
    }

    fila_csv($salida, [
        $carne,
        $r['nombre'],
        $p1 !== null ? number_format($p1, 2, '.', '') : '',
        $p2 !== null ? number_format($p2, 2, '.', '') : '',
        number_format($nota, 2, '.', ''),
        examen_puntaje_maximo(),
        count($punteos),
    ]);
}
fclose($salida);
