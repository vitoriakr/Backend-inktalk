
document.getElementById("btnRegister").addEventListener("click", () => {
  const email = document.getElementById("email").value;
  const senha = document.getElementById("senha").value;

  const usuarios = JSON.parse(localStorage.getItem("usuarios") || "[]");

  if (usuarios.find(u => u.email === email)) {
    alert("Usuário já existe!");
    return;
  }

  usuarios.push({ email, senha });
  localStorage.setItem("usuarios", JSON.stringify(usuarios));

  alert("Cadastro realizado!");
  window.location.href = "/login/login.html";
});
