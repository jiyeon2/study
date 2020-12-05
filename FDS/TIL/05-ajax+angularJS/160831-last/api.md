- No 'Access-Control-Allow-Origin' header is present on the requested resource. 오류
[javascript ajax 크로스 도메인 요청 하기 ](http://adrenal.tistory.com/16)

###내가 있는 곳의 일출 일몰시각 표시
- [위도 경도 알아내기](https://developer.mozilla.org/ko/docs/WebAPI/Using_geolocation#현재_위치_가져오기)
```js
navigator.geolocation.getCurrentPosition(function(position){
    console.log(position.coords.latitude, position.coords.longitude)});
    //위도 경도값 표시해줌

    //변수에 저장해서 쓰려면 어떻게 하지?
```
