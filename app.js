(function(){ // I <3 Closure
'use strict';

var $container = $('#container');
var cwidth = $container.outerWidth();
var cheight = $container.outerHeight();
var square = 20;

var $first_square = $('<div>').addClass('square');


pixelRadius();













function getRandomInt(min, max) {
	return Math.floor( Math.random() * (max - min + 1) ) + min;
}

function pixelRandom() {
	for(var i=0; i<200; i++){
		var x = getRandomInt(0, cwidth-20);
		var y = getRandomInt(0, cheight-20);
		var e1 = document.elementFromPoint(x, y);
		var e2 = document.elementFromPoint(x+20, y);
		var e3 = document.elementFromPoint(x+20, y+20);
		var e4 = document.elementFromPoint(x, y+20);
		if(!$(e1).hasClass('square') && !$(e2).hasClass('square') && !$(e3).hasClass('square') && !$(e4).hasClass('square')){
			var $square = $first_square.clone();
			$square.css({top: y, left: x});
			$container.append($square);		
		}
	};	
}

function pixelRadius() {
	var first_left = Math.floor(cwidth/2)-Math.ceil(square/2);
	var first_top = Math.floor(cheight/2)-Math.ceil(square/2);
	$first_square.css({top: first_top, left: first_left});
	$container.append($first_square);

	for(var i=0; i<100; i++){
		var x = getRandomInt(0, cwidth-20);
		var y = getRandomInt(0, cheight-20);
		var e1 = document.elementFromPoint(x, y);
		var e2 = document.elementFromPoint(x+20, y);
		var e3 = document.elementFromPoint(x+20, y+20);
		var e4 = document.elementFromPoint(x, y+20);
		if(!$(e1).hasClass('square') && !$(e2).hasClass('square') && !$(e3).hasClass('square') && !$(e4).hasClass('square')){
			var $square = $first_square.clone();
			$square.css({top: y, left: x});
			$container.append($square);		
		}
	};	
}

})(); //end closure