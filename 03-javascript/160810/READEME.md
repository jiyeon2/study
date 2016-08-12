## 자바스크립트 코어(문법)

### 자바스크립트 작성방법

- 내부에 작성할 때
    + `<script> </script>`
    + HTML5에서는 MIME Type(type="text/javascript") 생략 가능 

- 외부에서 불러올 때
    + `<script src="index.js"></script>`

### 자바스크립트 코어

#### 명령문
- 점 연산자로 연결되는 구문
    + window.alert() : 윈도우객체의 경고 메소드 실행
    + document.getElementsByTagName('p')[0].onclick = openWindow; : html문서의 p요소 중 첫번째를 눌렀을 때 openWindow라는 함수를 실행해라

#### 주석
| 주석 기호 | 설명|
|----|----|
| `//` | 한줄 주석처리
|`/* */`| 여러 줄 주석처리
| `//<![CDATA[       //]] `| XHTML, XML문서에서 자바스크립트 사용시 주석처리|
|`<!--       //-->`| 과거 사용되던 주석처리, HTML주석과 유사. HTML문서에 자바스크립트 코드 막 붙여넣다가 잘못 붙여넣어서 코드가 문서에 노출되는 경우가 있었음. 이런 때 HTML주석으로 처리되어 자바스크립트 코드가 보이지 않도록 함.|


#### 변수
- 하나의 값 저장. 기억장소
- `var 변수이름 = 정보유형;` 과 같이 선언하고 값 저장.
- 함수 내에서 var 대신 let 키워드 쓰면 지역변수(ECMAscript 최신버전에서 지원함)
- 변수이름 
    + 숫자로 시작할 수 없음 |    var 1234hi; 불가
    + `_` , `$ ` 이외의 특수문자 사용 불가  | `var menu-btn`; 이런거 안됨!!!!!!!!! 실수하지 말자!!
    + 띄어쓰기 안됨, 띄어쓰기는 안된다고 `-`쓰지말자 이것도 오류남

- 변수참조
    + 정보(값)이 담긴 메모리 주소를 가리키는 식별자
    + 데이터 그 자체가 아니라 데이터가 존재하는 `주소`를 알고있다

|참조|복사|
|---|---|
|데이터가 존재하는 메모리 주소 가리킴|값을 복제|
|실제 데이터는 1개|실제 데이터 값이 다른 위치에 똑같이 존재(같은 데이터값이 여러개)|
|같은 데이터 참조하는 변수 a,b 있을 때 b값 변경하면 a값도 바뀜| 같은 데이터 값 가지는 a,b 변수 있을 때, a값 바꾼다고 b도 바뀌진 않음 |
|공유|복사, 복제|
|복합자료형 - 배열, 객체|원시자료형 - 숫자, 문자, 논리, undefined, null|

- var brand = document.firstChild.nodeValue;
- 문서의 첫번째자식요소의 값을 brand라는 이름의 변수에 복사
- brand = 'changed'; 처럼 brand변수에 다른 값 넣어도 원래 존재하던 문서 첫번째 자식요소의 값은 변하지 않음

#### 상수
- const 상수이름 = 정보유형;
- 변하지 않는 고정값 넣을 때 씀
- 그냥 변수와 달리 대문자로 씀
- const CHRISTMAS = 1225; 이런거같음

#### 연산자

##### 숫자연산

##### 문자연산
- `+` 연산자 
    + `+`문자열 : 문자열 접합하여 String 값 출력
    + 2014 + '년도' --> '2014년도' 라는 문자열로 출력
    + '2'+'3' --> '23' 이라는 문자열로 출력
    + 문자열은 `-`, `/`, `*` 연산자 적용안됨
        * 2014 - '년도' --> NaN 반환됨

- 문자형숫자 '2' '-1' '0.343' 에는 `-`, `/`, `*` 사용 가능! 숫자형 출력됨
    + '2' - 1 --> 1 이라는 숫자 출력
    + 10 * '3' --> 30

#### data type 정보유형

##### 숫자형
- 자바스크립트 숫자는 8진수, 10진수, 16진수로 표현

##### 문자형
- `''` , `""` 로 감싼 형태
- 'I'm hungry' (x)
- 'I\'m hungry' (o)
- 'time 5\' 10\" ' (o) 이스케이프 문자 써야함 

##### 논리형
- true / false값
- Boolean(), !! 통해 형변환 가능 --> true / false값 확인가능

##### undefined
- 정의되지 않음
- 변수 선언 후 값을 넣지 않으면 변수의 초기값은 undefined
- 전역변수이기도 함

##### null
- 어떠한 값도 아님, 비어있음
- 이벤트함수의 초기값
- 이벤트 함수 제거시 null 대입(레거시DOM에서만)

