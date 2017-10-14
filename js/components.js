// Namespace.
var BP3 = BP3 || {};

( function( $ ) {
	
	'use strict';

	// VARS

	// GLOBALS

	BP3.exist = function(element) {
		if ($(element).length > 0) {
			return true;
		}
	};	

	BP3.check = function(element) {
		$(element).prop('checked', true);	
	}

	BP3.uncheck = function(element) {
		element.prop('checked', false);	
	}	


	// COMPONENTS

	BP3.squishy = function() {

		var header = $(".squishy"),
			shrinkon = 1,
			distanceY = window.pageYOffset || document.documentElement.scrollTop;

		if (distanceY > shrinkon) {
			header.addClass("squish");
		} else {
			if (header.hasClass("squish")) {
				header.removeClass("squish");
			}
		}

	}

	BP3.notify = function() {	

		var notifyBar = $("#notify"),
			notifyBtn = $(".notify");

		notifyBtn.on("click", function(){ 
			var text = $(this).attr("data-notify");
			var pos = $(this).attr("data-position");
			var color = $(this).attr("data-color");
			if(color) {
				notifyBar.css("background-color", color);
			} else {
				notifyBar.removeAttr("style");
			}
			notifyBar.removeAttr("class");
			setTimeout(function(){ 
				notifyBar.text(text).addClass(pos).addClass("show");
			}, 10);	
		});	


		// use (new BP3.notify()).callback("Groopidy Skooble Doobly Rooble");

		this.callback = function(text, color, position) {
			if(text) {

				if(color === undefined){
					color = "#333";
				}
				if(position === undefined){
					position = "top";
				}  

				$("#notify").removeAttr("class");
				setTimeout(function(){ 
					$("#notify").text(text).addClass(position).css("background-color", color).addClass("show")	
				}, 10);
			}
		}
	}

	BP3.imageSlider = function() {
		$('.flexslider.images').flexslider({
			animation: "slide",
			selector: ".slides > img",
		    start: function(slider){
		       slider.children(".flex-control-paging").detach().appendTo(slider.parent());;
		    },		
		});		
	}

	BP3.heroSlider = function() {
		$('.flexslider.heros').flexslider({
			animation: "slide",
			selector: ".slides > .hero",
			animationSpeed: 500,
		    start: function(slider){
		    	slider.addClass("active");
		    	slider.children(".flex-control-paging").detach().appendTo(slider.parent());;
		    },		
		});			
	}


	BP3.modals = function() {

		// Bind event to any element with class .modal-button, but not labels

		var modalButton = $(".modal-button").not("label");
		modalButton.on("click", function(){ 
			var modal = "#"+$(this).attr("data-for");
			BP3.check(modal);
		});


		// Close the modal window and reset modal checkboxes on page load or on esc keypress.

		var toggleModal = $(".modal-toggle");
		$(document).ready(BP3.uncheck(toggleModal));
		$(document).keydown(function(event) {
			if(event.keyCode == 27) {
				BP3.uncheck(toggleModal);
			}
		});
	}



	// INIT
	BP3.init = function() {

		if (BP3.exist(".squishy")) {
			BP3.squishy();
			$(window).on("scroll", BP3.squishy);			
		}

		if(BP3.exist("#notify")) {
			BP3.notify();
		}


		if(BP3.exist(".flexslider.heros")) {
			BP3.heroSlider();
		}			

		if(BP3.exist(".flexslider.images")) {
			BP3.imageSlider();
		}

		if(BP3.exist(".modal")) {
			BP3.modals();
		}

	};		

} )( jQuery );

$(document).ready(function() {
	BP3.init();
});	


















































function check(element) {
	$(element).prop('checked', true);	
}

function uncheck(element) {
	element.prop('checked', false);	
}

/* SQUISHY HEADER
************************************************************************/

// var squishy = $(".squishy"),
// 	shrinkon = 1;

// function squish() {
// 	var distanceY = window.pageYOffset || document.documentElement.scrollTop;

// 	if (distanceY > shrinkon) {
// 		squishy.addClass("squish");
// 	} else {
// 		if (squishy.hasClass("squish")) {
// 			squishy.removeClass("squish");
// 		}
// 	}			
// }

// $(window).on('scroll', squish);
// $(document).ready(squish);

/* NOTIFCATION BAR
************************************************************************/

// Bind notifcation bar to trigger on click of .notify elements

// var notifyBar = $("#notify"),
// 	notifyBtn = $(".notify");

// notifyBtn.on("click", function(){ 
// 	var text = $(this).attr("data-notify");
// 	var pos = $(this).attr("data-position");
// 	var color = $(this).attr("data-color");
// 	if(color) {
// 		notifyBar.css("background-color", color);
// 	} else {
// 		notifyBar.removeAttr("style");
// 	}
// 	notifyBar.removeAttr("class");
// 	setTimeout(function(){ 
// 		notifyBar.text(text).addClass(pos).addClass("show");
// 	}, 10);	
// });

// Callback function, use case eg. on form error/success

//notify("Welcome to Marks Amazing Front-End Framework");




/* MODAL
************************************************************************/

// // Bind event to any element with class .modal-button, but not labels

// var modalButton = $(".modal-button").not("label");
// modalButton.on("click", function(){ 
// 	var modal = "#"+$(this).attr("data-for");
// 	check(modal);
// });


// // Close the modal window and reset modal checkboxes on page load or on esc keypress.

// var toggleModal = $(".modal-toggle");
// $(document).ready(uncheck(toggleModal));
// $(document).keydown(function(event) {
// 	if(event.keyCode == 27) {
// 		uncheck(toggleModal);
// 	}
// });

// Callback function, use case eg. setTimeout spam window type thing

function modal(id) {
	check(id);
}

/* ACCORDION
************************************************************************/

var accordion = $(".accordion input"),
	accordionRadio = $(".accordion input:radio + label");

// Close any accordion on page load

uncheck(accordion);

// Close radio type on click

accordionRadio.bind("click touchend", function() {	
	var input = $("input[id='"+$(this).attr('for')+"']");	
	if (input.is(':checked')) {
		uncheck(input);
		return false;
	}
});

/* CAROUSEL
************************************************************************/



/* GOOGLE MAP
************************************************************************/

if(exist("#map")) {
	$.getScript("https://maps.googleapis.com/maps/api/js?key=AIzaSyCWg6EsSlK-EmCdimmWNodJr4adyFK_uAM", function() {
		$.getScript( "js/custom/map.js");
	});
	
}
