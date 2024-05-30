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

function getHumanChoice() {
    let input = prompt("Please select rock, paper or scissors").toLowerCase();

    while (input !== "rock" && input !== "paper" && input !== "scissors") {
        console.log(`The value you selected is not valid.
          The only valid choices are rock, paper or scissors.`);
        input = prompt("Please select rock, paper or scissors").toLowerCase();
    }

    return input;
}

let roundsPlayed = 0;
let humanScore = 0;
let computerScore = 0;

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

const container = document.createElement("div");
container.setAttribute("id", "container");

const titleBox = document.createElement("h1");
titleBox.textContent = "Rock, Paper, Scissors";
container.appendChild(titleBox);

const btnContainer = document.createElement("div");
btnContainer.setAttribute("id", "btncontainer");
btnContainer.appendChild(btnRock);
btnContainer.appendChild(btnPaper);
btnContainer.appendChild(btnScissors);
container.appendChild(btnContainer);

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