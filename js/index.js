// RANDOM WORD GENERATOR -----------------------------------------------------------------------
const randomWord = [
  "créatif",
  "audacieux",
  "imaginatif",
  "à l'écoute",
  "disponible",
  "inventif",
  "curieux",
];
const text = document.querySelector(".aboutitle__randomword");

function getRandomWord() {
  setInterval(() => {
    // To change word every 5s
    const indx = Math.floor(Math.random() * randomWord.length); // Pick a random number of the array length
    const word = randomWord[indx]; // Pick the associate word in array

    text.innerHTML = word; // Put the word in the html
  }, 5000);
}

getRandomWord();
