document.getElementById("btnLogout").addEventListener("click", () => {
  fetch("/auth/logout.php")
    .then(res => res.json())
    .then(data => {
      if (data.status === "deslogado") {
        window.location.href = "/login/login.html";
      }
    });
});
