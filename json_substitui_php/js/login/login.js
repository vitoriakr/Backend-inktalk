
document.getElementById("btnLogin").addEventListener("click", () => {
  const email = document.getElementById("email").value;
  const senha = document.getElementById("senha").value;

  const usuarios = JSON.parse(localStorage.getItem("usuarios") || "[]");
  const user = usuarios.find(u => u.email === email && u.senha === senha);

  if (user) {
    localStorage.setItem("usuario_logado", JSON.stringify(user));
    window.location.href = "/homepage/homepage.html";
  } else {
    alert("Login inválido!");
  }
});
