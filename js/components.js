function uncheck(element) {
	element.prop('checked', false);	
}

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

