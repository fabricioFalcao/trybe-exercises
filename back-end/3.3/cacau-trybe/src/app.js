// src/app.js

const express = require('express');
const cacauTrybe = require('./cacauTrybe');

const app = express();
app.use(express.json());

app.get('/chocolates', async (req, res) => {
  const chocolates = await cacauTrybe.getAllChocolates();
  res.status(200).json({ chocolates });
});

app.get('/chocolates/total', async (_req, res) => {
  const total = await cacauTrybe.getTotalChocolates();
  res.status(200).json({ totalChocolates: total });
})

app.get('/chocolates/search', async (req, res) => {
  const { name } = req.query;
  const result = await cacauTrybe.getChocolatesByName(name);
  res.status(result.length === 0 ? 404 : 200).json(result);
})

app.get('/chocolates/:id', async (req, res) => {
  const { id } = req.params;
  // Usamos o Number para converter o id em um inteiro
  const chocolate = await cacauTrybe.getChocolateById(Number(id));
  if (!chocolate) return res.status(404).json({ message: 'Chocolate not found' });
  res.status(200).json({ chocolate });
});

app.get('/chocolates/brand/:brandId', async (req, res) => {
  const { brandId } = req.params;
  const chocolates = await cacauTrybe.getChocolatesByBrand(Number(brandId));
  res.status(200).json({ chocolates });
});

app.put('/chocolates/:id', async (req, res) => {
  const { id } = req.params;
  const { name, brandId } = req.body;
  const chocolate = await cacauTrybe.updateChocolateById(+id, name, brandId);

  if (!chocolate) {
    return res.status(404).json({ "message": "chocolate not found" })
  }

  res.status(200).json({ chocolate, })

});

module.exports = app;