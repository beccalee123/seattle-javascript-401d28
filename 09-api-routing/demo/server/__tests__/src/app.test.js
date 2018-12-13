'use strict';

// Mock out the money and stuff ... we don't care to test
// that thing, we need to see that we can load it dynamically
// and that we call it right.
jest.mock('../../src/stuff/money.js');
jest.mock('../../src/stuff/food.js');
import money from '../../src/stuff/money.js';
import food from '../../src/stuff/food.js';

money.mockImplementation(() => {
  return {
    message: () => {return 'money';},
  };
});

food.mockImplementation(() => {
  return {
    message: () => {return 'food';},
  };
});

const {server} = require('../../src/app.js');
const supertest = require('supertest');
const mockRequest = supertest(server);

describe('api server', () => {

  it('can say a thing', () => {

    return mockRequest
      .get('/say/some/gibberish')
      .then(results => {
        expect(results.status).toBe(200);
        expect(results.text).toContain('gibberish');
      })
      .catch(err => {
        expect(err).not.toBeDefined();
      });

  });

  it('can give you money', () => {

    return mockRequest
      .get('/give/me/money')
      .then(results => {
        expect(results.status).toBe(200);
        expect(results.text).toContain('money');
      })
      .catch(err => {
        expect(err).not.toBeDefined();
      });

  });

  it('can give you food', () => {

    return mockRequest
      .get('/give/me/food')
      .then(results => {
        expect(results.status).toBe(200);
        expect(results.text).toContain('food');
      })
      .catch(err => {
        expect(err).not.toBeDefined();
      });

  });

  it('will not give you what it cannot', () => {

    return mockRequest
      .get('/give/me/foo')
      .then(results => {
        expect(results.status).toBe(500);
      })
      .catch(err => {
        expect(err).not.toBeDefined();
      });

  });

});
