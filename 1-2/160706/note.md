    <!-- 
position properties
-   static(default)
-   relative(기준: self) * 일반흐름(normal flow)을 깨지 않는다.
-   absolute(기준: offsetParent) *일반흐름을 벗어난다. float와 유사해보임 
                                  *display 값이 block으로 변경됨.
                                  *absolute 적용된 요소의 부모에 relative를 설정하는 이유: relative는 일반 흐름을 깨지 않아서
                                  *float과 차이점: float은 부모요소가 float된 요소를 감싸게 하는 방법이 있지만, absolute는 별도로 height높이를 지정해야 한다.
(offsetParent? 자식요소를 포함하는 가장 가까운 부모 요소 중에 position 속성이 static이 아닌 부모 요소)
-   fixed(기준: screen,viewport 보여지는 화면에 상대적.)
    *기본적으로는 absolute와 유사하게 처리되어 보이나, 처리 결과는 다르다.
    *고정 형태로 위치가 설정됨
    *화면 스크롤과 상관 없이 항상 그 자리를 유지한다

- z-index 속성의 경우는 반드시 position 속성(static제외)과 함께 사용된다. 
  z-index 속성값은 양의 정수, 0, 음의 정수 사용이 가능. 
  단, 설정시 10또는 100단위로 설정하는 것이 유지보수 관점에서 권장됨.
  * 특징! [부모 A, [자식C]] + [부모 B, [자식D]] 부모가 아래있으면 자식이 아무리 떠도 안보임
     -->
