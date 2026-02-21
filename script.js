const toggle = document.getElementById("theme-toggle");

toggle.addEventListener("click", () => {
  const currentTheme = document.body.getAttribute("data-theme");

  const newTheme = currentTheme === "light" ? "dark" : "light";

  document.body.setAttribute("data-theme", newTheme);

  localStorage.setItem("theme", newTheme);
});

const savedTheme = localStorage.getItem("theme") || "light";
document.body.setAttribute("data-theme", savedTheme);

// Footer - Atualiza o ano automaticamente
document.getElementById("year").textContent = new Date().getFullYear();

// Filtro de categorias
const filterButtons = document.querySelectorAll("[data-filter]");
const cards = document.querySelectorAll(".card");

filterButtons.forEach(button => {
  button.addEventListener("click", () => {
    const filter = button.getAttribute("data-filter");

    cards.forEach(card => {
      const categories = card.getAttribute("data-category");

      if (filter === "all") {
        card.style.display = "flex";
        return;
      }

      if (categories && categories.includes(filter)) {
        card.style.display = "flex";
      } else {
        card.style.display = "none";
      }
    });

    // destaque visual ativo
    filterButtons.forEach(btn => btn.classList.remove("active"));
    button.classList.add("active");
  });
});

// Botão de voltar ao topo
const backToTopButton = document.getElementById("back-to-top");

// Mostrar botão quando rolar 300px
window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    backToTopButton.classList.add("show");
  } else {
    backToTopButton.classList.remove("show");
  }
});

// Scroll suave para o topo
backToTopButton.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});