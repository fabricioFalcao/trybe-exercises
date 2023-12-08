const express = require('express');

const router = express.Router();

const activitiesRouter = require('./activities.router');
const signUpRouter = require('./signUp.router');

router.use('/activities', activitiesRouter);
router.use('/signup', signUpRouter);

module.exports = router;