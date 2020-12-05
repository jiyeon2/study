#SASS(Syntactically Awesome Style Sheets)

## node-sass
- sass, scss 파일을 css파일로 변환시켜줌!

설치
```
$ npm install node-sass --global
```

도움말
```
$ node-sass --help
```

변경사항 관찰 후 파일 변환
```
$ node-sass -wo sass/ css/ --output-style expanded --source-map map
```

- output style : 변환된 css 스타일 설정
    + nested
    + expanded : 작업 시 확인하기 편함
    + compact
    + compressed : 배포시

- source-map : scss, sass 파일과 css파일 매칭시켜 줌. 


##sass - mixin 이용한 media query
- [Write Better Media Queries with Sass](https://davidwalsh.name/write-media-queries-sass)
```sass
$tablet: "(min-width: 768px) and (max-width: 1023px)"
$desktop: "(min-width: 1024px)"

p 
  font-size: 16px


@media #{$tablet} 
  p 
    font-size: 18px
  
@media #{$desktop} 
  p 
    font-size: 20px
  
```
