// SELETORES
const inputText = document.querySelector("#input-text");
const inputCheckbox = document.querySelector("#input-checkbox");
const hrefLink = document.querySelector("#href");

hrefLink.addEventListener('click', (ev) => {ev.preventDefault()})

inputCheckbox.addEventListener('click', (ev) => {ev.preventDefault()})

inputText.addEventListener('keypress', (event) => {
   if (event.key !== 'a') {
    event.preventDefault();
  }
});