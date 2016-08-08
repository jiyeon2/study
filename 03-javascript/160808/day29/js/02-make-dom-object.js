/*02-make-dom-object.js*/

/*-----------------------------------
DOM API이용하여 문서 객체를 동적으로 '생성'해보자
  -----------------------------------*/
 //<div id="div-wrap">this is division</div>
 var maked_division= document.createElement('div');
 // var maked_division_id_attr= document.createAttribute('id');

 var maked_division_text = document.createTextNode('this is division');
 //<ul><li>list item</li></ul>
 var maked_unordered_list= document.createElement('ul');
 var maked_unordered_list_item=document.createElement('li');
 var maked_unordered_list_item_text=document.createTextNode('list item');

 // console.log('div:', maked_division);
 // console.log('div_text:', maked_division_text);

 // console.log('ul:', maked_unordered_list);
 // console.log('ul > li:', maked_unordered_list_item);
 // console.log('ul > li_text:', maked_unordered_list_item_text);

/*-----------------------------------
DOM API이용하여 문서 객체를 동적으로 '조작'해보자
부모_노드.appendChild(자식_노드)
  -----------------------------------*/
// <div>this is division</div>
 maked_division.appendChild(maked_division_text);
 console.log(maked_division);

 //동적으로 생성한 <div>요소를 문서의 특정한 목적지에 추가(삽입)
 var target_place = document.querySelector('#parent > .child:last-child');

 target_place.appendChild(maked_division);

 /*------------------------------------------
 동적으로 생성된 <ul><li>list item</li></ul> 을 
 문서의 특정 요소 내부 마지막 자식으로 추가(삽입)
   ------------------------------------------*/
  // maked_unordered_list.appendChild(maked_unordered_list_item).appendChild(maked_unordered_list_item_text);
  // console.log(maked_unordered_list);

  // var target_place2 = document.querySelector('#parent > .child:first-child');
  // target_place2.appendChild(maked_unordered_list);

maked_unordered_list.appendChild(maked_unordered_list_item);
maked_unordered_list_item.appendChild(maked_unordered_list_item_text);

// console.log(maked_unordered_list);

// 목적지에 해당하는 요소를 직접 생성한 후 문서에 붙임

//<div id="target-container"></div>
var target_container = document.createElement('div');
// setAttribute(attribute, value);
target_container.setAttribute('id','target-contaienr');
document.body.appendChild(target_container);
// target_container.appendChild(maked_unordered_list);

// 이벤트 발생시-탭메뉴 더보기 버튼누르면 ->동적으로 생성하여 문서에 붙이기 
// 버튼 클릭시 모달윈도우 생성 - 없던요소 만드는것

var target= document.body.firstChild;
// console.log(target.parentNode);

target.parentNode.insertBefore(target_container, target);
//타겟의 부모노드를 명확히 안다면
document.body.insertBefore(target_container, target);



function prependChild(child_node, parent_node){
	parent_node.insertBefore(child_node, parent_node.firstChild);
}

