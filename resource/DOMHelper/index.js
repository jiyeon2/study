/*dom helper functions .js*/

/*-----------------------------------------------
prependChild(부모노드, 자식노드)
부모노드의  첫번째 자식노드로 삽입한다

@작성자 이지연
@버전 0.0.1
@param {ELEMENT_NODE}  parent_node 부모노드
@param {ELEMENT_NODE}  child_node 자식노드
@return {undefined}
---------------------------------------------------*/
function prependChild(parent, child){
	parent.insertBefore(child, parent.firstChild);
}

/*----------------------------------------------------
insertAfter(목표노드, 삽입노드)
목표노드 뒤에 삽입노드를 추가한다.

@작성자 이지연
@버전 0.0.1
@param {ELEMENT_NODE}  target_node 목표노드
@param {ELEMENT_NODE}  insert_node  삽입노드
@return {undefined}
--------------------------------------------------------*/
function insertAfter(target_node, insert_node){
var next_node = target_node.nextSibling;
var parent_node = target_node.parentNode;
if( next_node ){
	next_node.parentNode.insertBefore(insert_node,next_node);
}
else{
parent_node.appendChild(insert_node);
}
}

/*--------------------------------------
query, queryAll 함수

-----------------------------------------*/

//문자열인지 아닌지 확인하는 유효성검사 필요
// 	if (typeof selector !== 'string'){throw new Error('전달인자는 문자열만 가능'); }//에러 던지면 함수 멈춤, native js구문이라 예전 브라우저에서도 가능, 코드 멈추면 안되는 경우 제외하곤 이거 사용 권장
// 	// if (typeof selector !== 'string'){console.error('오류'); }//오류발생하지만 코드는 실행됨, 신형 브라우저에서만 가능


/*--------------------------------------
.querySelectorAll() 메소드 단축하여 사용할 수 있는 헬퍼 함수
@return {undefined}
-----------------------------------------*/
function queryAll(selector_str, context){
	//사용자가 올바른 데이터를 전달하였는가? 검증
	if(typeof selector_str !== 'string'){ 
		//조건이 참이 되면 오류 발생
		throw new Error('첫번째 전달인자는 문자 유형이어야 합니다.');
	}
	//context 인자 값을 사용자가 전달하였는가?
	// 사용자가 context값을 전달하지 않았을 경우 undefined이다
	if(!context){
		context = document;
	}
	return context.querySelectorAll(selector_str);
}
// typeof null, typeof [] : typeof 오류
// 변수 전달시 '' 필요없음, 문자열 전달시 ''로 감싼다

function query(selector, parent){
	return queryAll(selector, parent)[0];
}

/*--------------------------------------
//query와 queryAll를 하나로 묶은 함수
-----------------------------------------*/
//
/*----------------------------------------------------
$q(선택자, 조건, 컨텍스트)
컨텍스트 내에 존재하는 해당 선택자를 골라낸다

@작성자 이지연
@버전 0.0.1
@param {string} 			 selector 목표 선택자
@param {number}   		 hook 조건
@param {ELEMENT_NODE}  context 목표 선택자가 존재하는 부모노드
@return {undefined}		 hook == 1 인 경우 
--------------------------------------------------------*/
function $q(selector, hook, context){
	if(hook == 1){
		query(selector, context);
	} else{
	return queryAll(selector, context);
	}
}

// return 하나만 쓰는 경우
function $q(selector, hook, context){
	var method;
	if(hook){
		method = 'query';
	} else{
		method = 'queryAll';
	}
	return window[method](selector, context);
}

/*--------------------------------------
querySelectorAll에서 인덱스값으로 특정 요소 바로 가져오기
-----------------------------------------*/
function queryItem(selector, idx, context){
	if (!idx){ idx = 0;}
	return queryAll(selector, context)[idx];
}

