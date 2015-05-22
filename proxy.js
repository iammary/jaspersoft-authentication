'use strict';

var http = require( 'http' );
var req = require( 'request' );
var url = require( 'url' );

var server = http.createServer( function( request, response ) {

    var tmp = '';
    var urlTemp = request.url.split( '/' );
    if( urlTemp[ 1 ] !== 'jasperserver-pro' ) {
        tmp = '/jasperserver-pro';
    }

    var options = {
        'url' : 'http://jasper1.staging.pd360.com:8080'+ tmp + request.url,
        'method': request.method
    };

    console.log( options );

    request.pipe( req( options, function ( error, ret ) {

        console.log( 'status herer' );
        console.log( ret.headers );
        console.log( ret.headers.Location );
    } ) ).pipe( response );

} );

server.listen( 3333, function () {
    console.log( 'server' );
} );