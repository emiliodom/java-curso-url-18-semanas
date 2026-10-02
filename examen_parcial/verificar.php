<?php
/**
 * Paso 1 del examen: verifica cuántos intentos le quedan a un carné y,
 * si puede, le entrega las preguntas SIN la clave de respuestas.
 *
 * POST { carne, nombre }
 * ->  { ok, intentos_usados, intentos_maximos, minutos, examen: {...} }
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
    responder(['ok' => false, 'error' => 'Escribe un carné válido (entre 3 y 20 letras o números).'], 400);
}

$nombre = limpiar_texto($in['nombre'] ?? '');
if ($nombre === '') {
    responder(['ok' => false, 'error' => 'Escribe tu nombre completo.'], 400);
}

$doc = leer_almacen();
$usados = contar_intentos($doc, $carne);

if ($usados >= INTENTOS_MAXIMOS) {
    responder([
        'ok' => false,
        'agotado' => true,
        'intentos_usados' => $usados,
        'intentos_maximos' => INTENTOS_MAXIMOS,
        'error' => 'Este carné ya usó sus ' . INTENTOS_MAXIMOS . ' intentos. Si crees que es un error, avísale al profesor.',
    ], 403);
}

// --- Preparar el examen SIN respuestas correctas ---
$def = examen_definicion();
$secciones = [];

foreach ($def['secciones'] as $sec) {
    $preguntas = [];
    foreach ($sec['preguntas'] as $p) {
        // Se barajan las opciones, pero cada una conserva su id ('a','b','c'),
        // que es lo que se envía de regreso. Así dos estudiantes ven distinto
        // orden y "la respuesta es la B" no significa nada.
        $ids = array_keys($p['opciones']);
        shuffle($ids);
        $opciones = [];
        foreach ($ids as $id) {
            $opciones[] = ['id' => $id, 'texto' => $p['opciones'][$id]];
        }
        $preguntas[] = [
            'id'       => $p['id'],
            'texto'    => $p['texto'],
            'opciones' => $opciones,
        ];
    }
    $secciones[] = [
        'id'                  => $sec['id'],
        'nombre'              => $sec['nombre'],
        'descripcion'         => $sec['descripcion'],
        'puntos_por_pregunta' => $sec['puntos_por_pregunta'],
        'preguntas'           => $preguntas,
    ];
}

responder([
    'ok'               => true,
    'carne'            => $carne,
    'nombre'           => $nombre,
    'intentos_usados'  => $usados,
    'intentos_maximos' => INTENTOS_MAXIMOS,
    'intento_actual'   => $usados + 1,
    'minutos'          => $def['minutos'],
    'maximo'           => examen_puntaje_maximo(),
    'examen'           => ['titulo' => $def['titulo'], 'secciones' => $secciones],
]);
