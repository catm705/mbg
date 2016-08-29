var express = require( 'express' );
var app = express();
var path = require('path');
var bodyParser = require('body-parser');
var mongojs = require('mongojs');
var db = mongojs('articleslist', ['articleslist']);

app.use( express.static( path.join( __dirname + '/public' ) ) );
app.use( bodyParser.json() );

app.get( '/', function( req, res ) {
	res.send("Hello Peeps!");
} );

app.get( '/articleslist', function( req, res ) {
	db.articleslist.find( function( err, docs ) {
		res.json(docs);
	} );
} );

app.get( '/articleslist/:id', function( req, res ) {
	db.articleslist.find( { id: req.params.id },  function( err, docs ) {
		res.json(docs);
	} );
} );

app.post( '/articleslist', function( req, res ) {

	// db.articleslist.count(function (err, count) {
  //   if ( !err && count === 0 ) {
	// 		console.log("COUNT: ", count );
	//
			populateDB(req, res);

			// db.articleslist.insert( req.body, function( err, doc ) {
			// 	res.json( doc );
			// } );
		  // }
		// });
} );

function populateDB( req, res ) {
	console.log("req: ", req );
	db.articleslist.insert( req.body, function( err, doc ) {
		res.json( doc );
	} );
}

app.all( '/*', function( req, res ) {
    res.sendFile(path.join(__dirname, 'public/index.html'));
} );

app.listen( 3000, function() {
	console.log("App is listening on PORT 3000" );
} );
