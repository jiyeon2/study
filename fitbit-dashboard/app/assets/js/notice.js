(function(global, $){
	'use strict';
	
var chat_board = document.querySelector(".chat-board");
var chatAutoScroll = function(){
	chat_board.scrollTop = chat_board.scrollHeight;
}

//////////////////////////////////////////////////////////////
//메시지 생성하는 함수
var makeMsg = function(){
	//input의 텍스트 내용 가져온다
	var input = $('.chat-form input')[0],
			input_value = input.value;
	//input의 텍스트를''로 만든다.
			input.value = '';
	//다음의 요소를 만든다
	var ul_chat_item = helper.newNode_class('ul','chat-item mychat'), 		//메시지 컨테이너
			li_img       = helper.newNode_class('li','notice-img'),						//이미지 컨테이너
			myimg        = helper.newNode_attr('img','src','/app/assets/img/challenge/myactivity.jpg'),//이미지요소
			li_content   = helper.newNode_class('li','notice-content'),				//메시지 내용 컨테이너
			msg_box      = helper.newNode_class('p','msg-box'),								//메시지 내용
			info         = document.createElement('p'),												//메시지 정보 컨테이너
			user_id      = helper.newNode_class('span','user-id'),						//사용자 ID
			sent_time    = helper.newNode_class('span','sent-time'),					//보낸시간
			time         = new Date();
	//텍스트 노드를 붙인다
	helper.addTextNode(msg_box, input_value);
	helper.addTextNode(user_id,'나 ,');
	helper.addTextNode(sent_time,' '+time.getHours()+' : '+time.getMinutes());
	//요소들을 연결한다
	ul_chat_item.appendChild(li_img);
	li_img.appendChild(myimg);
	ul_chat_item.appendChild(li_content);
	li_content.appendChild(msg_box);
	li_content.appendChild(info);
	info.appendChild(user_id);
	info.appendChild(sent_time);
	//만들어진 메시지를 chat board에 붙인다
	$('.chat-board')[0].appendChild(ul_chat_item);
};


///////////////////////////////////////////////////////////////////////////
//해당 대화창 눌렀을 때 채팅창 보이게 하기
$('.message-list').find('a').on('click',function(e){
	e.preventDefault();
	var $this   = $(this),
			$parent = $this.parent();
	$parent.addClass('on');
	$parent.siblings('.on').removeClass('on');
	$('.chat.hide').removeClass('hide');
	$('.chat-board.hide').removeClass('hide');
	$('.chat-form.hide').removeClass('hide');
	$('.guide-msg').addClass('hide');
	$('.chat-form input').focus();

//해당 대화창 눌렀을 때 대화 내용 가져오기
	var img_src    = this.querySelector('img').src,
			msg_text   = this.querySelector('.msg-box').textContent,
			user_id    = this.querySelector('.user-id').textContent,
			sent_time  = this.querySelector('.sent-time').textContent;

//채팅창 메시지 템플릿
	var template = [
									'<h4 class="chat-title"><span class="user-id">'+user_id+'</span>와의 대화</h4>',
										'<ul class="chat-item">',
											'<li class="notice-img"><img src="'+ img_src +'" alt></li>',
											'<li class="notice-content">',
												'<p class="msg-box">'+ msg_text +'</p>',
												'<p><span>'+user_id+'</span>, <span>'+sent_time+'</span></p>',
											'</li>',
										'</ul>'
									].join('');

	chat_board.innerHTML = template;
});

////////////////////////////////////////////////////////////////////
//back-btn 눌렀을 때 채팅창 숨기기
$('.back-btn').on('click',function(){
	$('.chat-board').addClass('hide');
	$('.chat').addClass('hide');
	$('.chat-form').addClass('hide');
	$('.guide-msg').removeClass('hide');
});

//////////////////////////////////////////////////////////
// input에서 enter 쳤을때도 메시지 보이게 하기
$('.chat-form').on('submit',function(){
	makeMsg();
	chatAutoScroll();
	return false;

});
/////////////////////////////////////////////////////////////
//채팅창 전송버튼 눌렀을 때 메시지 보이게 하기
$('.chat-form button').on('click',function(){
	makeMsg();
	chatAutoScroll();
});

})(this,this.jQuery);
