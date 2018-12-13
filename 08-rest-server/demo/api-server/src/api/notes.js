'use strict';

import express from 'express';

import notes from '../models/notes.js';

const router = express.Router();

let sendJSON = (data,response) => {
  response.statusCode = 200;
  response.statusMessage = 'OK';
  response.setHeader('Content-Type', 'application/json');
  response.write( JSON.stringify(data) );
  response.end();
};

router.get('/api/v1/notes', (request,response,next) => {
  notes.find()
    .then( data => {
      const output = {
        count: data.length,
        results: data,
      };
      sendJSON(output, response);
    })
    .catch( next );
});

router.get('/api/v1/notes/:id', (request,response,next) => {
  notes.find({_id:request.params.id})
    .then( result => sendJSON(result, response) )
    .catch( next );
});

router.post('/api/v1/notes', (request,response,next) => {
  notes.save(request.body)
    .then( result => sendJSON(result, response) )
    .catch( next );
});

router.put('/api/v1/notes/:id', (request,response,next) => {
  notes.save(request.params.id, request.body)
    .then( result => sendJSON(result, response) )
    .catch( next );
});

router.patch('/api/v1/notes/:id', (request,response,next) => {
  notes.patch(request.params.id, request.body)
    .then( result => sendJSON(result, response) )
    .catch( next );
});

router.delete('/api/v1/notes/:id', (request,response,next) => {
  notes.delete(request.params.id)
    .then( result => sendJSON(result, response) )
    .catch( next );
});

export default router;
