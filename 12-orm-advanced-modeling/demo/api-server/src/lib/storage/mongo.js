'use strict';

class Storage {

  constructor(schema) {
    this.schema = schema;
  }

  find(query) {
    let _id = query && query._id;
    let queryObject = _id ? {_id} : {};
    return this.schema.find(queryObject);
  }

  delete(_id) {
    return this.schema.findByIdAndDelete(_id);
  }

  save(data) {

    if ( data._id ) {
      return this.schema.findByIdAndUpdate(data._id, data);
    }
    else {
      let record = new this.schema(data);
      return record.save();
    }
  }

}

export default Storage;
