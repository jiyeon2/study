> [스타트업 매칭](http://dcamp.kr/event/apply/1284) ~7/6까지 관심기업, 이력서, 지원서

> 배운 내용 복습 철저히 하자! 문제 내면서 하기
> 지난 시간 선생님 코드 내용 보고 주석 못쓴거 정리하기

###시험 풀이
- css @charset(언어인코딩)은 최상단에 위치해야함!
- @media는 아무데나 들어가도 됨
- 선택자는 간결한 게 좋다
- **선택자 매우매우 중요!!! `선택자 마스터하기!!`**

###모듈러디자인 = 모던디자인
- 작고 재사용 가능한 요소들이 큰 시스템 구성

###속성 선택자
1. [attr] : attr 속성을 가진 요소 선택
2. [attr="value"] : attr 속성의 값이 정확하게 value인 값만 가진 요소 선택
3. [attr|="value"] : 하이픈으로 구분된 값 가질 때, (-)으로 구분된 단어가 일치할 때 선택
```
[lang|="en"]{ text-decoration: underline; }

<p lang="en-US">Lorem ipsum</p>
<p lang="en-GB">Lorem ipsum</p>
```
4. [attr~="value"] : 공백으로 구분된 값들 가질 때, 공백으로 구분된 단어가 일치할 때 선택
```
[class~="container"]{ border: 1px dashed #cacaca; }

<div class="spain container">
    <p lang="sp">Mujer uno dolor</p>
</div>
```

- w3c school language code 국가코드, country 코드 잘 모를 때!

- `ctrl+shift+y` :  px 단위 em 변환
- ctrl+d+k : selection - 서브라임 단축키
- px to em 단축키?

- 스타일 적용이 안되면 적용이 안되는 스타일 있다는 것도 알아야 함!
- :visited는 색깔 관련된 속성만 이용 가능, 배경이미지 안들어감


## 가상(유사, 의사)선택자 Pseudo class
###상태디자인(State Design) 선택자
1. 기본상태(normal)
2. 커서가 올라간 상태(Hover)
3. 커서로 누른 상태(Active)

###하이퍼링크<a href> 상태디자인
1. a:link 기본상태
2. a:visited 방문한 상태
    + visited는 색 관련 스타일만 적용 가능. 배경이미지 적용 안됨!
3. a:hover 커서 올라간상태
4. a:active 커서로 누르고있는 상태
5. a:focus 키보드 포커싱 상태
    + 포커스 상태는 화면에 시각적으로 표현되어야 함!! 브라우저 기본상태는 잘 안보이니까 border 아웃라인 디자인 해주기

>[tab으로 접근 가능한 요소?](http://dev.zzoman.com/2014/04/28/access-drop-down-navigation-with-keyboard/) = focus가능한 요소?
포커스 가능요소는 링크, 이동가능한 요소들=  a, form 요소들 
Tab 으로 접근이 가능한 태그는 tabindex를요소로 가지고 있는 태그인 a, area, button, input, object, select, textarea 가 있다. 

- a:focus:hover{} 포커스 가 있는 요소에 마우스를 올리면 적용됨
- 마우스 사용하지 못하는 상황에서도 클릭 가능한 요소 알 수 있도록, tab키 이용해서 포커스 간 부분은 테두리 눈에 띄도록!! 
- box
    + outline | border
        * outline은 시각적 효과만 나타내는 테두리
    + outline-offset
        * outline과 짝으로 쓰임, outline 두께 설정 가능

### 자식선택
1. :first-child
2. :last-child
3. :nth-child() 
- 크로스 브라우징 문제로 last-child나 nth-child는 다른 방법으로 대체하는 게 나을수도 있다 canIuse-selector적용 되는 브라우저 검색!
- a:only-child  a요소이면서 유일한 요소일때 적용

##과제
- 시안 만들기(만들 수 있다면) - 목요일에 이걸 만들고 만든거 토대로 사이트 만들것!
- 포토샵 툴 익숙해지기-툴테크닉!!

- 팀 활동: 웹사이트 시안 매 주 하나씩 만들기
- 벤치마킹, 모방도 좋음

- 구조를 짜기
- 포토샵 웹사이트 구조짜는 영상 찾아보기
- 해외사이트 psd로 연습

- 내일은 오전 스크럼 없음 
- 9시전까지 일찍와서 주어진 주제로 팀 활동함
- 그 후 css타이포그래피, 레이아웃 배움 중요중요

- 목- collaborabion 깃 보충

- 아침 팀 활동


###스터디

###참여기업특강 - SENTBE
- 해외송금서비스 편하고 빠르고 싸게
- pooling 공동구매 개념
- angular2.0 / react
- front-end 언어, 철학에 대한 패턴에 대한 고민 필요, 프레임워크 자체에 얽매이지 말것!
- 유저인터페이스에 대한 리서치까지는 아니더라도 사용자에 대한 이해도, 편리함에 대한 집착 필요