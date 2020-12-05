/*jquery last js*/
(function(global, $){
	'use strict';

	//find는 탐색메서드
	//filter는 내가 찾은 요소 중 걸러내는 것

	//문서에서 .gnb 요소를 선택한 후 내부에서 li요소를 찾는다
	var $gnb = $('.gnb');
	var $gnb_list = $gnb.find('li');


//-------------------------------------------------------------
// .eq(index | last_index)
	var $gnb_list_1st = $gnb_list.eq(0);
	var $gnb_list_2nd = $gnb_list.eq(1);
	var $gnb_list_last = $gnb_list.eq(-1);
	var $gnb_list_last_2nd = $gnb_list.eq(-2);

	// console.log('$gnb_list_1st :', $gnb_list_1st);
	// console.log('$gnb_list_2nd :', $gnb_list_2nd);
	// console.log('$gnb_list_last :', $gnb_list_last);
	// console.log('$gnb_list_last_2nd :', $gnb_list_last_2nd);

//---------------------------------------------------------------
// .not( selector | elemenet | function )

//selector 사용
// $gnb_list.not('[class]').addClass('have-not-class-attribute');

//function 사용
// $gnb_list.not(function(index, element){
// 	//홀수를 제외한 짝수 li 필터링
// 	return index % 2 === 0;
// 	// if(index%2 === 1){
// 	// 	console.log(index);
// }).addClass('even');

$gnb_list.not(':even').addClass('even');

//---------------------------------------------------------------
// .filter( selector | elemenet | function | selection(jQuery object) )
// 1. selector 선택자
// $gnb_list.filter('.first').remove();

// 2. function
$gnb_list
	// .add('nav, a')
	// .addClass('navigation-component')
// 	.filter(function(index, element){
// 		var node_name = element.nodeName.toLowerCase();
// 		return node_name === 'a' || node_name === 'nav';
// })
	// .eq(-1).css('width','4rem');
	// .last().css('width','4rem');
	// .css({
	// 	'width':function(index, current_value){
	// 			var $current_list = $gnb_list.eq(index);
	// 			if($current_list.is('.last')){
	// 				return '4em';
	// 			}
	// 	}
	// })
	//-------------------------------------------------------
	//.each( function(index,element){})
	//.each( callback )
	//for문 대신 쓸 수 있지만, 느림 == 기능이 많다

// $gnb_list.each(function(idx, el){
	// $(el) === $(this)
	//명시적으로 el쓰는게 낫다
	//좋은 프로그래머란?
	// 본인이 뭘 하고 싶은지 뭘 하려는지 알아야함

//사용자고려(사용성), 접근성, 성능 고려해야함!! 프론트엔드 개발자
//arr, string 메서드에 해박하면 좋음
//추상화 - 없는 걸 만들어내는거

	//jQuery
	// $(el).html( $(el).html + $('<span>').text(idx + 1));
	//jQuery 함수 3번 실행됨. 비효율적

	//DOM Script
	// el.innerHTML += '<span>'+ (idx + 1) + '</span>';
	// console.log(origin_html_code);

// });


//filter
//---------
// .first()
// .last()
// .eq()
// .filter()
// .not()
// .slice()

//FIND
//-----
// .find()
// .next()
// .prev()
// .parent()
// .parents()
// .children()
//  .prevAll()
// .prevUntil()
// .nextAll()
// .nextUntil()
var $gnb_first = $('.gnb').find(':first');
console.log($gnb_first.next().children(':last').prevAll('.first').parents('.gnb'));



});

(function($){
	'use strict';
	 var $gnb = $('.gnb');
	 var $selected_el = $gnb.find('p').addClass('this-is-paragraph').add('li'. $gnb);
	 $selected_el.each(function(){
	 	var item = arguments[1];
	 	console.log(item);
	 });

	 // $gnb
	 // 	.find('li:first-child a').clone()
	 // 	.add('<p>링크 뒤에 나오는 단락</p>')
	 // 	.appendTo('li:first-child', $gnb);


//jQuery팩토리 함수를 통해 문서 객체를 생성할 수 있다
$('<div>')
	.addClass('custom-division hihi')
	.attr({
	'id': 'hi-seoul',
	'title':'je jude'
		})
	.text('Hey Division Element')
	.on('click',function(){console.log(this);})
	.appendTo('.gnb');
//------------------
$('<div>',{
	'id':'hi-seoul123',
	'class': 'custom-division',
	'title':'hey jude',
	'text':'hey division element!!@',
	'on':{
		'click':function(){
			console.log(this);
		}
	}
}).appendTo('body'); 
//appendTo()가 반환하는게 $객체가 아니라면 .appendTo(body).on('click' ~~)하면 이벤트 연결 안됨

//------------------------------

var $h2 = $('<h2 id="demo-test-h2">demo heading 2</h2>');
var h3 = document.createElement('h3');
var h3_text = document.createTextNode('new contente- heading 3')
var gnb = document.querySelector('.gnb');

var $ol = $('ol');
$ol.prependTo('body');

window.setTimeout(function(){
$ol.before( $h2, [h3, gnb] );
}, 3000);


//보이는 모양대로 암기하기
// A.insertBefore(B)
// A -> B
// A.after(B)
// A -> B

// A.before(B)   B A
// A.after(B)   A B
// A.insertBefore(B)  A B
// A.insertAfter(B) B A



//-------------------
// 이벤트 바인딩 시 이벤트 객체에 사용자가 정의한 객체를 합성(객체 합성)
// 외부에 변수를 만들지 않고, 이벤트 객체를 통해 조건 처리하는 토글 구문
//----------------

$('#demo-test-h2').on('click',{'clicked' : false}, function(ev){
	if(!ev.data.clicked){
		console.log('toggle 1');
	} else{
		console.log('toggle 2');
	}
	ev.data.clicked = !ev.data.clicked;
});



})(this.jQuery);
