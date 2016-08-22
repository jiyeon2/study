(function(global, $){
	'use strict';

	function init(){
	//오픈캔버스 메뉴 이벤트 핸들링
	var $offcanvas_wrapper = $('.offcanvas-menu-wrapper');

	var $toggle_btn = $offcanvas_wrapper.find('.toggle-menu-button');

	$toggle_btn.on('click', toggleOffcanvasMenu);
}
	//이벤트 핸들러 (함수)
	function toggleOffcanvasMenu(){
 // this는 이벤트가 연결된 <button>문서 객체이다
 // this가 참조하는 <button>객ㅊ체를 jQuery 객체화 시키는 방법은
 // jQuery() 팩토리 함수 내부에 this 참조 변수를 전달하여 생성한다
 //생성된 jquery객체는 jQuery.프로토타입 객체가 가진 능력을 마음껏 사용 가능하다
 var $this = $(this); // *이와 같은 행위는 성능을 저하시킨다. 클릭할 때 마다 객체 만들어야 하므로
 // console.log($this.jquery); // jQuery 버전 출력
 var $wrapper = $this.parent();
 console.log($wrapper, $wrapper[0]) ;
 //부모요소 $wrapper left단위ㅇ속성을 이동
 $wrapper.animate({
 	'left': global.parseInt($wrapper.css('left')) == 0? 
 });``l
	}

$(init); // $(document).ready(init);
})(this, this.jQuery);
