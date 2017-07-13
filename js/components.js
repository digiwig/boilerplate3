function uncheck(element) {
	element.prop('checked', false);	
}

/* NOTIFCATION BAR
************************************************************************/

// example code to bind a notification bar to an action
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
	notifyBar.text(text);
	setTimeout(function(){ 
		notifyBar.addClass(pos).addClass("show");
	}, 10);
	
	
	
	
});


/* MODAL
************************************************************************/

// Close the modal window and reset modal checkboxes on page load or on esc keypress.

var toggleModal = $(".modal-toggle");
$(document).ready(uncheck(toggleModal));
$(document).keydown(function(event) {
	if(event.keyCode == 27) {
		uncheck(toggleModal);
	}
});

/* ACCORDION
************************************************************************/

// Close any accordion on page load

var accordion = $(".accordion input");
uncheck(accordion);

// Close radio type on click

$(".accordion input:radio + label").on("click", function() {	
	var input = $("input[id='"+$(this).attr('for')+"']");	
	if (input.is(':checked')) {
		uncheck(input);
		return false;
	}
});

