const https = require( 'http' );
const fs = require( 'fs' );
const express = require( 'express' );
const app = express();
const bodyParser = require( 'body-parser' );

const serverPort = 1999;
const server = https.createServer( app );
const io = require( 'socket.io' )( server );

io.set( 'origins', '*:*' );
app.set( 'socketio', io );

const mongoose = require( 'mongoose' );
const Circle = require( './models/cicle/create' );
const StepSchema = require( './models/cicle/read' );
mongoose.Promise = global.Promise;
mongoose.connect( 'mongodb://localhost/sagitario' );

app.use( bodyParser.json() );
app.use( bodyParser.urlencoded( {
    extended: false
  } ) );


  app.use(function(req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type, Authorization');
    if (req.methods == "OPTIONS") {
      res.sendStatus(200);
    } else {
      next();
    }
  });

const routes = require( './routes/routes' );
app.use( '/', routes );

io.on( 'connect', ( socket ) => {
  io.emit( 'connected', 'all connected' );
} );

io.on( 'disconnect', ( socket ) => {
  io.emit( 'disconnected', 'all disconnected' );
} );

server.listen( serverPort, function() {
  console.log( `Server up 🙌🏼 and running at 👉🏼 ${serverPort} port. 👽` );
} );
