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
@[context]{ELEMENT_NODE} 이건 잘 모르겠음 값을 넣으니 안됨...
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