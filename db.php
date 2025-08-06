
<?php
$host = 'localhost';
$db = 'meu_projeto';
$user = 'root';
$pass = '';

try {
    $pdo = new PDO("mysql:host=$host;dbname=$db", $user, $pass);
} catch (PDOException $e) {
    die("Erro de conexão: " . $e->getMessage());
}
?>
