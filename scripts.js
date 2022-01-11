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
        return "It's a Tie"
    }
    if ((choice==="rock") && computerSelection==="paper"){
        return "You Lose, Paper beats Rock"
    }
    if ((choice==="rock") && computerSelection==="scissors"){
        return "You Win, Rock beats Scissors"
    }

    //Player Chooses Paper
    if ((choice==="paper") && computerSelection==="rock"){
        return "You Win, Paper beats Rock"
    }
    if ((choice==="paper") && computerSelection==="paper"){
        return "It's a Tie"
    }
    if ((choice==="paper") && computerSelection==="scissors"){
        return "You Lose, Scissors beats Paper"
    }
    // Player Chooses Scissors
    if ((choice==="scissors") && computerSelection==="rock"){
        return "You Lose, Rock beats Scissors"
    }
    if ((choice==="scissors") && computerSelection==="paper"){
        return "You Win, Scissors beats Paper"
    }
    if ((choice==="scissors") && computerSelection==="scissors"){
        return "It's a Tie"
    }
}



function game() {
    let yourScore=0;
    let computerScore=0;
    for ( i=0; i<5; i++){
        let selection = prompt("What's your selection?");
        console.log(selection);
        let results=playRound(selection);
        if (results.includes("You Win")){
        yourScore++;
        console.log(results);
        console.log("Your score:" + yourScore + "// Computer Score:" + computerScore);
        }
        else if (results.includes("You Lose")) {
        computerScore++;
        console.log(results);
        console.log("Your score:" + yourScore + "// Computer Score:" + computerScore);
        }
        else if(results.includes("Tie")){
        console.log(results);
        console.log("Your score:" + yourScore + "// Computer Score:" + computerScore);
        }
    
    }
}