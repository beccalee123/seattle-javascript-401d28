'use strict';

import Storage from '../lib/storage/storage.js';

class Model {

  constructor(schema) {
    this.schema = schema;
    this.storage = new Storage(schema);
  }

  schema() {
    return typeof this.schema.jsonSchema === 'function'
      ? this.schema.jsonSchema()
      : {};
  }

  find(query) {
    return this.storage.find(query);
  }

  save(data) {
    return this.storage.save(data);
  }

  delete(id) {
    return this.storage.delete(id);
  }

  put(id, data) {
    return this.storage.find({_id:id})
      .then(instance => {
        instance = Object.assign(instance[0],data);
        return this.storage.save(instance);
      });
  }

  patch(id, data) {
    console.log("Model patch");
    return this.storage.find({_id:id})
      .then(instance => {
        instance = Object.assign(instance[0],data);
        return this.storage.save(instance);
      });
  }

}


export default Model;
