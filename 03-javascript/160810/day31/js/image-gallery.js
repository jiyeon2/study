var btn1 = query('.button1');
var btn2 = query('.button2');
var btn3 = query('.button3');
var box = query('.gallery_box')


function paint(color){box.style.background = color;}
//버튼 눌렀을 때 색깔 바꾸기
// btn1.onclick = function(){paint('red')};
// btn2.onclick = function(){paint('orange')};
// btn3.onclick = function(){paint('yellow')};

var hasImg = false;

function makeImg(){
	//img 요소가 존재하지 않을때만 요소 생성
	if (!hasImg){
		var img = document.createElement('img');
		img.setAttribute('src','');
		img.setAttribute('alt','');
		box.appendChild(img);
		hasImg = !hasImg;
	}
}

var img_path = 'img/';

btn1.onclick = function(){ 
	makeImg(); 
	var img=query('img');
	img.src= img_path+'img1.jpg';
}
btn2.onclick = function(){ 
	makeImg(); 
	var img=query('img');
	img.src= img_path+'img2.jpg';
}
btn3.onclick = function(){ 
	makeImg(); 
	var img=query('img');
	img.src= img_path+'img3.jpg';
}