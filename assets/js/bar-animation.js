(function(global){
	'use strict';
	var circles      = document.querySelectorAll('.circle');
	var bar          = document.querySelector('.circle.bar');
	var circle_r     = bar.getAttribute('r');
	var getArcLength = function(r){
		return (2 * Math.PI * r)+'' ;
	};
  var getPercent   = function(percent){
		return ((100 - percent) /100 ) * getArcLength(circle_r);
	};

	circles[0].setAttribute('stroke-dasharray', getArcLength(circle_r));
	circles[1].setAttribute('stroke-dasharray', getArcLength(circle_r));	
	circles[0].setAttribute('stroke-dashoffset', 0);
	circles[1].setAttribute('stroke-dashoffset', 0);

	global.setTimeout(function(){
		bar.setAttribute('style',
			'stroke-dashoffset:'+getPercent(80)+'px; stroke: yellow; stroke-width: 0.7em;');}
, 500);	

})(this);