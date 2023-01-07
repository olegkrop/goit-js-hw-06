const inputText = document.querySelector('#name-input');
const nameValue = document.querySelector('#name-output');

inputText.addEventListener('input', event => {
    nameValue.textContent = event.target.value.trim();

    if (event.target.value.trim() === '') {
        nameValue.textContent = 'Anonymous'
    };
});
