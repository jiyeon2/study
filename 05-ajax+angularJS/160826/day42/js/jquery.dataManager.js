// //가공된 형태의 사용자 정의 객체
// //헬퍼객체!
// // 로컬스토리지 제어에 유용한 메소드 포함할것
// //데이터 가져오기/ 저장하기/지우기/ 모두 지우기 가능해야함

// var myobj = {};
// myobj.item = function(key,value){
// 	if(!value){
// 		var get_item = storage.getItem(key);
// 		get_item = JSON.parse(get_item);
// 		return get_item;
// 	}
// 	if(typeof value === 'object'){
// 		value = JSON.stringify(value);
// 	}
// 		storage.setItem(key,value);
// }

// global.myobj = myobj;




(function(global,$){
	'use strict';
	//jQuery 네임스페이스 객체(함수)
	// 함수 객체의 속성으로 dataManager 객체를 설정
	//jQuuery 유틸리티 메소드라 명한다
$.dataManager = {
	// 'support': function([feature]){로컬스토리지 또는 JSON 기능을 지원하는지 유무를 객체로 반환},
	// 'get': function(key){return 로컬스토리지로부터 데이터 반환(문자를 객체화) },
	// 'set': function(key, value){ 전달된 value를 문자화해서 로컬스토리지 객체의 key값으로 저장 },
	// 'del': function(key){key에 해당하는 데이터를 로컬스토리지로부터 제거한다},
	// 'clear' : function(){로컬스토리지 데이터가 존재하면 모든 데이터 제거}
	'support': (function(){
		var json = !!global.JSON ,localstorage = !!global.localStorage; //전역으로 계속 JSON찾아 올라가지 않도록 메모리
		return function(feature){
			if(!feature){
				return{
					'json': json,
					'localstorage':localstorage
				};
			}
			feature = feature.toLowerCase();
	if(feature === 'json'){return json;}
	if(feature === 'localstorage'){return localstorage;}
		};
	})(),
	'get': function(key) {
      if (!key || $.type(key) !== 'string' || !this.support().json || !this.support('localstorage')) {throw new Error;}
      return global.JSON.parse( global.localStorage.getItem(key) );
    },
	'set':function(key, value) {
      if ( !key || !value || $.type(key) !== 'string' || !this.support().json || !this.support('localstorage') ) {throw new Error;}
        global.localStorage.setItem(  key, global.JSON.stringify(value));
    },
	'del': function(key){global.localStorage.removeItem(key);},
	'clear' : function(){global.localStorage.clear();},
	'item': function(key, value){
		if(!key || $.type(key) !== 'string' || !this.support().json || !this.support('localstorage')) {throw new Error;}
		if(!value){
			return global.JSON.parse( global.localStorage.getItem(key) );
		}
		global.localStorage.setItem(  key, global.JSON.stringify(value));
	}
};



})(this, this.jQuery );