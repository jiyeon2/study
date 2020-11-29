# 반응형 헤더 만들기

[웹사이트 따라만들기, 반응형 헤더편](https://www.youtube.com/watch?v=X91jsJyZofw&list=PLv2d7VI9OotQ1F92Jp9Ce7ovHEsuRQB3Y&index=14) 보고 만듦

배운 것 
- 박스모델로 컨텐츠와 레이아웃 구조 파악하기
  - 모바일과 웹 화면 모두 고려하여 의미에 맞게, 레이아웃 하기 편하도록 덩어리로 묶는다
  - 흐름에서 벗어난 요소는 화면상 같은 위치에 있어도 따로 둔다(햄버거 버튼같은 경우)
- flex 와 미디어 쿼리 적용하여 화면 너비에 따라 다른 화면 구성
  - 레이아웃 흐름이 수평이면 flex-direction: row, 수직이면 flex-flow: column 사용
- 웹폰트, font awesome icon 사용
  - 이미지가 아니므로 일반 폰트처럼 css적용할 수 있다
- script defer 속성
  - <script>태그 src속성으로 불러온 스크립트에만 적용할 수 있다
  - html이 로딩 된 후, DOMContentLoaded 이벤트가 발생하기 전에 스크립트가 실행된다
  - 문서에 추가된 순서대로 실행된다
- css variable 
  - :root{--myVarName: someValue;} 처럼 변수를 지정할 수 있다.(:root 의 경우 document.documentElement에 변수 저장)
  - javascript로 접근하기
    - 값 가져오기 : window.getComputedStyle(document.documentElement).getPropertyValue('--myVarName')
    - 값 저장하기 : document.documentElement.setProperty('--myVarName', someValue)
- 버튼이나 클릭하는 영역이 작은 경우 padding값을 주어 클릭할 영역을 넓힌다
  - a태그는 inline요소이므로 패딩값 넣고싶으면 inline-block으로 바꿔야함


