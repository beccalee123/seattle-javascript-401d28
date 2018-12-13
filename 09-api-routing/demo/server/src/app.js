'use strict';

// 3rd Party Resources
import express from 'express';

// Pre-Load and map our stuff
import Money from './stuff/money.js';
import Food from './stuff/food.js';
const stuff = {
  food: Food,
  money: Money,
};

const server = express();

// Param Based Middleware

// "Fires" whenever a "stuff" param is found in a route
// Lets us jack properties and data onto the req object
// We can even use that to load modules.

server.param('thing', (req,res,next) => {
  req.theThing = req.params.thing;
  next();
});

server.param('stuff', (req,res,next) => {
  if( typeof stuff[req.params.stuff] === "function" ) {
    req.theStuff = stuff[req.params.stuff];
    next();
  }
  else {
    next('Stuff not found');
  }
});

// Routes
server.get('/show/me/money', (req,res) => {
  res.status(200).send('Money');
});

server.get('/say/some/:thing', (req,res) => {
  res.status(200).send( `Sever Says ... ${req.theThing}` );
});

server.get('/give/me/:stuff', (req,res) => {
  const stuff = new req.theStuff();
  res.status(200).send( stuff.message() );
});


const start = (port) => {
  server.listen(port, () => {
    console.log(`Server Up on ${port}`);
  });
};

module.exports = { server, start };
