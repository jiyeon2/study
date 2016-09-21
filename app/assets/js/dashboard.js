//심박수
(function(global){
	'use strict';
	var pumping_heart = document.querySelector('.heart-img.pumping');
	var heart_rate_value = pumping_heart.nextElementSibling;
	var heart_rate = heart_rate_value.children[0];

	heart_rate.addEventListener('blur',function(){
		if(parseInt(this.textContent) > 100){
			pumping_heart.origin_classes = pumping_heart.getAttribute('class');
			pumping_heart.setAttribute('class',(pumping_heart.origin_classes +' rapid'));
		}else{
			pumping_heart.setAttribute('class','heart-img pumping');
		}
		});

	heart_rate_value.addEventListener('click',function(){
		heart_rate.focus();
	});
})(this);

//마신 물 양
(function(global){
	'use strict';
	var water_in_cup = document.querySelector('.water-in-cup');
	var water_drink_value = document.querySelector('.water-drink-value');
	var ml = water_drink_value.children[0];
//top 67% = 0, top 33% = 100
	ml.addEventListener('blur',function(){
		var changed_value = parseInt(this.textContent);
		if(changed_value>=2000){
			water_in_cup.style.top = '33%';
		}else if(changed_value>= 1500){
			water_in_cup.style.top = '42%';
		}else if(changed_value>= 1000){
			water_in_cup.style.top ='50%';
		}else if(changed_value>= 500){
			water_in_cup.style.top ='58%';
		}else if(changed_value>= 250){
			water_in_cup.style.top ='62%';
		}else if(changed_value <250 && changed_value >0){
			water_in_cup.style.top ='65%';
		}else if(changed_value<=0){
			water_in_cup.style.top ='67%';
		};
		});

	water_drink_value.addEventListener('click',function(){
		ml.focus();
	});
	})(this);