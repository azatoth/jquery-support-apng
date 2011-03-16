(function( $ ){
	if( typeof $.support.apng != 'undefined' ) {
		return;
	}
	$.support.canvas = !!document.createElement('canvas').getContext;
})( jQuery );
