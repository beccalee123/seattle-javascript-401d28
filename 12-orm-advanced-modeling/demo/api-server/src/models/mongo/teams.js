'use strict';

const mongoose = require('mongoose');
require('mongoose-schema-jsonschema')(mongoose);

const teams = mongoose.Schema({
  name: {type:String, require:true},
}, { toObject:{virtuals:true}, toJSON:{virtuals:true} });

teams.virtual('players', {
  ref: 'players',
  localField: 'name',
  foreignField: 'team',
  justOne:false,
});

teams.pre('find', function() {
  try {
    console.log('populating...');
    this.populate('players');
  }
  catch(e) {
    console.error('Find One Error', e);
  }
});

export default mongoose.model('teams', teams);

