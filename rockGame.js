//how to get the users input
const prompt = require('prompt-sync')();

import chalk from 'chalk'
console.log("Welcome to Rock,Paper,Scissors")

const play = () =>{
    //users input
    let userChoice = prompt("Please pick one: Rock,Paper or Scissors? ");
    const userPlays = userChoice.toLowerCase();
    //the computers choice
        const CompChoices = ["Rock","Paper","Scissors"];
        const compIndex = Math.round(Math.random()*2);// so we get 0/1/2
        const CompPlays = CompChoices[compIndex]

    //the comparing of values 
    if(userPlays === "rock" && CompPlays === "Paper"){
        console.log("Computer Wins!");
        return finished(true)
    }else if(userPlays === "paper" && CompPlays === "Scissors"){
        console.log("Computer Wins!");
        return finished(true)
    }else if(userPlays === "scissors" && CompPlays === "Rock"){
        console.log("Computer Wins!");
        return finished(true)
    }
    else if(userPlays === "rock" && CompPlays === "Scissors"){
        console.log("You Win!");
        return finished(true)
    }else if(userPlays === "paper" && CompPlays === "Rock"){
        console.log("You Win!");
        return finished(true)
    }else if(userPlays === "scissors" && CompPlays === "Paper"){
        console.log("You Win!");
        return finished(true)
    } else if(userPlays === CompPlays.toLowerCase()){
        console.log("It's a tie!!!")
        return finished(true)
    }
    else{console.log("Hey put in the right words!!!"); return play()}
} 
//will they play again?
function finished(bol){
    if (bol === true){
    const again = prompt("Play again? yes or no. ")
    if(again === "yes"){
        play();
    }else{ console.log("Thank you for playing!")}
    }
}
    console.log(play())
