```js
//isNaN헷갈리니까 숫자인지 아닌지 확인하는 함수
function isNumber(data){
    return typeof data === 'number';
}
```
 
 ## 자바스크립트 데이터유형

 ### 1.1 자료형 데이터(함수, 배열, 객체)

 ### 1.2 데이터 유형 체크
1. typeof
 - typeof array
 - typeof null 오류

2. instanceof
 - 원시데이터 리터럴의 경우 제대로 체크 안됨
  
3. constructor
 - 객체만 가능
 
 - null.cosntructor
 - undefined.constructor 은 에러남

4. 다른 객체의 메서드 빌려쓰기
- object.prototype.toString.call(data) 