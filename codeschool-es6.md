#ES6

## Object Initializer, Destructuring
```js
// Destructuring
let obj = {name : 'james', age: 32};
let {name, age} = obj;

//Initializer
let name2 = 'kitty';
let age2 = 12;
let obj2 = {name2, age2};
```
- array의 경우도 같은 형태로 사용할 수 있음

## Object.assign({}, obj1, obj2)
- 객체 합성. 매개변수로 들어가는 객체가 덮어쓰기되고 맨 앞 객체가 반환됨.
```js
let setting;
Object.assign(setting, default, options)l // 이 방법보다는

let setting = Object.assign({}, default, options); // 이 방법을 권장. 원본 객체 유지할 수 있음
```


## for ... of
- 객체는 사용할 수 없음
- for... in: array, object 순환

## Array.find()
```js
let myArr = [
    {name : 'cake', isDelicious: false},
    {name : 'cookie', isDelicious : true},
    {name : 'bread', isDelicious : true}
]

myArr.find( thing => isDelicious); // isDelicious가 true인 첫번째 요소 리턴.{name : 'cookie', isDelicious : true}
myArr.find((thing) => isDeliciou); // 같은 결과
```

## Map
- object처럼 key, value값 가짐.
- object는 모든 key 값이 string으로 들어감
- key로 들어갈 값의 타입을 알 수 없을 때 Map사용
```js
let myMap = new Map;
myMap.set(first, 1); // map객체에 요소 추가
myMay.get(first);
```

```js
const USERS_PER_PAGE = 10;

let pageSettings = {
  perPage:  USERS_PER_PAGE,
  canSort:  false
};
//키값이 이미 정의되어 있으므로 value값이 덮어쓰일 우려 없을때는 object사용
```
- Map vs. WeakMap
    + WeakMap은 key로 object타입만 들어갈 수 있다
    + 메모리 관점에서 weakMap이 유용


## Set
- Array는 중복되는 item 허용됨
- Set은 원소내 중복값 저장할 수 없음. 원시값이든, 참조값이든 유일한 값만 저장됨
```js
let menus = new Set();
set.add('americano');
set.add({price: 3200});
set.add('mocca');
set.add('mocca'); // 무시됨. array의 경우는 중복으로 저장되어 array.length하면 3 나올것.

console.lo(menus.size); // 2
```
- for ... of로 순환가능
```js
let menus = new Set();
menus.add('cake');
menus.add('coffee');
menus.add('cookie');
menus.add('bread');

for(let menu of menus){
    console.log(menu); // cake, coffee, cookie, bread
}

let [a,b,c,d] = menus; // 배열로 저장됨
```

- WeakSet
    + object만 추가 가능
    + WeakSet.has, WeakSet.delete 메서드 있음
    + 더 이상 사용되지 않는 요소는 삭제됨 - 메모리 효용 좋음
    + for ... of 사용할 수 없음 그럼 언제 사용할까??
        * 특정 객체들로부터 변형될 필요가 없는새로운 그룹을 만들 때
```js

// weakSet 사용하지 않을 때
let post = {~~~};
postList.addEventListener('click', (e)=>{
    post.isRead = true; // post요소 상태 변화를 나타내기 위해 값을 변화시킴
    });
for(let post of postArray){
    if(!post.isRead){ // 각 post에 대해 isRead속성을 확인해야함
        _addNewPostClass(post.elemnt); 
    }
}


// weakSet 사용
let readPosts = new WeakSet();
postList.addEventListener('click', (e)=>{
    readPosts.add(post); // 읽은 post는 readPost에 저장
    });

for(let post of postArray){
    if(!readPosts.has(post)){// has메서드로 객체가 readPost에 있는지 아닌지 확인
        _addNewPostClass(post.elemnt); // readPost에 없다면 클래스를 붙인다
    }
}
```

---

## Class
- 새로운 객체모델이라기 보다 기존에 존재하는 prototypd object model을 사용하기 쉽게 만든 syntatical sugar
```js
// syntatic sugar
class Spinner{

}
let mySpinner = new Spinner();
//------------------------------

// prototype based inheritance
function Spinner(name, desc){

} 
let mySpinner = new Spinner(name, desc);
mySpinner.render();// 위의 코드와 같은 결과

```

```js
class MyClass{
    constructor(name, desc, url){ //새로운 객체 생성하고 초기화하는 특별한 메서드!
        `this.`name = name;
        `this.`desc = desc;
        `this.`url = url; // 인스턴스의 프로퍼티를 할당함. 이 변수들은 클래스 내의 다른 메서드가 접근하여 사용함
        //this를 써야함!! 안쓰면 메서드가 접근 못함
    }

    myMethod(){
     let link = `this.`_innerMethod(`this.`url); //해당 인스턴스의 url에 접근
    }

    _innerMethod(url){ // 언더스코어 의미: 이 메서드는 이 인스턴스의 내부에서만 호출됩니다! 

    }
}
```

- 클래스 상속
```js
//parent Class
class Widget{
    constructor(){
        this.baseCss = 'widget';
    }
    parse(value){
        //...
    }
}

//child class inherit methods and props from parent class
// super() : 부모 클래스의 constructor()메서드 실행함
class AnotherWidget extends Widget{
    constructor(name, description){
        super(); //모든 자식클래스는 constructor메서드 내부에서 super()메서드를 실행해야함!!
        //...
    }
    parse(){
        let parsedName = super.parse(this.name); //super.parse()는 부모클래스의 parse()실행함
        return `result : ${parsedName}`;
    }
    render(){
        let parsedName = this.parse(this.name);//this.parse는 상속받은 메서드
        let css = this._buildCss(this.baseCSS); // this.baseCSS는 상속받은 속성
    }
}
```


```js
//class example
class Advertisement {

  constructor(title, link){
    this.title = title;
    this.link = link;
  }

  _buildContent(){
    return `<h1>${this.title}</h1>
      <a href="${this.link}">${this._linkText()}</a>`;
  }
  
  _linkText(){
    return "Click Here";
  }
  
  render(){
    return this._buildContent();
  }
}

// Here's an example of how this class is used:
/*
  let ad = new Advertisement("CodeSchool", "http://codeschool.com");
  _appendToPage( targetElement, ad.render() );
*/

//subclass 만듦
class SidebarAdvertisement extends Advertisement{
  constructor(title, link){
    super(title,link);
  }
  
  _linkText(){ // 메서드 오버라이딩
    return "Sign up now!";
  }

}

```
