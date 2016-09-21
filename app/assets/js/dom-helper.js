(function(global){
	'use strict';
	//dom element 생성 도움 함수
	 var helper ={
	 	//자료형 확인
		'isType': function(data){
			return Object.prototype.toString.call(data).slice(8,-1).toLowerCase();
		},
		//문자열인지 확인
	 	'isStr': function(str){
	 		if(helper.isType(str) !== 'string') {
	 			errorMsg('문자열이 아님');} 
	 		else{
	 			return true;}
	 		},
	 	//요소명, 텍스트 전달하여 요소 생성를 생성하고 텍스트 붙임
	 	'createNode': function(element_name, text){
			var element_node = document.createElement(element_name);
			if (typeof text !== 'undefined' && typeof text ==='string'){
				var text_node = document.createTextNode(text);
				element_node.appendChild(text_node);
				}
			return element_node;
		},
		//요소명, 텍스트 전달하여 dom tree에 존재하는 요소에 텍스트 붙임
		'addTextNode': function(el, text){
			if( helper.isType(text) !== 'undefined' && helper.isStr(text) ){
				var text = document.createTextNode(text);
				el.appendChild(text);
				}
			return el;
			},
			//전달한 요소에 속성 붙임
 		'setAttr': function(el, attr, value){
			helper.isStr(attr);
			helper.isStr(value);
			el.origin_attr_value = el.getAttribute(attr) || '';
			el.setAttribute(attr,(el.origin_attr_value +' '+value).trim());
			},
			//전달한 요소에 클래스 붙임
		'setClass': function (el, value){
			helper.setAttr(el, 'class', value);
		},
		//새로운 노드를 생성하고 클래스 붙임
		'newNode_class': function (el_name, class_name){
			var new_node = document.createElement(el_name);
			if( helper.isType(class_name) !== 'undefined' && helper.isStr(class_name)){
				helper.setClass(new_node, class_name);
				return new_node;
			}
		},
		//새로운 노드를 생성하고 속성 붙임
		'newNode_attr': function (el_name, attr_name, attr_value){
			var new_node = document.createElement(el_name);
			if( helper.isType(attr_name) !== 'undefined' && helper.isStr(attr_name)){
				helper.setAttr(new_node, attr_name, attr_value);
				return new_node;
			}
		}
	 };
global.helper =  helper;
})(this);
