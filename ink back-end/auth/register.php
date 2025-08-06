
<?php
require '../db.php';
$data = json_decode(file_get_contents("php://input"), true);
$email = $data['email'];
$senha = password_hash($data['senha'], PASSWORD_DEFAULT);

$stmt = $pdo->prepare("INSERT INTO usuarios (email, senha) VALUES (?, ?)");
try {
    $stmt->execute([$email, $senha]);
    echo json_encode(["status" => "ok"]);
} catch (PDOException $e) {
    echo json_encode(["status" => "erro", "mensagem" => $e->getMessage()]);
}
?>
