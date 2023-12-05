const readline = require('readline-sync')

function doMath(a, b, c) {
  return new Promise((resolve, reject) => {
    if (typeof a !== 'number' || typeof b !== 'number' || typeof c !== 'number') {
      return reject(new Error('Informe apenas números'));
    }

    const result = (a + b) * c;

    if (result < 50) {
      return reject(new Error('Valor muito baixo'));
    }

    resolve(result);
  });
}

async function main() {
  const a = readline.questionInt('What\'s the first number? ');
  const b = readline.questionInt('What\'s the second number? ');
  const c = readline.questionInt('What\'s the third number? ');

  try {
    const resolve = doMath(a, b, c)
    console.log(resolve);
  } catch (error) {
    console.log(error.message);
  }
};

main();