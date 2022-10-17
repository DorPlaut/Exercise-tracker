const mongoose = require('mongoose');

const LogSchema = new mongoose.Schema({
  username: String,
  count: Number,
  log: [
    {
      description: String,
      duration: Number,
      date: String,
    },
  ],
});

module.exports = mongoose.model('Log', LogSchema);
