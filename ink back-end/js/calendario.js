
document.querySelectorAll(".botao-dia").forEach(botao => {
  botao.addEventListener("click", () => {
    const dia = botao.dataset.dia;
    const cor = getComputedStyle(botao).backgroundColor;

    fetch("/calendario/save_day_color.php", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ data: dia, cor })
    })
    .then(res => res.json())
    .then(data => {
      if (data.status === "salvo") {
        botao.style.backgroundColor = cor;
      } else {
        alert("Erro ao salvar.");
      }
    });
  });
});
