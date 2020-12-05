// jquery.stydy.js

(function(global, $){
	'use strict';
var $body = $('body');
//------------------------------------
//스타일 제어
// .css() 사용 방법
//------------------------------------
// 방법 1) 속성 값을 가져오기
var body_margin = $body.css('margin');
// console.log(body_margin);
//-----------------------------------
// 방법 2) 속성 값을 설정하기
// $body.css('margin-left','2rem');
// $body.css('margin-right','2rem');
//자바스크립트 메소드 체이닝

// $body
// 	.css('margin-left','2rem')
// 	.css('margin-right','2rem');
// body_margin = $body.css('margin');
// console.log(body_margin);

//--------------------------------
// 방법 3) css 맵(객체)를 전달해서 설정하기
var css_map = {
	'background' : '#2a070a',
	'color':'#cd636f',
	'font-size':'+=22' //22% 가 아니라 22px 더해주는 값으로 처리됨
};
$body.css(css_map);
var body_font_size = $body.css('font-size');
// console.log(body_font_size);
//-------------------------------------
// 방법 4) 각 속성에 콜백 함수 설정
console.log('콜백함수 설정 전 width', $body.css('width'));
console.log('콜백함수 설정 전 height', $body.css('height'));
var fn_map = {
	'width': function(index, value){
		return global.parseFloat(value,10)/3 + 20;
	},
	'height': function(index, value){
		if( global.parseFloat(value,10) < 300){
			return '100vh';
		} else{
			return value * 2;
		}
	}
};
$body.css(fn_map);
console.log('#1 = width', $body.css('width'));
console.log('#2 = height', $body.css('height'));

// var letters = $('h1').text();
// console.log(letters[0]);
// var i =0, l = letters.length;
// for(i; i<l;i++){
// 	letters[i].on('click',function(){})
// }

});

//<h1>요소 내부의 텍스트 글자를 쪼개서 
//각각 글자를 <span>요소로 감싸도록 구성한다.
// 각 <span>요소에 마우스 엔터 이벤트를 설정하여 글자의 색상을 변경한다
(function(global,$){
	'use strict';

	var $h1 = $('.container h1');
	var h1_text = $h1.text();
	// console.log(h1_text); // 'jQuery Method' 출력

	//문자를 배열화
	h1_text = h1_text.split('');
	// console.log(h1_text); // ['j','Q', ... ,'d']
	//jQuery.map()-유틸리티 메소드(static Method, Class Method), 크로스브라우징 가능

	//jQuery.map(arr, callback) - arr내의 모든 item에 대해 item, index가져와서 callback함수 실행하고 결과값을 새로운 배열에 넣음
	h1_text = $.map(h1_text, function(item, index){
		if($.trim(item)){
				return '<span>'+item+'</span>';
		}else{
			return item;
		}
		});

		h1_text=h1_text.join('');//배열을 문자열화
		$h1.html(h1_text); //setter

// console.log($h1.parent().html());

var $letters = $('span', $h1); //$h1내부의 span 찾아옴 $h1.find('span')

//사용하기 쉽지만 이벤트 발생할 때마다 
//this 문서 객체를 jQuery() 팩토리 함수로 감싸 
//jQuery 객체를 생성해야 하기 때문에 좋지 않은 코드임
// $letters.on('mouseenter',function(){
// 	$(this).css('background','#ff0'); 
// });


//불필요한 처리 하지 않는 코드 작성하도록
//코드리뷰 -> 리팩토링 해보자
//jQuery(['<span>','<span>','<span>'])
$letters.each(function(index, item){
	// var $this = $(item);
	var $this = $letters.eq(index);
	// $this.on('mouseenter', letterOvers); // letterovers에서는 $this 참조 못함
	$this.one('mouseenter', $.proxy(letterOvers, $this));
	$this.one('mouseenter', $.proxy(playEffectSound, $this));
	// $this.one('mouseenter', playEffectSound.bind($this));
});

function letterOvers(){
	// console.log('this :', this);
	// $(this).css('color','#52c88c');
	//$this는 each실행할 때 실행되고 없어진 함수 내부의 지역변수. 외부에 존재하는 letterOvers는 그 지역변수 참조할 수 없다.
	// console.log('$this:',$this); 
	this.css({
		'transform': 'rotateX(60deg) scale(1.5)',
		'margin-right' : '10px'
	});
}

//.each jquery메소드
//$.each 이건 jQuery함수의 메소드로 정적메소드
//$().each는 jQuery.prototype의 메소드로 인스턴스메소드
//둘은 다름!
//.forEach ES표준 메소드, 배열에만 사용 가능 기능은 같음



//html5 오디오 객체 생성
var effect_sound = $('<audio>');
effect_sound.attr({
	'src':'media/tong.mp3'
});
effect_sound = effect_sound[0];
// var effect_sound = $('<audio>',{
// 	'src' : 'media/tong.mp3'
// })[0];


//effect_sound.oncanplay = function(){
// this.play();
//};

function audioStop(audio){
	audio.pause();
	audio.currentTime = 0; 
}

function playEffectSound(){
	//html5 audio 실행
	// console.log('playEffects');
	//음원이 플레이중이면 멈춘다
	audioStop(effect_sound);
	effect_sound.play();
	// console.log(effect_sound.currentTime);
}


})(this, this.jQuery);