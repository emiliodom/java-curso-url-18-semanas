<?php
/** Descarga el JSON completo (requiere sesión de admin activa). */
session_start();
require __DIR__ . '/../config.php';

if (empty($_SESSION['admin_ok'])) {
    http_response_code(403);
    exit('Acceso denegado. Inicia sesión en el panel /admin.');
}

$dataFile = __DIR__ . '/../data/evaluaciones.json';
if (!file_exists($dataFile)) {
    http_response_code(404);
    exit('Aún no hay datos.');
}

header('Content-Type: application/json; charset=utf-8');
header('Content-Disposition: attachment; filename="evaluaciones_' . date('Y-m-d') . '.json"');
readfile($dataFile);
