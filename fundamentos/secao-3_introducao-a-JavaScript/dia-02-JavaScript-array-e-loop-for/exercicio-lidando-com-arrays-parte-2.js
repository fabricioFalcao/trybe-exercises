// Utilizando for, crie um array que vá de 1 a 25 e imprima o resultado.

let arr1a25 = [];

for ( let numero = 1; numero <= 25; numero += 1){
  arr1a25.push(numero)
}

console.log(arr1a25);

// Utilizando o array que acabou de criar, imprima o resultado da divisão de cada um dos elementos por 2.

let arrDiv2 = [];
let metade;

for ( let numero = 1; numero <= 25; numero += 1){
  metade = numero / 2;
  arrDiv2.push(metade)
}
console.log(arrDiv2);

// Solução do gabarito:

for (let index = 0; index < arr1a25.length; index += 1) {
  console.log(arr1a25[index] / 2);
};
