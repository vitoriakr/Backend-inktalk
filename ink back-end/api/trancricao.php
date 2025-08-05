<?php
$api_key = 'sk_cd32d0d364f4745b95f6d0d3a5d0447c58cb947d79016b97'; // coloque sua API KEY
$voice_id = 'default'; // ou outro voice_id válido da ElevenLabs

$data = json_decode(file_get_contents("php://input"), true);
$text = $data['text'] ?? '';

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

// Define o tipo de retorno como áudio
header('Content-Type: audio/mpeg');
echo $response;
