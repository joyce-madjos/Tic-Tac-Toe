let player;
let dialog = document.querySelector("dialog");
let start = document.getElementById("start");
let playerChooseX = document.getElementById("player-x");
let playerChooseO = document.getElementById("player-o");
let gameStart = document.getElementById("pop-start");
let choiceText = document.getElementById("choice-text");
let resultText = document.getElementById("result-text");
let resultContainer = document.getElementById("result");
let restartGame = document.getElementById("repeat-game");

start.addEventListener("click", function () {
  dialog.showModal();
  gameStart.style.display = "none";
});

playerChooseX.addEventListener("click", function () {
  dialog.close();
  choiceText.style.display = "block";
  player = "X";
  choiceText.innerHTML = "Your choice: " + player + "";
});

playerChooseO.addEventListener("click", function () {
  dialog.close();
  choiceText.style.display = "block";
  player = "O";
  choiceText.innerHTML = "Your choice: " + player + "";
});

restartGame.addEventListener("click", function () {
  window.location.reload();
});

// Create an array with 9 elements and initialize each element to 0
let elementsValue = Array(9).fill(0);
// Create an array to store the elements
let elements = [];

let i;

// Loop through IDs "1" to "9"
for (i = 1; i <= 9; i++) {
  // Generate the ID value
  var id = i.toString();

  // Select the element with the generated ID value
  var element = document.getElementById(id);

  // Add the element to the array
  elements.push(element);

  // Add the onclick event listener to the element using a closure
  (function (id) {
    element.addEventListener("click", function () {
      let index = id - 1;
      
      // Display player's move
      elements[index].innerHTML = player;
      elementsValue[index] = "1";
      checkWinner();


      let computerChoice = checkAvailability();

      // Change the value of the element in the array to 1

      let computer;
      if (player === "X") {
        computer = "O";
      } else if (player === "O") {
        computer = "X";
      }

      elements[computerChoice].innerHTML = computer;
      elementsValue[computerChoice] = "2";
      console.log(elementsValue);
    });
  })(id);
}

function disableElements() {
  const buttons = document.querySelectorAll(".box");
  for (let i = 0; i < buttons.length; i++) {
    const button = buttons[i];
    if (button.textContent.trim().length > 0) {
      button.disabled = true;
    }
  }
}

function checkAvailability() {
  const allElements = document.querySelectorAll(".box");
  const emptyElements = [];
  for (let i = 0; i < allElements.length; i++) {
    const element = allElements[i];
    if (element.textContent.trim().length === 0) {
      emptyElements.push(i);
    }
  }
  const randomIndex =
    emptyElements[Math.floor(Math.random() * emptyElements.length)];
  console.log(`Random index: ${randomIndex + 1}`);

  return randomIndex;
}

function sum() {
  let elementsValueNumber = elementsValue.map(Number);
  return {
    firstRow:
      elementsValueNumber[0] == "1" && elementsValueNumber[1]  == "1" && elementsValueNumber[2] == "1",
    secondRow:
      elementsValueNumber[3] == "1" && elementsValueNumber[4] == "1" && elementsValueNumber[5] == "1",
    thirdRow:
      elementsValueNumber[6] == "1" && elementsValueNumber[7] == "1" && elementsValueNumber[8] == "1",
    firstColumn:
      elementsValueNumber[0] == "1" && elementsValueNumber[3] == "1" && elementsValueNumber[6] == "1",
    secondColumn:
      elementsValueNumber[1] == "1" && elementsValueNumber[4] == "1" && elementsValueNumber[7] == "1",
    thirdColumn:
      elementsValueNumber[2] == "1" && elementsValueNumber[5] == "1" && elementsValueNumber[8] == "1",
    firstDiagonal:
      elementsValueNumber[0] == "1" && elementsValueNumber[4] == "1" && elementsValueNumber[8] == "1",
    secondDiagonal:
      elementsValueNumber[2] == "1" && elementsValueNumber[4] == "1" && elementsValueNumber[6] == "1",
    
    checkComputerWinFirstRow:
      elementsValueNumber[0] == "2" && elementsValueNumber[1]  == "2" && elementsValueNumber[2] == "2",
    checkComputerWinSecondRow:
      elementsValueNumber[3] == "2" && elementsValueNumber[4] == "2" && elementsValueNumber[5] == "2",
    checkComputerWinThirdRow:
      elementsValueNumber[6] === "2" && elementsValueNumber[7] === "2" && elementsValueNumber[8] === "2",
    checkComputerWinFirstColumn:
      elementsValueNumber[0] == "2" && elementsValueNumber[3] == "2" && elementsValueNumber[6] == "2",
    checkComputerWinSecondColumn:
      elementsValueNumber[1] == "2" && elementsValueNumber[4] == "2" && elementsValueNumber[7] == "2",
    checkComputerWinThirdColumn:
      elementsValueNumber[2] == "2" && elementsValueNumber[5] == "2" && elementsValueNumber[8] == "2",
    checkComputerWinFirstDiagonal:
      elementsValueNumber[0] == "2" && elementsValueNumber[4] == "2" && elementsValueNumber[8] == "2",
    checkComputerWinSecondDiagonal:
      elementsValueNumber[2] == "2" && elementsValueNumber[4] == "2" && elementsValueNumber[6] == "2"

  };
}

function checkWinner() {
  let result = new sum();
  console.log(result);
  if (
    result.firstRow === true ||
    result.secondRow === true ||
    result.thirdRow === true ||
    result.firstColumn === true ||
    result.secondColumn === true ||
    result.thirdColumn === true ||
    result.firstDiagonal === true ||
    result.secondDiagonal === true
  ) {
    resultContainer.style.display = "block";
    resultText.innerHTML = "WINNER!";
  } 
  
  else if (
    result.checkComputerWinFirstRow === true || 
    result.checkComputerWinSecondRow === true ||
    result.checkComputerWinThirdRow === true ||
    result.checkComputerWinFirstColumn === true ||
    result.checkComputerWinSecondColumn === true ||
    result.checkComputerWinThirdColumn === true ||
    result.checkComputerWinFirstDiagonal === true ||
    result.checkComputerWinSecondDiagonal === true

  )   {
    resultContainer.style.display = "block";
    resultText.innerHTML = "YOU LOSE";
  }

  else{
    resultContainer.style.display = "none";
    // resultText.innerHTML = "NO WINNER";
  }
}

// function getComputerChoice() {
//   let moves = ["rock", "scissor", "paper"];
//   let randomChoice = Math.floor(Math.random() * 3);
//   let computerChoice = moves[randomChoice];

//   if (computerChoice === "rock") {
//     computerRockImage.style.backgroundColor = "wheat";
//     textResultComputer.innerHTML = "ROCK";
//   } else if (computerChoice === "paper") {
//     computerPaperImage.style.backgroundColor = "wheat";
//     textResultComputer.innerHTML = "PAPER";
//   } else if (computerChoice === "scissor") {
//     computerScissorImage.style.backgroundColor = "wheat";
//     textResultComputer.innerHTML = "SCISSOR";
//   }

//   return computerChoice;
// }

// Close dialog on click outside
// dialog.addEventListener("click", e => {
//   const dialogDimensions = dialog.getBoundingClientRect()
//   if (
//     e.clientX < dialogDimensions.left ||
//     e.clientX > dialogDimensions.right ||
//     e.clientY < dialogDimensions.top ||
//     e.clientY > dialogDimensions.bottom
//   ) {
//     dialog.close()
//   }
// })
