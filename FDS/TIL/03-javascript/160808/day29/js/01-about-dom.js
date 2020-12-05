/* about-dom*/

// DOM
// [선택]현재 선택한 대상 el
// [탐색] 부모노드 el.parentNode
// - id 속성으로 대상(요소노드)를 선택 document.getElementById('id_name')
// - 요소 이름으로 대상(요소노드)를 선택 document.getElementsByTagName('tag_name')
// - class 속성으로 대상 선택
// - 기타 

// [탐색] 첫번째 자식노드 el.firstChild
// [탐색] 마지막 자식노드 el.lastChild
// [탐색] 이전 형제노드 el.previousSibling
// [탐색] 다음 형제노드 el.nextSibling
// [탐색] 자식 노드들 el.childNodes

var parent_el = document.getElementById('parent');
var parent_el_child_nodes = parent_el.childNodes;

console.log(parent_el_child_nodes);
console.log('수집된 parent_el의 자식 노드의 개수:', parent_el_child_nodes.length);

//콘솔 패널 화면에 각 수집된 parent_el_child_nodes의 노드 유형을 출력해보세요
var first_node = parent_el_child_nodes.item(0);
//.item($) 보다 대괄호 접근법이 간단하므로 많이 쓰인다
console.log(0, parent_el_child_nodes.item(0).nodeType);
console.log(1, parent_el_child_nodes[1].nodeType);
console.log(2, parent_el_child_nodes.item(2).nodeType);
console.log(3, parent_el_child_nodes.item(3).nodeType);
console.log(4, parent_el_child_nodes.item(4).nodeType);
console.log(5, parent_el_child_nodes.item(5).nodeType);
console.log(6, parent_el_child_nodes.item(6).nodeType);
console.log(7, parent_el_child_nodes.item(7).nodeType);
console.log(8, parent_el_child_nodes.item(8).nodeType);

//자바스크립트 반복구문 미리보기
// while, do ~ while, for, for ~ in, for ~ of, forEach

//자바스크립트 조건구문 미리보기
// if~ else if ~ else, switch case dafault break, 3항식
for(var i=0; i<9; i=i+1){
	// console.log('i:',i);
	// console.log(i, parent_el_child_nodes.item(i).nodeType);

	// parent_el_child_nodes.item(i).nodeType이 반환하는 값
	// 1: ELEMENT_NODE
	var info= "background: #aaa; color: #fff";
	//chrome개발자 도구에서 콘솔로그에 스타일 입히기 가능 %c 사용, 현재 크롬에서만 가능 facebook홈페이지
	if(parent_el_child_nodes[i].nodeType === 1){
		console.log('%c node is ELEMENT_NODE', 'background: #222; color: #bada55');
		parent_el_first_child_el = parent_el_child_nodes[i];
		break;
		//nodeType이 1인 자식노드를 찾아서 parent_el_first_child_el 변수에 넣는다. break문 넣지 않으면 마지막 요소가 담기므로 break 넣는다. var로 선언하지 않았지만 뒤쪽에 선언했으므로 괜찮음 - 호이스팅
	}
	// 3: TEXT_NODE
	else{
		console.log('%c node is TEXT_NODE', info);
	}
}

/*---------------------------------------
#parent .child:first-child 요소의 자식노드들 순환하여 노드 유형 로그하기
-------------------------------------------*/
var parent_el_first_child_el;
// console.log(parent_el_first_child_el);
// var test_list= parent_el_first_child_el.childNodes;
var text_list= parent_el_first_child_el.children; //요소노드만 가져옴. 크로스브라우징 문제 없음! 사용 권장
var text_list_len=text_list.length;
//i변수는 위에서 사용한 전역변수로, 여기서 재사용했기 때문에 var안붙여도 됨, for문 끝나도 살아있다

for (i=0; i<text_list_len; i++){
var node_type = text_list[i].nodeType;
if(node_type === 1){
	console.log('%c current node is ELEMENT_NODE', 'color:#7845cf');
}else if(node_type === 3){
	console.log('current node is TEXT_NODE');
} if(node_type === 8){
	console.log('current node is  COMMENT_NODE');
}
}

// $0, 콘솔 패널에서만 사용 가능. 사용자가 선택한 요소 가리킴
// $0.children[0] 자식노드 중 첫번째요소노드
// $0.children[$0.children.length-1] 자식노드 중 마지막 요소 노드

