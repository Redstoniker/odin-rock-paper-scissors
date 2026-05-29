const outputDiv = document.querySelector("#result");
const scoreDiv = document.querySelector("#score")
const main = document.querySelector("#main");
const main2 = document.querySelector("#main2");
const winnerOutputDiv = document.querySelector("#winner-output")
const body = document.querySelector("body");

function getComputerChoise() {
    let random = Math.random()
    let computerChoise;
    (random <= 1/3) ? computerChoise = "rock" :
    (random <= 2/3) ? computerChoise = "paper" :
    computerChoise = "scissors";
    return computerChoise;
}

function getandtestHumanChoice(tryAgain = false) {
    if (!tryAgain){
    let humanChoice;
    }
    humanChoice = (tryAgain) ? 
    prompt("It seems like you made a typo! Please try again with either \"Rock\", \"Paper\" or \"Scissors\"").toLowerCase.trim() :
    prompt("Do you want to play \"Rock\", \"Paper\" or \"Scissors\"?").toLowerCase().trim();
    
    (humanChoice === "rock" || humanChoice ==="paper" || humanChoice==="scissors") ?  1+1 : getandtestHumanChoice(true);  
    return humanChoice;
}

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice = getandtestHumanChoice(), computerChoise = getComputerChoise()) {
    if(humanChoice==computerChoise){
        updateText("It's a tie! "+humanChoice.slice(0, 1).toUpperCase()+humanChoice.slice(1)+" and "+computerChoise+", play again!");
        return 0;
    }
    switch(humanChoice + computerChoise) {
        case("rockpaper"):
            computerScore ++;
            updateText("You lost! Paper beats rock");
            checkWin();
            return 1;
        case("paperscissors"):
            computerScore ++;
            updateText("You lost! Scissors beat paper");
            checkWin();
            return 1;
        case("scissorsrock"):
            computerScore ++;
            updateText("You lost! Rock beats scissors");
            checkWin();
            return 1;
        default :
            humanScore ++;
            updateText("You won! "+humanChoice.slice(0, 1).toUpperCase()+humanChoice.slice(1)+" beats "+computerChoise)
            checkWin();
            return 1;
    }
}

function updateText(outputText){
    outputDiv.textContent = outputText;
    updateScoreText();
}

function updateScoreText(){
    scoreDiv.textContent = "ㅤㅤㅤPlayer: "+humanScore+" Computer: "+computerScore;
}

function checkWin(){
    if((humanScore >= 5 || computerScore >= 5)&& humanScore !== computerScore){
        body.removeChild(main);
        body.removeChild(main2);
        addResetButton();
        if(humanScore > computerScore){
            winnerOutputDiv.textContent = "You won with "+humanScore+" to "+computerScore+" rounds";
        } else {
            winnerOutputDiv.textContent = "You lost with "+computerScore+" to "+humanScore+" rounds";
        }
    }
}

function addResetButton(){
    const resetButton = document.createElement("button");
    resetButton.textContent = "Play again";
    resetButton.addEventListener("click", () => location.reload())
    body.append(resetButton);
    
}

/*
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
*/

//playRound();

const btn = document.querySelectorAll("#btn");
for(button of btn){
    button.addEventListener("click", e => playRound(e.srcElement.classList[0]));
}