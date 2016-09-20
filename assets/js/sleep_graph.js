d3.csv('/assets/data/july_sleep.csv', function(error, data){

	var w = 1100;
	var h = 500;
	var modal_content=d3.select('.modal-content');
	var y = d3.scale.linear()//선형척도
					.domain([0,d3.max(data, function(element){return element.sleepTime;})]) //실제수면시간(정의역)
					.range([h,0]); //표시되는 수면시간길이(치역)
 var x = d3.scale.ordinal()//순서척도
 					.domain(data.map(function(element){return element.date;}))
 					.rangeBands([0, w], 0.2, 0);
	var svg = modal_content.append('svg') //svg 태그 생성
			.attr({
				width : w,
				height : h,
				class: 'svg sleep',
				// viewBox: '0,0, 1500, 500' // 사이즈,위치 조절 가능
			})
			.style({
				padding: '20px',
				margin: '20px'
			});

	var bar_group = svg.append('g') //svg태그 자식으로 <g class="bars">생성
		.attr('class','bars');

	bar_group.selectAll('rect') //rect요소 지정
			.data(data)							//data를 요소에 연결
			.enter()								//각 데이터가 들어갈 객체 생성
			.append('rect')					//객체와 연결된 rect요소들을 생성
			.attr({									//각각의 rect에 속성할당
				fill: '#55C2C2',
				x: function(d,i){return x(d.date)},
				y: h, // 초기 y값을 맨 아래에 둠
				width: x.rangeBand(),
				height: 0
				}) 
			.transition() //애니메이션 추가. 애니메이션 지정할 속성을 .transition()을 아래에 쓴다
			.attr('y', function(d,i){return y(d.sleepTime); })
			.attr('height',function(d,i){return h - y(d.sleepTime);})
			.duration(1000) 
			.delay(function(d,i){return i*50}); // 각 rect마다 지연시간을 줌


//마우스 올라갔을 때 막대그래프 위에 툴팁 띄우는 이벤트 설정
	bar_group.selectAll('rect') //모든 막대그래프 선택
			.on('mouseover', function(d){ //마우스 올라갔을 때 이벤트 설정
				d3.select(this)
					.transition()
					.attr('fill','#8BFDFD');

				var xPos = parseFloat(d3.select(this).attr('x')-40); //툴팁의 x좌표
				var yPos = parseFloat(d3.select(this).attr('y'))+h/30; //툴팁의 y좌표
				var time_minute = (d.sleepTime+'').split('.'), 
						time        = time_minute[0], //수면 시간
						minute      = time_minute[1]; //수면 분

				d3.select('.tooltip')
					.style({
						left: xPos + 'px',
						top: yPos + 'px'
					})
					.select('.value')
					.text(time+'시간 '+minute+'분');
				d3.select('.tooltip').classed('hidden',false);
			})
			.on('mouseout', function(){ //마우스가 나갔을 때 이벤트 설정
				d3.select(this)
					.transition()
					.attr('fill','#55C2C2');
				d3.select('.tooltip').classed('hidden',true);
			})

//y축 수면시간 레이블
var yAxis = d3.svg.axis() //축 생성자 생성
	.scale(y)
	.orient('left')
	.ticks(8); //축의 척도를 정함

	svg.append('g')
	.attr('class','yAxis')
	.call(yAxis);

//그래프 내 시간별 줄긋기
	var axis_lines = svg.select('.yAxis').selectAll('line')[0],
			axis_lines_length = axis_lines.length,
			i=0;
	for(; i<axis_lines_length;i++){
	axis_lines[i].setAttribute('x1', w);
	}

	//x축 수면시간
var xAxis =d3.svg.axis()
						.scale(x)
						.orient('bottom');

		svg.append('g')
				.call(xAxis)
				.attr('class','x_axis')
				.style('transform','translateY('+h+'px)')
});

//sleep-graph modal
(function(global){
	'use strict';
	 var modal =document.querySelector('.modal');
	 var sleep_graph_link = document.querySelector('.sleep-graph-link');
	 var modal_close_btn = document.querySelector('.modal-close-btn');

	 sleep_graph_link.addEventListener('click',function(e){
	 	e.preventDefault();
	 	modal.style.display = 'block';
	 });

	 	modal_close_btn.addEventListener('click',function(){
	 	modal.style.display = 'none';
	 });

	 	global.addEventListener('click', function(e){
	 		if (e.target == modal){
	 			modal.style.display = 'none';
	 		}
	 	});
})(this);


//sleep-graph 마우스 휠
(function($){
		'use strict';
		$('.modal').mousewheel(function(event, delta) {
			this.scrollLeft -= (delta * 30);
			event.preventDefault();
		});
	})(this.jQuery);