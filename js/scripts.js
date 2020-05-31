$(document).ready(function () {
  ("use strict");
  $(".nuestros-servicios div:first").show();
  $(".servicio nav a:first").addClass("activo");

  $(".servicio nav a ").on("click", function () {
    var enlace = $(this).attr("href");
    $(".nuestros-servicios div").hide();
    $(enlace).show();
    return false;
  });
});
