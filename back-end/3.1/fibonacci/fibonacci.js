const readline = require('readline-sync')

function fibonacci(seriesLength = 5) {
  let a = 1;
  let b = 1;

  for (let index = seriesLength; index >= 0; index -= 1) {
    if (b) console.log(b);

    const temp = a;

    a += b;

    b = temp;
  };

  console.log(b);
}

const main = () => {
  const seriesLength = readline.questionInt('What\'s the sequence length? ')
  if (seriesLength < 1) {
    console.log('Enter a number bigger than 1.');
  };

  console.log(`This is The Fibonacci Sequence with ${seriesLength} terms:`);
  fibonacci(seriesLength - 2);
};

main();