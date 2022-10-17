const express = require('express');
const router = express.Router();
const {
  postNewExercise,
  deleteAllExercises,
} = require('../controllers/exercises');
const bodyParser = require('body-parser');
const jsonParser = bodyParser.json();

router.route('/users/:_id/exercises').get().post(jsonParser, postNewExercise);
router.route('/users/exercises').delete(deleteAllExercises);

module.exports = router;
