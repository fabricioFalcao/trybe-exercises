// Exercício 1
// // (Bônus) Faça um programa que receba uma string em algarismos romanos e retorne o número que a string representa.

let numerosRomanos = {
  i: 1,
  v: 5,
  x: 10,
  l: 50,
  c: 100,
  d: 500,
  m: 1000,
};

function romanoParaDecimal(numero) {
  numero = numero.toLowerCase();
  let len = numero.length;
  let soma = numerosRomanos[numero[len - 1]];
  let atual = numerosRomanos[numero[len - 1]];

  for (let i = len - 2; i >= 0; i -= 1) {
    let prox = numerosRomanos[numero[i]];

    if (atual <= prox) {
      soma += prox;
    } else {
      soma -= prox;
    }

    atual = prox;
  }

  return soma;
}

// Crie uma função chamada arrayOfNumbers, que receberá a variável vector como parâmetro.
// Por meio de um loop for, percorra essa variável, busque os números pares e os adicione a um novo array, que deverá ser retornado pela função no fim.

const arrayOfNumbers = (vector) => {
  vector = [].concat(vector[0], vector[1], vector[2]);
  let pares = [];
  for (let i of vector) {
    const arrayOfNumbers = (vector[i] % 2 === 0) && pares.push(vector[i]);
  }
  return pares;
};

// Por meio do array de frutas basket, retorne um objeto que contenha o nome da fruta como chave e a quantidade de vezes que ela aparece no array como valor. Por exemplo, o array [‘Melancia’, ‘Abacate’, ‘Melancia’, ‘Melancia’, ‘Uva’] deverá retornar { Melancia: 3, Abacate: 1, Uva: 1 } quando passado como argumento para a função.

let basket = [
  'Melancia', 'Abacate', 'Melancia', 'Melancia', 'Uva', 'Laranja',
  'Jaca', 'Pera', 'Melancia', 'Uva', 'Laranja', 'Melancia',
  'Banana', 'Uva', 'Pera', 'Abacate', 'Laranja', 'Abacate',
  'Banana', 'Melancia', 'Laranja', 'Laranja', 'Jaca', 'Uva',
  'Banana', 'Uva', 'Laranja', 'Pera', 'Melancia', 'Uva',
  'Jaca', 'Banana', 'Pera', 'Abacate', 'Melancia', 'Melancia',
  'Laranja', 'Pera', 'Banana', 'Jaca', 'Laranja', 'Melancia',
  'Abacate', 'Abacate', 'Pera', 'Melancia', 'Banana', 'Banana',
  'Abacate', 'Uva', 'Laranja', 'Banana', 'Abacate', 'Uva',
  'Uva', 'Abacate', 'Abacate', 'Melancia', 'Uva', 'Jaca',
  'Uva', 'Banana', 'Abacate', 'Banana', 'Uva', 'Banana',
  'Laranja', 'Laranja', 'Jaca', 'Jaca', 'Abacate', 'Jaca',
  'Laranja', 'Melancia', 'Pera', 'Jaca', 'Melancia', 'Uva',
  'Abacate', 'Jaca', 'Jaca', 'Abacate', 'Uva', 'Laranja',
  'Pera', 'Melancia', 'Jaca', 'Pera', 'Laranja', 'Jaca',
  'Pera', 'Melancia', 'Jaca', 'Banana', 'Laranja', 'Jaca',
  'Banana', 'Pera', 'Abacate', 'Uva',
];

let result = {};

for (let index = 0; index < basket.length; index += 1) {
  let fruit = basket[index];
  if (!result[fruit]) result[fruit] = 0;
  result[fruit] += 1;
}

let summaries = [];

for (fruit in result) {
  let message = `${result[fruit]} ${fruit}`;
  if (result[fruit] > 1) message += 's';
  summaries.push(message);
}

console.log(`Sua cesta possui: ${summaries.join(', ')}.`);

// Acesse as chaves nome, sobrenome, andar e apartamento do último morador do blocoDois e faça um console.log no seguinte formato: “O morador do bloco 2 de nome Zoey Brooks mora no 1° andar, apartamento 101”.
// Utilize o for para imprimir o nome completo de todos os moradores do bloco 1, acessando suas chaves nome e sobrenome. Depois, faça o mesmo para os moradores do bloco 2.

let moradores = {
  blocoUm: [
    {
      nome: 'Luíza',
      sobrenome: 'Guimarães',
      andar: 10,
      apartamento: 1005,
    },
    {
      nome: 'William',
      sobrenome: 'Albuquerque',
      andar: 5,
      apartamento: 502,
    },
  ],
  blocoDois: [
    {
      nome: 'Murilo',
      sobrenome: 'Ferraz',
      andar: 8,
      apartamento: 804,
    },
    {
      nome: 'Zoey',
      sobrenome: 'Brooks',
      andar: 1,
      apartamento: 101,
    },
  ],
};

let zo = moradores['blocoDois'][1];

console.log(`O morador do bloco 2 de nome ${zo['nome']} ${zo['sobrenome']} mora no ${zo['andar']}º andar, apartamento ${zo['apartamento']}.`);
console.log(`O morador do bloco 2 de nome ${zo.nome} ${zo.sobrenome} mora no ${zo.andar}º andar, apartamento ${zo.apartamento}.`);

let b1 = moradores.blocoUm;
let b2 = moradores.blocoDois;

// for (let i1 of b1){
  for (let i1 =0; i1 < b1.length; i1 += 1){
  console.log(moradores.blocoUm[i1].nome + ' ' + moradores.blocoUm[i1].sobrenome);
}

for (let i2 =0; i2 < b2.length; i2 += 1){
  console.log(b2[i2]['nome'] + ' ' + b2[i2].sobrenome);
}