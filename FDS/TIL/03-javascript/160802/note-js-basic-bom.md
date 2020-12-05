#Javascript

- [자바스크립트 재입문하기 - MDN](https://developer.mozilla.org/ko/docs/A_re-introduction_to_JavaScript)

- javascript core - ECMA script 언어
- DOM : Document Object Model 문서 객체 모델
- BOM : Browser Object Model 브라우저 객체 모델

- 자바스크립트는 서버에 접근하지 않고 사용자단에서 빠르게 일처리 위해 만들어진 가벼운 언어
- 자바스크립트의 아버지 : Brendan Eich
- ECMA script 는 자바스크립트의 표준 명칭
- ECMA 262-3 현업에서 주로 사용되는 버전

- 자바스크립트 엔진은 자바스크립트 문서를 해석해서 실행하는 통역사같은것
- 자바스크립트 엔진이 좋아야 속도가 빠름
- 성능 고려하지 않거나, 서버 요청이 많은 경우, 성능 최적화 안한 코드는 속도가 느려짐
- [DOM 자바스크립트 성능 향상법 몇개](http://blog.javarouka.me/2012/03/javascript-performance-with-coding.html)
- 특징 : dot syntax (window.innerWidth 처럼 객체의 속성에 . 으로 접근)
- 함수명은 동사형태로 씀 getName()



### BOM (Browser Object Model)
- 브라우저 객체 모델 
    + 객체 모델이란?? 가계도 같은것. 객체들 간 관계망 보여줌(부모-자식)
- `window`
    + 브라우저에 내에서 모든 객체에서 접근 가능한 최상위 객체
    + 전역객체
- 윈도우 객체 아래 document, screen, location, frame 등 여러 객체(각각 세션이라 부름)
- 각 객체가 가진 속성은 브라우저마다 다름. (window.scrollX = window.pageXOffset)

##### window : 프론트엔드 사이드에서 최상위객체, 웹브라우저 가리킴
- window.innerWidth 브라우저 너비
- window.innerHeight 높이
- window.pageXOffset = window.scrollX 가로 스크롤 위치
- window.pageYOffset = window.scrollY 세로 스크롤 위치 (크롬에서는 둘 다 지원, 어떤 브라우저는 하나만 지원)
- window.open(주소) 새탭으로 띄우기
    + 사용자관점에서 동의않고 새창띄우는건 사용자 경험 측면에서 좋지 않음, 지금은 잘 안씀
- window.resizeTo(x,y) 브라우저 크기 width: x, height: y 로 변화(절대값)
- window.resizeBy(x,y) 브라우저 크기 현재 값에서 +x, +y 만큼 변화(상대값) 
    + 최근 브라우저는 무시함- 사용자관점에서 필요없거나, 악용 우려되는 속성은 지원 안함
- window.moveTo(x,y) 브라우저 이동 width: x, height: y 로 변화(절대값)
- window.moveBy(x,y) 브라우저 이동 현재 값에서 +x, +y 만큼 변화(상대값) 

- window.setInterval(할일, 시간) : 반복적으로 할 일을 주기마다 실행
    + 할일은 함수(괄호 없이), 시간은 밀리초(1/1000s)단위
- window.setTimeout(할일, 시간) : 정해진 시간 후 1회만 실행

- window.requestAnimationframe : setInterval은 cpu사용, requestanimaitonframe은 gpu사용하여 움직임이 부드러움

- 사용자가 직접 함수 실행시 실행연산자() 필요
    + init(); 하면 init 함수 실행됨
- 이벤트가 함수를 처리할 때는 함수가 바로 실행되지 않으므로 실행연산자() 필요없음
    + window.setTimeout(`countDown()`,1000);
    + 저렇게 쓰면 countDown()실행된 결과값이 들어감

----------

- [repaint reflow](https://github.com/nhnent/fe.javascript/wiki/Reflow%EC%99%80-Repaint)
- [Reflow or Repaint(or ReDraw)과정 설명 및 최적화 방법](http://mohwaproject.tistory.com/entry/ReflowLayout-%EA%B3%BC-Repaint-%EA%B3%BC%EC%A0%95-%EB%B0%8F-%EC%B5%9C%EC%A0%81%ED%99%94)
    + html 문서 파싱 -> DOM 노드 트리 생성(요소별로 나눠지는듯하다) -> 각 노드가 화면에 정확한 위치에 표시되도록 배치하는 과정(reflow)-> 노드 그리는 과정 visibility, outline, background-color등 시각적 속성을 입힘(repaint)
- 애니메이션 시
       + position: absolute에서 left값 변화하게 만들면 cpu사용하여 성능저하됨
       + transform: translateX()는 gpu사용하므로 권장함

--------------


- API 사용설명서 같은것
- DOM API : 문서객체에 접근하는 방법에 대한 사용설명서
- DOM - 문서에 있는 객체에 접근하는 것은 보이지 않는 비용이 듦. 필요할 때 마다 객체에 접근하지 말고 한번 접근했을 때 가져온 값을 변수에 넣어둬야함

##### location 객체
- 주소창에 접근 가능
- 쿼리스트링, 포트넘버
- location == window.location (전역객체인 window는 생략가능)

##### history 객체
- history.forward
- history.back
- history.go() 

##### screen 객체
- 사용자가 보고있는 화면 정보를 담고 있다
- window 하위에 위치해있지만, 종속된 개념은 아님
- screen.availHeight : 작업표시줄 제외한, 사용자가 사용할 수 있는 화면 높이 - 모니터 화면
    + window.innerHeight - 브라우저 창 높이
- screen.orientation : 모바일에서 많이 사용

##### navigator 객체
- 브라우저 정보 관장. 웹브라우저라는 애플리케션의 정보 안내
- navigator.userAgent 브라우저 식별자

## document 객체
- 웹브라우저 문서객체 (html 요소들)에 접근 가능
- 실무에선 주로 document 객체에 접근하여 작업하는 일이 많으므로 잘 알아두자
- document.activeElement
    + focusing된 요소, 활성화된 요소 의미. 웹상에서는 멀티포커싱 안되므로 1개.
    + 접근성 관점에서 중요!
    + 모달 팝업 띄운 후 모달팝업창 껐을 때 이전에 포커싱 되어있던 요소로 돌아가야 하므로, 이전 포커싱 된 요소 기억하기 위해 필요

- 자바스크립트는 동적제어 가능
``` html
<script>
//html 문서가 표준모드인지, 비표준모드인지 확인

    var standard_mode = document.compatMode == 'CSS1Compat'; // 문서의 호환성모드가 표준인지 비표준인지 비교. 표준이면 standard_mode에 true, 비표준이면 false 값 대입됨

    var html = document.documentElement; //html이라는 변수에 문서객체모델에서 가져온 html 대입

    if(standard_mode){ //standard_mode 값이 true이면 = 현재 문서가 표준모드라면
        html.setAttribute('class','standard'); // html요소의 'class'속성에 'standard'값 넣음
    } else { //stadard_mode 값이 false이면 = 현재 문서가 비표준 모드이면
        html.setAttribute('class','no-standard'); //html요소의 'class'속성에 'no-standard'값 넣음
    }
</script>
```

- Browser object model은 dom에 비해 중요도 높지 않음. 필요하면 브라우저 콘솔에 치면 다 나오니까 외울 필요는 없지만 정리해두자!