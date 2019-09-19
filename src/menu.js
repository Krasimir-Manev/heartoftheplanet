const mobileMenu = () => {
  const mobileMenuBtn = document.querySelector(".mobile-menu");
  const menu = document.querySelector(".navigation nav ul");
  const closeBtn = document.querySelector(".close");
  let id = null;

  mobileMenuBtn.addEventListener("click", () => {

    menu.classList.toggle("open");

    if (!menu.classList.contains("open")) {
      menu.style.transition =
        "transform 1s cubic-bezier(0.075, 0.82, 0.165, 1)";

      setTimeout(() => {
        menu.removeAttribute("style");
      }, 1000);
    }

    closeBtn.classList.toggle("mobile-menu-close");
  });
};

mobileMenu();
