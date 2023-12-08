const validate = (value, res, key) => {
  if (!value) {
    return res.status(400).json({ message: `O campo ${key} é obrigatório` });
  }
};

module.exports = (req, res, next) => {
  const { description } = req.body;
  
return validate(description, res, 'description')
|| validate(description.rating, res, 'rating')
|| validate(description.difficulty, res, 'difficulty')
|| validate(description.createdAt, res, 'createdAt')
|| next();
};
