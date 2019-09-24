let mongoose = require( 'mongoose' );
let StepSchema = mongoose.model( 'StepSchema' );

module.exports = async ( req, res, next ) => {
  StepSchema.findOne({ "step" : req.params.step }, (error, data) => {
    if (data) {
      res.json( {
        "status": true,
        data
      } );
    } else {
      res.json( { "status": false } );
    }
  });
};
