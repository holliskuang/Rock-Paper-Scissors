let yourScore=0;
let computerScore=0;
function computerPlay (){ 
   let random=Math.random();
   if (random>=0 && random<=(1/3)){
       return "rock";
   } 
   else if (random >=(1/3) && random<= (2/3)){
       return "paper";
   }
   else if (random>=(2/3) && random <= 1){
       return "scissors";
   }
}

function playRound(playerSelection){
    
    let choice=playerSelection.toLowerCase();
    let computerSelection= computerPlay();
    //Player Chooses Rock 
    if ((choice==="rock") && computerSelection==="rock"){
        alert("It's a Tie");
        
    }
    if ((choice==="rock") && computerSelection==="paper"){
        alert("You Lose, Paper beats Rock")
        computerScore++;
        
    }
    
    if ((choice==="rock") && computerSelection==="scissors"){
        alert("You Win, Rock beats Scissors")
        yourScore++;
    }

    //Player Chooses Paper
    if ((choice==="paper") && computerSelection==="rock"){
        alert("You Win, Paper beats Rock")
        yourScore++;
    }
    if ((choice==="paper") && computerSelection==="paper"){
        alert("It's a Tie")
    }
    if ((choice==="paper") && computerSelection==="scissors"){
        alert("You Lose, Scissors beats Paper")
        computerScore++;
    }
    // Player Chooses Scissors
    if ((choice==="scissors") && computerSelection==="rock"){
        alert("You Lose, Rock beats Scissors")
        computerScore++;
    }
    if ((choice==="scissors") && computerSelection==="paper"){
        alert("You Win, Scissors beats Paper")
        yourScore++;
    }
    if ((choice==="scissors") && computerSelection==="scissors"){
        alert("It's a Tie")
    }
}
//take in buttons
const buttonAll= document.querySelectorAll(".btn");

function playGame(e){
   playRound(this.id);
   myFunction();
   if(yourScore===5) {
       alert("You are first to Five, You Win!")
       yourScore=0;
       computerScore=0;
       myFunction();
   }
   else if (computerScore===5) {
    alert("The Computer is first to Five, You Lose!")
    yourScore=0;
    computerScore=0;
    myFunction();
}
}

// iterate through so that when each button is pressed, it activates a game
window.addEventListener('click', function(e){
    buttonAll.forEach(button => button.addEventListener('click', playGame))
    
    
})
function myFunction() {
    document.getElementById("scorekeep").innerHTML = "Your Score: " +yourScore + "     |    " + "Computer Score: " + computerScore;
 }

 function loadAlert(){
     alert("Pick an Option and the Computer will as well.                                      First to Five Wins. Good Luck!")
 }

 //Allow alert and scoreboard to show up when page loads
 function duo(){
    myFunction();
     loadAlert();
     
 }

// 5-game function with prompts 

/*function game() {
    let yourScore=0;
    let computerScore=0;
    for ( i=0; i<5; i++){
        let selection = prompt("What's your selection?");
        alert(selection);
        let results=playRound(selection);
        if (results.includes("You Win")){
        yourScore++;
        alert(results);
        alert("Your score:" + yourScore + "// Computer Score:" + computerScore);
        }
        else if (results.includes("You Lose")) {
        computerScore++;
        alert(results);
        alert("Your score:" + yourScore + "// Computer Score:" + computerScore);
        }
        else if(results.includes("Tie")){
        alert(results);
        alert("Your score:" + yourScore + "// Computer Score:" + computerScore);
        }
    
    }
}
*/