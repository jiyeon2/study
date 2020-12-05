(function(global, angular, jq){
	'use strict';
//모듈패턴 내 지역 내 함수를 앵귤러의 컨트롤러로 설정

//오직 앵귤러의 otherController를 통해서만 접근 가능하다
//외부에서 사용하려면 서비스객체 이용해서 통신해야 함
	function oCtrl() {
    // 컨트롤러 참조 변수
    var that = this;
    that.init_value = null;
    that.trigger    = trigger;

    function trigger() {
      console.log(that);
      if ( jq.type(that.init_value) === 'null' ) {
        that.init_value = 'otherController';
      } else {
        that.init_value = 'not initialization.';
      }
    }
    global.setTimeout(trigger, 3000);
  }
	 angular.module('ngApp').controller('otherController', oCtrl);

})(this,this.angular,this.jQuery);