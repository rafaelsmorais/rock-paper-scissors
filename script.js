let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
  let random = Math.floor(Math.random() * 3);

  if (random === 0) {
    return "Rock";
  } else if (random === 1) {
    return "Paper";
  } else {
      return "Scissors";
  }
}

function getHumanChoice() {
  let choice;
  do {
    choice = prompt("Rock, Paper or Scissors?");
  }
  while (choice != 'Rock' && choice != 'Paper' && choice != 'Scissors');
  return choice;
}

console.log(getHumanChoice())
