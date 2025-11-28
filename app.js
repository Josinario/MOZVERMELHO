document.addEventListener("DOMContentLoaded", () => {
  const navToggle = document.querySelector(".nav-toggle");
  const nav = document.querySelector(".main-nav");
  navToggle.addEventListener("click", () => nav.classList.toggle("show"));

  // Optional: hijack forms to show a quick client-side validation & friendly UX
  document.querySelectorAll("form").forEach((form) => {
    form.addEventListener("submit", async (e) => {
      // allow normal submission but show a small check; progressive enhancement
      // you may replace by fetch API if you prefer SPA behavior
      const submitBtn = form.querySelector("button[type=submit]");
      submitBtn.disabled = true;
      submitBtn.textContent = "Enviando...";
      // after a short delay let the browser submit
      setTimeout(() => {
        submitBtn.disabled = false;
        submitBtn.textContent = submitBtn.classList.contains("btn-primary")
          ? "Enviar"
          : "Enviar";
      }, 3000);
    });
  });
});
