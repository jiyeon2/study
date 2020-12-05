/*--------------------------------------
loop-funcitons
-----------------------------------------*/

//--------------------------
// 자바스크립트 반복문
// 1.1. while
// 1.2. do ~ while
// 2.1. for
// 2.2. for ~ in [object]
// 2.3. forEach [Array] ECMAScript 5 edition// ie 하위버전은 지원 안됨
// 2.4. for ~ of [Array] ES2015/ 크로스브라우징 안됨


// // DEMO:
// // forEach구문
// var movielist = [];
// movielist.push('터널');
// movielist.push('덕혜옹주');
// movielist.push('부산행');
// movielist.push('서울역');
// // console.log(movielist);

// // for문
// for(var i=0, l=movielist.length; i<l; i+=1){
// 	// console.log('for문의 결과: ', movielist[i]);
// }

// //for - of문
// for (var movie of movielist){
// 	// console.log('for - of 문의 결과: ', movie);
// }

// // for - in문
// for (var index in movielist){
// 	if(movielist.hasOwnProperty(index)){
// 	// console.log('for - in 문의 결과: ', movielist[index]);}
// }

// // forEach문 !!! , .map 매우유용!!@ 크로스 브라우징 이슈 있음.
// // 배열 객체(Array)의 메소드: .forEach(원소, 순서, 배열) - 다 쓸 필요는 없음
// // 유사배열인 nodelist에서는 사용 안됨. 그런데 크롬은 지우너함 
// movielist.forEach(function(item,index,arr){ // 원하는 매개변수만 쓰면 됨, arr매개변수는 배열 자체를 반환
// 	// return 'item'+index+':'+item; // .forEach는 반환값이 undefined(반호나ㅗ값 없음)
// 	// console.log('item: ',item);
// 	// console.log('item '+index+':',item);
// 	// console.log(`item ${index}:`,item);
// 	// console.log('index: ',index);
// 	// console.log('arr: ',arr);
// })


// // 배열 객체(Array)의 메소드 : .map(원소, 순서, 배열)
// // .map()의 반환 값은 수정된 배열을 반환
// var new_movielist = movielist.map(function(item,index,arr){
// 	return item +'은' +index +'번째 원소입니다';
// 	// console.log('item'+index+':',item);
// 	// if (index === movielist.length -1 ){
// 	// 	console.log('arr:',arr)
// 	// }
// });

// console.log(new_movielist);

// --------------------------
// 자바스크립트 함수

// 함수의 특징
// 상위영역(scope)과 구분되는 별도의 독립적인 영역을 생성한다
// 함수 내부에 'var' 키워드, 'function' 키워드로 정의된 데이터 값은 외부 영역에서 접근이 불가능하다
// 함수 내부는 독립된 공간이기에 내부에 정의된 'var' 키워드, 'function' 키워드는 호이스트 된다.

 //호이스트 (영역 최상단으로 끌어 올려진다)
 // 'function'으로 정의된 함수는 몸체가 전부 끌어올려진다
 // 'var' 키워드로 정의된 변수는 변수 이름만 끌어올려질 뿐, 할당되는 데이터는 원래 정의된 곳에서 이루어진다.

 //DEMO:
 //선언식 (함수 이름으로 정의하는 방법)
// funciton sopeFn(){} //세미콜론 필요없음

 // 표현식 (함수 값(리터럴)을 변수에 할당하는 방법)
//  var scopeFnExpression = function(){
//  	// var movielist;//undefined
//  console.log(this); // window객체

// //외부와 단절된 독립된 공간이 형성됨
// if(movielist){
// 	inScopeFnc();
// 	console.log('if 내부:', movielist);
// 	//ES2015에 추가된 let키워드를 사용한 변수는 호이스트 되지 않는다
// 	// let movielist = null;
// 	// var 키워드로 정의된 변수는 호이스트되어 함수 영역의 최상단으로 끌어올려진다
// 	var movielist = ['영화 짱 좋으','좋음'];
// 	function inScopeFnc(){
// 		console.log('this is inScopeFnc');
// 	}
// }
// 	console.log('if 외부:', movielist);
//  };
// }
//  //함수 실행
//  //함수 실행시킨 컨텍스트 객체? === window 객체
//  scopeFnExpression(movielist); //window.scopeFnExpression() 과 같음
// console.log('함수 외부:', movielist);


//함수 정의
//매개변수 parameter
// function 함수이름(매개변수1, 매개변수2 ...){
// ...
// }

//함수 호출
//전달인자 argument
// 함수이름(전달인자1, 전달인자2, ...);

/*--------------------------------------
this
-----------------------------------------*/
//일반함수(글로벌 스코프에 정으된 함수)
function showMe(){
	console.log(this);
	return this;
}

showMe() === window;

//객체의 속성에 함수를 할당 (메소드가 됨)
var fds = {
	'callMe' : showMe
};

fds.callMe() === fds;

// scrict mode
// ES 5에 도입
// 자바스크립트 엄격 모드

function strictFn() {
	// 엄격 모드 발동
	// *ECMAScript 2015 버전부터는 기본 설정 값이 '엄격모드'
	'use strict';
	// 변수 선언시에 var 키워드를 강제화 한다 (오류 발생)
	var hi_message = 'Hello';
	// this 컨텍스트 참조 변수는 더 이상 window 전역 객체가 아닌 undefined 이다
	console.log(this, hi_message);
}

// 엄격모드가 아닌, 자바스크립트에서는 전역에서 함수를 호출할 경우, 그 함수의 컨텍스트를 암묵적으로 전역 객체인 window를 가리켰다. (문제 발생)
strictFn(); //this === undefined

// 반면 엄격 모드에서 명시적으로 특정 객체가 함수를 호출하게 되면 this 컨텍스트 참조 변수는 해당 객체를 참조한다.
window.strictFn(); //this === window 객체

document.onclick=strictFn; // this === window.document 객체

/*--------------------------------------
자바스크립트 함수는 일급 객체(first class object)
-----------------------------------------*/
// callback === cb
var fn =function(cb){
		//인자로 함수 데이터 유형이 전달되었다면 함수를 실행하다
	if (typeof cb === 'function'){
		// cb();
		window.setTimeout(cb, 2000);
	}else{
		throw new Error('전달인자는 함수 데이터 유형이어야 합니다');
	}
};

//자바스크립트 함수가 일급 객체인 이유!
//함수를 다른 함수의 인자로 전달할 수 있다
fn(function(){
	console.log('전달된 함수가 실행되었습니다.');
});