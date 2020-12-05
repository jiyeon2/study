### flex-box
|display: flex| display: inline-flex
|----|-----|
|블록요소처럼 부모너비만큼 차지함| 인라인요소처럼 자식 너비만큼 너비 가짐

- display: flex/ inline-flex 적용된 컨테이너에는 멀티컬럼 속성 적용 안됨 column-*, ::first-letter, ::fist-line적용 안됨
- flex컨테이너 내부 자식인 flex item에는 float, clear, vertical-align 적용 안됨

### flex
- flex item에 적용
- flex : flex-grow flex-shrink flex-basis
- flex-grow
    + 0, 양수값 가질 수 있음.
    + 초기값 0 (남는 공간 있어도 flex item 크기 늘어나지 않음)
    + flex container 내부 남은 공간 배분하는 비율
- flex-shrink
    + 0과 양수값 가질 수 있음
    + 초기값 1 (flex container 내부 공간 줄어들면 item크기도 줄어듦)
    + flex container 내부 공간이 음수값이 될 때(본래 크기보다 감소할 때) 감소한 공간만큼 item 크기 줄이는 비율?? 
- flex-basis
    + 키워드, width에 사용되는 단위 쓸 수 있음. 숫자만 쓰는건 안됨
    + flex item의 width 같은것. 최초의 main size
    + 초기값 auto (컨텐츠 크기만큼 width 가짐)

|flex 키워드|flex-grow|flex-shrink|flex-basis| |
|---|---|---|---|--- |
|initial|0|1|auto|item 늘어나지 않음|
|auto|1|1|auto|item|늘어나기도 하고 감소하기도 함|
|none|0|0|auto|늘지도 않고 줄지도 않음|
| |양수|1|0| flex-basis:0, 최초 사이즈가 0이므로 flex-grow 값이 width처럼 쓰임??|

- flex 속기형 사용 권장
