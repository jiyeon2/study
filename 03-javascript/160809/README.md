### DOM script - 동적으로 요소 생성하기

```js
//노드 생성
var parent = document.createElement('div');
//노드 속성 설정
parent.setAttribute('class','parent');
//텍스트 노드 생성
var parent_text = document.createTextNode('부모 노드입니다');
//부모 노드 안에 텍스트 노드 붙이기
parent.appendChild(parent_text);
```

- .createElement('태그이름') : 태그명으로 요소노드 생성
- .createTextNode('텍스트 내용') : 텍스트노드 생성
- .setAttribute('생성할 속성이름','속성값') : 속성노드 생성

- 부모노드.appendChild(자식노드) : 부모노드 내부 마지막 자식노드로 붙임

- 목표노드.parentNode.insertBefore(자식노드, 목표노드) : 목표노드의 부모를 찾아서 목표노드 앞쪽에 자식노드를 넣음

- 헬퍼함수로 prependChild(), insertAfter()함수 만들기
```js

//prependChild(자식노드, 부모노드) : 부모노드의 첫번째 자식으로 자식노드 추가
function prependChild(child, parent){
    parent.insertBefore(child, parent.firstChild);
}


//insertAfter(target,child) : 타겟노드 뒤쪽에 자식노드를 추가
function insertAfter(target,child){
    var next_node=target.nextSibling; //타겟노드의 형제요소
    var parent_node=target.parentNode; //타겟노드의 부모요소
    if (next_node){ //타겟요소의 형제요소가 존재하면
        parent_node.insertBefore(child, next_node)
    } else{ //타겟요소가 마지막 요소라면
        parent_node.appendChild(insert_node);
    }
}
```

- 헬퍼함수로 query(), queryAll() 만들기
```js
//.querySelectorAll() 단축하여 쓸 수 있는 함수
function queryAll(selector_str, context){
    //사용자 입력 데이터가 문자인지 아닌지 확인
    if(typeof selector_str !== 'string'){
        throw new Error('선택자는 문자열로 입력해주세요.')
    } // 조건이 참이면(문자열이 아니면 ) 오류발생
    if(!context){context=document;}
    return context.querySelectorAll(selector_str);
}

```

- 함수에서 전달인자 유효성검사에 쓰이는 에러메시지

|throw new Error('에러메시지'); | console.error('에러메시지')|
|--------|-------------|
|함수 멈춤|함수는 계속 실행됨|
|native javascript구문, 예전 브라우저에서도 사용 가능|신형 브라우저(?)에서만 가능|
|코드가 계속 실행되어야 하는 경우가 아니면 throw new Error사용 권장| . |


#### 버튼 눌러서 모달창 나타나게했다가 사라지게 하기
>makeModal(){ 모달창 내부 요소 생성하는 코드 }
>make_btn.onclick = makeModal;

이렇게만 쓰면 버튼 누를때마다 모달창 계속 생김

한번만 생성되도록 하려면
- makeModal()안에 modal이 존재하는지 아닌지 확인하기 위한 변수 생성(t/f값 담고있다)
- 모달 존재하면(변수값이 true라면) 
    + 모달 생성하는 코드 실행하지 않도록 함.   
    + 모달 존재여부 확인하는 변수값을 반전시킴 exist_modal = !exist_modal;
- makeModal이 이벤트함수로 연결된 버튼 눌렸을 때, 못누르게 만들기
    + makeModal()내부에 this.setAttribute('disabled', true);
    + 여기서 this는 makeModal()함수를 호출한 버튼을 의미함

- 버튼 누르면 removeModal()함수 실행
    + 방법1. .modal 찾아와서 제거
```js
var modal = query('.modal')
modal.parentNode.removeChild(modal);
```


+ 방법2. 함수 실행 전 컨텍스트를 변경해서 제거(???)
