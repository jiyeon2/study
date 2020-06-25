## 알게된 것
- 돔 노드를 js로 생성해서 붙일때는 매번 새로운 노드를 생성해야 한다. 처음에 레몬이랑 사과 span을 만들어두고 복붙하듯 붙이려 했는데 appendChild를 하니 이미 붙어있던 레몬이 맨 뒤로 이동했다.

- 사용자의 키 입력을 저장하는 배열을 만들어서 매 입력시 이미 입력된 값이 저장된 코드 값과 같으면 특정 동작을 하도록 만들면 된다.

- cornify.js : cornify_add()로 유니콘과 무지개 이미지를 붙일 수 있다

- [코나미코드를 이용한 이스터에그](https://gomakethings.com/how-to-create-a-konami-code-easter-egg-with-vanilla-js/)

## 궁금한 점
- 일정 시간내에 특정 입력이 완료되었을 때만 동작이 되도록 하고 싶다. 처음 입력으로부터 일정 시간이 지나면 입력값이 저장된 배열을 초기화 하는 코드를 만들면 될까? 다른 방법은 없을까?
    - 입력값 초기화하는 코드 포함된 글 [읽어보기](https://medium.com/javascript-in-plain-english/how-to-detect-a-sequence-of-keystrokes-in-javascript-83ec6ffd8e93)
