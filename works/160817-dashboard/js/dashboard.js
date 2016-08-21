(function(global){
	'use strict';
var following = query('.following');

function init(selector, name, time, msg){
 	selector = selector.slice(1)
  var follower = newNode('div',selector);
	var follower_img = newNode('span','follower-image');
	var follower_desc = newNode('div','follower-desc');
	var follower_name = newNode('p','follower-name');
	var follower_state = newNode('p','follower-state');
	var follower_connect = newNode('span','follower-connect');
	setClass(follower, 'follower');
	addTextNode(follower_name, name);
	if(msg){
	addTextNode(follower_state, msg);
	}else{
	addTextNode(follower_state, 'Started Following you!');
	}
	addTextNode(follower_connect, time);
	follower_desc.appendChild(follower_name);
	follower_desc.appendChild(follower_state);
	follower.appendChild(follower_img);
	follower.appendChild(follower_desc);
	follower.appendChild(follower_connect);

following.appendChild(follower);

}

init('.jy','jiyeon','1d');
init('.jy2','jiyeon2','2d');
init('.js','jisu1','3d');
init('.jy4','jiyeon4','4d');
init('.js','jisu2','5d','hi!');
init('.jy6','jiyeon6','6d');
init('.js','jisu','1d');
init('.goya','goya','1d');
})(this);