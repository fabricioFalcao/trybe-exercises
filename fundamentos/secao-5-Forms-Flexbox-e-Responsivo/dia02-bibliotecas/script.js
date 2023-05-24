const button = document.getElementById('submit-btn');
button.addEventListener('click', (ev) => ev.preventDefault());

const agreement = document.getElementById('agreement');
let toggle = true;
agreement.addEventListener('input', () => {
  toggle = !toggle;
  button.disabled = toggle;
});
