module.exports = (req, res, next) => {
const { email, password, firstName, phone } = req.body;
const fields = [email, password, firstName, phone];

if (fields.includes(undefined)) {
  return res.status(401).json({ message: 'Campos ausentes!' });
}
next();
};