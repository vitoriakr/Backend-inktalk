
<?php
$api_key = 'sk_cd32d0d364f4745b95f6d0d3a5d0447c58cb947d79016b97'; 
$voice_id = $_GET['voice_id'] ?? 'default-voice-id';

$text = $_POST['text'] ?? 'Olá, mundo!';

$ch = curl_init("https://api.elevenlabs.io/v1/text-to-speech/$voice_id/stream");
curl_setopt($ch, CURLOPT_HTTPHEADER, [
    "xi-api-key: $api_key",
    "Content-Type: application/json"
]);
curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode([
    "text" => $text,
    "model_id" => "eleven_monolingual_v1"
]));
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);

$response = curl_exec($ch);
curl_close($ch);

header('Content-Type: audio/mpeg');
echo $response;
?>
