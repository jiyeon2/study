(function(global, $ , SM){
	'use strict';

//컨트롤러 초기화
var ctrl = new SM.Controller();


//info 핀꽂기

var info_pin = new SM.Scene({
	'triggerElement':'.info',
	'triggerHook':0,
	'duration': 200
});
info_pin
	.setPin('.info',{
		'pushfollowers':false
	})
	// .addIndicators({
	// 	'name':'info',
	// 	'colorStart':'#da3234',
	// 	'colorEnd':'#0000ff'
	// })
	.addTo(ctrl)
	.on('progress',function(e){
		var target = e.target.triggerElement();
		target.style.opacity = 1 - e.progress;
	});

//메뉴리스트 - 페이드인 씬
var scene_list = '.menu-set .menu-pizza .menu-drinks .menu-pasta .menu-sides .menu-salad'.split(' ');

scene_list.forEach(function(trigger_el_selector, idx){
	var scene = new SM.Scene({
		'triggerElement': trigger_el_selector,
		'triggerHook':0,
		'offset': -800
		})
		.setClassToggle(trigger_el_selector,'fade-in')
		// .addIndicators({
		// 	'name':trigger_el_selector
		// 	})
		.addTo(ctrl);
	});

//welcome board 페이드 인 씬
var scene = new SM.Scene({
	'triggerElement': '.special-menu',
	'triggerHook':0,
	'offset': -600
	})
	.setClassToggle('.special-menu','fade-in')
	.addTo(ctrl);

var scene = new SM.Scene({
	'triggerElement': '.week-event',
	'triggerHook':0,
	'offset': -500
	})
	.setClassToggle('.week-event','fade-in')
	.addTo(ctrl);

var scene = new SM.Scene({
	'triggerElement': '.welcome-comment',
	'triggerHook':0,
	'offset': -400
})
.setClassToggle('.welcome-comment','fade-in')
.addTo(ctrl);

})(this, this.jQuery, this.ScrollMagic);