#### 형변환
- 자바스크립트는 자동으로 데이터 유형 바뀜 : typeCasting
- 이 점이 자바스크립트 약점
- 약점 있다고 안좋은 언어라는 의미는 아님
- 약점은 알고 안쓰면 됨

| 숫자 -> 문자 | 예 |
|----|----|
|''로 감싼다| 3 -> '3'|
|+'' 빈 문자열을 더한다| 3 + '' -> '3'|
|String()안에 넣는다| String(3) -> '3'|
|.toString() 사용 | var num = 3; num.toString() -> '3'|

```
// *주의!!* : 숫자, 객체리터럴, 함수리터럴의 경우에는 오류가 발생. 오류가 발생하는 대상은 괄호()로 감싼 후 적용
function(){}.toString -> 오류
(function(){}).toString -> function toString() 함수가 반환됨
3.toString() -> 구문오류
3 .toString() -> '3'
3..toString() -> '3'
(3).toString() -> '3'
```

| 문자 -> 숫자| 예| 비고|
|----|----|----|
| `-`, `*`, `/` 연산자 이용| '3' - 2 ->1|'3' `+` 2 -> '32' 문자형 숫자라도 문자형이므로 `+`연산자는 문자로 반환됨|
|Number()안에 넣는다| Number('3') -> 3| Number('3살') -> Nan|
|parseInt()안에 넣는다|parseInt('3살') -> 3, parseInt('2.3살') -> 2, parseInt('나는23살') -> NaN| parseInt()는 문자열 내 숫자값을 정수(소수점은 버림)로 반환. 들어가는 문자열이 숫자로 시작하지 않으면 NaN 반환|
|parseFloat()안에 넣는다|parseFloat('3.3살') -> 3.3| 실수로 반환|
|문자형 숫자앞에 `+`나 `-`| +'3' -> 3, -'3' -> -3| 부호 바꿔줌


```js
'3px' - 1; //단위가 포함된 값은 문자열이라 연산 안됨

//parseInt()말고 .split()이용 가능
'3px'.split('px'); //'px'이라는 문자를 기준으로 문자열 잘라서 배열 반환
// ['3',''] 반환됨

// 숫자값만 뽑아내려면
'3px'.split('px')[0]; //"3"

+'3px'.split('px')[0]; // 3

'3px'.split('px')[0] - 1; // "3" - 1 // 2

'3px'.split('px')[0] - 1 + 'px'; //'2px'


```


|데이터를 논리값(true/false)로|.|.|
|---|---|---|
|Boolean()에 넣는다| Boolean('')  -> false, Boolean(' ') -> true| 빈문자열은 false, 공백은 true|
|!!를 앞에 붙인다 | !!'' -> false, !!' ' -> true|.|

|undefined, null 형변환| 변환된 결과값|.|
|----|----|----|
|!!undefined|false|.|
|!!null|false|.|
|''+undefined| 'undefined'| 문자열이 됨|
|''+null|'null'|문자열이 됨|
|String(undefined)|'undefined'| 문자열이 됨|
|String(null)|'undefined'| 문자열이 됨|
|undefined + 1| NaN | 자바스크립트 연산 결과값이 숫자가 아닐 경우 NaN(Not a Number)로 경고처리됨|
|null + 1=1, null -1 = -1, null * 1 = 0, null / 1= 0 |숫자| 숫자형과 연산하면 숫자0처럼 처리됨
|Number(undefined)| NaN| .|
|Number(null)| 0| 숫자 0 이 됨|
```js
!!undefined     // false
!!null          // false

''+undefined, String(undefined)    // 'undefined' 라는 문자열이 됨
''+null, String(null)              // 'null'이라는 문자열이 됨

Number(undefined)     // NaN
undefined + 1         // NaN, 자바스크립트 연산 결과값이 숫자가 아닐 때 경고처리

Number(null)    // 숫자 0
null + 1        // 숫자 1
null - 1        // 숫자 -1
null * 1        // 숫자 0
null / 1        // 숫자 0
```

- typeof null -> object(사실 객체가 아닌데 객체라 뜸)
- typeof undefined -> undefined
- null과 undefined 둘 다 비어있음 의미하는 자료형이라 같은 결과 나올 줄 알았는데 달라서 신기했음
- null을 숫자로 형변환하면 0이 되는구나!!

### 헬퍼함수 getStyle(), camelCase()
```js
window.getComputedStyle(el, [pseudo]); 
// 요소(el)에 적용된 css스타일 값을 반환
// 반환값은 CSSStyleDeclaration 라는 객체이고 {속성:값, 속성:값 ...}형태

//특정 속성에 접근하려면
window.getComputedStyle(el,[pseudo]).getPropertyValue(property);

//.getComputedStyle 로 반환된 객체 값에 접근하기 위해 []사용
window.getComputedStyle(el,[pseudo])[property];  


//예
window.getComputedStyle(document.body);
    //
```
