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

// SHOW ON SCROLL 👀 --------------------------------------------------------------------------------
const options = {
  root: null,
  rootMargin: "0px",
  threshold: 1.0,
};

const ratio = 0.2; // Representation of the percentage of the target element which is visible
const handleIntersect = (entries, observer) => {
  entries.forEach((entry) => {
    if (entry.intersectionRatio > ratio) {
      // Target element is visible
      entry.target.classList.add("reveal-visible");
      observer.unobserve(entry.target); // Stop the observer when element is visible
    }
  });
};

const observer = new IntersectionObserver(handleIntersect, options);
document.querySelectorAll(".reveal").forEach((revealElements) => {
  // Target all reveal elements
  observer.observe(revealElements);
});

// EMAILJS INTEGRATION ✉️ -------------------------------------------------------------------------------
(function () {
  emailjs.init("user_WTgxSZHbJ9zP7NHGFHjgU");
})();

// listen to the form submission
document.getElementById("myForm").addEventListener("submit", function (event) {
  event.preventDefault();

  const serviceID = "OVH SMTP";
  const templateID = "template_9k3gt32";
  const messageReturn =document.getElementById('returnmessage');

  // send the email here
  emailjs.sendForm(serviceID, templateID, this).then(
    (response) => {
      console.log("SUCCESS!", response.status, response.text);
      messageReturn.innerHTML = 'Votre message a bien été transmis, je vous réponderai dans les meilleurs délais 🙂'
      document.getElementById("myForm").reset(); // Reset the form if succes
    },
    (error) => {
      console.log("FAILED...", error);
      messageReturn.innerHTML = 'Oops, le message a pas pu être envoyé ⚠️'
    }
  );
});
