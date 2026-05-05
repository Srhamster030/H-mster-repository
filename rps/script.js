function game(userChoice){
    let randomNum = Math.random();
    let compChoice;
    if (randomNum < 0.33){
        compChoice = "Rock";
    }else if (randomNum < 0.66){
            compChoice = "Paper";
    }else if (randomNum < 1){
        compChoice = "Scisors";
    }

    console.long(compChocie);

    let result = document.querySelector
    ("#result");
    if(userChoice == comChoice) {
        result.innerHTML= "Tie";
    }else if (userChoice == "Rock"){
        if (compChoice == "Paper"){
            result.innerHTML = "You loose";
        }else {
            result.innerHTML = "You won";
        }
    }

}

// document.addEvenListener("DOMContentLoaded", function(){
//     //your code here
//     document.querySelector("#rock-button").onclick = game("Rock");
//     document.querySelector("#rock-button").innerHTML
// });

