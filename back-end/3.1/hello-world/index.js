const readline = require('readline-sync');

const name = readline.question('Qual é o sue nome?');
const age = readline.questionInt('Qual a sua idade?');

console.log(`Hello, ${name}! Your are ${age} years old!`);

