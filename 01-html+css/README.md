## 작업중인 코드를 git repository로 만들기!
###[Adding an existing project to GitHub using the command line](https://help.github.com/articles/adding-an-existing-project-to-github-using-the-command-line/)

- git init -> add -> commit -> remote add origin 'URL' -> remote -v -> push originnn master

1. 작업중인 폴더에서 git Bash를 연다
2. 내 컴퓨터의 폴더를 git repository 로 만들기
```
$ git init
```
3. 폴더 내의 모든 파일을 스테이지에 올린다
```
$ git add .
```
4. 스테이지에 올라간 파일들을 커밋한다
```
$ git commit -m "first commit!"
```
5. gitgub 사이트에서 repository를 만들고 원격 repository URL을 복사해온다
```
$ git remote add origin 복사해온 URL

$ git remote -v 
//-v는 verify
```
6. 푸쉬한다
```
$ git push origin master
```
7. 끝!

한 단위 작업이 끝날 때 마다 
`add commit push!`
