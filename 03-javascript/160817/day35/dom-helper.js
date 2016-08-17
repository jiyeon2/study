// 모던 자바스크립트 모듈 패턴
//클라이어느 환경
//프론트엔드 개발환경에서 사용됨


(function(global){
	'use strict';
/*dom helper functions .js*/

var yamoo9;

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

function isType(data){
	return Object.prototype.toString.call(data).slice(8,-1).toLowerCase();
}


function equal(data1, data2){
	return data1 == data2;
}

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

function prependChild(parent, child){
	parent.insertBefore(child, parent.firstChild);
}

function insertAfter(target_node, insert_node){
var next_node = target_node.nextSibling;
var parent_node = target_node.parentNode;
if( next_node ){
	next_node.parentNode.insertBefore(insert_node,next_node);
}
else{parent_node.appendChild(insert_node);}
}


function queryAll(selector_str, context){
	if(typeof selector_str !== 'string'){ 
		throw new Error('첫번째 전달인자는 문자 유형이어야 합니다.'); 
	}
	if(!context){ context = document; }
	return context.querySelectorAll(selector_str);
}

function query(selector, parent){
	return queryAll(selector, parent)[0];
}

function $q(selector, hook, context){
	var method;
	if(hook){
		method = 'query';
	} else{
		method = 'queryAll';
	}
	return window[method](selector, context);
}

function queryItem(selector, idx, context){
	if (!idx){ idx = 0;}
	return queryAll(selector, context)[idx];
}


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

function removeNode(node){
	node.parentNode.removeChild(node);
}

function createNode(element_name, text){
	var element_node = document.createElement(element_name);
	if (typeof text !== 'undefined' && typeof text ==='string'){
	var text_node = document.createTextNode(text);
	element_node.appendChild(text_node);
	}
	return element_node;
}

function getStyle(el, property, pseudo){
	var value, el_style;
	if (el.nodeType !== 1) {
		console.error('첫번째 인자 el은 요소노드여야 합니다.');
	}
	if ( typeof property !== 'string'){
		console.error('두번째 인자 property는 문자열이어야 합니다.');
	}
	if (pseudo && typeof pseudo !== 'string'){ // pseudo값이 존재하는데 그 값이 string이 아니면
		console.error('세번째 인자 pseudo는 문자열이어야 합니다.');
	}

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

function setStyle(elNode, property, value){
	if(isntElNode(elNode)){
		errorMsg('요소노드가 전달되어야 합니다');
	}
	if (isType(property) !== 'string'){
		errorMsg('두 번째 전달인자는 문자열이어야 합니다.');
	}
	elNode.style[property]=value;
}

function css(elNode, prop, value){
	if(!value){
		return getStyle(elNode, prop);
	} else{
		setStyle(elNode,prop,value);
	}
}


function camelCase(text){
	return text.replace(/(\s|-|_)./g, function($1){
		return $1.replace(/(\s|-|_)./g,'').toUpperCase();
	});
}


function cl(content){
	console.log(content);
}

function errorMsg(message){
if(isType(message) !== 'string'){
	errorMsg('오류메시지는 문자 데이터 유형이어야 합니다');
}
throw new Error(message);
}

function isElNode(node){
return node.nodeType === 1;
}
function isntElNode(node){
return !isElNode(node);
//return node.nodeType !==1;
}

function isElName(node, name){
if(isntElNode(node)){errorMsg('첫번째 인자로요소 노드가 전달되어야 합니다')}
if(isType(name) !== 'string'){errorMsg('두번째 인자로요소 노드가 전달되어야 합니다')}
return (node.localName || node.nodeName.toLowerCase()) === name;
}

function isTextNode(node){
	return node.nodeType === 3;
}
function isntTextNode(node){
	//return !isTextNode(node);
	return node.nodeType !== 3;
}

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

//외부에 공개하는 API
//함수를 개별 반환(위험)
// global.type = isType;
// global.getCSS = getStyle;


//네임스페이스 패턴
//네임스페이스 '객체'를 생성하여 외부에 공개한다
// global.yamoo9 = {
// 	'type':isType,
// 	'ElNode':isElNode,
// 	'ElName':isElName,
// 	'css': css,
// }

})(window.yamoo9||{}); //this === window object