// Nova pessoa contratada

const newEmployees = () => {
  const employees = {
    id1: generateEmail('Pedro Guerra'), // Nome: Pedro Guerra -> Chame sua função passando o nome Pedro Guerra como parâmetro, substituindo as aspas
    id2: generateEmail('Luiza Drumond'), // Nome: Luiza Drumond -> Chame sua função passando o nome Luiza Drumond como parâmetro, substituindo as aspas
    id3: generateEmail('Carla Paiva'), // Nome: Carla Paiva -> Chame sua função passando o nome Carla Paiva como parâmetro, substituindo as aspas
  }
  return employees;
};

const generateEmail = (fullName) => {
  const email = fullName.toLowerCase().replace(' ', '_');
  return { fullName, email: `${email}@hofs.com` }
}

// Sorteador de loteria

const gameCheck = (myNumbers, drawnNumbers) => myNumbers === drawnNumbers;

const lottery = (myNumbers) => {
  const drawNumbers = Math.floor(Math.random() * 5) + 1;
  return gameCheck(myNumbers, drawNumbers) ? 'Lucky day, you won!' : 'Try Again!';
};

// Corretor automático de exame

const RIGHT_ANSWERS = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const STUDENT_ANSWERS = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];

const corrector = (studentAnswers) => {
  let grade = 0;
RIGHT_ANSWERS.forEach((answer, i) => {
if (answer === studentAnswers[i]) {
  grade += 1
}
if (answer !== studentAnswers[i] && studentAnswers[i] !== 'N.A') {
  grade -= 0.5;
}
})
return grade;
}

