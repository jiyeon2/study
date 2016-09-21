(function (global, angular) {
  'use strict';

  //fitbitApp 모듈 정의, 의존모듈 ngRoute, ngAnimate
  var fitbitApp = angular.module('fitbitApp', ['ngRoute', 'ngAnimate']);


  fitbitApp.config(['$routeProvider', '$locationProvider', function( $routeProvider, $locationProvider ) {
    //라우트 설정
    $routeProvider
      .when('/',{
        'templateUrl': 'app/views/main.html',
        'controller': 'MainCtrl'
      })
        .when('/main',{
        'templateUrl': 'app/views/main.html',
        'controller': 'MainCtrl'
      })
      .when('/friend',{
        'templateUrl': 'app/views/friend.html',
        'controller': 'FriendCtrl'
      })
      .when('/challenge',{
        'templateUrl': 'app/views/challenge.html',
        'controller': 'ChallengeCtrl'
      })
      .when('/notice',{
        'templateUrl': 'app/views/notice.html',
        'controller': 'NoticeCtrl'
      })
      .when('/mypage',{
        'templateUrl': 'app/views/mypage.html',
        'controller': 'MyPageCtrl'
      })
      .otherwise({
        'redirectTo': '/'
      });
    
    //로케이션 설정
    $locationProvider.html5Mode({
      'enabled': true,
      'requireBase': false
    });
  }]);

    //해당 링크에 active 클래스 붙이는 컨트롤러
    fitbitApp.controller('IndexCtrl',['$scope','$location',function($scope,$location){
      $scope.activeClass = function(path){
        var location_path= $location.path().substr(0, path.length);
        return location_path === path ? 'active' : '';
      }
    }]);

})(this, this.angular);
