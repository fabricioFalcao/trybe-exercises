const express = require('express');

const router = express.Router();

const activitiesRouter = require('./activities.router');

router.use('/activities', activitiesRouter);

module.exports = router;