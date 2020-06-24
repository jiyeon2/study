## 배운것
- <video>는 HTMLMediaElement에서 play, pause와 같은 메서드를 상속한다. mdn에서 video태그 찾아봤을때 저런 메소드 설명을 못찾았는데 HTMLMediaElement에서 설명되어있었다. 내가 쓰고 있는 돔요소의 메서드나 속성 정보를 찾고싶으면 조상요소도 살펴봐야 한다는 걸 알게됐다.

- 재생,멈춤버튼 아이콘 변경 코드를 버튼의 'click'이벤트가 아닌 비디오요소의 'play','pause' 이벤트 리스너로 쓰면 클릭 이외 이벤트에서도 아이콘 변경을 적용시킬 수 있다

- offset property : return coordinate of the mouse pointer related to the position of the edge of the target element

## 궁금한점
- css로 fullscreen 만들기(풀스크린에서도 커스텀 컨트롤러 쓸 수 있는 방법?)