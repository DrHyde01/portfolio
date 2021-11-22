// HAMBURGER MENU 🍔 -------------------------------------------------------------------------------
const hamburger = document.querySelector(".navbar__hamburger");
const navMenu = document.querySelector(".navbar__menu");
const navLink = document.querySelectorAll(
  ".navbar__menu__link, .navbar__menu__contact"
);

// Open the menu ---------------------------------------------
hamburger.addEventListener("click", mobileMenu);

function mobileMenu() {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");

  if (navMenu.classList.contains("active")) {
    // Toggle accesibility status
    hamburger.setAttribute("aria-expanded", true);
  } else {
    hamburger.setAttribute("aria-expanded", false);
  }
}

// Close the menu -------------------------------------------
navLink.forEach((n) => n.addEventListener("click", closeMenu));

function closeMenu() {
  hamburger.classList.remove("active");
  navMenu.classList.remove("active");

  hamburger.setAttribute("aria-expanded", false); // Toggle accesibility status
}
