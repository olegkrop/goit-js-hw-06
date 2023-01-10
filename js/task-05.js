const inputText = document.querySelector('#name-input');
const outputText = document.querySelector('#name-output');

inputText.addEventListener('input', event => {
    outputText.textContent = event.target.value;

    if (event.target.value.trim() === '') {
        outputText.textContent = 'Anonymous'
    };
});
