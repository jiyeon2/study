# portpolio - fitbit dashboard


## 반응형 웹을 위한 화면 breakpoint 정하기
- [Top 10 Screen Resolutions](https://www.w3counter.com/globalstats.php) 참고
- fitbit app 사이즈별 레이아웃 변화 참고

- small(기본, mobile first) : ~ 500px
- medium : 501px ~ 800px
- large : 801px ~ 1260px
- wide-view: 1260px ~


## 문제발생!
- 문제 : text-indent이용한 ir 적용 안됨
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
//[다른방법](http://www.zeldman.com/2012/03/01/replacing-the-9999px-hack-new-image-replacement/) 사용
white-space: nowrap
text-indent: 150%
overflow: hidden
```


- 문제 : dashboard-section width값을 퍼센트로 지정, float:left함, section마다 높이가 안맞아서 section이 차례대로 왼쪽으로 붙지 않음



## 해야 할 것!
### section
### svg 애니메이션


## 작업한거
|날짜|내용|
|---|---|
|0907 수| dashboard index.html코딩, sass로 레이아웃 작업 |
