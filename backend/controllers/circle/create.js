let mongoose = require( 'mongoose' );
let Circle = mongoose.model( 'Circle' );

var fs = require('fs');

module.exports = async ( req, res, next ) => {
  let circles = req.body.newStep;
  for (let c in circles) {
    let newCircle = new Circle( {
      'x': circles[c].x,
      'y': circles[c].y,
      'y': circles[c].x,
    } );
    newCircle.save( ( err, task ) => {
      if ( err ) res.send( err );
    } );
  }
  let io = req.app.get( 'socketio' );
  io.emit( 'onNewStep', circles );
  res.json( { "status": true } );
};
