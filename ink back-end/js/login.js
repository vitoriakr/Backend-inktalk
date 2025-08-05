
document.getElementById("btnLogin").addEventListener("click", () => {
  const email = document.getElementById("email").value;
  const senha = document.getElementById("senha").value;

  fetch("/auth/login.php", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, senha })
  })
  .then(res => res.json())
  .then(data => {
    if (data.status === "logado") {
      window.location.href = "/homepage/homepage.html";
    } else {
      alert("Email ou senha incorretos.");
    }
  });
});
