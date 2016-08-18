#### 160817 day35 복습

##### hoist
##### callback pattern
##### closure
##### loop + closure
##### [IIFE패턴 Immedeiately-Invoked Function Expression](http://benalman.com/news/2010/11/immediately-invoked-function-expression/)
- 전역에 생성한 변수나 객체는 어디서나 접근 가능. 다른 사람의 코드와 충돌 날 수 있다(같은 이름 가진 변수에 다른 값 할당, 같은 이름 가진 변수인데 다른 기능 하는 등)
- 그러므로 전역변수 만들기보다 지역변수 만들어 사용하는 게 좋다
- 코드를 작성하기 위해 외부에서 접근할 수 없는 새로운 공간을 생성하는 방식 - IIFE패턴
- IIFE 내부에서 선언한 변수는 지역변수이므로 전역과 충돌할 일 없음
- 스크립트 실행될 때 선언과 동시에 호출되어 내부코드 실행하고 사라짐.



자바스크립트에서 함수 호출 (called,invoked) 새로운 실행컨텍스트 생성한다. 
(자바스크립트에서 함수 이외 다른 블록문 if, for 등은 새로운 컨텍스트 만들지 않는다, 오로지 함수만!)
그 컨텍스트 외부에서는 내부 변수 함수에 접근할 수 없다
