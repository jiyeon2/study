(function(global){
	'use strict';

//svg 요소 생성하는 함수
var getNode = function(element, values){
  element = document.createElementNS("http://www.w3.org/2000/svg", element);
  for (var item in values){
    element.setAttributeNS(null, item, values[item]);
  }
  return element;
};
//svg 요소의 속성 세팅하는 함수
var setAttr =	function(element, values){
	for (var item in values){
		element.setAttribute(item, values[item]);
  }
  return element;
};
// 원의 둘레 구하는 함수
var getArcLength = function(r){
		return (2 * Math.PI * r)+'' ;
};

//svg 원 그래프 요소 만드는 함수
var makeRing = function(svg_width, c_color,c_percent){

	var svg 					= getNode('svg',{'width': svg_width, 'height': svg_width}); //원 그래프 그릴 svg
	var stroke_width  = 5; //그래프 선 두께
	var circle_pos 		= svg_width/2; //원그래프 x,y좌표(svg의 중앙)
	var circle_r		 	= circle_pos - stroke_width; //원의 반지름
	//그래프 애니메이션
	var movepath 			= function(e, len, per){
		len = len - 10; 
		if (len <10){ len =0;};
		e.style.strokeDashoffset = len;
		if(len > getArcLength(circle_pos)*((100-per)/100)){
			setTimeout(function(){movepath(e,len, per);}, 15);
	}
}

//회색 배경이 되는 원
	var circle = getNode('circle',{
												'cx': circle_pos, 
												'cy': circle_pos,
												'r': circle_r,
												'stroke-width': stroke_width,
												'stroke': '#E2E8E8',
												'stroke-linecap':'round',
												'stroke-dasharray': getArcLength(circle_pos),
												'stroke-dashoffset':0,
												'fill': 'none'
											});
//움직이는 원
	var move_c = circle.cloneNode(true);
	setAttr(move_c,{'stroke': c_color, 'stroke-width': stroke_width*1.5});
	move_c.style.strokeDashoffset = getArcLength(circle_pos);
	move_c.style.strokeDasharray = getArcLength(circle_pos);
//시작부분 알리는 점
	var dot = getNode('circle',{'r':(stroke_width*0.5), 'cx': (circle_pos + circle_r), 'cy': circle_pos, 'fill':'white'});

	svg.appendChild(circle);
	svg.appendChild(move_c);
	svg.appendChild(dot);


global.setTimeout(function(){
movepath(move_c, getArcLength(circle_pos), c_percent)
}, 500);	

	return svg;
}

//원그래프 색깔
var ring_colors={
	'foot-steps':'#00FF99',
	'stair':'#00EFD7',
	'location':'#FFFF5B',
	'burn':'#FF598A',
	'active-time':'#FF3DFF',
};

// var max_counts = {'footsteps':10000, 'stair':40, 'location': 10, 'burn':2000, 'active_time':100};

var svg_containers = document.querySelectorAll('.daily-item .svg-container');

//그래프 화면에 나오게 하는 함수
function showGraph(){
var j=0, ring_size, percent;
for(;j<svg_containers.length;j++){
	if(j == 0){ring_size = 150;}
	if(j !== 0){ring_size = 80;}
	var svg_theme = svg_containers[j].parentNode.className.split(' ')[1];
	percent = parseInt(Math.random()*100);
	svg_containers[j].appendChild(makeRing(ring_size, ring_colors[svg_theme], percent));
}
};
showGraph();


})(this);
