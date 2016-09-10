
var body=d3.select('body');
var num = 40; // 막대그래프 길이보정값

d3.csv('../../../assets/data/july_sleep.csv', function(error, data){

	var w = 700;
	var h = 500;

	var svg = body.append('svg') //svg 태그 생성
			.attr({
				width : w,
				height : h,
				// viewBox: '0,0, 600, 500' // 사이즈,위치 조절 가능
			})
			.style({
				padding: '20px',
				margin: '20px',
				border: '1px solid blue'
			});

	var bar_group = svg.append('g') //svg태그 자식으로 <g class="bars">생성
		.attr('class','bars');

	bar_group.selectAll('rect') //rect요소 지정
			.data(data)							//data를 요소에 연결
			.enter()								//각 데이터가 들어갈 객체 생성
			.append('rect')					//객체와 연결된 rect요소들을 생성
			.attr({									//각각의 rect에 속성할당
				fill: '#89dc75',
				x: function(d,i){ return i*20; } , 
				// d: data, i: index / 각 rect x좌표값을 index*20으로 설정 -> 20px씩 떨어져있게됨
				y: 500, // 초기 y값을 맨 아래에 둠
				width: 14,
				height: 0
				}) 
			.transition() //애니메이션 추가. 애니메이션 지정할 속성을 .transition()을 아래에 쓴다
			.attr('y', function(d,i){return 500 - d.sleepTime*num; })
			.attr('height',function(d,i){return d.sleepTime*num;})
			.duration(1000) //1000ms 후 시작
			.delay(function(d,i){return i*50}); // 각 rect마다 지연시간을 줌


//마우스 올라갔을 때 막대그래프 위에 툴팁 띄우는 이벤트 설정
	bar_group.selectAll('rect') //모든 막대그래프 선택
			.on('mouseover', function(d){ //마우스 올라갔을 때 이벤트 설정
				d3.select(this)
					.transition()
					.attr('fill','#45ac67');

				var xPos = parseFloat(d3.select(this).attr('x')) - 30; //툴팁의 x좌료
				
				var yPos = parseFloat(d3.select(this).attr('y'))/ 2 + h/7; //툴팁의 y좌표
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
					.attr('fill','#89dc75');
				d3.select('.tooltip').classed('hidden',true);
			})

});
