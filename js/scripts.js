$(document).ready(function(){
	
	

	for(var i = 0; i < 10; i++){
		for(var j = 0; j < 10; j++){
		$('<div />').addClass('grid').appendTo('#container');	
		}
		console.log("done!");
	}

	$('.grid').hover(
		function(){
		$(this).addClass('active');
		}, function(){
			$(this).removeClass('active');
		});


});


