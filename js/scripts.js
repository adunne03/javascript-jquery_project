$(document).ready(function(){
	buildGrid(); 
	draw(); 
	clearGrid(); 
	resetGrid();
});

//this builds the grid(WOW), adjusts container size based on user input

var buildGrid = function(){
	var n = prompt("Please enter a value between 1 and 100"); 

	$('#container').height(n*10); 
	$('#container').width(n*10); 

	for(var i = 0; i < n; i++){
		for(var j = 0; j < n; j++){
		$('<div/>').addClass('grid').appendTo('#container');	
		}
		console.log("done!");
	}

}

//changes color of divs in grid when hovered over

var draw = function() {
		$('.grid').hover(function(){
		$(this).addClass('active');
		});
}

//clears current grid

var clearGrid = function(){
		$('#clear').click(function(){
		$('.grid').removeClass('active');
	});
}

var resetGrid = function(){
	$('#reset').click(function(){
		location.reload();
	});
}






