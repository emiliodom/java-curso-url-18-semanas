<?php
/**
 * Funciones compartidas por verificar.php, calificar.php y el panel /admin.
 */

require_once __DIR__ . '/config.php';

define('DATA_DIR',  __DIR__ . '/data');
define('DATA_FILE', DATA_DIR . '/intentos.json');

/** Normaliza el carné: sin espacios, en mayúsculas. Devuelve '' si es inválido. */
function normalizar_carne($valor) {
    $c = is_string($valor) ? trim($valor) : '';
    $c = strtoupper(preg_replace('/\s+/', '', $c));
    if (!preg_match('/^[A-Z0-9\-]{3,20}$/', $c)) {
        return '';
    }
    return $c;
}

/** Limpia un texto libre (nombre del estudiante). */
function limpiar_texto($t, $max = 120) {
    $t = is_string($t) ? trim(strip_tags($t)) : '';
    return function_exists('mb_substr') ? mb_substr($t, 0, $max) : substr($t, 0, $max);
}

/** Abre el almacén con bloqueo exclusivo. Devuelve [handle, documento]. */
function abrir_almacen() {
    if (!is_dir(DATA_DIR)) {
        mkdir(DATA_DIR, 0755, true);
    }
    $fp = fopen(DATA_FILE, 'c+');
    if (!$fp || !flock($fp, LOCK_EX)) {
        return [null, null];
    }
    $contenido = stream_get_contents($fp);
    $doc = json_decode($contenido, true);
    if (!is_array($doc) || !isset($doc['intentos'])) {
        $doc = [
            'curso'       => 'Programación I — formato 18 semanas',
            'examen'      => 'Examen parcial — Semana 9 (unidades 1 a 4)',
            'maximo'      => examen_puntaje_maximo(),
            'intentos'    => [],
            'total'       => 0,
            'actualizado' => gmdate('c'),
        ];
    }
    return [$fp, $doc];
}

/** Escribe el documento y libera el bloqueo. */
function cerrar_almacen($fp, $doc) {
    $doc['total'] = count($doc['intentos']);
    $doc['actualizado'] = gmdate('c');
    ftruncate($fp, 0);
    rewind($fp);
    fwrite($fp, json_encode($doc, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE));
    fflush($fp);
    flock($fp, LOCK_UN);
    fclose($fp);
}

/** Lee el almacén sin bloquear (solo lectura). */
function leer_almacen() {
    if (!file_exists(DATA_FILE)) {
        return ['intentos' => []];
    }
    $doc = json_decode(file_get_contents(DATA_FILE), true);
    return is_array($doc) && isset($doc['intentos']) ? $doc : ['intentos' => []];
}

/** Cuenta cuántos intentos ya usó un carné dentro de un documento ya cargado. */
function contar_intentos($doc, $carne) {
    $n = 0;
    foreach ($doc['intentos'] as $i) {
        if (isset($i['carne']) && $i['carne'] === $carne) {
            $n++;
        }
    }
    return $n;
}

/** Responde JSON y termina. */
function responder($datos, $codigo = 200) {
    http_response_code($codigo);
    header('Content-Type: application/json; charset=utf-8');
    echo json_encode($datos, JSON_UNESCAPED_UNICODE);
    exit;
}
