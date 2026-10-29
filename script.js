const books = [
  "The Very Secret Society of Irregular Witches by Sangu Mandanna — A cozy fantasy about magic, belonging, and found family.",
  "The House in the Cerulean Sea by TJ Klune — A magical story about finding family in unexpected places.",
  "Legends & Lattes by Travis Baldree — An orc trades adventure for a fresh start running a coffee shop.",
  "The Night Circus by Erin Morgenstern — Two magicians compete within a mysterious traveling circus."
];

const button = document.getElementById("recommend-button");
const recommendation = document.getElementById("recommendation");

button.addEventListener("click", function () {
  const randomIndex = Math.floor(Math.random() * books.length);
  recommendation.textContent = books[randomIndex];
});
