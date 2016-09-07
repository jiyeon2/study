(function(global, angular, jq){
			'use strict';
//모듈패턴 내 지역 내 함수를 앵귤러의 컨트롤러로 설정


// //방법1
// //압축시 주입된 $scope 모듈 이름이 변경되는 것을 방지

// ngCtrl.$inject = ['$scope'];

// 		function ngCtrl($scope){
// 			var content_text = 'angularJS application is Awesome!!!'
// 			//$scope 객체의 속성/메소드 정의
// 			$scope.content = '';
// 			$scope.setContent = function(){
// 				this.content = content_text;
// 			};

// 			var ngTHeadline = jq('.ng-template-headline');

//     ////////
//     // JS //
//     ////////
// 			content_text = content_text.split(' ').slice(-1).toString().toLowerCase().replace('!!','');
// 			ngTHeadline.text(content_text);
// 		}


//방법2
function ngCtrl($scope){
	var content_text = 'angularJS application is Awesome!!!'
	//$scope 객체의 속성/메소드 정의
	$scope.content = '';
	$scope.setContent = function(){
		this.content = content_text;
	};

	var ngTHeadline = jq('.ng-template-headline');

	content_text = content_text.split(' ').slice(-1).toString().toLowerCase().replace('!!','');
	ngTHeadline.text(content_text);
}

		angular.module('ngApp').controller('ngController',['$scope', ngCtrl]);
		})(this, this.angular, this.jQuery);