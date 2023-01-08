const inputMarkup = document.querySelector("#font-size-control");
const spanMarkup = document.querySelector("#text");

spanMarkup.style.fontSize = inputMarkup.value + "px";

inputMarkup.addEventListener('input', () => {
    spanMarkup.style.fontSize = inputMarkup.value + "px";
});