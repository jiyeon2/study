>nav class="lnb"  nav 종류 찾아보기! 네이버 코딩 스타일가이드?? 같은것
> [navigation class명 네이밍](http://micheese.blog.me/220532351960)

>  emmet ! 내용 lang, meta http 부분 수정하기

> 아침 group activity코드 작성한 것 올리기 
> [github의 페이지 기능 이용](http://dogfeet.github.io/articles/2012/github-pages.html)

>퀴즈 과제올리기!![1](http://www.slideshare.net/einsub/svn-git-17386752)

###Javascript
- `<script>` 삽입 위치 [1](http://blog.javarouka.me/2012/03/javascript-performance-with-coding.html)
    + script 코드는 head 내부 혹은 body 내부에 사용.
    + html 요청시 css파일 병렬식으로 옮겨옴(동시다발적)
    + js는 직렬식으로 받아와서 느림. 
    + 브라우저가 js 코드 만나면 js코드 해석하는 동안 아래쪽 코드는 실행되지 않음!
    + body 내 다른 요소 사이사이에서 불러오는 건 비추천.
    + js 공통적인 코드 분리하여 재사용 하는 편이 좋다. 한 페이지에서만 적용되는 경우는 내부에 써도 됨.

###기타 HTML요소들

- `object` :flash, images, audio 등 삽입시 사용. 플래시 사용 안하므로 오늘날은 안씀. 
    + `<object type="image/gif" data="../img.img">대체내용</object>`  
    + 위 코드는 대신 이미지 태그 쓰면 됨. 표준에 있다고 다 쓸 필요는 없음
- parameter
- long quotation : `blockquote` 내부에 `cite`(인용구 말 한 사람)
- short quotation : `q`, 
- `abbr`: 줄임말. 표준요소
- ~acronym~ : html5에서는 안씀. 이것도 줄임말, 두문자어
- `address`: 잘 안씀. 웹상 연결될 경로, 이메일주소, 사이트 등. 내부에 블럭요소 올 수 없다.
    + `<address> <a href="mailto:asdf@gmail.com">이메일주소</a> </address>`

###인용
- 긴 인용  `<blockquote></blockquote>`
- 짧은 인용`<q></q>` (잘 사용하지 않음)

###축약
- NN:netscape navigator (standard)
    +`<abbr title="eXtensible Markup Language">XML</abbr>`
- IE (Deprecated)
    +`<acronym title="eXtensible Markup Language">XML</acronym>` (사용하지 말것, 비표준임)

### 웹 정보
    <address>
        Email: <a href="mailto:asdf@gmail.com">mailto:asdf@gmail.com</a><br>
        phone: <a href="tel:010-7894-7894">010-7894-7894</a>
    </address>

- `ins` : insert text, 불필요한 문장 대신 새로운 단어 문장을 삽입.
- `del` : 불필요한 문장 삽입. 가운데 strike 효과. 이 효과 위해서 쓰면 안됨. 의미 생각해서 쓰기!

- `frame` : 접근성 문제.
- 과거 프레임 쓸 수밖에 없던 이유 : ajax 발달하지 않아 페이지 일부 바꿀 수 없고 전체를 바꿔야 했음
- frameset doctype 사용시 body 사용하지 않음 [1](https://www.w3.org/TR/html4/sgml/framesetdtd.html)

##구조를 분석하는 힘!
- 이미지 내용을 구조화 - 사람마다 다르게 봄
- list 많이 사용
- 세상의 모든 것은 구조화 할 수 있다!
- 마이크로 포맷??[1](http://microformats.org/)  복잡해서 지금 거의 안씀

~~태그로 마크업 -> 표목,목록이랑 비슷비슷한 느낌~~


- W3C xhtml2.0 중단 후 WHATWG의 웹 애플리케이션 개발이 가능한 web application1.0 , Web form 2.0 => HTML5
- 표준은 계속 개정됨.
- HTML5 = HTML(new element)(시멘틱 웹, 시멘틱 요소, canvas 본격 활용) + **Javascript API**(사용자 위치정보 활용, 클라이언트 데이터 저장, 오프라인 웹 구현)
- HTML5 플러그인 사용하지 않고도
- future of html5
- jeremy 'html5 for web designers'

> 올려주신 키노트도 보기!!!@!@@!

###HTML5 layout 요소

- 모든 section에 header, footer 넣지는 않는다. 
- footer를 header보다 먼저 넣어도 문제는 없음
- hgrounp 사라짐
- `<time>어제 밤</time>`
- `figure` 

####HTML4.01 or XHTML 1.0 Markup
```
    <div id="header"></div>
    <div id="gnb"></div>
    <div id="main"></div>
    <div id="sidebar"></div>
    <div id="footer"></div>
```

####HTML5 Markup 
```
<header class="page-header"></header>
<!-- 어떤 헤더인지 명시할 것!!-->
    <nav></nav>
    <article>
        <section>
            <article></article>
        </section>
    </article> 
    <main></main>
    <aside></aside>
    <footer></footer>
```

- section 요소(header, footer는 섹션요소가 아님) 안에는 header, footer 들어올 수 있다. body, nav 모두 section요소임
- 문서 내에서 main은 딱 한번만. section은 여러개 나올 수 있음
- id="고유한-이름"
    + id : 정말 필요한 경우가 아니면 가급적 쓰지 않음, aria나 form에 사용. 대신 class 사용. id 우선적이므로 그렇다???
    + >aria로 region, group??
- class="다른-이름 다른-이름1"   동일 기능, 모듈에 사용
    + 구조 짤 때 재사용 염두!@!@!@ 
- section(범용) vs. article(독립)
    + section : 연예 섹션, 정치 섹션. 분리할 수 없는 것???, 제목이 꼭 필요(눈에 보이든 안보이든 필요)
    + article : 개별 기사, 위젯 애플리케이션 같은것. 따로 떼서 독립적으로 사용 가능한 것
    
    + article 요소는 이 영역을 독립적으로 다른곳에 옮겨놔도 하나의 완전한 문서 또는 섹션이 될 수 있는 ‘재 사용’ 가능한 또는 ‘배포 가능한’ 본문 영역
    + 참고! [http://naradesign.net/wp/2011/05/27/1483/](http://naradesign.net/wp/2011/05/27/1483/)
    + [mdn-html5문서의 섹션과 윤곽](https://developer.mozilla.org/ko/docs/Web/HTML/HTML5_%EB%AC%B8%EC%84%9C%EC%9D%98_%EC%84%B9%EC%85%98%EA%B3%BC_%EC%9C%A4%EA%B3%BD)

- 문서 내 h1은 한번만 쓰는게 나을 것 같다.(validation 경고) section의 제목은 h2부터

### web forms2.0
- `input type="number"`

### html4 콘텐츠 모델

요소 확인시 web developer > outline 누르면 페이지 내에 테두리 표시됨

-block요소는 가로, 세로 폭 설정 가능
-inline요소는 가로, 세로 폭 설정 불가능
-inline-block 는 가로, 세로 폭 설정 가능
```
*---------------------------
*block level element의 특징
*---------------------------
* 별도로 스타일 설정을 하지 않았다면, 부모 요소 영역 만큼 가로 크기(width)가 커진다 (기본 값: auto)
* 요소의 높이 (height)는 부모와 상관없이 요소가 포함하는 자식 요소들의 크기에 좌우된다
* 별도로 가로(width), 세로(height) 크기 설정이 가능하다.
* 블럭 요소는 내부에 인라인 요소를 감쌀 수 있다. 
```

```
*----------------------------
*inline level element의 특징
*----------------------------
* 자신을 포함한 부모 요소 영역과 상관없이 자신이 포함하는 자식요소 또는 텍스트 만큼 가로(width), 세로(height) 크기를 가진다
* 별도로 가로(width), 세로(height) 크기 설정이 불가능하다.
* 인라인 요소는 내부에 블럭 요소를 감쌀 수 없다. (단! 예외: <a> 요소는 블럭 요소를 감쌀 수 있다.) 
* margin, padding 속성의 상(top), 하(bottom) 설정이 불가능하다. left, right는 가능!
*img, input 은 inline block이라 margin-top, bottom 적용 가능
```

- HTML5 에서는 `<a href=""></a>`요소가 블록 요소를 감쌀 수 있도록 변경되었지만, 내부에 또 다른 클릭 가능한 컴포넌트(다른 a나 버튼)가 존재한다면 문법오류이다. 
- 헷갈리면 써보고 직접 문법검사 해보기1!!@
```
<div>
outer div
    <div>
        <a href="">
            inner<div> div</div> 
            <button>이건 문법오류</button><a href="">이것도 문법오류</a>
        </a>
        <span>s<em>pan</em></span>
    </div>
</div>
```

### html5 콘텐츠 모델
 - 단지 categorizing, 다 알 필요는 없음

 - flow content
 - heading content
     + hgroup은 지금은 사용 안함. 예전엔 outline 알고리즘 때문에 한 섹션 내에 h2 h3 연달아쓰면 암묵적으로 h3이 다른 section이 생겨서 다른 섹션의 제목으로 설정되었음. 그걸 방지하고 본제목 부제목 묶기 위해 hgroup 사용했다고 함.
- interactive content
- embedded content
- phrasing
- ...

##CSS

- css3은 모듈별로 개발되어 css3 모두가 표준은 아님
> `모듈??`
- @charset "utf-8"; css파일 최상단에 있어야 validation 통과. 맨 끝에 세미콜론(;) 도 잊지말자!
- html문서에 style로 쓸때는 meta 태그로 charset 설정되어 있어서 안써도 문제없음
- 디자인 팁! 사진에서 톤을 찾아서 색을 뽑아내면 디자인 일관성(픽픽 등 이용)

- [css zengarden](http://www.csszengarden.com/) firefox 도구 quickjava

> 스타일 정리!!


###정리!!
요소선택자 p
요소선택자 묶어주는 그룹 h1, h2, h3
article p 자손 선택자
유니버셜 선택자 * (모든 요소) : 초기 선언할 때 씀. 우선순위 낮음.

목요일은 시험! 
공부하며 시험문제 만들기

##공지사항
목 - 특강 디자이너
금 - 특강 도브투래빗 디지털마케팅컴퍼니/금7시 별관 3b
오늘 자정까지 refactoring 깃헙링크 슬랙으로 보내기
내일 ~~오늘~~ 자정까지 시험문제 출제
도시락 먹은 후 