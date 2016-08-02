#### 퀴즈 풀이
- img vertical-align적용하거나 float 주면 하단의 공간 사라짐
- text-transform: uppercase lowercase capitalize / font-varient : small-caps
- IR: 이미지 설명을 text-indent 이용해서 안보이게, 스프라이트 이미지 이용할 때 속도, 성능 올리기 위해 사용
- font: fontsize, font-family 필수
- overflow 속성값 visible, scroll, auto, hidden
- visibility: hidden 투명인간같은것, display: none; 접근성 없음


### css 타이포그래피 속성
- [line-heignt](http://ohgyun.com/572) : 단락의 줄 사이 간격. 폰트사이즈에 맞게 변하도록 상대값 (1.5~2정도)사용 권장.  
    + px과 같은 고정값 사용시 글자 크기 키우면 글자들이 다 붙음. 
    + line-height값은 자식에게 상속됨. 부모{font-size:20px; line-height:150%}면 자식의 line-height는 150%가 아니라 20px*150%= 30px로 계산된 값이 상속됨. 그러므로 해당 요소의 font-size에 맞는 비율의 line-height 적용하려면 퍼센트값 아닌 숫자 이용할것!

- text-transform: 요소의 텍스트를 대문자화 하는 방법
    + uppercase: 모든 문자를 대문자로
    + lowercase: 모든 문자를 소문자로
    + capitalize: 단어의 첫 글자만 대문자로

 - font-variant (variant - 원본이 존재하고 버전1, 버전2 있는 것? / transform - 원본을 수학적으로 변형)
    + small-caps: 모든 문자를 대문자로, 단어의 첫 글자만 큰 첨자, 나머지는 작은 첨자로(첫 글자 제외한 나머지의 높이는 소문자x크기와 같다)

- letter-spacing: 자간
    + 

- [IR(Image Replacement)기법](http://darum.daum.net/convention/css/css_ir)
    +  이미지의 대체텍스트 제공하기 위한 css 기법. 여러가지가 있는데 아래의 phark method 방식 권장
    +  고대비모드에서 IE는 배경이미지를 없앰. 배경이미지와 글자 모두 화면에 표시되지 않아 요소 존재 여부를 알 수 없음. 저시력장애인이 이용할 때 접근성 문제 발생.
    ```
    <a href="#">트위터로 이동</a>
    ------
    a{  display:block;    <!-- a요소 크기 지정하기 위해   -->
        width: 30px; 
        height: 30px;
        background-image: url("../img/twitter.png");
        background-repeat: no-repeat;
        overflow: hidden;   <!-- 요소의 범위 넘쳐 나가는 내용 보이지 않게 함. 키보드로 탐색시 포커스가 화면 밖으로 나가는 것 방지하기 위함.  -->
        text-indent: -9999em;  <!-- a요소의 컨텐츠 내용(글자)을 화면에서 보이지 않게 함. 그럼 배경 이미지만 보임!--> 
    }
    ```
##float
