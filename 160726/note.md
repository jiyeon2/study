### sass문법
- html, css, sass 모두 언어지만 사용하는 환경, 기능이 다를 뿐! 언어는 언어다

#### indulge
- nav는 핵심 네비게이션에 사용하는 것이므로 footer에 사용하는 것은 바람직하지 않다
    + footer의 nav를 div로 변경
- validation 기초적인 것이므로 문법검사 꼭 하자!

#### 퀴즈
- cli 명령어
    + touch : 빈파일생성
    + echo 내용 > 파일이름 : 내용 써서 파일 생성
    + rm -rf : recursive force, 내부에 파일이 존재하는 폴더도 강제로 삭제 
    + node i -g node-sass : install global 전역 설치
- output-stye 4가지: compact(compacted가 아님!!), nested, compressed, expanded
- 배포과정에선 sourcemap 필요 없음
- SCSS/ Sass SCSS는 모두 대문자, Sass는 맨 앞 글자 빼고 소문자
    + SCSS, Sass 는 다른 문법이 아니라 단지 표기법의 차이
    + Sass: 중괄호나 세미콜론 사용하지 않음
    + Sass: 콜론 다음 한칸 꼭 띄어쓰기
    + 들여쓰기가 매우 중요 중요

#### node-sass 옵션
- node-sass --help: 도움말
- node-sass --precision 1~10 : css파일로 컴파일 되었을 때 소수점 자리수 정하는 옵션



#### 주석
- single line comment는 css로 컴파일시 나타나지 않는다.
- 배포할 css 파일에는 주석 안들어가는 게 좋으므로 싱글라인 커멘트 쓰는 게 좋다.



#### 모듈 분리 
- 작은 단위로 쪼개서 @import로 합침
- documentation 잘 만들어서 관리를 해야함
- import할 scss,sass파일은 확장자 쓰지 않는다. scss에서는 파일이름을 ""로 감싸지 않아도 컴파일 되기는 함
- 이름 앞에 언더바(_) 있는 파일은 css파일로 컴파일되지 않는다
- css파일에 합치지 않는 css파일은 확장자를 써준다. 
    + @import style.css 라고 쓰면 style.css 파일 코드가 합쳐지는 게 아니라 css파일에 @import "style.css"라고 link처럼 직렬로 불러오게 된다

#### @import/ @extend, nested @import
- (@import 파일이름)는 그 위치로 파일의 코드 전체를 불러오는거
- (@extend 선택자) 는 해당 코드에 선택자를 끌어올려서 그룹핑하는것

### sass script

#### 변수
- $변수이름 : 값
- 변수이름에는 공백사용 안됨
- 변수이름 음절사이 -, _사용하여 연결. camelCase방법 사용가능
    + js에서 변수 이름 사이에 -사용하면 오류남. 
    + 함수이름을 camelCase방식으로 쓰므로 js할거면 _로 음절 이어도 됨
    + css에는 관습적으로 -사용
- sass는 변수 이름에 - ,_ 구별하지 않음
- sass변수는 최상위에 선언 해야 함
- 자바스크립트와 달리 앞쪽에 선언되지 않은 함수는 사용할 수 없음
- $변수: null  쓰면 css로 컴파일 시 나타나지 않음

#### 플래그
- @extend 선택자 !optional : 해당 선택자가 없으면 적용되지 않음 
- $지역변수 !global : 지역변수를 전역변수처럼 사용 
- $변수 !default : 사용자가 지정하지 않으면 적용되는 기본값

 
#### 미디어쿼리
- @media (min-width:$tablet) and (max-width:$wide-screen - 1){} 이런식으로 써서 어느 범위에 적용될건지 설계

#### 데이터타입
sass script 에서 이용 가능한 데이터 유형 6가지
1. null
2. number 
    - 예) 1.5 / 1 / 14px
3. string & color 
    - 예) "../img/df.jpg" / Verdana / lightblue/ #847437
4. boolean
    - True/False , yes/no
5. list []
    - 자바스크립트의 배열같은것
6. map {} 
    - 자바스크립트의 객체같은것. '키: 값'의 모음

