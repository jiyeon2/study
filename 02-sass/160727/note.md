#### Sass 연산자
- %
    + 대체선택자 이기도 하지만
    + 나머지 연산자 이기도 함
- /
    + font 속기형 사용 시 주의!
```Sass
$base: 13px
font: $base/1.5 "Spoqa Han Sans"
```
하면 13px/1.5로 컴파일되지 않고 13px 나누기 1.5 해서
`font: 8.6666px "Spoqa Han Sans"`라고 나옴

이럴 때 인터폴레이션 사용 #{ }

##### 인터폴레이션 = 내삽법, 보간법
- `#{ }` 중괄호 내에 넣는 변수나 연산을 문자열로 치환하여 연결시켜줌

```Sass

$spoqa-language: ko

@import url("http://spoqa.github.io/spoqa-han-sans/css/SpoqaHanSans-#{$spoqa-language}.css")

// => @import url("http://spoqa.github.io/spoqa-han-sans/css/SpoqaHanSans-ko.css") 로 컴파일 됨
```

##### 문자 연산
- 문자 접합시
`cursor: n + -resize`
=> `cursor: n-resize` 
- 따옴표 없이도 문자열로 인식함. 공백이 필요하다면 " "이용
- Spoca + han =Spocahan
- Spoca + " han"=Spoca han

##### color 연산
색깔 `#ff0000 + #00ff00 = #ffff00`처럼 연산도 가능

## @MIXIN
- `@mixin 믹스인이름` 으로 정의
- `@include 믹스인이름` 으로 호출
- 자바스크립트 함수와 유사하게 매개변수 사용 가능
- @include로 믹스인 호출시 정의된 믹스인 코드가 해당 선택자 아래로 들어옴
       + @extend는 @extend 된 선택자와 같이 그룹핑 됨. 선택자가 끌어올려진다 는 점이 다름
- 코드를 재사용한다는 점에선 같지만 확장성은 mixin이 extend보다 좋다
- 
| |Sass|SCSS|
|---|---|---|
|믹스인 선언|=믹스인이름|@mixin 믹스인이름|
|믹스인호출|+믹스인이름|@include 믹스인이름|

```Sass
@mixin boxing($boxing-value: border-box)
    -webkit-box-sizing: $boxing-value
    -moz-box-sizing: $boxing-value
    box-sizing: $boxing-value

.container
    @include boxind(content-box)

// => 
.container{
    -webkit-box-sizing: content-box;
    -moz-box-sizing: content-box;
    box-sizing: content-box;
} 
/*로 컴파일 됨*/
```

@mixin 믹스인(매개변수=parameter){ ... }

@include 믹스인(전달인자=arguments){ ... }

```Sass
@mixin 믹스인 ($arg1, $arg2){
    width: $arg1;
    height: $arg2;
}
```

인자값 생략하거나 잘못된 인자값 입력으로 인한 오류 막기위해 
$arg1:null 과 같이 기본값 지정 가능 (변수선언시 !default 같은것)

```Sass
@mixin shadowing($shodow...){
    text-shadow: $shadow
}
```
매개변수 개수 상관없이 여러개 쓸 수 있음. 멀티섀도우, 멀티백그라운드 같은거 쓸 수 있음

- mixin은 매개변수 사용 가능할 뿐 아니라, 내부코드 자체도 확장 가능!

###### @content

```
@mixin mq($tablet){
   @media screen and (min-width: $tablet) {
    @content
   }
}

p
    @include mq(800px)
        width: 30%
        border: none
    // @include mq 아래 작성한 코드들은 mq mixin의 @content 부분에 위치함
```

