#day04 

## form
`<form action="#" method="GET" enctype="" name=""></form>`

- action : 입력 값이 전송되는 주소
- method : 전송방식 `Get | POST` 
    + GET 방식: 속도 빠름, 주소 길이 제한, 게시판 주소 뒤에 /게시글 번호 붙는것
    + POST 방식: 보안이 필요한 경우, 전송 내용이 많은 경우, 파일 전송할 경우 사용
        * method="POST" 일때 form 내에 `<input type="file">` 있으면 `enctype="multipart/form-data"` 

### fieldset, legend
- fieldset : 폼 내에서 요소들 그룹핑
- legend : fieldset의 제목

```
<fieldset>
        <legend>필수입력사항</legend>
        <div>
            <label for="register-id">id</label> 
            <input type="text" id="register-id" name="regi-id"  value="jiyeon" maxlength="14" disabled>
        </div>
        <div>
            <label for="register-email">E-mail</label>
            <input type="email" id="register-email" placeholder="user@email.com">
        </div>

        <div>
            <label for="register-password">password</label> 
            <input type="password" id="register-password" name="regi-password" placeholder="sdf">
        </div>
</fieldset>
```

###label
- label : form 내부 요소에 대한 제목 같은것!

- 명시적 방식 : caption에 해당하는 부분만 label 안에 포함. 요소의 id를 이용해 label과 연결한다. id를 입력해야 하므로 코드 길이가 길어짐. 국내 일부 스크린리더는 명시적방식으로 표현된 label만 읽어주므로 접근성 관점에서 명시적 방식 사용 권장.
```
<input type="radio" id="register-male" name="gender"> 
<label for="register-male">Male</label>
```

- 암시적 방식 : caption과 해당 요소를 label 안에 포함하여 연결함. 
`<input type="radio", "checkbox">` 같은 경우 일일이 id 달면 코드 길어지므로 암시적 방식 사용.
```
<label>
    <input type="radio" name="gender" value="1">male
</label>
```

### input
`<input type="radio">`
 성별처럼 소수개 중 하나 선택할 때 씀. name 속성 값을 동일하게 지정해야 하나만 체크됨!
 
`<input type="checkbox">`
 이건 여러개 체크할 수 있는 체크박스

서버에 입력된 값이 전송될 때 `name값 = value값` 이렇게 전송됨
name은 백엔드 하시는분과 상의해서 정하기

`<input type="file" multiple>`
파일 전송. multiple속성 쓰면 여러 파일 한번에 전송 가능

`<input type="text">`
텍스트 입력 창. name요소 쓰지 않으면 post방식일 때 주소 뒤쪽에 붙지 않는다!

`<p contenteditable="true">`
p태그 내용을 사용자가 수정할 수 있다. 어디에 쓰이는걸까?

---

###form, table 실습!

- [테이블 레이아웃 안에 폼 요소를 넣어 만들어보기!](https://github.com/jiyeon2/TIL/blob/master/160621/study_form1.html)

![보고 따라 만든 폼](http://www.uwec.edu/help/Acrobat9/Images/dialog/submit-form.gif)

**validator error 났던 부분**
```
<form action="">
    <table></table>
</form>  <!--form 요소 안에 table이 있어야 하나?  -->
```

```
<table>
    <tr><td colspan="2"></td></tr>
    <tr><td colspan="2"></td></tr>
    <tr><td rowspan="3"></td> <td></td> </tr> <!-- 이부분 잘못써서 오류남-->
    <tr><td></td></tr>
    <tr><td></td></tr>
</table>
```

>style태그는 헤드 안에!

- 부모요소가 체크되었을 때만 자식요소가 체크 가능하게 하려면 javascript 써야할까?? 
