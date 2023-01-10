const inputEl = document.querySelector('#controls input');
const createButton = document.querySelector('button[data-create]');
const destroyButton = document.querySelector('button[data-destroy]');
const boxesEl = document.querySelector('#boxes');
inputEl.value = 1;

createButton.addEventListener('click', createButtonHandler);
destroyButton.addEventListener('click', destroyBoxes);

function createButtonHandler() {
  boxesEl.innerHTML = '';
  const amount = inputEl.value;
  createBoxes(amount);
}

function createBoxes(amount) {
  const boxesMarkup = [];
  for (let i = 0; i < amount; i += 1) {
    const div = document.createElement('div');
    div.style.background = getRandomHexColor();
    div.style.width = `${30 + 10 * i}px`;
    div.style.height = `${30 + 10 * i}px`;
    boxesMarkup.push(div);
  }
  boxesEl.append(...boxesMarkup);
}

function destroyBoxes() {
  boxesEl.innerHTML = '';
  inputEl.value = 1;
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}