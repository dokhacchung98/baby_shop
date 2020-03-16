/*Toast Init*/


$(document).ready(function() {
	"use strict";
	console.log('dsadadasdas');
	
	$.toast({
		heading: 'Well done!',
		text: '<p>You have successfully completed level 1.</p><button class="btn btn-primary btn-sm mt-10">Play again</button>',
		position: 'top-right',
		loaderBg:'#7a5449',
		class: 'jq-toast-primary',
		hideAfter: 3500, 
		stack: 6,
		showHideTransition: 'fade'
	});
});
          
