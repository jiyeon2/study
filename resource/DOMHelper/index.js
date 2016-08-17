/*dom helper functions .js*/

/*--------------------------------------
ECMA Script 2015 Syntax

var cleanWhiteSpace = (el=document) =>{}

ECMAScript 3rd Edition
공백 제거하는 함수
-----------------------------------------*/
function cleanWhiteSpace(el){
	el = el||document; //인자로 넣은 요소가 존재하면 el, 존재하지 않으면 document.
	var current_node = el.firstChild; 
	while(current_node){ //자식 요소가 존재하는동안 실행
		if (current_node.nodeType ===3 && !/\s/.test(current_node.nodeValue)){//
			removeNode(current_node);
		}else if(current_node.nodeType === 1){
			cleanWhiteSpace(current_node);
		}
		current_node=current_node.nextSibling;
	}
}

/*--------------------------------------
자바스크립트 모든 데이터유형을 올바르게 감지할 수 있는 헬퍼함수
-----------------------------------------*/
function isType(data){
	return Object.prototype.toString.call(data).slice(8,-1).toLowerCase();
}


//데이터 간 동등한지 유무 파악 헬퍼함수
function equal(data1, data2){
	return data1 == data2;
}

//데이터 간 완전하게 동등한지 유무 파악 헬퍼함수
function strictEqual(data1, data2){
	return data1 === data2;
}

function throwError(type1, type2, err_msg){
	err_msg = err_msg || '기본 오류 메시지';
	if(isType(type1) !== type2 ) {throw new Error(err_msg); }
}

function validData(data, type){
	throwError(type, 'string'); //오류 발생 시 멈추고 화면에 오류 메시지 출력
	return strictEauql( isType(data), type);
}

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
else{parent_node.appendChild(insert_node);}
}


/*--------------------------------------
.querySelectorAll() 메소드 단축하여 사용할 수 있는 헬퍼 함수
-----------------------------------------*/
function queryAll(selector_str, context){
	//사용자가 올바른 데이터를 전달하였는가? 검증
	if(typeof selector_str !== 'string'){ 
		//조건이 참이 되면 오류 발생
		throw new Error('첫번째 전달인자는 문자 유형이어야 합니다.'); //함수 실행 멈춤
	}
	//context 인자 값을 사용자가 전달하였는가?
	// 사용자가 context값을 전달하지 않았을 경우 undefined이다
	// if(typeof context === 'undefined'){
	if(!context){ context = document; }
	return context.querySelectorAll(selector_str);
}

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
// function $q(selector, hook, context){
// 	if(hook == 1){
// 		query(selector, context);
// 	} else{
// 	return queryAll(selector, context);
// 	}
// }

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
전달된 텍스트를  카멜케이스화 하여 변환하는 헬퍼 함수

camelCase('font-size') -> fontSize 반환
-----------------------------------------*/
// function camelCase(css_prop){
// 	return css_prop.replace(/-./g, function($1){
// 		return $1.replace('-','').toUpperCase(); //정규표현식
// 	});
// }
function camelCase(text){
	return text.replace(/(\s|-|_)./g, function($1){
		return $1.replace(/(\s|-|_)./g,'').toUpperCase();
	});
}

/*--------------------------------------
console.log(); 치기 귀찮아서 만든 함수
-----------------------------------------*/
function cl(content){
	console.log(content);
}

/*--------------------------------------
오류메시지 출력하는 헬퍼함수
-----------------------------------------*/
function errorMsg(message){
if(isType(message) !== 'string'){
	//함수 자신을 다시 호출: 재귀함수
	errorMsg('오류메시지는 문자 데이터 유형이어야 합니다');
}
throw new Error(message);
}

/*--------------------------------------
요소노드인지 아닌지 체크하여 참/거짓 반환
isElNode() 요소 전달시 true false로 반환
-----------------------------------------*/
function isElNode(node){
return node.nodeType === 1;
}
function isntElNode(node){
return !isElNode(node);
//return node.nodeType !==1;
}

/*--------------------------------------
요소노드 이름이 동일한지  체크하는 함수
-----------------------------------------*/
function isElName(node, name){
if(isntElNode(node)){errorMsg('첫번째 인자로요소 노드가 전달되어야 합니다')}
if(isType(name) !== 'string'){errorMsg('두번째 인자로요소 노드가 전달되어야 합니다')}
return (node.localName || node.nodeName.toLowerCase()) === name;
}

