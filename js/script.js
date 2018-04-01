var orderButton = document.querySelector(".order-open-btn");
var pullDownMenu = document.querySelector(".order-form");

if (orderButton) {
  if (pullDownMenu) {
    pullDownMenu.classList.add("order-form-hide");
  };
  orderButton.addEventListener("click", function(event) {
    event.preventDefault();
    pullDownMenu.classList.toggle("order-form-hide");
    pullDownMenu.classList.toggle("order-form-show");
  });
};
