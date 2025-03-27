console.clear();

// query selectors
const counterButton = document.querySelector(".counter-button");
const oddColumn = document.querySelector(".odd-column");
const oddBox = document.createElement("div");
const boxNum = document.createElement("h1");

//variables
let counter = 0;

// dom manipulation
oddBox.classList.add("box");
oddColumn.appendChild(oddBox);
oddBox.appendChild(boxNum);
boxNum.classList.add("box-numbers");
boxNum.innerText = "1";
console.log(boxNum);

//event listeners
counterButton.addEventListener("click", function () {
  counter++;
  counterText.innerText = counter;
  createBox();
});