/*--------------------------------------
텍스트노드 유형인지 아닌지 체크하는 함수
-----------------------------------------*/
function isTextNode(node){
	return node.nodeType === 3;
}
function isntTextNode(node){
	//return !isTextNode(node);
	return node.nodeType !== 3;
}

/*--------------------------------------
이전 형제요소 노드 찾기
-----------------------------------------*/
function prevEl(node){
	//검증: 유효성검사
	if(isntElNode(node)){
		errorMsg('전달된 인자는 요소노드여야 합니다.');
	}
	// node.previousSibling; //요소노드, 텍스트노드, 주석노드 뭐가 존재하는지 모름
	if(node.previousElementSibling){// 구형 IE 9이상, 신형 웹 브라우저에서 사용
		return node.previousElementSibling;
	} else{ // 구형 IE 6~8에서 아래 코드 사용
			do{ node = node.previousSibling }
			while(node && !isElNode(node)); //앞의 코드를 반복한느데 그 조건은 1. node가 존재 2. node는 요소노드가 아닌경우.
			//만약 노드가 존재하지 않거나, 노드가 요소노드이면 반복문 종료하고 그 노드를 반환함
			return node;
	}
}

/*--------------------------------------
다음 형제요소 노드 찾기
-----------------------------------------*/
function nextEl(node){
	//검증: 유효성검사
	if(isntElNode(node)){
		errorMsg('전달된 인자는 요소노드여야 합니다.');
	}
//구형 IE 9+, 신형 웹 브라우저. 함수 실행할 때 마다 조건안의 코드 지원하는 신형브라우저냐고 물어보는거랑 같아서 좋은 코드는 아님
	if(node.nextElementSibling){
		return node.nextElementSibling;
	} 
//구형 IE 6,7,8 지원
	else{
	do{
		node = node.nextSibling;
	}while(node && !isElNode(node)); 
	return node;
	}
}



/*--------------------------------------
첫번째 자식요소 노드를 찾는 헬퍼 함수,
마지막 자식요소 노드를 찾는 헬퍼 함수
-----------------------------------------*/
//목적에 도달하는 쉬운 헬퍼함수
function _firstEl(node){
	return node.children[0];
}

function _lastEl(node){
	var children= node.children;
	return children[children.length -1];
}

function fistEl(node){
	if(isntElNode(node)){errorMsg('요소노드를 전달해야 합니다');}
	if(node.firstElementChild){
		return node.firstElementChild;
	}else{
		// IE 6-8
		// node 찾고자 하는 자식 노드의 부모이다
		// 제일 먼저 부모 노드인 node의 첫번째 자식노드를 찾는다.
		node = node.firstChild;
		//return;
		//만약 찾은 자식 노드의 요소가 노드가 아니라면 다음 형제 노드를 찾는다. 
		//  다음 형제 노드가 요소 노드라면 반환하고, 아니라면 다음 다시 형제 노드를 요소노드인지 확인한다
		//console.log( node&&isntElNode(node) ? nextEl():node);
		return (node && isntElNode(node)) ? nextEl(node) : node;
	}
	// 함수는 명시적으로 어떤 값도 반환하지 않을 경우 undefined 반환
	// return undefiled;	
}

function lastEl(node){
	if (isntElNode(node)){errorMsg('요소노드를 전달해야 합니다');}
	if (node.lastElementChild){
		return node.lastElementchild;
	}else{
		node = node.lastChild;
		return (node && isntElNode(node)) ? prevEl(node):node;
	}
}

/*--------------------------------------
단위 제거/가져오기/소유하고 있는지 확인
-----------------------------------------*/
function getUnit(value){
	var i=0, l = getUnit.units.length, unit;
	var reg;
	for (; i<1; i++){
		unit = getUnit.units[i];
		if (value.indexOf(unit)> -1){
			//break;
			return unit;
		}
	}
	return null;
}

//함수 getUnit의 속성인 units에 배열 저장
getUnit.units = 'px rem em % vw vh vmin vmax'.split(' '); // 문자열을 배열로

function removeUnit(value){
	removeUnit.unit = getUnit(value);
	return parseFloat(value, 10);
}
removeUnit.unit = null;

function hasUnit(value){
	return !!getUnit(value);
}