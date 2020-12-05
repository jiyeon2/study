(function(global, XHR){
	'use strict';
	 

// # step1. CREATE
	 // XMLHttpRequers() 생성자 함수를 통해
	 //비동기 통신을 수행할 객체 생성
	 
	 //헬퍼함수
	 //IE6이하 웹 브라우저 위한 대체코드
	 // IE6은 XMLHttpRespose 지원 안함 대신 ActiveXObject
	var createXHR = (function(){
		XHR = XHR || ActiveXObject('Microsoft.XMLHTTP');
		return function(){
			return new XHR;
		}
	})();

	 var xhr = createXHR();
	 // console.log(xhr_test);
	 // console.dir(XHR.prototype);
	 // console.log('생성된 xhr객체 : ', xhr);

// # step2. OPEN
//마지막 인자값이 false면 동기통신
//마지막 인자값이 tru 또는 생략이면 비동기 통신.
// 안넣는게 좋음
	// xhr.open('GET','data/data.txt',false); // 동기통신 deprecated!!
	// xhr.open('GET','data/data.txt'); // 비동기통신

// # step3. SEND
	// xhr.send();


//동기 통신일 경우 데이터가 로드될 때까지 기다림
//비동기 통신일 경우는 아래 코드 if문이 바로 해석됨  그래서 전송 실패한건 아닌데 데이터가 오기 전이라서 전송실패로그 뜸
//아래 구문을 onreadychange 이벤트로 감싸야 함

var result_view = document.querySelector('.ajax-result');
var call_ajax_btn = document.querySelector('.call-ajax-data-btn');
call_ajax_btn.onclick= updateViewPlace;


	// xhr.open('GET','data/data.xml'); // 비동기통신, 성공
	xhr.open('GET','http://api.randomuser.me/?results=20&gender=female&nat=gb,br'); // 비동기통신, 성공
	// xhr.open('GET','data/datas.txt',false); // 동기통신, 실패

//비동기 통신 객체에 이벤트 핸들러 바인딩
	xhr.onreadystatechange = function(){ //이벤트감지하여 조건이 참이되는 순간 코드 처리함
		// console.log(this); //this == xhr객체
		if( this.status === 200 && this.readyState === 4){
		console.log('통신 데이터 전송 성공 :) ');
		//test
		// result_view.textContent = '['+ this.statusText +'] '+ this.responseText;
		//html
		// result_view.innerHTML = '['+ this.statusText +'] '+ this.responseText;
		//xml
// 		var doc = this.responseXML;
// 		// console.log(this.responseXML);
// 		var people = doc.querySelector('people');
// 		var person_list = people.querySelectorAll('person');
// 		var template = '<ul>';
// 		var person, name, tel, mail, i = person_list.length -1;
// 		for(; person_list[i]; i--){
// 			person = person_list[i];
// 			name = person.querySelector('name').firstChild.nodeValue;
// 			tel = person.querySelector('tel').firstChild.nodeValue;
// 			mail = person.querySelector('mail').firstChild.nodeValue;
// 			// console.log(name, tel, mail);
// 			template += [
// 				'<li>',
// 					'<span class="name">'+ name +'</span>',
// 					'<span class="tel">'+ tel +'</span>',
// 					'<span class="mail">'+ mail +'</span>',
// 				'</li>'
// 				].join('');
// 		}
// 		template +='</ul>'
// result_view.innerHTML = template;

//----------------------------------------------
//json
var random_users = this.response; //text file
// console.log(typeof random_users); //string
// [text -> object]
// JSON 객체의 parse() 메소드 이용
// JSON.parse(JSON 문자열)
// [text <- object]
// JSON 객체의 stringify() 메소드 이용
// JSON.stringify (javascript 객체 - json 형태)
// 	}
random_users = JSON.parse(random_users); //text -> object
var people = random_users.results;
//people 반복 순환 처리
var json_template='<table><tr><th>썸네일</th><th>이름</th><th>이메일</th></tr>'
for (var person of people){
json_template +=[
'<tr>',
	'<td>',
		'<img src="'+person.picture.thumbnail +'" alt class="circle">',
	'</td>',
	'<td>'+person.name.first+' '+person.name.last+'</td>',
	'<td>'+person.email+'</td>',
'</tr>'
].join('');
}
json_template+='</table>'
result_view.innerHTML = json_template;
		}
	// 	// console.log(xhr);

}

function updateViewPlace(){
	//AJAX 통신 요청 보내기
	xhr.send();
	// 비동기 통신을 요청했을 경우
	// 이벤트(readystatechange)를 통해 비동기 데이터가 로드된 시점에
	// if조건문이 수행되어야 한다
}

	//통신 상태 확인
	// if( xhr.status === 200){
	// 	console.log('통신 데이터 전송 성공 :) ');
	// 	// console.log(xhr.response); // 받아온 데이터
	// 	call_ajax_btn.onclick= updateViewPlace
	// }else{
	// 	console.log('통신 데이터 전송 실패 X( ');
	// 	result_view.textContent ='데이터 로드에 실패했습니다..';
	// 	console.log(xhr);
	// }


//----------------------------------------------------
var test = document.querySelector('.test');
var about_btn = test.getElementsByTagName('button')[0];
var item_btn = test.getElementsByTagName('button')[1];
var service_btn = test.getElementsByTagName('button')[2];
var content= document.querySelector('.content');
function addContent(){
	if( this.status === 200 && this.readyState === 4){
		content.innerHTML =  this.responseText;
	}else{
		content.textContent ='데이터를 불러오는 중입니다';
	}
}
	//------------------
	var xhr_about = createXHR();
	about_btn.onclick = function(){
	xhr_about.open('GET','data/show1.html');
	xhr_about.send();
	}
	xhr_about.onreadystatechange=addContent;
	//--------------------
	var xhr_item = createXHR();
	item_btn.onclick = function(){
	xhr_item.open('GET','data/show2.html');
	xhr_item.send();
	}
	xhr_item.onreadystatechange=addContent;
	//------------------------
	var xhr_service = createXHR();
	service_btn.onclick = function(){
	xhr_service.open('GET','data/show3.html');
	xhr_service.send();
	}
	xhr_service.onreadystatechange=addContent;


})(this, this.XMLHttpRequest);
// })(this, this.XMLHttpRequest || ActiveXObject('Microsoft.XMLHTTP'));

//-----------------------------------
//jquery ajax
//----------------------------------
(function(global, $){
	'use strict';
	 //유틸리티 메소드
	 //$.ajax()
	 //

	// JavaScript Promise 개념 사용
	// ECMAScript 2015 Promise 기본 지원
	// jquery ajax 단축 유틸리티 메소드 
	 // $.getJSON('http://api.randomuser.me/?results=100');
	 // 	.then(function(data,status, XHR){
	 // 	console.log(data.results); //이미 객체화-object로 되어 있음
	 // });

	 	//jQuery AJAX Low-level Interface메소드
	 	$.ajax({
	 		'url':'http://api.randomuser.me/?results=100',
	 		'dataType':'json',
	 		'success': function(data,status, XHR){
	 	console.log(data.results);}
	 	});

})(this,this.jQuery);