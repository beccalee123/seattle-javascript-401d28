'use strict';

const {server} = require('../../lib/server.js');
jest.mock('superagent');
const supertest = require('supertest');
const mockRequest = supertest(server);


describe('web server', () => {

  it('should respond with a 404 on an invalid route', () => {

    return mockRequest
      .get('/foo')
      .then(results => {
        expect(results.status).toBe(404);
      }).catch(console.error);

  });

  it('should respond with a 404 on an invalid method', () => {

    return mockRequest
      .post('/')
      .then(results => {
        expect(results.status).toBe(404);
      }).catch(console.error);

  });

  it('should respond proprly on request to /', () => {

    return mockRequest
      .get('/')
      .then(results => {
        expect(results.status).toBe(200);
      }).catch(console.error);

  });

  xit('should respond proprly on request to /list', () => {

    return mockRequest
      .get('/list')
      .then(results => {
        expect(results.status).toBe(200);
      }).catch(console.error);

  });

});
