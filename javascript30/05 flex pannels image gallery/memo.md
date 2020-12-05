## 알게된것
- element.classList.toggle() : classList 안에 add(), remove(), toggle()메서드가 있다
- 코드에서 이미지를 background-image로 넣었길래 이미지 태그와 background-image 속성 차이가 궁금해졌다. 대충 찾아보니 정보를 담고있는 컨텐츠의 역할을 하냐(<img>), 디자인 요소로서 역할을 하느냐(background-image 속성)의 차이인듯 하다. img 태그는 alt 속성으로 스크린리더를 사용하는 사람들에게 이미지의 내용을 전달할 수 있다.
    - [HTML img tag vs CSS background-image](https://blog.px-lab.com/html-img-tag-vs-css-background-image/)
    - [Image tag vs background property](https://pawelgrzybek.com/image-tag-vs-background-property/)

## 궁금한점
글자 크기가 변하는 과정에서 한글 단어가 피즈치/자 로 갈라졌다가 붙었다가 하는게 보기싫어서 word-break: keep-all 속성으로 아예 단어가 끊어지지 않게 고정해뒀다. word-break속성이 어떤 역할을 하는지, 왜 글자가 떨어졌다 붙었다 하는지 궁금하다.
보면 볼수록 패널이 늘어났을때 트랜지션이 끊기는 느낌이라 이상한데 뭐가 이상한지 모르겠다 흑흑