const pai = document.getElementById('pai');
const irmao = document.createElement('section');
irmao.id = 'irmaoElementoOndeVoceEsta';
pai.appendChild(irmao);

const filho = document.createElement('section');
filho.id = 'filhoElementoOndeVoceEsta';
const elemento = document.getElementById('elementoOndeVoceEsta');
elemento.appendChild(filho);

const neto = document.getElementById('primeiroFilhoDoFilho');
const bisneto = document.createElement('section');
bisneto.id = 'filhoDoPrimeiroFilhoDoFilho';
neto.appendChild(bisneto);

const terceiroFilho = filhoDoPrimeiroFilhoDoFilho.parentElement.parentElement.nextElementSibling

console.log(terceiroFilho);
