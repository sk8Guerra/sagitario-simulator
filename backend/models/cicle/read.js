let mongoose = require( 'mongoose' );
let Schema = mongoose.Schema;

let StepSchema = new Schema( {
  id: {
    type: Schema.Types.ObjectId,
  },
  step: {
    type: Number,
    default: 0
  },
  coordinates: {
    type: Array,
    default: []
  }
}, {collection: 'circles'} );

module.exports = mongoose.model( 'StepSchema', StepSchema );
