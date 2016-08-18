// javascript- core.js

/*--------------------------------------
어제(160817) 배운 내용
- hoist 이 개념을 모르면 원하는대로 동작하지  않을 수도 있다
- closure
- callback pattern
- loop + closure
- IIFE -> module pattern(client-side, front-side)로 변화함
-----------------------------------------*/

//전역
// var yamoo9;
// 다른 이의 작성된 코드와 충돌 날 확률 있다

//코드를 작성하기 위한 공간 생성 (IIFE패턴 사용)
(function(global){
'use strict';
//var yamoo9; // 지역변수, 전역과 충돌x //undefined, 함수 실행되고 사라짐

//외부에 노출
//ㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁ9=yamoo9;


// 스크립트 이용해 오늘이 무슨 요일인지 알 수 있다
// @임의로 요일을 조정할 수 있다 [프로그래밍 할 것]
// 주중인지 주말인지 구분하여 콘솔에 출력한다
// 주중: '아 출근'
// 주말: '아싸 주말!!@@!!@!@'

// var today = (new Date()).getDay();
// today = 6; //0~6
// // console.log(today);
// // 주중, 주말인지 구분하여 콘솔에 출력

// switch(today){
// 	case 0:
// 	case 6:
// 		console.log('주말이다 야호!!@');
// 		break;
// 	default:
// 		console.log('아 출근...')
// }


})(this);//세미콜론 잊지 말기!
//코드 엉키는것 방지하기 위해 맨 앞에 ;붙이는 경우도 있다

// console.log(yamoo9); // error ) is not defined

(function(){
	'use strict';

	//.button-set을 선택
	var button_set = query('.button-set');
	//.button-set [CONTEXT] 내부에서 .button 을 모두 수집 [NODELIST]
	var buttons = makeArray(queryAll('.button', button_set));
	
	// 수집된 [nodelist]를 순환하여 (코드의 흐름 제어) 
	//클릭 이벤트에 함수(이벤트 핸들러)를 연결한다
	//for문 예시 1 : 클로저 사용하여 문제 해결---------------------------------------------------------
	// for (var i=0, l=buttons.length; i<l; i+=1){
		// buttons[i].onclick = (function(){
		// 	return function(){
		// 	console.log(i);
		// 	};
		// })(i);
	// }
	//for문 예시 2 : 버튼객체 속성 추가----------------------------------------
for (var button,i=0, l=buttons.length; i<l; i+=1){
	 button = buttons[i];
	 //객체.속성을 추가하여 for문이 돌때마다 각 버튼 객체의 index속성에 i값을 할당한다/
	 button.index = i;
	 button.onclick=function(){
	 	//this 키워드 컨텍스트를 참조하는 변수
	 	//this 를 사용하여 각 버튼 객체의 index 속성 값에 접근하여 출력한다
	 	console.log(this.index);
	 }
	}
	//forEach 예시----------------------------------------------------------------------------------------------
	//상위 컨텍스트의 인덱스 값 있으므로 클로저함수 필요없음
	buttons.forEach(function(button, index){
		// console.log(arguments); 
		//arguments는 함수 내부에서만 접근 가능한 매개변수 ( 전달인자들 묶어놓은 집합)
		//arguments는 유사배열 객체, 배열 아님
		button.onclick = function(){
			console.log(index);
		}
	});
	//각 버튼을 사용자가 클릭한 경우, 자신의 순환 인덱스 숫자를 콘솔에 출력한다.


//함수 작성 이유
//재사용 할 것 같은 코드들
//매번 짜면 비효율적
//능률적으로 코드 처리위해
//코드 묶음을 재사용 혹은 확장 할 수 있도록 처리


})(this);

// 클로저 -사라진 공간의 변수 참조
// - 코드 분기 한번만 사용됨
//array.from 있는지 없는지 한번만 확인하게 만들기
// 1. 정식으로 클로저 사용하는 방법
// 별도의 실행구문 필요하므로 권장하지 않음
function convertArray_wrapper(){
//내부에서 클로저함수를 반환
var closureFn;
if(Array.from){
	//Array.from이 지원되는가?
	closureFn= function(data){
		return Array.from(data);
	};
}else{
	//지원되지 않는가?
	closureFn= function(data){
		return Array.propotype.slice.call(data);
}
}

	return 
	return _fn;
}

// var convertArray = convertarray_wrapper();

//2. 약식 (IIFE) 을 사용하여 클로저 처리
// 스스로 실행하므로 별도로 함수정의 호출할 필요 없음

 var convertArray = (function(){
 	if(Array.from){
 		return function(data){
 			return Array.from(data);
 		}
 	}else{
 		return function(data){
 			return Array.prototype.slice.call(data);
 		}
 	}
 })();

(function(global){
	'use strict';
	//생성자 역할 수행하는 함수
	// 이름 짓는 관례상 첫글자가 대문자로 작성됨
	function Coffee(name){
		this.name= name;
		//new 키워드와 만나면 return 객체 생성해서 반환
	}
	var americano = new Coffee('아메리카노');
	var latte = new Coffee('라떼');
	var mocha = new Coffee('모카');
})(this);

(function(global){
	'use strict';
	//숫자 객체 생성자를 사용하여 숫자 1부터 10까지를 변수 num1 ~ num10에 생성하여라
	// 단 num1 ~ num10에는 숫자값이 담겨야 한다.

global.num1 = (new Number(1)).valueOf();


//불리언 객체 생성자를 사용하여 불리언 true, false로 연속되는 변수 boo1, boo10에 생성
//단 boo1, boo10에는 불리언 값이 담겨야 한다

var boo1 = (new Boolean(true)).valueOf();
console.log(boo1);
var boo2 = (new Boolean(false)).valueOf();
console.log(boo2);

for(var i =1, tf; i<=10; i++){
tf = i % 2;

console.log(Boolean(tf));
}
})(this);