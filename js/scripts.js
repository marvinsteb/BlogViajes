$(document).ready(function () {
  ("use strict");
  $(".nuestros-servicios div:first").show();
  $(".servicio nav a:first").addClass("activo");
  $(".servicio nav a ").on("mouseenter", function () {
    $(".servicio nav a ").removeClass("activo");
    var enlace = $(this).attr("href");
    $(".nuestros-servicios div").fadeOut();
    $(enlace).fadeIn();
    $(this).addClass("activo");
    return false;
  });
});
