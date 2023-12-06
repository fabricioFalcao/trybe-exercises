// src/cacauTrybe.js

const fs = require('fs').promises;
const { join } = require('path');

const path = '/files/cacauTrybeFile.json';

const readCacauTrybeFile = async () => {
  try {
    const contentFile = await fs.readFile(join(__dirname, path), 'utf-8');
    return JSON.parse(contentFile);
  } catch (error) {
    return null;
  }
};

const writeCacauTrybeFile = async (data) => {
  try {
    await fs.writeFile(join(__dirname, path), JSON.stringify(data, null, 2))
  } catch (error) {
    console.error('Erro ao salvar o arquivo', e.message);
    return null;
  }
};

const getAllChocolates = async () => {
  const cacauTrybe = await readCacauTrybeFile();
  return cacauTrybe.chocolates;
};

const getChocolateById = async (id) => {
  const cacauTrybe = await readCacauTrybeFile();
  return cacauTrybe.chocolates
    .find((chocolate) => chocolate.id === id);
};

const getChocolatesByBrand = async (brandId) => {
  const cacauTrybe = await readCacauTrybeFile();
  return cacauTrybe.chocolates
    .filter((chocolate) => chocolate.brandId === brandId);
};

const getTotalChocolates = async () => {
  const cacauTrybe = await readCacauTrybeFile();
  return cacauTrybe.chocolates.length;
}

const getChocolatesByName = async (term) => {
  const cacauTrybe = await readCacauTrybeFile();
  return cacauTrybe.chocolates
    .filter((chocolate) => chocolate.name.toLowerCase().includes(term.toLowerCase()));
};

const updateChocolateById = async (id, name, brandId) => {
  const cacauTrybe = await readCacauTrybeFile();
  const chocolate = cacauTrybe.chocolates.find((chocolate) => chocolate.id === id)

  if (!chocolate) {
    return false;
  }

  chocolate.name = name;
  chocolate.brandId = brandId;

  writeCacauTrybeFile(cacauTrybe);
  return chocolate;
};

module.exports = {
  getAllChocolates,
  getChocolateById,
  getChocolatesByBrand,
  getTotalChocolates,
  getChocolatesByName,
  updateChocolateById
};