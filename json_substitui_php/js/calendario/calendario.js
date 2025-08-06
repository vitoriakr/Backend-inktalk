
document.querySelectorAll(".botao-dia").forEach(botao => {
  botao.addEventListener("click", () => {
    const dia = botao.dataset.dia;
    const cor = getComputedStyle(botao).backgroundColor;

    const usuario = JSON.parse(localStorage.getItem("usuario_logado"));
    const key = `calendario_${usuario.email}`;

    const calendario = JSON.parse(localStorage.getItem(key) || "{}");
    calendario[dia] = cor;
    localStorage.setItem(key, JSON.stringify(calendario));

    botao.style.backgroundColor = cor;
  });
});
