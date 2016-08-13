/*--------------------------------------
day 33 - funciton.js
-----------------------------------------*/

// 1. 함수 선언문(Function Declaration)
// 함수 블록문 뒤에 세미콜론(;)을 사용하면 안됨! 오류는 안나지만 문법에 맞지 않음
// if() { }
// while() { }
// for() { } 처럼 키워드로 시작하는 구문은 뒤에 세미콜론 안쓰는게 문법
// function 함수이름(){}

// 2. 함수 표현식(Function Expression)
// 함수 블록문 뒤에 세미콜론(;) 사용해야함.
// var 변수(이름) = function(){}; //전문가들은 이걸 권장함. 위쪽에 올려서 알아보기 쉽게???? 함수 선언식 쓸거면 산발적으로 말고 위쪽에 모아서 쓰기! 산발적으로 쓰면 오류남

// 3. '함수' 생성자 함수를 사용하여 함수를 생성하는 방법 - 아무도 안씀, 쓰지 않기
// new Function('함수 구문');
// new Function('return false');
var logIdentity = new Function('console.log("this is function object.")');

//함수를 참조하고 있는 변수 이름을 통해서 호출(실행연산자 '()' )         '(00)'돼지
//호출시 함수명과 실행연산자()는 붙여써야함
logIdentity();

/*--------------------------------------
관례적으로
변수명은 var_name
var student_id = 1 ;

함수명은 functionName
var getStudentId = function(){};

별도의 라이브러리 객체명은 앞에 $붙인다

네이밍 가이드가 중요!!
-----------------------------------------*/


/*--------------------------------------
변수: 하나의 값만 저장
배열: 자료형. 집합, 데이터의 묶음, 하나의 변수에 배열데이터 참조하면 하나의 변수로 다수 데이터 관리 가능.
-----------------------------------------*/
var favorite_01 ='감자';
var favorite_02 ='고구마';
var favorite_03 ='옥수수';
var favorite_04 ='마늘';

// var favorite_items=['감자','고구마','옥수수','마늘'];
// var favorite_items= new Array('감자','고구마','옥수수','마늘');
var favorite_items = new Array(); // []
favorite_items[0] = '감자';
favorite_items[1] = '고구마';
favorite_items[2] = '옥수수';
favorite_items[3] = '마늘';

console.log(favorite_items[0]); //'감자'

/*--------------------------------------
favorite_items['secret'] = "마늘은 맵다"; // "마늘은 맵다"

dir(favorite_items);
VM568:1 Array[4]0: "감자"1: "고구마"2: "옥수수"3: "마늘"length: 4secret: "마늘은 맵다"__proto__: Array[0]
-----------------------------------------*/

//=====================================================================


//데이터 유형별 변수 선언 및 값(리터럴) 할당

//변수 선언
var num, str, boo, func, arr, obj;

//선언된 변수에 각각 데이터를 리터럴 표현식으로 복사/참조
// 원시 데이터 유형 (복사)
num = 1234;
str = 'hey, jude';
boo = !0;
// 자료형 데이터 (참조)
func= function(){};
arr = [];
obj = {};

//var키워드를 한번만 사용하는 패턴 (var singleton pattern)
// var num=0, 
// 		str='',
// 		boo=true,
// 		func=function(){},
// 		arr = [],
// 		obj = {};

/*--------------------------------------
자바스크립트 데이터 유형 체크
1. typeof 키워드를 사용하는 방법
-----------------------------------------*/

typeof num; // 'number'
typeof str; // 'string'
typeof boo; // 'boolean'
typeof func; // 'function'
typeof obj; // 'object'
typeof arr; // 예상 : 'array', 결과: 'object' : 문제발생! 설계오류!
typeof null; // 예상 : 'null', 결과: 'object' : 문제발생! 설계오류!
typeof undefined; // 'undefined'

typeof RegExp; // 정규표현식, 'function'
typeof new RegExp; // 'object'
typeof Math; //'object'

/*--------------------------------------
자바스크립트 데이터 유형 체크
2. instanceof 키워드를 사용하는 방법
-----------------------------------------*/

// 역할: 생성자함수(객체를 생성하는자)를 통해 생성된 객체(인스턴스)인가?
// 객체 instanceof 생성자    | 형태로 사용
arr instanceof Array; //true. typeof 설계 오류의 문제점 해결할 수 있다.

// 약점: 원시데이터유형(리터럴방식)의 경우는 올바른 대답을 해주지 않는다
'primiive' instanceof String;								//false
new String('primitive') instanceof String;	//true

/*--------------------------------------
자바스크립트 데이터 유형 체크
3. constructor 속성을 사용하는 방법
-----------------------------------------*/
// *객체 유형의 데이터에서는 완벽한 결과를 반환한다
'primitive'.constructor === String;							//true
new String('primitive').constructor === String;	//true

