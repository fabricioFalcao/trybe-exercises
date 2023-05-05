let numeroA = 28;
let numeroB = 37;
let numeroC = 16;

// 8 - Utilize if/else para escrever um código que defina três números em variáveis e retorne true se pelo menos uma das três for par. Caso contrário, o código deve retornar false.

// Bônus: use somente um if.

let par = false;

if (numeroA % 2 === 0 || numeroB % 2 === 0 || numeroC % 2 === 0) {
  par = true;
}
  console.log(par);

//   9 - Utilize if/else para escrever um código que defina três números em variáveis e retorne true se pelo menos uma das três for ímpar. Caso contrário, o código deve retornar false.

// Bônus: use somente um if.

let impar = false

if (numeroA % 2 !== 0 || numeroB % 2 !== 0 || numeroC % 2 !== 0) {
  impar = true;
}
  console.log(impar);