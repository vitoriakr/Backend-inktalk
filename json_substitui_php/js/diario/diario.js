
document.getElementById("btnSalvarDiario").addEventListener("click", () => {
  const data = document.getElementById("dataDiario").value;
  const texto = document.getElementById("textoDiario").value;

  const usuario = JSON.parse(localStorage.getItem("usuario_logado"));
  const key = `diario_${usuario.email}`;

  const diario = JSON.parse(localStorage.getItem(key) || "{}");
  diario[data] = texto;
  localStorage.setItem(key, JSON.stringify(diario));

  alert("Texto salvo!");
});
