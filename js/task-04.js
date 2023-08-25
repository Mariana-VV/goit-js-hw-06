const valueEl = document.querySelector("#counter span");

const array = document.querySelectorAll("#counter button");
const inkBtn = array[1];
console.log(inkBtn.textContent);
const dikBtn = array[0];
console.log(dikBtn.textContent);

let counterValue = 0;
inkBtn.addEventListener("click", () => {
  counterValue++;
  valueEl.textContent = counterValue;
});

dikBtn.addEventListener("click", () => {
  counterValue--;
  valueEl.textContent = counterValue;
});
