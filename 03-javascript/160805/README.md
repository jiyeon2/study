### DOM (Document Object Model) JavaScript
- DOM : HTML, XML문서를 위한 API
    + API : Application Programming Interface, 응용프로그램 프로그래밍 인터페이스, 응용프로그램을 프로그래밍하기 위한 조작방법 등 제공

- DOM LV.0
    + 이미지, 폼 등 특정 요소에만 접근 가능했음

- DOM LV.1
    + document.documentElement -> html요소 가리킴
    + document.getElementsByTagName()
    + document.getElementById()

    + .getElementsByTagName(), .childNodes() 등은 유사배열(like array) - NodeList 또는 HTMLCollection 반환함(브라우저마다 다름)
    + 유사배열은 배열이 아님!!! Array 생성자에게 있는 메소드인 shift()존재하지 않음

|NodeList|HTMLCollection|
|----|---|
|어떤 노드타입이든 담을 수 있음|요소노드만 담을 수 있음|
|.|NodeList와 같은 메소드 제공 + namedItem메소드 제공|

- HTMLCollection이 NodeList의 상위집합 같은 느낌