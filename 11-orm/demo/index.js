'use strict';

require('dotenv').config();

// Turn us into ES6!!
require('babel-register');

// Start up DB Server
const mongoose = require('mongoose');
const options = {
  useNewUrlParser:true,
  useCreateIndex: true,
  useFindAndModify: false,
};
mongoose.connect(process.env.MONGODB_URI, options);

// Start the web server
require('./src/app.js').start(process.env.PORT);
