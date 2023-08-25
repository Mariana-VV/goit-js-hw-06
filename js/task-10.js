function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const createBtnEl = document.querySelector("#controls>button");
const destroyBtnEl = document.querySelector("#controls>button:last-child");

function createBoxes(amount) {
  const array = [];
  let size = 30;
  while (amount > 0) {
    const divEl = document.createElement("div");
    divEl.setAttribute(
      "style",
      "width:" +
        size +
        "px;height:" +
        size +
        "px;background-color:" +
        getRandomHexColor()
    );
    array.push(divEl);
    amount--;
    size += 10;
  }
  const boxEl = document.querySelector("#boxes");
  boxEl.append(...array);
}

const inputEl = document.querySelector("#controls>input");

let value = 0;
inputEl.addEventListener("input", function (event) {
  value = event.currentTarget.value;
});

createBtnEl.addEventListener("click", function () {
  createBoxes(value);
  value = 0;
});

function destroy() {
  const boxEl = document.querySelectorAll("#boxes>div");
  boxEl.forEach((element) => {
    element.remove();
  });
  inputEl.value = 0;
}

destroyBtnEl.addEventListener("click", destroy);
