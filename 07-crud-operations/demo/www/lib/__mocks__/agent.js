'use strict';

module.exports = {
  get: () => {
    const obj = {
      body: [ { name: 'foo', _id:1 } ]
    };
    return Promise.resolve(obj);
  },
  delete: () => {
    return Promise.resolve(true);
  },
};
