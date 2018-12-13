'use strict';

import modelFinder from '../../../src/middleware/model-finder.js';

describe('Model Finder Middleware', () => {
  it('throws an error if a valid model is not presnt', () => {
    let req = {params:{}};
    let res = {};
    let next = jest.fn();
    modelFinder(req,res,next)
    expect(next).toHaveBeenCalledWith('Invalid Model');
  });
  it('returns a model object/function when a valid model is requested', () => {
    let req = {params:{model:'foo'}};
    let res = {};
    let next = jest.fn();
    modelFinder(req,res,next);
    expect(req.model).toBeDefined();
    expect(next).toHaveBeenCalledWith();
  });
});
