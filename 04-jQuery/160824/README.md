이벤트객체를 넘겨준다??

이벤트(사용자의 동작. 예: 마우스 클릭) 발생->
이벤트객체 동적으로 생성 ->
이벤트리스너(=이벤트핸들러, 이벤트에 연결된 함수, 이벤트 발생시 처리할 코드)에 인자로 전달됨

```js
function foo(evt){
    console.log(evt);
}
button.onclick = foo;
// 이벤트 바인딩 시 evt라는 파라미터 쓰지 않는다
// 이벤트 객체는 자동으로 foo 함수에 전달된다
```

eventTarget.addEvetnListner(이벤트 종류, 이벤트리스너 함 [, useCapture(default: false)]);

useCapture : capture 초기화할것인가 말것인가 true, false로 전달

- event bubbling, capturing
    + 
```js
function modityText(){
    var h2=document.getElementsByTagName('h2')[0];
    h2.firstChild.nodeValue='hihi';
}
var el = document.getElementsByTagName('a')[0];
el.addEventListner('click',modifyText)
```
