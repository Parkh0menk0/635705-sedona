var orderButton = document.querySelector(".btn-action");
var pullDownMenu = document.querySelector("form");
var In = pullDownMenu.querySelector("[name=check-in]");
var Out = pullDownMenu.querySelector("[name=check-out]");
var adults = pullDownMenu.querySelector("[name=adults]");
var kids = pullDownMenu.querySelector("[name=kids]");
var storage = localStorage.getItem("In");

pullDownMenu.classList.add("order-form-hide");

orderButton.addEventListener("click", function(evt) {
  evt.preventDefault();
  pullDownMenu.classList.toggle("order-form-show");
  In.focus();
  if (storage) {
    In.value = storage;
    Out.focus();
  } else {
    In.focus();
  }
});

pullDownMenu.addEventListener("submit", function(evt) {
  if ((!In.value) || (!Out.value)) {
    evt.preventDefault();
    pullDownMenu.classList.remove("order-form-error");
    pullDownMenu.offsetWidth = pullDownMenu.offsetWidth;
    pullDownMenu.classList.add("order-form-error");
  } else {
    localStorage.setItem("In", In.value);
  }
});

window.addEventListener("keydown", function(evt) {
  if (evt.keyCode === 27) {
    if (pullDownMenu.classList.contains("order-form-show")) {
      pullDownMenu.classList.remove("order-form-show");
    }
  }
});
