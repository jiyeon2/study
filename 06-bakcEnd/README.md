# 백엔드 특강-day1

### Web architecture
- request/ respose가 중요
- http

### 백엔드의 개념과 구조
- db와 client 사이에서 요청과 응답 처리하는 middleware

- angular가 view와 vm까지 처리할 수 있어서 좋다, 스타트업에서 서버개발자의 업무양 줄여준다 

### ur~
- url 웹서버에 보내면 ip주소를 다시 보내줌
- urn은 url뒤에 붙어서 특정조건이거나 id가 urn인 페이지를 찾아가는것
- uri = url + urn, 주소에서 가장 unique 한 식별자
    + 파이선에서 url파싱할 때 urn변수로 두고 쉽게 데이터 가져올 수 있다

- terminal
bashshell말고 zshell을 씀 -> oh-my-zsh(theme: agnoster 파란색화살표, git 브랜치도 표시해줌)ㄴ -> color: solarized-dark theme

- git flow전략
master / develope 분리
develpe에서 작업하고 머지 전에 풀
git flow이용해서 브랜치 편하게 만들 수 있다


---

내가 작업하는 폴더에는 깃 정보가 하나만 있는게 좋다
rm -rf .git

repo생성할 때
.gitignore
    node (node-modules 올라가지 않도록 설정)

$ git status : git 상태 알수 있다

cd front-end-develpment -> cd front- tab누르면 자동완성
프로젝트명 지을때도 안겹지체 짓기

vi .gitignore 깃에 올릴 때 무시할 파일 이름 뜸

vim 명령어는 :로 시작
:q 나가기
:wq 저장하고 나가기
:q!

명령어는 한번에 한가지씩

touch app.js
git status  - untracked file이라 뜸
npm init
    entry point 실행할 때 어떤 파일에 연결할지 설정 app.js만들지 않았으면 index가 자동 설정됨
    -> package.json 생김
    해당 노드프로젝트 모든 데이터가 여기 있음

npm init먼저 하는게 좋다
기능단위별 add commit push해야 함

vi app.js  vim에디터로 app.js 켬
insert 눌러서 insert모드로 바꿔야함
esc

외부모듈 불러왔을때 구분위해 2칸 띄운다

node app.js
localhost:3030에서 확인가능

git add .

git commit -m "message"

git push -u origin master
----

라우트

static file css, html 등은 따로 모아서 저장

vi
:w 저장만 하고 나가지는 않음
insert 안누르고ㅗ dd 하면 그 줄 삭제

```
var http = require("http");

var app = http.createServer(function(req,res){
        console.log(req.rul);

        if(req.url == "/"){ //url이 루트면
           res.write("home");
           res.end();
        }
  var detailId = req.url.replace("/","");
// 루트 앞에 내용을 빈 문자열로 바꿈
});

app.listen(3030, function(){
        console.log("Server is running at localhost:3030");
});

```

 npm install -g nodemon
- app.js 수정하면 껐다 다시 켜야함
- 노드몬 해놓으면 변경사항 감지해서 바로 서버 껐다 켜줌
- nodemon version 으로 확인

router.js 만들고 외부모듈 불러옴 require('./router')
fs는 노드에 기본으로 들어있는 모듈

insert 아닌 상태에서 shift +y (yank?)복사 p(paste) 붙여넣기



public - 정적인 파일 저장
    src
    dist

--save-dev : 개발하는데 필요한것, 이게 없어도 작동함
--save , -s : pacakge.json-dependency에 추가됨, node프로젝트 돌리는데 꼭 필요한 모듈이다 의미, 배포할 때

git push -u origin master : -u는 방향성 결정. 맨처음 한번만 쓰면 됨