//함수는 컨트롤러
//$scope는 주입된 객체


(function(global, ng){
	'use strict';
	//angular 확인
	 // console.log(ng.version.full);

	 //컨트롤러
	 function tableController($scope){
	 	// console.log($scope);
	 	//모델
	 	//[지역변수] 외부에서 접근 불가
	 	// 모델 데이터는 향후 외부로 분리하여 관리함
	 	// $http 서비스 객체를 사용함
	 	// , $ngResource
	 var people =[
	{
	'name':'몽키 D 루피',
	'age': 23,
	'mail': 'luffy@tom.so',
	'has-money': 34423423423,
	'birthday': '2001-02-03',
	'picture':{
	'width': 200,
	'height': 200,
	'src': 'http://placehold.it/220x220/483728/efefef/?text=Mario'
	}
	},
	{
	'name':'sunnt',
	'age': 12,
	'mail': 'SUNNT@TOM.SO',
	'has-money': 2431234234,
	'birthday': '1983-12-03',
	'picture':{
	'width': 200,
	'height': 200,
	'src': 'http://placehold.it/220x220/123673/efefef/?text=Mario'
	}
	},
	{
	'name':'henry',
	'age': 26,
	'mail': 'ally@tom.so',
	'has-money': 53423434543453453454234,
	'birthday': '1991-04-11',
	'picture':{
	'width': 200,
	'height': 200,
	'src': 'http://placehold.it/220x220/ff1234/efefef/?text=Mario'
	}
	},
	{
	'name':'aron',
	'age': 11,
	'mail': 'aron@tom.so',
	'has-money': 454234,
	'birthday': '2012-05-16',
	'picture':{
	'width': 200,
	'height': 200,
	'src': 'http://placehold.it/220x220/443476/efefef/?text=Mario'
	}
	}
]
var ordermap={
	'sort':null,
	'name':true,
	'age':true,
	'mail':true,
	'birthday':true
};

function changeOrder(prop){
	$scope.ordermap[prop] = !$scope.ordermap[prop];
	$scope.ordermap.sort = $scope.ordermap.sort === prop? '-'+prop : prop;
}
//$scope 객체 통해 해당 속성에 접근이 뷰에서 가능
$scope.people= people;
$scope.ordermap = ordermap;
$scope.changeOrder = changeOrder;
	 }

	 //작성한 컨트롤러를 공개
	 global.tableController = tableController;
})(this,this.angular);