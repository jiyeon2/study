# 저는 이렇게 코딩합니다! ver 0.1 (2016.07.20)

- 목차

>     HTML
>        * head 요소 내부
>            - doctype
>            - meta
>            - title
>        * body 요소 내부
>            - sectioning과 주석달기
>            - validation check
>            - 들여쓰기
>            - class, id 등 속성 기입 순서
>            - class 이름짓기
>            - a요소 속성
>            - img요소 속성
>     CSS
>        * @charset "utf-8"; 
>        * 주석달기 
>        * 선택자 
>        * 속성, 값 기입 순서
>     폴더 및 파일관리



##HTML

```html
<!DOCTYPE html>      ...[1]
<html lang="ko-KR">  ...[2]
```

[1] doctype : HTML5 doctype 선언

[2] html 요소에 lang 속성 지정 : 스크린리더가 적절한 음성 제공하도록 하기


###`<head>`
```html
    <meta http-equiv="X-UA-Compatible" content="IE=Edge">   ...[3]
    <meta charset="UTF-8">                                  ...[4]

    <title>저는 이렇게 코딩합니다!</title>                  ...[5]

    <meta name="viewport" content="width=device-width, initial-scale=1.0">  ...[6]
    <meta name="description" content="더 간결하고 효율적인 코드를 짜기 위해 제 코딩 방식을 정리한 페이지입니다">                                     
    <meta name="keywords" content="html, css, 코딩, 가이드">
    <meta name="author" content="이지연">                                 ...[7]

    <link rel="stylesheet" href="../resrouce/webfonts/spoqa-han-sans.css">  ...[8]
    <link rel="stylesheet" href="../resrouce/initialization/ress.min.css">
    <link rel="stylesheet" href="my-guide.css">
    <link rel="shortcut icon" type="image/x-icon" href="guide/favicon.png">
```

[3] `<meta http-equiv="X-UA-Compatible" content="IE=Edge">` 
: IE가 최신버전으로 렌더링되게 함.

 html문서가 읽히기 전 해당 코드가 먼저 실행되도록 `<title>`보다 위쪽에 기입한다.


[4] `<meta charset="UTF-8">` 
: 한글이 깨지지 않도록 유니코드 사용. 

`<title>`의 한글이 깨지지 않게 `<title>`보다 상단에 기입한다.


---

[5] 
메인페이지 `<title>` 에는 **서비스명이나 기업명**

서브페이지 `<title>` 에는 **해당 카테고리명 | 서비스명이나 기업명** 

- 사용자가 어떤 페이지를 방문하고 있는지 알 수 있도록 페이지마다 다른 값을 입력한다
- `::::::`코딩가이드`:::::::` 와 같이 불필요한 특수문자는 사용하지 않는다

>   <title>저는 이렇게 코딩합니다</title><!-- 메인페이지 -->
>   <title> CSS | 저는 이렇게 코딩합니다</title>  <!--CSS를 다루는 서브페이지  -->


---

[6] 뷰포트 지정 : 
사용자의 디바이스 크기만큼 보이도록 하며 확대 축소가 가능하도록 하였다.

[7] 해당 html 문서에 대한 메타데이터를 제공. 
검색엔진최적화를 위해 사용한다. 

[8] `<link rel="stylesheet">` 외부 스타일 시트 불러오기 
: 웹폰트는 불러오는 데 시간이 오래 걸리므로 먼저 실행되도록 가장 위쪽에 쓴다.




###`<body>`
---
#### sectioning과 주석달기
- 하나의 컨텐츠 그룹이 시작할 때 한 줄 위에 <!-- 해당 컨텐츠  -->
- 하나의 컨텐츠 그룹이 끝날 때 한 줄 아래 <!-- /해당 컨텐츠 --> 로 구분한다
```html
<!-- 상단 네비게이션 -->
<nav class="top-nav">
    ...
</nav>
<!-- /상단 네비게이션 -->
```

---

#### validation check
- 한 구획 마크업이 끝나면 html validation check를 한다. 전체 html 마크업이 끝난 후 validation check하는 것보다 오류를 빨리 수정할 수 있다.

---

#### 들여쓰기
- [1] 자식요소는 줄바꿈, 4칸 들여쓰기 해서 계층구조를 명확하게 알 수 있도록 한다.
- [2] li>a{짧은 내용} 과 같은 경우는 줄바꿈과 들여쓰기를 하지 않는다.
```html
<!-- 과일 목록 -->
<ul class="fruits">
    <li><a href="">복숭아</a></li> ...[1]
    <li><a href="">자두</a></li>   ...[2]
    <li>
        <a href="">자두</a>
    </li>

</ul>
<!-- /과일 목록-->
```


#### 인라인 속성 기입 순서
 1. id
 2. class
 3. 기타
    - a요소에서 href속성은 가장 나중에 쓴다
    - img 요소에서 src 속성과 alt 속성은 가장 나중에 쓴다
    - [1] img 요소의 형제요소로 이미지에 대한 설명이 제공된다면 alt 속성의 값은 생략하고 "alt"로만 써둔다. 
