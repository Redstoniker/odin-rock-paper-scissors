function getComputerChoise() {
    let random = Math.random()
    let computerChoise;
    (random <= 1/3) ? computerChoise = "rock" :
    (random <= 2/3) ? computerChoise = "paper" :
    computerChoise = "scissors";
    return computerChoise;
}

function getandtestHumanChoice() {
    let humanChoice = prompt("Do you want to play \"Rock\", \"Paper\" or \"Scissors\"?").toLowerCase();
    (humanChoice === "rock" || humanChoice ==="paper" || humanChoice==="scissors") ?  1+1 : humanChoice="no";  
    return humanChoice;
}

let humanScore = 0;
let computerScore = 0;

function playRound() {
    let humanChoice = getandtestHumanChoice();
    let computerChoise = getComputerChoise();
    if(humanChoice==computerChoise){
        alert("It's a tie! "+humanChoice.slice(0, 1).toUpperCase()+humanChoice.slice(1)+" and "+computerChoise+", play again!");
        return 0;
    }
    switch(humanChoice + computerChoise) {
        case("rockpaper"):
            alert("You lost! Paper beats rock");
            computerScore ++;
            return 1;
        case("paperscissors"):
            alert("You lost! Scissors beat paper");
            computerScore ++;
            return 1;
        case("scissorsrock"):
            alert("You lost! Rock beats scissors");
            computerScore ++;
            return 1;
        default :
            alert("You won! "+humanChoice.slice(0, 1).toUpperCase()+humanChoice.slice(1)+" beats "+computerChoise)
            humanScore ++;
            return 1;
    }

}

function playGame(){
    humanScore = 0;
    computerScore = 0;
    let i = 0;
    while(i < 5){
        alert("The score is You "+humanScore+":"+computerScore+" Computer!");
        i += playRound();        
    }
    alert((humanScore>computerScore) ? "You won" :
    (humanScore==computerScore) ? "You tricked us" :
    "You lost")
}

playGame();