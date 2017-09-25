var supportsTouch = 'ontouchstart' in window || navigator.msMaxTouchPoints;

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