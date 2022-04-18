function mobileMenu() {
  const menuToggle = document.querySelector(".header__menu-toggle");
  const navMobile = document.querySelector(".header_nav--mobile");
  const close = document.querySelector(".header_nav--mobile__header-close");

  menuToggle.addEventListener("click", () => {
    navMobile.classList.add("active");
  });
  close.addEventListener("click", () => {
    navMobile.classList.remove("active");
  });
}

mobileMenu();