```html
<div id="hat" class="box" lang="en"> ... </div>
<a id="shirts" class="box" href="shirts.html">shirt</a>
<img class="pic" src="pants.png" alt="pants">

<div id="item-hat" class="item item-1" lang="ko"> 
    <img src="hat.png" alt>
    <dl class="item-detail">
        <dt class="item-name">new hat</dt>
        <dd class="item-image"><img src="hat.png" alt></dd> ...[1]
        <dd class="item-description"> New yellow hat.</dd>
    </dl>
</div>
```






##CSS

#### @charset "utf-8"; 
- css 파일 가장 위에 언어 인코딩 형식을 지정하여 한글이 깨지지 않도록 한다.

---

#### 주석달기 
- css작성 순서는 html마크업 순서를 따라간다. 
- 하나의 컨텐츠 그룹이 시작할 때 한 줄 위에 /* 해당 컨텐츠 */ 
- 하나의 컨텐츠 그룹이 끝날 때 한 줄 아래 /* 해당 컨텐츠 */ 로 구분한다
```css
 /*메인 네비게이션*/
 .main-nav{
    width:100%;
    ...
 }
 /* /메인 네비게이션*/
```

#### 선택자
- 코드 재사용을 위해 초기화 할 때 이외에 요소이름을 선택자로 사용하지 않는다.
```css
/* 초기화 */
body,h1{margin:0;}

h1.logo{margin:0;}  /*[x] 클래스 앞에 요소 이름을 명시하지 않는다*/
.logo{margin:0;}    /*[o] 클래스 명만 쓴다*/
```

#### 속성, 값 기입 순서
   1. layout 관련
   2. font 관련
       - line-height는 폰트 사이즈에 따라 유동적으로 바뀌도록 고정값 단위를 쓰지 않고 숫자로 쓴다.
   3. 기타
```css
.wrapper{
    /* 레이아웃 관련 속성*/
    display:block;
    width:50%;
    max-width:400px
    height:auto;
    max-height:300px;
    margin-left: auto;
    margin-right: auto;
    padding:1rem;
    position:relative;
    top:0;
    left:0;
    transform:translateX(50%);

    /* 폰트 관련 속성 */
    font-family:"Spoqa Han Sans", sans-serif;
    font-size: 18px;
    line-height: 1.5;
    color:#000;

    /* 기타 */
    background:#fff;
    border:2px solid #f00;
}
```

#### 중복 코드
- 1번 이상 중복되는 코드는 분리한다.
- 특정 html 페이지에서만 반복적으로 사용되는 코드는 클래스 이름을 새로 붙이지 않고 기존 클래스 이름을 쓴다.
- 모든 html 페이지에서 반복 사용 된다면 새로운 클래스 이름을 붙인다.
```css
.contentbox-1{
    width:100%;
    min-width:160px;
    height: auto;
    min-height:170px;
    background-image:url(img-1.png);
    background-size:cover;
    background-repeat:no-repeat;
}
.contentbox-2{
    width:100%;
    min-width:160px;
    height: auto;
    min-height:170px;
    background-image:url(img-2.png);
    background-size:cover;
    background-repeat:no-repeat;
}
```
- 위 코드에서 background-image 제외한 나머지 속성이 반복되므로 아래와 같이 분리한다.

- 속성별로 줄바꿈하여 보기 쉽도록 한다.
- 1줄씩 기입되는 속성은 줄바꿈하지 않는다.
```css
.contentbox-1{background-image:url(img-1.png);}
.contentbox-2{background-image:url(img-2.png);}

.contentbox-1, .contentbox-2{
    width:100%;
    min-width:160px;
    height: auto;
    min-height:170px;
    background-size:cover;
    background-repeat:no-repeat;
}
```
- 해당 코드는 배경이미지를 요소에 가득 채우기 위해 사용한 코드이다. 다른 페이지에서도 같은 기능을 사용한다면 '.fullbg'와 같은 새로운 클래스명을 붙여서 사용한다.
```html
<div class="contentbox-1 fullbg"> ... </div>
```
```css
.contentbox-1{
    min-width:160px;
    min-height:170px;
    background-image:url(img-1.png);}
.fullbg{
    width:100%;
    height:auto;
    background-size:cover;
    background-repeat:no-repeat;   
}
```




##이름짓기

- 영문만 사용한다
- '-'로 단어를 이어서 붙인다

####클래스
```html
<!-- 메인 네비게이션 -->
<ul class="main-nav">
    <li class="main-nav-item">
        <p class="main-nav-item-title"></p>
        <p class="main-nav-item-suvtitle"></p>
    </li>
</ul>
<!--/ 메인 네비게이션 -->
```
 - 해당 코드의 위치, 기능을 명시한다
     + 위 예시에서 ul요소는 메인페이지의 네비게이션이다.
 - 자식요소는 부모요소의 클래스 명 뒤에 해당 요소의 기능을 덧붙인다.
     + .main-nav-item : 메인 네비게이션의 목록아이템
     + .main-nav-item-title: 메인 네비게이션 아이템의 제목
     + .main-van-item-subtitle: 메인 네비게이션 아이템의 부제목

####폴더명
- '생성날짜(yymmdd)-프로젝트이름'과 같이 작성한다
-   * homework\160721-coding-guide
- homework\160721-coding-guide\index.html : 메인페이지
- homework\160721-coding-guide\css        : css파일 모음
- homework\160721-coding-guide\img        : img파일 모음
- homework\160721-coding-guide\sub        : sub페이지 모음, 서브페이지가 2개 이하일 때는 생략할 수 있다.


