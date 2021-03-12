const express = require("express");
const cors = require('cors');
const bodyParser = require('body-parser')
const helmet = require('helmet');
const path = require('path');
const app = express();
const logger = require('morgan');


const usersRoute = require('./routes/users');

/**Moteur de template */
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, './resource/client/build')));
  app.get(/^((?!\/api\/).)*$/, (req, res) => {
    res.sendFile(path.join(__dirname, './resource/client/build', 'index.html'));
  });
}

// Express boilerplate middleware
// =============================================
app.use(logger('dev'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(helmet());

app.use(async (req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Origin", process.env.NODE_ClIENT_URL);
  res.header("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
  next();
});

app.use(cors());

//app.use('/', [homeRoute]);
app.use('/api', [usersRoute]);

module.exports = app;