- 160719
    + sass
        *[sass, less 설명 - 김태곤님 블로그](https://taegon.kim/archives/3667) 
        *[sass reference](http://sass-lang.com/documentation/file.SASS_REFERENCE.html#control_directives)

1. top/bottom padding/margin의 퍼센트는 부모 블럭의 ​*너비*​ 기준이다.
2. height의 퍼센트는 부모 블럭의 ​*높이*​ 기준이다
3. 포지션의 top/bottom의 퍼센트는 부모 블럭의 ​*너비*​ 기준이다.
4.  border에는 퍼센트 값을 사용할 수 없다.

##responsive web design 반응형 웹
- 과거 답습x 새로운것에 관심 가지고 계속 배우자!
- 멀티 디바이스가 초점이 아님. 
- 서비스를 이루는 **컨텐츠와 컨텍스트**가 중요!
- 동일 컨텐츠를 다른 모양에 담는 일 one source multi use
- 단순히 기술 operator 아니라 내가 설계자라는 생각으로 참여하기
- 작은화면-필수정보, 큰화면-필수정보+선택정보/ 정보제공에 차별 적도록
- 지금 배우는건 반응형 웹 구성하는 기술이지만, 기술만이 rwd의 전부가 아님!
- 컨텐츠 전략이 필요
- 디자인에 대한 설득도 전문가로서 필요함. 선택지를 줄여주는것이 전문가 라고 함
- 알아야 할 것 : 반응형웹> 모바일퍼스트> 단계적 기능향상> adaptive web 컨텐츠 하나로 전방위적으로 ??
- 중단점 기준으로 the new multi screen world:google
- 단계적으로 기능을 향상시켜라, 기능을 추가하라

- progressive enhancement 점진적 기능향상
    + 크로스브라우징!=모두 같게 보이는 것
    + 기술적 제약에 상관없이 모양이 달라도(똑같이 안보여도) 콘텐츠자체에 접근 가능


- 반응형 웹 위해 알아야할 것
    - 네이티브 컴포넌트가 접근성 준수에 용이함, 커스텀 컴포넌트 접근성 떨어짐. 없는것 아님-aria 이용
    - lazy loading
    - natural user interface 고려한 설계 - 모바일에서 carousel 작은 점 사용하지 않기
    - form 2.0 : placeholder, ...
    - svg 아이콘 폰트 적극 활용 - fontawsome
    - 데이터 커넥션 불안정 고려 - 포털사이트의 경우 다음 메인페이지는 스타일시트를 내부에 포함
    - 성능고려! 느리면 누가쓰나 http 요청 회수 줄임 -img sprite,  
    - ui kit은 svg이용하는 게 좋다
    - gZip압축 백엔드쪽에서 사용
    - 고해상도 디스플레이 대응 @2
    - 이미 있는 프레임워크 사용하는 것도 좋지만 내가 필요한 부분만 직접 만들어 쓰는것도 좋다
    - hover 에서 벗어나기
    - 러프한 프로토타입 > 피드백 

- video 가 flexible하게 크기가 변하는것보다 해당 스크린에 최적화된 리소스 보여주는게 중요

- 함수-재사용하고자 하는 기능 응축시켜놓은 모듈-로 만들면 편하다 function percent(target, context){
return target/(context||960)*100
}

- fluid layout, acaptive layout?
- cc cliping mask
- 클리핑 이미지 bg position: center; height고정하지 않으면 사이즈가 작아짐

- 중단점. 미디어쿼리
- http://embedresponsively.com/ 코드
- https://material.google.com/layout/responsive-ui.html

- 버티컬 디자인

