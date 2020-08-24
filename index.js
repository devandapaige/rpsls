//http://www.samkass.com/theories/RPSSL.html
//Rules:
// Scissors Cuts Paper
// Paper covers Rock
// Rock crushes Lizard
// Lizard poisons Spock
// Spock smashes Scissors
// Scissors decapitates Lizard
// Lizard eats Paper
// Paper desproves Spock
// Spock vaporaizes Rock
// Rock crushes Scissors

const rock = 0;
const paper = 1;
const scissors = 2;
const lizard = 3;
const spock = 4;

function kassGame() {
  let humanChoice = prompt("Rock, Paper, or Scissors?");
  humanChoice = humanChoice.toLocaleLowerCase();
  humanChoice = humanChoice.trim();
  const compChoice = Math.floor(Math.random() * 5);
  //Rock choices:
  if (humanChoice === "rock" && compChoice === rock) {
    let h1 = document.querySelector("h1");
    h1.innerHTML = "It's a TIE!";
    let p = document.querySelector("p");
    p.innerHTML = "ROCK vs ROCK - Play again below.";
  } else if (humanChoice === "rock" && compChoice === paper) {
    let h1 = document.querySelector("h1");
    h1.innerHTML = "You loose 😢";
    let p = document.querySelector("p");
    p.innerHTML = "ROCK vs PAPER - Play again below.";
  } else if (humanChoice === "rock" && compChoice === scissors) {
    let h1 = document.querySelector("h1");
    h1.innerHTML = "You win 🙌!";
    let p = document.querySelector("p");
    p.innerHTML = "ROCK vs SCISSORS - Play again below.";
  }
  //Paper choices:
  else if (humanChoice === "paper" && compChoice === rock) {
    let h1 = document.querySelector("h1");
    h1.innerHTML = "You win 🙌!";
    let p = document.querySelector("p");
    p.innerHTML = "PAPER vs ROCK - Play again below.";
  } else if (humanChoice === "paper" && compChoice === paper) {
    let h1 = document.querySelector("h1");
    h1.innerHTML = "It's a TIE!";
    let p = document.querySelector("p");
    p.innerHTML = "PAPER vs PAPER - Play again below.";
  } else if (humanChoice === "paper" && compChoice === scissors) {
    let h1 = document.querySelector("h1");
    h1.innerHTML = "You loose 😢";
    let p = document.querySelector("p");
    p.innerHTML = "PAPER vs SCISSORS - Play again below.";
  }
  //Scissors choices:
  else if (humanChoice === "scissors" && compChoice === rock) {
    let h1 = document.querySelector("h1");
    h1.innerHTML = "You loose 😢";
    let p = document.querySelector("p");
    p.innerHTML = "SCISSORS vs ROCK - Play again below.";
  } else if (humanChoice === "scissors" && compChoice === paper) {
    let h1 = document.querySelector("h1");
    h1.innerHTML = "You win 🙌!";
    let p = document.querySelector("p");
    p.innerHTML = "SCISSORS vs PAPER - Play again below.";
  } else if (humanChoice === "scissors" && compChoice === scissors) {
    let h1 = document.querySelector("h1");
    h1.innerHTML = "It's a TIE!";
    let p = document.querySelector("p");
    p.innerHTML = "SCISSORS vs SCISSORS - Play again below.";
  }
}
let rpsButton = document.querySelector(".rpsButton");
rpsButton.addEventListener("click", rpsGame);
