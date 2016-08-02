/* bom. js*/

// 자바스크립트 변수는 변수 이름 앞에 var 키워드를 붙인다

// 카멜케이스 표기식
// 음절과 음절이 맞닿을 때 뒷 음절의 첫글자가 대문자가 되는 것을 말한다

// sass 변수
// $dp : value;



// var device_pixel_density;
var dp = window.devicePixelRatio;

// 웹브라우저의 콘솔(Console) 패널에 기록(Log)을 남긴다.
console.log('기기의 픽셀 농도',dp); //홑따옴표, 쌍따옴표 둘 다 사용 가능.

// sass 조건문
// @if dp == 1{
// 	@debug "일반 디스플레이의 픽셀 농도를 가집니다";
// }

// @if dp > 1{
// 	@debug "고해상도 디스플레이의 픽셀 농도를 가집니다";
// } @else{
// 	@debug '일반 디스플레이의 픽셀 농도를 가집니다';
// }
//따옴표로 묶인 내용은 문자열이다


// javascript 조건문
// if (dp > 1) {
// 	console.log("고해상도 디스플레이의 픽셀 농도를 가집니다");
// } else {
// 	console.log('일반 디스플레이의 픽셀 농도를 가집니다');
// }

/**
*-----------------------
*웹브라우저 창(window)의 화면 가로(세로) 폭
*-----------------------**/
var window_w = window.innerWidth;
var window_h = window.innerHeight;

// console.log('window_w', window_w);
// console.log('window_h', window_h);

/**
*-----------------------
* window.scrollX
* window.pageXOffset
* window.scrollY
* window.pageYOffset
*-----------------------**/
var window_scrollX = window.scrollX;
var window_scrollY = window.scrollY;

// console.log('window_scrollX', window_scrollX);
// console.log('window_scrollY', window_scrollY);


// 자바스크립트 변수 선언만 하는 경우, 즉 값이 대입(할당)되지 않은 경우
// undefined 값이 기본으로 할당되어 있다
var scroll_Y; // undefined
// *이미 객체의 속성이 정해진 값을 사용자가 덮어쓰게 된다면, 
//덮어 쓴 값이 출력된다.(자바스크립트 약점. 태생적 한계)
//초창기 자바스크립트 환경에서는 비전문가도 쓸 수 있는 가벼운 언어를 목적으로 하였으므로 문법이 엄격할 수 없었다.

//window 전역 객체 속성 중에 scrollTop이 있는가 확인? 크로스 브라우징 목적
//scrollTop지원한다는 것은 구형 IE를 감지한다는 것이다
if (window.scrollTop){
	//scrollTop 속성이 window 전역 객체에 존재한다면 (조건이 참(true))
	//scrollY 변수에 window.scrollTop이 가리키는 값을 할당한다
	scroll_Y = window.scrollTop;
} 
//그렇지 않다면, 위 조건이 거짓(false)인 경우
else {
	//scrollY 변수에 window.scrollY가 가리키는 값을 할당한다.
	// = 연산자는 "할당(대입)연산자"이다
	scroll_Y = window.scrollY
}


/*
*----------------------
* window 객체의 메소드(함수)
* 메소드(method)란?
* 객체가 소유하고 있는 함수를 가리킴
*----------------------
*/
// window.alert('다이얼로그 창을 띄움으로써 사용자에게 메시지를 보여준다');

// var is_youngman = window.confirm('당신은 청년입니까?');

// console.log('is_youngman:', is_youngman);

// if (is_youngman){
	// console.log('당신은 청년입니다!!');
// } else {
	// var is_oldman = window.confirm('당신은 장년층입니까?');
	
	// console.log('is_oldman:', is_oldman)
// }


//사용자의 입력 값을 받아왔다면 이를 기억해두기 위해 변수가 필요하다!
// var user_name = window.prompt('당신의 이름은 무엇입니까?', '예:아무개');
// window.alert(user_name+'님 반갑습니다*^^*');


/*-----------------------------------
* 시간을 제어하는 window 객체의 메소드
* window.setInterval()
* window.setTimeout()
---------------------------------*/

// window.setInterval()
// window.setTimeout()

// sass 함수
// $count: 10;
// @function countDown(){
// 	$count: $count-1;
// 	@return $count;
// }

// 자바스크립트 함수
var count = 10;

function countDown(){
	count = count-1;
	console.log(count);
	return count;
}

//주기(시간)마다 수행되는 일을 처리할 경우
//아래와 같은 구문을 사용할 수 있다
window.setInterval(countDown(),1000);

//컴퓨터에게 일을 반복적으로 수행하도록 시켰으나
//이를 멈출 수 있는 장치를 마련하지 않고 사용하면 안된다

