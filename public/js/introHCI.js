'use strict';

// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
	initializePage();
});

/*
 * Function that is called when the document is ready.
 */
function initializePage() {
	// your code here
	$(".likeBtn").click(sendClick);
}

function sendClick(e){
	console.log("test");
	e.preventDefault();
	ga('create', 'UA-114577680-1', 'auto');
	ga("send", "event", "like", "click");
}