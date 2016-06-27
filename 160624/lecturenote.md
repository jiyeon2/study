quiz풀이
- option 요소의 선택된 상태 : "checked" 아님
    + **selected** 임! <option>은 <select>의 자식요소니까!!
    + checked는 input radio.
    + 스크린 리더는 둘다 "선택됨"으로 읽어줌
```
<input type="radio" id="gender-female" name="gender" value="female" >
<label for="gender-female" **checked**>여성</label>

<input type="checkbox" id="hobby-reading" name="gender" value="reading" **checked**>
<label for="hobby-reading">독서</label>

<select id="job" name="register-job">
    <option value="instructor" **selected**>instructor</option>
```
    
- [대한항공 사이트](https://kr.koreanair.com/korea/ko.html) - 접근성 잘 준수
- html5 문서에서 한 번만 사용해야 하는 요소 : h1, main
- 인라인 스타일 코드 - 자바스크립트가 동적으로 제어
- inline-block (inline요소인데 인라인 요소가 가지지 않은 특징 지니고 있는것): img, input


>  ~~inline요소는 padding, margin값 설정 안됨??~~
> css로 마진, 패딩 상하 값 설정은 가능하나 브라우저에서 적용되지 않음! 적용된다는 의미는 그만큼의 공간을 인라인 요소가 가져서 다른 요소가 그 영역을 침범하지 않아야 한다는건데, 패딩 상하 값 지정해도 배경색은 깔리지만 그만큼의 공간이 떨어지지 않음!!

>inline-block
- 내부적(콘텐츠박스,패딩박스)으로는 inline요소와 같은 특성 지님
- block요소처럼 너비와 높이 지정 가능해지고 마진영역 가짐. 
1. Displays an element as an inline-level block container. The inside of this block is formatted as block-level box, and the element itself is formatted as an inline-level box
-- [w3cschools, inline-block](http://www.w3schools.com/cssref/pr_class_display.asp)
2. inline-block / inline, flow-root / generated box : inline-level, block container
-- inline-level
Content that participates in inline layout. Specifically, inline-level boxes and text.
-- block-level
Content that participates in block layout. Specifically, block-level boxes.
- [css drafts](https://drafts.csswg.org/css-display/#ref-for-valdef-display-inline-block-1)


>[다른분들 github 관리 참고](https://docs.google.com/spreadsheets/d/1CZBn0MHEloRUgXvHeIZeimlDGYuVDMmS8b2zvceSoPc/edit#gid=528174257)


-----------

>7/1 금 저녁 6-7시 야무님특강-선택사항!

>offset? 박스?? margin 바깥쪽 박스??

>color hightlinght- 색 표시

>p태그는 인라인 요소만 감쌀 수 있다!!, 블럭 요소는 들어올 수 없음
>a가 블럭요소 감쌀 수 없는 경우(예외인 경우) 내부에 클릭 가능한 요소(버튼, 다른a) 올 수 없음. 클릭 가능한 영역인데 그 안에 또 다른 클릭 가능한 요소 올 수 없다
>p 태그(단락),(address도 마찬가지)는 같은 p, 제목, div, h1 감쌀 수 없다!!!
>테이블 요소(td)안에는? 문법오류는 아니더라도 여기 들어가는 것은 의미상 맞지 않겠구나!!

>장애인 마크
> 브라우저 엔진?? -webkit-

##선택자

###class 선택자 - 10점! 
- E.class-name (디자인 컨셉-범위제한-이 명확하지 않은 경우에는 사용을 자제할 것!)
- .class-name (대중적으로 사용되는 방법, 코드 재사용 목적)
- .class-name.class-name2 (멀티클래스)
- .class-name .class-name2 

특정 상황 아닌 경우 클래스 앞에 엘리먼트 안쓰는 게 좋다(어디에나 쓸 수 있게 한다는 재사용 측면에서)
```
p.notice{}  <!--p 요소에만 적용됨-->
.notice{} <!-- 어느 요소든 적용됨-->
```

- 멀티클래스는 두 클래스가 한 엘리먼트에 모두 있어야 적용됨
- 띄어쓰지 않으면 내 안에서 찾는것
- 클래스 순서 바뀌어도 적용됨
    + btn btn-buy / btn-buy btn 둘 다 적용 됨 
    + IE6에서만 순서 바뀌면 적용 안됨
```
.btn.btn-buy{color:red;} <!--.btn과 .btn-buy 둘 다 가지고 있어야 적용됨 -->
----------------------------------------
<button class="btn-buy">구매1</button>   <!-- 적용 안됨 -->
<button class="btn btn-buy">구매2</button> <!-- 적용 됨 -->
```

- .btn .btn-buy 는 .btn 의 자손 중 .btn-buy가진 요소에 적용됨
- 띄어서 쓰면 자식요소 중에서 찾는것
```
.btn .btn-buy{color:red;} 

<div class="btn">
    <button class="btn-buy">구매1</button> <!--적용됨 -->
</div>

<button class="btn btn-buy">구매2</button> <!--적용 안됨-->
```


###css2
- 자식선택자 > 는 IE6 미지원, IE7은 버그
    + (*) > div{} 는  >를 태그 끝으로 인식하는 버그
- 인접 형제 선택자 `E1 + E2` !!!
    + `바로 뒤의 형제 1개`만 적용됨!!!
    + `주의!!` : 절대적으로 틀 (프레임)이 무너지지 않아야 한다 - 바로 뒤쪽만 적용되니까
- 일반 형제 선택자 `E1 ~ E2`
    + 직계자식의 뒤쪽에 나오는(직계자식 앞- E1 앞의 자식들-은 해당 안됨) 자식들 중 모든 E2 선택
- 속성 선택자 : 유용하나 IE7,8에선 버그있음
    + [attr]
    + [attr="value"]
    + id, class이외 속성의 포인트는 1

>가이드문서 만드는 것도 포폴이 될 수 있다! 
공통사용되는 클래스 규칙, 룰에 대한 문서
>[가이드 문서 만드는 것 참고-브랜드스타일가이드](http://saijogeorge.com/brand-style-guide-examples/),[에어비앤비 스타일 가이드](https://github.com/airbnb/javascript)

##공지
- **월요일 퀴즈 다 맞아야 심화과제 부여** - 철저한 복습이 기본, 심화는 그 다음
- 과제였던 본인 시험문제 답안은 워드/메모장 기타 등등의 형태로 간단히 작성. 파일명에 본인이름 필수. 드라이브에 공유 

##참여기업특강 - 도브투래빗
- 왕태일 팀장님
- 디지털마케팅 컴퍼니
- digital era digital creative ???
- 디지털 시대,환경에서 어떤 방식으로 소비자들과 소통할 것인가
- 광고하는 사람들이 이용하는 채널과 소비자 이용 채널 괴리
- 시청률 낮은 데 비해 여러군데서 이슈화
- canne lions : creative awards -samsung, 통일부
    + 광고가 의미있는 도구가 될 수 있다!
- 디지털 마케팅이란??
    + 디지털환경에서 __실행가능한__ 모든 커뮤니케이션 수단
    + 실행가능한 아이디어 - 재미없는 제약 있는 내용일수도

- 가장 필요한 역량은?
    + google analytics 이용해서 분석하고 좋은 creative를 낸다???
- 나는 누구인가? 나의 꿈은 무엇인가?
    + 내가 이 회사에 가서 뭘 하지?
    + 내 job 뿐 아니라 job범위 넓혀서 이해력 높이라
    + 커뮤니케이션 하는 사람이지 마케팅, 광고하는 사람 구분지을 필요성 없음
- 모든 것이 광고가 되고 있는 시대
- [MCN](http://www.bloter.net/archives/229109): 개인까지도 광고가 되는 시대
- 광고인데 컨텐츠같아서 훅 지나감 native ad??? : 광고 스타일이 많이 변했음!
- creative가 뭐냐에 따라 구현하는 쪽도 다르게 접근
- 클라이언트도 단순 광고가 아닌 솔루션적으로 이야기함

- 종합광고대행사 -> 마케팅 솔루션 컴퍼니 
- 단순 광고 x 아이디어제안~ 브랜드 솔루션까지 제시 > 종합문제해결능력 필요!!

- 바이럴필름 cf로 쓰기엔 긴, content담고 있는 영상 ?? 
- 단순 프로젝트,솔루션이 아니라 프로덕트화하여 판매(아큐브eye define studio 홍채인식프로그램)
- 이미 있는 기술 활용해서 어떤 경험, 서비스 제공??
- 고정관념에서 사로잡힌 브리프??에서 벗어나자??
- 다양한 컨텐츠 보며 내가 할 수 있을까? 나도 할 수 있을까? 
- 디지털마케팅: 참여형 브랜드마케팅 서비스, ㄱ개인, 고객지형작인 캠페인, 공감되는 이야기가 존재, cf는 소비자가 푸쉬받는 내용이 주, 바이럴필름은 공감되는 컨텐츠로 인해 계속 보게 됨. 디지털 플랫폼 활용, 기술 몰라도/ 오히려 몰라서 더 재밌는 아이디어, 기술 아는 사람은 고급기술 쓰려고 함 , 아무리 좋은 기술도 제약 있을 수 있음. 기술 화려함 보다는 컨텐츠담은 솔루션으로 접근해야. 
- 브랜드 컨셉,, 아이덴티티 이해하고 조직 융화 필요
- 야근 한 날 안한날 표시
