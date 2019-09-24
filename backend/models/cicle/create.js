let mongoose = require( 'mongoose' );
let Schema = mongoose.Schema;

let CircleSchema = new Schema( {
  x: {
    type: Number,
    default: 0
  },
  y: {
    type: Number,
    default: 0
  },
  z: {
    type: Number,
    default: 0
  }
} );

module.exports = mongoose.model( 'Circle', CircleSchema );
