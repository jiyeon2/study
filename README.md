# portpolio - fitbit dashboard


## 반응형 웹을 위한 화면 breakpoint 정하기

- fitbit app 사이즈별 레이아웃 변화 참고

- small(기본, mobile first) : ~ 500px
- medium : 501px ~ 800px
- large : 801px ~ 1260px
- wide-view: 1260px ~


## 해결할것
- 문제점 : text-indent이용한 ir 적용 안됨
```sass
    .gnb-item
        display: block
        width: 20%
        float: left
        margin: 0
        padding: 0
        text-indent: -9999px //not working!!@!
```
- 해결
```sass
white-space: nowrap
text-indent: 150%
overflow: hidden
```


- dashboard-section width값을 퍼센트로 지정, float:left함, section마다 높이가 안맞아서 section이 차례대로 왼쪽으로 붙지 않음
- svg로 그린 그래프가 화면 커지고 작아짐에 따라 자연스럽게 움직이지 않음. 한번 그려진 상태로 고정됨
    + svg 컨테이너 만들고, svg크기에 딱 맞게 그래프 그리기

## 해야 할 것!

### section별 뷰 구현 - 이미지 마저 넣기
### svg 애니메이션 - 그래프별 색깔, 위치 다르게
### 차트 만들기
   


## 작업한거
|날짜|내용|
|---|---|
|0907 수| dashboard index.html코딩, sass로 레이아웃 작업 |
|0908 목| svg로 원형 그래프 그리고 애니메이션|
|0909 금| 하트 애니메이션, d3.js연습
|0910 토| 
|0911 일| 
|0912 월| 
|0913 화| 
|0914 수| 
|0915 목| 
|0916 금| 
|0917 토| 
|0918 일| 
|0919 월| _발표준비시작
|0920 화| 
|0921 수| 
|0922 목| 
|0923 금| _하이어링데이!_


### 참고
- [Top 10 Screen Resolutions](https://www.w3counter.com/globalstats.php)
- [ir기법](http://www.zeldman.com/2012/03/01/replacing-the-9999px-hack-new-image-replacement/)
- [circle progress bar animation trick with css, JS](http://stackoverflow.com/questions/26781576/svg-progress-circle-with-percentage)
- [Scroll Page Horizontally With Mouse Wheel](https://css-tricks.com/snippets/jquery/horz-scroll-with-mouse-wheel/)