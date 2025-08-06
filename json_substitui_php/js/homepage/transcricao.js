
document.getElementById("btnLerTexto").addEventListener("click", () => {
  const texto = document.getElementById("textoParaLer").innerText;
  const voice_id = "default"; // substitua pelo seu voice_id real
  const api_key = "SUA_API_KEY_AQUI"; // substitua pela sua API key da ElevenLabs

  fetch(`https://api.elevenlabs.io/v1/text-to-speech/${voice_id}/stream`, {
    method: "POST",
    headers: {
      "xi-api-key": api_key,
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      text: texto,
      model_id: "eleven_monolingual_v1"
    })
  })
  .then(res => res.blob())
  .then(blob => {
    const url = URL.createObjectURL(blob);
    const audio = new Audio(url);
    audio.play();
  });
});
