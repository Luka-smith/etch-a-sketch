// document.querySelector("button") = () => {}
let button = document.querySelector("button");
let inputNum;
let row;
let mainDiv = document.querySelector(".mainDiv");
mainDiv.classList.add("mainDiv");

// mainDiv.addEventListener("mousemove", (e) => {
//   dot = document.createElement("p");
//   dot.style.width = "10px";
//   dot.style.height = "10px";
//   dot.style.backgroundColor = "white";
//   dot.style.borderRadius = "100px";
//   dot.style.position = "absolute";
//   dot.style.left = `${e.screenX - 15}px`;
//   dot.style.top = `${e.screenY - 100}px`;
//   document.querySelector(".mainDiv").appendChild(dot);
// });

mainDiv.addEventListener("mouseover", (e) => {
  e.target.style.backgroundColor = randomColorGenerator();
});

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
  //   let rowsHeight = 960 / inputNum;
  for (i = 0; i <= inputNum - 1; i++) {
    row = document.createElement("div");
    row.classList.add("row");
    // row.style.height = rowsHeight + "px";
    mainDiv.appendChild(row);
    createSquare(i);
  }
}

function createSquare(i) {
  //   let squareWidth = 960 / inputNum;
  //   let squareHeight = 960 / inputNum;
  for (i = 0; i <= inputNum - 1; i++) {
    square = document.createElement("div");
    square.classList.add("square");
    // square.style.width = squareWidth + "px";
    // square.style.height = squareHeight + "px";
    square.style.backgroundColor = "black"; //randomColorGenerator();
    row.appendChild(square);
    // onHover();
  }
}

// let mouseHover = document.querySelectorAll(".square");
// console.log(mouseHover);

// mouseHover.addEventListener("mouseover", (e) => {
//   console.log(e.target);
// });

//   noPropagation();
//   square.addEventListener("mouseover", () => {
//     console.log(square);

//     // square.style.backgroundColor = "white";
//   });
// });

// }

// let x = 0;
// let y = 0;
// let isDrawing = false;
// const canvas = document.getElementsByClassName(".mainDiv");
// const context = canvas.getContext("2d");
// canvas.addEventListener("mousedown", (e) => {
//   x = e.offsetX;
//   y = e.offsetY;
//   isDrawing = true;
// });

// canvas.addEventListener("mousemove", (e) => {
//   if (isDrawing === true) {
//     drawLine(x, y, e.offsetX, e.offsetY);
//     x = e.offsetX;
//     y = e.offsetY;
//   }
// });

// canvas.addEventListener("mouseup", (e) => {
//   if (isDrawing === true) {
//     drawLine(x, y, e.offsetX, e.offsetY);
//     x = e.offsetX;
//     y = e.offsetY;
//     isDrawing = false;
//   }
// });

// function drawLine(x1, y1, x2, y2) {
//   canvas.beginPath();
//   context.strokeStyle = "black";
//   context.lineWidth = 2;
//   context.moveTo(x1, y1);
//   context.lineTo(x2, y2);
//   context.stroke();
//   context.closePath();
// }

/*



function onHover () {
    if (hover) {
     apply class hover
     
    }
   }

function removeHover() {
    when mouse is not hovering anymore
    remove class hover
}   

set event listener for mouse movements through main div and children
mouseover - change color on hover and

precise location of cursor event listener?
canvas drawing


loop while location === main div
draw dot on current location

draw mouse trail



*/
