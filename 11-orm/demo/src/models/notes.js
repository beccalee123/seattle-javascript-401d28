'use strict';

import mongoose from 'mongoose';
import jsonSchema from 'mongoose-schema-jsonschema';
jsonSchema(mongoose);

const notes = mongoose.Schema({
  title: {type:String, require:true},
  text: {type: String},
});

notes.pre('save', function() {
  // console.log('doing the new thing with', this);
});

notes.pre('update', function() {
  // console.log('doing the update thing with', this);
});

notes.pre('findOneAndRemove', function() {
  // console.log('bye bye bye');
});

export default mongoose.model('notes', notes);

