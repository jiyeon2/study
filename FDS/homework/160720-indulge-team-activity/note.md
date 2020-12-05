### html validation check

1. Warning: This document appears to be written in English but the html start tag has lang="ko". Consider using lang="en" (or variant) instead.
From line 1, column 16; to line 2, column 16
`TYPE html>↩
<html lang="ko">↩<head`
For further guidance, consult Declaring the overall language of a page and Choosing language tags.

2. Error: Element nav not allowed as child of element button in this context. (Suppressing further errors from this subtree.)
From line 28, column 5; to line 28, column 26
"메뉴">↩              <nav class="main-nav">↩                 
Contexts in which element nav may be used:
Where flow content is expected.
Content model for element button:
Phrasing content, but there must be no interactive content descendant.

Error: The element a must not appear as a descendant of the button element.
From line 30, column 8; to line 30, column 43
">↩                         <a href="" class="main-nav-item on">Focus<
Error: The element a must not appear as a descendant of the button element.
From line 31, column 8; to line 31, column 40
a>↩                         <a href="" class="main-nav-item">Carnel
Error: The element a must not appear as a descendant of the button element.
From line 32, column 8; to line 32, column 40
a>↩                         <a href="" class="main-nav-item">Hobby 
Error: The element a must not appear as a descendant of the button element.
From line 33, column 8; to line 33, column 40
a>↩                         <a href="" class="main-nav-item">Produc
Error: The element a must not appear as a descendant of the button element.
From line 34, column 8; to line 34, column 40
a>↩                         <a href="" class="main-nav-item">Intere

4. Error: Bad value  for attribute action on element form: Must be non-empty.
From line 41, column 5; to line 41, column 44
tton>↩              <form action="" class="main-top-search">↩                   
Syntax of URL:
Any URL. For example: /hello, #canvas, or http://example.org/. Characters should be represented in NFC and spaces should be escaped as %20. Common non-alphanumeric characters other than ! $ & ' ( ) * +  - . / : ; = ? @ _ ~ generally must be percent-encoded. For example, the pipe character (|) must be encoded as %7C.