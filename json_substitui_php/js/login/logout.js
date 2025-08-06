
document.getElementById("btnLogout").addEventListener("click", () => {
  localStorage.removeItem("usuario_logado");
  window.location.href = "/login/login.html";
});
