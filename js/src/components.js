var BP3 = BP3 || {},
	supportsTouch = 'ontouchstart' in window || navigator.msMaxTouchPoints;

( function( $ ) {
	
	'use strict';

	/* VARS
	************************************************************************/

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

	/* GLOBAL FUNCTIONS
	************************************************************************/

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

	BP3.fastClick = function() {
		if(supportsTouch) {
			$(function() {
				FastClick.attach(document.body);
			});
		}
	}

	/* INFINITY NAV
	************************************************************************/

	BP3.infinityNav = function() {

		$("nav.infinity > ul > li").each(function() {
			$(this).attr("id", $(this).children("span").children("a").text().replace(/ +/g, '-').toLowerCase());							 
		});
		$("nav.infinity ul li span").each(function() {
			if($(this).next().length !="0") {						  
				$(this).addClass("parent");
				var name = $(this).children("a").text();
				$(this).parent("li").addClass("top");			
				$(this).parent("li").append("<span data-name='"+name+"' class='next'>&#x25b6;</span>");
				$("span.next").on("touchmove", function(){
					dragging = true;
				});			
			}						  
		});	
		
		var evt = 'ontouchend' in document ? 'touchend' : 'click';

		if(supportsTouch && $(window).innerWidth() > 767) {
			$(document).on(evt, function() {
				$(".top").removeClass("active");							 
			});	
			$("span.parent a").on(evt, function(event) {
				var parent = $(this).closest(".top");
				if(parent.attr("id")) { root = parent.attr("id");} else { root  = root;}
				$("nav.infinity > ul li").not("li#"+root).removeClass("active");
				if(parent.hasClass("active")) {
					parent.removeClass("active");
					return true;
				} else {
					parent.addClass("active");
					return false;	
				}								
			});
		}

		var dragging = false;	
		$("span.next").on(evt, function() {						

			if (dragging == true) {
				dragging = false;
				return false;					
			}			
			var parent = $(this).text();			
			var replacement  = $(this).prev("ul").clone("true").addClass("clone").appendTo('nav.infinity');		
			$(this).siblings("span").closest("ul").addClass("hide");
			$("<li class='back'>Back</li>").prependTo(replacement, "true");
			var name  = $(this).attr("data-name");
			if(!$("li.breadcrumb").length) {
				var root = $("<li class='breadcrumb'>Home</li>").prependTo(replacement);
				$(root).append(" / "+name+"");
			} else {
				var root = $(this).parent("li").siblings("li.breadcrumb").clone();				
				$(root).append(" / "+name+"");
				root.prependTo(replacement);
			}
			$(".back").on("touchmove", function(){
				dragging = true;
			});			
			$('.back').on(evt, function() {
				if (dragging == true) {
					dragging = false;
					return false;
				}
				$(this).closest("ul").prev("ul").removeClass("hide");
				var old = $(this).closest("ul");
				setTimeout(function() {
					old.remove();							
				}, 250);
			});	

		});
		$(".back").on("touchmove", function(event) {event.preventDefault();}, false);

	}

	/* COOKIE NOTICE 
	************************************************************************/

	BP3.cookieNotice = function() {

		var cookies = $(".cookies");

		if (readCookie('cookies') == null) {
			cookies.addClass("show");
			createCookie('cookies', '1');
		}
		cookies.find(".button").on("click", function() {
			cookies.removeClass("show");	
		});		
	}	

	/* SQUISHY HEADER
	************************************************************************/

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

	/* AUTO HIDE HEADER
	************************************************************************/

	BP3.autoHideHeader = function() {

		 var lastScrollTop = 0,
		 	 header = $(".autohide"),
		 	 hideon = 500;
		 	 
		$(window).on("load scroll", function() {
			var st = $(this).scrollTop();
			if (st > lastScrollTop & st >= hideon){
				header.addClass("hidden");
			} else {
				header.removeClass("hidden");
			}
			lastScrollTop = st;
		});

	}

	/* NOTIFCATION BAR
	************************************************************************/		

	BP3.notify = function() {

		// Bind notifcation bar to trigger on click of .notify elements	

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

		// Callback function, use case eg. on form error/success, use '(new BP3.notify()).callback("Groopidy Skooble Doobly Rooble");'

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

	/* CAROUSEL (http://flexslider.woothemes.com/)
	************************************************************************/

	// Images
	BP3.imageSlider = function() {
		$('.flexslider.images').flexslider({
			animation: "slide",
			selector: ".slides > img",
			slideshow: false,
		    start: function(slider){
		       slider.children(".flex-control-paging").detach().appendTo(slider.parent());;
		    },		
		});		
	}

	// Hero/Content
	BP3.heroSlider = function() {
		$('.flexslider.heros').flexslider({
			animation: "slide",
			selector: ".slides > .hero",
			slideshow: false,
			animationSpeed: 500,
		    start: function(slider){
		    	slider.addClass("active");
		    	slider.children(".flex-control-paging").detach().appendTo(slider.parent());;
		    },
		});			
	}


	/* MODAL WINDOW (for bespoke content)
	************************************************************************/

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

		// Callback function, use case eg. setTimeout spam window type thing, use '(new BP3.modals()).modal("#modal-window-1");'

		this.modal = function(id) {
			$(document).ready(function() {
				BP3.check(id);	
			});
		}

	}

	/* TABS
	************************************************************************/
	BP3.tabs = function() {

		var tabs = $(".tabs .switch"),
		tabsRadio = $(".tabs input:radio + label");

		// Close radio type on click - Mobile only
		
		tabsRadio.bind("click touchend", function() {
			if($( window ).width() <= 767) {	
				var input = $("input[id='"+$(this).attr('for')+"']");	
				if (input.is(':checked')) {
					BP3.uncheck(input);
					return false;
				}
			}
		});

		// On resize, make sure at least one tab is open

		$(window).resize( $.throttle( 250, function(){
			if($( window ).width() >= 768) {
				if(!$(".tabs .switch:checked").length) {
					BP3.check(tabs.first()); 
				}				
			}			
		} ) );

	}	

	/* ACCORDIONS
	************************************************************************/

	BP3.accordions = function() {

		var accordion = $(".accordion input"),
		accordionRadio = $(".accordion input:radio + label");

		// Close any accordion on page load

		BP3.uncheck(accordion);		

		// Close radio type on click

		accordionRadio.bind("click touchend", function() {	
			var input = $("input[id='"+$(this).attr('for')+"']");
			if (input.is(':checked')) {
				BP3.uncheck(input);
				return false;
			}
		});		

	}

	/* GOOGLE MAP
	************************************************************************/

	BP3.googleMap = function() {
		$.getScript("https://maps.googleapis.com/maps/api/js?key=AIzaSyCWg6EsSlK-EmCdimmWNodJr4adyFK_uAM", function() {
			$.getScript( "js/src/custom/map.js");
		});
	}



	/* INITIALISATION
	************************************************************************/

	BP3.init = function() {

		BP3.fastClick();

		if(BP3.exist(".infinity")) {
			BP3.infinityNav();
		}

		if(BP3.exist(".cookies")) {
			BP3.cookieNotice();
		}

		if (BP3.exist(".squishy")) {
			BP3.squishy();
			$(window).on("scroll", BP3.squishy);			
		}

		if (BP3.exist(".autohide")) {
			BP3.autoHideHeader();
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

		if(BP3.exist(".tabs")) {
			BP3.tabs();
		}		

		if(BP3.exist(".accordion")) {
			BP3.accordions();
		}	

		if(BP3.exist("#map")) {
			BP3.googleMap();
		}

	};		

} )( jQuery );

$(document).ready(function() {
	BP3.init();
});