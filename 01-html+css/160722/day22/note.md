####명령어
cd ~/ 이동 가능한 경로 나타남
~ 사용자 계정폴더 가는것
clear 화면 지워짐
- control +c : 뭔가 돌아가고 있을 때 안움직이면 끄기

mv 는 move + rename가능
빈 디렉토리 삭제는 rmdir
파일 있는 디렉토리 삭제는 rm -rf(-붙은건 옵션)
subl - 서브라임에서 바로 열고싶은 경우 등록
codelion
udacity
suble symbolic

##sass
- 믹스인 : 코드 합쳐주는 것
- 선택자 상속 - 선택자 묶어줌
- sass -> css로 컴파일시키는것
- native 보다 좋다면 갖다쓰는것도 괜찮다 하지만 알고 쓰자!
- slideshare/jeehoon - less slide
- gui기반 툴 - scout는 매우 느림 쓰려면 koala
- sass는 pre processor 전처리기 : 브라우저에서 해석하기 전에 처리한다
- 전역설치 : 어디서나 접근 가능하게 설치
-  // 주석은 css로 컴파일 안됨. 외부에 공개되지 않는 비밀주석
-  output 안쓰면 그 폴더에 그대로 생김

-  sass  left: / 띄어쓰기하나 있어야함.
-  들여쓰기 시 탭이랑 스페이스 섞여있으면 오류남
-  들여쓰기 띄어쓰기 신경쓰기 어려우면 scss쓰는 게 나음

- output옵션 4가지
    + extend 펼쳐진상태
    + nested 기본. } 올라가있는상태
    + compact 한줄로
    + compressed 띄어쓰기 없이 한줄로  : 배포시

- 가이드는 공통 룰이므로 매우 종요함!
- 복잡한 계층구조도 가이드에 정리

- color: lighten($button-primary-color, 30%)
- sass가 지원하는 컬러함수. 30%는 포토샵에서 명도 30%의미

- sass 선택자상속 = 그룹핑
- ui kit을 sass로 만들어보기
- html, css 설계가 중요 - 유지보수, 재사용패턴 고려!
- 마인드맵으로 @import 구조 정리가능, 그림으로 그려서 정리하기!!
- 파일 이름 앞에 _붙여야 함, @import 할때는 _나 확장자 필요없음
- sass내에서 @import normalize.css 확장자 명시하면 통합되지 않고 css파일에 그대로 @import url(normailize.css);가 생김
- sass의 @import는 css @import와 다름




- scss 중첩시 괄호 많이 생기므로 많이 쓰지 말것
- & 부모 참조
- 선택자 상속
- % 모듈만들기. 실체화가 아닌 설계도이다
- sass는 쪼개도 import로 합칠 수 있다

#### 벌써 학원 수업 절반 지남!@