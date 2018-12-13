'use strict';

import requireDirectory from 'require-directory';

const models = requireDirectory(module, '../models', {recurse: false});

/*
{
  notes: { default: [Function: Notes] },
  tasks: { default: [Function: Tasks] }
}

 */

export default (req,res,next) => {
  let model = req.params.model;
  if(model && models[model] && models[model].default) {
    req.model = models[model].default;
    next();
  }
  else {
    next('Invalid Model');
  }
};
