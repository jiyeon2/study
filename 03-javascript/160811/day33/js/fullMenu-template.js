var open_menu_btn = query('.open-menu-btn'); // 메뉴 열기 버튼
var exist_menu = false;

var openMenu = function(){ // 메뉴 나오게 하는 함수
var full_menu_container= createNode('div'); //메뉴 담을 컨테이너 노드 생성
var close_menu_btn = createNode('button','메뉴 닫기'); // 메뉴 닫기 버튼 생성
var full_menu_class = 'full-menu'; //메뉴 클래스명
var full_menu_list_class = 'full-menu-list'; //메뉴 리스트 클래스명
var full_menu_list_content = ['home','about','service','product','contact']; //메뉴 리스트 텍스트
var full_menu_template = [ //메뉴 템플릿
'<ul class="'+full_menu_class+'" role="navigation">',
'<li class="'+full_menu_list_class+'"><a href="">'+full_menu_list_content[0].toUpperCase()+'</a></li>',
'<li class="'+full_menu_list_class+'"><a href="">'+full_menu_list_content[1].toUpperCase()+'</a></li>',
'<li class="'+full_menu_list_class+'"><a href="">'+full_menu_list_content[2].toUpperCase()+'</a></li>',
'<li class="'+full_menu_list_class+'"><a href="">'+full_menu_list_content[3].toUpperCase()+'</a></li>',
'<li class="'+full_menu_list_class+'"><a href="">'+full_menu_list_content[4].toUpperCase()+'</a></li>',
'</ul>'
];
if (!exist_menu) { //메뉴가 존재하지 않을 때만 생성
		full_menu_container.setAttribute('class','full-menu-container');//클래스 붙임
		close_menu_btn.setAttribute('type','button');
		close_menu_btn.setAttribute('class','close-menu-btn'); // 클래스는 필요 없을까?
		close_menu_btn.onclick = closeMenu;
		full_menu_container.innerHTML += full_menu_template.join('');
		full_menu_container.appendChild(close_menu_btn);
		insertAfter(open_menu_btn,full_menu_container);
		exist_menu = !exist_menu;
	}
} //openMenu 함수 끝

var closeMenu = function(){ //메뉴 안보이게 하는 함수
	removeNode(open_menu_btn.nextSibling); 
	exist_menu = !exist_menu; 
} //closeMenu 함수 끝

open_menu_btn.onclick = openMenu; //메뉴열기버튼 클릭시 메뉴 열리는 이벤트핸들러 바인딩

