let counterValue = 0;

const counter = document.querySelector('#value');
const buttonIncrease = document.querySelector('button[data-action="increment"]');
const buttonDecrease = document.querySelector('button[data-action="decrement"]');

buttonIncrease.addEventListener('click', () => {
    counterValue += 1;
    counter.textContent = counterValue;
});

buttonDecrease.addEventListener('click', () => {
    counterValue -= 1;
    counter.textContent = counterValue;
});

