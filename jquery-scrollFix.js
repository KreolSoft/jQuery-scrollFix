//* jQuery - scrollFix 0.01.00 | Copyright (c) 2013 Nikita "IgelHaut" Nitichevski | MIT License *//

(function($) {
	"use strict";
	
	$.fn.scrollFix = function(options) {
		return this.each(function() {
			var config = $.extend({
				"offsetX": 0,
				"offsetY": 0
			}, $.fn.scrollFix.defaults, options);
			
			var element = $(this);
			
			if(config.createContainer) {
				element.wrapAll('<div class="jquery-scrollFix-container"></div>');
				element = element.parent();
			}
			
			if(config.keepSize) {
				element.wrapAll('<div class="jquery-scrollFix-sizeContainer"></div>');
				element.parent().width(element.outerWidth()).height(element.outerHeight());
			}
			
			config.offsetX = element.offset().left;
			config.offsetY = element.offset().top;
			
			element.css({
				"position": "fixed"
			});
			
			$(window).on('scroll', function() {
				var x = 0;
				if(!config.moveX)
					x = -$(window).scrollLeft();
				
				var y = 0;
				if(!config.moveY)
					y = -$(window).scrollTop();
				
				element.css({
					"left": config.offsetX+x,
					"top": config.offsetY+y
				});
			});
		});
	};
	
	$.fn.scrollFix.defaults = {
		"moveX": false,
		"moveY": true,
		"createContainer": true,
		"keepSize": true
	};
} (jQuery));
