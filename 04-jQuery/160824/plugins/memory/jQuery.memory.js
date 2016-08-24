/*jquery.memory.js*/
(function(global, $){
	'use strict';
	if(!$.memory){
		$.memory = function(dom_el){
			if(dom_el.nodeType !== 1){
				throw new Error('DOM객체를 전달해야 합니다.');
			}
//전달받은 dom_el에 $this 라는 데이터가 메모리 되어 있는지 확인
			if($.data(dom_el, '$this')){
				$.data(dom_el, '$this', $(dom_el));
			}
			return $.data(dom_el, '$this');
		};
		//별칭
		$.$=$.memory;
	}


})(this, this.jQuery);