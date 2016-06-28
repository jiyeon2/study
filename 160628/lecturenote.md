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
