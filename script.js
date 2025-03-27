console.clear();

// query selectors
const counterButton = document.querySelector(".counter-button");
const counterText = document.querySelector(".counter-text");
const oddColumn = document.querySelector(".odd-column");
const evenColumn = document.querySelector(".even-column");
const threeColumn = document.querySelector(".three-column");
const fiveColumn = document.querySelector(".five-column");
const fifteenColumn = document.querySelector(".fifteen-column");
const resetButton = document.querySelector(".reset-button");

//variables
let counter = 0;

// functions
function createBox() {
  const div = document.createElement("div");
  div.classList.add("box");
  numberTheBox(div);

  const isClicked = div.addEventListener("click", function () {
    console.log(div.innerText);
  });
}

function removeBox() {
  if (isClicked) {
    console.log(div);
  }
}

function numberTheBox(div) {
  const h1 = document.createElement("h1");
  h1.classList.add("box-numbers");
  h1.innerText = counter;
  div.appendChild(h1);
  console.log("div box", div);
  addBoxToColumn(div);
}

function addBoxToColumn(div) {
  if (counter % 15 === 0) {
    fifteenColumn.appendChild(div);
  } else if (counter % 5 === 0) {
    fiveColumn.appendChild(div);
  } else if (counter % 3 === 0) {
    threeColumn.appendChild(div);
  } else if (counter % 2 !== 0) {
    oddColumn.appendChild(div);
  } else {
    evenColumn.appendChild(div);
  }
}

//event listeners
counterButton.addEventListener("click", function () {
  counter++;
  counterText.innerText = counter;
  createBox();
});

resetButton.addEventListener("click", function () {
  window.location.reload();
});
