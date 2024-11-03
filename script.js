
//***for change mode***
let modebtn = document.querySelector("#mode");
let body = document.querySelector("body");

let currmode = "light_mode";

modebtn.addEventListener("click",()=>{
    if(currmode === "light_mode"){
        currmode = "dark_mode";
        body.classList.add("dark");
        body.classList.remove("light");
    }else{
        currmode = "light_mode";
        body.classList.add("light");
        body.classList.remove("dark");
    }
    console.log(currmode);
} )

// ***for score***

let userScore = 0;
let compScore = 0;

const userScorePara = document.querySelector("#user_score");
const compScorePara = document.querySelector("#computer_score");

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const genCompChoice = () =>{
    const options = ["rock","paper","scissors"];
    const random_index = Math.floor(Math.random() *3);
    return options[random_index];
};

// for draw game
const drawGame =() =>{
    console.log("Game was draw!");
    msg.innerText ="Game was draw!, play!!!";
}

const showWinner = (userWin,user_choice,comp_Choice) =>{
    if(userWin){
        userScore++;
        userScorePara.innerText = userScore;
        console.log("You Win !!!");
        msg.innerText =`You Win !!! your ${user_choice} beats ${comp_Choice}`;
    }else{
        compScore++;
        compScorePara.innerText = compScore; 
        console.log("You Lose ");
        msg.innerText =` You Lose !${comp_Choice} beats your ${user_choice} `;
       
    }
}
// here made the game

const playGame = (user_choice) =>{
    console.log("user choice ",user_choice);

    // generate computer choice
    const comp_Choice =genCompChoice();
    console.log("computer choice ",comp_Choice);

// ***playing conditions***

if(user_choice ===comp_Choice){
    // draw Game
    drawGame();
}
else{
     let userWin =true;
     if(user_choice === "rock")
          {
            // for scissors & paper
        userWin = comp_Choice === "paper" ? false:true;
    }else if(user_choice ==="paper"){
        // for rock & scissors
        userWin = comp_Choice === "scissors" ? false:true;
    }
    else{
        userWin = comp_Choice === "rock"? false:true;
    }
    showWinner(userWin,user_choice,comp_Choice);
}

};

choices.forEach((choice) => {
    choice.addEventListener("click",() =>{
        const user_choice = choice.getAttribute("id");
        playGame(user_choice);
       });
});


 
