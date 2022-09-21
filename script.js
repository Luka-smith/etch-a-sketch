// document.querySelector("button") = () => {}
let button = document.querySelector("button");
let inputNum;
let row;
let mainDiv = document.querySelector(".mainDiv");
mainDiv.classList.add("mainDiv");

button.addEventListener("click", eventHandler);

function eventHandler() {
  while (mainDiv.firstChild) {
    mainDiv.removeChild(mainDiv.lastChild);
  }

  createRows();
}

function inputBelowHundred() {
  if (inputNum < 0) {
    inputNum = 0;
    return inputNum;
  }
  if (inputNum > 100) {
    inputNum = 100;
    return inputNum;
  } else {
    return inputNum;
  }
}

function randomColorGenerator() {
  let randomColor = Math.floor(Math.random() * 16777215).toString(16);
  return "#" + randomColor;
}

function createRows() {
  inputNum = parseInt(prompt("Your number from 1 to 100: "));
  inputBelowHundred();
  let rowsHeight = 960 / inputNum;
  for (i = 0; i <= inputNum - 1; i++) {
    row = document.createElement("div");
    row.classList.add("row");
    row.style.height = rowsHeight + "px";
    mainDiv.appendChild(row);
    createSquare(i);
  }
}

function createSquare(i) {
  let squareWidth = 960 / inputNum;
  let squareHeight = 960 / inputNum;
  for (i = 0; i <= inputNum - 1; i++) {
    let square = document.createElement("div");
    square.classList.add("square");
    square.style.width = squareWidth + "px";
    square.style.height = squareHeight + "px";
    square.style.backgroundColor = randomColorGenerator();
    row.appendChild(square);
  }
}

/*









function squares (#fromPrompt) {
    loop each while <= #from prompt {
    columnWidth = 960 / #fromPrompt
    document.createElement(div)
    apply class with horizontal alignment and random colors
    set width
    appendChild to main div
    }
}

function onHover () {
    if (hover) {
     apply class hover
     
    }
   }

function removeHover() {
    when mouse is not hovering anymore
    remove class hover
}   



create class with random colors for each square
create class with random hover color for each square



set hover on each cell


set event listener for mouse movements through main div and children
mouseover - change color on hover and

precise location of cursor event listener?
canvas drawing


loop while location === main div
draw dot on current location

draw mouse trail



*/
