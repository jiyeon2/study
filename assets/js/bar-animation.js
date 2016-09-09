(function(global){
	'use strict';
//
	var ring_graphs       = document.querySelectorAll('svg.ring-graph'),
			ring_graph_length = ring_graphs.length,
			ring_colors				= ['#7584ff', '#d1a2ff','#ffa1d5','#8aff68','#f11fad'],
			ring_percent			= [70,40,50,60,20],
			ring_width;

	function draw_ring_graph(context, color, stroke_width, perc){
			var circles       = context.querySelectorAll('.circle');
			var bar           = context.querySelector('.circle.bar');
			var bar_color 		= color;
			var bar_width			= stroke_width;
			var circle_r      = bar.getAttribute('r');
			var _getArcLength = function(r){
				return (2 * Math.PI * r)+'' ;
			};
		  var _getPercent   = function(percent){
				return ((100 - percent) /100 ) * _getArcLength(circle_r);
			};
		
			circles[0].setAttribute('stroke-dasharray', _getArcLength(circle_r));
			circles[1].setAttribute('stroke-dasharray', _getArcLength(circle_r));	
			circles[0].setAttribute('stroke-dashoffset', 0);
			circles[1].setAttribute('stroke-dashoffset', 0);
		
			global.setTimeout(function(){
				bar.setAttribute('style',
					'stroke-dashoffset:'+_getPercent(perc)+'px; stroke: '+bar_color+';stroke-width:'+ bar_width+';');}, 500);	
				
	};

	for(var i=0; i<ring_graph_length; i++ ){
		if(i === 0){ 
			ring_width = '0.8em'; 
			draw_ring_graph(ring_graphs[i], ring_colors[i], ring_width, ring_percent[i]);} else{
			ring_width = '0.5em';
			draw_ring_graph(ring_graphs[i], ring_colors[i], ring_width, ring_percent[i]);
			}
	}

})(this);