// 단, 객체가 아닌 유형에서는 오류를 발생시킨다
// VM522:1 Uncaught TypeError: Cannot read property 'constructor' of null(…)

// 왜냐하면 constructor속성은 객체만이 가지는 속성이므로
// (null).consstructor; //null, undefined는 객체가 아니므로 속성이 없다

// function checkDataType(data,maker){return data.constructor === maker;}
// 	undefined
// checkDataType('90',String);
// 	true

/*--------------------------------------
자바스크립트 데이터 유형 체크
4. Object.prototype.toString
-----------------------------------------*/

function isType(data){
	return Object.prototype.toString.call(data).slice(8,-1).toLowerCase();
}


//===================================================================
//나머지연산자
// var message = ['안녕','덥지','밥은 먹었니','잘 지내니','예'];
// for (var count = 0, messages = message.length; count<messages; count++){
// 	console.log(message[count % messages]);
// }

// interpolation이랑 비슷한거, 지금 모든 브라우저가 지원하진 않음
var name = '지연';
`안녕하세요 저는 ${name}입니다`;
//지원 안하는 경우 문자열 접합 + 이용

var start = 0;
// while (start < 20){
// 	console.log(start);
// 	start++;
// }
// while (start++ < 20){
// 	console.log(start);
// } 

// var start = 0;
// while (++start< 20){
// 	console.log(start);
// } 

// var i=0;
// while(document.querySelectorAll('a')[i++]){ //문서에 요소가 있을때만 실행. 문서 내 모든 a 순환하고 종료. a요소가 없으면 undefined되어 조건이 거짓이 되어 종료됨
// 	console.log('..');
// }

//증가(감소)연산

var check_fact = 100;

//debugger; 코드 남아있으면 이용자 사용할 대 멈출 수 있다
// console.log(check_fact);
// console.log(check_fact++);
// console.log(check_fact);
// console.log(--check_fact);
// console.log(check_fact);
// console.log(++check_fact);
// console.log(check_fact);
// console.log(check_fact--);
// console.log(check_fact);

// 오늘은 무슨 요일일까?
// 0,1,2,3,4,5,6
// var today = parseInt(Math.random() * 10) % 8 ;
// var today = new Date().getDay();//운영체제 시간 가져옴, 사용자가 날짜 변경하면 바뀜
// console.log(today);

// var today_is = today === 0 ? '일요일' : '일요일이 아님';
// var today_is = today === 0 ? '일' : 
// 							 today === 1 ? '월' : 
// 							 today === 2 ? '화' : 
// 							 today === 3 ? '수' : 
// 							 today === 4 ? '목' : 
// 							 today === 5 ? '금' : 
// 							 today === 6 ? '토' : '일';        

// console.log('오늘은 '+today_is+ '요일 입니다.');

//switch, case, default
// switch(조건){
// 	case 값: 코드 실행;
// 	case 값: 코드 실행;
// 	case 값: 코드 실행;
// 	case 값: 코드 실행;
// 	default: 위의 상황(case)이 아니면 최종 실행;
// }

var today_is, today =1;
switch (today){
	case 0:
	 today_is = '일';
	break;
	case 1:
	 today_is = '월';
	break;
	case 2:
	 today_is = '화';
	break;
	case 3:
	 today_is = '수';
	break;
	case 4:
	 today_is = '목';
	break;
	case 5:
	 today_is = '금';
	break;
	case 6:
	 today_is = '토';
	break;
	default: today_is = false;
}
console.log(today_is ? '오늘은 ' + today_is + '요일 입니다':'ㅇ?');

//switch ~ case문 응용

function init(){
	var event_types =  'click dblclick mouseenter mouseover mouseout mouseleave blur focus'.split(' ');
// 	var event_types = [];
// 	event_types.push('click');
// 	event_types.push('dbclick');
// 	event_types.push('mouseenter');
// 	event_types.push('mouseover');
// 	event_types.push('mouseout');
// 	event_types.push('mouseleave');
// 	event_types.push('blur');
// 	event_types.push('focus');
// //지역변수
var random_count = Math.floor(Math.random()*event_types.length);
var event_type = event_types[random_count];
console.log(event_type);
var callback;
var dom_el= query('.result');
dom_el.setAttribute('tabindex',0); //포커스 가지 않는 p단락에 포커싱 갈 수 있도록

dom_el.innerHTML = 'this is dom object.';

switch(event_type){
	case 'click':
	case 'dblclick':
		callback = function(){
				console.log('clicked object');
		};
	break;
	case 'mouseenter':
	case 'mouseover':
		callback = function(){
			console.log('mouse enter object');
		};
	break;
	case 'mouseout':
  case 'mouseleave':
      callback = function() {
        console.log('mouse entered object');
      };
    break;
	case 'focus':
    case 'blur':
      callback = function() {
        console.log('focused or blured object');
      };

}

document['on'+event_type] = callback;

}

window.onload=init;
