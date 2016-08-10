/*--------------------------------------
dom api

- target_node.parentNode.replaceChild(replace_node, target_node)
- node.cloneNode()
-----------------------------------------*/
/*--------------------------------------
노드교체 - 위치 교체가 아닌, 이전 노드 삭제
삭제된 이전노드는 결과값으로 반환됨.
-----------------------------------------*/
var replace_p = createNode('p','replaced paragrph');
var body_firstElChild = body.replaceChild(replace_p, body.children[0]); // 대체된 요소 반환받음

/*--------------------------------------
노드복사
-----------------------------------------*/
var clone_replace_p = replace_p.cloneNode(); // <p>만 복제 
var deep_clone_replace_p = replace_p.cloneNode(true); // <p>의 모든 것 복제

// console.log('일반 복제: ', clone_replace_p);
// console.log('깊은 복제: ', deep_clone_replace_p);

// prependChild(body, deep_clone_replace_p);

// for (var i=0; i<10; i++){
// var clone_replace_p = replace_p.cloneNode(); // <p>만 복제 
// prependChild(body, deep_clone_replace_p);}


// 함수를 만들기 전에도 설계 필요. 
// 설계
// 이 함수는 어떤 일을 하나?
// 전달된 2개의 노드 위치를 교체한다
// 이 함수를 왜 만들어야 하나? 내가 원하는 게 없네 그럼 만들어야지
// 매개변수 1(인자 1) : 이동시키고자 하는 노드
// 매개변수 2(인자 2) : 이동시키고자 하는 위치에 있는 노드
function changePositionNodes(moving_node, target_node){

}

