(function(global, angular){
			'use strict';
//모듈패턴 내 지역 내 함수를 앵귤러의 컨트롤러로 설정
function demoCtrl(){
			//비공개멤버
			var headline = 'this app maked angular';
			//공개
			this.headline = headline;
		}


			 angular.module('ngApp').controller('demoController', demoCtrl);
		})(this,this.angular);