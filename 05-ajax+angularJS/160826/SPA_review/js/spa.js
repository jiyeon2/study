(function(global, XHR){
	'use strict';
	 
	 var xhr = new XHR;
// console.log(xhr);
var view = document.querySelector('main');
var nav_links = document.querySelectorAll('nav a');

xhr.onreadystatechange = function(){
	console.log(this);
view.innerHTML=this.responseText;
}


// console.log(nav_links.length);

for(var link, i = nav_links.length - 1; nav_links[i]; i--){
	link = nav_links[i];
	// console.log(link);
	link.idx = i;
	link.onclick = viewUpdate;
}


var views = 'home works contact about'.split(' ');

function viewUpdate(index){
	xhr.open('GET', 'view/'+views[index]+'.html');
	xhr.send();
	console.log('view/'+views[index]+'.html');
	return false;
}


})(this,this.XMLHttpRequest || this.ActiveXObject('Microsoft.XMLHTTP'));