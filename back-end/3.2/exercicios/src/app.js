const express = require('express');
const fs = require('fs').promises;
const path = require('path');

const app = express();
app.use(express.json());

const moviesPath = path.resolve(__dirname, './movies.json');

const read = async () => {
  try {
    const data = await fs.readFile(moviesPath);
    return JSON.parse(data);
  } catch (error) {
    console.error(`Arquivo não pôde ser lido: ${error}`);
  }
};

app.get('/movies/search', async (req, res) => {
  const { q } = req.query;
  const moviesList = await read();

  try {
    if (q) {
      const filteredMovies = moviesList
      .filter(({ movie }) => movie.toLowerCase().includes(q.toLowerCase()));
      return res.status(200).json(filteredMovies);
    }
    res.status(200).end();
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
});

app.get('/movies', async (_req, res) => {
  try {
    const movies = await read();
    res.status(200).json(movies);
  } catch (error) {
    res.status(500).send({ message: 'Unable to list movies' });
  }
});

app.get('/movies/:id', async (req, res) => {
const moviesList = await read();
const movie = moviesList.find(({ id }) => id === +req.params.id);

if (!movie) {
  return res.status(404).json({ message: `The id ${req.params.id} is not valid.` });
}

return res.status(200).json(movie);
});

app.post('/movies', async (req, res) => {
  try {
    const moviesList = await read();
    const { movie, price } = req.body;

const newMovie = {
  id: moviesList[moviesList.length - 1].id + 1,
  movie,
  price,
};

const newMoviesList = JSON.stringify([...moviesList, newMovie], null, 2);

await fs.writeFile(moviesPath, newMoviesList);

res.status(201).send(newMovie);
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
});

app.put('/movies/:id', async (req, res) => {
const { id } = req.params;
const { movie, price } = req.body;

const moviesList = await read();
const editedMovie = moviesList.find((element) => element.id === +id);

if (!editedMovie) {
  return res.status(404).send({ message: `The id ${req.params.id} is not valid.` });
}

editedMovie.movie = movie;
editedMovie.price = price;

const updatedMoviesList = JSON.stringify(moviesList, null, 2);
await fs.writeFile(moviesPath, updatedMoviesList);

res.status(200).json(editedMovie);
});

app.delete('/movies/:id', async (req, res) => {
  const { id } = req.params;
  const moviesList = await read();

const idDelete = moviesList.findIndex((movie) => movie.id === +id);

if (idDelete === -1) {
  res.status(404).send({ message: `The id ${id} is not valid.` });
}

moviesList.splice(idDelete, 1);

const updatedMoviesList = JSON.stringify(moviesList, null, 2);
await fs.writeFile(moviesPath, updatedMoviesList);

res.status(204).end();
});

module.exports = app;