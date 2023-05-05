// 1 - Elabore alguns códigos e imprima o resultado no console usando o console.log, um para cada operação aritmética básica. Seu código deve ter duas variáveis, a e b, definidas no começo com os valores que serão operados. Escreva códigos para:

// Adição (a + b)
// Subtração (a - b)
// Multiplicação (a * b)
// Divisão (a / b)
// Módulo (a % b)

let a = 16;
let b = 4;
let c = 8;

let soma = a + b;
let subt = a - b;
let multp = a * b;
let divi = a / b;
let modulo = a % b;

console.log(soma);
console.log(subt);
console.log(multp);
console.log(divi);
console.log(modulo);

// 2 - Utilize if/else para escrever um código que retorne o maior de dois números. Defina, no começo do seu código, duas variáveis com os valores que serão comparados.

if (a > b) {
  console.log(a + " é maior que " + b);
} else {
  console.log(b + " é maior que " + a);
}

// 3 - Utilize if/else para escrever um código que retorne o maior de três números. Defina, no começo do seu código, três variáveis com os valores que serão comparados.

if (a > b && a > c) {
  console.log(a + " é maior que " + b + " e " + c);
} else if (b > a && b > c) {
  console.log(b + " é maior que " + a + " e " + c);
} else {
  console.log(c + " é maior que " + a + " e " + b)
}
// 4 - Utilize if/else para escrever um código que, dado um valor recebido como parâmetro, retorne: “positive”, se esse valor for positivo; “negative”, se esse valor for negativo, e “zero”, caso esse valor não seja nem positivo nem negativo.

let parametro = -3;

if (parametro > 0) {
  console.log(parametro + " é positivo");
} else if (parametro < 0) {
  console.log(parametro + " é negativo");
} else console.log("zero");