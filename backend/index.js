require( 'dotenv' ).config();

const express = require( 'express' );
const mongoose = require( 'mongoose' );
const cors = require( 'cors' );

const app = express();

// Middleware
app.use( cors() );
app.use( express.json() );



// Basic route
app.get( '/', ( req, res ) =>
{
    res.send( 'Bon Journo!' );
} );



const PORT = process.env.PORT || 5000;
app.listen( PORT, () => console.log( `Server running on port ${ PORT }` ) );
