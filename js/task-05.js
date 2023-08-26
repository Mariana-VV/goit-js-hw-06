const inputEl = document.querySelector("#name-input");
const spanEl = document.querySelector("#name-output");

inputEl.addEventListener("input", onInputInput);

function onInputInput(event) {
  
  spanEl.textContent = event.currentTarget.value ;
  if(spanEl.textContent == ''){
    spanEl.textContent = "Anonymous";
  }
}

// inputEl.addEventListener('blur' , function () {
//   if(spanEl.textContent == ''){
//     spanEl.textContent = "Anonymous";
//   }
// });
