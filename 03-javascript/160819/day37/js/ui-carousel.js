/*--------------------------------------
//자바스크립트가 지원되는 환경임을 식별할 수 있는 모듈
-----------------------------------------*/
(function(global){
	'use strict';
	//<html>요소를 찾아서 class 속성에서 'no-js'값을 js로 변경
	global.html = query('html');

	if(html.classList){
	//신형방식  IE 10이상 지원
	html.classList.remove('no-js');
	html.classList.add('js');
} else{
	//구형방식
	var html_class_attr = html.getAttribute('class');
	//설정
	html.setAttribute('class',html_class_attr.replace(/no-js/,'js'));
}

})(this);

/*--------------------------------------
//UI Carousel Component 제작
-----------------------------------------*/
(function(global){
	'use strict';
 var carousel;
 var carousel_contents_wrapper;
 var content_height;
 var carousel_contents_total; // wrapper이동 계산할 때, sass함수에서도 적용할 max값
	/*--------------------------------------------------------
	1.[절차 지향] 함수형 방식으로 진행
	-----------------------------------------------------------
	1.1 컴퍼넌트 분석
	어플리케이션 초기화
		해당 요소를 컴포넌트 화
		요소의 클래스 설정
		버튼을 동적으로 생성
		버튼 이벤트 핸들링
	핸들러 작성
		콘텐츠 wrapper를 이동시키는 기능

	1.2 기능 설계
	1.3 기능 구현
	1.4 테스트
	1.5 빌드 (공유, 배포)
	----------------------------------------------------------*/

 //애플리케이션 초기화
function init(selector){
 	//스타일 식별자 class 속성 설정
 	carousel = query(selector); //var carousel = query('article');
 	//기존 carousel 참조 문서  객체의 class 속성 값을 메모리
 	//객체.속성 방식 이용하여 메모리
 	carousel.origin_class= carousel.getAttribute('class') || '';
 	//WAI-ARIA설정
 	carousel.setAttribute('class', (carousel.origin_class+' ui-carousel').trim() ); //trim은 양옆의 공백 제거
 	carousel.setAttribute('role','application');
 	carousel.setAttribute('aria-label','Demonstration UI Carousel Component');
 	//----------------------------------------------------------
 	//래핑 요소를 생성
 	carousel_contents_wrapper = createNode('div');
 	//래핑 요소에 클래스 속성 설정
 	carousel_contents_wrapper.setAttribute('class','ui-carousel--content__wrapper');
 	//래핑 요소에 wai-aria 속성 설정
 	carousel_contents_wrapper.setAttribute('role','group');
 	//캐러셀 콘텐츠 래핑
 	var carousel_contents = makeArray( queryAll(selector + '> *'));
 	carousel_contents_total = carousel_contents.length;
 	carousel_contents.forEach(function(content,index){
 		//자식요소의 클래스 속성 설정
 		content.setAttribute('class','ui-carousel--content');
 		//자식 요소의 내부에서 제목 요소를 찾아 class속성 설정
 		var headline = query('h2', content);
 		headline.setAttribute('class','ui-carousel--content__headline');
 		//래핑요소에 자식 요소로 삽입
 		carousel_contents_wrapper.appendChild(content);
 	});
 	//캐로셀 컴포넌트 첫번째 자식요소로 삽입
 	prependChild(carousel, carousel_contents_wrapper);

//-----------------------------------------------------------------
//버튼 그룹과 버튼 요소들을 동적으로 생성
 // 	var button_group=createNode('div');
 // 	//버튼 그룹에 class 식별자 설정
 // 	button_group.setAttribute('class','ui-carousel--navigation__buttons');
 // 	button_group.setAttribute('role','group');
 // 	//버튼 생성
 // 	var prev_button = createNode('button');
 // 	prev_button.setAttribute('type','button');
 // 	var next_button = prev_button.cloneNode();
 // 	//각 버튼에 class식별자를 설정한다
 // 	prev_button.setAttribute('class','ui-carousel--navigation__prev_button');
 // 	prev_button.setAttribute('aria-label','previous content');
 // 	//버튼에 아이콘 폰트 추가
 // 	prev_button.innerHTML = '<span class="fa fa-angle-up" aria-hidden="true"></span>';
	// next_button.setAttribute('class','ui-carousel--navigation__next_button');
 // 	next_button.setAttribute('aria-label','next content');
 // 	//버튼에 아이콘 폰트 추가
 // 	next_button.innerHTML = '<span class="fa fa-angle-down" aria-hidden="true"></span>';
 // 	console.log(prev_button, next_button);

//콘텐츠 래퍼 문서 객체로부터 첫번째 자식 객체(콘텐트)를 변수에 참조
 var content = firstEl(carousel_contents_wrapper);

 //콘텐트 높이 가져오기
 content_height = removeUnit(css(content,'height'));

// 템플릿 코드 사용한 innerHTML활용 예시
var button_group_html_code = [
	'<div class="ui-carousel--navigation__buttons" role="group">',
 		'<button aria-label="previous content" type="button" class="ui-carousel--navigation__prev_button">',
 			'<span class="fa fa-angle-up" aria-hidden="true"></span>',
 		'</button>',
 		'<button aria-label="next content" type="button" class="ui-carousel--navigation__next_button">',
 			'<span class="fa fa-angle-down" aria-hidden="true"></span>',
 		'</button>',
 	'</div>'
].join('');
// console.log(button_group_html_code);
carousel.innerHTML += button_group_html_code;


//버튼에 이벤트 바인딩을 하고자 한다.
	bindEvent();
}

//-----------------------------------------------------------------
// 버튼에 이벤트 바인딩
 function bindEvent(){
 	var buttons= queryAll('.ui-carousel--navigation__buttons button', carousel); 
 	var len = buttons.length;
 	while(buttons[--len]){
 		buttons[len].onclick = movingCarouselContents;
 	}
 }


//-----------------------------------------------------------------
//버튼에 연결된 함수
function movingCarouselContents(){
 // console.log(this);
 //기능 구현
 //어떤 버튼을 클릭했는지 구분
 var check_class=this.getAttribute('class');

 var carousel_contents_wrapper = prevEl(this.parentNode);
 var current_wrapper_top = removeUnit(css(carousel_contents_wrapper,'top')); // 현재 래퍼 높이
 var changed_wrapper_top; // 버튼 누른 후 변경된 래퍼 높이

 //콘텐츠 래퍼를 이동시켜줌
 if(/prev/.test(check_class)){ //이전버튼 누르면 wrapper가 컨텐츠 높이만큼 아래로 내려감(상위 컨텐츠-이전 컨텐츠-가 보임)
 	changed_wrapper_top = current_wrapper_top+content_height; 
 	if(changed_wrapper_top === content_height){
 		changed_wrapper_top = -1 * ( content_height * (carousel_contents_total -1 ));
 	}
 	css(carousel_contents_wrapper,'top', changed_wrapper_top+'px');
 }else{ //아래로 버튼 누르면 wrapper가 컨텐츠 높이만큼 위로 올라감(하위 컨텐츠 -다음 컨텐츠-가 보임)
 	changed_wrapper_top = current_wrapper_top - content_height;
 	if(changed_wrapper_top === -1 *(content_height * carousel_contents_total)){ //wrapper높이만큼 다 위로 이동했다면
 		changed_wrapper_top = 0; // wrapper top값 초기화  -> 첫번째 컨텐츠 보임
 	}
 	css(carousel_contents_wrapper, 'top', changed_wrapper_top +'px');
 }
}

//초기화 실행
init('.main-ad-area'); 
 // init('.demo-A');

});





