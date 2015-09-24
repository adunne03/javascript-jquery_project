$(document).ready(function(){
	
	
	var n = prompt("Please enter a value between 1 and 100"); 

	for(var i = 0; i < n; i++){
		for(var j = 0; j < n; j++){
		$('<div/>').addClass('grid').appendTo('#container');	
		}
		console.log("done!");
	}

	$('.grid').hover(
		function(){
		$(this).addClass('active');
		});

	$('#container').height(n*10); 
	$('#container').width(n*10); 

	$('#clear').click(function(){
		$('.grid').removeClass('active');
	})

});