/*--------------------------------------
getElementById, getElementsByClassName, getElementByTagName 대신 
쓸 수있는 함수

@type{string} 'id', 'class' ,'tag' 선택
@name{string} 아이디이름, 클래스이름, 태그이름
@[context]{ELEMENT_NODE} 
@return ELEMNT_NODE

IE8이상에서 사용 가능한 .querySelector를 이용하는 게 편하다!
-----------------------------------------*/

function findNode(type, name, context){
	if(!context){context=document;}
	switch(type){
		case 'id' :
			return context.getElementById(name);
			break;
		case 'class' :
			return context.getElementsByClassName(name);
			break;
		case 'tag':
			return context.getElementsByTagName(name);
			break;
	}
}

/*--------------------------------------
문서객체(노드) 제거하는 헬퍼함수
-----------------------------------------*/
function removeNode(node){
	node.parentNode.removeChild(node);
}

/*--------------------------------------
createElement(), createTextNode()
2가지 일을 동시에 수행하는 헬퍼함수
요소노드를 생성한 후 내부에 텍스트노드를 자식노드로 삽입
-----------------------------------------*/
function createNode(element_name, text){
	var element_node = document.createElement(element_name);
	if (typeof text !== 'undefined' && typeof text ==='string'){
	var text_node = document.createTextNode(text);
	//인자값과 변수값 같으면 좋지 않음 , js 호이스팅으로인해 변수가 위로 올라가서 인자값에 들어가는 것 방지
	element_node.appendChild(text_node);
	}
	return element_node;
}

// 요소에 클래스 붙이기
// function addClass(element_node, class_name){
// element_node.setAttribute('class', class_name);
// }

/*------------------------------------------------
웹브라우저에서 계산된 CSS 스타일 값 가져오는 방법
--------------------------------------------------
* 비표준 MS IE 방식 (IE 8 이하)
	 대상.currentStyle.스타일속성
--------------------------------------------------
* 표준 W3C 방식 (IE 9 이상 지원)
	window.getComputedStyle(대상,가상요소).스타일속성
--------------------------------------------------*/
function getStyle(el, property, pseudo){
	var value, el_style;
	//유효성검사 - 내가 만든 함수는 어떤 인자 넣어야하는지 알지만 다른사람은 모르므로 잘못된 인자 전달시 오류 발생시켜 알려줘야한다.
	if (el.nodeType !== 1) {
		console.error('첫번째 인자 el은 요소노드여야 합니다.');
	}
	if ( typeof property !== 'string'){
		console.error('두번째 인자 property는 문자열이어야 합니다.');
	}
	if (pseudo && typeof pseudo !== 'string'){ // pseudo값이 존재하는데 그 값이 string이 아니면
		console.error('세번째 인자 pseudo는 문자열이어야 합니다.');
	}
	//유효성 검사 끝!

 //css 속성 이름 카멜케이스 화
 //크롬의 경우 현재 font-size 이렇게 써도 fontSize와 같은 결과 알려주는데, 어떤 브라우저는 이렇지 않을 수도 있으므로 크로스 브라우징 위해서 함

 property = camelCase(property); //전달인자로 받은 property 값을 camelCase함수에 전달하여 반환된 결과값을 property에 저장

 if (window.getComputedStyle){ //getComputedStyle 지원되는 브라우저는 아래 함수 실행
 	el_style = window.getComputedStyle(el,pseudo);
 	if(pseudo && el_style.content === ''){ //가상요소 판별하여 가상요소의 경우 
 		return null;
 	}
 	value = el_style[property];
 }else{//getComputedStyle 지원하지 않는 비표준 브라우저에서는 아래 함수 실행
 	value = el.currentStyle[property];
 }
 return value;
}

/*--------------------------------------
css서 사용하는 '-'(하이픈) 붙은 속성명을 
camelCase형식으로 변경하는 함수

camelCase('font-size') -> fontSize 반환
-----------------------------------------*/
function camelCase(css_prop){
	return css_prop.replace(/-./g, function($1){
		return $1.replace('-','').toUpperCase();
	});
}

/*--------------------------------------
console.log(); 치기 귀찮아서 만든 함수
-----------------------------------------*/
function cl(content){
	console.log(content);
}