- normal flow : 위쪽 요소의 margin, padding, border변경시 그 아래 있는 모든 요소에 영향을 줌

- outline: 시각적으로 이용자에게 변화상태 알려줄때만 씀. normal flow에서 아래 요소, 레이아웃에 영향 안줌

- margin
    + `투명`함! 색 안먹음. 
    + -형태의 `음수` 가질 수 있다. 다른요소는 안됨. 
- padding
    + 컨텐츠와 보더 사이의 공간을 넓힐 때 씀
    + 색 입힐수 있다
    + 음수 가질 수 없다
- border
    + border-top 과 border-left는 모서리에서 만남
    + css shape검색해보기! -  css로 삼각형등 도형 만들 수 있다!!
    + 배경색은 보더 아래까지 미친다, 컨텐츠영역은 보더까지 포함

- block element, inline element
    + 가상요소는 기본적으로 inline.
    + width height주려면 display: inline-block이나 block지정

- 마진 상하는 겹침. 좌우는 겹치지 않음. margin collapsing
- text자체는 인라인. 그걸 감싸는 p가 블럭


- em단위 사용의 어려움!
    + em단위는 부모요소의 font-size를 기준으로 함
    + font-size는 자식 요소로 상속됨. 계층구조가 바뀌면 유지보수 관점에서 상대적인 em단위 사용이 어려움
- rem: root요소인 html의 font-size를 기준으로 함
    + 기본적으로 16px
    + IE9,10에서는 부분적용
        * font-size에서는 사용가능
        * font: 속기형에서는 사용 불가
        
> 미디어쿼리 가능한 환경?조건 에는 어떤것들이 있을까?

- css미디어쿼리
    + @media 환경 and 조건1 and 조건 2{ }
    + @media screen and (min-width:400px) and (max-width:1000px){ }
    + 사용자 수요, 통계자료 등 통해 중단점 결정
    + @media **only** screen ~ : only 붙이지 않으면 일부 구형 브라우저(IE6,7,8)은 screen and 뒤에 이어지는 조건 해석하지 않고 적용하는 경우 있음. 의도하지 않는 결과 피하기 위해 "only"를 붙여 아예 구형 브라우저가 해석하지 못하도록 함.
    + 미디어쿼리 조건문 안에서 em은 rem과 같이 16px을 기준으로 적용됨!
        * @media only screen and (max-width: 37.5em)처럼 쓸 수 있다.

- inherit : 글자크기 상속받지 않는 input에 font-size:inherit 씀

- 표준에서 width: content까지
- 비표준에서 width:(IE기준) border까지
- doctype위에 뭔가 있으면 IE모든 브라우저가 비표준모드로 작동(다른 모드로 렌더링됨)시키므로 레이아웃 틀어짐

