const express = require('express');
const app = express();
const cors = require('cors');
require('dotenv').config();
const connectDB = require('./DataBase/connect');
const asyncWrapper = require('./middleware/async');

// controllers
const createNewUser = require('./controllers/users');
// routes
const usersRoutes = require('./routes/users');
const exercisesRoutes = require('./routes/exercises');
const logsRoutes = require('./routes/logs');
// globalvars
const port = process.env.PORT;

// middlewares
app.use(cors());
app.use(express.static('public'));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use('/api', usersRoutes);
app.use('/api', exercisesRoutes);
app.use('/api', logsRoutes);

// paths

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/views/index.html');
});
// app.get('/api/users/:_id/logs', (req, res) => {
//   res.send('okkk');
// });

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(port, console.log(`server is listening on port ${port}`));
  } catch (error) {
    console.log(error);
  }
};

start();
