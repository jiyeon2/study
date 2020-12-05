> 깃 보강 1:30~ 4:30 ( 오늘 점심시간 12:30 ~ 1:30)
> 본인 사진 다영님 슬랙으로
> 금요일까지 자리 섞어앉기

- 레이아웃, 타이포그래피, 색감, 이미지(사진) 관련 스터디 하는 것도 좋을듯함
- 뭔지, 왜 알아야하는지 연구 혹은 책 구매
- '레이아웃 불변의 법칙' , '타이포그래피 불변의 법칙'...
- UI, UX 디자인 측면에서 이해 도움, 환경 디자인 이해해야 개발 더 잘 할 수 있음
- 프론트엔드 개발 - 디자인,/ 컴퓨터에 대한 이해 필요(자바스크립트할 때)
- 램- 주기억장치,하드디스크- 보조기억장치
- oop(객체지향) 프로그래밍 하는 메타??
- 하드디스크에 저장된 프로그램이 객체로써 램으로 이동. 자바스크립트로 램에서 작업
- 스코프? 영역? 
- var i = 121; i에 121이 들어가있고, i가 램어딘가에 저장됨
- 키워드 찾아보기

###css [선택자](http://www.nextree.co.kr/p8468/) 복습
- [속성명~="속성값"] 
    + 멀티클래스처럼 하나의 속성이 여러개의 값 가지고 있을 때(띄어쓰기로 구분된), 해당 속성이 해당 "속성값"과 **정확하게 일치**하는 속성 값 가지고 있는 요소 선택
```
div[class~="class"]
-----
<div class="a-class2 class1 class3"></div> <!-- 선택안됨 -->
<div class="class1"></div> <!-- 선택안됨 -->
<div class="classic class"></div> <!-- 정확하게 "class"인 값 포함하고 있으므로 선택됨-->
```

- [속성명|="a"]
    + **정확하게 일치**하는 속성값 가지거나, "a-이름이름"과 같이 따옴표 안에 있는 값으로 시작하고 하이픈으로 이어진 속성값 가진 요소 선택함.  
    + It can be used for language subcode matches.
```
div[class|="class"]
----
<div class="class-a"></div> <!--선택됨 -->
<div class="class"></div>   <!--선택됨 -->
<div class="classclass"></div> <!--선택안됨-->
```

- [속성명^="a"]
    + 속성명이 a로 **시작하는** 요소 선택. 속성값이 여러개 있을 경우 첫번째 오는 속성값이 a로 시작해야 선택됨.
    + a[href^="http://"][target="_blank"] : 새창에서 열리는 외부링크 선택
```
div[class^="class"]
----
<div class="classclass">classclass</div> <!-- 선택됨 -->
<div class="class1 not-class">class1 not-class</div> <!-- 선택됨 -->
<div class="not-class class1">not-class class1</div><!-- 선택안됨-->
<div class="class">class</div><!-- 선택됨 -->
```


- [속성명$="a"]
속성명이 a로 **끝나는** 요소 선택. 속성값이 여러개 있는 경우 마지막에 오는 속성값이 a로 끝나야 선택됨.
    + a[href$=".txt"] 와 같이 파일 확장자에 따라 요소 선택도 가능
```
div[class$="class1"]
----
<div class="classclass1">classclass</div> <!-- 선택됨 -->
<div class="class not-class1">class1 not-class</div> <!-- 선택됨 -->
<div class="not-class1 class">not-class class1</div><!-- 선택안됨-->
```

 - [속성명*="class"]
    + 속성값에 class라는 문자열이 포함되어 있는 요소 모두 선택. 속성값이 여러개 나와도 상관없고, 맨 앞이든 뒤든, 속성값 가운데 class값이 포함되어 있다면 선택됨!



##git 보충수업 ^.^
###git; Branch
- pull(remote-repository -> working directory) 먼저 받고 push 해야 충돌 덜 남
- **커밋은 작업단위별로 잘게 나눠서!!** 충돌 방지 위해서
- revert 말고 아예 이전 상태로 돌아가는 것은 reset으로 잘 쓰지 않음. 
- reset 해서 그 상황으로 돌아간다 해도 이전 커밋한 내역 없어지진 않음
- 작업의 흐름 나눔: branch - 하나의 작업 흐름에서 텍스트, 이미지, 여러 파일 바꾸면 되돌리기 어려움
- 여러 사람이 한 흐름에서 작업하면 충돌 엄청 남. master브랜치에서는 작업 잘 안함.
- 기능,역할별로 브랜치 나눠서 작업하고 합쳐보기!
- 브랜치 만들 때 보통, 배포용브랜치/ 기능추가용/ 기는추가용-html수정/ 기능추가용-이미지수정/ 버그수정용/ 
- 작업 흐름 나누는 브랜치!!!!!!!!!!! 혼자해도 작업 나눠서
- feature/hotdog - 하면 feature하위에 hotdog 브랜치 생김!
- checkout for new branch 만들어진 새 브랜치로 이동
- 핫도그 브랜치에서 핫도그 파일 생성->핫도그 브랜치에 반영하고 싶은거니까 핫도그 브랜치에서 커밋하고 다른 브랜치로 이동해야함
- 핫도그에서 작업한 내용은 마스터에 반영되어 있지 않음(repository폴더 들어가보면 핫도그 파일이 없음!)
- origin/master remote repository의 마스터브랜치 의미
- 핫도그 작업내역을 마스터 브랜치로 반영: 머지!
- 브랜치 나눠놓으면 그 브랜치에서는 그 작업만 하기! revert
- HEAD: 내가 어떤 브랜치에서 작업하고 있는지 알려줌. 브랜치별로 파일상태 다름!
- 커밋로그 핵심 한줄+ 자세하게 쓰기
- [누구나 쉽게 이해할 수 있는 git 입문](https://backlogtool.com/git-guide/kr/)
###스터디
저장소 만들고 브랜치 따서 작업하고, 마스터브랜치에 병합해봄

