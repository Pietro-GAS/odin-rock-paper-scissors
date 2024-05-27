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

function rockPaperScissors() {
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

function userInput() {
    let input = prompt("Please select rock, paper or scissors");

    while (input !== "rock" && input !== "paper" && input !== "scissors") {
        alert("The value you selected is not valid. The only valid choices are rock, paper or scissors.");
        input = prompt("Please select rock, paper or scissors");
    }

    return input;
}

// Write variables to keep track of the players score.
/*
1) initialize two variables to track user and computer scores
2) set the variables to 0
*/

let humanScore = 0;
let computerScore = 0;