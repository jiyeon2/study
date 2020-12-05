#### fullMenu review

함수는 상단에 몰아서 배치
마크업 시 li내부 a빠진 것 넣어주기

라이브러리 파일 - 폴더 내에 있어서 index였던것, 따로 쓰면 이름 수정

for문 var i= li.length-1 로 변경 가능
prependChild()함수 사용해서 순서대로 붙게
prependChild(ul,li[i])

닫기버튼 setAttribute('aria-label','close') - 접근성관점에서. 버튼요소라서 버튼이라고 읽어주므로 close만 써도 됨

네이밍규칙 필요! **BEM가이드라인 참고하기**

closeMenu 실행시 this?? 

매번 .menu찾기보다 this.parent
선택(query)이 아닌 나를 기점으로 '탐색'하는 게 낫다 // 선택과 탐색 잘 구분 못하고 있다

ul > button들어올 수 없음 문법오류!!!

ul과 button 묶는 div 필요
계속 생성하는건 비용 드니까 제거할 때 변수에 저장해두고 상태변수 만들어서 
존재한다면 생성하지 않고 변수에 있던거 붙인다

제거된거 변수 저장했다가 다시 꺼내면 붙어있던 이벤트는 없어짐..

div에 role=dialog 주면 disabled 줄 필요 없음

ul을 버튼 뒤에 붙이는 게 낫다- 접근성관점, 버튼 다음 ul로 포커싱가게
만약 aria dialog 쓰면 순서 상관없음

query는 요소 존재해야 선택 가능

li만드는 for문 내에서 이벤트 연결필요
this.parentNode이용해서 ul선택 가능
기본적으로 parent.style.background 속성은 false
false일때만 바뀌도록 if문 필요. 
아니면 li 마우스 올라갈때마다 ul<-빨간색을 실행함.
효율적으로 짜려면 중복되는 일 하지 않도록 1번만 실행

인라인으로 style값 붙이지 않으면 $0.style.color로 가져올 수 없다
형변환 Boolean($0.style.color)
!!$0.style.color

-------------
#### 정식님 버튼

마우스통한 이벤트/ 키보드 통한 이벤트
탭은 포커스 이벤트 한번만 발생
클릭시 포커스이벤트+마우스클릭이벤트 두번 발생
이벤트를 감지해서
이벤트 이중으로 발생하는 것 방지해야함

.onclick = function(e/ event/evt){} - 함수 내에 이벤트객체 전달됨. 보이지 않지만 이벤트 함수에 연결된 것 중에 함수전달인자 중 마지막에 들어감



