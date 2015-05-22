// token to be provided by the node server
var token = encodeURIComponent( "107e47748186b837f4ab5346d9ef34501edcdf4c2f543403b1f295ebc72b2fa15882d8428556ad551cf1a2e95208af0f" );

console.log( token )

var authdetails = {
	'token'     : token,
	'preAuth'   : true,
	'tokenName' : "pp"
}

visualize( { auth: authdetails }, function( v ) {

	// render report from provided resource
	v( '#container' ).report( {
			'resource' : $( '#selected-resource' ).val(),
			'error'    : handleError
	});

	$( '#selected-resource' ).change(function () {
			//clean container
			$( '#container' ).html( '' );

			//render report from another resource
			v( '#container' ).report( {
					'resource' : $( '#selected-resource' ).val(),
					'error'    : handleError
			} );
	} );

	// enable report chooser
	$( ':disabled' ).prop( 'disabled', false );

	//show error
	function handleError( err ) {
			alert( err.message );
	}

	// logout session
	$( '.logout' ).click( function () {
		v.logout().done( function () {
			alert( "You are now logged out of JasperReports Server." );
		} );
	} );

} );