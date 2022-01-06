// RANDOM ICON GENERATOR -----------------------------------------------------------------------
const randomIcon = [
  "intro__icon fas fa-palette servicesicon",
  "intro__icon fas fa-code servicesicon",
  "intro__icon fas fa-tools servicesicon",
  "intro__icon fas fa-eye servicesicon",
  "intro__icon fas fa-server servicesicon",
];

const icon = document.querySelector(".intro__icon");

function getRandomIcon() {
  setInterval(() => {
    // To change word every 5s
    const indx = Math.floor(Math.random() * randomIcon.length); // Pick a random number of the array length
    const iconNew = randomIcon[indx]; // Pick the associate icon link in array

    icon.className = iconNew; // Put the icon link in the html
  }, 5000);
}

getRandomIcon();
