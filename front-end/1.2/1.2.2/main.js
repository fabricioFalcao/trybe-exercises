const dogButton = document.querySelector('#dog');

const catButton = document.querySelector('#cat');

const surpriseButton = document.querySelector('#surprise');

const puppyImage = document.querySelector('#pet-image');

dogButton.addEventListener('click', () => {
  fetch('https://dog.ceo/api/breeds/image/random')
  .then(res => res.json())
  .then(data => puppyImage.src = data.message)
});

catButton.addEventListener('click', () => {
  fetch('https://api.thecatapi.com/v1/images/search')
  .then(res => res.json())
  .then(data => puppyImage.src = data[0].url)
});

surpriseButton.addEventListener('click', () => {
Promise.any([
  fetch('https://dog.ceo/api/breeds/image/random'),
  fetch('https://api.thecatapi.com/v1/images/search')
])
.then(res => res.json())
.then(data => puppyImage.src = data.message || data[0].url)
});
