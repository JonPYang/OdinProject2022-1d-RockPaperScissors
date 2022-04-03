
// Obsoleted function
/* function computerPlay() {
    switch(Math.floor((Math.random() * 3))) {
        case 1:
            return "Rock"
        case 2:
            return "paper"
        case 3:
            return "scissors"
    }
} */

function computerPlay() {
    return(Math.floor(Math.random() * 3) + 1)
}

function convert(input) {
    switch(input) {
        case 1:
            return "Rock"
        case 2:
            return "Paper"
        case 3:
            return "Scissors"
        case "rock":
            return 1
        case "paper":
            return 2
        case "scissors":
            return 3
    }
}

function getInput(){
    let validateInput = true
    let input = ""
    while(validateInput) {
        input = prompt("Input Rock, Paper, or Scissors").toLowerCase();

        if(input == "rock" || input == "paper" || input == "scissors") {
            validateInput = false;
        } else {
            alert("Improper selection: Try again.")
        }
    }
    return convert(input)
}

function playMatch(playerSelection, computerSelection) {
    let result = playerSelection - computerSelection;
    let computerChoice = convert(computerSelection)
    if (result == 0) {
        alert(`it's a tie! Computer chose ${computerChoice}`)
    }
    else if (result == 1 || result == -2) {
        alert(`You win! Computer chose ${computerChoice}`)
    }
    else {
        alert(`You lose! Computer chose ${computerChoice}`)
    }
}

for(let x = 0; x < 5; x++) {
    playMatch(getInput(), computerPlay())
}