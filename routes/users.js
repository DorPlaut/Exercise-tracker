const express = require('express');
const router = express.Router();
const {
  getAllUsers,
  createNewUser,
  deleteAllUsers,
} = require('../controllers/users');
const bodyParser = require('body-parser');
const jsonParser = bodyParser.json();

router
  .route('/users')
  .get(getAllUsers)
  .post(jsonParser, createNewUser)
  .delete(deleteAllUsers);

module.exports = router;
