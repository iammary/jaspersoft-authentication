var express = require( 'express' );
var crypto  = require( 'crypto' );

var server = express();
server.use( express.static( __dirname + '/public' ) );

var port = 10001;

server.listen( port, function() {
	console.log('server listening on port ' + port);
} );

// generate token using crypto
var getToken = function ( credentials ) {
	var cipherPassword = 'somepassword';
	var cipher         = crypto.createCipher( 'aes-128-ecb', cipherPassword );
	var crypted        = cipher.update( credentials, 'utf-8', 'hex' );

	crypted += cipher.final('hex');

	return crypted;
}

var userCredentials = 'u=ara|o=wayuk|r=EXT_ADMIN,EXT_USER';
console.log( getToken( userCredentials ) );