- 책"만" 보지말고, 책도 보고 **레퍼런스&스펙** 보고 공부할것! 
- 새로운단위 [vw, vh, vmin, vmax](http://css-tricks.com/viewport-sized-typography) - 이해 필요..

- 비표준모드의 IE에서는 margin: auto 설정 안됨
    + 부모에 text-align : center; 자식에 text-align: left 줘야함

-요소 가운데 정렬 시 margin-left, margin-right : auto; 작동되는 방식
    + 가운데 정렬 할 자식 요소에 너비를 줌.
    + margin-left를 auto로 주면 (부모너비-자식너비)인 나머지 부분이 margin-left값이 됨
    + margin-right:auto로 하면 margin-left의 값을 반 나눠서 margin-right에 할당
    
- 세로정렬
    + height와 line-height 같은 값을 주면 세로정렬됨
    + 폰트사이즈 제외한 나머지부분 위 아래 양분한 것 line-height
    + 웹의 타이포 구현 방식 line-height 가운데 font-size만큼 글씨가 차지하고 나머지 공간을 위아래로 양분 - > 이걸 이용해서 가운데 정렬 가능
- 블럭요소 vertical-align 적용 안됨, 인라인은 line-height 적용 안됨
- 이미지 아래 생기는 여백 - 이미지 자체에 vertical-align: bottom / middle
> studnt.oulu.fi/~laurirai/www/css/middle
> 예제 직접 만들기! 과제 - position부분 제외

-가상요소 ::before, ::after { content : attr(class);} 하면 요소의 클래스명이 표시됨. 클래스명이 많을 경우 요소에 `data-name=""` 속성 지정하고 { content : attr(data-name);} 쓰면 data-name속성의 값이 표시됨!

>이론개념 정립하기 위해 종이에 손으로 쓰기!@!@
기본기를 탄탄하게하자

- margin의 속기형
    + margin: top right bottom left;
    + margin: top right bottom;
    + margin: top right (top) (right);
    + margin: top (top) (top) (right);

- 마진설정 가능한것 블록, 상하마진값은 겹쳐짐
- 블록부모에게 패딩이나 보더값 없으면 자식요소 마진이 부모요소 밖으로 튀어나옴!
    + 의도치 않은 레이아웃 구성될 수 있다. 
    + 부모요소와 자식요소 사이 간격을 벌리고 싶은거라면 자식요소에 마진을 주기보다, 부모요소에 패딩을 주는 편이 낫다.
    
- 가운데정렬하는방법 2가지 ->문제있음. 해결위해 flex박스 사용할것이다
- 과제: 와이어프레임 만들기 / 박스형태로 어느곳에 무엇을 배치한다 표시, 화면설계

- 폰트와 텍스트는 다름!
    + 폰트: 글꼴, 글자 하나하나
    + 텍스트 : 타이포그래피, 
- 컬러시스템  red blue green => `white`
red green=>yellow
blue green=>cyan 청록 
red blue=>magenta 자주 
m y c =>black
- 컬러배색 책보다 많이 해봐야
- 서체종류 font-family / 서체 이름에 띄어쓰기 있을 경우 "맑은 고딕" 처럼 묶어줘야함, ','로 구분된 것은 앞에 있는게 우선적용, 없으면 그 다음 서체 적용, 다 없으면 컴퓨터에 있는것중에 serif, san-serif
- 사용자 컴퓨터에 서체 없을경우 웹폰트 이용해서 모두 볼 수 있게하기. 웹폰트 문제점-깜빡임
- 고딕계열san-serif/ Arial, Verdana,  
- 명조계열serif / Times New Roman, Georgia
- monospace일정한 간격 가진 서체/ Courier New 
- 서체는 유행탐, 벡터기술이라 확대해도 안깨짐
- [spoqa 깃헙블로그 글 읽기](https://spoqa.github.io/2016/06/03/localize-type-setting.html)! 스포카 한 산스체
    + css  `[word-break](http://aboooks.tistory.com/189)`: 아시아, 비아시아 언어 줄바꿈 제어
- 글리프??? 
    + 부호화한 문자를 그림으로 나타낸 영문자나 숫자의 글자체 혹은 기타 기호


- 만들고싶은 서비스 예)결제페이지 혹은 표 , 박스 텍스트로 만들기
- 에이스프로젝트 참기특

- 스터디
    + 마진 외부영역, 투명, 배경색 적용x, 음수 적용가능
    + 패딩은 내부영역, 색적용됨
    + 보더는 상하좌우 각각, 모서리부분 주의!
    + css shape??? - resource card
    + em, rem 
    + em:본인? 폰트사이즈를 기준, rem:루트인 html의 폰트사이즈 기준
    + 미디어쿼리 @media 환경 and 조건~~
    + line-height, height 같게 주면 가운데 정렬
    + font-weight: 숫자, 키워드로 적용가능. 숫자로 적용은 하위브라우저 적용 안되기도.
    + 픽셀 - 단위가 소수점일경우 브라우저마다 올림, 버림 다르므로 같게 보이려면 em단위로
    + 상하 마진 겹치면 큰 값으로 적용됨 -콜랩싱
    + em 적용의 어려움- 부모의 폰트크기 상속때문에 기준이 계속 바뀌어서 어려움
    + 미디어쿼리 중단점 사용할 때 and로 조건 붙여줌
    + 미디어쿼리에 only붙이면 레거시 브라우저가 못읽음, and 못읽어서 여러 조건 이상하게 해석할 우려 있으므로 
    + and 조건식에서 max-width: 까지 , min-width: 600이면 
    + 미디어쿼리 안에서 rem기본 단위는 16px, body에 따로 값을 지정해도! 
    + 요소 width 값 정했을 때 margin auto 주면 부모 전체 넓이-본인 크기 
    + 부모요소에 패딩, 보더값이 없으면 자식요소의 마진이 튀어나감. 
    + 부모요소 크기가 정해져있으면, 자식요소 마진값 늘리면 자식 자체가 부모 밖으로 나감
    + 보더의 색은 폰트의 색 상속받는다
    + 마진의 속기형 순서
    + 박스모델 마진, 보더, 패딩, 콘텐츠
    + li안에 img뒀을 때 의문의 빈틈 - vertical align;bottom or middle
    + em, rem - 부분지원 속기형에서는 사용불가
    + inherit : 부모에서 상속받아서 씀 - 부모에게 상속받지 않는 input 요소에 주로 사용
    + 폰트 색상 키워드, 헥스코드, rgb/a,
    + 폰트패밀리 : 폰트명에 띄어쓰기 있으면 ""로 묶는다, 