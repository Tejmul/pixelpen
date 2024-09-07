let userScore = 0 ;
let compScore = 0 ;

const choices = document.querySelectorAll(".choic");
var result = document.querySelector("#result");
var c_num = document.querySelector("#c_num");
var y_num = document.querySelector("#y_num");
var reset = document.querySelector("#reset");

reset.addEventListener("click",()=>{
    result1.style.backgroundColor = "black";
    result1.innerText = "Play Your Move";
    compScore = 0;
    c_num.innerText = compScore;
    userScore = 0;
    y_num.innerText = userScore;
});


const genCompChoice = ()=>{
    const option = ["rock", "paper", "scissor"];
    var randInt = Math.floor(Math.random()*3);
    var compchoice = option[randInt]
    return compchoice;
}

const playGame = (userChoice)=>{
    var choice_out = genCompChoice();
    console.log(choice_out);

    if (userChoice === "rock" && choice_out === "scissor"){
        result1.style.backgroundColor = "green";
        result1.innerText = "You win";
        userScore = userScore + 1;
        y_num.innerText = userScore;
    }
    else if (userChoice === "scissor" && choice_out === "rock"){
        result1.style.backgroundColor = "red";
        result1.innerText = "You lost , Comp wins";
        compScore = compScore + 1;
        c_num.innerText = compScore;
    }

    else if (userChoice === "paper" && choice_out === "rock"){
        result1.style.backgroundColor = "green";
        result1.innerText = "You win";
        userScore = userScore + 1;
        y_num.innerText = userScore;
    }
    else if (userChoice === "rock" && choice_out === "paper"){
        result1.style.backgroundColor = "red";
        result1.innerText = "You lost , Comp wins";
        compScore = compScore + 1;
        c_num.innerText = compScore;
    }

    else if (userChoice === "scissor" && choice_out === "paper"){
        result1.style.backgroundColor = "green";
        result1.innerText = "You win";
        userScore = userScore + 1;
        y_num.innerText = userScore;
    }
    else if (userChoice === "paper" && choice_out === "scissor"){
        result1.style.backgroundColor = "red";
        result1.innerText = "You lost , Comp wins";
        compScore = compScore + 1;
        c_num.innerText = compScore;
    }
    else {
        result1.style.backgroundColor = "black";
        result1.innerText = "Its a draw";
    }
}
choices.forEach((choice)=> {
    choice.addEventListener("click",()=>{
        const userChoice = choice.getAttribute("id");
        console.log(userChoice)
        playGame(userChoice);
    })
});

