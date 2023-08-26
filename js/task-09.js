function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const buttonEl = document.querySelector('.change-color')

buttonEl.addEventListener('click',clickOnBtn);

function clickOnBtn() {
  const spanEl = document.querySelector('.color');
  const color = getRandomHexColor();
spanEl.textContent = color;

document.body.setAttribute('style', 'background-color:' + color);
}
