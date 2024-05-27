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
