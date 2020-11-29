const btnToggle = document.querySelector(".js-btn-toggle");
const navContainer = document.querySelector(".nav");
const snsContainer = document.querySelector(".sns");

const VISIBLE_CLASSNAME = "active";

function toggleVisibility() {
  navContainer.classList.toggle(VISIBLE_CLASSNAME);
  snsContainer.classList.toggle(VISIBLE_CLASSNAME);
}
btnToggle.addEventListener("click", toggleVisibility);
