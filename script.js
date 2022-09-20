// document.querySelector("button") = () => {}

let canvas = document.querySelector(".canvas");
canvas.classList.add("canvas");

let mainDiv = document.querySelector(".mainDiv");
mainDiv.classList.add("mainDiv");

// let square = document.createElement("div");
// square.classList.add("square");
// square.style.backgroundColor = randomColorGenerator();
// mainDiv.appendChild(square);
// let inputNum;
// function btnHandler() {
//     inputNum = parseInt(prompt("Your number from 1 to 100: "));
// }

let inputNum = parseInt(prompt("Your number from 1 to 100: ")); // not more than 100 limit
// console.log(input);

// let inputNum = function (input) {
//   if (input < 0) {
//     inputNow = 0;
//     // console.log(input);
//     return inputNow;
//   }
//   if (input > 100) {
//     inputNow = 100;
//     // console.log(input);
//     return inputNum;
//   } else {
//     // console.log(input);
//     return input;
//   }
// };
// console.log(inputNum(input));

function randomColorGenerator() {
  let randomColor = Math.floor(Math.random() * 16777215).toString(16);
  //   console.log(randomColor);
  return "#" + randomColor;
}
let row;

function createRows() {
  let rowsHeight = 960 / inputNum;
  for (i = 0; i <= inputNum - 1; i++) {
    row = document.createElement("div");
    row.classList.add("row");
    // row.style.backgroundColor = randomColorGenerator();
    row.style.height = rowsHeight + "px";
    mainDiv.appendChild(row);
    createSquare(i);
  }
  //   console.log(rowsHeight + "px");
}
createRows();

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
// createSquare();

/*
calculate columns and rows from #?





create a # of columns and a # of rows

css grid?


function rows (#fromPrompt) {
    rowHeight = 960 / #fromPrompt
    loop while # is <= #prompt
    create div row with rowHeight and full width
    apply class with children alignment
    append to main div
    squares();

}



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
