'use strict';

import mongoose from 'mongoose';
require('mongoose-schema-jsonschema')(mongoose);

// import categories from "./categories";
// let cats = await categories.find({});

const players = mongoose.Schema({
  name: { type:String, required:true },
  position: { type:String, required:true, uppercase:true, enum:['P','C','1B','2B','3B','SS','LF','RF','CF'] },
  throws: { type:String, required:true, uppercase:true, enum:['R','L'] },
  bats: { type:String, required:true, uppercase:true, enum:['R','L'] },
  team: {type:String, required:true},
});

export default mongoose.model('players', players);
