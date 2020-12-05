## 알게된것
- XMLHttpRequest(), axios 말고 fetch()로도 ajax 요청으로 데이터 받아올 수 있다
- fetch는 promise객체 반환한다
- typeahead는 자동완성 기능이다
- [String.replace()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replace)
```javascript
    const newStr = str.replace(pattern, replacement);
    // 매개변수로 pattern, replacement 두가지를 받는데, pattern에 정규표현식이 아닌 일반 문자열을 쓰면 처음으로 매칭되는 문자열만 바뀐다
```
- [Number.toLocaleString()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/toLocaleString) : 숫자에 1000단위로 , 표시하기 위해 사용함
```javascript
    function numberFormat(inputNumber) {
        return inputNumber.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }
    // https://this-programmer.com/entry/JavaScript%EC%9E%90%EB%B0%94%EC%8A%A4%ED%81%AC%EB%A6%BD%ED%8A%B8-%EC%88%AB%EC%9E%90-%EC%B2%9C-%EB%8B%A8%EC%9C%84%EB%A7%88%EB%8B%A4-%EC%BD%A4%EB%A7%88-%EC%B0%8D%EB%8A%94-%EB%82%B4%EC%9E%A5-%ED%95%A8%EC%88%98toLocaleString
    // 이 함수는 소수자리도 콤마처리를 하는 문제가 있다고 한다
```
## 궁금한점
- 영상에선 정규표현식을 이용해 영어 단어를 찾아냈다. 한글 자동완성 기능은 어떻게 만들 수 있을까?
- fetch.then(...) 대신 async, await를 써서 코드를 짤 수 있을까, 어떻게 써야할까
- 목록이 길어지면 인풋창이 올라가는게 보기싫다 어떻게 고정하지