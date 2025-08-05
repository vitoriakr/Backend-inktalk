
<?php
session_start();
require '../db.php';

$data = json_decode(file_get_contents("php://input"), true);
$email = $data['email'];
$senha = $data['senha'];

$stmt = $pdo->prepare("SELECT * FROM usuarios WHERE email = ?");
$stmt->execute([$email]);
$user = $stmt->fetch();

if ($user && password_verify($senha, $user['senha'])) {
    $_SESSION['usuario_id'] = $user['id'];
    echo json_encode(["status" => "logado"]);
} else {
    echo json_encode(["status" => "erro"]);
}
?>
