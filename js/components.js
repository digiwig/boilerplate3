function check(element) {
	$(element).prop('checked', true);	
}

function uncheck(element) {
	element.prop('checked', false);	
}

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

function notify(text, position = "top", color = "black") {
	if(text) {
		$("#notify").removeAttr("class");
		setTimeout(function(){ 
			$("#notify").text(text).addClass(position).css("background-color", color).addClass("show")	
		}, 10);
	}
}

notify("Welcome to Marks Amazing Front-End Framework");


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

