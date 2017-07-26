function check(element) {
	$(element).prop('checked', true);	
}

function uncheck(element) {
	element.prop('checked', false);	
}

/* SQUISHY HEADER
************************************************************************/

$squishy = $(".squishy"),
$window	= $(window);

function squish() {
	var distanceY = window.pageYOffset || document.documentElement.scrollTop,
	shrinkOn = 75;
	if (distanceY > shrinkOn) {
		$squishy.addClass("squish");
	} else {
		if ($squishy.hasClass("squish")) {
			$squishy.removeClass("squish");
		}
	}			
}
$window.on('scroll', function() {
	squish();			  
});

$(document).ready(function() {
	squish();				
});

/* NOTIFCATION BAR
************************************************************************/

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

// Callback function, use case eg. on form error/success

function notify(text, color = "#333", position = "top") {
	if(text) {
		$("#notify").removeAttr("class");
		setTimeout(function(){ 
			$("#notify").text(text).addClass(position).css("background-color", color).addClass("show")	
		}, 10);
	}
}

//notify("Welcome to Marks Amazing Front-End Framework");


/* MODAL
************************************************************************/

// Bind event to any element with class .modal-button, but not labels

var modalButton = $(".modal-button").not("label");
modalButton.on("click", function(){ 
	var modal = "#"+$(this).attr("data-for");
	check(modal);
});


// Close the modal window and reset modal checkboxes on page load or on esc keypress.

var toggleModal = $(".modal-toggle");
$(document).ready(uncheck(toggleModal));
$(document).keydown(function(event) {
	if(event.keyCode == 27) {
		uncheck(toggleModal);
	}
});

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

accordionRadio.on("click", function() {	
	var input = $("input[id='"+$(this).attr('for')+"']");	
	if (input.is(':checked')) {
		uncheck(input);
		return false;
	}
});

