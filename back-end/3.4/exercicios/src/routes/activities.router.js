const express = require('express');

const router = express.Router();

const nameValidation = require('../middlewares/nameValidation');
const priceValidation = require('../middlewares/priceValidation');
const descriptionValidation = require('../middlewares/descriptionValidation');
const createdAtValidation = require('../middlewares/createdAtValidation');
const ratingValidation = require('../middlewares/ratingValidation');
const difficultyValidation = require('../middlewares/difficultyValidation');

router.use(nameValidation);
router.use(priceValidation);
router.use(descriptionValidation);
router.use(createdAtValidation);
router.use(ratingValidation);
router.use(difficultyValidation);

router.post('/', (req, res) => {
  res.status(201).json({ message: 'Atividade cadastrada com sucesso!' });
});

module.exports = router;