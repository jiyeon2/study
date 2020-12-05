	(function(global, $, SM){
		'use strict';


		// TweenMax.fromTo('.logo',1,{'scalsX':0, 'scaleY':0},{'scalsX':1.2, 'scaleY':1.2});

		// $('.logo').on('click', function(){
		// 	TweenMax.to(this, 1, {css:{rotation: 180 , opacity:0, scale: 0.5 }, ease:Quad.easeInOut})
		// });
		 var ctrl = new SM.Controller();

		 var welcome = new SM.Scene({
		 	'triggerElement':'.welcome-board',
		 	'triggerHook':0,
		 	'duration':298,
		 });

		 welcome
		 	.setPin('.welcome-board', {'pushFollowers':false})
		 	.addTo(ctrl)
		 	.addIndicators({
		 		'name':'welcomeBoard',
		 		'colorStart':'da3234',
		 		'colorEnd':'0000ff'
		 	})
		 	.on('end',function(e){
		 		TweenMax.to('.welcome-board img:first-child', 1 ,{'x':-1000 , 'autoAlpha':0});
		 		TweenMax.to('.welcome-board img:nth-child(2)', 2 ,{'x':-1000 , 'autoAlpha':0});
		 		TweenMax.to('.welcome-board img:last-child', 3 ,{'x':-1000 , 'autoAlpha':0});
		 	})

		 	var info = new SM.Scene({
		 		'triggerElement':'.info',
		 		'triggerHook':0,
		 		'offset': -500
		 	});

		 	info
		 		.addIndicators({
		 			'name':'info',
		 			'colorStart':'00ff00',
		 			'colorEnd':'ffff00'
		 		})
		 		.setClassToggle('.info','fade-in')
		 		.addTo(ctrl);

	})(this, this.jQuery, this.ScrollMagic);