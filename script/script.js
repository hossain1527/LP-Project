/******************Hide collapsible menu when clicking on any part of the body*****************/

$(function () {
  $("#navbarToggle").blur(function (event) {
    let screenWidth = window.innerWidth;
    if (screenWidth < 768) {
      $("#menu").collapse("hide");
    }
  });
});
