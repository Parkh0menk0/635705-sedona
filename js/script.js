var orderButton = document.querySelector(".btn-action");
var pullDownMenu = document.querySelector("form");
var checkIn = pullDownMenu.querySelector("[name=check-in]");
var checkOut = pullDownMenu.querySelector("[name=check-out]");
var adults = pullDownMenu.querySelector("[name=adults]");
var kids = pullDownMenu.querySelector("[name=kids]");
var storage = localStorage.getItem("checkIn");

pullDownMenu.classList.add("order-form-hide");

orderButton.addEventListener("click", function(evt) {
  evt.preventDefault();
  pullDownMenu.classList.toggle("order-form-show");
  checkIn.focus();
  if (storage) {
    checkIn.value = storage;
    checkOut.focus();
  } else {
    checkIn.focus();
  }
});

pullDownMenu.addEventListener("submit", function(evt) {
  if ((!checkIn.value) || (!checkOut.value)) {
    evt.preventDefault();
    pullDownMenu.classList.remove("order-form-error");
    pullDownMenu.offsetWidth = pullDownMenu.offsetWidth;
    pullDownMenu.classList.add("order-form-error");
  } else {
    localStorage.setItem("checkIn", checkIn.value);
  }
});

window.addEventListener("keydown", function(evt) {
  if (evt.keyCode === 27) {
    if (pullDownMenu.classList.contains("order-form-show")) {
      pullDownMenu.classList.remove("order-form-show");
    }
  }
});