(function(global){
	'use strict';
	/*----------------------------------------------------------
	 2. [객체 지향] 커스텀 객체 형태로 변경
	 -----------------------------------------------------------
	2.1 객체 생성자 (ES2015에서의 class 제작)
	2.2 객체 생성자의 프로토타입 객체를 통해 공유할 수 있는 기능 정의
	2.3 정의된 기능 구현
	2.4 테스트
	2.5 빌드(배포)
	-----------------------------------------------------------*/

	function Carousel(selector){
		this.carousel = query(selector);
		this.init();
	}

	Carousel.prototype = {
		'constructor':Carousel,
		'init':function(){
				var carousel = this.carousel;
				carousel.origin_class = carousel.getAttribute('class') || '';
				setClass(carousel, 'ui-carousel');
				setAttr(carousel,'role','application');
				setAttr(carousel,'aria-label','Demonstration UI Carousel Component');
				var carousel_contents_wrapper = newNode('div','ui-carousel--content__wrapper');
				setAttr(carousel_contents_wrapper,'role','group');
				var carousel_contents = makeArray(carousel.children);
				this.carousel_contents_total = carousel_contents.length;
				carousel_contents.forEach(function(content, index){
					setClass(content,'ui-carousel--content');
					var headline = query('h2', content);
					setClass(headline,'ui-carousel--content__headline');
					carousel_contents_wrapper.appendChild(content);
				});
				prependChild(carousel, carousel_contents_wrapper);
				var content = firstEl(carousel_contents_wrapper);
				this.content_height = removeUnit(css(content, 'height'));
				var button_group_html_code= [
 					'<div class="ui-carousel--navigation__buttons" role="group">',
          '<button aria-label="previous content" type="button" class="ui-carousel--navigation__prev_button">',
          '<span class="fa fa-angle-up" aria-hidden="true"></span>',
          '</button>',
          '<button aria-label="next content"type="button"class="ui-carousel--navigation__next_button">',
          '<span class="fa fa-angle-down" aria-hidden="true"></span>',
          '</button>',
        	'</div>'
				].join('');
				carousel.innerHTML += button_group_html_code;
				this.bindEvent();
		},
		'bindEvent':function(){
    	var buttons = queryAll('.ui-carousel--navigation__buttons button');
    	var len = buttons.length;
   		while( buttons[--len] ) {
      buttons[len].onclick = movingCarouselContents;
    }

		},
		'movingCarouselContents':function(){
			var check_class = this.getAttribute('class');
			var carousel_contents_wrapper = prevEl(this.parentNode);
			var current_wrapper_top = removeUnit(css(carousel_contents_wrapper,'top'));
			var changed_wrapper_top;
			var content_height = carousel.content_height;
			var carousel_contents_total = carousel.carousel_contents_total;
			if (/prev/.test(check_class)){
				changed_wrapper_top = current_wrapper_top + content_height;
				if(changed_wrapper_top === content_height){
					changed_wrapper_top = -1 * (content_height * (carousel_contents_total -1 ));
				}
				css(carousel_contents_wrapper, 'top', changed_wrapper_top+'px');
			}else{
				changed_wrapper_top = current_wrapper_top - content_height;
				if(changed_wrapper_top === -1 * (content_height * carousel_contents_total)){
					changed_wrapper_top = 0;
				}
				css(carousel_contents_wrapper, 'top', changed_wrapper_top + 'px');
			}
		}
	};

	//객체생성
	// global.main_ad_area = new Carousel('.main-ad-area');
	// global.demo_A = new Carousel('.demo-A');

	//전역에 커스텀객체 Carousel 노출
	global.Carousel = Carousel;
})(this);