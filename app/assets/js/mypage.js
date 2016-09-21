(function(global,$){
	'use strict';
	 

	$('.main-col .box').on('click',function(e){

		e.preventDefault();

//박스의 클래스이름에 해당하는 서브섹션을 보여준다
		var box_class = this.getAttribute('class');
		box_class = box_class.split(' ')[1];
		
		$('.sub-col')
			.removeClass('hide')
			.addClass('cover')
			.find('.'+box_class)
				.addClass('show')
			.parent()
			.find('.guide-msg')
				.addClass('hide');

		$('.'+box_class)
			.siblings()
			.removeClass('show');

		$(this)
			.addClass('on')
			.siblings()
				.removeClass('on');
	});

//뒤로가기 버튼을 눌렀을 때 서브섹션을 숨긴다
		$('.back-btn').on('click',function(e){
		var $this = $(this);
		$this.siblings('.guide-msg').removeClass('hide')
		$this.nextAll('.show').removeClass('show');
		$this.parent()
				.addClass('hide')
				.removeClass('cover');
	});

})(this,this.jQuery);