<?php
header('Content-Type: application/json');

$arquivo = 'usuarios.json';

if (!file_exists($arquivo)) {
    echo json_encode([]);
    exit;
}

$usuarios = json_decode(file_get_contents($arquivo), true);

// Remove senha antes de exibir
foreach ($usuarios as &$usuario) {
    unset($usuario['senha']);
}

echo json_encode($usuarios, JSON_UNESCAPED_UNICODE);
?>
