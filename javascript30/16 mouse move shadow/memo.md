- confusing mouse event properties

el.offsetLeft : the number of pixels that the upper left corner of the current element is offset to the left within the HTMLElement.offsetParent node.
el.offsetWidth == border + padding + scrollbar

[What is the difference between screenX/Y, clientX/Y and pageX/Y?](https://stackoverflow.com/questions/6073505/what-is-the-difference-between-screenx-y-clientx-y-and-pagex-y#:~:text=pageX%2FY%20gives%20the%20coordinates,the%20screen%20in%20device%20pixels.)

- event.offsetX : x-coord of the mouse pointer, relative to the **target** element.
- event.pageX/Y :  gives the coordinates relative to the **<html>(document) element** in CSS pixels
- event.clientX/Y == event.x/y : coordinates relative to the **viewport(browswer window)** in CSS pixels

```javascript
const {offsetWidth: width, offsetHeight: height} = hero;
// cosnt width = hero.offsetWidth;
// const height = hero.offsetHeight;
```