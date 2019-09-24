const routes = require( 'express' ).Router();

const create = require( '../controllers/circle/create' );
const read = require( '../controllers/circle/read' );

routes.post( '/api/sagitario/circle/create/', create );
routes.get( '/api/sagitario/circle/read/:step/', read );

module.exports = routes;
