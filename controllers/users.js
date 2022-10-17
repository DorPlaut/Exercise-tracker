const User = require('../models/user');
const asyncWrapper = require('../middleware/async');

// get all users
const getAllUsers = asyncWrapper(async (req, res) => {
  const allUsers = await User.find({});
  console.log(allUsers);
  res.status(201).json(allUsers);
});
// get one user
const getUser = asyncWrapper(async (req, res) => {
  const userID = req.params;
  const user = await User.findOne({ _id: userID });
  console.log(allUsers);
  res.status(201).json(allUsers);
});

// create new user
const createNewUser = asyncWrapper(async (req, res) => {
  const user = await User.create(req.body);
  res.status(201).json({ username: user.username, _id: user._id });
});

// delete all users
const deleteAllUsers = asyncWrapper(async (req, res) => {
  const allUsers = await User.remove({});
  res.status(201).json(allUsers);
});
// const getSingleUser = {};

module.exports = {
  getAllUsers,
  createNewUser,
  deleteAllUsers,
};
