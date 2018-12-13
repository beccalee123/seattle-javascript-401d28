'use strict';

export default (err, req, res, next) => {
  console.error('__SERVER_ERROR__', err);
  let error = { error: err };
  res.statusCode = 500;
  res.statusMessage = 'Server Error';
  res.setHeader('Content-Type', 'application/json');
  res.write( JSON.stringify(error) );
  res.end();
};
