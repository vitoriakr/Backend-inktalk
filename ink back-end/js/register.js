
document.getElementById("btnRegister").addEventListener("click", () => {
  const email = document.getElementById("email").value;
  const senha = document.getElementById("senha").value;

  fetch("/auth/register.php", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, senha })
  })
  .then(res => res.json())
  .then(data => {
    if (data.status === "ok") {
      alert("Cadastro realizado com sucesso!");
      window.location.href = "/login/login.html";
    } else {
      alert("Erro ao cadastrar: " + data.mensagem);
    }
  });
});
