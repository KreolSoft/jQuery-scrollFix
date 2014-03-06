jQuery-scrollFix
================

A small jQuery plugin for fixing position of scrollable elements.
All in all this plugin extends the CSS attribute "position: fixed".
Use this jQuery extension to position your elements "off the flow" and give them the ability to stay in the right position, even if the window is scrolled.


Example - scroll only on Y-axe (default configuration)
==============================
	jQuery(function() {										// Apply on document ready
		jQuery('.scrollFix-y').scrollFix({
			"moveX": false,									// Stays in X-position
			"moveY": true,									// Scrolls on Y-axe
			"createContainer": true,						// Creates a container around element (to avoid CSS incompatibilities)
			"keepSize": true								// Creates an additional element to fill empty space, remaining due to removing element from natural position
		});
	});


Example - scroll only on X-axe
==============================
	jQuery(function() {
		jQuery('.scrollFix-y').scrollFix({
			"moveX": true,									// Scrolls on X-axe
			"moveY": false,									// Stays in Y-position
			"createContainer": true,						// Creates a container around element (to avoid CSS incompatibilities)
			"keepSize": true								// Creates an additional element to fill empty space, remaining due to removing element from natural position
		});
	});
