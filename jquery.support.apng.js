(function( $ ){
	if( typeof $.support.apng != 'undefined' ) {
		return;
	}
	$.support.apng = false;

	// We can only test APNG support by using canvas
	// Stolen from http://code.eligrey.com/apng-detect/demo.html (released in public domain)
	if( jQuery.support.canvas ) {
		var apng_data = "data:image/png;base64," +
		"iVBORw0KGgoAAAANSUhE" +
		"UgAAAAEAAAABCAYAAAAf" +
		"FcSJAAAACGFjVEwAAAAB" +
		"AAAAAcMq2TYAAAANSURB" +
		"VAiZY2BgYPgPAAEEAQB9" +
		"ssjfAAAAGmZjVEwAAAAA" +
		"AAAAAQAAAAEAAAAAAAAA" +
		"AAD6A+gBAbNU+2sAAAAR" +
		"ZmRBVAAAAAEImWNgYGBg" +
		"AAAABQAB6MzFdgAAAABJ" +
		"RU5ErkJggg==";
		var img = document.createElement('img');
		var ctx = document.createElement("canvas").getContext("2d");
		img.src = apng_data;
		// frame 1 (skipped on apng-supporting browsers): [0,0,0,255]
		// frame 2: 0,0,0,0
		img.onload = function(){
			ctx.drawImage(img, 0, 0);
			jQuery.support.apng = ctx.getImageData(0, 0, 1, 1).data[3] === 0;
		};

		img = ctx = null;
	}
})( jQuery );
