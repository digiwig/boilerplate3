var supportsTouch = 'ontouchstart' in window || navigator.msMaxTouchPoints;

var createCookie = function (name, value, days) {
	if (days) {
		var date = new Date();
		date.setTime(date.getTime() + (days * 60 * 60 * 1000)); //so it's hours now actually -MT
		var expires = "; expires=" + date.toGMTString();
	}
	else var expires = "";
	document.cookie = name + "=" + value + expires + "; path=/";
};

var readCookie = function (name) {
	var nameEQ = name + "=";
	var ca = document.cookie.split(';');
	for (var i = 0; i < ca.length; i++) {
		var c = ca[i];
		while (c.charAt(0) == ' ') c = c.substring(1, c.length);
		if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
	}
	return null;
};

function exist(element) {
	if($(element).length > 0) {
		return true;
	}
}

// add fastclick if the touch is supported
$(document).ready(function() {
	if(supportsTouch) {
		$(function() {
			FastClick.attach(document.body);
		});
	}
});


// misc events
$(document).on("keydown", function(event) {
	console.log("Key: "+event.key+", Code:"+event.keyCode);
});

$(window).on("load", function(){

});

$(window).on("resize", function() {

});

$(window).on("scroll", function() {
						  
});












// Namespace.
// var BP3 = BP3 || {};

// BP3.supportsTouch = 'ontouchstart' in window || navigator.msMaxTouchPoints;
// BP3.hash = window.location.hash;


// ( function( $ ) {

// 	//'use strict';

// 	/////////////////// VARS ////////////////////////
// 	var hash = $('body').find('a[href^="#"]');

// 	/////////////////// GLOBALS ////////////////////////
// 	BP3.exist = function(element) {
// 		if ($(element).length > 0) {
// 			return true;
// 		}
// 	};

// 	BP3.doFastClick = function() {
// 		if (BP3.supportsTouch != "undefined") {
// 			$(function() {
// 				FastClick.attach(document.body);
// 			});
// 		}
// 	};

// 	/////////////////// INIT ////////////////////////////
// 	BP3.init = function() {
// 		BP3.doFastClick();
// 	};	

// } )( jQuery );

// $(document).ready(function() {
// 	BP3.init();
// });	
