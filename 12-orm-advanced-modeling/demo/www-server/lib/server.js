'use strict';

const express = require('express');
const router = require('./routes.js');

const app = express();

const PORT = process.env.PORT || 8080;
const API = 'http://localhost:3000';

// Set the view engine for templating
app.set('view engine', 'ejs');

// Statics
app.use( express.static('./public') );

app.use(express.urlencoded({extended:true}));

// Dynamic Routes
app.use(router);

module.exports = {
  server: app,
  start: port => {
    let PORT = port || process.env.PORT || 8080;
    app.listen(PORT, () => console.log(`Listening on ${PORT}`));
  },
};

