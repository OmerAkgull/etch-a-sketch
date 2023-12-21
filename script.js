//global variables
const container = document.querySelector(".container");
const gridButton = document.querySelector("#gridBtn");

//create grids
function createGrids() {
  container.innerHTML = "";
  for (let i = 0; i < 256; i++) {
    const div = document.createElement("div");
    div.classList.add("grid");
    container.appendChild(div);
    div.addEventListener("mouseover", hoverEffect)
  }
}

createGrids();

//resize grid
const changeSquareNumber = () => {
  container.innerHTML = "";
  let squareNumber = prompt(
    "Please enter the number of squares per side, maximum of 100."
  );
  let boxSize = 480 / squareNumber;
  if (squareNumber > 0 && squareNumber < 101) {
    for (let i = 0; i < squareNumber * squareNumber; i++) {
      const div2 = document.createElement("div");
      div2.classList.add("grid");
      div2.style.height = `${boxSize}px`;
      div2.style.width = `${boxSize}px`;
      container.appendChild(div2);
      div2.addEventListener("mouseover", hoverEffect)
    }
  } else {
    changeSquareNumber();
  }
};

gridButton.addEventListener("click", changeSquareNumber);


//hover effect


function hoverEffect(event) {
  event.target.style.background = "black";
}

//reset functionality
resetBtn = document.querySelector("#resetBtn");
resetBtn.addEventListener("click", createGrids);
