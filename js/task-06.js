const inputEl = document.querySelector("#validation-input");

inputEl.addEventListener("blur", isInputValid);
inputEl.addEventListener("focus", isFocus);

function isInputValid(event) {
  if (event.currentTarget.value.length == inputEl.getAttribute("data-length")) {
    console.log(event.currentTarget.value.length);
    console.log(inputEl.getAttribute("data-length"));

    inputEl.classList.add("valid");
  } else {
    console.log(inputEl.getAttribute("data-length"));

    inputEl.classList.add("invalid");
  }
}

function isFocus(event) {
  if (
    inputEl.getAttribute("class") == "valid" ||
    inputEl.getAttribute("class") == "invalid"
  ) {
    inputEl.removeAttribute("class");
  }
}
