// Considere esse array para realizar os próximos exercícios.

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

// Percorra o array imprimindo todos os valores contidos nele com a função console.log().

for (let index = 0; index < numbers.length; index += 1) {
  const imprimeNumbers = numbers[index]
  console.log("Imprime números: " + imprimeNumbers);
}

// Some todos os valores contidos no array e imprima o resultado.
let somaNumbers = 0;
for (let index = 0; index < numbers.length; index += 1) {
  somaNumbers += numbers[index]
}

console.log("Soma números: " + somaNumbers);


// Calcule e imprima a média aritmética dos valores contidos no array.

let mediaAritimetica = somaNumbers / numbers.length

console.log("Média Aritimética: " + mediaAritimetica);

// Com base no código que acabou de gerar, referente ao calculo da média aritmética, faça com que: caso o valor final seja maior que 20, imprima a mensagem “O valor da média aritmética é maior que 20”; e, caso não seja maior que 20, imprima a mensagem “O valor da média aritmética é menor ou igual a 20”.

if (mediaAritimetica > 20) {
  console.log("O valor da média aritmética é maior que 20");
} else {
  console.log("O valor da média aritmética é menor ou igual a 20");
}