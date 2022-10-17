const express = require('express');
const router = express.Router();
const { fullExercisesLog } = require('../controllers/logs');
const bodyParser = require('body-parser');
const jsonParser = bodyParser.json();

router.route('/users/:_id/logs').get(fullExercisesLog);
// router.route('/users/logs').delete();

module.exports = router;
