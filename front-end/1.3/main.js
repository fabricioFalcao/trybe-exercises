import Swal from 'sweetalert2';

const image = document.querySelector('#image');
const button = document.querySelector('#button');
const name = document.querySelector('#name');

const SUPER_API = 'https://akabab.github.io/superhero-api/api';

const NumberOfHeroes = 731;

const randomId = () => Math.floor(Math.random() * NumberOfHeroes) + 1;

button.addEventListener('click', (event) => {
  event.preventDefault();

  const id = randomId();

  fetch(`${SUPER_API}/id/${id}.json`)
    .then((result) => result.json())
    .then((data) => {
      image.src = data.images.md;
      name.innerHTML = data.name;
    })
    .catch((error) => Swal.fire({
      title: 'Hero not found',
      text: error.message,
      icon: 'error',
      confirmButtonText: 'Cool',
    }));
});
