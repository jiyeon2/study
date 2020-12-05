/*--------------------------------------
js-amin
-----------------------------------------*/
// todo list
// 1. 문서에서 .demo-box요소를 선택
// 2. .demo-box요소를 사용자가 클릭하면 
// 3. 움직이는 함수(movingBox) 호출
// 4. 애니메이션 종료되면 콜백함수 실행

// .demo-box 선택
var demo_box = query('.demo-box');
function movingBox(box, position , callback){
	//데이터 검증
	if( isntElNode(box)){
		errorMsg('요소 노드여야만 합니다');
	}
	//초기값 설정
	position = position || {'x': 0 ,'y': 0};
	// callback = typeof callback ==='function' ? callback: function() {};
console.log(position);
//console.dir(box);
var current = {
	'x': box.offsetLeft,
	'y': box.offsetTop
};

//목표점
// console.log('distance x : ', position.x - current.x);
// console.log('distance y : ', position.y - current.y);

var target_x = current.x + 100;

var interval_id = setInterval(function(){
	if(current.x <= target_x){
	current.x+=10;
	box.style.left = current.x +'px';
	} else{
	clearInterval(Interval_id);}
	// box.style.top = current.y +10+ 'px';
}, 200)


//애니메이션 실행
//애니메이션 종료
if(callback && typeof callback ==='function'){
	callback();
}
}

demo_box.onclick = function(event){
	// console.log('clicked demo box');
	movingBox(this,{
		'x': event.clientX,
		'y': event.clientY
		}, function(){alert('애니메이션 끝남');});
};

// 자바스크립트 클로저 함수란?
// 자바스크립트 함수는 일급 객체의 요건을 모두 충족함
// 인자로서도 전달 가능, 값으로서 반환 가능
// 함수가 실행되어 내부에 존재하는 함수를 외부로 반환할 경우
// 클로저가 생되며, 반환된 함수는 클로저 영역을 참조할 수 있다.
// 이 때 반환된 함수를 클로저 함수라 명한다
function countDown(number){
	if( typeof number !== 'number'){throw new Error('숫자를 전달하세요');}
	var _num =number;
	//coundDown 외부 함수 내부에 존재하는 함수
	var _countDown= function(){
		console.log('_num :',_num--);
	};
	return _countDown;
	// console.log(_countDown); //메모리에서 사라짐
}
var countDown10 = countDown(10);
	// console.log(_countDown);

// countDown(10); //10
// countDown(); //9
// countDown(); //8
// countDown(); //7