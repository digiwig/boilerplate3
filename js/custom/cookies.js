

// cookie policy
$(document).ready(function() {		
	 if (readCookie('cookies') == null) {
	 $("body").prepend("<div id='cookies'></div>");
	 $('#cookies').load("/inc/cookies.html", function() {	   
	 	$(this).addClass("show");					
	 });		

	 }
	 $("#cookies").on("click", function() {
	 	createCookie('cookies', '1');	
	 	$(this).removeClass("show");	
	 });
});