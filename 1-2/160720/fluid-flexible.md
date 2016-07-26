fluid: 물처럼 흐르는, 레이아웃이 유동적인 것 의미
flexible: 구부릴 수 있는, 유연한, 이미지나 비디오 크기가 유동적으로 변하는 것 의미

meta viewport 표준 코드는 아님

- text-size-adjust:100% 모바일에서 텍스트 크기 100%로 보이게
- normailize 불러오지 않으면 써야함
- 이 코드 적용하지 않으면 가로로 돌렸을때 텍스트 크기가 커지는 버그 있음

반응형 디자인시 % 값 사용하면 소수점 나올 때 브라우저별 소수점 올리거나 내리는 방식 다름 - sub pixel bug발생 가능성 있음 알고있어야함!

- isolate float 
    + 순서 지정하기 좋다
    + sub pixel 문제 해결가능

- floatbox
    + 세로로 중앙 정렬 쉽게 해결 가능 
    + inline-flew 하면 float 적용ㅎ나것처럼 width 줄어듦

- flex box 줄여도 안의 item은 contents 까지는 shrink

- align-items:기본 속성이 stretch. 
    + direction column 이면 메인축이 세로. 아이템들이 가로로 꽉 차게 하려면 align-items: strecth인데 width값이 지정되지 않아야 함!
    + direction row이면 메인축이 가로. 아이템들이 세로로 꽉 차게 하려면 height 값 지정하지 않아야 함!

min-width 대신 
flex=1 = flex basis, grow, shrink모두 1로 쓰겠다
flex basis 최소 폭. 기본은 auto

shrink값이 기본으로 1지정되어 있음, flex 컨테이너 줄어들면 고정폭도 같이 줄어듦
shrink,grow 값은 0,1,2 가능. basis기준으로 몇배 감소, 증가할것인가
flex-basis는 grow, shrink의 기준
basis기준값은 auto = 컨텐츠의 width
flex 부분 적용하여 기본 틀- 위의 내용 연습하기

https://philipwalton.github.io/solved-by-flexbox/ 연습하기!
- 과제! 
- 코딩가이드(목 자정), 
- indulge 만들기
- 반응형 그리드 예제(주말)


%
width
height
margin
padding
font-size
line-height

