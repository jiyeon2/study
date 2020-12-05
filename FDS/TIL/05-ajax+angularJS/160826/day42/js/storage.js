(function(global, storage, $){
	'use strict';

//루트요소인 <html>을 참조하는 jQuery 객체 생성
var $html = $('html');
	 
	 //사용자의 웹 브라우저가 localStrage를 지원하는가?
	 //모더나이저 써도 됨
	 if(storage){
$html.addClass('localstorage');
	 }else{
$html.addClass('no-localstorage');
	 }

// 로컬 스토리지 지원이 안된다면 사용자에게 웹브라우저 업데이트 권고 - 보안,
if($html.hasClass('no-localstrage')){
	console.log('로컬스토리지 지원되는 최신 브라우저로 업데이트 하세요');
	return; //함수종료
}

//사용자의 웹 브라우저에 데이터를 저장/가져오기/지우기 등을 수행할 수 있다

//데이터 가져오기
var FDS = storage.getItem('FDS');
FDS ? console.log('FDS 값: ', FDS ) : console.log('FDS없음');

//데이터 저장하기
//FDS 값이 거짓이라면, 즉 FDS값이 없다면 if{}문 실행
if(!FDS){
storage.setItem('FDS','Front-end Development school. FAST Campus');
}

//데이터 1개 지우기
if(FDS){
	storage.removeItem('FDS');
}

//데이터 모두 지우기
//키 데이터가 1개이상 있다면 모든 데이터를 제거하라
storage.length > 0 && storage.clear();

// javascript object -> JSON text -> javascript object
// model data [me]
var susu = {
	'name' : '수진',
	'job': '개발자',
	'age': 23,
	'gender': '여성',
	'email': 'susu@susu.net',
	'favorites': ['고구마라떼', '고구마케이크','슈크림빵']
};

//로컬스토리지에 susu저장
//객체는 바로 localstorage 저장 안됨 값이 [object Object라고 뜸]. 텍스트로 바꿔야함 
//객체 -> 문자로 변환
var str_susu = JSON.stringify(susu);
storage.setItem('susu', str_susu);

//전역에 공개
global.susu = susu; 


//문자 -> 객체
var getted_susu = storage.getItem('susu');
getted_susu = JSON.parse(getted_susu); //object
console.log(getted_susu);


})(this,this.localStorage ,this.jQuery);

