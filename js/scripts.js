// HAMBURGER MENU ----------------------------------------------

// Open the menu ---------------------------------------------
const hamburger = document.querySelector(".navbar__hamburger");
const navMenu = document.querySelector(".navbar__menu");

hamburger.addEventListener("click", mobileMenu); 

function mobileMenu() {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
}

// Close the menu -------------------------------------------
const navLink = document.querySelectorAll(".navbar__menu__link");

navLink.forEach(n => n.addEventListener("click", closeMenu));

function closeMenu() {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}