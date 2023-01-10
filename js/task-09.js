function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
};

const changeColorButton = document.querySelector('.change-color');
const body = document.querySelector('body');
const colorValue = document.querySelector('.color');

changeColorButton.addEventListener('click', event => {
  // colorValue.textContent = body.style.backgroundColor;
  const color = getRandomHexColor();
  body.style.backgroundColor = color;
  colorValue.textContent = color;
});