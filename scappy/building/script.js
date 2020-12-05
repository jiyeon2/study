const house = document.querySelector(".building");

house.addEventListener("click", hide);
house.addEventListener("hide", function (e) {
  console.log(e);
  if (confirm("Do you like this house?")) {
    e.preventDefault();
  }
});

function hide() {
  let event = new CustomEvent("hide", {
    cancelable: true,
    detail: {
      description: "hide house",
    },
  });

  const returnFromDispatchEvent = house.dispatchEvent(event);
  console.log(returnFromDispatchEvent);
  if (!returnFromDispatchEvent) {
    alert("It won't be disappear if you like it.");
  } else {
    house.hidden = true;
    document.querySelector("h1").textContent = "house removed";
  }
}
