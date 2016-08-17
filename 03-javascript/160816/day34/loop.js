/*--------------------------------------
javasript loop statement
-----------------------------------------*/

/*--------------------------------------
while문
-----------------------------------------*/

var boo = true, m = 10;

while(boo){
	console.log(boo ? '참참참': '거짓거짓');
	// if (--m >0) {//9,8,7,6,5,4,3,2,1}
	if (m-- >0) {//10,9,8,7,6,5,4,3,2,1
		boo = ! boo;
	}
}

//ECMAScript 2015 Syntax
var cleanWhiteSpace = (el=document) =>{
	var current_node = el.firstchild;
	while(current_node){
		if(current_node.nodeType === 3 && /\s/.test(current_node.nodeValue)){remove(current_node);
		}else if (current_node.nodeType === 1){
			cleanWhiteSpace(current_node);
		}
		current_node= current_node.nextSibling;
	}
};
//do ~while 문


/*--------------------------------------
for문
실행 흐름 순서를 기억하라
1) 변수 선언
2) 변수에 값 할당 
3) 조건비교
-----------------------------------------*/
for( var i =0, boo = false; i < 10; i++){
	// if (i === 9){
	// 	boo= !boo;
	// }
	//이 코드는 아래처럼 작동 가능
	(boo = i ===9 ? !boo : boo) 
// 위 아래 ㅗㅋ드를 병합하면...
 console.log((i === 9? !boo : boo) ? '참참참':'짝짝짝');
}

// for문 continue를 사용하는 예제 : 특정조건에 해당하면 다음에 나오는 코드 실행하지 않고 다음 조건으로 점핑
var fruits = ['바나나',true,'딸기', false,'포도',null,'수박'];
fruits.push(function(){});
fruits.push({'name':'object'});

var real_fruits = [],
		fruit,
		k = 0,
		o = fruits.length;
//for문의 첫 선언부분은 밖으로 뺄 수 있다
for( ; k<o; k=k+1){
	fruit = fruits[k];
	if(isType(fruit) !== 'string'){
		console.log(fruit);
		continue;
	}
	real_fruits.push(fruit);
}
console.log(real_fruits);

// 예제 - continue;
var collection = document.body.childNodes;
for(var el_collection = [], i = collection.length-1; collection[i]; i--){let node =collection[i];
	if(node.nodeType === 3 ||isElName(node,'script')){ //#text이거나ㅏ <script>이면 넘기고 조건확인으로 이동
		continue;
	}
	el_collection.push(node);
}
console.log(el_collection);

// --------------------------------
// // 없는 기능은 만들어서 쓸 수 있어야함!! 이런거
// //break;
// var units = 'px rem em % vw vh vmin vmax'.split(' ');// 반복문 빨리 끝내려면 많이 사용되는거 앞쪽에 배치
// var unit;
// var i = 0;
// var l = units.length; // 실제로는 다 for문 밖에서 선언한것처럼 작동하므로 이렇게 써도 됨



// for ( ; i<l; i++){
// 	unit = units[i]
// 	console.log(unit);
// }

// //ECMAScript 2015 <for ~ of >문 지원함
// // for (let unit of units){
// // 	console.log(unit);
// // }


// break 예제
var units = 'px rem em % vw vh vmin vmax'.split(' ');
var unit;
var i =0;
var l = units.length;

var demo_container =query('.demo-container');
var get_value = getStyle(demo_container, 'margin-top');

function getUnit(value){
	var i=0, l=getUnit.units.length, unit;
	var reg;
	for( ; i<l; i++){
		unit = getUnit.units[i];
		if(value.indexOf(unit) > -1 ){
			break;
		}
	}
	return unit;
}
//함수 또한 객체이기 때문에 속성을 가질 수 있다
getUnit.units = 'px rem em  % vw vh vmin vmax'.split(' ');

for(; i<l;i++){
	unit = units[i];
	//console.log(get_value.indexOf(unit)>-1);
	if(get_value.indexOf(unit) > -1){
		//특정 단위가 존재한다
	}
	// console.log(unit);
}

function removeUnit(value){
	var unit = getUnit(value);
	removeUnit.unit = unit;
	var split = value.split(unit);
	return split[0];
}
