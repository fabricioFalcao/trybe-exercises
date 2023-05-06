// Com base nessas informações, crie um algoritmo que imprima na tela o fatorial de 10.

let numero = 10;
let fatorial = 1;

for (let fator = 1; fator <= numero; fator += 1){
  fatorial *= fator;
}
console.log(numero + "! = " + fatorial);