function getComputerChoise() {
    let random = Math.random()
    let choise;
    (random <= 1/3) ? choise = "rock" :
    (random <= 2/3) ? choise = "paper" :
    choise = "scissors";
    return choise;
}
