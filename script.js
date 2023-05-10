let start, playerChooseX, gameStart, dialog;
dialog = document.querySelector("dialog")
start = document.getElementById("start");
playerChooseX = document.getElementById("player-x");
playerChooseO = document.getElementById("player-o");
gameStart = document.getElementById("pop-start");

start.addEventListener("click", function () {
  dialog.showModal();
  gameStart.style.display = "none";
});

playerChooseX.addEventListener("click", function () {
  dialog.close();
});

playerChooseO.addEventListener("click", function () {
  dialog.close();
});

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