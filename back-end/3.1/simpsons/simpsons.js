const fs = require('fs').promises;
const path = require('path');

const filePath = path.resolve('simpsons.json')

const simpsons = async () => {
  const data = JSON.parse(await fs.readFile(filePath, 'utf-8'));
  return data
};


const read = async () => {
  const data = await simpsons();
  const list = data.map(({ id, name }) => `${id} - ${name}`);

  list.forEach((character) => console.log(character))
}

const findById = async (id) => {
  const data = await simpsons();
  const character = data.find((element) => Number(element.id) === id);

  if (!character) {
    throw new Error('id inexistente')
  };

  return character;
};

const deleteById = async (id) => {
  const data = await simpsons();
  const newList = data.filter((element) => Number(element.id) !== id)
  await fs.writeFile('./simpsons.json', JSON.stringify(newList))
};

const getFamily = async () => {
  const data = await simpsons();
  const newList = data.filter(({ id }) => Number(id) <= 4)
  await fs.writeFile('./simpsonsFamily.json', JSON.stringify(newList))
};

const addNelson = async () => {
  const data = JSON.parse(await fs.readFile('./simpsonsFamily.json', 'utf-8'));
  data.push({ id: '8', name: 'Nelson Muntz' });
  await fs.writeFile('./simpsonsFamily.json', JSON.stringify(data))
};

const replaceByMaggie = async () => {
  const data = JSON.parse(await fs.readFile('./simpsonsFamily.json', 'utf-8'));
  const newList = data.filter(({ id }) => Number(id) !== 8)
  newList.push({ id: '5', name: 'Maggie Simpson' })
  await fs.writeFile('./simpsonsFamily.json', JSON.stringify(newList))
}

async function main() {
  replaceByMaggie()
};

main();