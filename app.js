let userScore = 0;
let compScore = 0;
let ps = document.querySelector("#playerScore");
let cs = document.querySelector("#computerScore");
const msg = document.querySelector("#message");

const choices = document.querySelectorAll(".choice");

choices.forEach((choice) => {
  choice.addEventListener("click", (e) => {
    const userChoice = choice.getAttribute("id");
    playGame(userChoice);
  });
});

const playGame = (userChoice) => {
  //generate Computer Choice
  const compChoice = generateComputerChoice();
  //compare to see who won

  if (compChoice == userChoice) {
    msg.innerText = "Drawn.😑\nComp: " + compChoice + "\n Your: " + userChoice;
    msg.style.backgroundColor = "#1d263b";
  } else {
    let userWin = true;
    if (userChoice == "rock") {
      // comp options -> paper , scissors
      userWin = compChoice == "paper" ? false : true;
    } else if (userChoice == "paper") {
      // comp options -> rock , scissors
      userWin = compChoice == "scissors" ? false : true;
    } else if (userChoice == "scissors") {
      // comp options -> paper , rock
      userWin = compChoice == "rock" ? false : true;
    }
    showWinner(userWin, compChoice, userChoice);
  }
};
const generateComputerChoice = () => {
  //generate Computer Choice R P S
  const options = ["rock", "paper", "scissors"];
  let idx = Math.floor(Math.random() * 3);
  return options[idx];
};
const showWinner = (userWin, compChoice, userChoice) => {
  if (userWin) {
    userScore++;
    ps.innerText = userScore;
    msg.innerText =
      "You win.🔥 \nComp: " + compChoice + "\n Your: " + userChoice;
    msg.style.backgroundColor = "Green";
  } else {
    compScore++;
    cs.innerText = compScore;
    msg.innerText =
      "You Lose.😭 \n Comp: " + compChoice + "\n Your: " + userChoice;

    // \n" +    "Comp Choice: " + compChoice + "\n" + "Your Choice" + userChoice;
    msg.style.backgroundColor = "Red";
  }
};
//compare Who won way 2
// if (compChoice == userChoice) {
//     console.log("Drawn!");
//   } else if (compChoice == "paper" && userChoice == "rock") {
//     console.log("Comp Won");
//   } else if (compChoice == "paper" && userChoice == "scissors") {
//     console.log("User Won");
//   } else if (compChoice == "scissor" && userChoice == "paper") {
//     console.log("Comp Won");
//   } else if (compChoice == "scissor" && userChoice == "rock") {
//     console.log("User Won");
//   } else if (compChoice == "rock" && userChoice == "paper") {
//     console.log("User Won");
//   } else if (compChoice == "rock" && userChoice == "scissors") {
//     console.log("Comp Won");
//   }
