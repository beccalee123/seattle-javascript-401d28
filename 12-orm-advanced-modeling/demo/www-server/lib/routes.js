'use strict';

const superagent = require('superagent');
const express = require('express');
const router = express.Router();

const API = 'http://localhost:3000';

router.get('/', homePage);
router.get('/article/:id', showArticle);
router.post('/article/:id', addComment);
router.post('/article', newArticle);

module.exports = router;

// Route Runners
function homePage(request, response) {
  superagent.get(`${API}/api/v1/articles`)
    .then(results => {
      response.render('site', {page: './pages/index', articles:results.body});
    });
}

function showArticle(request, response) {
  superagent.get(`${API}/api/v1/articles/${request.params.id}`)
    .then(results => {
      response.render('site', {page: './pages/index', articles:{results:[]}, article:results.body[0]});
    });
}

function newArticle(request, response) {
  superagent.post(`${API}/api/v1/articles`)
    .send(request.body)
    .then( () => response.redirect('/') )
    .catch( e => response.send(e) );
}

function addComment(request, response) {
  let data = {
    comment:request.body
  };
  superagent.patch(`${API}/api/v1/articles/${request.params.id}`)
    .send(data)
    .then( () => response.redirect(`/article/${request.params.id}`) )
    .catch( e => response.send(e) );
}
