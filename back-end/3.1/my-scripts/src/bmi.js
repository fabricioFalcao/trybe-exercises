const readline = require('readline-sync');

const chart = require('./bmi-chart')

const bmiTier = (bmi) => {

  const statuses = Object.keys(chart);

  const tier = statuses.find((status) => {
    const { maxBMI, minBMI } = chart[status]
    return bmi >= minBMI && bmi <= maxBMI;
  })
  return tier;
};

const BMI = () => {

  const weight = readline.questionFloat('Whats\'s your weight? (kg) ');
  const height = readline.questionInt('What\'s your height? (cm) ');

  const bmi = (weight / (height / 100) ** 2).toFixed(1);
  const tier = bmiTier(bmi);

  return console.log(`Your BMI is ${bmi} and you're classified as ${tier}.`);
}

BMI()