//문서에서 선택한 요소노드(객체) 참조
var page_header = query('.page-header');
var increase_btn = query('.btn-increase-text');
var decrease_btn = query('.btn-decrease-text');
var set_default_btn = query('.btn-set-default'); //폰트사이즈 초기화하기 위한 버튼
var show_font = document.getElementsByTagName('span')[0];
var user_input = query('input'); //인풋창
var change_text = 1; //폰트사이즈 증감 크기 담고있는 변수
var limit_up = 72; //최대 폰트사이즈
var limit_down = 12; //최소 폰트사이즈

var textarea = document.getElementsByTagName('textarea')[0];

// 검증
console.log('page_header : ',page_header);
console.log('increase_btn : ',increase_btn);
console.log('decrease_btn : ',decrease_btn);
console.log('set_default_btn : ',set_default_btn);

//글자 크기 변경 함수
function changeTextSize(){
	// console.log('context: ',this.firstChild.nodeValue); //클릭한 버튼 식별하기 위해 버튼의 텍스트노드 값 확인
	var operator = this.firstChild.nodeValue; // 버튼의 텍스트노드로 연산자(+,-) 파악
	var show_font = query('span');// font-size보여줄 span태그 찾음
	var _change_text = change_text; // changeTetSize()함수 내에서 사용하는 지역변수.
	// 전역변수인 change_text 값에 영향 끼치지 않도록 지역변수 따로 설정하고, 전역변수의 값을 복사하여 저장해 둠
	var _current_text;
		// page_header의 글자 크기를 키운다
		// 글자 크기를 연산이 가능하도록 변경
	var current_size = parseInt( getStyle(page_header, 'font-size') ); // getStyle() 함수는 inline style말고 css computedstyle 가져오기 위한 함수
	// var current_size = parseInt(page_header.style.fontSize)
	var changed_font; // 증감된 폰트값을 문자열로 저장

	if ( operator === '+'){
		_current_text= current_size + change_text;
	}else if( operator === '-'){
		_current_text = current_size - change_text;
	}else{
		show_font.innerHTML = page_header.style.fontSize = getStyle(document.documentElement,'font-size');
		return;
	}

	//글자 크기를 변경(키움) 하여 해당 요소에 설정
	if (_current_text > limit_up|| _current_text < limit_down){
		_current_text = current_size; 
	}
 var changed_font = _current_text + 'px';
	page_header.style.fontSize = changed_font;
	show_font.innerHTML = changed_font;
	//console.log(page_header.style.fontSize);
}
//changeTextSize() 함수 선언 끝! 


//page_header 요소 객체의 글자 크기 초기화
//page_header.style.fontSize = '16px';
// 이 방법은 인라인 속성 붙이는거고, css에 설정된 값 가져오기 위해 line28에 getStyle() 사용


//버튼에 이벤트 핸들링(핸들러 바인딩)
increase_btn.onclick = changeTextSize;
decrease_btn.onclick = changeTextSize;
set_default_btn.onclick = changeTextSize;

//input 값 바뀌면 input의 값을 폰트사이즈로 적용
user_input.onchange = function(){
	var input_value = user_input.value; 
	page_header.style.fontSize= input_value+'px';
}


// textarea.style.fontSize = '16px';
// textarea.style.width = '100%';
// textarea.style.height = '300px';
// textarea.setAttribute('placeholder','글자를 입력하세요');



/*--------------------------------------
아래의 중복되는 부분을 글자크기 변경 함수로 만듦
-----------------------------------------*/
// // 버튼에 이벤트 핸들링(핸들러(는 함수) - 바인딩(은 연결 의미))
// increase_btn.onclick=function(){
// //page_header 의 글자 크기를 키운다
// //글자 크기를 연산 가능하도록 변경
// var current_size = parseInt(page_header.style.fontSize, 10);
// //글자 크기를 변경(키움)하여 해당 요소에 설정한다
// if(current_size<50){
// page_header.style.fontSize = current_size + change_text + 'px';
// } else{this.setAttribute('disabled','true'); console.log('글자 크기를 더 키울 수 없습니다');}
// console.log(page_header.style.fontSize);
// };

// decrease_btn.onclick=function(){
// 	//page_header 의 글자 크기를 줄인다
// var current_size = parseInt(page_header.style.fontSize, 10);
// page_header.style.fontSize = current_size + change_text + 'px'; // 증감값을 변수로 만드려고 +(-5)라고 쓴것.

// };


/*--------------------------------------
웹 브라우저에서 계산된 css 스타일 값 가져오기
인라인 속성 없을 때 css에서 값 가져오기
-------------------------------------------
비표준 MS IE방식 (IE 8 이하 지원)
대상.currentStyle.스타일속성
================================
표준 W3C방식 (IE+9 지원)
window.getComputedStyle(대상, 가상요소).스타일속성
---------------------------------
computed 계산된 값
window.getComputedStyle($0,null).fontSize
가상요소는 부정이나 빈 문자열도 가능. 가상요소 값 넣으면  해당 요소의 가상요소:before, :after에 접근
-----------------------------------------*/
// function getStyle(el,property, pseudo){
// 	var value;
// 	//반드시 문자열 입력받아야하는 property 유효성검사
// 	if (el.nodeType !== 1){
// 		console.error('첫번째 인자 el은 요소노드여야합니다.');
// 	}
// 	if( typeof property !== 'string'){
// 		console.error('두번째 인자 property는 문자열이어야 합니다');
// 	}
// 	if (typeof pseudo !== 'string' && pseudo){
// 		console.error('세번째 인자 pseudo는 문자열이어야 합니다');
// 	}
// 	//css속성 이름이 카멜케이스화
// 	property = camelCase(property);

// 	if(window.getComputedStyle){ // 매번 함수 실행할때마다 작동하므로 좋지 않음. 다음단계에서 공부한 후 개선할 것!
// 		el_style = window.getComputedStyle(el, pseudo);
// 		value = window.getComputedStyle(el,pseudo)[property]; // []사용해서 접근하는 건 어떤값이 올지 모르므로. null대신 ''쓰는건 짧아서
// 	}else{
// 		value = el.currentStyle[property];
// 	}
// 	return value;
// }

/*--------------------------------------
대괄호 접근법 사용하는 이유

var man = { 'age': 43, 'live': false};
man.age = 43
man.live = false

man.property 이런건 없음

var property;
property = 'age';
man.property = undefined
man[property] = 43

man.age 변수명을 알 때
man['age'] 도 가능
man[ 여기에 변수 쓸 수 있다  ]
-----------------------------------------*/

//css 속성 입력 방식 -> camelCase표기 방식으로 변환, 크롬은 font-size해도 되지만 지원안되는 브라우저에서도 사용할 수 있게
// function camelCase(css_prop){

// return css_prop.replace(/-./g, function($1){
// 	return $1.replace('-','').toUpperCase();
// 	});
// }
//정규표현식 사용한것
/*--------------------------------------
//'font-size' ->fontSize
.replace('','')


'nice-to-meet-you'.replace(/-./g,function($1){console.log($1.replace('-','')); return $1.replace('-','').toUpperCase() });

-----------------------------------------*/