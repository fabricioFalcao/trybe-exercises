const { Book } = require('../models');

const getAll = async () => {
  const books = await Book.findAll();
  return books;
};

const create = async ({ title, author, pageQuantity }) => {
  const book = await Book.create({ title, author, pageQuantity });
  return book;
};

module.exports = {
  getAll,
  create
};