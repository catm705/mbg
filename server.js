var express = require( 'express' );
var app = express();
var path = require('path');
var mongojs = require('mongojs');
var db = mongojs('articleslist', ['articleslist']);

app.use(express.static(path.join(__dirname + '/public')));

app.get( '/', function( req, res ) {
	res.send("Hello Peeps!");
} );

app.get( '/articleslist', function( req, res ) {
	db.articleslist.find( function( err, docs ) {
		console.log(docs);
		console.log("If there were docs I'd log them.");
		res.json(docs);
	} );
} );

app.all('/*', function(req, res) {
    res.sendFile(path.join(__dirname, 'public/index.html'));
});

app.listen(3000, function() {
	console.log("App is listening on PORT 3000" );
} );
