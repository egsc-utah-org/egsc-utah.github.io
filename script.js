const header = document.querySelector(".site-header");
const navToggle = document.querySelector(".nav-toggle");
const navLinks = document.querySelectorAll(".site-nav a");

function setMenuState(isOpen) {
  header.dataset.menuOpen = String(isOpen);
  navToggle.setAttribute("aria-expanded", String(isOpen));
}

if (header && navToggle) {
  navToggle.addEventListener("click", () => {
    setMenuState(header.dataset.menuOpen !== "true");
  });

  navLinks.forEach((link) => {
    link.addEventListener("click", () => setMenuState(false));
  });

  window.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      setMenuState(false);
    }
  });
}
