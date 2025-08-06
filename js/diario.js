
document.getElementById("btnSalvarDiario").addEventListener("click", () => {
  const texto = document.getElementById("textoDiario").value;
  const data = document.getElementById("dataDiario").value;

  fetch("/diario/save_entry.php", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ data, texto })
  })
  .then(res => res.json())
  .then(data => {
    if (data.status === "salvo") {
      alert("Texto salvo com sucesso!");
    } else {
      alert("Erro ao salvar.");
    }
  });
});
