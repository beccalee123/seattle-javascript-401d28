'use strict';

const express = require('express');
const agent = require('./agent.js');

const router = express.Router();

const API = 'http://localhost:3000';

router.get('/', homePage);
router.get('/list', listPage);
router.delete('/category', deleteCategory);

module.exports = router;

// Route Runners
function homePage(request, response) {
  response.render('site', {page: './pages/index', title:'Welcome Home'});
}

function listPage(request, response) {
  agent.get( `${API}/categories`)
    .then(data => {
      response.render('site', {page: './pages/list', title:'Listings', items: data.body});
    })
    .catch( error => {
      response.render('site', {page: './pages/error', title:'Error', error:error});
    });
}

function deleteCategory(request, response) {
  agent.delete( `${API}/categories/${request.body._id}`)
    .then( () => {
      response.redirect('/list');
    })
    .catch( error => {
      response.render('site', {page: './pages/error', title:'Error', error:error});
    });
}
