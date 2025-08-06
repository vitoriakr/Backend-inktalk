
document.getElementById("btnLerTexto").addEventListener("click", () => {
  const texto = document.getElementById("textoParaLer").innerText;

  fetch("/api/transcricao.php", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ text: texto })
  })
  .then(res => res.blob())
  .then(blob => {
    const url = URL.createObjectURL(blob);
    const audio = new Audio(url);
    audio.play();
  });
});
