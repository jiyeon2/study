var sleepTimeData;
var body=d3.select('body');
var num = 40; // 수치보정값

d3.csv('../../../assets/data/july_sleep.csv', function(error, data){
	sleepTimeData = data;
	var w = 700;
	var h = 500;
	// var xScale = d3.scale.ordinal()
	// 								.domain(d3.range(sleepTimeData.sleepTime.length))
	// 								.rangeRoundBands([0,w], 0.05);
	// var yScale = d3.scale.linear()
	// 								.domain([0, d3.max(sleepTimeData.sleepTime)])
	// 								.range([0,h]);

	var svg = body.append('svg')
			.attr({
				width : w,
				height : h,
				// viewBox: '0,0, 600, 500' // 사이즈,위치 조절 가능
			})
			.style({
				padding: '20px',
				margin: '20px',
				border: '1px solid blue'
			})
		.append('g');
		// console.log(svg);
	var bar_group = svg.append('g')
		.attr('class','bar');
	// console.log(bar_group);
	bar_group.selectAll('rect')
			.data(sleepTimeData)
		.enter().append('rect')
			.attr({
				x : function(d,i){ return i*20; }, // return xScale(i)
				y : function(d){return 500 - d.sleepTime*num;},// return h-yScale(d)
				width : 14, //xScale.rangeBand()
				height : function(d,i){return d.sleepTime*num;}, // fundtion (d,i){ return yScale(d);}
				fill: '#89dc75'
			})
			.on('mouseover', function(d){
				d3.select(this)
					.attr('fill','#89ffad');

				var xPos = parseFloat(d3.select(this).attr('x')) - 30; 
				//+ xScale.rangeBand() /2;
				var yPos = parseFloat(d3.select(this).attr('y'))/ 2 + h/7;
				var time_minute = (d.sleepTime+'').split('.'),
						time        = time_minute[0],
						minute      = time_minute[1];



				d3.select('.tooltip')
					.style({
						left: xPos + 'px',
						top: yPos + 'px'
					})
					.select('.value')
					.text(time+'시간 '+minute+'분');
				d3.select('.tooltip').classed('hidden',false);
			})
			.on('mouseout', function(){
				d3.select(this)
					.attr('fill','#89dc75');
				d3.select('.tooltip').classed('hidden',true);
			})



});
