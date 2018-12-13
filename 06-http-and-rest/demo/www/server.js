'use strict';

const superagent = require('superagent');
const express = require('express');
const app = express();

// Use this as a talking point about environment variables
const PORT = process.env.PORT || 8080;
const API = 'http://localhost:3000';

// Set the view engine for templating
app.set('view engine', 'ejs');

// Statics
app.use( express.static('./public') );

// Routes
app.get('/', homePage);
app.get('/list', listPage);

function homePage(request, response) {
  response.render('site', {page: './pages/index', title:'Welcome Home'});
}

function listPage(request, response) {
  superagent.get( `${API}/api/v1/categories`)
    .then(data => {
      // We could just send data.body to EJS, but what fun is that?
      // Lets reduce it down and change shape a little bit and send that out ;)
      let rawData = data.body;
      let listings = rawData.reduce( (list,val) => {
        list.push( {category:val.name} );
        return list;
      }, []);
      response.render('site', {page: './pages/list', title:'Listings', items: listings});
    })
    .catch( error => {
      response.render('site', {page: './pages/error', title:'Error', error:error});
    });
}

app.listen(PORT, () => console.log(`Listening on ${PORT}`));
