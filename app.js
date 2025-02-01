let userscore = 0;
let compscore = 0;
let reslt = document.querySelector(".result");
const choices = document.querySelectorAll(".cho");
let score_usr = document.querySelector("#usrscore");
let score_comp = document.querySelector("#compscore");

const gencompchoice = () => {
    const op = ["rock", "paper", "scissors"];
    const randIx = Math.floor(Math.random() * 3);
    return op[randIx];
};

const drawgame = () => {
    console.log("draw game");
    reslt.innerText = "DRAW GAME";
    reslt.style.backgroundColor = "blanchedalmond";
};

const playergame = (userchoice) => {
    const compchoice = gencompchoice();
    console.log("computer choice=", compchoice);
    if (userchoice === compchoice) {
        drawgame();
    } else {
        let userwin = true;
        if (userchoice === "rock") {
            userwin = compchoice === "paper" ? false : true;
        } else if (userchoice === "paper") {
            userwin = compchoice === "scissors" ? false : true;
        } else {
            userwin = compchoice === "rock" ? false : true;
        }
        showwinner(userwin, userchoice, compchoice);
    }
};

const showwinner = (userwin, userchoice, compchoice) => {
    if (userwin) {
        userscore++;
        score_usr.innerText = userscore;
        console.log("you win game");
        reslt.innerText = `YOU WIN, ${compchoice} is beaten by ${userchoice}`;
        reslt.style.backgroundColor = "green";
    } else {
        compscore++;
        score_comp.innerText = compscore;
        console.log("you lose");
        reslt.innerText = `YOU LOSE! ${userchoice} is beaten by ${compchoice}`;
        reslt.style.backgroundColor = "red";
    }
};

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userchoice = choice.getAttribute("id");
        console.log("we chosen=", userchoice);
        playergame(userchoice);
    });
});