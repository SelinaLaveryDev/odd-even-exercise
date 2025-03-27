console.clear();

// query selectors
const counterButton = document.querySelector(".counter-button");
const counterText = document.querySelector(".counter-text");
const oddColumn = document.querySelector(".odd-column");
const evenColumn = document.querySelector(".even-column");

//variables
let counter = 0;

// functions
function createBox() {
  const div = document.createElement("div");
  div.classList.add("box");
  // number the box
  const h1 = document.createElement("h1");
  h1.classList.add("box-numbers");
  h1.innerText = counter;
  div.appendChild(h1);
  console.log("div box", div);
  addBoxToColumn(div);
}

//event listeners
counterButton.addEventListener("click", function () {
  counter++;
  counterText.innerText = counter;
  createBox();
});
