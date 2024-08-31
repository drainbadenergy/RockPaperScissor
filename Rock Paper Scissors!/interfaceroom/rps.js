const choices = ["rock", "paper", "scissors"];
const playerDisplay = document.getElementById("playerDisplay");
const computerDisplay = document.getElementById("computerDisplay");
const resultDisplay = document.getElementById("resultDisplay");

comp_Sc=0,usr_sc=0;


function playGame(playerChoice)
{
    const computerChoice = choices[Math.floor(Math.random() * 3)];
    let result = "";
    
    if (playerChoice === computerChoice)
    {
        result = "IT'S A TIE!";
    }
    else if (
        (playerChoice === "rock" && computerChoice === "scissors") ||
        (playerChoice === "paper" && computerChoice === "rock") ||
        (playerChoice === "scissors" && computerChoice === "paper")) 
    {
        result = "YOU WIN!";
        usr_sc=usr_sc+1;
    } 
    else 
    {
        result = "YOU LOSE!";
        comp_Sc=comp_Sc+1;
    }

    playerDisplay.textContent = `PLAYER: ${capitalizeFirstLetter(playerChoice)}`;
    computerDisplay.textContent = `COMPUTER: ${capitalizeFirstLetter(computerChoice)}`;
    resultDisplay.textContent = result;
    comp_Sc.textContent = comp_Sc;
    usr_sc.textContent = usr_sc;
}
function capitalizeFirstLetter(choice) {
    return choice.charAt(0).toUpperCase() + choice.slice(1);
}