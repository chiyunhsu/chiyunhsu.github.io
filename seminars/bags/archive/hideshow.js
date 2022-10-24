$(document).ready(function(){
	// Initially all abstracts are visible. If JavaScript is
	// running, hide all abstracts and add hyperlinks to toggle
	// the abstracts
	$("span.abstract").addClass("hidden");
	$("span.abstract").prepend('<a href="">abstract &plusmn;</a>');

	// Functionality to toggle abstracts.
	$("span.abstract > a").click(function(event){
		$(this).parents("span.abstract").toggleClass("hidden");
		return false;
	    });
    });

   