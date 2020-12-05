// .demo-navitagion 선택
// 내부에서 a요소를 모두 수집
// 수집된 a 요소를 사용자가 클릭하면
// 클릭된 a 요소의 수집될 당시의 인덱스 넘버를 콘솔에 기록

//---------------------------------
var demo_nav = query('.demo-navigation');
var anchors = demo_nav.getElementsByTagName('a');
// for (var i = 0, l = lis.length -1; i<l;i++){
// 	lis[i].onclick = function(){ // 이 함수 내부의 i는 함수가 실행되기 전엔 존재하지 않음
// 		console.log(i); // 함수 실행할 때의 i는 반복문 끝나고 난 i
	// 이용자가 클릭했을 때 함수가 실행되면서 i 가 생김
// 	}
// }
//---------------------------------

var demo_nav = query('.demo-navigation');
var demo_nav_links = queryAll('a',demo_nav);
var i=0, l=demo_nav_links.length;


// 클로저 함수를 반환하는 래퍼 함수를 만드는 것은 비용이 많이 듦
// function showMeIndexWrapper(index){
// 	function showMeIndex(){ // showMeIndex는 선언만 되고 실행되지 않음
// 		//index????
// 	console.log('my index number is ', index); // index값은 for문이 돌 때 ㅅ실행된 showmeindexwrapper에 들어간 인자 i를 기억하고 있다.
// 	}
// 	return showMeIndex; //showMeIndex 반환
// }

// 비용을 절감하는 형태로 클로저 함수를 만드는 방법
// 모던 자바스크립트 패턴 중 이 패턴이 가장 많이 사용되는 패턴
// IIFE 패턴 (즉시 실행되는 함수)
// 일반적인 함수 호출과정과 달리 이름없는 함수를 즉시 호출함
// +function(){}();
// ~function(){}();
// !function(){}();// 이런방식 비권장
// (function(){}()); //가장권장
// (function(
// 	//외부와 단절된 독립된 공간 설정// 캡슐화
// 	){}());
//(function(){})();xcd

for(;i<l; i++){
	//클로저 사용 예시
	demo_nav_links[i].onclick = (function(index){
		//var index = i; 선언한것과 같음
		return function(){
			console.log(index); 
		}
	}(i));
	// demo_nav_links[i].onclick = showMeIndexWrapper(i); // return 값은 함수 showMeIndex임
	// showMeIndexWrapper(i)는 인자i를 받아 즉시 실행되고
	// 이용자가 클릭시 실행되는 건 showMeIndex
}