import openSocket from 'socket.io-client';

const socket = openSocket('http://192.168.121.43:1999');

function onNewStep( cb ) {
  socket.on('onNewStep', ( data ) => {
    cb( data );
  });
}

export { onNewStep }
