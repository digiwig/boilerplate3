$(document).ready(function() {
	if (readCookie('cookies') == null) {
		$(".cookies").addClass("show");
		createCookie('cookies', '1');
	}
	 $(".cookies").on("click", function() {
	 	createCookie('cookies', '1');	
	 	$(this).removeClass("show");	
	 });	
});