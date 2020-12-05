## 알게된것
- css에서도 변수 사용이 가능하다 --변수명: 값 형태로 선언하고, 사용할때는 var(--변수명)으로 쓴다
- 내용이 있는 html 문서에서 document.documentElement는 항상 html 엘리먼트를 가리킨다
- 전역에서 변수 i = 3 으로 선언해두고, 함수 내에서 i = 10으로 선언한 후 i 를 출력하면 10이 나오듯이 css변수도 자신과 가까운 부모에 선언된 변수의 영향을 받는다
```css
html{
    --colorVar: red;
}
div {
    --colorVar : blue;
}
div p {
    color: var(--colorVar); /*blue*/
}
```


## 궁금한것
- :root{} css변수를 여기 선언하던데 왜 여기 쓸까 이게 뭘까
- html 엘리먼트 스타일 속성 지정할 때 document.documentElement.style.setProperty() 를 쓰던데 style['--color']이렇게는 못쓰는건가
