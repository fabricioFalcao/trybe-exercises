// Função 1: Escreva uma função que substitua a letra ‘x’ em uma frase.

const substituaX = (nome) => {
  const frase = 'Tryber x aqui!';
  let split = frase.split(' ');
  console.log(split);
  let x = split[1] = nome;
console.log(x);
  return x

};
console.log(substituaX('Bebeto'));



// const frase = 'Tryber x aqui!';
// let fraseX = frase.split(' ');
// console.log(fraseX);