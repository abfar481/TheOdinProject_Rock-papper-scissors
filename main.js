//Function computer choices
function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

function getHumanChoice() {
    const choices = prompt("Input your answer here!").toLowerCase();

    if (choices === "rock" || choices === "paper" || choices === "scissors") {
        return choices;
    } else {
        console.log("Wrong input,fellas!");
        return getHumanChoice();
    }
}