'use strict';

import mongoose from 'mongoose';
require('mongoose-schema-jsonschema')(mongoose);

const comments = new mongoose.Schema({
  text: {type:String},
  author: {type:String},
});

const articles = mongoose.Schema({
  title: { type:String, required:true },
  article: { type:String, required:true},
  author: { type:String, required:true},
  comments: [comments]
});

export default mongoose.model('articles', articles);