/*----------------------------------
//노드 (node) 의 유형/ 이름/ 값을 출력하는 방법
--------------------------------------*/
// 1. nodeType
// 	ELEMENT_NODE = 1
// 	TEXT_NODE = 2
// 	TEXT_NODE = 3
// 	COMMENT_NODE = 8
// 2. nodeName
// 	ELEMENT_NODE의 경우는 요소 이름을 대문자로 반환
// TEXT_NODE 의 경우는 '#text' 반환
// nodeName.toLowerCase();하면 소문자로 반환함
// 3. nodeValue
// 	TEXT_NODE의 경우만 접근이 가능
// 	ELEMENT_NODE의 경우는 null반환

/*--------------------------------------------------
DOM API |IE9이상 지원함
Traversal properties
.firstChild -> .firstElementChild
.lastChild -> .lastElementChild
.previousSibling -> .previeousElementSibling
.nextSibling-> .nextElementSibling
.parentNode -> .parentElement

-----------------------------------------------------------*/

// node information
// HTML DOM 방식의 속성 접근 방법
// 웹의 초창기부터 존재하던 속성들
// id, className, title...
console.log('parent_el 요소노드의 id속성: ', parent_el.id); //'parent'
console.log('parent_el 요소노드의 class속성: ', parent_el.className); //''
console.log('parent_el 요소노드의 title속성: ', parent_el.title); //''
// title: gui디자인시 사용자가 정보를 알기 쉽게 하도록 툴팁에 뜨는 내용
// title은 모바일에서 사용할 수 없음. 마우스 사용 안하므로

// 새롭게 등장한 속성들은 어떻게 접근할까?
// data-*, aria-*, role, ...
// console.log('parent_el.role: ', parent_el.role);
console.log('parent_el.role: ', parent_el.getAttribute('role'));
// console.log('parent_el.data-contaier: ', parent_el.data-contaier);
// console.log('parent_el.data-contaier: ', parent_el.[data-contaier]);
console.log('parent_el.data-contaier: ', parent_el.getAttribute('data-contaier'));
// console.log('parent_el.aria-hidden: ', parent_el.aria-hidden);
// console.log('parent_el.aria-hidden: ', parent_el.[aria-hidden]);
console.log('parent_el.aria-hidden: ', parent_el.getAttribute('aria-hidden'));
console.log('parent_el.class: ', parent_el.getAttribute('class'));


/*----------------------------------------------
#parent 내부 요소 중 자식 없는 요소를 모두 콘솔에 기록하라
!!주의!! hasChildNodes()는 빈 공백 또한 자식노드로 읽기때문에 공백이 없을 때만 사용 가능하다.
공백 없애는 처리를 먼저 하고 사용하면 가능함
  ----------------------------------------------*/
// parent 내부 요소 중 자식 없는 요소를 모두 콘솔에 기록하라
// 자식노드가 없는 요소 찾아서 출력하라

var parent= document.getElementById('parent');
// console.log(parent);
var parent_childs = parent.getElementsByTagName('div'); //#parent 내부에 div요소 자식들
// console.log(parent_childs);

for(var child, i =0, l=parent_childs.length; i<l; i=i+1){
	child=parent_childs[i];
	if (!child.hasChildNodes() ){
		console.log(child);
	}
}

// var child = parent_el.children;
// for(var i=0; i<children.length; i++){
// 	var grandchild=children[i].children;
// 	for(var j=0; j<grandchild.length; j++){
// 		if (grandchild[j].hasChildNodes() === false){
// 				console.log(grandchild[j]);
// 		}
// 	}
// }

/*--------------------------------------
클래스 속성 값으로 문서 객체 대상 선택하기
getelementbyclassname- IE 9이상 지원됨
classname말고 querySelector쓰면됨(8이상 지원)
  --------------------------------------*/ 
  // document.links;//와 같은 HTML collection과 NodeList(배열 아님, 유사배열임-배열처럼 보이지만 배열은 아닌것-)는 다름
  // var commandList = ['goto','stop','show','hide'];
  // commandList.legnth
  // commandList.shift() 배열이라면 쓸 수 있어야하는 메소드
  // childs.shift() 는 안됨. 유사배열이라는 증거
  var childs = document.getElementsByClassName('child'); //NodeList
  console.log(childs, childs.length);

  var container = document.getElementsByClassName('container'); 
  console.log(container, container.length);

  /*-----------------------------------
  css 선택자를 통해 문서 객체를 선택하는 방법
  IE 8이상 지원
  jquery보다 빠름!!
  .querySelector('#id .class');
  .querySelectorAll('#id .class');
  .querySelector() === .querySelectorAll()[0]
    -----------------------------------*/