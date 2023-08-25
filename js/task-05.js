const inputEl = document.querySelector("#name-input");
const spanEl = document.querySelector("#name-output");

inputEl.addEventListener("input", onInputInput);

function onInputInput(event) {
  spanEl.textContent =
    inputEl != null ? event.currentTarget.value : "Anonymous";
}
