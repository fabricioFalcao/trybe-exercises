// Um número primo é um número inteiro maior que 1 que possui somente dois divisores, ou seja, é divisível por 1 e por ele mesmo. Sabendo disso, escreva um algoritmo que imprima no console o maior número primo entre 2 e 50.

let maiorPrimo = 0;

let menorNumero = 2;
let maiorNumero = 50;

for (let numeroTeste = maiorNumero - 1; numeroTeste >= menorNumero; numeroTeste -= 1) {
  let ePrimo = true;
  for (let divisorTeste = menorNumero; divisorTeste < numeroTeste; divisorTeste += 1) {
    if (numeroTeste % divisorTeste === 0) {
      ePrimo = false;
    }
  }
  if (ePrimo) {
    maiorPrimo = numeroTeste;
    break;
  }
}
console.log("O maior número primo entre " + menorNumero + " e " + maiorNumero + " é " +  maiorPrimo);
