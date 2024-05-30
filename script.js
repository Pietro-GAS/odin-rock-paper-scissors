// Write a function that randomly returns rock, paper or scissors
/*
1) Math.random() returns a random number between 0 and 1
2) multiply the result by 3
3) round up the result to obtain 1, 2 or 3
4) map each number to one of the options
*/

function random13() {
    return Math.ceil(Math.random()*3);
}

function getComputerChoice() {
    switch (random13()) {
        case 1:
            return "rock";
            break;
        case 2:
            return "paper";
            break;
        case 3:
            return "scissors";
            break;
    }
}

// Write a function that takes the user choice and returns it.
/*
1) store user input in a variable
2) check if user input is rock, paper or scissors
3) if not, ask again
4) return user input
*/

function getHumanChoice() {
    let input = prompt("Please select rock, paper or scissors").toLowerCase();

    while (input !== "rock" && input !== "paper" && input !== "scissors") {
        console.log(`The value you selected is not valid.
          The only valid choices are rock, paper or scissors.`);
        input = prompt("Please select rock, paper or scissors").toLowerCase();
    }

    return input;
}

// Write variables to keep track of the players score.
/*
1) initialize two variables to track user and computer scores
2) set the variables to 0
*/

let roundsPlayed = 0;
let humanScore = 0;
let computerScore = 0;

// Write the logic to play a single round
/*
1) generate computer choice and store it in a variable
2) prompt user choice and store it in a variable
3) Post "You chose ${humanChoice}. The computer chose ${computerChoice}."
4) if the two choices are the same post "It's a draw!" to the console
5) if the two choices are not the same, compare them:
  a) IF computer chose rock and human chose scissors
     OR computer chose paper and human chose rock
     OR computer chose scissors and human chose paper: computer won
  b) raise computer score by 1
  c) post "The computer won!" to the console
  d) ELSE: human won
  e) raise user score by 1
  f) post "You won!" to the console
*/

function playRound(choice) {
    let computerChoice = getComputerChoice();
    let humanChoice = choice;

    let message = `You chose ${humanChoice}. ` +
      `The computer chose ${computerChoice}.`;

    if (computerChoice == humanChoice) {
        message += ` It's a draw!`;
    } else if (computerChoice == "rock" && humanChoice == "scissors" ||
      computerChoice == "paper" && humanChoice == "rock" ||
      computerChoice == "scissors" && humanChoice == "paper") {
        ++computerScore;
        message += ` The computer won!`;
    } else {
        ++humanScore;
        message += ` You won!`;
    }
    ++roundsPlayed;
    return [message, humanScore, computerScore, roundsPlayed];
}

function restart() {
    roundsPlayed = 0;
    humanScore = 0;
    computerScore = 0;
    resultBox.textContent = "Press a button to play!";
    scoreBox.textContent = "";
    container.removeChild(btnRestart);
    btnRock.removeAttribute("disabled");
    btnPaper.removeAttribute("disabled");
    btnScissors.removeAttribute("disabled");
}

// Write the logic to play the entire game, consisting of 5 rounds
/*
1) create a variable to track the number of rounds played and set it to 0
2) call the function playRound() until you have played 5 rounds
3) after each round, post the scores
4) after the 5 rounds, compare the scores
5) declare the winner
*/

/*
function playGame() {
    let roundsPlayed = 0;
    let scoreMessage;

    while (roundsPlayed < 5) {
        console.log(`\nROUND ${roundsPlayed + 1}`);
        playRound();
        ++roundsPlayed;
        scoreMessage = `You: ${humanScore}. Computer: ${computerScore}.\n`;
        if (roundsPlayed < 5) {
            console.log(`\nCURRENT SCORE\n` + scoreMessage + `\n`);
        } else {
            let winnerMessage;
            if (computerScore == humanScore) {
                winnerMessage = `\nIt's a draw!`;
            } else if (computerScore > humanScore) {
                winnerMessage = `\nThe computer won!`;
            } else {
                winnerMessage = `\nYou won!`;
            }
            console.log(`\nFINAL SCORE\n` + scoreMessage + winnerMessage);
        }
    }
}

playGame();
*/

// Add 3 buttons
const btnRock = document.createElement("button");
btnRock.setAttribute("id", "rock");
btnRock.textContent = "Rock";

const btnPaper = document.createElement("button");
btnPaper.setAttribute("id", "paper");
btnPaper.textContent = "Paper";

const btnScissors = document.createElement("button");
btnScissors.setAttribute("id", "scissors");
btnScissors.textContent = "Scissors";

/*
const btnRestart =  document.createElement("button");
btnRestart.setAttribute("id", "restart");
btnRestart.textContent = "Restart";
btnRestart.addEventListener("click", restart);
*/

const container = document.createElement("div");
container.setAttribute("id", "container");

const titleBox = document.createElement("h1");
titleBox.textContent = "Rock, Paper, Scissors";
container.appendChild(titleBox);

container.appendChild(btnRock);
container.appendChild(btnPaper);
container.appendChild(btnScissors);

const resultBox = document.createElement("div");
resultBox.setAttribute("id", "results");
resultBox.textContent = "Press a button to play!";
container.appendChild(resultBox);

const scoreBox = document.createElement("div");
scoreBox.setAttribute("id", "results");
container.appendChild(scoreBox);

const body = document.querySelector("body");
body.appendChild(container);

const btnRestart =  document.createElement("button");
btnRestart.setAttribute("id", "restart");
btnRestart.textContent = "Restart";
btnRestart.addEventListener("click", restart);

// Add event listeners to call playRound with the correct selection
const buttons = document.querySelectorAll("button:not(#restart)");
buttons.forEach((button) => {
    button.addEventListener("click", () => {
        let round = playRound(button.getAttribute("id"))
        let message = round[0];
        let humanScore = +round[1];
        let computerScore = +round[2]
        let roundsPlayed = round[3];
        let winner;
        resultBox.textContent = message;
        if (roundsPlayed < 5) {
            scoreBox.textContent = `You: ${humanScore}. Computer: ${computerScore}.`;
        } else {
            scoreBox.textContent = `FINAL SCORE: You: ${humanScore}. Computer: ${computerScore}.`;
            if (humanScore == computerScore) {
                winner = `It's a draw!`;
            } else if (humanScore >= computerScore) {
                winner = `You won!`;
            } else {
                winner = `The computer won!`;
            }
            resultBox.textContent = `GAME OVER! ${winner}`;
            btnRock.setAttribute("disabled", "disbled");
            btnPaper.setAttribute("disabled", "disbled");
            btnScissors.setAttribute("disabled", "disbled");
            container.appendChild(btnRestart);
        }
    });
});