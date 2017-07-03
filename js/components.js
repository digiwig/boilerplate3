/*

Modal 
=====

Close the modal window and reset modal checkboxes on page load or on esc keypress.

*/

var toggleModal = $(".modal-toggle");
$(document).ready(closeModal());
$(document).keydown(function(event) {
	if(event.keyCode == 27) {
		closeModal();
	}
});

function closeModal() {
	toggleModal.prop('checked', false);	
}