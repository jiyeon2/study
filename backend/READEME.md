#수업 내용 메모

### npm
npm != Node Package Manager

<https://npmjs.com>
```
$ npm version
```

```
$ npm install <something>

$ npm install express -g

$ npm install gulp -g
//install devdependency
$ npm install gulp-<something> --save-dev

$ npm install body-parser --save
```

---
### package.json

- 프로젝트를 설명하고, 의존성 목록을 생성
- `$ npm install --save`로 정의
- `$ npm install`로 명시된 패키지 다운로드
- `.gitignore`에 `node_module/` 추가


```
"dependencies": {
    "express": "^4.13.1",
            ...
}

```

---
### Node.js+Express.js

`$ npm install express -g`


---
### Express.js Application Flow

![](http://i.imgur.com/oGUSkq8.png)


---
### body-parser
```
$ npm install body-parser --save
```

---
### gulp

프로그래밍 이외의 다른것들을 gulp, nodemon이 해줌

[vim set number](http://ngee.tistory.com/216)
---
### task flow

`코드작성 - JS test - JS Minify - JS Merge - CSS Minify - CSS Merge - 결과물`
ㄴ
```
$ npm install gulp --global //기본적인것들을 설치해둠. 글로벌에서 써야 할 게 따로 있음
$ npm install gulp --save-dev //자신의 개발환경에서 모듈 설치해서 해야하기 때문
```

```
$ touch gulpfile.js //package.json 가서 devdependency에 gulp있는거 확인

var gulp = require("gulp");

//hello라는 gulp task를 등록
gulp.task("hello", function () {
    return console.log("hello gulpworld");
});

$ gulp hello
```

---
### 기본값 설정하기

```
$ gulpfile.js

var gulp = require("gulp");

//hello라는 gulp task를 등록
gulp.task("hello", function () {
    return console.log("hello gulpworld");
});

gulp.task("default", ["hello"]);

$ gulp
```

---
### 우선순위 설정하기

```
$touch gulpfile.js

var gulp = require("gulp");

//hello라는 gulp task를 등록
gulp.task("hello", function () {
    return console.log("hello");
});
//기본값으로 gulpworld실행하지만 배열에 있는 hello를 먼저 실행한다
gulp.task("gulpworld", ["hello"], function () {
    return console.log("gulpworld");
});

gulp.task("default", ["gulpworld"]);

$ gulp
```

---
### Minify(uglify)
```
$ npm install gulp-uglify --save-dev

var uglify = require("gulp-uglify");

//pipe - 태스크가 연결되서 실행되도록 함
gulp.task("uglify", function(){
    return gulp.src("public/src/*.js").pipe(uglify()).pipe(gulp.dest("/public/dist/"));
    //개발진행중 파일 src -> 배포용파일,걸프태스크 거친 파일들 dist
    //src내에도 img,js,css 폴더 나눠야함
});

gulp.task("default", ["uglify"]);
```

---
### watch

```
gulp.task("watch", function(){
    gulp.watch("public/src/*.js", ["uglify"]);
});

gulp.task("default", ["uglify", "watch"]);
```

---
### 이외에도..
![](https://github.com/osscafe/gulp-cheatsheet/raw/master/images/en-js-p1.png)


---
### or Install Express-generator
```
$ npm install -g express-generator
$ npm install
$ bin/www
```

That's it!!

- Pros: 빠르게 기본적인 구조를 구현 가능
- Cons: 버전, 패키지 관리가 안되는 경향이 있음. (jade -> pug)

---
### Template Engine

- pug(jade)
- ejs
- handlebars

---
### Boilerplate

- [Yeoman](http://yeoman.io/)
```
$ npm install -g yo
$ npm install -g generator -webapp
$ yo webapp
$ yo angular:controller MyNewController
```
- [Mega boilerplate](http://megaboilerplate.com/)

    - Pros: 설정 몇번으로 거의 배포 직전의 서비스를 만들 수 있음
    - Cons: 커스터마이징 하는데 애를 먹을 수 있음

---
### socket.io
```
npm install --save socket.io
```

---
### MongoDB

---
### RDB vs NoSQL
RDB: Relational DataBase
NoSQL: Not Only SQL

| RDB | vs | NoSQL|
|:----|:--:|-----:|
|column+row==>Table|구조|column, key-value,document,graph|
|회계,고객,제품 등 핵심정보|정보|데이터양이 많고 급격히 늘어나는 시스템|
|MySQL, MariaDB, postgresql|제품|MongoDB, casandra, couchbase|
|단일시스템 성능 좋음|이점|대용량 처리에따른 성능 저하 적음(동적 수평 확장)|

---
### useful Links

[json dummy](https://jsonplaceholder.typicode.com/)

---
### Deploy with Heroku
Cloud Server
- AWS
- Azure
- Google cloud platform
- [Heroku](https://www.heroku.com/)

---
### Deploy with Heroku
[heroku cli download link](https://devcenter.heroku.com/articles/heroku-command-line)

```
$ brew install heroku-toolbelt
$ heroku update

$ heroku login
```

```
$ express --ejs --css sass { nickname }heroku
```

---
### with express-generator

```
$ vi /routes/index.js
```

```
var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.render('index', { title: 'Heroku' });
  console.log('hello heroku');
});

module.exports = router;
```

```
$ touch Procfile

web: ./node_modules/.bin/forever ./bin/www
```

---
### Heroku Deploy

```
$ heroku app:create { nickname }heroku
$ heroku apps

$ heroku app:delete { nickname }heroku
```

```
$ git init
$ git add .
$ git commit -m "initial commit"
```

```
$ heroku git:remote -a { nickname }heroku
$ git push heroku master

$ heroku ps:scale web=1
$ heroku open
```

```
{ nickname }.herokuapp.com 접속
```

---
### Heroku Operation

```
// show server status
$ heroku ps

// view logs
$ heroku logs -tail

// shutdown
$ heroku ps:scale web=0
```

---
### 챌린지!!
[40라인으로 슬랙봇만들기](https://mager.co/how-to-write-a-slackbot-in-40-lines-of-code-52cf0c4fcf42#.2sfbrunyt) 를 이해하고 커스터마이즈 할 수 있다면 여러분은 node.js express.js heroku git REST api를 이해하셨습니다.