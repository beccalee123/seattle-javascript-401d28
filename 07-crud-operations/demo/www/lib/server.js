'use strict';

const express = require('express');
const methodOverride = require('method-override');
const router = require('./routes.js');

const app = express();

const PORT = process.env.PORT || 8080;

// Set the view engine for templating
app.set('view engine', 'ejs');

// Parses form submissions sent via the POST HTTP method
app.use(express.urlencoded({extended:true}));

// Method Override: inputs with a name of _method will now be handled as native HTTP verbs
app.use(methodOverride((request, response) => {
  if (request.body && typeof request.body === 'object' && '_method' in request.body) {
    // look in urlencoded POST bodies and delete it
    let method = request.body._method;
    delete request.body._method;
    return method;
  }
}));


// Statics
app.use( express.static('./public') );

// Dynamic Routes
app.use( router );

module.exports = {
  server: app,
  start: port => {
    let PORT = port || process.env.PORT || 8080;
    app.listen(PORT, () => console.log(`Listening on ${PORT}`));
  },
};

