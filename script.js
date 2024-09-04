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

function playRound(humanChoice, computerChoice) {
  if ((humanChoice === 'Rock' && computerChoice === 'Scissors') ||
      (humanChoice === 'Paper' && computerChoice === 'Rock') ||
      (humanChoice === 'Scissors' && computerChoice === 'Paper')) {
    return 0; //human win
  } else if (humanChoice === computerChoice) {
    return 1; //tie
  } else {
    return 2; //cpu win
  }
}

function playGame() {
  let humanScore = 0;
  let computerScore = 0;

  for (let i = 0; i < 5; i++) {
    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();

    const game = playRound(humanSelection, computerSelection);

    if (game === 0) {
      alert(`You: ${humanSelection}\nCPU: ${computerSelection}\nYou Won!`);
      humanScore++;
    } else if (game === 2) {
      alert(`You: ${humanSelection}\nCPU: ${computerSelection}\nYou Lose!`);
      computerScore++;
    } else {
      alert(`You: ${humanSelection}\nCPU: ${computerSelection}\nA Tie!`);
    }
  }
  if (humanScore > computerScore) {
    alert(`GAME OVER\nYOU WON :)\nYour Score: ${humanScore}\nCPU Score: ${computerScore}`)
  } else if (humanScore < computerScore) {
    alert(`GAME OVER\nYOU LOSE :(\nYour Score: ${humanScore}\nCPU Score: ${computerScore}`)
  } else {
    alert(`GAME OVER\nA TIE :|\nYour Score: ${humanScore}\nCPU Score: ${computerScore}`)

  }
}

playGame();
