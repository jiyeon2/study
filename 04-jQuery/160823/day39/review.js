/*--------------------------------------
HTML5문서에서 <h1>은 여러 번 사용 가능한가?
===========================================
-THML5 문서부터는 <h1>요소를 기존처럼 사용할 수 있고
sectioning content element 내부에서는 다수 사용 가능하다
-reference
-----------------------------------------*/

/*--------------------------------------
this 컨텍스트 참조 변수
========================================
-자바스크립트 언어는 영역(scope)을 가진다
-영역으로 구분되는 공간은 크게 전역(global scope)과 지역(local scope)이 있다
-if, while, do~ while, for문 같은 블록문(`{}`)내부는 영역이 아님 - 자바스크립트에서는!
-함수 데이터 유형의 블록문(`{}`) 내부에서는 공간이 형성된다

- this -> 전역 콘텍스트 객체를 가리킴
-----------------------------------------*/
console.log('전역에서 실행한 this : ', this); // 결과: window object

if(true){
	console.log('if 블록문에서 실행한 this : ',this); // 결과: window object
}

function myFn(){
	console.log('myFn 함수 내부에서 실행한 this : ',this);
}

myFn(); // 결과: window object,
//myFn()0 === window.myFn();
//myFn()실행시킨 컨텍스트 객체가 암묵적으로 window객체로 설정되기 때문

function meFn(){
	'use strict';
	console.log(this);
}
meFn(); // 결과: undefined
//이유: 엄격모드에서는 기존 설계오류를 해결하기 위해 더 이상 암묵적으로 전역 콘텍스트 객체인 window에서 실행한 것처럼 처리하지 않기 때문

window.meFn(); //this.meFn(); // 결과: window object
//엄격모드에서 실행시 명시적으로 실행 콘텍스트 

var section_demo = document.querySelector('.demo1');