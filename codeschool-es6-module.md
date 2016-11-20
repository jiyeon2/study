## module
```html
<script src="./someLibrary.js"></script>
<script src="./otherLibrary.js"></script>
<script src="./anotherLibrary.js"></script> <!-- 전역에 모든 객체가 들어감 -->
```

```js
// flash-message.js
export default function(msg){ // export - 외부로 내보냄, default를 쓰면 외부에서 아무 이름으로 불러올 수 있음
    alert(msg);
}
```

```js
// app.js
import flashMessage from './flash-message.js'; // flash-message.js 파일에서 가져옴, default로 내보냈으므로 flashMessage든 FM이든 마음대로 붙일 수 있음
flashMessage('hello');
```

```html
<!DOCTYPE html>
<body>
    <script src="./flash-message.js"></script><!-- global namespace에 아무것도 추가하지 않음! -->
    <script src="./app.js"></script> <!-- 이렇게 쓰면 됨! -->
</body>
</html>
```

---
모듈에서 여러 함수 내보낼 경우
```js
//--------------------- flash-message.js
export function alertMsg(msg){ // default 쓰지 않는다
    alert(msg);
}
export function logMessage(msg){ // default 쓰지 않는다
    console.log(msg);
}
//혹은
function alertMsg(){};
function logMessage(){};
export {alertMsg, logMessage};

//----------------------app.js
import {alertMsg, logMessage} from './flash-message.js'; // 같은 함수명 써야함
alertMsg('ddd');
logMessage('ddd');
// 혹은 전체 모듈을 import하는 경우
import * as flash from './flash-message.js';
flash.alertMsg('ddd');
flash.logMessage('ddd');
```
