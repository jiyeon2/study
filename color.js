const root = document.documentElement;
const form = document.forms.color;
const colorInputs = form.querySelectorAll("input[type=color]");
const defaultColors = {};

function initColorValue() {
  colorInputs.forEach((input) => {
    const varName = input.name;
    const thisColor = window
      .getComputedStyle(root)
      .getPropertyValue(`--${varName}`);

    console.log({ varName, thisColor });
    defaultColors[varName] = thisColor;
    input.value = thisColor;
    // input[type=color] 초기화할때 생기는 경고
    // color.js:14 The specified value " #d81b60" does not conform to the required format.
    // The format is "#rrggbb" where rr, gg, bb are two-digit hexadecimal numbers.
  });
}
initColorValue();

form.addEventListener("input", (e) => {
  root.style.setProperty(`--${e.target.name}`, e.target.value);
});
