# Back-End Programming for Front-End Developers
프론트엔드 개발 SCHOOL 1기, FASTCAMPUS
최우영, 2016

github: <https://github.com/ulgoon/Node-to-gulp>
blog: <https://ulgoon.github.io/>

---
## 학습목표

- 웹 개발 프로세스와 백엔드에 대해 이해한다.
- Node.js를 이용한 라우팅과 렌더링에 대해 이해한다.
- Express를 이용해 웹 어플리케이션을 작성할 수 있다.
- npm을 이용해 필요한 모듈을 설치하고 사용할 수 있다.
- Heroku를 통해 작성한 프로젝트를 배포할 수 있다.

---
## Index

### Understanding Back-End
- 백엔드의 개념과 구조
- 백엔드 개발자는 어떻게 생각하는가
- 백엔드 개발자는 어떻게 일하는가

### MEAN stack
- Tutorial with MEAN Stack
- Node.js+Express.js
- gulp Task runner
- Deploy with Heroku

---
# Understanding Back-End


---
### Web architecture

![](http://www.tutorialspoint.com/nodejs/images/web_architecture.jpg)

---
### 웹 개발 패턴의 변화

- 1991 ~ 1999: Sir Timothy John "Tim" Berners-Lee가 하이퍼텍스트 기반의 프로젝트를 제안한 이후 정적인 컨텐츠들을 중심으로 한 웹 기술이 발달
- 1999 ~ 2009: Linux, Apache, Mysql, Php 중심의 동적인 서버, 정적인 클라이언트 모델이 지속됨
- 2010 ~ 현재: Javascript!! (Dynamic Web Client)

---
### 백엔드의 개념과 구조
Back-End
- Server, application, database
- **Interact** with Front-End(Middleware)

**Language&Framework**
- PHP, Java, C#, Ruby, Python, Go, ...
(Laravel, Spring, asp.net, RoR, Django, Gorilla, ...)

---
### 백엔드 개발자는 어떻게 생각하는가

---
#### MVC

![](http://res.cloudinary.com/meshfields/image/upload/v1418290557/mean-stack-mean-detail_bkepvb.png)

---
#### URL, URN, URI

- URL: Uniform Resource Locator
(http://www.example.com/)
- URN: Uniform Resource Name
(urn: id=29764825)
- URI: Uniform Resource Identifier
(http://www.example.com/people?id=29764825)

---
#### License

- GPL(GNU Public License) gpl은 무조건 개방해야함
- FreeBSD  저작권 개념이 조금 강화됨
- MIT License 거의 조건 없음 프리함

---
### 백엔드 개발자는 어떻게 일하는가

---
#### 환경설정

매우매우매우매우매우매우 중요!

- node: package.json, nvm
- django: requirements.txt, pyenv, virtualenv, autoenv,

or [Boxen](https://github.com/boxen/our-boxen)

---
#### git

협업부터 버전관리까지 모든 것을 관리하기 위한 대안
[git-scm.com](https://git-scm.com/book/ko/v2/%EB%B6%84%EC%82%B0-%ED%99%98%EA%B2%BD%EC%97%90%EC%84%9C%EC%9D%98-Git-%EB%B6%84%EC%82%B0-%ED%99%98%EA%B2%BD%EC%97%90%EC%84%9C%EC%9D%98-Workflow)

![](https://git-scm.com/images/about/branches@2x.png)

---
#### REST API
- REpresentational Safe Transfer Application Programming Interface
    + 정보 전달하는데 안전하게 전달??

- by Roy Fielding, 2000

|구분     |		|		|		|		|
|:--------|:------|:------|:------|:------|
|CRUD	  |Create |Read   | Update| Delete|
|HTTP/REST|Post   |Get    | Put   | Delete|
|SQL	  |INSERT |SELECT | UPDATE| DELETE|

---
#### REST API 설계시 주의할 점

- 버전관리 https://api.foo.com/v1/bar
- 명사형 사용 https://foo.com/showid/ --> https://foo.com/user/
    + 유저 새로 만드는 페이지 이름 : create user(x) -> new user(o)
- 반응형 https://foo.com/m/user/, https://m.foo.com/user/ (x)
- 언어코드 https://foo.com/kr/, https://kr.foo.com/ (x)
- 응답상태 코드 (200, 400, 500) 명시해야 함
    + 404, 500 커스텀 페이지를 만들어야 로봇이 ????

-> 다 지키면 RESTful하다
백엔드 개발자와 협업시 이런 내용은 알고 있어야 원활한 업무 

---
![](https://www.troyhunt.com/content/images/2016/02/41694168readImage2.png)

---
#### OS
터미널을 사용합니다 윈도우는...
rm -rf / ??? 루트폴더 삭제 해도 다 안날아감
![](http://cdn.mysitemyway.com/icons-watermarks/flat-circle-white-on-black/bfa/bfa_terminal/bfa_terminal_flat-circle-white-on-black_512x512.png)

---
#### Editor 
Vim - 서버사이드 개발자가 많이 씀
![](http://www.unixstickers.com/image/data/stickers/vim/vim.sh.png)

---
#### Dashboard
웹개발 배포 후 유저트래킹 중요
- **Admin**: Built-in or 3rd party
- **Google Analytics**: general
    + 제일 많이 씀
- **Firebase Analytics**: **hot**
    + 웹, 앱, db까지 관리가능, 비쌈

---
#### 웹 개발 프로세스

##### 서비스 제안 기획 및 개발

- 기획자
스토리보드(유저 시나리오), DB정책, 페이지별 Data Flow 기획 - 프로젝트 관리 - Test

- Back-End
유저 시나리오 검토 - db정책 토대로 API 설계 - Back-End 개발 - Unit Test - Load Test

- Front-End
유저 시나리오 검토 - db정책 토대로 API 설계 - Front-End 개발 - Mock/Unit Test - API 연동

- 개발은 따로 하지만 api연동시 백엔드 개발자와 충분한 토의 필요

##### 배포 및 유지보수

- ftp로 배포하면 안됨 파일만 전송하는거, 보안에 취약함
- http에 s 붙이면 보안 강화된것
- https로 배포하는게 보안면에서 좋음 비쌈
- 
Do not Deploy with **FTP** --> sftp or ftps

- IaaS or PaaS 
(요즘은 인프라, 플랫폼 구분 거의 없어짐)
	- 트래픽에 따라 자유롭게 용량할당 가능
	- 로컬로 구성하는 것보다는 조금은 비싼 가격(트래픽에따라 다름)

아마존 웹 서비스     
s3 퍼블릭용-static, storage 네이버 클라우드와 같다
ec2 서버용 트래픽 감당



---
# MEAN stack

"Write programs that do one thing and do it well."
- 유닉스 철학

---
### Node.js

- by Ryan Dahl, 2009 
- Google V8 JS Engine 기반
- Single Thread Event loop 기반 비동기 IO 처리
- 프론트와 백엔드 기술 통합 -> 생산성 향상

![](http://www.tutorialspoint.com/nodejs/images/nodejs_concepts.jpg)

---
### Tutorial with MEAN stack

Node.js 설치
- <https://nodejs.org/>
- or `brew(apt-get) install node`
- `node --version`

MongoDB 설치
- <https://mongodb.com/downloads>
- or `brew(apt-get) install mongo`
- follow <https://docs.mongodb.com/v3.0/tutorial/install-mongodb-on-windows/>

---
### First Node application

```
$ touch app.js
$ npm init
$ vi app.js
```

```
var http = require("http");
//http Status(200): OK, send response "hello world"
http.createServer(function(request, response){
    response.writeHead(200,{"Content-Type":"text/plain"});
    response.write("hello world \n"); //우리가 볼 수 잇는 내용
    response.end();
    //헤드 보내고 쓰고 닫는게 한 싸이클
}).listen(3030); //다음 요청 올때까지 이 서버를 듣고있는다

//3030 -> process.env.PORT (c9.io)
console.log("Server is running at localhost:3030");
```

---
### routing rule
라우팅 - 경로설정
요청으로 들어온 url 읽어서 해당하는 파일을 클라이언트에 응답(전달)함

- 유의미한 정보를 둘것(/home(x)) home을 따로 두는건 무의미. 루트에 있으면 홈 반환하는 게 좋다
- 너무 긴 URL은 SEO에 악영향
- `_`대신 `-`로
- 공백(공백은 `-`으로)이나 영어외의 문자는 되도록이면 지양
- 소문자만 !

---
### route

```
$ mkdir layout
$ touch home.html
```

```
$ touch router.js
$ vi app.js

var router = require("./router.js");
router.home(request, response);
router.slug(request, response);

$ vi router.js
function home(request, response){
	...
};

module.exports.home = home;
```

---
### sync, Async
```
var fs = require("fs");

fs.readFile //비동기 순서 상관없음
fs.readFileSync //동기 순서 중요
```

```
!Caution

fs.readFile("base.html", function(err, data){
	fs.readFile("header.html", function(err, data){
    	fs.readFile("footer.html", function(err, data) {
        	fs.readFile("home.html", function(err, data) {
            	res.write(data);
                res.end();
            }
        }
    }
}
```

---
### render

```
$ vi router.js

var baseResource = fs.readFileSync("./layout/base.html", "utf8");

baseResource = baseResource.replace("{{ header }}", "headerResource");

responce.write(baseResource);
response.end();
```
```
$ touch renderer.js
```

---
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
## gulp
- streaming build system
- 작업자동화(grunt, ...)
- 이미지 압축, 코드축소, 유닛테스트, ...


### Taskflow
`코드작성 - JS test - JS Minify - JS Merge - CSS Minify - CSS Merge - 결과물`


---
### gulp - howto

```
$ npm install gulp --global
$ npm install gulp --save-dev
```

```
$ touch gulpfile.js

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

gulp.task("uglify", function(){
	return gulp.src("public/src/*.js").pipe(uglify()).pipe(gulp.dest("/public/dist/"));
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
