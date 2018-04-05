var orderButton = document.querySelector(".btn-action");
var pullDownMenu = document.querySelector("form");
var inn = pullDownMenu.querySelector("[name=check-in]");
var out = pullDownMenu.querySelector("[name=check-out]");
var adults = pullDownMenu.querySelector("[name=adults]");
var kids = pullDownMenu.querySelector("[name=kids]");
var storage = localStorage.getItem("inn");

pullDownMenu.classList.add("order-form-hide");

orderButton.addEventListener("click", function(evt) {
  evt.preventDefault();
  pullDownMenu.classList.toggle("order-form-show");
  inn.focus();
  if (storage) {
    inn.value = storage;
    out.focus();
  } else {
    inn.focus();
  }
});

pullDownMenu.addEventListener("submit", function(evt) {
  if ((!inn.value) || (!out.value)) {
    evt.preventDefault();
    pullDownMenu.classList.remove("order-form-error");
    pullDownMenu.offsetWidth = pullDownMenu.offsetWidth;
    pullDownMenu.classList.add("order-form-error");
  } else {
    localStorage.setItem("inn", inn.value);
  }
});

window.addEventListener("keydown", function(evt) {
  if (evt.keyCode === 27) {
    if (pullDownMenu.classList.contains("order-form-show")) {
      pullDownMenu.classList.remove("order-form-show");
    }
  }
});
