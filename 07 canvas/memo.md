## 알게된것
- canvas로 뭔가를 그릴 때 
1. context 생성
2. ctx 스타일 지정(strokeStyle, fillStyle, lineWidth 등등)
3. ctx.beginPath()
4. ctx.moveTo(x,y) 시작지점 x,y지정 (캔버스 좌상단 좌표가 0,0)
5. ctx.lineTo(x,y) 이동할 지점 x,y
6. ctx.stroke() 해야 그려짐

- 드롭다운 메뉴 만들때 selelct태그와 option 태그 사용

## 궁금한것
캔버스 크기 지정할 때 window.innerWith 를 지정했는데도 왜 body보다 크기가 큰것인가

캔버스 감싸고 있는 main태그를 flex로 해놨다. 브라우저 크기 바뀔때마다 캔버스도 사이즈가 바뀌는데 라인이 시작하는 위치가 이상하다

캔버스로 그린 이미지를 다운받을 수도 있을까