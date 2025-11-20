const langButtons = document.querySelectorAll(".lang-btn");
const langElements = document.querySelectorAll("[data-lang]");

function setLanguage(lang) {
  langElements.forEach(el => {
    if (el.getAttribute("data-lang") === lang) {
      el.style.display = "";
    } else {
      el.style.display = "none";
    }
  });

  langButtons.forEach(btn => {
    if (btn.getAttribute("data-set-lang") === lang) {
      btn.classList.add("active");
    } else {
      btn.classList.remove("active");
    }
  });
}

langButtons.forEach(btn => {
  btn.addEventListener("click", () => {
    const lang = btn.getAttribute("data-set-lang");
    setLanguage(lang);
  });
});

// Default language: English
setLanguage("en");
// Mobile menu toggle
const navContainer = document.querySelector(".nav-container");
const menuToggle = document.querySelector(".menu-toggle");

if (navContainer && menuToggle) {
  menuToggle.addEventListener("click", () => {
    navContainer.classList.toggle("nav-open");
  });
}
