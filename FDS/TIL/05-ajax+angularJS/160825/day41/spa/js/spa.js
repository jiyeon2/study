(function(global, XHR){
  'use strict';

  var xhr = new XHR;

	 // console.log(xhr); // ajax통신을 위해 생성된 객체


//통신상태 관찰 이벤트 핸들링
 xhr.onreadystatechange = function() {
	//200 서버 통신 성공
	//4 데이터 전송 왼료 상태
	// console.log(this); //this = xhr
	if ( this.status === 200 && this.readyState === 4 ) {
      view.innerHTML = this.responseText; //HTML code
	}
};

//문서 객체 참조
var view = document.querySelector('main');
  var nav_links = document.querySelectorAll('nav a');
// console.log(nav_links);

//nodelist 순환하여 이벤트 바인딩 - 핸들러(함수)
for ( var link, i = nav_links.length - 1; nav_links[i]; i-- ) {
    link = nav_links[i];
	//1. 클로저 사용 + 우회메소드(proxy, bind) 사용
	// link.onclick = (function(index){
	// 	return viewUpdate.bind(link, index);
	// })(i);
	// console.log(link.onclick);

	//2. 객체.속성 사용
	link.idx = i;
	link.onclick = viewUpdate;
}

 var views = 'home about works contact'.split(' '); //공백으로 쪼개서 배열화
// console.log(views);

//페이지 뷰 업데이트 하는 함수
 function viewUpdate(this.idx) {
    // console.log(this, this.idx); // <a>
//비동기 통신 설정 & 요청
//클릭한 <a> 요소의 인덱스를 통해 데이터를 가져와야 한다
//집합데이터 array 필요
//각<a>요소를 클릭했을 때 인덱스는 어떻게 전달? 위의 두가지 방법

// var index = 0;
// var page = 'view/'+ views[this.idx] +'.html';

    var page = 'view/' + views[this.idx] + '.html';
    // console.log(index);
    xhr.open('GET', page);
    xhr.send();
//페이지 주소값은 바뀌지 않아서 사용자가 어디있는지 모름
//페이지 주소(해쉬)값 변경
    global.location.hash = page;
//웹브라우저가 수행하는 브라우저 기본 동작 차단
   return false;
  }

  link.onclick();

})(this, this.XMLHttpRequest || this.ActiveXObject('Microsoft.XMLHTTP'));