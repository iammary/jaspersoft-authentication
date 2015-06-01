// token to be provided by the node server
var token = encodeURIComponent( '107e47748186b837f4ab5346d9ef34501edcdf4c2f543403b1f295ebc72b2fa1323d14872c5dfdf9421ae8b83d93f82f732ff51e7e81cb3db55b2f18d82f6945' );

console.log( token )

var authdetails = {
	'token'     : token,
	'preAuth'   : true,
	'tokenName' : 'pp'
}

visualize( function( v ) {

	// render report from provided resource
	createReport( $( '#selected-resource' ).val(), v );

	$( '#selected-resource' ).change(function () {
			//clean container
			$( '#container' ).html( '' );

			//render report from another resource
			createReport( $( '#selected-resource' ).val(), v );
	} );

	// enable report chooser
	$( ':disabled' ).prop( 'disabled', false );


	$( '#login' ).click( function () {
		v.login( getAuthData() ).done( function() {
			createReport( $( '#selected-resource' ).val(), v );
			alert( 'login successful' );
			// render report from provided resource
			createReport( $( '#selected-resource' ).val(), v );
		} ).fail(
			function (){
				alert( 'error in login' );
			} );
	} );

	// logout session
	$( '#logout' ).click( function () {
		v.logout().done( function () {
			alert( 'You are now logged out of JasperReports Server.' );
			$( '#container' ).html( '' );
		} );
	} );

} );

visualize.config( {
	'auth': getAuthData2()
} );


function getAuthData (){
	return {
		'name'         : 'jasperadmin',
		'password'     : 'jasperadmin',
		'organization' : 'wayuk'
	}
};

function getAuthData2 (){
	return {
		'name'         : 'superuser',
		'password'     : 'superuser'
	}
};

//create and render report to specific container
function createReport( uri, v ) {
	v( '#container' ).report( {
		'resource' : uri,
		'error'    : function ( err ) {
				alert( err.message );
			}
	} );
};