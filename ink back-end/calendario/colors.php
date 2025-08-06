
<?php
session_start();
require '../db.php';

if (!isset($_SESSION['usuario_id'])) {
    http_response_code(401);
    exit("Não autorizado");
}

$data = json_decode(file_get_contents("php://input"), true);
$dia = $data['data'];
$cor = $data['cor'];
$usuario_id = $_SESSION['usuario_id'];

$stmt = $pdo->prepare("REPLACE INTO calendario (usuario_id, data, cor) VALUES (?, ?, ?)");
$stmt->execute([$usuario_id, $dia, $cor]);

echo json_encode(["status" => "salvo"]);
?>
