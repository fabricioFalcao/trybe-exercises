const BookService = require('../services/books.service');

const getAll = async (_req, res) => {
  const books = await BookService.getAll();
  res.status(200).json(books);
};

const create = async (req, res) => {
  const { title, author, pageQuantity } = req.body;
  const book = await BookService.create({ title, author, pageQuantity });

  res.status(201).json(book);
};

module.exports = {
  getAll,
  create
};