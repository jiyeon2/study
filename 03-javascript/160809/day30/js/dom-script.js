// 표준은 이렇게 지원되지만 복잡하고 느려서 실무에선 안씀
// 이걸 동적으로 생성
//-----------------------
// <div class="modal">
// 	<h2 class="modal-title">Modal Window</h2>
// 	<p class="modal-desc">modal window content...</p>
// 	<button class="modal-cta">send message</button>
// 	<button class="modal-close" aria-label="close modal window">x</button>
// </div>
//---------------------------

//노드 생성
var modal = document.createElement('div');
//노드 속성 설정
modal.setAttribute('class','modal');
//-------------------------------------------
var modal_title = document.createElement('h2');
var modal_title_txt = document.createTextNode('Modal Window');
modal_title.setAttribute('class','modal-title');
modal_title.appendChild(modal_title_txt);
//---------------------------------------------
var modal_desc = document.createElement('p');
var modal_desc_txt = document.createTextNode('Modal Window contents');
modal_desc.setAttribute('class','modal-desc');
modal_desc.appendChild(modal_desc_txt);
//---------------------------------------------
var btn_modal_cta = document.createElement('button');
var btn_modal_cta_txt = document.createTextNode('send message');
btn_modal_cta.setAttribute('class','modal-cta');
btn_modal_cta.setAttribute('type','button');
btn_modal_cta.appendChild(btn_modal_cta_txt);
//---------------------------------------------------
var btn_modal_close = document.createElement('button');
var btn_modal_close_txt = document.createTextNode('x');
btn_modal_close.setAttribute('class','modal-close');
btn_modal_close.setAttribute('type','button');
btn_modal_close.setAttribute('aria-label','close modal window');
btn_modal_close.appendChild(btn_modal_close_txt);


//----------------------------------------
//생성된 모든 노드 병합
modal.appendChild(modal_title);
modal.appendChild(modal_desc);
modal.appendChild(btn_modal_cta);
modal.appendChild(btn_modal_close);

//body 요소 맨 뒤에 추가
var body = document.body;
// body.appendDhild(modal);

//body 요소 맨 앞에 추가
//방법1. 표준 DOM API 방법인 insertBefore() 메소드 활용
// target_node.parentNode.insertBefore(insert_node, target_node)
// var script_in_body = body.querySelector('script'); //querySelector는 ie8이상 적용됨
// console.log('타겟 요소 : ', script_in_body);
// var script_parent = script_in_body.parentNode;
// console.log('타겟요소의 부모노드: ', script_parent);
// script_parent.insertBefore(modal, script_in_body);

//방법2. 사용자 정의(custom) 헬퍼 함수 prependChild() 메소드 활용
	//parent_node.appendChild(child_node); 와 유사하게 쓸 수 있도록
// target_node.parentNode.insertBefore(insert_node, target_node)
	//핵심코드 사용
function prependChild(parent, child){
	parent.insertBefore(child, parent.firstChild);
}

prependChild(body, modal);




// var new_div = document.createElement('div');
// var new_h2 = document.createElement('h2');
// var new_title_text = document.createTextNode('Modal Window');
// var new_p = document.createElement('p');
// var new_description_text = document.createTextNode('Modal window contents');
// var send_button = document.createElement('button');
// var close_button = document.createElement('button');
// var send_button_text = document.createTextNode('send message');
// var close_button_text = document.createTextNode('x');

// // div> h2 + p + button + button
// new_div.appendChild(new_h2);
// new_div.appendChild(new_p);
// new_div.appendChild(send_button);
// new_div.appendChild(close_button);

// //div.modal
// new_div.setAttribute('class','modal');

// // h2.modal{text}
// new_h2.setAttribute('class','modal-title');
// new_h2.appendChild(new_title_text);

// //p.modal-desc{description}
// new_p.setAttribute('class','modal-desc');
// new_p.appendChild(new_description_text);

// //button.modal-cta{send test}
// send_button.setAttribute('class','modal-cta');
// send_button.appendChild(send_button_text);

// //button.modal-close{x}
// close_button.setAttribute('class','modal-close');
// close_button.setAttribute('aria-label','close modal window');
// close_button.appendChild(close_button_text);

// document.body.insertBefore(new_div, document.body);

