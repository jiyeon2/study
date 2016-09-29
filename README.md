## cli study

- vim에디터 작성시 i 혹은 insert
- 작성 완료 후 esc -> :wq 저장하고 닫기


-----

- git bash 에서 vimtutor 치면 vim 에디터 사용법을 볼 수있다
- rm, rmdir 등 명령어에 대한 옵션 보려면 명령어 다음 --help 붙인다


----


## emmet 단축키

#### filter - emmet코드 뒤에 쓴다
- |c : comment, 시작, 끝 주석 생성
- |t : trim, 불필요한 마커 삭제
- |s : single line, 한줄로 출력
- |e: excaping, 엔티티 코드로 변경해서 출력

#### 몰랐던 단축키(windows)

- `ctrl`+`alt`+`enter` : 실시간으로 emmet 문법 적용하여 html 코드 생성


- `ctrl`+`,` : 선택된 블록요소에서 부모요소로 선택영역 확장
- `ctrl`+`.` : 선택된 블록요소에서 자식요소로 선택영역 축소
    + [preference > key bindings - users]에서 다음의 코드 추가
        `{"keys":["ctrl+."], "command": "run_emmet_action","args":{"action":"balance_inward"}}` 

----- 


커서 이동
- `ctrl`+좌우방향키 : 띄어쓰기 단위로 커서 이동
- `ctrl`+`alt`+좌우방향키 : 태그 단위로 커서 이동
- `shift`+`ctrl`+`,`/`.` : 태그이름, 속성, 속성 값으로 커서 이동


-----


- `shift`+`ctrl`+`/` : 해당 요소만 코멘트 설정

- `shift`+`ctrl`+`;` : 해당 태그만 제거

- `ctrl`+`u`: 이미지 width, height 속성 값 설정

-----

- `shift`+`ctrl`+`y` : 수학식 계산

- `ctrl`+ 상하 방향키 : 숫자값 1씩 증감 (크롬 개발자도구와 같음)
- `alt`+ 상하 방향키 : 숫자값 0.1씩 증감
- `shift`+`alt`+ 상하 방향키 : 숫자값 10씩 증감
