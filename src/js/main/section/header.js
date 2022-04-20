function mobileMenu() {
  const body = document.querySelector("body");
  const navMobile = document.querySelector(".header_nav--mobile");

  const menuToggle = document.querySelector(".header__menu-toggle");
  const close = document.querySelector(".header_nav--mobile__header-close");

  menuToggle.addEventListener("click", () => {
    navMobile.classList.add("active");
    if (navMobile.classList.contains("active")) {
      body.style.overflow = "hidden";
    }
  });
  close.addEventListener("click", () => {
    navMobile.classList.remove("active");
    body.style.overflow = "scroll";
  });
}

mobileMenu();
