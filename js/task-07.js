const inputEl = document.querySelector('#font-size-control');
const spanEl = document.querySelector('#text');

inputEl.addEventListener('input', onInputInput);

function onInputInput() {
    spanEl.setAttribute('style', 'font-size:'+inputEl.value+'px');
}