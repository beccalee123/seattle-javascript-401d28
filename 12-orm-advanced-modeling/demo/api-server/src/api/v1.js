'use strict';

import express from 'express';

import modelFinder from '../middleware/model-finder.js';

const router = express.Router();

let sendJSON = (data,response) => {
  response.statusCode = 200;
  response.statusMessage = 'OK';
  response.setHeader('Content-Type', 'application/json');
  response.write( JSON.stringify(data) );
  response.end();
};

router.param('model', modelFinder);

router.get('/api/v1/:model/schema', (request, response) => {
  sendJSON(request.model.schema(), response);
});

router.get('/api/v1/:model', (request,response,next) => {
  request.model.find()
    .then( data => {
      const output = {
        count: data.length,
        results: data,
      };
      sendJSON(output, response);
    })
    .catch( next );
});

router.get('/api/v1/:model/:id', (request,response,next) => {
  request.model.find({_id:request.params.id})
    .then( result => sendJSON(result, response) )
    .catch( next );
});

router.post('/api/v1/:model', (request,response,next) => {
  request.model.save(request.body)
    .then( result => sendJSON(result, response) )
    .catch( next );
});

router.put('/api/v1/:model/:id', (request,response,next) => {
  request.model.put(request.params.id, request.body)
    .then( result => sendJSON(result, response) )
    .catch( next );
});

router.patch('/api/v1/:model/:id', (request,response,next) => {
  request.model.patch(request.params.id, request.body)
    .then( result => sendJSON(result, response) )
    .catch( next );
});

router.delete('/api/v1/:model/:id', (request,response,next) => {
  request.model.delete(request.params.id)
    .then( result => sendJSON(result, response) )
    .catch( next );
});

export default router;
