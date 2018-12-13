'use strict';

import User from './model.js';

export default (req, res, next) => {

  // Try to authenticate -- parse out the headers and do some work!
  try {
    
    let auth = {};
    let authHeader = req.headers.authorization;

    // BASIC Auth
    if(authHeader.match(/basic/i)) {
      // authHeader will have a base64 encoded auth string in it
      //   i.e. Basic ZnJlZDpzYW1wbGU=
      // Break that apart ...
      let base64Header = authHeader.replace(/Basic\s+/i, ''); // ZnJlZDpzYW1wbGU=
      let base64Buffer = Buffer.from(base64Header,'base64'); // <Buffer 01 02...>
      let bufferString = base64Buffer.toString(); // john:mysecret
      let [username,password] = bufferString.split(':');  // variables username="john" and password="mysecret"
      auth = {username,password};  // {username:"john", password:"mysecret"}

      // Start the authentication train
      User.authenticateBasic(auth)
        .then(user=>_authenticate(user))
        .catch(_authError);
    }
    else if(authHeader.match(/bearer/i)) {
      // i.e. Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI
      let token = authHeader.replace(/bearer\s+/i, '');
      User.authenticateToken(token)
        .then(user=>_authenticate(user))
        .catch(_authError);
    }
    else { _authError(); }

    // authorize via capability .... depends on a parameter
  } catch(e) {
    _authError();
  }

  function _authenticate(user) {
    if(!user) { _authError(); }
    // Given a real user that must mean that our token was good. Let the user through.
    // in larger systems, you might want to attach an ACL or permissions to the req.user object here.
    else {
      req.user = user;
      req.token = user.generateToken();
      next();
    }
  }

  function _authError() {
    console.log("AUTH ERROR");
    next({status: 401, statusMessage: 'Unauthorized', message: 'Invalid User ID/Password'});
  }
  
};

