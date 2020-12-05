////이미지 갤러리
(function(global,$){
		'use strict';
var $right_btn 			= $('.slide-move.right');
var $left_btn 			= $('.slide-move.left');
var placeholder 		= $('.placeholder-img');
var $dots_container = $('.slide-location-dots');
var $dots 					= $('.slide-dot');


function showPic(el){
	var src = el.attr('href');
	var alt = el.attr('data-desc');
	placeholder.attr('src',src)
	placeholder.attr('alt',alt);
}

function addActive(el){
	el.addClass('active');
	el.siblings('.active').removeClass('active');
}

$right_btn.click(function(){
	var $current = $dots_container.find('.active');
	var $next;
	if($current[0] == $dots.last()[0]){
		$next = $dots.first();
	} else{
		$next = $current.next();
	}
	$current.removeClass('active');
	$next.addClass('active');
	showPic($next);
});

$left_btn.click(function(){
	var $current = $dots_container.find('.active');
	var $prev;
	if($current[0] == $dots.first()[0]){
		$prev = $dots.last();
	} else{
		$prev = $current.prev();
	}
	$current.removeClass('active');
	$prev.addClass('active');
	showPic($prev);
});

$dots.click(function(e){
 	e.preventDefault();
 	var $this = $(this);
 	showPic($this);
 	addActive($this);
 });

})(this, this.jQuery);


/////그리드 버튼
	(function(global,$){
		'use strict';
		 var $grid_btn = $('.grid-btn');
		 var $grid_container = $('.grid-container');
		 var grid_on = false;
		 $grid_btn.click(function(){
		 	if(!grid_on){
		 		$grid_container.addClass('show-grid');
		 		$grid_btn.css('z-index',30000);
		 		grid_on = true;
		 	}else if(grid_on){
		 		$grid_container.removeClass('show-grid');
		 		$grid_btn.css('z-index',0);
		 		grid_on = false;
		 	}
		 });
	})(this,this.jQuery);

////위로 이동 버튼
(function(global,$){
		'use strict';
		 $('.go-top-btn').click(function(){
		 	$('html, body').animate({scrollTop: 0},'fast');
		 });
})(this,this.jQuery);