const Log = require('../models/log');
const Exercise = require('../models/exercise');
const User = require('../models/user');
const asyncWrapper = require('../middleware/async');

const fullExercisesLog = asyncWrapper(async (req, res) => {
  // find user
  const userID = req.params;
  const user = await User.findOne({ _id: userID });
  //   find exercises
  const allExercises = await Exercise.find({});
  let userExercises = allExercises.filter((i) => {
    return i.username == user.username;
  });
  // set query functions. from, to and limit
  if (req.query.from) {
    const fromDate = new Date(req.query.from);
    userExercises = userExercises.filter((i) => {
      return new Date(i.date) > fromDate;
    });
  }
  if (req.query.to) {
    const toDate = new Date(req.query.to);
    userExercises = userExercises.filter((i) => {
      return new Date(i.date) < toDate;
    });
  }
  if (req.query.limit) {
    const limit = req.query.limit;
    userExercises.length = limit;
  }
  //   set the log
  const logArry = userExercises.map((i) => {
    return { description: i.description, duration: i.duration, date: i.date };
  });
  const userLogs = {
    _id: user._id,
    username: user.username,
    count: allExercises.length,
    log: logArry,
  };

  console.log(req.query.limit);
  res.status(201).json(userLogs);
});

module.exports = {
  fullExercisesLog,
};
