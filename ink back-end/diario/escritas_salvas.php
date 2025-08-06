
<?php
session_start();
require '../db.php';

if (!isset($_SESSION['usuario_id'])) {
    http_response_code(401);
    exit("Não autorizado");
}

$data = json_decode(file_get_contents("php://input"), true);
$dia = $data['data'];
$texto = $data['texto'];
$usuario_id = $_SESSION['usuario_id'];

$stmt = $pdo->prepare("REPLACE INTO diario (usuario_id, data, texto) VALUES (?, ?, ?)");
$stmt->execute([$usuario_id, $dia, $texto]);

echo json_encode(["status" => "salvo"]);
?>
