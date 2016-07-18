# 저는 이렇게 코딩합니다! ver 1.0 (2016.07.19)

- 본 내용은 지침이 될 만한 스타일가이드나 코딩컨벤션이라기 보다, 단순히 제 코딩 방식을 정리한 문서에 가깝습니다.
- 현재 제 코딩 습관을 파악하여 보다 간결하고 효율적으로 코드를 짜는 방법을 모색하는 것이 목표입니다.
- 내용은 비정기적으로 업데이트 됩니다.
- 다음과 같은 순서로 진행됩니다
    + HTML
        * head 요소 내부
            - doctype
            - meta
            - title
        * body 요소 내부
            - sectioning과 주석달기
            - validation check
            - 들여쓰기
            - class, id 등 속성 기입 순서
            - class 이름짓기
            - a요소 속성
            - img요소 속성
    + CSS
        * @charset "utf-8"; 
        * 주석달기 
        * 선택자 
        * 속성, 값 기입 순서
    + 폴더 및 파일관리

##HTML
```
<!DOCTYPE html>      ...[1]
<html lang="ko-KR">  ...[2]
```

[1] doctype : HTML5 doctype 선언

[2] html 요소에 lang 속성 지정 : 스크린리더가 적절한 음성 제공하도록 하기


###`<head>`
```
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

[3] `<meta http-equiv="X-UA-Compatible" content="IE=Edge">` : IE가 최신버전으로 렌더링되게 함. html문서가 읽히기 전 해당 코드가 먼저 실행되도록 `<title>`보다 위쪽에 기입한다.


[4] `<meta charset="UTF-8">` : 한글이 깨지지 않도록 유니코드 사용. `<title>`의 한글이 깨지지 않게 `<title>`보다 상단에 기입한다.


[5] 메인페이지 `<title>` 에는 **서비스명이나 기업명**

서브페이지 `<title>` 에는 **해당 카테고리명 | 서비스명이나 기업명** 

- 사용자가 어떤 페이지를 방문하고 있는지 알 수 있도록 페이지마다 다른 값을 입력한다
- `::::::`코딩가이드`:::::::` 와 같이 불필요한 특수문자는 사용하지 않는다

>   <title>저는 이렇게 코딩합니다</title><!-- 메인페이지 -->
>   <title> CSS | 저는 이렇게 코딩합니다</title>  <!--CSS를 다루는 서브페이지  -->

[6] 뷰포트 지정 : 사용자의 디바이스 크기만큼 보이도록 하며 확대 축소가 가능하도록 하였다.

[7] 해당 html 문서에 대한 메타데이터를 제공. 검색엔진최적화를 위해 사용한다. 

[8] `<link rel="stylesheet">` 외부 스타일 시트 불러오기 : 웹폰트는 불러오는 데 시간이 오래 걸리므로 먼저 실행되도록 가장 위쪽에 쓴다.



###`<body>`
            - sectioning과 주석달기
            - validation check
            - 들여쓰기
            - class, id 등 속성 기입 순서
            - class 이름짓기
            - a요소 속성
            - img요소 속성

##CSS
        * @charset "utf-8"; 
        * 주석달기 
        * 선택자 
        * 속성, 값 기입 순서

##폴더, 파일 관리

영문만 사용
폴더, 파일명은 '-'' 로 단어를 이어서 붙임

- {yymmdd} (폴더 생성 날짜)
    + {프로젝트 루트 폴더} (폴더명은 서비스 명 혹은 기업 명)
        * index.html (메인페이지 html파일)
        * {css} (css파일 모음)
            - 
        * {img} (이미지 모음)
        * {sub} (서브페이지 html파일)