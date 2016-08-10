var menu_btn = query('.menu_btn');
var items;
var item_group;

function showMenu(){ //메뉴 나타나게 하는 함수
	var ul = createNode('ul'); // ul 생성
	ul.setAttribute('class','menu'); //ul에 menu클래스 붙인다

	var li = [createNode('li','HOME'), createNode('li','SERVICE'), createNode('li','ABOUT'), createNode('li','PRODUCT'), createNode('li','CONTACT')]; // ul 안에 들어갈 li 생성
	for (var i=4; i >= 0; i--){
		li[i].setAttribute('class', 'menu-item'); //li에 'menu-item'클래스를 붙인다
		ul.appendChild(li[i]); //ul안에 li를 넣는다
	} 
	query('li').onclick = closeMenu;

	//닫기버튼 생성 
	var close_btn = createNode('button','x');
	close_btn.setAttribute('class','close');
	close_btn.onclick = closeMenu; //생성될 때 버튼에 이벤트 연결
	ul.appendChild(close_btn);

	prependChild(document.body, ul); // body 맨 앞에 ul을 붙인다
	this.setAttribute('disabled','true'); //버튼에 disabled 속성을 true로
}
 t.insertBefore(m, t.lastChild)

menu_btn.onclick = showMenu;


function closeMenu(){//메뉴 사라지게 하는 함수
	var menuWindow= query('.menu');
	menuWindow.parentNode.removeChild(menuWindow);
	menu_btn.removeAttribute('disabled');
}

/*--------------------------------------
Uncaught TypeError: Cannot set property 'onclick' of undefined
에러 -> 스크립트 해석 당시 .onclick 속성 붙일 부모 노드 존재하지 않는 경우이다.
html문서가 다 로딩된 후 실행될 코드는
window.onload= function(){ 여기 } 에 쓴다
-----------------------------------------*/

function changeBg(color){
	query('.menu').style.background = 'color';
}

