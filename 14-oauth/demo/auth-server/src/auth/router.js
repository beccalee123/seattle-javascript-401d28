'use strict';

import express from 'express';

const authRouter = express.Router();

import User from './model.js';
import auth from './middleware.js';
import oauth from './lib/oauth.js';

// These routes should support a redirect instead of just spitting out the token ...
authRouter.post('/signup', (req, res, next) => {
  let user = new User(req.body);
  user.save()
    .then( (user) => {
      req.token = user.generateToken();
      req.user = user;
      res.cookie('auth', req.token);
      res.send(req.token);
    }).catch(next);
});

authRouter.post('/signin', auth, (req, res, next) => {
  res.cookie('auth', req.token);
  res.send(req.token);
});

authRouter.get('/foo', (req, res, next) => {
  console.log('got called');
  res.send('hi');
});

authRouter.get('/oauth', (req, res, next) => {
  console.log('got called');
  oauth.authorize(req)
    .then((token) => {
      res.cookie('auth', token);
      res.send(token);
    })
    .catch(next);
});

export default authRouter;
