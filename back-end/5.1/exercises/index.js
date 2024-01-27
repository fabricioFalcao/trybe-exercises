const express = require('express');
const { getAll, create } = require('./controllers/books.controller')

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.get('/books', getAll)
app.post('/books', create);

app.listen(PORT, () => console.log(`Ouvindo na porta ${PORT}!`));