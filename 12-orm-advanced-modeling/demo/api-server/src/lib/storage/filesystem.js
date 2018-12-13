'use strict';
import fs from 'fs';
import util from 'util';
import uuid from 'uuid/v1';

const writeFile = util.promisify(fs.writeFile);

const databaseFile = `${__dirname}/../../../data/db.json`;
let database = require(databaseFile);

class Storage {

  find(query) {
    let id = query && query._id;
    return new Promise((resolve, reject) => {

      if (id) {
        if (database[id]) {
          resolve(database[id]);
        }
        else {
          reject('Record Not Found');
        }
      }
      else {
        const results = Object.keys(database).map(key => {
          return database[key];
        });
        resolve(results);
      }

    });
  }

  delete(id) {
    return new Promise((resolve, reject) => {
      if (database[id]) {
        delete database[id];
        this.saveDatabase()
          .then(() => resolve({}))
          .catch(err => reject(err));
      }
      else {
        reject(`${id} not found`);
      }
    });
  }

  save(data) {
    return new Promise((resolve, reject) => {
      data._id = data._id || uuid();
      let record = Object.assign({}, database[data._id], data);
      database[record._id] = record;
      this.saveDatabase()
        .then(() => resolve(database[data._id]))
        .catch(err => reject(err));
    });
  }

  saveDatabase() {
    let data = JSON.stringify(database);
    return writeFile(databaseFile, data)
      .then(result => true)
      .catch(error => error);
  }

}


export default Storage;
