const express = require('express');

const router = express.Router();

const userValidation = require('../middlewares/userValidation');
const generateToken = require('../utils/tokenGenerator');

router.post('/', userValidation, (_req, res) => {
  const token = generateToken();
  res.status(200).json({ token: `Seu token de acesso é: ${token}` });
});

module.exports = router;