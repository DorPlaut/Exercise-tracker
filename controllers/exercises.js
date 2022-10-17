const Exercise = require('../models/exercise');
const User = require('../models/user');
const asyncWrapper = require('../middleware/async');

// Post new exercise
const postNewExercise = asyncWrapper(async (req, res) => {
  const userID = req.params;
  const user = await User.findOne({ _id: userID });
  const username = user.username;
  let date;
  const getDate = (input) => {
    if (!input) {
      return (date = new Date().toDateString());
    } else {
      return (date = new Date(input).toDateString());
    }
  };
  getDate(req.body.date);

  const newExercise = {
    username: username,
    description: req.body.description,
    duration: new Number(req.body.duration),
    date: date,
  };
  const responseObj = {
    _id: user._id,
    username: user.username,
    date: date,
    duration: newExercise.duration,
    description: newExercise.description,
  };
  const exercise = await Exercise.create(newExercise);
  res.status(201).json(responseObj);
});

// delete all exrecises
const deleteAllExercises = asyncWrapper(async (req, res) => {
  const allExercises = await Exercise.remove({});
  res.status(201).json(allExercises);
});

module.exports = {
  postNewExercise,
  deleteAllExercises,
};
