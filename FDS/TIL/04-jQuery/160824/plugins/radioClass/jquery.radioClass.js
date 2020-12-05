(function(global,$){
	'use strict';
	//$.fn === jQuery.prototype객체
	//jQuery 프로토타입(원형) 객체에 radioClass 메소드가 없다면
	//조건이 참이 되어 radioClass 메소드 정의
	if(!$.fn.radioClass){
		$.fn.radioClass = function(class_name){
//class_name은 반드시 입력받아야 하는 인자, 문자열이어야 한다
if( $.type(class_name) !== 'string'){
	throw new Error('전달인자는 문자열이어야 합니다.');
}
			//this는 jQuery 플러그인 연결된 객체 / this.jQuery 로그찍으면 버전나옴
			//this는 사용자가 클릭한 a요소의 부모 li(jQuery로 래핑된 객체)
			var $actived = this.siblings('.'+class_name);
			// console.log($actived);
			if($actived.length === 0){
				console.info('전달한 클래스를 가진 형제 요소가 없습니다');
			}
			$actived.removeClass(class_name);
			this.addClass(class_name);

//jQuery인스턴스 메소드 체이닝 위한 제이쿼리객체 리턴
			return this;
		};
	}
})(this,this.jQuery);