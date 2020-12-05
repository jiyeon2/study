/*--------------------------------------
 compare-to-value-reference.js
 -----------------------------------------*/ 

 //값을 복제하는 경우
 // 변수 button_text에 복사되는 값은 문자유형의 데이터임
 var button_text = query('[type="button"]').firstChild.nodeValue;

 // 자료형 데이터 유형은 데이터가 참조됨


 //------------------------------------------------------------ 
 // 변수에 복사/참조되는 값의 유형을 확인하기 위해 실습

 // 문서에서 .brand 요소를 찾아 변수 brand에 참조(reference)
 var brand = query('.brand');
 //  String literal data(primitive data) - 복사됨
 // 변수 brand_txt 에 복사(copy)된 값은 문자 유형의 데이터이다
 var brand_txt = brand.firstChild.nodeValue; 

/*--------------------------------------
데이터 유형 변환
1. 숫자 -> 문자
-----------------------------------------
		9 + '' = "9"
		"'"+9+"'" '9'
		''+9+'' 9
1.1. '데이터'  ex) '9' 9는 숫자형이지만 따옴표로 감싸주면 문자9로
1.2 데이터 + '' ex) 9 + '' // 9
1.3 String(데이터) ex) String(9) 
1.4 var value = 데이터; value.toString(); ex) var num=9; num.toString()
	9..toString()
	9 .toString()
	(9).toString()  모두 '9'반환 - 여기 쓰는 괄호는 데이터 감싸는 래핑, 캡슐같은것. 함수뒤의 실행()과 다름
주의!! 숫자나 객체리터럴,함수리터럴(리터럴:그 자체의 값)의 경우에는 오류가 발생
오류가 발생하는 객체는 괄호()를 사용하여 데이터를 감싼 후 테스트
-----------------------------------------*/

/*--------------------------------------
데이터 유형 변환
2. 문자(숫자형 문자) -> 숫자
--------------------------------------
문자화되는 + 기호 말고 /,-,*은 숫자로 바뀜(숫자형 문자인경우만 해당)

"3rem" - 0 // NaN, 문자값이 포함된 숫자는 연산 안됨

+"문자형 숫자" 해도 숫자형됨

parseInt($0.style.fontSize, 10) 문자형숫자의 단위제거, 10진수로 출력(진수는 8, 10, 16진수 사용가능)
parseFloat(문자형숫자-소수점자리도, 진수) 

$0.style.fontSize.split
---------------------------------------------------------console에서 연습한거
var font= $.style.fontSize
VM128:1 Uncaught TypeError: Cannot read property 'fontSize' of undefined(…)(anonymous function) @ VM128:1
font
undefined
$0.style.fontSize
"16.2445px"
parseFloat()$0.style.fontSize, 10)
VM178:1 Uncaught SyntaxError: Unexpected identifier
parseFloat($0.style.fontSize, 10)
16.2445
parseInt($0.style.fontSize, 16);
22
$0.style.fontSize.split($0.style.fontSize, 'px')
[]
$0.style.fontSize.split('px')
["16.2445", ""]
$0.style.fontSize.split('px')[0]
"16.2445"
+$0.style.fontSize.split('px')[0]
16.2445
-$0.style.fontSize.split('px')[0]
-16.2445
/$0.style.fontSize.split('px')[0]
VM260:1 Uncaught SyntaxError: Invalid regular expression: missing /
%$0.style.fontSize.split('px')[0]
VM261:1 Uncaught SyntaxError: Unexpected token %
$0.style.fontSize.split('px')[0]%1
0.2444999999999986
$0.style.fontSize.split('px')[0]
"16.2445"
$0.style.fontSize.split('px')[0] % 1
0.2444999999999986
5 % 2
1
5%3
2
5%2
1
-----------------------------------------*/

/*--------------------------------------
데이터를 불리언데이터로 바꿀때
Boolean(데이터 )
!!데이터
-----------------------------------------*/