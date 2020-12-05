/*! make-remove-modal.js © yamoo9.net, 2016 */
//---------------------------------------
// insertAfter
// insertAfter(target_node, insert_node){
// var next_node = target_node.nextSibling;
// var parent_node = target_node.parentNode;
// if( next_node ){
//  next_node.parentNode.insertBefore(insert_node,n…

// show_btn.onclick=function(){insertAfter(show_btn,modal);}
// (){insertAfter(show_btn,modal);}
// createElement
//-----------------------------------------
var body            = document.body;
var exist_modal     = false;
var scripts_in_body = queryAll('script');
var last_script     = scripts_in_body[scripts_in_body.length - 1];
var make_btn        = query('.btn_make_modal');

function makeModal() {
  if (!exist_modal) {
    var modal = document.createElement('div');
    modal.setAttribute('class', 'modal');
    var modal_title = document.createElement('h2');
    var modal_title_txt = document.createTextNode('Modal Window');
    modal_title.setAttribute('class', 'modal-title');
    modal_title.appendChild(modal_title_txt);
    var modal_desc = document.createElement('p');
    var modal_desc_txt = document.createTextNode('Modal Window Content....');
    modal_desc.setAttribute('class', 'modal-desc');
    modal_desc.appendChild(modal_desc_txt);
    var btn_modal_cta = document.createElement('button');
    var btn_modal_cta_txt = document.createTextNode('send message');
    btn_modal_cta.setAttribute('class', 'modal-cta');
    btn_modal_cta.setAttribute('type', 'button');
    btn_modal_cta.appendChild(btn_modal_cta_txt);
    var btn_modal_close = document.createElement('button');
    var btn_modal_close_txt = document.createTextNode('x');
    btn_modal_close.setAttribute('class', 'modal-close');
    btn_modal_close.setAttribute('type', 'button');
    btn_modal_close.setAttribute('aria-label', 'close modal window');
    btn_modal_close.appendChild(btn_modal_close_txt);
    btn_modal_close.onclick = removeModal;
    modal.appendChild( modal_title );
    modal.appendChild( modal_desc );
    modal.appendChild( btn_modal_cta );
    modal.appendChild( btn_modal_close );
    insertAfter(last_script, modal);
    // 상태 변경
    exist_modal = !exist_modal;
    this.setAttribute('disabled', true);
  }
}

function removeModal() {
  // Modal???
  // 방법 1. .modal 찾아와서 제거할 것
  var modal = query('.modal');
  modal.parentNode.removeChild(modal);
  // 방법 2. 함수 실행 전에 컨텍스트를 변경해서 제거하는 방법

  // 상태 변경
  exist_modal = !exist_modal;
  make_btn.removeAttribute('disabled');
}

window.onload  = function(){
make_btn.onclick = makeModal;
}
//--------------