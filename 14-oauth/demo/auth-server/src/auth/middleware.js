'use strict';

import User from './model.js';

export default (capability) => {

  return (req, res, next) => {

    console.log('cookies', req.cookies);

    try {

      let [authType, authString] = req.headers.authorization.split(/\s+/);

      // BASIC Auth  ... Authorization:Basic ZnJlZDpzYW1wbGU=
      // BEARER Auth ... Authorization:Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI

      switch(authType.toLowerCase()) {
      case 'basic':
        return _authBasic(authString);
      case 'bearer':
        return _authBearer(authString);
      default:
        return _authError();
      }

    } catch(e) {
      return _authError();
    }

    function _authBasic(authString) {
      let base64Buffer = Buffer.from(authString,'base64'); // <Buffer 01 02...>
      let bufferString = base64Buffer.toString(); // john:mysecret
      let [username,password] = bufferString.split(':');  // variables username="john" and password="mysecret"
      let auth = {username,password};  // {username:"john", password:"mysecret"}

      return User.authenticateBasic(auth)
        .then( user => _authenticate(user) );
    }

    function _authBearer(authString) {
      return User.authenticateToken(authString)
        .then( user => _authenticate(user) );
    }

    function _authenticate(user) {
      if ( user && (!capability || (user.can(capability))) ) {
        req.user = user;
        req.token = user.generateToken();
        next();
      }
      else {
        _authError();
      }
    }

    function _authError() {
      next({status: 401, statusMessage: 'Unauthorized', message: 'Invalid User ID/Password'});
    }

  };

};
