var express = require( 'express' );
var app = express();
var path = require('path');

app.use(express.static(path.join(__dirname, 'public')));

app.get( '/', function( req, res ) {
	res.send("Hello Peeps!");
} );

app.all('/*', function(req, res) {
    res.sendFile(path.join(__dirname, 'public/index.html'));
});

app.listen(3000, function() {
	console.log("App is listening on PORT 3000" );
} );
