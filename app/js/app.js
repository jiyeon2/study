(function(global, angular){
	'use strict';
	 var fitbitApp = angular.module('fitbitApp',[]);
	 var myInfo = {
			'picture': {
				'medium':'../../assets/img/challenge/myactivity.jpg'
			},
			'name':{
				'first': 'lee',
				'last':'jiyeon'
			},
			'gender':'female',
			'dob': '1990-09-20 11',
			'email' : 'a1919361@gmail.com',
			'nat' : 'KR',
			'location': {
				'state': '',
				'city': 'seoul',
				'street':'ohyeonro'
			},
			'cell':'123-4567-8910',
			'login':{'username':'jiyeonjiyeon'},
			'registered':'2016-06-15'
		};

	 fitbitApp.controller('friendCtrl',['$scope','$http',function($scope,$http){
	 	
		$scope.clicked_person = myInfo;
		$scope.initInfo = function(){
			$scope.clicked_person = myInfo; 
			$scope.show = '';
		};


		$scope.getThisUserInfo=function(){
			$scope.clicked_person = this.value;
			$scope.show = 'show';
			};

	 	$http({
	 		'method':'GET',
	 		'url':'http://api.randomuser.me/?results=10',
	 		'headers': "{'Content-Type': 'application/json; charset=utf-8'}"
	 	}).then(successAjaxCall, errorAjaxCall);

	 	function successAjaxCall(response){
	 		$scope.friend = response.data.results;
	 	};
	 	function errorAjaxCall(response){
	 		console.log(status);
	 	}

	 }]);
})(this,this.angular);