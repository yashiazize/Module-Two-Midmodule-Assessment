const dice = [
  { image: "&#9856", number: 1 },
  { image: "&#9857", number: 2 },
  { image: "&#9858", number: 3 },
  { image: "&#9859", number: 4 },
  { image: "&#9860", number: 5 },
  { image: "&#9861", number: 6 },
];

const form = document.querySelector("#dice-roll-form");


form.addEventListener("submit", (event) => {
  event.preventDefault();
  const display = document.querySelector("#dice-para");
  const input = document.querySelector("#dice-amount").valueAsNumber;
  const sumDisplay = document.querySelector("#sum-para");
  let randomDiceDisplay = "";
  let sumTotal = 0;
  for (let i = 0; i < input; i++) {
    let randomDice = dice[Math.floor(Math.random() * dice.length)]; // create random dice
    randomDiceDisplay += randomDice.image;
    sumTotal += randomDice.number;
  }
  display.innerHTML = randomDiceDisplay;
  sumDisplay.textContent = `Sum = ${sumTotal}`;
    const ul = document.querySelector("ul");
    const li = document.createElement("li");
    ul.appendChild(li);
    li.textContent = `${display.innerHTML} = ${sumTotal}`;
});
