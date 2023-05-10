let start, playerChooseX, gameStart, dialog, playerChooseO, choiceText, resultText, player;
dialog = document.querySelector("dialog");
start = document.getElementById("start");
playerChooseX = document.getElementById("player-x");
playerChooseO = document.getElementById("player-o");
gameStart = document.getElementById("pop-start");
choiceText = document.getElementById("choice-text");
resultText = document.getElementById("result");


start.addEventListener("click", function () {
  dialog.showModal();
  gameStart.style.display = "none";
});

playerChooseX.addEventListener("click", function () {
  dialog.close();
  choiceText.style.display = "block";
  player = "X";
});

playerChooseO.addEventListener("click", function () {
  dialog.close();
  choiceText.style.display = "block";

  player = "O";
});

// Create an array with 9 elements and initialize each element to 0
var elementsValue = Array(9).fill(0);

var elements = [];

// Loop through IDs "1" to "9"
for (var i = 1; i <= 9; i++) {
  // Generate the ID value
  var id = i.toString();

  // Select the element with the generated ID value
  var element = document.getElementById(id);
  elements.push(element);
  // Add the onclick event listener to the element using a closure
  (function (id) {
    element.addEventListener("click", function () {
      index = id - 1;
      // Display player's move
      elements[index].innerHTML = player;
      checkWinner();
      // Change the value of the element in the array to 1
      elementsValue[index] = "1";
      // Change the text of the choiceText
      choiceText.innerHTML = "Computer's turn";
    });
  })(id);
}


function sum() {
  let elementsValueNumber = elementsValue.map(Number);
  return {
    firstRow:
      elementsValueNumber[0] + elementsValueNumber[1] + elementsValueNumber[2],
    secondRow:
      elementsValueNumber[3] + elementsValueNumber[4] + elementsValueNumber[5],
    thirdRow:
      elementsValueNumber[6] + elementsValueNumber[7] + elementsValueNumber[8],
    firstColumn:
      elementsValueNumber[0] + elementsValueNumber[3] + elementsValueNumber[6],
    secondColumn:
      elementsValueNumber[1] + elementsValueNumber[4] + elementsValueNumber[7],
    thirdColumn:
      elementsValueNumber[2] + elementsValueNumber[5] + elementsValueNumber[8],
    firstDiagonal:
      elementsValueNumber[0] + elementsValueNumber[4] + elementsValueNumber[8],
    secondDiagonal:
      elementsValueNumber[2] + elementsValueNumber[4] + elementsValueNumber[6],
  };
}


function checkWinner() {
  let result = new sum();

  if (
    result.firstRow === 3 ||
    result.secondRow === 3 ||
    result.thirdRow === 3 ||
    result.firstColumn === 3 ||
    result.secondColumn === 3 ||
    result.thirdColumn === 3 ||
    result.firstDiagonal === 3 ||
    result.secondDiagonal === 3
  ) {
    resultText.style.display = "block";
  }

}



function getComputerChoice() {
  let moves = ["rock", "scissor", "paper"];
  let randomChoice = Math.floor(Math.random() * 3);
  let computerChoice = moves[randomChoice];

  if(computerChoice === "rock"){
    computerRockImage.style.backgroundColor = "wheat";
    textResultComputer.innerHTML = "ROCK";
  }
  else if(computerChoice === "paper"){
    computerPaperImage.style.backgroundColor = "wheat";
    textResultComputer.innerHTML = "PAPER";
  }
  else if(computerChoice === "scissor"){
    computerScissorImage.style.backgroundColor = "wheat";
    textResultComputer.innerHTML = "SCISSOR";
  }

  return computerChoice;
}



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
